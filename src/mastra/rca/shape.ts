// Lets the investigator look at a big node payload without dumping it: first a shape (keys, types,
// array lengths), then selected paths. Dumping 60 KB per call burns the context window and buries the
// one field that matters.

import { parseAccessors } from './references';
import { preview, walkPath } from './resolveInput';

const MAX_KEYS = 30;
const STRING_PREVIEW = 40;

export function summarizeShape(value: unknown, depth = 3): unknown {
  if (value === null) return 'null';
  if (typeof value === 'string') {
    return `string(${value.length}) "${value.length > STRING_PREVIEW ? `${value.slice(0, STRING_PREVIEW)}…` : value}"`;
  }
  if (typeof value !== 'object') return `${typeof value} ${String(value)}`;

  if (Array.isArray(value)) {
    if (depth <= 0 || value.length === 0) return `array(${value.length})`;
    return { array_length: value.length, first_item: summarizeShape(value[0], depth - 1) };
  }

  const entries = Object.entries(value as Record<string, unknown>);
  if (depth <= 0) return `object(${entries.length} keys: ${entries.slice(0, 8).map(([k]) => k).join(', ')}${entries.length > 8 ? ', …' : ''})`;
  const out: Record<string, unknown> = {};
  for (const [key, child] of entries.slice(0, MAX_KEYS)) out[key] = summarizeShape(child, depth - 1);
  if (entries.length > MAX_KEYS) out['…'] = `${entries.length - MAX_KEYS} more keys`;
  return out;
}

/** Parses `data.data.customer`, `.data.items[0].id`, `['data']['x']` into accessor segments. */
export function parseSelector(selector: string) {
  const trimmed = selector.trim();
  const text = trimmed.startsWith('.') || trimmed.startsWith('[') ? trimmed : `.${trimmed}`;
  const { segments, end } = parseAccessors(text, 0);
  return end === text.length && segments.length > 0 ? segments : null;
}

export interface SelectedValue {
  selector: string;
  status: 'resolved' | 'null' | 'undefined' | 'type_mismatch' | 'dynamic' | 'invalid_selector';
  value?: string;
  failedAt?: string;
  availableKeys?: string[];
  note?: string;
}

const SELECTED_VALUE_CHARS = 3000;

export function selectValue(root: unknown, selector: string): SelectedValue {
  const segments = parseSelector(selector);
  if (!segments) return { selector, status: 'invalid_selector', note: 'Use a path like data.data.customer or data.items[0].id' };
  const walked = walkPath(root, segments);
  return {
    selector,
    status: walked.status,
    value: walked.status === 'resolved' || walked.status === 'null' ? preview(walked.value, SELECTED_VALUE_CHARS) : undefined,
    failedAt: walked.failedAt,
    availableKeys: walked.availableKeys,
    note: walked.note,
  };
}
