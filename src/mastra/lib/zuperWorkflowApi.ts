const WORKFLOW_CACHE_TTL_MS = 0.5 * 60 * 1000;

export interface WorkflowNode {
  id: string;
  /** The stable UUID used by the execution APIs (distinct from `id`, which is an internal node key). */
  node_uid?: string;
  action_key: string;
  action_name: string;
  action_type: 'TRIGGER' | 'ACTION';
  node_display_name?: string;
  description?: string;
  form_fields?: Record<string, unknown>;
}

export interface WorkflowConnection {
  source: string;
  target: string;
  output_value?: boolean;
}

export interface WorkflowDetail {
  workflow_uid: string;
  workflow_name: string;
  workflow_description?: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  draft_version?: { version: string };
}

interface CacheEntry {
  promise: Promise<WorkflowDetail>;
  fetchedAt: number;
}

// workflow_uid is a globally-unique UUID (not per-tenant), so a single cache keyed by it alone is
// safe even though this process serves many different Zuper accounts.
const cache = new Map<string, CacheEntry>();

async function fetchWorkflowDetail(
  workflowUid: string,
  token: string,
  workflowBuilderUrl: string,
): Promise<WorkflowDetail> {
  const res = await fetch(`${workflowBuilderUrl}/api/workflows/${workflowUid}`, {
    headers: {
      authorization: `Bearer ${token}`,
      'x-zuper-client': 'WEB_APP',
      'x-zuper-client-version': '3.0',
      accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error(`API_${res.status}`);

  const body = await res.json();
  return body.data as WorkflowDetail;
}

/** Reference names are hand-typed into expressions, so match forgivingly on case/whitespace. */
function normalizeName(value: string): string {
  return value.trim().toLowerCase();
}

/** Resolves a node name (as used in `$.getLatestNodeData(...)` references) or a node_uid to its
 * live definition. Mirrors the equivalent lookup in zuperExecutionApi.ts's ExecutionContext.findNode,
 * against the live workflow's nodes instead of an execution's embedded snapshot. */
export function findWorkflowNode(nodes: WorkflowNode[], nameOrUid: string): WorkflowNode | undefined {
  return (
    nodes.find((node) => node.node_uid === nameOrUid) ??
    nodes.find((node) => normalizeName(node.action_name) === normalizeName(nameOrUid))
  );
}

export function getWorkflowDetail(
  workflowUid: string,
  token: string,
  workflowBuilderUrl: string,
  forceRefresh = false,
): Promise<WorkflowDetail> {
  const entry = cache.get(workflowUid);
  const stale = !entry || Date.now() - entry.fetchedAt > WORKFLOW_CACHE_TTL_MS;

  if (!entry || stale || forceRefresh) {
    const promise = fetchWorkflowDetail(workflowUid, token, workflowBuilderUrl);
    cache.set(workflowUid, { promise, fetchedAt: Date.now() });
    return promise;
  }

  return entry.promise;
}
