const EXECUTION_CACHE_TTL_MS = 10 * 60 * 1000;
/** A still-running execution changes under us, so it's only cached long enough to dedupe bursts. */
const LIVE_EXECUTION_CACHE_TTL_MS = 5 * 1000;

const TERMINAL_STATUSES = new Set([
  'FAILED',
  'COMPLETED',
  'SUCCESS',
  'SUCCEEDED',
  'ERROR',
  'CANCELLED',
  'CANCELED',
  'STOPPED',
  'TERMINATED',
  'ABORTED',
  'TIMEOUT',
]);

/** Unrecognised statuses count as non-terminal on purpose: the cost of being wrong that way is one
 * extra fetch, whereas wrongly assuming "finished" serves a mid-run snapshot for the full TTL. */
export function isTerminalStatus(status: string | undefined): boolean {
  return status ? TERMINAL_STATUSES.has(status.trim().toUpperCase()) : false;
}

export interface NodeExecutionStatus {
  node_uid: string;
  status: string;
  current_iteration: number | null;
  total_iterations: number | null;
  output_value: boolean | null;
  is_loop: boolean;
}

/** One node as it existed in the version that actually ran. Only the fields we rely on are typed;
 * the real object carries more (position, color, icons) which we ignore or drop downstream. */
export interface ExecutedWorkflowNode {
  node_uid: string;
  action_name?: string;
  node_name?: string;
  action_type?: string;
  node_category?: string;
  execution_status?: string;
  form_fields?: Record<string, unknown>;
  [key: string]: unknown;
}

/** The snapshot of the workflow as it was when this execution ran — the source of truth for
 * diagnosing that execution, as opposed to the workflow detail API which returns the latest
 * (possibly since-edited) version. */
export interface ExecutedWorkflowData {
  workflow_uid?: string;
  workflow_name?: string;
  nodes?: ExecutedWorkflowNode[];
  connections?: Array<Record<string, unknown>>;
  [key: string]: unknown;
}

export interface WorkflowExecutionSummary {
  execution_uid: string;
  workflow_uid: string;
  status: string;
  error_message?: string;
  error_code?: string;
  failed_node_uid?: string;
  /** AUTOMATED (fired by a trigger) or MANUAL (a person ran it, e.g. Test Workflow). */
  mode?: string;
  /** LIVE (the published version) or DRAFT (an unpublished test version). */
  type?: string;
  version_details?: { revision_uid?: string; type?: string; version?: string; created_at?: string };
  workflow_data?: ExecutedWorkflowData;
}

export interface ExecutionSummaryResponse {
  workflow_execution: WorkflowExecutionSummary;
  node_execution: NodeExecutionStatus[];
}

/** One executed node, joined from node_execution[] to its definition in workflow_data.nodes[].
 * `node_execution` alone carries no name, so this join is what lets a reference like
 * `$.getLatestNodeData('Get Job 2')` be resolved back to a node_uid. */
export interface ExecutedNodeEntry {
  node_uid: string;
  name: string;
  type: string;
  status: string;
  order: number;
}

export interface ExecutionContext {
  summary: ExecutionSummaryResponse;
  /** The executed workflow snapshot, when the API provided one. */
  workflowData: ExecutedWorkflowData | null;
  /** Compact index of what actually ran, in execution order. */
  executedNodes: ExecutedNodeEntry[];
  /** The failed node's uid/name plus this execution's error fields, when the execution failed. */
  failure: { node_uid: string | null; name: string | null; error_message: string | null; error_code: string | null } | null;
  /** Resolves a node name (as used in references) or a node_uid to its full executed definition. */
  findNode: (nameOrUid: string) => ExecutedWorkflowNode | undefined;
  /**
   * Lazily fetches (and caches) one node's raw execution detail, by node name or node_uid. Returns
   * undefined if it didn't run in this execution. Nothing is fetched until this is actually called.
   * A node inside a loop ran once per iteration and is fetched per iteration (`?iteration=N`): pass the
   * iteration; see `iterationsOf` for which exist.
   */
  getNodeExecutionData: (nameOrUid: string, iteration?: number) => Promise<unknown> | undefined;
  /** True for a context built from the live workflow definition with no run behind it: definitions and
   * structure can be read, but there is no runtime data (see rca/definitionContext.ts). */
  definitionOnly?: boolean;
  /** The loop iterations a node ran in (ascending), from the execution summary. Empty for a node that
   * ran once outside any loop. A loop node itself has one more (the final "done" pass) than its body. */
  iterationsOf: (nameOrUid: string) => number[];
}

