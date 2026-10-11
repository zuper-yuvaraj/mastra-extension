// Stage 2 of the hydrated RCA engine: the executed workflow JSON where every node that ran carries
// `references_node_data`, the real values its expressions read from earlier nodes, and `execution`, how it
// ran. Pure code: no model, and nothing for the model to decide or fetch.
//
//   Phase A  fetch every executed node's own run data (bounded concurrency, memoised by the context)
//   Phase B  per node, resolve each reference against that data and attach the value
//
// Values are the REAL, untruncated values; stage 3 trims them for size.
//
// Never exposed: variable values (`$.getVariable('API_KEY')` is a reference with no value), and credentials
// found in the data (tokens, passwords, secret headers) are redacted before the result leaves this module.
// Emails and phone numbers are kept: they are evidence. The result is a fresh copy, never the cached node data.

import { getExecutionWorkflowGraph, type BranchDecision } from '../lib/workflowGraph';
import { isTerminalStatus, type ExecutedWorkflowNode, type ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_HYDRATE_CONCURRENCY, RCA_RESULT_TTL_MS } from './config';
import { describeNodeRuntime, parseNodeExecution, resolvedFieldValues } from './nodeData';
import { extractReferences, type ReferenceKind } from './references';
import { fetchFailure, resolveNodeInputs, type InputStatus, type ResolvedInput } from './resolveInput';
import { ResultCache } from './resultCache';
import { pathEndsAtSecret, redactSecrets } from './sanitize';
import { defaultIteration, makeResolverEnv, summarizeExecutedNodes, type ExecutedNodeSummary } from './seed';
import { variableNamesOf } from './understand';

/** One expression a node reads, with what it evaluated to in this run. */
export interface HydratedReference {
  /** Every field of the node that uses this expression (e.g. `url.value`, `inputs.value[0].expression`). */
  used_in: string[];
  /** Code-node inputs: the names the code reads it by (`$input.<name>`). */
  used_as?: string[];
  kind: ReferenceKind;
  status: InputStatus | 'skipped_node_not_run';
  /** The node the value came from. */
  from_node?: { uid?: string; name?: string };
  /** The loop iteration of that node that was read, when it ran in a loop. */
  iteration?: number;
  /** The value at the referenced path, untruncated. Absent when the path did not resolve, and for variables. */
  value?: unknown;
  value_type?: string;
  /** Where the path broke, and which keys exist there: usually points straight at the right field. */
  failed_at?: string;
  available_keys?: string[];
  note?: string;
}

export interface NodeExecutionInfo {
  executed: boolean;
  status?: string;
  /** How many times it ran (more than 1 inside a loop). */
  runs?: number;
  is_loop?: boolean;
  total_iterations?: number;
  /** Loop iterations that exist for this node; `iteration_shown` is the one this block and its references describe. */
  iterations?: number[];
  iteration_shown?: number;
  failed_iterations?: number[];
  http_status?: number;
  error?: string;
  output_value?: boolean;
  remarks?: unknown;
  /** Fields the node actually ran with, after expressions were evaluated (empty defaults left out). */
  resolved_fields?: Record<string, unknown>;
  received_from?: string;
  /** The data could not be loaded (API error): nothing may be concluded about this node's run. */
  unavailable?: string;
  /** The failed node only: what it received, in full. */
  input_received?: unknown;
  /** What the node produced, in full. Present only when no other node reads it (it is then the only place it appears). */
  output?: unknown;
  /** The node passed its input through unchanged (an If/Else does), so its output is its input, shown where it came from. */
  output_same_as_input?: boolean;
  /** Nodes that read this node's output. Their `references_node_data` holds the parts they read; the rest is
   * available on request (get_node_data). */
  output_read_by?: string[];
}

export type HydratedNode = ExecutedWorkflowNode & {
  references_node_data: Record<string, HydratedReference>;
  execution: NodeExecutionInfo;
};

