// The complete backtrace behind an RCA, built by code. Starting at the node in question (the failed node,
// or the node whose data decided an outcome), it follows EVERY reference back to the node that produced
// the value, then that node's own references, and so on to the origin, reading each node's real run data
// along the way. The model is later shown the whole chain; it never has to decide what to fetch.
//
// Each node-run in the chain records what it received (every reference resolved to its real value, or the
// exact path that was missing), what it did (status, its own error, HTTP status), and whether the value it
// produced was bad for the node that reads it. `origin_candidates` are the nodes that produced bad output
// from good input: where the problem starts.

import { getExecutionWorkflowGraph, type BranchDecision } from '../lib/workflowGraph';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import type { ApiEndpointRecord } from '../knowledge/api/distill';
import { loadRecords } from '../knowledge/api/records';
import { matchApiEndpoint } from './kbHints';
import { describeNodeRuntime, parseNodeExecution, type NodeRuntime } from './nodeData';
import { fetchFailure, preview, resolveNodeInputs, toWrapper, type InputStatus, type ResolvedInput } from './resolveInput';
import { defaultIteration, makeResolverEnv } from './seed';

export const MAX_NODE_RUNS = 40;
export const MAX_DEPTH = 8;
const MAX_DOC_GAPS = 15;

/** Input states that mean the value the node needed was not there. */
const BAD_INPUT = new Set<InputStatus>(['null', 'undefined', 'type_mismatch', 'target_not_run', 'target_unknown']);

export interface TraceInput extends ResolvedInput {
  /** Trace node (id) that produced this value, when it was followed. */
  produced_by: string | null;
}

export interface DocCheck {
  endpoint: string;
  /** Fields the API documents for its request body that this payload does not contain. */
  documented_not_sent: string[];
  /** Fields the payload sends that the API does not document. */
  sent_not_documented: string[];
}

const OUTPUT_CHARS = 1500;
const CODE_CHARS = 6000;
const FIELD_CHARS = 300;

/** What the node is configured to do: a Code node's source, the expressions and literals of its other
 * fields. Empty defaults are left out. This is what lets the analysis say what the node was trying to do. */
function configOf(formFields: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!formFields || typeof formFields !== 'object') return out;
  for (const [name, field] of Object.entries(formFields as Record<string, unknown>)) {
    const value = field && typeof field === 'object' && 'value' in field ? (field as { value: unknown }).value : field;
    const empty = value === '' || value === null || value === undefined || value === false || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && value !== null && !Array.isArray(value) && Object.keys(value).length === 0);
    if (empty) continue;
    const text = typeof value === 'string' ? value : JSON.stringify(value);
    const limit = name === 'code' ? CODE_CHARS : FIELD_CHARS;
    out[name] = text.length > limit ? `${text.slice(0, limit)}…(${text.length} chars)` : text;
  }
  return out;
}

export interface TraceNode {
  id: string;
  uid: string;
  name: string;
  type: string;
  iteration: number | null;
  /** How far from the starting node (0 = the node in question). */
  depth: number;
  /** The node's configuration: Code source, expressions and literal settings. */
  config: Record<string, string>;
  /** What the node produced (bounded preview), so "it returned X" can be said and quoted. */
  output?: string;
  ran: boolean;
  /** The node itself failed in this run. */
  failed: boolean;
  runtime: NodeRuntime | { unavailable: string } | null;
  inputs: TraceInput[];
  own_inputs_good: boolean;
  /** What this node produced was bad for a node that reads it (or it failed). */
  output_bad: boolean;
  /** Why the output counts as bad, in words, from the consumers' resolved inputs. */
  bad_because: string[];
  /** Fields of a FAILED node that were fed by this node's output ("Update Job.url"). A value can be well
   * formed and still wrong (a built URL, a payload), which code cannot judge: these are the suspects. */
  feeds_failed: string[];
  doc_check?: DocCheck;
}

export interface Backtrace {
  start: { uid: string; name: string; iteration: number | null };
  /** In the order they were reached: the starting node first, the deepest references last. */
  nodes: TraceNode[];
  /** Ids of nodes that produced bad output from good input, deepest (closest to the origin) first. */
  origin_candidates: string[];
  /** If/Else, Split and Loop decisions upstream of the starting node. */
  decisions: BranchDecision[];
  /** Some node data could not be loaded, so parts of the trace are unknown. */
  data_gaps: string[];
  /** The trace stopped at the size/depth limit; deeper origins may exist. */
  capped: boolean;
}

