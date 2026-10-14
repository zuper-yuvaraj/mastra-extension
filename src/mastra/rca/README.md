# RCA (root-cause analysis) of workflow executions

Finds why a Zuper workflow execution failed, or why it took an unexpected branch, by debugging the way a
person does in the workflow-builder canvas: the failed node, what it actually received, then backwards through
the executed nodes to the first one that went wrong.

## Endpoint

`POST /zuper/rca` — `Authorization: Bearer <the signed-in user's Zuper token>`

```json
{ "apiUrl": "https://<dc>.zuperpro.com", "workflowBuilderUrl": "https://<dc>.zuperpro.com",
  "workflowUid": "...", "executionUid": "...", "question": "optional, <= 500 chars", "forceRefresh": false }
```

Success: `{ ok: true, data: { status, summary, failed_node, root_cause, evidence_chain[], fix, confidence,
knowledge_used[], issues[], html, meta } }`.

| `status` | meaning |
|---|---|
| `failed` | the execution errored; `root_cause` names where the problem starts (often upstream of the failed node) |
| `unexpected_branch` | it ran, but took a path the user did not expect |
| `no_issue` | completed without errors (answered without calling the model) |
| `insufficient_evidence` | the data does not establish a cause, no execution, or still running |

Each `evidence_chain` item has a `quote` and `verified`. `verified: false` means the quote was **not found**
in anything the investigator was shown; `confidence` is lowered and `issues` says why. `html` is generated
from the verdict (not model-written) and escaped. Errors: `401 NOT_AUTHENTICATED`, `400 INVALID_REQUEST |
HOST_NOT_ALLOWED`, upstream `401/403/404` passed through, `502` other upstream failures.

## How a run works

1. **Seed (deterministic).** Status and error, the failed node, what each of its expressions resolved to against
   this run's real data (`.data.data.customer is null in Get Job`), the upstream chain, branch decisions.
2. **Investigator agent** (`agents/rcaInvestigatorAgent.ts`, `openai/gpt-5-mini`, at most 12 steps) with
   read-only tools: execution overview, node definition, node input (resolved), node data (shape, then
   selected paths), lineage, branch analysis, and the knowledge base (workflow-builder facts, Zuper API docs,
   product docs).
3. **Verify (deterministic).** Every quote must appear verbatim in the seed or a tool result (ledger); cited
   nodes must belong to the execution. Anything else is flagged and confidence drops.

## Security rules (all enforced in code and covered by tests)

- `apiUrl` / `workflowBuilderUrl` must be https hosts under `ZUPER_ALLOWED_HOST_SUFFIXES` (default
  `zuperpro.com,zuper.co`): no IPs, no `localhost`, no look-alike domains, no credentials or ports.
- `workflowUid` / `executionUid` are restricted to `[A-Za-z0-9_-]{8,64}` because they are placed in URLs.
- **The bearer token is never persisted.** Mastra stores a workflow run's input, step outputs *and* request
  context (verified), so the token is held in process memory under a one-time key (`runSecrets.ts`) and only
  that key enters the workflow; it is dropped in a `finally`. The end-to-end test inspects the stored runs.
- The result cache key includes a hash of the token, so one account is never served another's analysis.
- The agent only has read-only tools and never receives the token in a prompt or tool input.

## Configuration (env)

| Variable | Default | |
|---|---|---|
| `RCA_MODEL` | `openai/gpt-5-mini` | investigator model |
| `RCA_STRUCTURING_MODEL` | = `RCA_MODEL` | turns the final text into the structured verdict |
| `RCA_REASONING_EFFORT` | `low` | OpenAI reasoning effort (latency vs depth) |
| `RCA_MAX_STEPS` | `12` | tool-calling rounds |
| `ZUPER_ALLOWED_HOST_SUFFIXES` | `zuperpro.com,zuper.co` | allowed Zuper base-URL domains |
| `KB_PROJECT_ROOT` | found by walking up from cwd | where `knowledge-base/` and `fixtures/` live |

## Scripts

