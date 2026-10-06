// API docs -> chunks for the vector "finder". Endpoints become one compact chunk each (never the raw
// 150 KB OpenAPI page); modules get an overview chunk (what endpoints exist, which other modules the
// responses link to); prose pages (guides, changelog, the custom-fields doc) use the prose chunker.
// Each endpoint chunk carries the lookup call that returns the exact record.

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { chunkPage, cleanMarkdown, parseFrontMatter, proseLength } from '../business/chunks';
import { hashText, type KbChunk } from '../ingest';
import type { ApiEndpointRecord } from './distill';
import { API_DOCS_ROOT, distillAll, walkMarkdown, writeRecords } from './records';

export const API_KIND = 'api';
const MAX_CHUNK_CHARS = 1800;
const MAX_LISTED_FIELDS = 40;

function clip(text: string): string {
  return text.length <= MAX_CHUNK_CHARS ? text : `${text.slice(0, MAX_CHUNK_CHARS)}…`;
}

/** Top-level fields of the payload (`data.job_title`, not `data.organization.organization_logo`);
 * nested detail stays in the record and is reachable through the module links. */
function shallowFields(fieldPaths: string[]): string[] {
  return fieldPaths.filter((p) => p.replace(/\[\]/g, '').split('.').length <= 2).slice(0, MAX_LISTED_FIELDS);
}

function endpointText(r: ApiEndpointRecord): string {
  const params = r.params
    .map((p) => `${p.in} ${p.name} (${p.type}${p.required ? ', required' : ''})${p.description ? `: ${p.description}` : ''}`)
    .slice(0, 12);
  const lines = [
    `${r.title} — ${r.method} ${r.path}`,
    `Module: ${r.module} (${r.area}).`,
    r.description,
    params.length > 0 ? `Parameters: ${params.join('; ')}` : '',
    r.requestBody && r.requestBody.fieldPaths.length > 0
      ? `Request body fields: ${shallowFields(r.requestBody.fieldPaths).join(', ')}`
      : '',
    r.response && r.response.fieldPaths.length > 0
      ? `Response fields: ${shallowFields(r.response.fieldPaths).join(', ')}`
      : 'Response: no example documented.',
    r.associations.length > 0
      ? `Response links to other modules: ${r.associations.map((a) => `${a.module} (${a.fieldPath})`).join(', ')}`
      : '',
  ];
  return clip(lines.filter(Boolean).join('\n'));
}

function moduleChunk(area: string, module: string, records: ApiEndpointRecord[]): KbChunk {
  const links = new Map<string, number>();
  for (const r of records) for (const a of r.associations) links.set(a.module, (links.get(a.module) ?? 0) + 1);
  const linked = [...links].sort((a, b) => b[1] - a[1]).map(([m]) => m);

  const text = clip(
    [
      `API module: ${module} (${area}) — ${records.length} endpoints`,
      `Endpoints: ${records.map((r) => `${r.title} (${r.method} ${r.path})`).join('; ')}`,
      linked.length > 0
        ? `Responses in this module link to these other modules: ${linked.join(', ')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n'),
  );
  return {
    id: `api:module:${area}/${module}`,
    text,
    metadata: {
      kind: API_KIND,
      topic: 'module',
      title: `API module: ${module} (${area})`,
      area,
      module,
      lookup: `list_api_endpoints("${area}/${module}")`,
      source_file: `api-reference/${area}/${module}`,
      generated_at: '',
      hash: hashText(text),
    },
  };
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}

/** Prose pages: guides, changelog and any api-reference page that has no OpenAPI block. */
function proseChunks(file: string, topic: 'guide' | 'changelog', cutAtSpec = false): KbChunk[] {
  const relative = path.relative(API_DOCS_ROOT, file).split(path.sep).join('/');
  const raw = readFileSync(file, 'utf8');
  const { meta, body } = parseFrontMatter(raw);
  // On endpoint pages everything from "# OpenAPI definition" on is the raw spec, already distilled.
  const specAt = cutAtSpec ? body.search(/^#\s+OpenAPI definition/im) : -1;
  const cleaned = cleanMarkdown(specAt === -1 ? body : body.slice(0, specAt));
  const h1 = /^#\s+(.+)$/m.exec(cleaned)?.[1]?.trim();
  const baseTitle = meta.title || h1 || path.basename(file, '.md');
  // A month name alone barely moves an embedding; saying what the page is helps date questions find it.
  const title = topic === 'changelog' ? `Zuper API changelog: ${baseTitle}` : baseTitle;

  const out: KbChunk[] = [];
  const seen = new Map<string, number>();
  for (const draft of chunkPage(cleaned)) {
    const trail = draft.headingPath.filter((h, i) => !(i === 0 && h.trim().toLowerCase() === baseTitle.toLowerCase()));
    const context = [title, ...trail].join(' > ');
    const text = clip(`${context}\n${draft.text}`);
    const base = slug(trail.join('-')) || 'intro';
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    out.push({
      id: `api:${topic}:${relative.replace(/\.md$/i, '')}#${base}${n > 0 ? `~${n}` : ''}`,
      text,
      metadata: {
        kind: API_KIND,
        topic,
        title: context,
        source_file: relative,
        generated_at: meta.updatedAt ?? '',
        hash: hashText(text),
      },
    });
  }
  return out;
}

