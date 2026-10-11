// Stage 3 of the hydrated RCA engine: make the hydrated execution fit the model's context without hiding
// the evidence. Data that fits is NEVER touched; only data over budget is cut, largest array first:
//
//   an array  -> its FIRST item, then a one-line comment saying how many were removed, an index of the
//                removed items (so the model knows which one it needs), and the exact call that fetches it
//   a string  -> its head, with the full length
//   an object with very many keys -> its first keys, with the count
//
// JSON has no comments, so the comment is a string element: `[{...first}, "// 12 more objects removed ..."]`.
// Nothing here mutates its input: changed parts are rebuilt, everything else is shared.
//
// Never trimmed: node definitions (form_fields, Code source), error text, statuses. Only the DATA a node
// read or produced is trimmed.

import { RCA_PACK_CHARS, RCA_TRIM_CRITICAL_FACTOR, RCA_TRIM_NODE_CHARS } from './config';
import type { HydratedExecution, HydratedNode, HydratedReference } from './hydrate';
import { extractFromString, type Segment } from './references';

type Key = string | number;

/** An object is only cut when it has more keys than this (a job record has about 70; this is for key/value maps). */
const MAX_KEYS_BEFORE_CUT = 100;
const MAX_KEYS_KEPT = 60;
/** Every marker starts with this, so it can be recognised and is never cut itself. */
const MARKER = '// ';
/** A string shorter than this is never truncated; its head is this long. */
const STRING_MIN_CHARS = 800;
const STRING_HEAD_CHARS = 300;
/** The index of removed items stays small: it is a pointer, not a copy. */
const INDEX_CHARS = 700;
const INDEX_VALUE_CHARS = 40;
const MIN_NODE_CHARS = 1500;
const MIN_CRITICAL_CHARS = 4000;

export interface TrimNote {
  /** Where in the value, e.g. `data.data.value`. */
  path: string;
  kind: 'array' | 'string' | 'keys';
  removed: number;
  total: number;
}

/** Where the original of a value can be fetched again (get_node_data), given its path inside the trimmed value.
 * `select` is the path to the value at that position. */
export interface FetchTarget {
  node: string;
  select: string;
  iteration?: number;
  which?: 'input';
}
/** Null when the value cannot be fetched on its own (the marker then says so). */
export type FetchHint = (path: Key[]) => FetchTarget | null;

const fetchCall = (target: FetchTarget, select: string): string =>
  `get_node_data(node "${target.node}"${target.which ? ', which "input"' : ''}${target.iteration !== undefined ? `, iteration ${target.iteration}` : ''}, select ["${select}"])`;

const size = (value: unknown): number => {
  try {
    return JSON.stringify(value)?.length ?? 0;
  } catch {
    return 0;
  }
};

/** `data.data.value[7]`, `data['custom field']`: the selector syntax get_node_data reads. */
export function toSelector(path: Key[]): string {
  return path
    .map((key) => (typeof key === 'number' ? `[${key}]` : /^[A-Za-z_$][\w$]*$/.test(key) ? `.${key}` : `['${key.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}']`))
    .join('')
    .replace(/^\./, '');
}

export const segmentsToKeys = (segments: Segment[]): Key[] =>
  segments.flatMap((s): Key[] => (s.kind === 'key' ? [s.key] : s.kind === 'index' ? [s.index] : []));

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);
const isScalar = (value: unknown): value is string | number | boolean => ['string', 'number', 'boolean'].includes(typeof value);
const clip = (text: string, limit: number): string => (text.length > limit ? `${text.slice(0, limit - 1)}…` : text);

const NAME_KEY = /(^|_)(name|title|label)$/i;
const ID_KEY = /(^|_)(uid|id|key|code|number)$/i;
const STATE_KEY = /(status|type|state)$/i;

