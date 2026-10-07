// Exact lookup over the distilled API records. Deterministic and free: field names, paths and
// parameters must come from here, never from a similarity search.

import { listChunks } from '../search';
import type { ApiEndpointRecord } from './distill';
import { loadRecords } from './records';
import { apiDocUrl } from './urls';

const MAX_RESULT_CHARS = 14000;

function moduleId(record: ApiEndpointRecord): string {
  return `${record.area}/${record.module}`;
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/[\s_]+/g, '-');
}

const size = (value: unknown): number => JSON.stringify(value).length;

/** Keeps a record under the result cap while staying valid JSON: drop the bulky examples first, then
 * trim the longest lists, saying so in `trimmed`. Never cuts the text mid-structure. */
function capRecord(record: ApiEndpointRecord): ApiEndpointRecord & { trimmed?: string[] } {
  if (size(record) <= MAX_RESULT_CHARS) return record;

  const trimmed: string[] = [];
  let slim: ApiEndpointRecord & { trimmed?: string[] } = { ...record };

  slim = {
    ...slim,
    requestBody: slim.requestBody && { ...slim.requestBody, example: null },
    response: slim.response && { ...slim.response, example: null },
  };
  trimmed.push('examples omitted (too large); field paths kept');

  for (const limit of [200, 120, 60]) {
    if (size({ ...slim, trimmed }) <= MAX_RESULT_CHARS) break;
    slim = {
      ...slim,
      params: slim.params.slice(0, limit),
      requestBody: slim.requestBody && { ...slim.requestBody, fieldPaths: slim.requestBody.fieldPaths.slice(0, limit) },
      response: slim.response && { ...slim.response, fieldPaths: slim.response.fieldPaths.slice(0, limit) },
    };
    trimmed.push(`lists limited to the first ${limit} entries`);
  }
  return { ...slim, trimmed };
}

export function listApiModules() {
  const counts = new Map<string, number>();
  for (const record of loadRecords()) counts.set(moduleId(record), (counts.get(moduleId(record)) ?? 0) + 1);
  return {
    modules: [...counts].sort(([a], [b]) => a.localeCompare(b)).map(([module, endpoints]) => ({ module, endpoints })),
  };
}

/** `module` is `area/module` (exact) or just `module` (matches that folder in any area). */
export function listApiEndpoints(module: string) {
  const wanted = normalize(module);
  const matches = loadRecords().filter((r) => normalize(moduleId(r)) === wanted || normalize(r.module) === wanted);
  if (matches.length === 0) {
    return { found: false, message: `No API module "${module}". Call list_api_modules for valid names.` };
  }
  return {
    found: true,
    endpoints: matches.map((r) => ({ id: r.id, title: r.title, method: r.method, path: r.path })),
  };
}

export interface ApiEndpointQuery {
  id?: string;
  method?: string;
  path?: string;
  module?: string;
  title?: string;
}

export function getApiEndpoint(query: ApiEndpointQuery) {
  const records = loadRecords();
  let matches: ApiEndpointRecord[] = [];

  if (query.id) {
    matches = records.filter((r) => r.id === query.id);
  } else if (query.method && query.path) {
    const method = query.method.toUpperCase();
    matches = records.filter((r) => r.method === method && r.path === query.path);
  } else if (query.title) {
    const wanted = normalize(query.title);
    const inModule = query.module ? normalize(query.module) : null;
    const scoped = records.filter((r) => !inModule || normalize(moduleId(r)) === inModule || normalize(r.module) === inModule);
    matches = scoped.filter((r) => normalize(r.title) === wanted);
    if (matches.length === 0) matches = scoped.filter((r) => normalize(r.title).includes(wanted));
  }

  if (matches.length === 0) {
    return { found: false, message: 'No matching endpoint. Use list_api_endpoints for a module, or search_knowledge to find one.' };
  }
  if (matches.length > 1) {
    return {
      found: true,
      ambiguous: true,
      message: 'Several endpoints match; call again with one id.',
      matches: matches.map((r) => ({ id: r.id, title: r.title, method: r.method, path: r.path })),
    };
  }
  const url = apiDocUrl(matches[0]!.sourceFile);
  return { found: true, endpoint: capRecord(matches[0]!), ...(url ? { source_url: url } : {}) };
}

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/** "September 2026" / "sept 2026" / "2026-09" -> "september-2026". */
function monthSlug(input: string): string | null {
  const text = input.trim().toLowerCase();
  const iso = /^(\d{4})-(\d{1,2})$/.exec(text);
  if (iso) {
    const name = MONTHS[Number(iso[2]) - 1];
    return name ? `${name}-${iso[1]}` : null;
  }
  const year = /(\d{4})/.exec(text)?.[1];
  const name = MONTHS.find((m) => text.includes(m) || (m.length > 3 && text.includes(m.slice(0, 3))));
  return year && name ? `${name}-${year}` : null;
}

/** API/product changelog by month, read by exact metadata filter (semantic search is unreliable for dates). */
export async function getApiChangelog(month?: string) {
  const all = await listChunks({ kind: 'api', topic: 'changelog' }, 500);
  const available = [...new Set(all.map((c) => /changelog\/(.+)-updates\.md$/.exec(c.source_file)?.[1] ?? ''))]
    .filter(Boolean)
    .sort();
  if (!month) return { available_months: available, note: 'Call again with `month`, e.g. "september 2026".' };

  const slug = monthSlug(month);
  if (!slug) return { found: false, message: `Could not read a month and year from "${month}".`, available_months: available };
  const chunks = all.filter((c) => c.source_file.endsWith(`changelog/${slug}-updates.md`));
  if (chunks.length === 0) return { found: false, message: `No changelog for ${slug}.`, available_months: available };
  return { found: true, month: slug, entries: chunks.map((c) => c.text) };
}
