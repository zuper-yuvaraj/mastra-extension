import type { WorkflowConnection, WorkflowDetail, WorkflowNode } from './zuperWorkflowApi';
import type { ExecutedWorkflowNode, ExecutionContext, NodeExecutionStatus } from './zuperExecutionApi';
import { extractReferences, renderSegments } from '../rca/references';

const GRAPH_CACHE_TTL_MS = 10 * 60 * 1000;

export type BranchType = 'IF_ELSE' | 'SPLIT' | 'LOOP';

export interface WorkflowGraph {
  /** node key (node_uid, or id when node_uid is unavailable) -> its direct upstream/downstream node keys. */
  upstream: Map<string, string[]>;
  downstream: Map<string, string[]>;
  /** node key -> branch type, present only for nodes with more than one outgoing connection. */
  branchType: Map<string, BranchType>;
}

export interface BranchDecision {
  node_uid: string;
  name: string;
  /** The condition's result for this run. */
  output_value: boolean;
  branch: 'TRUE' | 'FALSE';
  /** Name of the node the taken output leads to, or null when nothing is connected to it. */
  took: string | null;
  notTaken: string[];
  /** True when the taken output has no node connected, so the workflow ended at this node. */
  flow_ended: boolean;
  /** Loop iteration this decision was made in, for a conditional node inside a loop. */
  iteration: number | null;
}

export interface NodeReference {
  targetName: string;
  path: string;
  rawExpression: string;
}

export interface ResolvedReference extends NodeReference {
  targetKey: string | null;
}

export interface LineageGraph {
  /** node key -> the nodes it reads from, via getLatestNodeData(...)/getVariable(...) expressions. */
  references: Map<string, ResolvedReference[]>;
  /** node key -> the nodes that read from it. */
  referencedBy: Map<string, string[]>;
}

export interface LineageHop {
  distance: number;
  node_uid: string;
  name: string;
  ran: boolean;
  status: string | null;
  error: unknown;
  /** The reference expression(s), from the previous hop, that connect to this node. */
  via: NodeReference[];
}

type RawNode = WorkflowNode | ExecutedWorkflowNode;
type RawConnection = WorkflowConnection | Record<string, unknown>;

interface GraphNode {
  key: string;
  /** Every identifier a connection may use for this node: its `id` and its `node_uid`. */
  aliases: string[];
  name: string;
  formFields: Record<string, unknown>;
  isLoop: boolean;
}

interface GraphEdge {
  source: string;
  target: string;
  outputValue: boolean | undefined;
}

/** Reference names/node keys are matched forgivingly on case/whitespace, mirroring the equivalent
 * lookups in zuperWorkflowApi.ts/zuperExecutionApi.ts. */
function normalizeName(value: string): string {
  return value.trim().toLowerCase();
}

// Live WorkflowNode and executed ExecutedWorkflowNode disagree on shape (the former always has
// `id`/`action_name`; the latter is a loosely-typed snapshot), so every graph function below works
// off this normalized shape instead of accepting either raw type directly.
function toGraphNodes(nodes: RawNode[]): GraphNode[] {
  return nodes.map((node) => {
    const record = node as unknown as Record<string, unknown>;
    const uid = typeof record.node_uid === 'string' ? record.node_uid : undefined;
    const id = typeof record.id === 'string' ? record.id : undefined;
    return {
      key: uid ?? id ?? '',
      aliases: [id, uid].filter((a): a is string => Boolean(a)),
      name: typeof record.action_name === 'string' ? record.action_name : '',
      formFields: (record.form_fields as Record<string, unknown>) ?? {},
      isLoop: record.node_name === 'loop' || record.action_key === 'loop',
    };
  });
}

/** Connections name their endpoints by the node's `id` (e.g. `zuper_update_zuper_update18ab…`, or
 * `job.status_update` for a trigger), while everything else here is keyed by `node_uid`. Translate, or
 * no edge ever matches a node. Self-edges (a loop's marker edge) are dropped; edges to nodes that no
 * longer exist are left unresolved and filtered out by the callers. */