/** What identifies an item, in a few words: its name/title, then its id, then its status; else its first scalars. */
function identify(item: unknown): string {
  if (isScalar(item)) return clip(String(item), INDEX_VALUE_CHARS);
  if (!isObject(item)) return Array.isArray(item) ? `array(${item.length})` : String(item);
  const scalars = Object.entries(item).filter(([, v]) => isScalar(v) && v !== '');
  const picked: Array<[string, unknown]> = [];
  for (const pattern of [NAME_KEY, ID_KEY, STATE_KEY]) {
    const found = scalars.find(([k]) => pattern.test(k) && !picked.some(([p]) => p === k));
    if (found) picked.push(found);
    if (picked.length === 2) break;
  }
  if (picked.length === 0) picked.push(...scalars.slice(0, 2));
  return picked.map(([k, v]) => `${k}=${clip(String(v), INDEX_VALUE_CHARS)}`).join(', ') || 'object';
}

function removedIndex(items: unknown[]): string {
  const parts: string[] = [];
  let used = 0;
  for (let i = 1; i < items.length; i++) {
    const part = `[${i}] ${identify(items[i])}`;
    if (used + part.length > INDEX_CHARS) {
      parts.push(`…and ${items.length - i} more`);
      break;
    }
    parts.push(part);
    used += part.length + 3;
  }
  return parts.join(' | ');
}

function arrayMarker(items: unknown[], path: Key[], hint: FetchHint | undefined): string {
  const removed = items.length - 1;
  const noun = items.slice(1).every((item) => isObject(item) || Array.isArray(item)) ? 'objects' : 'values';
  const target = hint?.(path);
  return (
    `${MARKER}${removed} more ${noun} removed (${items.length} in total) because the data is large. ` +
    `Removed: ${removedIndex(items)}. ` +
    (target ? `To read one, call ${fetchCall(target, `${target.select}[<n>]`)} with its number from the list.` : 'The full data is not available in this pack.')
  );
}

// ---- finding what to cut ------------------------------------------------------------------------------

interface Candidate {
  path: Key[];
  size: number;
}

/** The largest array with more than one item that is not already a trimmed one. */
function largestArray(value: unknown, trimmed: WeakSet<object>, path: Key[] = []): Candidate | null {
  if (Array.isArray(value)) {
    let best: Candidate | null = value.length > 1 && !trimmed.has(value) ? { path, size: size(value) } : null;
    for (let i = 0; i < value.length; i++) {
      const inner = largestArray(value[i], trimmed, [...path, i]);
      if (inner && (!best || inner.size > best.size)) best = inner;
    }
    return best;
  }
  if (isObject(value)) {
    let best: Candidate | null = null;
    for (const [key, child] of Object.entries(value)) {
      const inner = largestArray(child, trimmed, [...path, key]);
      if (inner && (!best || inner.size > best.size)) best = inner;
    }
    return best;
  }
  return null;
}

const childrenOf = (value: unknown): Array<[Key, unknown]> =>
  Array.isArray(value) ? value.map((v, i): [Key, unknown] => [i, v]) : isObject(value) ? Object.entries(value) : [];

function longestString(value: unknown, done: Set<string>, path: Key[] = []): { path: Key[]; length: number } | null {
  if (typeof value === 'string') return value.length > STRING_MIN_CHARS && !value.startsWith(MARKER) && !done.has(toSelector(path)) ? { path, length: value.length } : null;
  let best: { path: Key[]; length: number } | null = null;
  for (const [key, child] of childrenOf(value)) {
    const inner = longestString(child, done, [...path, key]);
    if (inner && (!best || inner.length > best.length)) best = inner;
  }
  return best;
}

function widestObject(value: unknown, done: Set<string>, path: Key[] = []): { path: Key[]; size: number } | null {
  let best: { path: Key[]; size: number } | null = null;
  if (isObject(value) && Object.keys(value).length > MAX_KEYS_BEFORE_CUT && !done.has(toSelector(path))) best = { path, size: size(value) };
  for (const [key, child] of childrenOf(value)) {
    const inner = widestObject(child, done, [...path, key]);
    if (inner && (!best || inner.size > best.size)) best = inner;
  }
  return best;
}

const at = (root: unknown, path: Key[]): unknown => path.reduce<unknown>((node, key) => (node as Record<Key, unknown>)[key], root);

