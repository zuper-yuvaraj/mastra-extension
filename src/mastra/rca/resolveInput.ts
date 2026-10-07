// The human's "check what input data the failed node actually got", done deterministically: for
// each reference in a node's form_fields, find the producing node's real execution data and walk the
// access path segment by segment. The result says WHERE a path breaks, not just that it did.

import { RCA_VALUE_PREVIEW_CHARS } from './config';
import { extractReferences, renderSegments, type ExtractedReference, type ReferenceKind, type Segment } from './references';

/** What the resolver needs from a run. Kept narrow so it is testable without a live execution. */
export interface ResolverEnv {
  uidByName(name: string): string | undefined;
  nameByUid(uid: string): string | undefined;
  /** The node `$item` means for `uid`: its closest upstream node. */
  previousNodeUid(uid: string): string | undefined;
  /** The n-th previous node along the upstream chain (1 = previous). */
  recentNodeUid(uid: string, n: number): string | undefined;
  /** Raw node-execution payload, or undefined when the node did not run in this execution. */
  getNodeExecutionData(uid: string): Promise<unknown> | undefined;
}

export type InputStatus =
  | 'resolved'
  /** The path leads to a value of null. */
  | 'null'
  /** A key/segment is missing — the classic "undefined" cause. */
  | 'undefined'
  | 'type_mismatch'
  /** A bracket the resolver cannot evaluate statically (e.g. a loop index). */
  | 'dynamic'
  | 'target_not_run'
  /** The node ran, but its runtime data could not be loaded (API error), so nothing can be concluded about it. */
  | 'fetch_failed'
  | 'target_unknown'
  | 'variable'
  /** Reference sits in a FIXED field, so the text is used literally and never evaluated. */
  | 'not_evaluated';

