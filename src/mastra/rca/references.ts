// Finds every place a workflow node reads another node's data (or a variable) and WHICH FIELD it
// reads. The older lineage extractor (lib/workflowGraph.ts) only captured bracket accessors after
// `$.getLatestNodeData('X')`, so the common `...('X').data.data.customer.email` form lost its path and
// `$item`, `$.getNodeData('X')[0]`, `$.getRecentNodeData(n)` and variables were not seen at all.
//
// Semantics follow knowledge-base/workflow-builder/expressions_reference.json: every accessor returns
// the node's {node, data} WRAPPER, so a payload field is reached through `.data`.

export type Segment =
  | { kind: 'key'; key: string }
  | { kind: 'index'; index: number }
  /** A bracket the extractor cannot evaluate statically, e.g. `[$.getCurrentLoopIndex()]`. */
  | { kind: 'dynamic'; raw: string };

export type ReferenceKind = 'latest' | 'all_runs' | 'previous' | 'recent' | 'variable';

export interface ExtractedReference {
  kind: ReferenceKind;
  /** The expression text as written, e.g. `$.getLatestNodeData('Get Job').data.data.customer.email`. */
  raw: string;
  /** Display name for `latest` / `all_runs` references. */
  targetName?: string;
  /** For `recent`: how many nodes back (0 or empty = the previous node). */
  recent?: number;
  /** For `all_runs`: the run selector (`[0]`, `[$.getCurrentLoopIndex()]`) when one was written. */
  runSelector?: Segment;
  /** Accessors after the call (and after the run selector), starting at the wrapper. */
  path: Segment[];
  /** For `variable`: the variable name. */
  variable?: string;
  /** Dotted path of the form field holding the expression, e.g. `url.value`, `conditions[2].value1`. */
  field: string;
  /** `FIXED` / `EXPRESSION` when the field is a {type, value} envelope. */
  fieldType?: string;
  /** False for a FIXED field: its text is used literally and the reference is never evaluated. */
  evaluated: boolean;
}

const IDENT_START = /[A-Za-z_$]/;
const IDENT = /[\w$]/;

/** Reads `.key` / `['key']` / `[0]` / `[expr]` accessors starting at `start`; stops at anything else. */
export function parseAccessors(text: string, start: number): { segments: Segment[]; end: number } {
  const segments: Segment[] = [];
  let i = start;

  while (i < text.length) {
    if (text[i] === '.' && i + 1 < text.length && IDENT_START.test(text[i + 1]!)) {
      let j = i + 1;
      while (j < text.length && IDENT.test(text[j]!)) j++;
      segments.push({ kind: 'key', key: text.slice(i + 1, j) });
      i = j;
    } else if (text[i] === '[') {
      const close = matchingBracket(text, i);
      if (close === -1) break;
      const inner = text.slice(i + 1, close).trim();
      const quoted = /^(['"])(.*)\1$/s.exec(inner);
      if (quoted) segments.push({ kind: 'key', key: quoted[2]! });
      else if (/^\d+$/.test(inner)) segments.push({ kind: 'index', index: Number(inner) });
      else segments.push({ kind: 'dynamic', raw: inner });
      i = close + 1;
    } else {
      break;
    }
  }
  return { segments, end: i };
}

/** Index of the `]` closing the `[` at `open`, aware of nesting and quoted strings. */
function matchingBracket(text: string, open: number): number {
  let depth = 0;
  let quote: string | null = null;
  for (let i = open; i < text.length; i++) {
    const ch = text[i]!;
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '[' || ch === '(') depth++;
    else if (ch === ']' || ch === ')') {
      depth--;
      if (depth === 0) return ch === ']' ? i : -1;
    }
  }
  return -1;
}

export function renderSegments(segments: Segment[]): string {
  return segments
    .map((s) => (s.kind === 'key' ? `.${s.key}` : s.kind === 'index' ? `[${s.index}]` : `[${s.raw}]`))
    .join('');
}

interface Scan {
  field: string;
  fieldType?: string;
}

/** Every reference inside one string. */
export function extractFromString(text: string, scan: Scan = { field: '' }): ExtractedReference[] {
  const refs: ExtractedReference[] = [];
  const evaluated = scan.fieldType === undefined || scan.fieldType === 'EXPRESSION';
  const base = { field: scan.field, fieldType: scan.fieldType, evaluated };

  const named = /\$\.(getLatestNodeData|getNodeData)\(\s*(['"])(.*?)\2\s*\)/g;
  for (const m of text.matchAll(named)) {
    const start = m.index!;
    const { segments, end } = parseAccessors(text, start + m[0].length);
    const raw = text.slice(start, end);
    if (m[1] === 'getLatestNodeData') {
      refs.push({ ...base, kind: 'latest', raw, targetName: m[3]!, path: segments });
    } else {
      // getNodeData returns an ARRAY of wrappers (one per run); a leading [i] selects the run.
      const first = segments[0];
      const selects = first && (first.kind === 'index' || first.kind === 'dynamic');
      refs.push({
        ...base,
        kind: 'all_runs',
        raw,
        targetName: m[3]!,
        runSelector: selects ? first : undefined,
        path: selects ? segments.slice(1) : segments,
      });
    }
  }

  for (const m of text.matchAll(/\$\.getRecentNodeData\(\s*(\d*)\s*\)/g)) {
    const start = m.index!;
    const { segments, end } = parseAccessors(text, start + m[0].length);
    refs.push({ ...base, kind: 'recent', raw: text.slice(start, end), recent: m[1] ? Number(m[1]) : 0, path: segments });
  }

  for (const m of text.matchAll(/(?<![\w$.])\$item(?![\w$])/g)) {
    const start = m.index!;
    const { segments, end } = parseAccessors(text, start + m[0].length);
    refs.push({ ...base, kind: 'previous', raw: text.slice(start, end), path: segments });
  }

  for (const m of text.matchAll(/\$\.getVariable\(\s*(['"])(.*?)\1\s*\)/g)) {
    refs.push({ ...base, kind: 'variable', raw: m[0], variable: m[2]!, path: [] });
  }
  for (const m of text.matchAll(/(?<![\w$.])(?:variable|VARIABLE)\.([A-Za-z_]\w*)/g)) {
    refs.push({ ...base, kind: 'variable', raw: m[0], variable: m[1]!, path: [] });
  }

  return refs;
}

/** Walks `form_fields`, tracking the field path and the FIXED/EXPRESSION envelope each string sits in. */
export function extractReferences(formFields: unknown): ExtractedReference[] {
  const out: ExtractedReference[] = [];

  const walk = (value: unknown, field: string, fieldType: string | undefined): void => {
    if (typeof value === 'string') {
      if (value.includes('$') || /variable/i.test(value)) out.push(...extractFromString(value, { field, fieldType }));
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => walk(item, `${field}[${i}]`, fieldType));
    } else if (value && typeof value === 'object') {
      const record = value as Record<string, unknown>;
      const envelopeType = typeof record.type === 'string' && 'value' in record ? record.type : fieldType;
      for (const [key, child] of Object.entries(record)) {
        walk(child, field ? `${field}.${key}` : key, key === 'type' ? undefined : envelopeType);
      }
    }
  };

  walk(formFields, '', undefined);
  return out;
}