```bash
npm test                 # unit tests (extractor, resolver, verifier, tools, route helpers, cache, secrets)
npm run rca:run          # run the real agent offline on the synthetic fixture, or --fixture <file>
npm run rca:e2e          # in-process end to end: request -> route -> workflow -> real agent; Zuper API stubbed
npm run rca:chat-e2e     # the same for POST /zuper/chat on the hydrated engine: first question, chips, follow-up, streaming
npm run rca:hydrate      # offline: hydrate a captured execution, --trim to see the cuts, --pack to see what the model is sent
npm run rca:understand   # offline: the workflow summary (stage 1) with the real model, run twice to show the cache
npm run rca:capture      # save a real execution (token from ZUPER_TOKEN) to fixtures/rca/<name>.json
npm run rca:import       # same, from requests copied out of the browser network tab (no token needed)
npm run rca:eval         # the accuracy eval: real model over fixtures/rca/eval-cases.json, N runs per case
```

## What real executions taught us (samples/)

Built against 3 workflows, 3 completed executions and 3 failed executions exported from Zuper
(`realSamples.test.ts` pins these down; it skips itself when `samples/` is absent):

- Connections name nodes by their **`id`**, not `node_uid`. The graph code used to build zero edges on real data.
- A **loop** produces one `node_execution` entry per iteration (a 12-iteration loop = 13 entries for the loop,
  12 per body node). Loops are not branches: `two-b` is the body, `two-a` is done. Executed nodes are collapsed
  per node with `runs` / `total_iterations` / `failed_iterations`; a failure reports its iteration.
- An **If/Else with only one output connected** is common: when the condition selects the unconnected output the
  workflow silently ends there. Reported as `flow_ended: true`.
- **Code v2** nodes keep declared inputs as `{node, expression, variable_name}` inside a FIXED envelope; those
  expressions ARE evaluated and the code reads them as `$input.<variable_name>`.
- Native Zuper nodes (update / get record) pick the record they act on with **`source_node`: a node uid**, not
  an expression. Treated as a reference, so lineage and inputs follow it.
- The real HTTP node is `http_request` and event triggers are `zuper` / `job.status_update`, while the knowledge
  catalog says `http_request_v2` and one placeholder trigger; both are aliased.
- `execution_status` on workflow nodes (`EXECUTED` / `ERROR` / `NONE`) is **stale canvas state**, not this run
  (a node marked ERROR completed, a node marked NONE failed in the run two minutes earlier). It is ignored.
  If you know it means something else, tell us: it was left unused on purpose.
- Executions are `AUTOMATED`/`MANUAL` and `LIVE`/`DRAFT`. A draft test run executed an unpublished version.
- A failure's `error_message` can be empty (one real case). Nothing may be concluded from nothing.

### The real node-data format (confirmed)

`GET /api/workflows/{wf}/executions/{ex}/nodes/{node_uid}` returns

```
{ node_execution: { node_uid, status, input_data, execution_data, current_iteration, total_iterations, remarks } }
```

- `input_data`: what the node **received**, the previous node's `{data, node}` wrapper (null for a trigger).
- `execution_data`: what it **produced**, a `{data, node}` wrapper. An HTTP/If-Else node adds siblings of `data`:
  `form_fields` (the fields with expressions **already evaluated**, i.e. the request that was actually sent),
  `status` (the HTTP status), `error`, `output_value`, `request_data`.
- A failed HTTP node's real error is **on the node**, and can be an HTML page (`Cannot PUT /api/appointments`)
  while the execution-level `error_message` is empty. The seed's `failed_node_runtime` and `get_node_data` surface
  it (HTML reduced to text).
- `rca:import` turns requests copied from the browser network tab into a fixture (`npm run rca:import -- dump.txt
  --name x --root-cause "Construct" --category CODE_ERROR`); it redacts credentials (including the secret in
  `{header_key: 'x-api-key', header_value: ...}` pairs), emails and phone numbers. Names and free text are NOT redacted.

### Loops (confirmed on a real execution)

A node inside a loop is fetched **per iteration**: `GET .../nodes/<uid>?iteration=N` (not an array of runs).
`iterations` come from the summary: a loop node has one more (the final "done" pass) than its body, e.g. a
2-iteration loop is `Loop: 0,1,2`, body `0,1`. On a loop node, `execution_data.data` is the **current element**
(`"Roofing"` on iteration 0, `"Gutters"` on iteration 1), beside `current_iteration` / `total_iterations`;
`overall_data` (the full array) is on iteration 0 only. Its `input_data` on iteration k>0 is the loop body's result
from iteration k-1. The tools take an `iteration` (default: the one the node failed in, else the last) and list
`available_iterations`; a looped source is read at the **same iteration** as the node reading it;
`[$.getCurrentLoopIndex()]` means "this iteration".

