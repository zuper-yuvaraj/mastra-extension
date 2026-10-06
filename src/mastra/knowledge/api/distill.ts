// Turns one Zuper API reference page (a markdown file wrapping a full OpenAPI document, up to
// ~150 KB with huge example responses) into a compact record the agent can actually use: what the
// endpoint does, its parameters, a size-bounded example response, every response field path, and
// which other Zuper modules the response points at. Pure functions — no I/O except readApiPage().

import { readFileSync } from 'node:fs';
import path from 'node:path';

export interface ApiParam {
  name: string;
  in: string;
  required: boolean;
  type: string;
  description: string;
}

export interface ApiAssociation {
  /** Module the response points at, inferred from a `<module>_uid` key (e.g. `customer`). */
  module: string;
  /** Where in the response it appears, e.g. `data.customer`. */
  fieldPath: string;
}

export interface ApiEndpointRecord {
  id: string;
  area: string;
  module: string;
  title: string;
  method: string;
  path: string;
  description: string;
  params: ApiParam[];
  requestBody: { fieldPaths: string[]; example: unknown } | null;
  response: { status: string; fieldPaths: string[]; example: unknown } | null;
  associations: ApiAssociation[];
  sourceFile: string;
}

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
type OpenApiOperation = Record<string, any>;

const MAX_EXAMPLE_CHARS = 3000;
const MAX_FIELD_PATHS = 250;
const MAX_STRING_CHARS = 60;
const MAX_KEYS_PER_OBJECT = 30;

const FENCED_JSON = /```json\n([\s\S]*?)\n```/g;

/** Shrinks a sample payload: one element per array, short strings, bounded depth and width. */
function trim(value: Json, depth: number): Json {
  if (typeof value === 'string') {
    return value.length > MAX_STRING_CHARS ? `${value.slice(0, MAX_STRING_CHARS)}…` : value;
  }
  if (Array.isArray(value)) {
    return depth <= 0 ? [] : value.slice(0, 1).map((item) => trim(item, depth - 1));
  }
  if (value && typeof value === 'object') {
    if (depth <= 0) return '{…}';
    const entries = Object.entries(value);
    const out: Record<string, Json> = {};
    for (const [key, item] of entries.slice(0, MAX_KEYS_PER_OBJECT)) out[key] = trim(item, depth - 1);
    if (entries.length > MAX_KEYS_PER_OBJECT) out['…'] = `${entries.length - MAX_KEYS_PER_OBJECT} more fields`;
    return out;
  }
  return value;
}

/** Deepens as far as the size budget allows, so small payloads stay detailed and huge ones stay small. */
function boundedExample(value: Json): Json {
  let best: Json = trim(value, 1);
  for (let depth = 2; depth <= 6; depth++) {
    const candidate = trim(value, depth);
    if (JSON.stringify(candidate).length > MAX_EXAMPLE_CHARS) break;
    best = candidate;
  }
  return best;
}

/** Dotted paths of every leaf/branch (`data.customer.customer_uid`); arrays contribute `[]`. */
function collectFieldPaths(value: Json, prefix = '', out: string[] = []): string[] {
  if (out.length >= MAX_FIELD_PATHS) return out;
  if (Array.isArray(value)) {
    if (value.length > 0) collectFieldPaths(value[0]!, `${prefix}[]`, out);
    return out;
  }
  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      out.push(next);
      collectFieldPaths(item, next, out);
      if (out.length >= MAX_FIELD_PATHS) break;
    }
  }
  return out;
}

// Zuper modules a response can point at, keyed by the field names that carry them. Matching on key
// names (not values) means a null `customer` in the sample still counts as an association.
const MODULE_KEYS: Array<[module: string, keys: RegExp]> = [
  ['customer', /^customer(_uid)?$/],
  ['organization', /^organization(_uid)?$/],
  ['property', /^property(_uid)?$/],
  ['project', /^project(_uid)?$/],
  ['job', /^(job|jobs|job_uid)$/],
  ['invoice', /^invoices?(_uid)?$/],
  ['quote', /^(estimate|estimates|quote|quotes)(_uid)?$/],
  ['proposal', /^proposals?(_uid)?$/],
  ['asset', /^assets?(_uid)?$/],
  ['contract', /^(service_)?contracts?(_uid)?$/],
  ['product', /^(products?|product_ref_id|product_uid)$/],
  ['user', /^(created_by|assigned_to|updated_by|done_by|user|users|user_uid)$/],
  ['team', /^teams?(_uid)?$/],
  ['job_category', /^job_category$/],
  ['job_status', /^(current_job_status|job_status)$/],
  ['appointment', /^appointments?(_uid)?$/],
  ['request', /^requests?(_uid)?$/],
  ['service_task', /^service_tasks?(_uid)?$/],
  ['vendor', /^vendors?(_uid)?$/],
  ['purchase_order', /^purchase_orders?(_uid)?$/],
  ['work_order', /^work_orders?(_uid)?$/],
  ['payment', /^payments?(_uid)?$/],
  ['credit_note', /^credit_notes?(_uid)?$/],
  ['route', /^routes?(_uid)?$/],
  ['timesheet', /^timesheets?(_uid)?$/],
];