export interface HydratedExecution {
  execution: {
    uid: string | null;
    status: string | null;
    mode: string | null;
    type: string | null;
    error_message: string | null;
    error_code: string | null;
    failed_node_uid: string | null;
  };
  workflow: {
    uid: string | null;
    name: string | null;
    description: string | null;
    version: string | null;
    version_id: string | null;
    /** Nodes that ran, in the order they first ran, then the nodes that did not, in stored order. */
    nodes: HydratedNode[];
    connections: Array<Record<string, unknown>>;
    /** Names only. */
    variable_names: string[];
  };
  /** The nodes that ran, in execution order, with run counts and loop information. */
  execution_flow: ExecutedNodeSummary[];
  /** If/Else, Split and Loop decisions: which output was taken and where the other would have gone. */
  branch_decisions: BranchDecision[];
  /** Places where data could not be loaded, so parts of this are unknown. */
  data_gaps: string[];
}

export interface HydrateOptions {
  /** Checked before and after the work; the work itself is shared with other callers, so it always finishes. */
  signal?: AbortSignal;
  /** Overrides RCA_HYDRATE_CONCURRENCY (tests). */
  concurrency?: number;
  /** Skip the per-execution cache. */
  bypassCache?: boolean;
}

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null && !Array.isArray(value);
const str = (value: unknown): string | null => (typeof value === 'string' && value !== '' ? value : null);

/** Runs `task` over `items` with at most `limit` in flight. Results keep the order of `items`. */
async function mapLimit<T, R>(items: T[], limit: number, task: (item: T) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  const worker = async (): Promise<void> => {
    while (next < items.length) {
      const index = next++;
      out[index] = await task(items[index]!);
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, worker));
  return out;
}

function throwIfAborted(signal: AbortSignal | undefined): void {
  if (signal?.aborted) throw signal.reason instanceof Error ? signal.reason : new Error('ABORTED');
}

/** Groups resolved inputs by the expression as written: the same expression in two fields is one entry. */
function groupByExpression(inputs: ResolvedInput[]): Map<string, { first: ResolvedInput; fields: string[]; aliases: string[] }> {
  const groups = new Map<string, { first: ResolvedInput; fields: string[]; aliases: string[] }>();
  for (const input of inputs) {
    const group = groups.get(input.expression) ?? { first: input, fields: [], aliases: [] };
    if (input.field && !group.fields.includes(input.field)) group.fields.push(input.field);
    if (input.alias && !group.aliases.includes(`$input.${input.alias}`)) group.aliases.push(`$input.${input.alias}`);
    groups.set(input.expression, group);
  }
  return groups;
}

function toHydratedReference(first: ResolvedInput, fields: string[], aliases: string[]): HydratedReference {
  const hasValue = first.rawValue !== undefined || first.status === 'null';
  const secret = hasValue && first.rawValue !== null && pathEndsAtSecret(first.expression);
  return {
    used_in: fields,
    ...(aliases.length > 0 ? { used_as: aliases } : {}),
    kind: first.kind,
    status: first.status,
    ...(first.target ? { from_node: first.target } : {}),
    ...(first.iteration !== undefined ? { iteration: first.iteration } : {}),
    ...(hasValue ? { value: secret ? '[REDACTED]' : first.rawValue === undefined ? null : first.rawValue } : {}),
    ...(first.valueType ? { value_type: first.valueType } : {}),
    ...(first.failedAt ? { failed_at: first.failedAt } : {}),
    ...(first.availableKeys ? { available_keys: first.availableKeys } : {}),
    ...(first.note ? { note: first.note } : {}),
  };
}

/** The expressions of a node that did not run: listed so the model can see what it would have read, never fetched. */
function skippedReferences(node: ExecutedWorkflowNode): Record<string, HydratedReference> {
  const out: Record<string, HydratedReference> = {};
  for (const ref of extractReferences(node.form_fields)) {
    const entry = out[ref.raw] ?? { used_in: [], kind: ref.kind, status: 'skipped_node_not_run' as const, note: 'This node did not run, so nothing was read.' };
    if (ref.field && !entry.used_in.includes(ref.field)) entry.used_in.push(ref.field);
    if (ref.alias) entry.used_as = [...new Set([...(entry.used_as ?? []), `$input.${ref.alias}`])];
    out[ref.raw] = entry;
  }
  return out;
}