### Result on the first real failure with node data

`update Appointment` PUT `.../api/appointments` and got 404. The Code node `Construct` builds that URL without the
appointment uid (its sibling association URL has it); the API docs say `PUT /appointments/{appointment_uid}`.
Over 6 runs of the investigator: **root-cause node correct 6/6** (Construct). The category matches the ground truth
(`CODE_ERROR`) in about 1 of 3 runs after the category definitions were tightened; the others say
`WRONG_EXPRESSION_PATH`, `BAD_UPSTREAM_DATA` or `MISSING_DATA`. Confidence is high or medium, never high with an
unverified quote. One sample is not an accuracy figure.

### Behaviour without node data

The samples are summaries only. Run on them (`npm run rca:run -- --summary <file>`) the investigator is told, for
every node, that its data could not be loaded. Results on the 3 real failures: it reports the failure that the
error message itself explains (a platform rule about clearing a schedule) at medium confidence, and says
`insufficient_evidence` for the two it cannot explain, naming the node whose output it would need. One early run
blamed "the platform" because every fetch had failed, so the verifier now treats "could not be loaded" as a gap, never
as evidence: a failure verdict needs a verified, informative quote from the failed node, the root-cause node or the
execution's own error, and any unreadable data caps confidence at medium.

## The eval (`npm run rca:eval`)

`fixtures/rca/eval-cases.json` labels each case with what a person established (`status`, `root_cause_node`,
`category`; several acceptable values allowed). A case is a fixture (sanitized capture, or `synthetic`) or a raw
`summary` file (no node data), plus an optional `question`. Labels live apart from the sanitized data so they can
change without re-importing a capture. Each case is run `--runs N` times (default 3) because the agent varies, and
scored by `rca/evalScore.ts` (unit-tested): status, root-cause node and category match rates, the share of cited
quotes that were really in the data, whether the verifier found nothing wrong, tool calls and seconds.

The run **fails** (exit 1) unless: root-cause node match >= 80%, status match >= 80%, quote verification >= 90%,
and **zero confident-but-wrong answers** (said "high" while wrong about the status or the node). Trust is checked
first on purpose: a wrong confident answer is worse than a missed one, and a quote that is not in the data is worse
than either. A wrong category with the right node is only a category miss. `--case <id>` runs one case, `--json
<file>` saves the numbers (use it to compare a model or prompt change: `RCA_MODEL=openai/gpt-5.6 npm run rca:eval`).

Cases built on `samples/` skip themselves when that folder is absent.

## Known limits

- **Node data is confirmed for two real executions only** (`fixtures/rca/`): a failed HTTP node, and a completed
  run with a 2-iteration loop (3 of 24 nodes captured). Still unseen for real: a failed **Code** node's error, a
  failed **native Zuper** node, an If/Else's **condition input**, a failure **inside a loop**, and loop nodes beyond
  these two. The eval needs real captures of each.
- Answers vary between runs (the same failure was once categorised as `MISSING_DATA`, once as
  `BAD_UPSTREAM_DATA`); the root-cause node was the same. Measure on real fixtures before trusting categories.
- Latency was 20-35 s per run at `low` reasoning effort (54-78 s at the default), on one fixture.

## Conversational chat (`POST /zuper/chat`)

The extension chat is served by the same investigator. Enable it with `ZUPER_CHAT_ENGINE=rca` (unset keeps the
legacy orchestrator, so rolling back is a config change).

- **One agent for everything.** Modes: `EXECUTION_FAILED`, `BRANCH_QUESTION`, `QUESTION` (a specific question
  about a healthy run), `WORKFLOW_QUESTION` (no run: answered from the live definition via
  `definitionContext.ts`; runtime tools say plainly that nothing ran). Generic "did it fail?" on a healthy run
  is answered from the status, with no model call.
- **Stateless client, short server memory.** The extension resends the turns; the server keeps, per
  account + workflow + execution for 15 minutes in process memory, the last verified verdict and the evidence
  the investigator was shown (`conversation.ts`), so earlier quotes still verify and follow-ups build on
  checked facts.