/** `root` with the value at `path` replaced; every other part is shared with `root`, never copied or edited. */
function replaceAt(root: unknown, path: Key[], replacement: unknown): unknown {
  if (path.length === 0) return replacement;
  const [key, ...rest] = path;
  if (Array.isArray(root)) {
    const copy = root.slice();
    copy[key as number] = replaceAt(root[key as number], rest, replacement);
    return copy;
  }
  const record = root as Record<string, unknown>;
  return { ...record, [key as string]: replaceAt(record[key as string], rest, replacement) };
}

export interface TrimResult {
  value: unknown;
  notes: TrimNote[];
}

/** Cuts `value` down to `maxChars` (serialised), largest array first. Returns `value` itself when it already fits. */
export function trimValue(value: unknown, maxChars: number, hint?: FetchHint): TrimResult {
  let current = value;
  let total = size(current);
  const notes: TrimNote[] = [];
  const trimmedArrays = new WeakSet<object>();
  const done = new Set<string>();

  for (let guard = 0; guard < 500 && total > maxChars; guard++) {
    const array = largestArray(current, trimmedArrays, []);
    if (array) {
      const items = at(current, array.path) as unknown[];
      const cut: unknown[] = [items[0], arrayMarker(items, array.path, hint)];
      trimmedArrays.add(cut);
      current = replaceAt(current, array.path, cut);
      notes.push({ path: toSelector(array.path), kind: 'array', removed: items.length - 1, total: items.length });
      total = size(current);
      continue;
    }

    const text = longestString(current, done, []);
    if (text) {
      const original = at(current, text.path) as string;
      const target = hint?.(text.path);
      const cut = `${original.slice(0, STRING_HEAD_CHARS)}…[truncated: ${original.length} chars in total${target ? `; to read it, call ${fetchCall(target, target.select)}` : ''}]`;
      done.add(toSelector(text.path));
      current = replaceAt(current, text.path, cut);
      notes.push({ path: toSelector(text.path), kind: 'string', removed: original.length - STRING_HEAD_CHARS, total: original.length });
      total = size(current);
      continue;
    }

    const wide = widestObject(current, done, []);
    if (wide) {
      const original = at(current, wide.path) as Record<string, unknown>;
      const keys = Object.keys(original);
      const target = hint?.(wide.path);
      const cut = {
        ...Object.fromEntries(keys.slice(0, MAX_KEYS_KEPT).map((k) => [k, original[k]])),
        '//': `${keys.length - MAX_KEYS_KEPT} more keys removed (${keys.length} in total): ${keys.slice(MAX_KEYS_KEPT, MAX_KEYS_KEPT + 30).join(', ')}${target ? `. To read the object, call ${fetchCall(target, target.select)}` : ''}`,
      };
      done.add(toSelector(wide.path));
      current = replaceAt(current, wide.path, cut);
      notes.push({ path: toSelector(wide.path), kind: 'keys', removed: keys.length - MAX_KEYS_KEPT, total: keys.length });
      total = size(current);
      continue;
    }
    break; // nothing left that can be cut without cutting evidence
  }
  return { value: current, notes };
}

// ---- the hydrated execution ---------------------------------------------------------------------------

export interface TrimReport {
  before_chars: number;
  after_chars: number;
  /** The pack is still over budget after everything that may be cut was cut. */
  over_budget: boolean;
  trimmed: Array<TrimNote & { node: string }>;
}

export interface TrimOptions {
  /** Serialised-size budget for the data one node read or produced. */
  nodeChars?: number;
  /** Budget for the whole hydrated execution. */
  packChars?: number;
  /** The failed node gets this many times the node budget. */
  criticalFactor?: number;
}

/** The accessors of a reference as a selector base, e.g. `data.data.value` for `...('X')['data']['data'].value`. */
export function referenceBase(expression: string): Key[] {
  const ref = extractFromString(expression)[0];
  return ref ? segmentsToKeys(ref.path) : [];
}