async function compute(ctx: ExecutionContext, concurrency: number): Promise<HydratedExecution> {
  const we = ctx.summary.workflow_execution;
  const executionUid = we?.execution_uid ?? 'unknown';
  const flow = summarizeExecutedNodes(ctx);
  const flowByUid = new Map(flow.map((entry) => [entry.uid, entry]));
  const env = makeResolverEnv(ctx);
  const gaps = new Set<string>();
  const failedUid = we?.failed_node_uid ?? null;

  // Phase A: every executed node's own data, at the iteration this hydration describes for it.
  const iterationOf = new Map(flow.map((entry) => [entry.uid, defaultIteration(ctx, entry.uid)]));
  const raws = new Map<string, unknown>();
  await mapLimit(flow, concurrency, async (entry) => {
    const pending = ctx.getNodeExecutionData(entry.uid, iterationOf.get(entry.uid));
    if (pending) raws.set(entry.uid, await pending);
  });
  // One gap per node whose data is missing, however many nodes read it.
  const unloaded = new Set<string>();
  for (const entry of flow) {
    const failure = fetchFailure(raws.get(entry.uid));
    if (failure) {
      unloaded.add(entry.uid);
      gaps.add(`${entry.name}: this node ran, but its data could not be loaded (${failure})`);
    }
  }

  // Phase B: resolve each executed node's references against that data.
  const readBy = new Map<string, Set<string>>();
  const resolved = new Map<string, Record<string, HydratedReference>>();
  await mapLimit(flow, concurrency, async (entry) => {
    const definition = ctx.findNode(entry.uid);
    const inputs = definition ? await resolveNodeInputs(entry.uid, definition.form_fields, env, iterationOf.get(entry.uid), { keepValue: true }) : [];
    const references: Record<string, HydratedReference> = {};
    for (const [expression, group] of groupByExpression(inputs)) {
      references[expression] = toHydratedReference(group.first, group.fields, group.aliases);
      const from = group.first.target?.uid;
      if (from && group.first.status !== 'target_not_run' && group.first.status !== 'target_unknown') {
        readBy.set(from, (readBy.get(from) ?? new Set()).add(entry.name));
      }
      // A different iteration of a node can fail to load while its shown one loaded; the node-level gap covers the rest.
      if (group.first.status === 'fetch_failed' && !(from && unloaded.has(from))) {
        gaps.add(`${entry.name}: "${group.first.target?.name ?? expression}"${group.first.iteration !== undefined ? ` (iteration ${group.first.iteration})` : ''} ran, but its data could not be loaded`);
      }
    }
    resolved.set(entry.uid, references);
  });

  const hydrate = (node: ExecutedWorkflowNode): HydratedNode => {
    const copy = structuredClone(node) as ExecutedWorkflowNode;
    const entry = flowByUid.get(node.node_uid);
    if (!entry) {
      return { ...copy, references_node_data: skippedReferences(node), execution: { executed: false } };
    }

    const raw = raws.get(entry.uid);
    const failure = fetchFailure(raw);
    const runtime = failure ? null : describeNodeRuntime(raw);
    const parsed = failure ? null : parseNodeExecution(raw);
    const resolvedFields = resolvedFieldValues(parsed?.executionData?.form_fields);
    const iterations = ctx.iterationsOf(entry.uid);
    const shown = iterationOf.get(entry.uid);
    const readers = [...(readBy.get(entry.uid) ?? [])].filter((name) => name !== entry.name);
    const isFailed = entry.uid === failedUid || entry.status === 'FAILED';

    const execution: NodeExecutionInfo = {
      executed: true,
      status: entry.status,
      runs: entry.runs,
      ...(entry.is_loop ? { is_loop: true } : {}),
      ...(entry.total_iterations !== null ? { total_iterations: entry.total_iterations } : {}),
      ...(iterations.length > 0 ? { iterations } : {}),
      ...(shown !== undefined ? { iteration_shown: shown } : {}),
      ...(entry.failed_iterations.length > 0 ? { failed_iterations: entry.failed_iterations } : {}),
      ...(failure ? { unavailable: failure } : {}),
      ...(runtime?.http_status !== null && runtime?.http_status !== undefined ? { http_status: runtime.http_status } : {}),
      ...(runtime?.error ? { error: runtime.error } : {}),
      ...(runtime?.output_value !== null && runtime?.output_value !== undefined ? { output_value: runtime.output_value } : {}),
      ...(runtime?.remarks !== null && runtime?.remarks !== undefined ? { remarks: runtime.remarks } : {}),
      ...(resolvedFields ? { resolved_fields: resolvedFields } : {}),
      ...(runtime?.received_from ? { received_from: runtime.received_from } : {}),
      ...(isFailed && parsed?.inputData !== null && parsed?.inputData !== undefined ? { input_received: parsed.inputData } : {}),
    };
    // The output appears once: under the nodes that read it, or here when nothing does (and for the failed node).
    const produced = parsed?.executionData?.data;
    const received = isObject(parsed?.inputData) ? parsed.inputData.data : undefined;
    const passthrough = produced !== undefined && received !== undefined && JSON.stringify(produced) === JSON.stringify(received);
    if (passthrough) execution.output_same_as_input = true;
    else if (produced !== undefined && (readers.length === 0 || isFailed)) execution.output = produced;
    if (readers.length > 0) execution.output_read_by = readers;

    return { ...copy, references_node_data: resolved.get(entry.uid) ?? {}, execution };
  };

  const nodes = ctx.workflowData?.nodes ?? [];
  const ran = flow.map((entry) => ctx.findNode(entry.uid)).filter((node): node is ExecutedWorkflowNode => Boolean(node));
  const ranUids = new Set(ran.map((node) => node.node_uid));
  const ordered = [...ran, ...nodes.filter((node) => !ranUids.has(node.node_uid))];

  const data = ctx.workflowData;
  const hydratedNodes = ordered.map(hydrate);
  const result: HydratedExecution = {
    execution: {
      uid: str(we?.execution_uid),
      status: str(we?.status),
      mode: str(we?.mode),
      type: str(we?.type),
      error_message: str(we?.error_message),
      error_code: str(we?.error_code),
      failed_node_uid: failedUid,
    },
    workflow: {
      uid: str(data?.workflow_uid) ?? str(we?.workflow_uid),
      name: str(data?.workflow_name),
      description: str(data?.workflow_description),
      version: str(data?.version) ?? str(we?.version_details?.version),
      version_id: str(data?.version_id),
      nodes: hydratedNodes,
      connections: data?.connections ?? [],
      variable_names: variableNamesOf(data),
    },
    execution_flow: flow,
    branch_decisions: getExecutionWorkflowGraph(ctx, executionUid).branchDecisions,
    data_gaps: [...gaps],
  };
  return redactSecrets(result);
}

