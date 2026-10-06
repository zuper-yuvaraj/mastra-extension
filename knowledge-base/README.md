# Zuper Knowledge Base

Raw Zuper knowledge used by the RCA / AI Workflow Builder agents. Everything outside `.generated/` is source material; everything derived from it can be rebuilt at any time.

## Layout

| Path | What it is | How it is used |
|---|---|---|
| `zuper-api-docs/` | API reference pages (`api-reference/<area>/<module>/<endpoint>.md`, each wrapping a full OpenAPI document), `guides/`, `changelog/`. `_manifest.json` lists title/url/file per folder. | Distilled into compact endpoint records (exact lookup) and chunked (semantic search). |
| `zuper-docs/` | Business / help-center pages (Accounting, Projects, Dispatch, Workflow_builder, ...). | Chunked by heading and searched. |
| `workflow-builder/` | JSON extracted from the workflow worker/frontend code: node catalog, field schemas, code-node runtime, expression rules, trigger filters. | Exact lookup by key plus a small search index. |
| `.generated/` | Derived output: API records (`api/`), chunk dumps (`*-chunks.jsonl`), the local vector DB (`kb.db`, gitignored). Never hand-edited. | Input to lookup tools and the vector index. |

## Commands

```bash
npm run kb:distill                # raw API pages -> .generated/api/*.json (also done by kb:sync -- api)
npm run kb:chunks -- <kind>       # build + inspect chunks (business | api), no embedding calls
npm run kb:sync -- --dry-run      # show what would change in the index
npm run kb:sync                   # embed changed chunks, delete removed ones (all KBs); or: kb:sync -- api
npm run kb:eval                   # retrieval + exact-lookup regression test
```

## API docs (`zuper-api-docs/`) — built

**Distillation.** A raw API page can be 150 KB (mostly a huge example response). `src/mastra/knowledge/api/distill.ts` reduces each of the 502 endpoint pages to one record of ~2 KB (largest 17 KB):

- method and path, description, parameters (the `authorization` header is dropped)
- request body field paths and a size-bounded example
- response field paths and a size-bounded example (arrays cut to one item, long strings shortened)
- `associations`: other Zuper modules the response points at (customer, invoice, product, ...), with the field path where each appears

Some pages ship their sample as a JavaScript-style string (unquoted keys, comments, trailing commas, a stray `}`); a lenient parser recovers most of them. 8 samples are still unusable and 17 endpoints document an empty response (`{}`/null) — those records say so rather than guess. Pages can hold several ```json blocks; the OpenAPI document is the one with a `paths` object.

**Two ways to read it.**

1. **Exact lookup** (`api/lookup.ts`, from `.generated/api/`): `list_api_modules`, `list_api_endpoints(module)`, `get_api_endpoint` (by `id`, by `method`+`path`, or by `title`+`module`; a path shared by two endpoints is reported as ambiguous, never guessed). Results are capped at ~14 KB: examples are dropped first, then long lists, and the response says what was trimmed — it is always valid JSON. `get_api_changelog(month)` returns that month's changelog by exact metadata filter, because embeddings are unreliable for dates.
2. **Search** (`kind=api`, 644 chunks): one compact chunk per endpoint (title, method+path, params, top-level request/response fields, linked modules), one overview chunk per module (its endpoints and which other modules its responses link to), prose chunks for guides, the MCP server page, the changelog and the long custom-fields page. Endpoint pages whose prose just repeats the OpenAPI description are not duplicated. Each endpoint chunk names the exact `get_api_endpoint(...)` call that returns the full record.

Known limits: associations come from a hand-written list of module key names (`MODULE_KEYS` in `distill.ts`), so some will be wrong or missing; legacy `-copy` endpoints exist in the source docs and are indexed as they are; semantic search is weak on dates (use `get_api_changelog`).

## When the docs change

The raw docs are the source of truth. The records and the vector index are derived and always rebuilt from them, so a change is a refresh, not a rewrite.

1. **Refresh the raw docs.** Re-download (`download-zuper-api-docs.cjs`, `download-zuper-docs.cjs`; sources in each `_manifest.json`) or replace files by hand. API pages carry `updatedAt`, business pages `fetched_at`.
2. **Run `npm run kb:sync`.** API records are re-distilled, every chunk's content hash is compared with the index: unchanged chunks are skipped (no embedding calls), changed ones re-embedded, chunks of removed pages deleted. The output lists `+` added, `~` changed, `-` removed.
3. **Run `npm run kb:eval`** to confirm retrieval still works.

Not built yet: a field-level diff ("response field X was added/removed on endpoint Y") and a scheduled sync; for now `kb:sync` is run by hand when Zuper ships changes.

### Staleness rules for the agents

- The docs can lag the live API. During RCA, **runtime data from the real API response wins over the docs**. A field missing from the docs is not evidence that a node is broken. `get_api_changelog` helps check whether an API changed around the time something broke.
- Every chunk carries `generated_at` (the page's `updatedAt` / `fetched_at`) and lookup results carry the workflow-builder file versions, so answers can say how fresh the knowledge is.
- `.generated/api/` is plain JSON (not gitignored), so committing it makes git history show how the API docs changed between syncs. Whether to commit it is still undecided.

## Workflow-builder knowledge (`workflow-builder/`) — built

Seven JSON files exported from the workflow worker/frontend code. They are exact facts (node fields, handles, output shapes, allowed `require` modules, expression rules), so they use two layers:

1. **Exact lookup (source of truth).** `src/mastra/knowledge/workflowBuilder/loader.ts` validates every file with Zod on load (a changed export fails loudly) and `lookup.ts` serves it with no embeddings and no LLM. File names are matched without the browser's ` (1)` suffix. Tools (`src/mastra/tools/knowledgeTools.ts`): `list_nodes`, `get_node_info`, `get_node_fields` (use `mode` / `field` for large nodes like `zuper_update`), `get_node_output_shape`, `get_expression_rules`, `get_code_runtime`, `get_trigger_filter_info`, `get_native_capabilities`. Results are capped at ~14 KB and carry each file's `generated_at`.
2. **Vector finder (`kind=workflow_builder`).** `chunks.ts` builds ~130 small chunks (one per node, per node mode, per field gotcha, per expression accessor / common mistake / worked example, per code-runtime rule and recipe, per trigger-filter topic). Each chunk carries a `lookup` hint naming the exact tool call for the authoritative detail. The `search_knowledge` tool returns nothing below a similarity floor of 0.3 instead of guessing.

`interactive_create_capabilities.json` is validated if present but not indexed: it only serves the future workflow builder.

```bash
npm run kb:chunks -- business    # build + inspect chunks, no embedding calls
npm run kb:sync -- --dry-run     # show what would change
npm run kb:sync                  # embed changed chunks, delete removed ones
npm run kb:eval                  # retrieval regression test
```

`kb:sync` is idempotent: each chunk has a stable id and content hash, unchanged chunks are not re-embedded. To refresh after a new export, overwrite the JSON files and run `kb:sync`; the output lists chunks added (`+`), changed (`~`) and removed (`-`).

`kb:eval` runs 46 retrieval cases (the right chunk must be in the top 3: 19 workflow-builder, 15 business, 12 API), 3 off-topic questions that must return nothing, and 11 exact-lookup checks (API endpoint by id / method+path / title, ambiguity, caps, changelog). Workflow-builder cases search their own KB; 2 cases search all KBs together on purpose. Two cases are known limitations and report WARN, not FAIL: the vague query "wait node inside a loop" ranks the loop node first (the precise "what wait type can I use inside a loop" works), and "API changes released in september 2026" (semantic search is weak on dates; `get_api_changelog` is exact).

## Business docs (`zuper-docs/`) — built

378 Mintlify help-center pages, prose, so they are searched (no exact-lookup layer). Code: `src/mastra/knowledge/business/chunks.ts`.

**Cleaning.** Front-matter (`title`, `source`, `fetched_at`) becomes metadata. The "Documentation Index" banner and the Mintlify footer are removed. MDX components are flattened to text: `<Frame>`/`<img>`/`<iframe>` (long CDN image URLs) are dropped, `<Accordion title="X">` becomes a bold `X`, `<Note>`/`<Tip>`/`<Warning>` become `Note:` / `Tip:` / `Warning:` lines. Only a fixed list of known tags is stripped, so placeholders in prose such as `<variable_name>` survive.

**Chunking.** Split at h1-h4 headings (never inside a code fence); a section is merged forward if under ~350 chars and split on paragraph/table boundaries if over ~2200 chars (an over-long table splits by rows and repeats its header). Each chunk starts with `Page title > Heading path`, so it reads on its own. Link-only sections ("Related topics") and one-line stubs are dropped. Result: 2,672 chunks from 378 pages (median ~865 chars, ~700k embedding tokens).

**Metadata.** `kind=business`, `topic=doc`, `area` (top folder, e.g. `Accounting`), `source_url` (the public page, so an answer can cite it), `source_file`, `generated_at` (= the page's `fetched_at`), content `hash`. Chunk ids are `biz:<path>#<heading-slug>` and do not shift when unrelated sections change.