/** The data of one node that is worth trimming, laid out so each part knows how to be fetched again. */
function slotsOf(node: HydratedNode): { container: Record<string, unknown>; hint: FetchHint } {
  const refs: Record<string, unknown> = {};
  for (const [expression, ref] of Object.entries(node.references_node_data)) if (ref.value !== undefined && ref.from_node?.name) refs[expression] = ref.value;
  const execution = node.execution;
  const name = String(node.action_name ?? node.node_uid);
  const container: Record<string, unknown> = {
    refs,
    ...(execution.output !== undefined ? { output: execution.output } : {}),
    ...(execution.input_received !== undefined ? { input: execution.input_received } : {}),
    ...(execution.resolved_fields ? { fields: execution.resolved_fields } : {}),
  };
  const hint: FetchHint = (path) => {
    const [slot, ...rest] = path;
    if (slot === 'refs') {
      const expression = rest[0] as string;
      const ref: HydratedReference | undefined = node.references_node_data[expression];
      if (!ref?.from_node?.name) return null;
      return { node: ref.from_node.name, select: toSelector([...referenceBase(expression), ...rest.slice(1)]), iteration: ref.iteration };
    }
    if (slot === 'output') return { node: name, select: toSelector(['data', ...rest]), iteration: execution.iteration_shown };
    if (slot === 'input') return { node: name, select: toSelector(rest), which: 'input', iteration: execution.iteration_shown };
    return null; // resolved fields live in the node's own run data and cannot be selected on their own
  };
  return { container, hint };
}

function applySlots(node: HydratedNode, trimmed: Record<string, unknown>): HydratedNode {
  const refs = trimmed.refs as Record<string, unknown>;
  const references_node_data = Object.fromEntries(
    Object.entries(node.references_node_data).map(([expression, ref]) => [expression, expression in refs && refs[expression] !== ref.value ? { ...ref, value: refs[expression] } : ref]),
  );
  const execution = { ...node.execution };
  if ('output' in trimmed) execution.output = trimmed.output;
  if ('input' in trimmed) execution.input_received = trimmed.input;
  if ('fields' in trimmed) execution.resolved_fields = trimmed.fields as Record<string, unknown>;
  return { ...node, references_node_data, execution };
}

/**
 * The hydrated execution trimmed to its budgets: each node's data to the node budget (the failed node gets
 * more), then, if the whole pack is still too large, every node's budget is halved until it fits or nothing
 * more can be cut. Returns a new object; the input is untouched.
 */
export function trimHydrated(hydrated: HydratedExecution, options: TrimOptions = {}): { hydrated: HydratedExecution; report: TrimReport } {
  const nodeChars = options.nodeChars ?? RCA_TRIM_NODE_CHARS;
  const packChars = options.packChars ?? RCA_PACK_CHARS;
  const factor = options.criticalFactor ?? RCA_TRIM_CRITICAL_FACTOR;
  const failedUid = hydrated.execution.failed_node_uid;
  const critical = (node: HydratedNode) => node.node_uid === failedUid || node.execution.status === 'FAILED';

  const build = (scale: number) => {
    const trimmed: TrimReport['trimmed'] = [];
    const nodes = hydrated.workflow.nodes.map((node) => {
      const { container, hint } = slotsOf(node);
      const base = nodeChars * (critical(node) ? factor : 1);
      // The floor only stops the halving from going to nothing; it never raises a budget set below it.
      const budget = Math.floor(Math.max(Math.min(base, critical(node) ? MIN_CRITICAL_CHARS : MIN_NODE_CHARS), base * scale));
      const result = trimValue(container, budget, hint);
      if (result.notes.length === 0) return node;
      for (const note of result.notes) trimmed.push({ ...note, node: String(node.action_name ?? node.node_uid) });
      return applySlots(node, result.value as Record<string, unknown>);
    });
    return { result: { ...hydrated, workflow: { ...hydrated.workflow, nodes } }, trimmed };
  };

  let scale = 1;
  let built = build(scale);
  while (size(built.result) > packChars && scale > 0.05) {
    scale /= 2;
    const next = build(scale);
    if (size(next.result) >= size(built.result)) break; // nothing more can be cut
    built = next;
  }
  const after = size(built.result);
  return { hydrated: built.result, report: { before_chars: size(hydrated), after_chars: after, over_budget: after > packChars, trimmed: built.trimmed } };
}