export interface BacktraceDeps {
  records?: () => ApiEndpointRecord[];
  /** Overrides MAX_NODE_RUNS (tests). */
  maxNodeRuns?: number;
}

const nodeId = (uid: string, iteration: number | null | undefined): string => `${uid}#${iteration ?? '-'}`;

function flatPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return value.length > 0 ? flatPaths(value[0], prefix) : prefix ? [prefix] : [];
  if (value && typeof value === 'object') {
    const out: string[] = prefix ? [prefix] : [];
    for (const [key, item] of Object.entries(value)) out.push(...flatPaths(item, prefix ? `${prefix}.${key}` : key));
    return out;
  }
  return prefix ? [prefix] : [];
}

/** What a documented Zuper endpoint expects against what the HTTP node actually sent. Silent when the
 * payload is not readable JSON or the URL matches no documented endpoint. */
function docCheck(raw: unknown, records: ApiEndpointRecord[]): DocCheck | undefined {
  const parsed = parseNodeExecution(raw);
  const fields = (parsed?.executionData as { form_fields?: Record<string, unknown> } | null | undefined)?.form_fields;
  if (!fields) return undefined;
  const text = (field: unknown): string | undefined => {
    const value = field && typeof field === 'object' && 'value' in field ? (field as { value: unknown }).value : field;
    return typeof value === 'string' ? value : undefined;
  };
  const url = text(fields.url);
  const body = text(fields.json_body);
  if (!url || !body) return undefined;
  const record = matchApiEndpoint(url, text(fields.method), records);
  if (!record?.requestBody) return undefined;

  let sentJson: unknown;
  try {
    sentJson = JSON.parse(body);
  } catch {
    return undefined;
  }
  const sent = new Set(flatPaths(sentJson));
  const documented = new Set(record.requestBody.fieldPaths);
  return {
    endpoint: `${record.method} ${record.path}`,
    documented_not_sent: [...documented].filter((p) => !sent.has(p)).slice(0, MAX_DOC_GAPS),
    sent_not_documented: [...sent].filter((p) => !documented.has(p)).slice(0, MAX_DOC_GAPS),
  };
}

function ancestors(start: string, upstream: Map<string, string[]>): Set<string> {
  const seen = new Set<string>();
  const stack = [start];
  while (stack.length > 0) {
    for (const parent of upstream.get(stack.pop()!) ?? []) {
      if (!seen.has(parent)) {
        seen.add(parent);
        stack.push(parent);
      }
    }
  }
  return seen;
}

