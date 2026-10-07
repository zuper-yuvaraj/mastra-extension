// What the investigator is handed before it takes a single tool step: the facts a human would read
// first in the canvas — what failed, what that node actually received, and the chain of nodes it
// depends on. Computed deterministically so the model starts from evidence, not from raw JSON.

import type { ChatContext } from '../lib/chatContext';
import { getExecutionWorkflowGraph, traceLineage } from '../lib/workflowGraph';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_SEED_HOPS } from './config';
import { describeNodeRuntime, type NodeRuntime } from './nodeData';
import { fetchFailure, preview, resolveNodeInputs, type ResolvedInput, type ResolverEnv } from './resolveInput';

export type RcaMode = 'EXECUTION_FAILED' | 'BRANCH_QUESTION' | 'NO_FAILURE' | 'RUNNING' | 'NO_EXECUTION';

const BRANCH_QUESTION = /\b(branch|path|route|flow|went|go(?:ing)? to|instead|expected|else|condition|skipped|didn'?t (?:run|trigger))\b/i;
const TERMINAL_OK = new Set(['COMPLETED', 'SUCCESS', 'SUCCEEDED']);

export function triage(executionContext: ExecutionContext | null, question?: string): RcaMode {
  if (!executionContext) return 'NO_EXECUTION';
  if (executionContext.failure) return 'EXECUTION_FAILED';
  if (question && BRANCH_QUESTION.test(question)) return 'BRANCH_QUESTION';
  const status = executionContext.summary.workflow_execution?.status?.trim().toUpperCase();
  if (status && TERMINAL_OK.has(status)) return 'NO_FAILURE';
  return 'RUNNING';
}

/** Connects the resolver to a real execution: names, upstream order, and lazily fetched node data. */
export function makeResolverEnv(executionContext: ExecutionContext): ResolverEnv {
  const executionUid = executionContext.summary.workflow_execution?.execution_uid ?? 'unknown';
  const { graph } = getExecutionWorkflowGraph(executionContext, executionUid);

  const byName = new Map<string, string>();
  for (const node of executionContext.workflowData?.nodes ?? []) {
    if (node.node_uid && node.action_name) byName.set(node.action_name.trim().toLowerCase(), node.node_uid);
  }

  const upstreamChain = (uid: string, hops: number): string | undefined => {
    let current: string | undefined = uid;
    for (let i = 0; i < hops && current; i++) current = graph.upstream.get(current)?.[0];
    return current;
  };

  return {
    uidByName: (name) => byName.get(name.trim().toLowerCase()),
    nameByUid: (uid) => executionContext.findNode(uid)?.action_name,
    previousNodeUid: (uid) => upstreamChain(uid, 1),
    recentNodeUid: (uid, n) => upstreamChain(uid, n),
    getNodeExecutionData: (uid, iteration) => executionContext.getNodeExecutionData(uid, iteration),
    iterationsOf: (uid) => executionContext.iterationsOf(uid),
  };
}

export interface ExecutedNodeSummary {
  order: number;
  uid: string;
  name: string;
  type: string;
  /** FAILED if any run failed, otherwise the last run's status. */
  status: string;
  /** How many times the node ran (more than 1 inside a loop). */
  runs: number;
  /** For a loop node, how many iterations it was asked to make. */
  total_iterations: number | null;
  is_loop: boolean;
  /** Loop iterations in which the node failed. */
  failed_iterations: number[];
}

/** The executed nodes in execution order, one entry per node. The execution summary has one entry per
 * node *run* (a 12-iteration loop contributes 13 entries for the loop and 12 for each body node), which
 * would bury the structure; the counts are kept so "which iteration failed" is still answerable. */
export function summarizeExecutedNodes(executionContext: ExecutionContext): ExecutedNodeSummary[] {
  const byUid = new Map<string, ExecutedNodeSummary>();
  for (const entry of executionContext.summary.node_execution ?? []) {
    let node = byUid.get(entry.node_uid);
    if (!node) {
      const definition = executionContext.findNode(entry.node_uid);
      node = {
        order: byUid.size + 1,
        uid: entry.node_uid,
        name: definition?.action_name ?? '(name unavailable)',
        type: definition?.node_name ?? '(type unavailable)',
        status: entry.status,
        runs: 0,
        total_iterations: null,
        is_loop: false,
        failed_iterations: [],
      };
      byUid.set(entry.node_uid, node);
    }
    node.runs += 1;
    if (entry.is_loop) {
      node.is_loop = true;
      node.total_iterations = entry.total_iterations ?? node.total_iterations;
    }
    if (entry.status === 'FAILED') {
      node.status = 'FAILED';
      if (entry.current_iteration !== null) node.failed_iterations.push(entry.current_iteration);
    } else if (node.status !== 'FAILED') {
      node.status = entry.status;
    }
  }
  return [...byUid.values()];
}

async function loadRuntime(executionContext: ExecutionContext, nodeUid: string): Promise<NodeRuntime | { unavailable: string } | null> {
  const pending = executionContext.getNodeExecutionData(nodeUid, defaultIteration(executionContext, nodeUid));
  if (!pending) return null;
  const raw = await pending;
  const failure = fetchFailure(raw);
  return failure ? { unavailable: failure } : describeNodeRuntime(raw);
}

/** Which loop iteration the failed node failed in, when it ran inside a loop. */
function failedIteration(executionContext: ExecutionContext, nodeUid: string): { iteration: number | null; total_iterations: number | null } {
  const entry = (executionContext.summary.node_execution ?? []).find((e) => e.node_uid === nodeUid && e.status === 'FAILED');
  return { iteration: entry?.current_iteration ?? null, total_iterations: entry?.total_iterations ?? null };
}

/** The iteration to look at for a node inside a loop: the one it failed in, else its last. Undefined for a
 * node that ran once outside any loop. */
export function defaultIteration(executionContext: ExecutionContext, nodeUid: string): number | undefined {
  const iterations = executionContext.iterationsOf(nodeUid);
  if (iterations.length === 0) return undefined;
  const failed = (executionContext.summary.node_execution ?? []).find(
    (e) => e.node_uid === nodeUid && e.status === 'FAILED' && e.current_iteration !== null,
  );
  return failed?.current_iteration ?? iterations[iterations.length - 1];
}

export interface SeedHop {
  distance: number;
  node_uid: string;
  name: string;
  ran: boolean;
  status: string | null;
  error: string | null;
  via: string[];
}

export interface RcaSeed {
  mode: RcaMode;
  execution: {
    uid: string | null;
    status: string | null;
    error_message: string | null;
    error_code: string | null;
    /** AUTOMATED or MANUAL, and LIVE or DRAFT: a draft test run executed an unpublished version. */
    mode: string | null;
    type: string | null;
    /** When the workflow version that actually ran was saved. */
    version_created_at: string | null;
  };
  failed_node: { uid: string | null; name: string | null; type: string | null; iteration: number | null; total_iterations: number | null } | null;
  /** What the failed node did at runtime: its OWN error and HTTP status (the execution-level message can be
   * empty), the fields it ran with after evaluation, and the node that fed it. */
  failed_node_runtime: NodeRuntime | { unavailable: string } | null;
  /** What the failed node's expressions resolved to, from this run's real data. */
  failed_node_inputs: ResolvedInput[];
  /** Nodes the failed node depends on, nearest first, with their status and error. */
  upstream_chain: SeedHop[];
  branch_decisions: ChatContext['branchDecisions'];
  /** Executed nodes in order. */
  executed_nodes: ExecutedNodeSummary[];
}

export async function buildSeed(
  executionContext: ExecutionContext | null,
  chatContext: ChatContext,
  question?: string,
): Promise<RcaSeed> {
  const mode = triage(executionContext, question);
  if (!executionContext) {
    return {
      mode,
      execution: { uid: null, status: null, error_message: null, error_code: null, mode: null, type: null, version_created_at: null },
      failed_node: null,
      failed_node_runtime: null,
      failed_node_inputs: [],
      upstream_chain: [],
      branch_decisions: [],
      executed_nodes: [],
    };
  }

  const wf = executionContext.summary.workflow_execution;
  const failure = executionContext.failure;
  const failedUid = failure?.node_uid ?? null;
  const failedDefinition = failedUid ? executionContext.findNode(failedUid) : undefined;

  const env = makeResolverEnv(executionContext);
  const [runtime, inputs, hops] = await Promise.all([
    failedUid ? loadRuntime(executionContext, failedUid) : Promise.resolve(null),
    failedUid && failedDefinition
      ? resolveNodeInputs(failedUid, failedDefinition.form_fields, env, defaultIteration(executionContext, failedUid))
      : Promise.resolve([]),
    failedUid
      ? traceLineage(failedUid, chatContext.lineage, executionContext, 'upstream', RCA_SEED_HOPS).catch(() => [])
      : Promise.resolve([]),
  ]);

  return {
    mode,
    execution: {
      uid: wf?.execution_uid ?? null,
      status: wf?.status ?? null,
      error_message: wf?.error_message ?? null,
      error_code: wf?.error_code ?? null,
      mode: wf?.mode ?? null,
      type: wf?.type ?? null,
      version_created_at: wf?.version_details?.created_at ?? null,
    },
    failed_node: failedUid
      ? {
          uid: failedUid,
          name: failure?.name ?? null,
          type: failedDefinition?.node_name ?? failedDefinition?.action_type ?? null,
          // Inside a loop the failure belongs to one iteration; the node data differs per iteration.
          ...failedIteration(executionContext, failedUid),
        }
      : null,
    failed_node_runtime: runtime,
    failed_node_inputs: inputs,
    upstream_chain: hops.map((hop) => ({
      distance: hop.distance,
      node_uid: hop.node_uid,
      name: hop.name,
      ran: hop.ran,
      status: hop.status,
      error: hop.error ? preview(hop.error, 500) : null,
      via: hop.via.map((v) => v.rawExpression),
    })),
    branch_decisions: chatContext.branchDecisions,
    executed_nodes: summarizeExecutedNodes(executionContext),
  };
}
