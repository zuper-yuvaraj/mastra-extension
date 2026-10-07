// What the investigator is handed before it takes a single tool step: the facts a human would read
// first in the canvas — what failed, what that node actually received, and the chain of nodes it
// depends on. Computed deterministically so the model starts from evidence, not from raw JSON.

import type { ChatContext } from '../lib/chatContext';
import { getExecutionWorkflowGraph, traceLineage } from '../lib/workflowGraph';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_SEED_HOPS } from './config';
import { preview, resolveNodeInputs, type ResolvedInput, type ResolverEnv } from './resolveInput';

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
    getNodeExecutionData: (uid) => executionContext.getNodeExecutionData(uid),
  };
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
  execution: { uid: string | null; status: string | null; error_message: string | null; error_code: string | null };
  failed_node: { uid: string | null; name: string | null; type: string | null } | null;
  /** What the failed node's expressions resolved to, from this run's real data. */
  failed_node_inputs: ResolvedInput[];
  /** Nodes the failed node depends on, nearest first, with their status and error. */
  upstream_chain: SeedHop[];
  branch_decisions: ChatContext['branchDecisions'];
  /** Executed nodes in order. */
  executed_nodes: Array<{ order: number; uid: string; name: string; type: string; status: string }>;
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
      execution: { uid: null, status: null, error_message: null, error_code: null },
      failed_node: null,
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
  const [inputs, hops] = await Promise.all([
    failedUid && failedDefinition ? resolveNodeInputs(failedUid, failedDefinition.form_fields, env) : Promise.resolve([]),
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
    },
    failed_node: failedUid
      ? { uid: failedUid, name: failure?.name ?? null, type: failedDefinition?.node_name ?? failedDefinition?.action_type ?? null }
      : null,
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
    executed_nodes: executionContext.executedNodes.map((n) => ({
      order: n.order,
      uid: n.node_uid,
      name: n.name,
      type: n.type,
      status: n.status,
    })),
  };
}
