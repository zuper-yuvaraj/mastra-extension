// The human's "check what input data the failed node actually got", done deterministically: for
// each reference in a node's form_fields, find the producing node's real execution data and walk the
// access path segment by segment. The result says WHERE a path breaks, not just that it did.

import { parseNodeExecution } from './nodeData';
import { preview } from './preview';
import { pathEndsAtSecret } from './sanitize';
import { extractReferences, renderSegments, type ExtractedReference, type ReferenceKind, type Segment } from './references';

/** What the resolver needs from a run. Kept narrow so it is testable without a live execution. */
export interface ResolverEnv {
  uidByName(name: string): string | undefined;
  nameByUid(uid: string): string | undefined;
  /** The node `$item` means for `uid`: its closest upstream node. */
  previousNodeUid(uid: string): string | undefined;
  /** The n-th previous node along the upstream chain (1 = previous). */
  recentNodeUid(uid: string, n: number): string | undefined;
  /** Raw node-execution payload, or undefined when the node did not run in this execution. A node inside a
   * loop is read per iteration. */
  getNodeExecutionData(uid: string, iteration?: number): Promise<unknown> | undefined;
  /** Loop iterations the node ran in (empty if it ran once). */
  iterationsOf(uid: string): number[];
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
  /** Code v2 declared input: the node reads this value as `$input.<alias>`. */
  alias?: string;
  expression: string;
  kind: ReferenceKind;
  status: InputStatus;
  target?: { uid?: string; name?: string };
  /** Which loop iteration of the source node was read, when it ran in a loop. */
  iteration?: number;
  /** Bounded JSON preview of the resolved value. */
  value?: string;
  /** The resolved value itself, untruncated. Only present when the caller asked for it (`keepValue`): it can be
   * huge, and ResolvedInput is serialised into prompts elsewhere, so it must never appear by default. Read-only:
   * it is the cached node data, not a copy. */
  rawValue?: unknown;
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
 * API returns `{ node_execution: { execution_data: <that wrapper>, input_data, ... } }` (confirmed on a
 * real execution, see nodeData.ts); other shapes are still recognised defensively, and `assumed` says
 * when none matched and the payload was taken to be the data itself.
 */
export function toWrapper(raw: unknown): { wrapper: unknown; assumed: boolean } {
  const parsed = parseNodeExecution(raw);
  if (parsed) return { wrapper: parsed.executionData ?? {}, assumed: false };
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

export { preview };

function typeOf(value: unknown): string {
  return Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
}

/** Says in words when a value that was read is empty. A model reading JSON can take `""` (or `"\"\""`, once a
 * preview has been encoded again) for a value that CONTAINS quotation marks; an empty value is a different and far
 * more common cause of "not found" than a malformed one, so it is stated, not left to be inferred. */
function emptyValueNote(value: unknown): string | undefined {
  if (value === null) return 'The value is null: nothing was set.';
  if (typeof value === 'string') {
    if (value === '') return 'The value is an EMPTY string: the field exists but holds nothing. The quotation marks around a string are only notation, never part of the value.';
    if (value.trim() === '') return 'The value is blank: it holds only spaces.';
  }
  if (Array.isArray(value) && value.length === 0) return 'The value is an empty list.';
  if (isObject(value) && Object.keys(value).length === 0) return 'The value is an empty object.';
  return undefined;
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
  iteration?: number,
  keepValue = false,
): Promise<ResolvedInput> {
  const base = { field: ref.field, alias: ref.alias, expression: ref.raw, kind: ref.kind };

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

  // Native Zuper nodes name the node whose record they act on (not an expression, so there is no path).
  if (ref.kind === 'source_node') {
    const uid = ref.targetUid;
    const name = uid ? env.nameByUid(uid) : undefined;
    if (!uid || !name) {
      return {
        ...base,
        status: 'target_unknown',
        target: { uid },
        note: `This node acts on the record from node ${uid}, which is not part of the workflow version that ran.`,
      };
    }
    if (!env.getNodeExecutionData(uid)) {
      return { ...base, status: 'target_not_run', target: { uid, name }, note: `This node acts on the record from "${name}", but "${name}" did not run.` };
    }
    if (keepValue) {
      const iterations = env.iterationsOf(uid);
      const wantedRun = iterations.length > 0 ? (iteration !== undefined && iterations.includes(iteration) ? iteration : iterations[iterations.length - 1]) : undefined;
      const raw = await env.getNodeExecutionData(uid, wantedRun);
      const failure = fetchFailure(raw);
      if (failure) {
        return {
          ...base,
          status: 'fetch_failed',
          target: { uid, name },
          iteration: wantedRun,
          note: `This node acts on the record from "${name}", but its data could not be loaded (${failure}). Do not conclude anything about it.`,
        };
      }
      const { wrapper } = toWrapper(raw);
      return {
        ...base,
        status: 'resolved',
        target: { uid, name },
        iteration: wantedRun,
        rawValue: isObject(wrapper) ? wrapper.data : undefined,
        note: `Acts on the record supplied by "${name}" (selected as its record source); the value is that node's output. If that record is wrong or missing, the cause is upstream of this node.`,
      };
    }
    return {
      ...base,
      status: 'resolved',
      target: { uid, name },
      note: `Acts on the record supplied by "${name}" (selected as its record source). If that record is wrong or missing, the cause is upstream of this node.`,
    };
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

  // Which run of the target to read. A node inside a loop ran once per iteration and is fetched per
  // iteration: the same iteration as the node doing the reading when the target has it, otherwise its last.
  const targetIterations = env.iterationsOf(targetUid);
  let wanted: number | undefined;
  if (targetIterations.length > 0) {
    wanted = iteration !== undefined && targetIterations.includes(iteration) ? iteration : targetIterations[targetIterations.length - 1];
  }
  if (ref.kind === 'all_runs') {
    // getNodeData returns every run; a leading [i] selects the i-th (default: the first).
    const selector = ref.runSelector;
    if (selector?.kind === 'dynamic') {
      const thisIteration = /getCurrentLoopIndex/.test(selector.raw) && iteration !== undefined && targetIterations.includes(iteration);
      if (!thisIteration) {
        return {
          ...base,
          status: 'dynamic',
          target: { uid: targetUid, name: targetName },
          note: `run selected by [${selector.raw}], which depends on runtime state`,
        };
      }
      wanted = iteration;
    } else {
      const runIndex = selector?.kind === 'index' ? selector.index : 0;
      const runCount = Math.max(targetIterations.length, 1);
      if (runIndex >= runCount) {
        return {
          ...base,
          status: 'undefined',
          target: { uid: targetUid, name: targetName },
          failedAt: `getNodeData('${targetName}')`,
          segment: `[${runIndex}]`,
          note: `"${targetName}" has ${runCount} run(s); run ${runIndex} does not exist`,
        };
      }
      if (targetIterations.length > 0) wanted = targetIterations[runIndex];
    }
  }

  const pending = env.getNodeExecutionData(targetUid, wanted);
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
      iteration: wanted,
      note: `"${targetName}" ran${wanted !== undefined ? ` (iteration ${wanted})` : ''}, but its data could not be loaded (${failure}). Do not conclude anything about its output.`,
    };
  }

  const { wrapper, assumed } = toWrapper(raw);
  const segments = ref.path;
  const root: unknown = wrapper;

  const walked = walkPath(root, segments);
  const secretPath = pathEndsAtSecret(ref.raw);
  return {
    ...base,
    status: walked.status,
    target: { uid: targetUid, name: targetName },
    iteration: wanted,
    value: walked.status === 'resolved' || walked.status === 'null' ? (secretPath && walked.value !== null ? '[REDACTED]' : preview(walked.value)) : undefined,
    ...(keepValue && (walked.status === 'resolved' || walked.status === 'null') ? { rawValue: secretPath && walked.value !== null ? '[REDACTED]' : walked.value } : {}),
    valueType: walked.status === 'resolved' ? typeOf(walked.value) : undefined,
    failedAt: walked.failedAt,
    segment: walked.segment,
    availableKeys: walked.availableKeys,
    shapeAssumed: assumed || undefined,
    note: walked.note ?? (walked.status === 'resolved' || walked.status === 'null' ? emptyValueNote(walked.value) : undefined),
  };
}

/** Resolves every reference in a node's form_fields against this run's real data. */
export async function resolveNodeInputs(
  nodeUid: string,
  formFields: unknown,
  env: ResolverEnv,
  /** The loop iteration the reading node is running in, if any: looped sources are read at the same one. */
  iteration?: number,
  /** `keepValue: true` also returns each resolved value untruncated as `rawValue` (see ResolvedInput). */
  options: { keepValue?: boolean } = {},
): Promise<ResolvedInput[]> {
  const seen = new Set<string>();
  const refs = extractReferences(formFields).filter((ref) => {
    const key = `${ref.field}\u0000${ref.raw}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return Promise.all(refs.map((ref) => resolveReference(ref, nodeUid, env, iteration, options.keepValue === true)));
}
