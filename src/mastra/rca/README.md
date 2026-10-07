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
