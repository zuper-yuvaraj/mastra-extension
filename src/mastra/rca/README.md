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
npm run rca:capture      # save a real execution (token from ZUPER_TOKEN) to fixtures/rca/<name>.json
```

## Known limits

- Tested on a synthetic execution only. The node-execution API's exact response envelope is assumed to be the
  documented `{node, data}` wrapper (`resolveInput.toWrapper` looks for it in a few places and sets
  `shapeAssumed` when it has to guess). Real captured executions are needed to confirm and to measure accuracy.
- Answers vary between runs (the same failure was once categorised as `MISSING_DATA`, once as
  `BAD_UPSTREAM_DATA`); the root-cause node was the same. Measure on real fixtures before trusting categories.
- Latency was 20-35 s per run at `low` reasoning effort (54-78 s at the default), on one fixture.