/** Reference names are hand-typed into expressions, so match forgivingly on case/whitespace. */
function normalizeName(value: string): string {
  return value.trim().toLowerCase();
}

interface CacheEntry {
  promise: Promise<ExecutionContext>;
  fetchedAt: number;
  /** Set once the fetch resolves; stays false while in flight or while the run is still going. */
  isTerminal: boolean;
}

// execution_uid is a globally-unique UUID (not per-tenant), so a single cache keyed by it alone is
// safe even though this process serves many different Zuper accounts.
const cache = new Map<string, CacheEntry>();

function authHeaders(token: string): HeadersInit {
  return {
    authorization: `Bearer ${token}`,
    'x-zuper-client': 'WEB_APP',
    'x-zuper-client-version': '3.0',
    accept: 'application/json',
  };
}

async function fetchExecutionSummary(
  workflowUid: string,
  executionUid: string,
  token: string,
  workflowBuilderUrl: string,
): Promise<ExecutionSummaryResponse> {
  const res = await fetch(
    `${workflowBuilderUrl}/api/workflows/${workflowUid}/executions/${executionUid}/summary`,
    { headers: authHeaders(token) },
  );
  if (!res.ok) throw new Error(`API_${res.status}`);
  return res.json();
}

async function fetchNodeExecutionData(
  workflowUid: string,
  executionUid: string,
  nodeUid: string,
  token: string,
  workflowBuilderUrl: string,
  iteration?: number,
): Promise<unknown> {
  const query = iteration === undefined ? '' : `?iteration=${iteration}`;
  const res = await fetch(
    `${workflowBuilderUrl}/api/workflows/${workflowUid}/executions/${executionUid}/nodes/${nodeUid}${query}`,
    { headers: authHeaders(token) },
  );
  if (!res.ok) throw new Error(`API_${res.status}`);
  return res.json();
}

/** Builds an ExecutionContext from an execution summary and a way to load one node's runtime data.
 * Split out of the fetch path so a captured fixture can be turned into the same context offline. */