export interface ApiBuild {
  records: ApiEndpointRecord[];
  chunks: KbChunk[];
}

/** Builds records and chunks from the raw docs. Pure (no disk writes). */
export function buildApiKnowledge(): ApiBuild {
  const { records, proseFiles } = distillAll();
  const chunks: KbChunk[] = [];

  const byModule = new Map<string, ApiEndpointRecord[]>();
  for (const r of records) {
    chunks.push({
      id: `api:${r.id}`,
      text: endpointText(r),
      metadata: {
        kind: API_KIND,
        topic: 'endpoint',
        title: `${r.title} (${r.method} ${r.path})`,
        area: r.area,
        module: r.module,
        lookup: `get_api_endpoint(id: "${r.id}")`,
        source_file: `api-reference/${r.sourceFile}`,
        generated_at: '',
        hash: hashText(endpointText(r)),
      },
    });
    const key = `${r.area}/${r.module}`;
    byModule.set(key, [...(byModule.get(key) ?? []), r]);
  }
  for (const [key, list] of byModule) {
    const [area, module] = key.split('/') as [string, string];
    chunks.push(moduleChunk(area, module, list));
  }

  for (const file of proseFiles) chunks.push(...proseChunks(file, 'guide'));
  // Endpoint pages that also carry real documentation above the spec (rules, behaviour, supported values).
  for (const r of records) {
    const file = path.join(API_DOCS_ROOT, 'api-reference', r.sourceFile);
    const prose = proseChunks(file, 'guide', true).filter((c) => proseLength(c.text) >= 80);
    const proseChars = prose.reduce((n, c) => n + c.text.length, 0);
    // Most pages' prose is just the OpenAPI description, already inside the endpoint chunk. Only keep
    // pages that document real behaviour beyond it (rules, supported values, side effects).
    if (proseChars >= 1000 && proseChars > r.description.length * 2) chunks.push(...prose);
  }
  for (const sub of ['guides', 'changelog']) {
    try {
      for (const file of walkMarkdown(path.join(API_DOCS_ROOT, sub))) {
        chunks.push(...proseChunks(file, sub === 'changelog' ? 'changelog' : 'guide'));
      }
    } catch {
      // folder is optional
    }
  }
  return { records, chunks };
}

/** Chunk builder for `kb:sync`. Also refreshes the generated records so exact lookup and the index
 * always come from the same build. */
export function buildApiChunks(): KbChunk[] {
  const { records, chunks } = buildApiKnowledge();
  writeRecords(records);
  return chunks;
}
