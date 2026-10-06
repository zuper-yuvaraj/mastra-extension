# Zuper Knowledge Base

Raw Zuper knowledge used by the RCA / AI Workflow Builder agents. Everything outside `.generated/` is source material; everything derived from it can be rebuilt at any time.

## Layout

| Path | What it is | How it will be used |
|---|---|---|
| `zuper-api-docs/` | API reference pages (`api-reference/<area>/<module>/<endpoint>.md`), each wrapping a full OpenAPI document. `_manifest.json` lists title/url/file per folder. | Distilled into compact records, then searched. |
| `zuper-docs/` | Business / help-center pages (Accounting, Projects, Dispatch, Workflow_builder, ...). | Chunked by heading and searched (planned). |
| `workflow-builder/` | JSON extracted from the workflow worker/frontend code: node catalog, field schemas, code-node runtime, expression rules, trigger filters. | Exact lookup by key, not similarity search (planned). |
| `.generated/` | Output of the distiller. Derived, never hand-edited. | Input to the vector index. |

## API docs: distillation

A raw API page can be 150 KB (mostly a huge example response). `scripts/kb-distill.ts` reduces each page to one record of roughly 3-4 KB:

- method and path, description, parameters (the `authorization` header is dropped)
- request body field paths and a size-bounded example
- response field paths and a size-bounded example (arrays cut to one item, long strings shortened)
- `associations`: other Zuper modules the response points at (customer, invoice, product, ...), with the field path where each appears

```bash
node scripts/kb-distill.ts                                   # all pages
node scripts/kb-distill.ts work-order-management/jobs        # one or more path prefixes
```

Output: `knowledge-base/.generated/api/<area>/<module>/<endpoint>.json`. Code: `src/mastra/knowledge/api/distill.ts`.

Known limits: associations come from a hand-written list of module key names (`MODULE_KEYS` in `distill.ts`) so some will be wrong or missing; pages whose example has no usable JSON yield empty response fields.

## When the APIs change

The raw docs are the source of truth. The distilled records and the vector index are derived and are always rebuilt from them, so a change is a refresh, not a rewrite.

1. **Refresh the raw docs.** Re-download from the source in `zuper-api-docs/_manifest.json` (`https://developers.zuper.co/llms.txt`) or replace the files by hand. Each page carries an `updatedAt` in its front-matter.
2. **Re-distill:** `node scripts/kb-distill.ts`.
3. **Re-embed only what changed** *(planned, not built yet)*. Each record gets a content hash; unchanged records are skipped, changed ones re-embedded, records for deleted pages removed. Only changed endpoints cost embedding calls.
4. **Review the drift** *(planned)*. The sync prints endpoints added/removed and response fields added/removed before the index is updated.
5. **Planned entry point:** `npm run kb:sync` run manually when Zuper ships API changes; scheduling can come later.

### Staleness rules for the agents

- The docs can lag the live API. During RCA, **runtime data from the real API response wins over the docs**. A field missing from the docs is not evidence that a node is broken.
- The index should record a "docs last synced" date so answers can state how fresh the knowledge is (planned).
- Commit `.generated/` so git history shows exactly how the API docs changed between syncs (useful for questions like "did this field exist last month?"). Pending confirmation.

## Workflow-builder knowledge (`workflow-builder/`) — built

Seven JSON files exported from the workflow worker/frontend code. They are exact facts (node fields, handles, output shapes, allowed `require` modules, expression rules), so they use two layers:

1. **Exact lookup (source of truth).** `src/mastra/knowledge/workflowBuilder/loader.ts` validates every file with Zod on load (a changed export fails loudly) and `lookup.ts` serves it with no embeddings and no LLM. File names are matched without the browser's ` (1)` suffix. Tools (`src/mastra/tools/knowledgeTools.ts`): `list_nodes`, `get_node_info`, `get_node_fields` (use `mode` / `field` for large nodes like `zuper_update`), `get_node_output_shape`, `get_expression_rules`, `get_code_runtime`, `get_trigger_filter_info`, `get_native_capabilities`. Results are capped at ~14 KB and carry each file's `generated_at`.
2. **Vector finder (`kind=workflow_builder`).** `chunks.ts` builds ~130 small chunks (one per node, per node mode, per field gotcha, per expression accessor / common mistake / worked example, per code-runtime rule and recipe, per trigger-filter topic). Each chunk carries a `lookup` hint naming the exact tool call for the authoritative detail. The `search_knowledge` tool returns nothing below a similarity floor of 0.3 instead of guessing.

`interactive_create_capabilities.json` is validated if present but not indexed: it only serves the future workflow builder.

```bash
npm run kb:sync -- --dry-run     # show what would change
npm run kb:sync                  # embed changed chunks, delete removed ones
npm run kb:eval                  # retrieval regression test
```

`kb:sync` is idempotent: each chunk has a stable id and content hash, unchanged chunks are not re-embedded. To refresh after a new export, overwrite the JSON files and run `kb:sync`; the output lists chunks added (`+`), changed (`~`) and removed (`-`).

`kb:eval` has 19 retrieval cases (the right chunk must be in the top 3) plus off-topic questions that must return nothing. One case is a known limitation: the vague query "wait node inside a loop" ranks the loop node first; the precise "what wait type can I use inside a loop" works.

## Vector store

`LibSQLVector`, one index `zuper_kb`, separated by a `kind` field. Config is in `src/mastra/knowledge/vector.ts` and is chosen by env:

| Variable | Meaning |
|---|---|
| `KB_DATABASE_URL` (+ `KB_DATABASE_AUTH_TOKEN`) | Explicit override. |
| `TURSO_DATABASE_URL` (+ `TURSO_AUTH_TOKEN`) | Hosted Turso, if no `KB_*` variable is set. |
| neither | Local file `knowledge-base/.generated/kb.db` (gitignored via `*.db`). |

`mastra dev` runs from `.mastra/output`, so for the dev server set `KB_DATABASE_URL=file:<absolute path to kb.db>`, otherwise the server would look for a different file than `npm run kb:sync` wrote. Embeddings (`openai/text-embedding-3-small`) are an online call at sync time and for every search, so `OPENAI_API_KEY` is required. The index is always rebuildable from this folder.

## Status

- Done: workflow-builder KB (lookup + vector finder, sync, eval); API distiller, piloted on `work-order-management/jobs`, `accounting/invoices`, `accounting/quotes-proposals`.
- Next: API docs (distil all pages, embed, `get_api_endpoint`), then business docs. The content-hash sync described under "When the APIs change" is built for workflow-builder and will be reused for them.