function toGraphEdges(connections: RawConnection[], nodes: RawNode[]): GraphEdge[] {
  const keyByAlias = new Map<string, string>();
  for (const node of toGraphNodes(nodes)) for (const alias of node.aliases) keyByAlias.set(alias, node.key);
  const resolve = (value: unknown): string => (typeof value === 'string' ? (keyByAlias.get(value) ?? value) : '');

  return connections
    .map((connection) => {
      const record = connection as Record<string, unknown>;
      return {
        source: resolve(record.source),
        target: resolve(record.target),
        outputValue: typeof record.output_value === 'boolean' ? record.output_value : undefined,
      };
    })
    .filter((edge) => edge.source !== edge.target);
}

function groupBySource(edges: GraphEdge[]): Map<string, GraphEdge[]> {
  const bySource = new Map<string, GraphEdge[]>();
  for (const edge of edges) {
    if (!edge.source) continue;
    bySource.set(edge.source, [...(bySource.get(edge.source) ?? []), edge]);
  }
  return bySource;
}

/** A node with >1 outgoing connection is IF_ELSE when its edges carry a boolean output_value
 * (a condition result), or SPLIT when they fan out with no output_value (unconditional branches).
 * A loop is its own thing: its two outputs mean "loop body" and "done", not a branch decision. */
export function classifyBranches(nodes: RawNode[], connections: RawConnection[]): Map<string, BranchType> {
  const graphNodes = toGraphNodes(nodes);
  const validKeys = new Set(graphNodes.map((n) => n.key).filter(Boolean));
  const loops = new Set(graphNodes.filter((n) => n.isLoop).map((n) => n.key));
  const edges = toGraphEdges(connections, nodes).filter((e) => validKeys.has(e.source) && validKeys.has(e.target));

  const branchType = new Map<string, BranchType>();
  for (const [source, outgoing] of groupBySource(edges)) {
    if (loops.has(source)) {
      branchType.set(source, 'LOOP');
      continue;
    }
    if (outgoing.length < 2) continue;
    const hasOutputValue = outgoing.some((e) => typeof e.outputValue === 'boolean');
    branchType.set(source, hasOutputValue ? 'IF_ELSE' : 'SPLIT');
  }
  return branchType;
}

export function buildWorkflowGraph(nodes: RawNode[], connections: RawConnection[]): WorkflowGraph {
  const validKeys = new Set(toGraphNodes(nodes).map((n) => n.key).filter(Boolean));
  const edges = toGraphEdges(connections, nodes).filter((e) => validKeys.has(e.source) && validKeys.has(e.target));

  const upstream = new Map<string, string[]>();
  const downstream = new Map<string, string[]>();
  for (const edge of edges) {
    downstream.set(edge.source, [...(downstream.get(edge.source) ?? []), edge.target]);
    upstream.set(edge.target, [...(upstream.get(edge.target) ?? []), edge.source]);
  }

  return { upstream, downstream, branchType: classifyBranches(nodes, connections) };
}

/** For each executed conditional node (If/Else), match its output_value against the connection it
 * actually took. Answers "expected Flow B, got Flow A" deterministically — without this, only the
 * model's reading of raw output_value/connections could answer it.
 *
 * Runs once per iteration for a node inside a loop (`iteration` says which). A conditional node with
 * only one of its two outputs connected still yields a decision: when the value selects the
 * unconnected output the flow simply ends there (`flow_ended: true`), a silent and common cause of
 * "why didn't the rest of the workflow run". Loops are not branches and are skipped. */