/** Which known modules the response links to, and the first path each appears at. The endpoint's
 * own module is skipped so a Job endpoint doesn't "associate" to job. */
function findAssociations(value: Json, ownModule: string): ApiAssociation[] {
  const found = new Map<string, string>();
  const own = ownModule.toLowerCase().replace(/-/g, '_');
  const isOwn = (module: string): boolean => {
    const stem = module.replace(/_/g, '');
    return own.replace(/_/g, '').includes(stem);
  };

  const visit = (node: Json, nodePath: string, depth: number): void => {
    if (depth > 7) return;
    if (Array.isArray(node)) {
      if (node.length > 0) visit(node[0]!, `${nodePath}[]`, depth + 1);
      return;
    }
    if (!node || typeof node !== 'object') return;
    for (const [key, item] of Object.entries(node)) {
      const here = nodePath ? `${nodePath}.${key}` : key;
      for (const [module, keys] of MODULE_KEYS) {
        if (keys.test(key) && !isOwn(module) && !found.has(module)) found.set(module, here);
      }
      visit(item, here, depth + 1);
    }
  };
  visit(value, '', 0);
  return [...found].map(([module, fieldPath]) => ({ module, fieldPath }));
}

function schemaType(schema: Record<string, any> | undefined): string {
  if (!schema) return 'unknown';
  if (schema.enum) return `enum(${schema.enum.slice(0, 8).join('|')})`;
  return String(schema.type ?? 'unknown');
}