- **Crisp first.** The reply is the summary (plus one honest caveat when confidence is not high). The chips
  "Explain in detail" / "Give me the fix" re-render the stored verdict (`views.ts`) with no model call.
- **Streaming.** With `stream: true` the response is NDJSON: `progress` lines (one per tool call, derived from
  the evidence ledger), then `result` or `error`. Closing the connection aborts the investigation. Without it,
  the response is the legacy `{ok, data:{reply, suggestions}}`.
- **Limits.** Hosts are checked against the Zuper allow-list; 20 investigations/minute and 2 concurrent per
  account (`limits.ts`), answered with 429 `RATE_LIMITED` / `TOO_MANY_INVESTIGATIONS`.

## Evidence-complete pipeline (`RCA_ENGINE=pipeline`)

The tool-using investigator chose what to fetch and, on workflows with 20+ nodes, saw only a few nodes. The
pipeline moves all retrieval into code and calls the model once, to explain a complete evidence pack.

```
prepare    kbStep.ts   documentation for the workflow's modules (exact lookups first, vector search for the rest)
           target.ts   where to start: the failed node, a node the question names, or - for something that
                       did not happen - the If/Else, Loop or filter that blocked it, found from recorded decisions
backtrace  backtrace.ts  follow EVERY reference back from the target to its origin (transitively, per loop
                       iteration), fetch all that node data in parallel, resolve every input to its real value,
                       flag the nodes that produced bad output from good input (origin_candidates) and the
                       nodes that fed the failed node (feeds_failed); HTTP calls to a documented endpoint
                       get a doc_check (documented fields not sent)
analyse    analyse.ts  ONE model call (rcaAnalystAgent, no tools) over the pack: execution, workflow, target,
                       trace, docs
finish     verify.ts   every quote must be verbatim in the trace; documentation text never counts as evidence;
                       an upstream node whose own data could not be read is never confirmed as the cause;
                       reference links come from the knowledge-base step, never from the model
```

- `pipeline.ts` holds the stages; `workflows/rcaPipelineWorkflow.ts` runs them as a Mastra workflow so each
  shows in traces. Steps pass only an opaque run key: Mastra stores every step's input and output, and the
  trace contains the customer's data, which stays in process memory for the run.
- The first question of a chat runs the pipeline; follow-ups use the tool-using agent with the stored
  evidence (never a second full analysis). Anything the pipeline cannot place falls back to the agent.
- The answer is laid out as three parts: what the workflow does; "While trying to X, node failed" and what
  happened; the RCA (the root cause in words, then the verified lines that led to it); then confidence and
  reference links. Chips: "Show evidence", "Give me the fix".
- Compare engines with `npm run rca:eval -- --engine pipeline` and without `--engine`; try one case with
  `npm run rca:run -- --fixture <file> --engine pipeline`.

## Hydrated engine (`RCA_ENGINE=hydrated`)

The pipeline above follows references back from one target node. The hydrated engine gives the model the
WHOLE workflow instead, with every node's references already dereferenced, so a question about any node,
branch or value is answered from the same evidence, and nothing depends on a "target" being found first.
Code builds everything; the model is called once, with a small bounded tool for data that was cut for size.

```
1 understand  understand.ts      one small call (rcaUnderstandAgent): what the workflow is for, and which nodes
                                 work together on one activity. Definition only, cached per workflow version.
2 hydrate     hydrate.ts         every executed node gets `references_node_data` (each expression it reads ->
                                 the real value, from which node and loop iteration, or why it did not resolve)
                                 and `execution` (status, HTTP status, error, the fields it ran with, what the
                                 failed node received). Variables never get a value. Credentials are redacted.
3 trim        trim.ts            data over budget is cut, largest array first: the first item stays, then a
                                 "// 12 more objects removed (13 in total) ..." comment with an index of what
                                 was removed and the exact get_node_data call that fetches one item. Data that
                                 fits is never touched; definitions, errors and statuses are never cut.
4 pack        hydratedPack.ts    repeats become pointers (`same_as`), cosmetics are dropped, and the message is
                                 laid out in sections. PACK_LEGEND (how to read it) is shared with the instructions.
5 analyse     hydratedPipeline.ts one call (rcaEvidenceAgent, gpt-5.1) with ONE tool, get_node_data; on its last
                                 step the tool is switched off, so it always ends with an answer.
              verify.ts          every quote must be verbatim in the pack or a tool result; documentation never
                                 counts as evidence; a quote that fails is sent back to the model ONCE with
                                 exactly what is wrong (RCA_QUOTE_REPAIRS), then the verdict stands, marked.
```