export async function buildBacktrace(
  executionContext: ExecutionContext,
  target: { uid: string; iteration?: number | null },
  deps: BacktraceDeps = {},
): Promise<Backtrace> {
  const env = makeResolverEnv(executionContext);
  const executionUid = executionContext.summary.workflow_execution?.execution_uid ?? 'unknown';
  const records = deps.records ? deps.records() : safeRecords();
  const failedRuns = new Set(
    (executionContext.summary.node_execution ?? []).filter((e) => e.status === 'FAILED').map((e) => nodeId(e.node_uid, e.current_iteration)),
  );

  const startIteration = target.iteration ?? defaultIteration(executionContext, target.uid) ?? null;
  const visited = new Set<string>();
  const nodes: TraceNode[] = [];
  let capped = false;
  let frontier: Array<{ uid: string; iteration: number | null; depth: number }> = [{ uid: target.uid, iteration: startIteration, depth: 0 }];

  const build = async (uid: string, iteration: number | null, depth: number): Promise<TraceNode> => {
    const definition = executionContext.findNode(uid);
    const pending = executionContext.getNodeExecutionData(uid, iteration ?? undefined);
    let runtime: TraceNode['runtime'] = null;
    let raw: unknown;
    if (pending) {
      raw = await pending;
      const failure = fetchFailure(raw);
      runtime = failure ? { unavailable: failure } : describeNodeRuntime(raw);
    }
    const resolved = definition ? await resolveNodeInputs(uid, definition.form_fields, env, iteration ?? undefined) : [];
    const type = String(definition?.action_key ?? definition?.node_name ?? 'unknown');
    return {
      id: nodeId(uid, iteration),
      uid,
      name: definition?.action_name ?? uid,
      type,
      iteration,
      depth,
      config: configOf(definition?.form_fields),
      ...(pending && runtime && !('unavailable' in runtime) ? { output: preview(toWrapper(raw).wrapper, OUTPUT_CHARS) } : {}),
      ran: Boolean(pending),
      failed: failedRuns.has(nodeId(uid, iteration)) || failedRuns.has(nodeId(uid, null)),
      runtime,
      inputs: resolved.map((input) => ({ ...input, produced_by: null })),
      own_inputs_good: true,
      output_bad: false,
      bad_because: [],
      feeds_failed: [],
      ...(type.startsWith('http_request') && pending ? optionalDocCheck(raw, records) : {}),
    };
  };

  while (frontier.length > 0) {
    const batch: typeof frontier = [];
    for (const item of frontier) {
      const id = nodeId(item.uid, item.iteration);
      if (visited.has(id)) continue;
      if (visited.size >= (deps.maxNodeRuns ?? MAX_NODE_RUNS) || item.depth > MAX_DEPTH) {
        capped = true;
        continue;
      }
      visited.add(id);
      batch.push(item);
    }
    const built = await Promise.all(batch.map((item) => build(item.uid, item.iteration, item.depth)));
    nodes.push(...built);
    frontier = built.flatMap((node) =>
      node.inputs
        .filter((input) => input.target?.uid && input.status !== 'target_unknown')
        .map((input) => ({ uid: input.target!.uid!, iteration: input.iteration ?? null, depth: node.depth + 1 })),
    );
  }

  // Link every input to the trace node that produced it, then judge each node's output by what its readers got.
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const consumers = new Map<string, Array<{ reader: TraceNode; input: TraceInput }>>();
  for (const node of nodes) {
    for (const input of node.inputs) {
      const producer = input.target?.uid ? byId.get(nodeId(input.target.uid, input.iteration ?? null)) : undefined;
      input.produced_by = producer?.id ?? null;
      if (producer) consumers.set(producer.id, [...(consumers.get(producer.id) ?? []), { reader: node, input }]);
    }
    node.own_inputs_good = node.inputs.every((i) => !BAD_INPUT.has(i.status));
  }
  for (const node of nodes) {
    const bad = (consumers.get(node.id) ?? []).filter(({ input }) => BAD_INPUT.has(input.status));
    node.feeds_failed = (consumers.get(node.id) ?? []).filter(({ reader }) => reader.failed).map(({ reader, input }) => `${reader.name}.${input.field}`);
    node.bad_because = bad.map(({ reader, input }) => `${reader.name} reads ${input.expression}: ${input.status}${input.failedAt ? ` (missing at ${input.failedAt})` : ''}`);
    node.output_bad = node.failed || bad.length > 0;
  }

  const { graph, branchDecisions } = getExecutionWorkflowGraph(executionContext, executionUid);
  const upstream = ancestors(target.uid, graph.upstream);
  const dataGaps = nodes
    .flatMap((n) => [
      ...(n.runtime && 'unavailable' in n.runtime ? [`${n.name}: ${n.runtime.unavailable}`] : []),
      ...n.inputs.filter((i) => i.status === 'fetch_failed').map((i) => `${n.name} -> ${i.target?.name ?? i.expression}`),
    ]);

  return {
    start: { uid: target.uid, name: executionContext.findNode(target.uid)?.action_name ?? target.uid, iteration: startIteration },
    nodes,
    origin_candidates: nodes
      .filter((n) => n.output_bad && n.own_inputs_good)
      .sort((a, b) => b.depth - a.depth)
      .map((n) => n.id),
    decisions: branchDecisions.filter((d) => upstream.has(d.node_uid)),
    data_gaps: [...new Set(dataGaps)],
    capped,
  };
}

function optionalDocCheck(raw: unknown, records: ApiEndpointRecord[]): { doc_check?: DocCheck } {
  const check = docCheck(raw, records);
  return check ? { doc_check: check } : {};
}

function safeRecords(): ApiEndpointRecord[] {
  try {
    return loadRecords();
  } catch {
    return [];
  }
}
