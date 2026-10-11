# Plan: "Hydrated workflow" RCA engine (gpt-5.1)

## Context

The RCA chatbot for Zuper's workflow builder still misses on accuracy. The cause is that the model has to *decide what to fetch*, so it sees pieces of the workflow instead of the whole thing. A workflow-level question ("why did this fail", "why did it take the false branch") depends on the entire flow.

The proposal: code does all the evidence gathering, deterministically. The model receives one complete, self-contained pack (the executed workflow JSON, with every node's referenced data attached to that node) and a short, bounded tool loop only for data that was trimmed for size.

**What already exists in `src/mastra/rca` (and is reused):**
- `backtrace.ts` resolves references backward from one target node. It is limited to depth 8 and 40 node-runs and keeps only ~300–1500 char previews. It is not a whole-workflow view.
- `analyse.ts` makes one tool-less call and shrinks the trace with `compactTrace`.
- `investigate.ts` is a tool-using investigator, followed by structured output and `verify.ts`, which checks that every evidence quote is verbatim in the ledger.
- `ctx.getNodeExecutionData(uid, iteration)` already memoises per-node fetches, and the execution summary is cached.
- `resolveInput.ts` already parses `getLatestNodeData(...)` expressions.
- `shape.ts` has `summarizeShape` and `selectValue`.
- `toolLogic.ts` has `capResult` and `DROP_FIELDS`.
- `rcaTools.ts` has `get_node_data`, which takes path selectors.
- Model is `openai/gpt-5-mini` via `RCA_MODEL`.

**The new engine is the delta:** the whole-workflow hydration, a workflow-understanding pre-pass, a large-array trimmer, the new answer format, and a bounded evidence loop. It is added as `RCA_ENGINE=hydrated`, with the current pipeline kept as fallback and A/B baseline.

**Findings from the sample (`d6dceea4…txt`)** that shape the design:
- It has two call types. `GET …/executions/{ex}/summary` returns `workflow_execution` (status, `failed_node_uid`, `workflow_data` with 16 nodes, `internal_connections` with input/output node lists per node, and `meta_data.variables`) plus a `node_execution[]` status list. `GET …/nodes/{uid}` returns `input_data` and `execution_data` for one node.
- Node payloads range from 1.5 KB to 120 KB. Four exceed 55 KB. The workflow JSON itself is ~42 KB.
- References use the node's `action_name` (`getLatestNodeData('Get Record')`), not its uid.
- Code nodes declare them in `form_fields.inputs.value[]` (`variable_name`, `expression`, `node`) and read them as `$input.x`.
- One node uid can be fetched more than once (`376af848` appears twice), so iterations matter.
- The failed node's `input_data` and `execution_data.form_fields` are already resolved. The failure here is `PUT /api/appointments` returning HTML 404 `Cannot PUT /api/appointments`, with the URL built in the upstream `Construct` Code node.

## Pipeline (stages in order)

### 1. Workflow understanding (one small LLM call, cached)
- New `rca/understand.ts`.
- **Input:** the workflow JSON stripped of cosmetics (position, color, node_icon, credentials, pinned_data), keeping node names, types, configs, Code source, connections and variables.
- **Output (zod):** `{ purpose, groups: [{ name, goal, node_names[], summary }] }`. The groups are the "3–4 nodes doing one activity" idea, as ordered stages.
- **Cache key:** `workflow_uid + version_id`. An executed version is immutable, so it can be cached for a long time. Start in-process, add a Postgres table in phase 2, because Vercel instances don't share memory.
- **Model:** gpt-5.1, low effort.

### 2. Reference hydration (pure code, no LLM): new `rca/hydrate.ts`
1. Order the executed nodes from the trigger forward, using `internal_connections` and `node_execution` order. Skip nodes that did not run, and mark them `executed:false`.
2. For each executed node, extract all references. Reuse the expression parsing in `resolveInput.ts` (confirm during implementation whether it exposes the parsed refs; otherwise export a small `extractRefs`).
   - Scan every `form_fields` string, including Code-node `inputs.value[].expression` (keyed by `variable_name`).
   - Scan nested fields such as HTTP url, headers, body and If/Else conditions.
   - Also record `$.getVariable('X')` against `meta_data.variables`.
3. Dereference each ref through the existing memoised `ctx.getNodeExecutionData`. Fetch with bounded concurrency (about 6). A node's data is fetched once and reused by every node that references it.
   - Take the value at the referenced path, so the node sees exactly what its expression saw.
   - Be iteration-aware: use the latest iteration that ran before this node, as `getLatestNodeData` does.
4. Attach the result to the node: `references_node_data: { "<expression or variable_name>": { from_node, iteration, value } }`.
   - On a failed lookup, store `{ error }` instead of a value.
   - Also attach a compact `execution` block to each executed node: status, iteration, its own error, and resolved `form_fields` (empty defaults dropped). The failed node and its `input_data` always get this in full.
5. Dedupe in the prompt. If the same expression and iteration was already attached to an earlier node, later nodes get `{ same_as: "<node>.<key>" }` instead of a second copy. This saves a lot of tokens when one 57 KB Get Job is read by 5 nodes.

### 3. Large-data trimmer: new `rca/trim.ts`
- `trimLarge(value, budget)` walks the object and finds large arrays (by serialized size or length).
- It keeps the **first element** and replaces the rest with a marker. JSON has no comments, so the marker is an extra sentinel element: `"// 49 more objects removed due to context size. If needed call get_node_data(node, path) for the full data."` The marker also carries `{ removed: 49, node, path }` so the tool call is exact.
- Largest array first, until the node fits its per-node budget and the whole pack fits the global budget. Both are constants in `config.ts` and tunable; gpt-5.1's context allows a generous default.
- Very long strings are truncated with a length note. `DROP_FIELDS` from `toolLogic.ts` is reused for cosmetic keys.
- **The trimmer never touches the failed node's error or inputs, or a Code node's source.**

### 4. Pack assembly: `rca/hydratedPack.ts`, replacing `compactTrace` in this engine
The prompt context:
1. The hydrated workflow JSON: the original executed workflow plus `references_node_data` and `execution` on each node, plus variables.
2. The executed flow: ordered node-runs with status and iteration, loop iteration counts, If/Else/Split decisions (reuse `getExecutionWorkflowGraph` / `BranchDecision`), and the failed node uid.
3. The workflow-understanding output (purpose and groups).
4. The user's question, plus conversation history for follow-ups.

Existing `kbStep` docs stay as a small optional section (an assumption; the request did not mention them, so confirm if you want them dropped). The existing `origin_candidates` heuristics are left out of v1 and re-tested in the eval.

### 5. Analysis with a bounded evidence loop
- Run it through the existing `investigate()` machinery, so structured output and `verify.ts` are reused. The seed becomes the hydrated pack, and only the tool set shrinks.
- New `agents/rcaEvidenceAgent.ts` (registered in `mastra/index.ts`) with only: `get_node_data` (path selectors, which already follows the "shape first, then select" pattern), `get_node_input` and `get_node_definition`. All are wrapped in `withEvidence`, so tool results enter the ledger.
- **Loop cap:** `RCA_EVIDENCE_MAX_STEPS`, default 6 (the current default is 12). It is a hard `maxSteps`, so it can't run away.
- **Prompt rules** (new `rca/hydratedInstructions.ts`):
  - Never assume or invent. Every claim needs a quoted piece of evidence taken from the pack or a tool result.
  - If the evidence sits in a trimmed region (the marker names the path), call `get_node_data` for it before concluding.
  - If it is still not conclusive after the budget, set `status: insufficient_evidence` and state exactly which data is missing. Don't guess.
- Verification stays as is: any quote not verbatim in the ledger lowers the confidence.
- **Model:** `RCA_MODEL=openai/gpt-5.1`. Reasoning effort is `medium` for analysis and `low` for the understanding pass. gpt-5.1 does not take `minimal`, so I'll confirm that `openai/gpt-5.1` is in the model registry of the installed `@mastra/core` 1.70 before relying on the default.

### 6. Answer format
Map the existing verdict schema onto your three parts, and update the prompt text and `renderVerdictHtml`:
1. **What this workflow does** (≤2 lines): from `workflow_purpose`.
2. **While trying to <activity>, <it failed / this happened>** (≤2 lines): from `headline` and `summary`.
3. **RCA**: from `root_cause`, `evidence_chain` and `fix`.

The "Explain in detail" and "Give me the fix" chips keep re-rendering the stored verdict, as today.

### 7. Caching (CLAUDE.md-style rule: never refetch what's cached)
- Node data: the existing per-execution memo.
- Hydrated pack: cached by `execution_uid`, with the same TTL as the execution (10 min if terminal, a few seconds if running). Follow-up turns reuse it instead of rehydrating.
- Workflow understanding: by `version_id`, as described in step 1.
- Token handling is unchanged: the token goes through `runSecrets`, and nothing secret goes into step inputs or the pack.

## Files

- **New:** `rca/understand.ts`, `rca/hydrate.ts`, `rca/trim.ts`, `rca/hydratedPack.ts`, `rca/hydratedInstructions.ts`, `rca/hydratedPipeline.ts`, `agents/rcaEvidenceAgent.ts`, and tests in `rca/__tests__/` (`hydrate`, `trim`, `understand`, `hydratedPipeline`).
- **Edit:** `rca/config.ts` (model, effort, budgets, step cap, engine flag), `mastra/index.ts` (register the agent), the engine selection in `rca/chatEngine.ts` (flag and fallback to the current pipeline), and the `verdict.ts` / `views.ts` prompt text and rendering.
- **Reuse:** `resolveInput.ts`, `seed.ts` (`makeResolverEnv`, `defaultIteration`), `shape.ts`, `toolLogic.ts`, `recorded.ts` (`withEvidence`), `ledger.ts`, `verify.ts`, `kbStep.ts`, `workflowGraph.ts`. Nothing is reimplemented.

## Phasing

1. `trim` and `hydrate` plus unit tests on the real sample. This is the core of the idea and needs no LLM.
2. `hydratedPack`, then the analysis with the evidence loop and the new prompt, then gpt-5.1 wiring behind `RCA_ENGINE=hydrated`.
3. The understanding pre-pass and the answer format and rendering.
4. Persistent Postgres cache for understanding, plus tuning of budgets from eval numbers.

## Verification

- `npm run typecheck`, then `npm test`. New unit tests cover:
  - Ref extraction across HTTP, If/Else and Code-node inputs.
  - Loop iterations.
  - `getLatestNodeData` of an un-run node.
  - Trim keeps the first element, adds the marker and respects the budget.
  - A failed node's error is never trimmed.
  - The dedupe `same_as` path.
- Import the new sample with `npm run rca:import` and add it to `fixtures/rca/eval-cases.json`. The expected outcome is root cause at `update Appointment` (404 on `PUT /api/appointments`), traced to the URL built by `Construct`; you should confirm the expected answer.
- Print the hydrated pack for the sample and check its size. The goal is a total that fits comfortably in gpt-5.1's context, with the four 55–120 KB nodes shrunk.
- `npm run rca:eval` runs the existing eval harness (N runs per case, thresholds: root-cause match ≥80%, quote verification ≥90%, zero confident-but-wrong). Run it for `--engine pipeline` (baseline) and `--engine hydrated` and compare accuracy, tokens, latency and tool calls per answer.
- `npm run rca:e2e` for the in-process end-to-end check with the Zuper API stubbed, including the streaming progress lines (new stages emit "Understanding workflow", "Resolving node references" and "Analysing").

## Known risks / open points

- Only two real executions have verified node data. Failed Code nodes, native Zuper node failures and failures inside loops are unseen, so the fixtures need to grow. This matters more than any prompt tuning.
- A large hydrated pack costs latency and money. `medium` effort plus the dedupe should keep it manageable, and the eval will measure it.
- Defaults I chose without asking: dedupe of repeat references instead of inlining each copy, keeping the KB docs section, and a 6-step loop cap. All are one-line config changes.