- A node with a recorded branch decision is a confirmed cause even when its own data could not be read (the
  decision comes from the execution summary); any other upstream node whose data could not be read is not.
- Follow-up questions use the same engine from the cached pack: no new Zuper calls, no second summary.
- Anything it cannot place (no execution, a definition-only chat, a pack that cannot be built) goes to the
  investigator or the older pipeline, as before.
- Try it: `npm run rca:run -- --fixture fixtures/rca/update-appointment-404.json --engine hydrated`; see exactly
  what the model is sent with `npm run rca:hydrate -- --fixture <file> --pack --out pack.txt`; compare with
  `npm run rca:eval -- --engine hydrated`; run the whole chat route offline with `npm run rca:chat-e2e`.

#### The chat router: three kinds of answer, two audiences (hydrated engine only)

Every message is routed first (`intent.ts`): rules for the clear cases (the chip texts, "root cause"/"RCA",
"why did it fail"), then one small model call, then code guardrails (no run: chat only; model down or slow:
explain on a failed run, else chat; audience business). Older engines are not routed and answer as before.

| Type | Asked like | Answer |
|---|---|---|
| **explain** | "Why did this fail?", "what happened?" | what the workflow does / "While trying to…" (longer) / references, a confidence line, chip *Find the root cause (RCA)*. No RCA. |
| **rca** | "root cause", "RCA", "find the reason", "in detail" | purpose / "While…" (short) / RCA / references, a confidence line, chips *Show evidence* and *Give me the fix* |
| **chat** | a doubt about a step's data, "what does Construct do?", "what is a loop?", "thanks" | a free-form reply, no template, no chips. Questions about the run use the same pack; small talk and Workflow Builder help take a light, quick path with no run data. Unrelated topics are politely declined. |

The **audience** is chosen per message. *Business* is the default: no step types, expressions, JSON, status codes
or ids ("step", not "node"); a leak is sent back to the model once (`audience.ts`). *Technical* is chosen when the
wording is technical (names fields, expressions, codes, APIs). The explain answer also computes the root cause,
so the RCA chip re-renders from the stored result with no model call, when that was written for the same audience.
Check the router with `npm run rca:intent-eval` (labelled messages in `fixtures/rca/intent-cases.json`).

| Variable | Default | |
|---|---|---|
| `RCA_ENGINE` | `pipeline` | set `hydrated` to serve chat with this engine |
| `RCA_ANALYSIS_MODEL` | `openai/gpt-5.1` | the model that reads the pack |
| `RCA_ANALYSIS_EFFORT` | `medium` | its reasoning effort |
| `RCA_EVIDENCE_MAX_STEPS` | `6` | model steps, counting the answer: at most this minus one tool rounds |
| `RCA_QUOTE_REPAIRS` | `1` | times a bad quote may be sent back to the model (0 = off) |
| `RCA_INTENT_MODEL` / `_EFFORT` / `_TIMEOUT_MS` | `openai/gpt-5-mini` / `low` / `8000` | the router's small call (only when the rules cannot decide) |
| `RCA_CHAT_MODEL` / `_EFFORT` | the analysis model / `low` | the light chat call (small talk, Workflow Builder help) |
| `RCA_UNDERSTAND_MODEL` / `_EFFORT` / `_TTL_MS` | `openai/gpt-5.1` / `low` / 24 h | the workflow summary |
| `RCA_TRIM_NODE_CHARS` | `16000` | budget for the data one node read or produced |
| `RCA_TRIM_CRITICAL_FACTOR` | `3` | the failed node's data may be this many times larger |
| `RCA_PACK_CHARS` | `160000` | budget for the whole pack (about 40k tokens) |
| `RCA_HYDRATE_CONCURRENCY` | `6` | node-data fetches in flight at once |

Known limits: only two real executions with node data have been captured, so failed Code nodes, native Zuper
node failures and failures inside loops are unseen; a run takes 30 to 50 s (the older pipeline about 18 s); the
budgets above are starting points, to be tuned from `rca:eval` on real executions.