`zuper-for-roofing` and `zuper-for-rooofing` (typo) are not copies of `Zuper_for_Roofing`; each holds one page not found elsewhere, so they are indexed. `untitled-page-2.md` is a real page ("Configuring inboxes").

```bash
npm run kb:sync -- business      # first run embeds all chunks (~3 min); later runs only embed what changed
```

Search tip for agents: pass `kind` (`business` or `workflow_builder`) when the question is clearly about one of them. An unfiltered search mixes both and a business page can outrank a precise workflow-builder rule.

**When the docs change.** Re-download the pages (`download-zuper-docs.cjs`, source in `zuper-docs/_manifest.json`) and run `kb:sync -- business`: changed chunks are re-embedded, chunks of removed pages are deleted, and the output lists `+` / `~` / `-`.

## Vector store

`LibSQLVector`, one index `zuper_kb`, separated by a `kind` field. Config is in `src/mastra/knowledge/vector.ts` and is chosen by env:

| Variable | Meaning |
|---|---|
| `KB_DATABASE_URL` (+ `KB_DATABASE_AUTH_TOKEN`) | Explicit override. |
| `TURSO_DATABASE_URL` (+ `TURSO_AUTH_TOKEN`) | Hosted Turso, if no `KB_*` variable is set. |
| neither | Local file `knowledge-base/.generated/kb.db` (gitignored via `*.db`). |

The index is tuned at creation (`compress_neighbors=float8`, `max_neighbors=32`): libSQL's default stores a full copy of every neighbour's vector, which took 881 MB for 2.8k vectors; tuned it is ~177 MB with unchanged retrieval. `mastra dev` runs from `.mastra/output`, so for the dev server set `KB_DATABASE_URL=file:<absolute path to kb.db>`, otherwise the server would look for a different file than `npm run kb:sync` wrote. Embeddings (`openai/text-embedding-3-small`) are an online call at sync time and for every search, so `OPENAI_API_KEY` is required. The index is always rebuildable from this folder.

## Status

- Done: workflow-builder KB (lookup + 133 chunks), business docs KB (2,672 chunks), API docs KB (502 endpoint records, 644 chunks, exact lookup + changelog), shared content-hash sync and eval.
- Next: attach the knowledge tools to the RCA investigator agent; field-level API diff on sync; past-RCA KB.