export function createExecutionContext(
  summary: ExecutionSummaryResponse,
  loadNodeData: (nodeUid: string, iteration?: number) => Promise<unknown>,
): ExecutionContext {
  const nodeExecution = summary.node_execution ?? [];
  const validNodeUids = new Set(nodeExecution.map((n) => n.node_uid));
  const nodeDataCache = new Map<string, Promise<unknown>>();

  // Derived once from workflow_data — no extra API calls. Sized by the workflow at hand rather
  // than any fixed assumption, and degrades to empty if this execution carried no snapshot.
  const workflowData = summary.workflow_execution?.workflow_data ?? null;
  const allNodes = workflowData?.nodes ?? [];

  const nodesByUid = new Map<string, ExecutedWorkflowNode>();
  const nodesByName = new Map<string, ExecutedWorkflowNode>();
  for (const node of allNodes) {
    if (node?.node_uid) nodesByUid.set(node.node_uid, node);
    if (node?.action_name) nodesByName.set(normalizeName(node.action_name), node);
  }

  const executedNodes: ExecutedNodeEntry[] = nodeExecution.map((entry, index) => {
    const node = nodesByUid.get(entry.node_uid);
    return {
      node_uid: entry.node_uid,
      name: node?.action_name ?? '(name unavailable)',
      type: node?.node_name ?? '(type unavailable)',
      status: entry.status,
      order: index + 1,
    };
  });

  const failedNodeUid = summary.workflow_execution?.failed_node_uid ?? null;
  const failure = failedNodeUid
    ? {
        node_uid: failedNodeUid,
        name: nodesByUid.get(failedNodeUid)?.action_name ?? null,
        error_message: summary.workflow_execution?.error_message ?? null,
        error_code: summary.workflow_execution?.error_code ?? null,
      }
    : null;

  const findNode = (nameOrUid: string): ExecutedWorkflowNode | undefined =>
    nodesByUid.get(nameOrUid) ?? nodesByName.get(normalizeName(nameOrUid));

  const resolveUid = (nameOrUid: string): string | undefined => {
    const nodeUid = validNodeUids.has(nameOrUid) ? nameOrUid : findNode(nameOrUid)?.node_uid;
    return nodeUid && validNodeUids.has(nodeUid) ? nodeUid : undefined;
  };

  const iterationsByUid = new Map<string, number[]>();
  for (const entry of nodeExecution) {
    if (entry.current_iteration === null || entry.current_iteration === undefined) continue;
    const list = iterationsByUid.get(entry.node_uid) ?? [];
    if (!list.includes(entry.current_iteration)) list.push(entry.current_iteration);
    iterationsByUid.set(entry.node_uid, list.sort((a, b) => a - b));
  }
  const iterationsOf = (nameOrUid: string): number[] => {
    const uid = resolveUid(nameOrUid);
    return uid ? [...(iterationsByUid.get(uid) ?? [])] : [];
  };

  const getNodeExecutionData = (nameOrUid: string, iteration?: number): Promise<unknown> | undefined => {
    const nodeUid = resolveUid(nameOrUid);
    if (!nodeUid) return undefined;

    const key = `${nodeUid}:${iteration ?? ''}`;
    let cached = nodeDataCache.get(key);
    if (!cached) {
      cached = loadNodeData(nodeUid, iteration).catch((err) => ({
        error: err instanceof Error ? err.message : 'FETCH_FAILED',
      }));
      nodeDataCache.set(key, cached);
    }
    return cached;
  };

  return { summary, workflowData, executedNodes, failure, findNode, getNodeExecutionData, iterationsOf };
}

async function fetchExecutionContext(
  workflowUid: string,
  executionUid: string,
  token: string,
  workflowBuilderUrl: string,
): Promise<ExecutionContext> {
  const summary = await fetchExecutionSummary(workflowUid, executionUid, token, workflowBuilderUrl);
  return createExecutionContext(summary, (nodeUid, iteration) =>
    fetchNodeExecutionData(workflowUid, executionUid, nodeUid, token, workflowBuilderUrl, iteration),
  );
}

/** Cached per execution_uid. A finished execution is immutable, so it gets a generous TTL — but a
 * live "Test Workflow" run is captured while still in flight, and caching that snapshot would keep
 * answering with `status: RUNNING` and a partial node list long after the run has actually failed.
 * So the TTL only applies once the execution reached a terminal status. Re-fetching also rebuilds
 * the ExecutionContext, which clears the per-node data memoized inside it. */
export function getExecutionContext(
  workflowUid: string,
  executionUid: string,
  token: string,
  workflowBuilderUrl: string,
  forceRefresh = false,
): Promise<ExecutionContext> {
  const entry = cache.get(executionUid);
  const ttl = entry?.isTerminal ? EXECUTION_CACHE_TTL_MS : LIVE_EXECUTION_CACHE_TTL_MS;
  const stale = !entry || Date.now() - entry.fetchedAt > ttl;

  if (!entry || stale || forceRefresh) {
    const promise = fetchExecutionContext(workflowUid, executionUid, token, workflowBuilderUrl);
    const fresh: CacheEntry = { promise, fetchedAt: Date.now(), isTerminal: false };
    cache.set(executionUid, fresh);
    void promise
      .then((context) => {
        fresh.isTerminal = isTerminalStatus(context.summary.workflow_execution?.status);
      })
      .catch(() => {
        // Leave isTerminal false so the next call retries rather than serving a failed fetch.
      });
    return promise;
  }

  return entry.promise;
}