/** First balanced top-level `{…}`/`[…]` in the text (string-aware), for samples with stray trailing characters. */
function firstBalancedJson(text: string): string | null {
  const start = text.search(/[{[]/);
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i]!;
    if (inString) {
      if (ch === '\\') i++;
      else if (ch === '"') inString = false;
    } else if (ch === '"') inString = true;
    else if (ch === '{' || ch === '[') depth++;
    else if (ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

/** Copies a double-quoted string starting at `start`; returns the end index (exclusive). */
function skipString(text: string, start: number): number {
  let i = start + 1;
  while (i < text.length && text[i] !== '"') i += text[i] === '\\' ? 2 : 1;
  return i + 1;
}

/** Turns the JavaScript-flavoured samples some pages ship into strict JSON: strips block and line
 * comments, quotes bare object keys, and drops trailing commas. String contents are never touched. */
function relaxJson(text: string): string {
  let pass1 = '';
  for (let i = 0; i < text.length; ) {
    const ch = text[i]!;
    if (ch === '"') {
      const end = skipString(text, i);
      pass1 += text.slice(i, end);
      i = end;
    } else if (ch === '/' && text[i + 1] === '*') {
      const end = text.indexOf('*/', i + 2);
      i = end === -1 ? text.length : end + 2;
    } else if (ch === '/' && text[i + 1] === '/') {
      const end = text.indexOf('\n', i);
      i = end === -1 ? text.length : end;
    } else if (/[A-Za-z_$]/.test(ch)) {
      let j = i;
      while (j < text.length && /[\w$]/.test(text[j]!)) j++;
      let k = j;
      while (k < text.length && /\s/.test(text[k]!)) k++;
      const word = text.slice(i, j);
      pass1 += text[k] === ':' ? `"${word}"` : word; // bare key vs true/false/null
      i = j;
    } else {
      pass1 += ch;
      i++;
    }
  }

  let pass2 = '';
  for (let i = 0; i < pass1.length; ) {
    const ch = pass1[i]!;
    if (ch === '"') {
      const end = skipString(pass1, i);
      pass2 += pass1.slice(i, end);
      i = end;
    } else if (ch === ',') {
      let j = i + 1;
      while (j < pass1.length && /\s/.test(pass1[j]!)) j++;
      if (pass1[j] !== '}' && pass1[j] !== ']') pass2 += ch;
      i++;
    } else {
      pass2 += ch;
      i++;
    }
  }
  return pass2;
}

/** Some pages ship the sample as a string, occasionally malformed (stray braces, JS-style objects);
 * unwrap it when it can be recovered, otherwise keep the raw string. */
function parseIfJsonString(value: Json | undefined): Json | undefined {
  if (typeof value !== 'string') return value;
  const balanced = firstBalancedJson(value);
  const candidates = [value, balanced, balanced ? relaxJson(balanced) : null, relaxJson(value)];
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const parsed = JSON.parse(candidate) as Json;
      if (parsed && typeof parsed === 'object') return parsed;
    } catch {
      // try the next candidate
    }
  }
  return value;
}

function firstJsonBody(content: Record<string, any> | undefined): { example?: Json; schema?: Record<string, any> } {
  const body = content?.['application/json'];
  if (!body) return {};
  const examples = body.examples as Record<string, { value?: Json }> | undefined;
  const raw = examples ? Object.values(examples)[0]?.value : (body.example as Json | undefined);
  return { example: parseIfJsonString(raw), schema: body.schema };
}

/** Last resort when a page ships a schema but no example: field paths from the schema's properties. */
function schemaFieldPaths(schema: Record<string, any> | undefined, prefix = '', out: string[] = [], depth = 0): string[] {
  if (!schema || depth > 5 || out.length >= MAX_FIELD_PATHS) return out;
  if (schema.type === 'array') return schemaFieldPaths(schema.items, `${prefix}[]`, out, depth + 1);
  for (const [key, child] of Object.entries<Record<string, any>>(schema.properties ?? {})) {
    const next = prefix ? `${prefix}.${key}` : key;
    out.push(next);
    schemaFieldPaths(child, next, out, depth + 1);
  }
  return out;
}

export function distillPage(markdown: string, sourceFile: string, root: string): ApiEndpointRecord | null {
  // A page can hold several ```json blocks (example payloads in prose); the OpenAPI document is the
  // one with a `paths` object.
  type OpenApiDocument = { paths?: Record<string, Record<string, OpenApiOperation>> };
  let spec: OpenApiDocument | null = null;
  for (const match of markdown.matchAll(FENCED_JSON)) {
    try {
      const parsed = JSON.parse(match[1]!) as OpenApiDocument | null;
      if (parsed?.paths && Object.keys(parsed.paths).length > 0) {
        spec = parsed;
        break;
      }
    } catch {
      // not the OpenAPI block
    }
  }
  if (!spec) return null;

  const first = Object.entries(spec.paths ?? {})[0];
  if (!first) return null;
  const [apiPath, methods] = first;
  const [method, operation] = Object.entries(methods)[0] ?? [];
  if (!method || !operation) return null;

  // area/module come from the folder layout: api-reference/<area>/<module>/<file>.md
  const relative = path.relative(root, sourceFile).split(path.sep);
  const area = relative[0] ?? 'unknown';
  const module = relative.length >= 3 ? relative[1]! : area;
  const fileSlug = path.basename(sourceFile, '.md');

  const params: ApiParam[] = (operation.parameters ?? [])
    .filter((p: Record<string, any>) => String(p.name).toLowerCase() !== 'authorization')
    .map((p: Record<string, any>) => ({
    name: String(p.name),
    in: String(p.in),
    required: Boolean(p.required),
    type: schemaType(p.schema),
    description: String(p.description ?? '').slice(0, 200),
  }));

  const requestJson = firstJsonBody(operation.requestBody?.content);
  const requestBody = operation.requestBody
    ? {
        fieldPaths: requestJson.example
          ? collectFieldPaths(requestJson.example)
          : schemaFieldPaths(requestJson.schema),
        example: requestJson.example !== undefined ? boundedExample(requestJson.example) : null,
      }
    : null;

  const responses: Record<string, any> = operation.responses ?? {};
  const status = Object.keys(responses).find((s) => s.startsWith('2')) ?? Object.keys(responses)[0];
  const responseJson = status ? firstJsonBody(responses[status]?.content) : {};
  const response = status
    ? {
        status,
        fieldPaths: responseJson.example
          ? collectFieldPaths(responseJson.example)
          : schemaFieldPaths(responseJson.schema),
        example: responseJson.example !== undefined ? boundedExample(responseJson.example) : null,
      }
    : null;

  return {
    id: `${area}/${module}/${fileSlug}`,
    area,
    module,
    title: String(operation.summary ?? fileSlug),
    method: method.toUpperCase(),
    path: apiPath,
    description: String(operation.description ?? '').slice(0, 600),
    params,
    requestBody,
    response,
    associations: responseJson.example !== undefined ? findAssociations(responseJson.example, module) : [],
    sourceFile: relative.join('/'),
  };
}

export function readApiPage(file: string, root: string): ApiEndpointRecord | null {
  return distillPage(readFileSync(file, 'utf8'), file, root);
}