export function computeBranchDecisions(
  nodes: RawNode[],
  nodeExecution: NodeExecutionStatus[],
  connections: RawConnection[],
): BranchDecision[] {
  // Names come from the full node list, not just executed ones — the whole point of a branch
  // decision is naming the NOT-taken target too, and by definition it never executed.
  const graphNodes = toGraphNodes(nodes).filter((n) => n.key);
  const nameByUid = new Map(graphNodes.map((n): [string, string] => [n.key, n.name]));
  const loops = new Set(graphNodes.filter((n) => n.isLoop).map((n) => n.key));
  const edges = toGraphEdges(connections, nodes).filter((e) => nameByUid.has(e.source));
  const bySource = groupBySource(edges);

  const decisions: BranchDecision[] = [];
  for (const status of nodeExecution) {
    if (status.output_value === null || status.is_loop || loops.has(status.node_uid)) continue;
    const outgoing = bySource.get(status.node_uid);
    // Only nodes whose outputs are conditional (edges tagged true/false) make branch decisions.
    if (!outgoing?.some((e) => typeof e.outputValue === 'boolean')) continue;

    const taken = outgoing.find((e) => e.outputValue === status.output_value);
    decisions.push({
      node_uid: status.node_uid,
      name: nameByUid.get(status.node_uid) ?? status.node_uid,
      output_value: status.output_value,
      branch: status.output_value ? 'TRUE' : 'FALSE',
      took: taken ? (nameByUid.get(taken.target) ?? taken.target) : null,
      notTaken: outgoing.filter((e) => e !== taken).map((e) => nameByUid.get(e.target) ?? e.target),
      flow_ended: !taken,
      iteration: status.current_iteration,
    });
  }
  return decisions;
}

/** Every `$.getLatestNodeData('X')` / `$.getNodeData('X')` reference in a node's form_fields (all node
 * types — Code-node JS, URLs, json_body, expressions — not just Code nodes). Delegates to the RCA
 * extractor, which also captures the field path (`.data.data.customer.email`) that the previous regex
 * here dropped. `$item`, `$.getRecentNodeData` and variables are positional or non-node, so they are
 * not lineage edges by name; the RCA input resolver follows them separately. */
export function extractNodeReferences(node: RawNode): NodeReference[] {
  const record = node as unknown as Record<string, unknown>;
  return extractReferences(record.form_fields ?? {})
    .filter((ref) => (ref.kind === 'latest' || ref.kind === 'all_runs' || ref.kind === 'source_node') && (ref.targetName ?? ref.targetUid))
    // a source_node reference names its target by uid; buildLineageGraph resolves uids as well as names
    .map((ref) => ({ targetName: (ref.targetName ?? ref.targetUid)!, path: renderSegments(ref.path), rawExpression: ref.raw }));
}

export function buildLineageGraph(nodes: RawNode[]): LineageGraph {
  const graphNodes = toGraphNodes(nodes);
  // References name their target by display name (`$.getLatestNodeData('X')`) or, for a native node's
  // record source, by uid; both resolve to the node's key.
  const keyByName = new Map<string, string>([
    ...graphNodes.filter((n) => n.key && n.name).map((n): [string, string] => [normalizeName(n.name), n.key]),
    ...graphNodes.filter((n) => n.key).map((n): [string, string] => [normalizeName(n.key), n.key]),
  ]);

  const references = new Map<string, ResolvedReference[]>();
  const referencedBy = new Map<string, string[]>();

  nodes.forEach((node, index) => {
    const graphNode = graphNodes[index];
    if (!graphNode?.key) return;

    const resolved = extractNodeReferences(node).map((ref) => ({
      ...ref,
      targetKey: keyByName.get(normalizeName(ref.targetName)) ?? null,
    }));
    references.set(graphNode.key, resolved);

    for (const ref of resolved) {
      if (!ref.targetKey) continue;
      referencedBy.set(ref.targetKey, [...(referencedBy.get(ref.targetKey) ?? []), graphNode.key]);
    }
  });

  return { references, referencedBy };
}

/** Walks the lineage graph outward from startNode, hop by hop, fetching each hop's runtime data in
 * parallel (not one node per model round-trip) via the already-cached ExecutionContext. Default
 * direction is upstream (root-cause backtracking); downstream answers "X's bad data broke Y and Z". */