export interface ResolvedInput {
  field: string;
  expression: string;
  kind: ReferenceKind;
  status: InputStatus;
  target?: { uid?: string; name?: string };
  /** Bounded JSON preview of the resolved value. */
  value?: string;
  valueType?: string;
  /** Path up to the point that broke, and the segment that was missing. */
  failedAt?: string;
  segment?: string;
  /** Keys that DO exist where the path broke — usually points straight at the right field. */
  availableKeys?: string[];
  /** The execution payload did not look like a {node, data} wrapper, so `.data` was assumed. */
  shapeAssumed?: boolean;
  note?: string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Accessors act on the node's {node, data} wrapper (expressions_reference.json). The node-execution
 * API's exact envelope is not documented, so find the wrapper defensively and say when it was assumed.
 */
export function toWrapper(raw: unknown): { wrapper: unknown; assumed: boolean } {
  if (isObject(raw)) {
    if (isObject(raw.execution_data)) return { wrapper: raw.execution_data, assumed: false };
    if ('data' in raw && 'node' in raw) return { wrapper: raw, assumed: false };
    if (isObject(raw.data) && isObject(raw.data.execution_data)) return { wrapper: raw.data.execution_data, assumed: false };
  }
  return { wrapper: { data: raw }, assumed: true };
}

/** zuperExecutionApi turns a failed node-data fetch into `{ error: 'API_403' }`; that is not node data. */
export function fetchFailure(raw: unknown): string | null {
  if (isObject(raw)) {
    const keys = Object.keys(raw);
    if (keys.length === 1 && typeof raw.error === 'string' && /^(API_\d+|FETCH_FAILED)$/.test(raw.error)) return raw.error;
  }
  return null;
}

export function preview(value: unknown, limit = RCA_VALUE_PREVIEW_CHARS): string {
  let text: string;
  try {
    text = JSON.stringify(value) ?? String(value);
  } catch {
    text = String(value);
  }
  return text.length <= limit ? text : `${text.slice(0, limit)}…(${text.length} chars)`;
}

function typeOf(value: unknown): string {
  return Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
}

interface WalkResult {
  status: 'resolved' | 'null' | 'undefined' | 'type_mismatch' | 'dynamic';
  value?: unknown;
  failedAt?: string;
  segment?: string;
  availableKeys?: string[];
  note?: string;
}

export function walkPath(root: unknown, segments: Segment[]): WalkResult {
  let current = root;
  const trail: Segment[] = [];

  for (const segment of segments) {
    const here = renderSegments(trail) || '(root)';

    if (segment.kind === 'dynamic') {
      return { status: 'dynamic', failedAt: here, segment: `[${segment.raw}]`, note: 'index depends on runtime state' };
    }
    if (current === null || current === undefined) {
      return {
        status: current === null ? 'null' : 'undefined',
        failedAt: here,
        segment: renderSegments([segment]),
        note: `${here} is ${current === null ? 'null' : 'undefined'}, so ${renderSegments([segment])} cannot be read`,
      };
    }

    if (Array.isArray(current)) {
      // arr['14'] works on arrays in the expression engine, so a numeric string key is an index.
      const index = segment.kind === 'index' ? segment.index : /^\d+$/.test(segment.key) ? Number(segment.key) : null;
      if (index === null) {
        return {
          status: 'type_mismatch',
          failedAt: here,
          segment: renderSegments([segment]),
          note: `${here} is an array (length ${current.length}); it has no key "${(segment as { key: string }).key}"`,
        };
      }
      if (index >= current.length) {
        return {
          status: 'undefined',
          failedAt: here,
          segment: `[${index}]`,
          note: `${here} is an array of length ${current.length}; index ${index} does not exist`,
        };
      }
      current = current[index];
    } else if (isObject(current)) {
      const key = segment.kind === 'key' ? segment.key : String(segment.index);
      if (!(key in current)) {
        return {
          status: 'undefined',
          failedAt: here,
          segment: renderSegments([segment]),
          availableKeys: Object.keys(current).slice(0, 25),
          note: `${here} has no key "${key}"`,
        };
      }
      current = current[key];
    } else {
      return {
        status: 'type_mismatch',
        failedAt: here,
        segment: renderSegments([segment]),
        note: `${here} is a ${typeOf(current)} (${preview(current, 60)}); it has no properties`,
      };
    }
    trail.push(segment);
  }

  if (current === null) return { status: 'null', value: null };
  if (current === undefined) return { status: 'undefined', value: undefined };
  return { status: 'resolved', value: current };
}

async function resolveReference(
  ref: ExtractedReference,
  ownerUid: string,
  env: ResolverEnv,
): Promise<ResolvedInput> {
  const base = { field: ref.field, expression: ref.raw, kind: ref.kind };

  if (!ref.evaluated) {
    return {
      ...base,
      status: 'not_evaluated',
      note: 'This field is type FIXED, so the expression text is used literally and never evaluated. It must be type EXPRESSION.',
    };
  }
  if (ref.kind === 'variable') {
    return { ...base, status: 'variable', note: `workflow variable "${ref.variable}" (value not exposed here)` };
  }

  let targetUid: string | undefined;
  let targetName: string | undefined = ref.targetName;
  if (ref.kind === 'latest' || ref.kind === 'all_runs') {
    targetUid = ref.targetName ? env.uidByName(ref.targetName) : undefined;
  } else if (ref.kind === 'previous') {
    targetUid = env.previousNodeUid(ownerUid);
  } else if (ref.kind === 'recent') {
    targetUid = env.recentNodeUid(ownerUid, ref.recent && ref.recent > 0 ? ref.recent : 1);
  }
  if (targetUid) targetName = env.nameByUid(targetUid) ?? targetName;

  if (!targetUid) {
    return {
      ...base,
      status: 'target_unknown',
      target: { name: targetName },
      note: targetName
        ? `No node named "${targetName}" exists in the workflow version that ran — the reference name may be misspelled or the node was renamed.`
        : 'Could not determine which node this reference points at.',
    };
  }

  const pending = env.getNodeExecutionData(targetUid);
  if (!pending) {
    return {
      ...base,
      status: 'target_not_run',
      target: { uid: targetUid, name: targetName },
      note: `"${targetName}" did not run in this execution, so it has no data to read.`,
    };
  }

  const raw = await pending;
  const failure = fetchFailure(raw);
  if (failure) {
    return {
      ...base,
      status: 'fetch_failed',
      target: { uid: targetUid, name: targetName },
      note: `"${targetName}" ran, but its data could not be loaded (${failure}). Do not conclude anything about its output.`,
    };
  }

  // A node that ran several times (e.g. inside a loop) comes back as one payload per run.
  const runs = (Array.isArray(raw) ? raw : [raw]).map(toWrapper);
  const assumed = runs.some((r) => r.assumed);

  const segments = ref.path;
  let root: unknown;
  if (ref.kind === 'all_runs') {
    // getNodeData returns every run; a leading [i] selects one (default: the first).
    const selector = ref.runSelector;
    if (selector?.kind === 'dynamic') {
      return {
        ...base,
        status: 'dynamic',
        target: { uid: targetUid, name: targetName },
        note: `run selected by [${selector.raw}], which depends on the loop iteration`,
        shapeAssumed: assumed || undefined,
      };
    }
    const runIndex = selector?.kind === 'index' ? selector.index : 0;
    if (runIndex >= runs.length) {
      return {
        ...base,
        status: 'undefined',
        target: { uid: targetUid, name: targetName },
        failedAt: `getNodeData('${targetName}')`,
        segment: `[${runIndex}]`,
        note: `"${targetName}" has ${runs.length} run(s); run ${runIndex} does not exist`,
      };
    }
    root = runs[runIndex]!.wrapper;
  } else {
    // latest / $item / recent: the most recent run.
    root = runs[runs.length - 1]!.wrapper;
  }

  const walked = walkPath(root, segments);
  return {
    ...base,
    status: walked.status,
    target: { uid: targetUid, name: targetName },
    value: walked.status === 'resolved' || walked.status === 'null' ? preview(walked.value) : undefined,
    valueType: walked.status === 'resolved' ? typeOf(walked.value) : undefined,
    failedAt: walked.failedAt,
    segment: walked.segment,
    availableKeys: walked.availableKeys,
    shapeAssumed: assumed || undefined,
    note: walked.note,
  };
}

/** Resolves every reference in a node's form_fields against this run's real data. */
export async function resolveNodeInputs(
  nodeUid: string,
  formFields: unknown,
  env: ResolverEnv,
): Promise<ResolvedInput[]> {
  const seen = new Set<string>();
  const refs = extractReferences(formFields).filter((ref) => {
    const key = `${ref.field}\u0000${ref.raw}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return Promise.all(refs.map((ref) => resolveReference(ref, nodeUid, env)));
}