const newCache = () => new ResultCache<HydratedExecution>(RCA_RESULT_TTL_MS, 30);
let cache = newCache();

/** Clears the per-execution cache (tests). */
export const resetHydrationCache = (): void => {
  cache = newCache();
};

/** The key for one execution. The company is part of it so one account can never be served another's data. */
function cacheKey(ctx: ExecutionContext): string | null {
  const uid = ctx.summary.workflow_execution?.execution_uid;
  return uid ? `${ctx.workflowData?.company_id ?? 'unknown'}:${uid}` : null;
}

/**
 * The executed workflow with every executed node's references dereferenced. Cached per execution once it
 * has finished and every node's data loaded; a running execution, or one with gaps, is rebuilt next time.
 * Never throws for missing node data: that becomes `data_gaps`.
 */
export async function hydrateExecution(ctx: ExecutionContext, options: HydrateOptions = {}): Promise<HydratedExecution> {
  throwIfAborted(options.signal);
  const concurrency = options.concurrency ?? RCA_HYDRATE_CONCURRENCY;
  const run = async () => {
    const value = await compute(ctx, concurrency);
    return { value, cacheable: isTerminalStatus(value.execution.status ?? undefined) && value.data_gaps.length === 0 };
  };

  const key = cacheKey(ctx);
  const value = key ? (await cache.getOrCompute(key, run, { bypass: options.bypassCache })).value : (await run()).value;
  throwIfAborted(options.signal);
  return value;
}