export async function traceLineage(
  startNode: string,
  lineage: LineageGraph,
  executionContext: ExecutionContext,
  direction: 'upstream' | 'downstream' = 'upstream',
  maxHops = 5,
): Promise<LineageHop[]> {
  const hops: LineageHop[] = [];
  const visited = new Set<string>([startNode]);
  let frontier = [startNode];

  for (let distance = 1; distance <= maxHops && frontier.length > 0; distance++) {
    const viaByKey = new Map<string, NodeReference[]>();

    if (direction === 'upstream') {
      for (const key of frontier) {
        for (const ref of lineage.references.get(key) ?? []) {
          if (!ref.targetKey || visited.has(ref.targetKey)) continue;
          viaByKey.set(ref.targetKey, [...(viaByKey.get(ref.targetKey) ?? []), ref]);
        }
      }
    } else {
      for (const [consumerKey, refs] of lineage.references) {
        if (visited.has(consumerKey)) continue;
        const matching = refs.filter((ref) => ref.targetKey && frontier.includes(ref.targetKey));
        if (matching.length > 0) viaByKey.set(consumerKey, [...(viaByKey.get(consumerKey) ?? []), ...matching]);
      }
    }

    const keys = [...viaByKey.keys()];
    if (keys.length === 0) break;
    keys.forEach((key) => visited.add(key));

    const results = await Promise.all(
      keys.map(async (key) => {
        const node = executionContext.findNode(key);
        const dataPromise = executionContext.getNodeExecutionData(key);
        const data = dataPromise ? ((await dataPromise) as Record<string, unknown> | undefined) : undefined;
        return { key, node, data };
      }),
    );

    for (const { key, node, data } of results) {
      hops.push({
        distance,
        node_uid: key,
        name: node?.action_name ?? key,
        ran: Boolean(data),
        status: typeof data?.status === 'string' ? data.status : null,
        error: data?.error ?? null,
        via: viaByKey.get(key) ?? [],
      });
    }
    frontier = keys;
  }

  return hops;
}

interface CachedLiveGraph {
  graph: WorkflowGraph;
  lineage: LineageGraph;
  computedAt: number;
}

interface CachedExecutionGraph extends CachedLiveGraph {
  branchDecisions: BranchDecision[];
}

// These are pure computations over data the caller already fetched/cached (zuperWorkflowApi.ts /
// zuperExecutionApi.ts), so the cache here only bounds memory and avoids re-running the regex/graph
// pass every chat turn — it is never a source of stale network data.
const liveGraphCache = new Map<string, CachedLiveGraph>();
const executionGraphCache = new Map<string, CachedExecutionGraph>();

function isFresh(computedAt: number): boolean {
  return Date.now() - computedAt < GRAPH_CACHE_TTL_MS;
}

export function getLiveWorkflowGraph(workflow: WorkflowDetail): CachedLiveGraph {
  const key = `${workflow.workflow_uid}:${workflow.draft_version?.version ?? 'unversioned'}`;
  const cached = liveGraphCache.get(key);
  if (cached && isFresh(cached.computedAt)) return cached;

  const entry: CachedLiveGraph = {
    graph: buildWorkflowGraph(workflow.nodes, workflow.connections),
    lineage: buildLineageGraph(workflow.nodes),
    computedAt: Date.now(),
  };
  liveGraphCache.set(key, entry);
  return entry;
}

export function getExecutionWorkflowGraph(
  executionContext: ExecutionContext,
  executionUid: string,
): CachedExecutionGraph {
  const cached = executionGraphCache.get(executionUid);
  if (cached && isFresh(cached.computedAt)) return cached;

  const nodes = executionContext.workflowData?.nodes ?? [];
  const connections = executionContext.workflowData?.connections ?? [];
  const entry: CachedExecutionGraph = {
    graph: buildWorkflowGraph(nodes, connections),
    lineage: buildLineageGraph(nodes),
    branchDecisions: computeBranchDecisions(nodes, executionContext.summary.node_execution ?? [], connections),
    computedAt: Date.now(),
  };
  executionGraphCache.set(executionUid, entry);
  return entry;
}
