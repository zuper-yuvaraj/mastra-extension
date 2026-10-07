// The investigator's read-only inspection functions, as plain functions of (execution, args) so they
// can be tested without Mastra or a network. tools/rcaTools.ts wraps them as Mastra tools.

import type { ChatContext } from '../lib/chatContext';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_TOOL_RESULT_CHARS } from './config';
import { fetchFailure, resolveNodeInputs, toWrapper } from './resolveInput';
import { selectValue, summarizeShape } from './shape';
import { makeResolverEnv } from './seed';

const NO_EXECUTION = {
  found: false,
  message: 'No execution is active for this workflow, so there is no runtime data to inspect.',
};

/** Cosmetic fields a definition read does not need (mirrors tools/zuperChatTools.ts). */
const DROP_FIELDS = new Set(['pinned_data', 'credentials', 'color', 'node_icon', 'is_pinned', 'is_active']);

export function capResult<T>(value: T, limit = RCA_TOOL_RESULT_CHARS): T | { truncated: true; note: string; preview: string } {
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  if (text.length <= limit) return value;
  return {
    truncated: true,
    note: `Result was ${text.length} characters; showing the first ${limit}. Ask for a narrower selection (a field path).`,
    preview: text.slice(0, limit),
  };
}

export function getExecutionOverview(executionContext: ExecutionContext | null, chatContext: ChatContext) {
  if (!executionContext) return NO_EXECUTION;
  const wf = executionContext.summary.workflow_execution;
  return {
    found: true,
    execution: {
      uid: wf?.execution_uid ?? null,
      status: wf?.status ?? null,
      error_message: wf?.error_message ?? null,
      error_code: wf?.error_code ?? null,
    },
    failure: executionContext.failure,
    executed_nodes: executionContext.executedNodes.map((n) => ({
      order: n.order,
      uid: n.node_uid,
      name: n.name,
      type: n.type,
      status: n.status,
      branch_type: chatContext.branchType.get(n.node_uid) ?? null,
    })),
    note: 'Nodes are listed in execution order. Node names are what expressions reference.',
  };
}

function notFound(nameOrUid: string, executionContext: ExecutionContext) {
  return {
    found: false,
    message: `No node "${nameOrUid}" in the workflow version that ran.`,
    available_nodes: executionContext.executedNodes.map((n) => n.name).slice(0, 60),
  };
}

export function getNodeDefinition(executionContext: ExecutionContext | null, nameOrUid: string) {
  if (!executionContext) return NO_EXECUTION;
  const node = executionContext.findNode(nameOrUid);
  if (!node) return notFound(nameOrUid, executionContext);
  const trimmed: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node)) if (!DROP_FIELDS.has(key)) trimmed[key] = value;
  return { found: true, definition: trimmed };
}

export async function getNodeInput(executionContext: ExecutionContext | null, nameOrUid: string) {
  if (!executionContext) return NO_EXECUTION;
  const node = executionContext.findNode(nameOrUid);
  if (!node?.node_uid) return notFound(nameOrUid, executionContext);

  const inputs = await resolveNodeInputs(node.node_uid, node.form_fields, makeResolverEnv(executionContext));
  const problems = inputs.filter((i) => i.status !== 'resolved' && i.status !== 'variable');
  return {
    found: true,
    node: { uid: node.node_uid, name: node.action_name ?? null, type: node.node_name ?? null },
    inputs,
    summary:
      inputs.length === 0
        ? 'This node reads no other node or variable — its fields are literal values.'
        : problems.length === 0
          ? `All ${inputs.length} reference(s) resolved to a value.`
          : `${problems.length} of ${inputs.length} reference(s) did not resolve to a usable value: ${problems
              .map((p) => `${p.field} (${p.status})`)
              .join(', ')}.`,
  };
}

const TOP_LEVEL_KEYS = ['status', 'error', 'error_message', 'message', 'http_status', 'output_value'];

/** Runtime payload of one executed node: its shape first, then any selected paths in full. */
export async function getNodeData(
  executionContext: ExecutionContext | null,
  nameOrUid: string,
  select?: string[],
) {
  if (!executionContext) return NO_EXECUTION;
  const node = executionContext.findNode(nameOrUid);
  if (!node?.node_uid) return notFound(nameOrUid, executionContext);

  const pending = executionContext.getNodeExecutionData(node.node_uid);
  const identity = { uid: node.node_uid, name: node.action_name ?? null, type: node.node_name ?? null };
  if (!pending) return { found: true, ran: false, node: identity, message: `"${node.action_name}" did not run in this execution.` };

  const raw = await pending;
  const failure = fetchFailure(raw);
  if (failure) {
    return { found: true, ran: true, node: identity, fetch_failed: failure, message: 'The node ran but its data could not be loaded.' };
  }

  const runs = (Array.isArray(raw) ? raw : [raw]).map(toWrapper);
  const latest = runs[runs.length - 1]!;
  const wrapper = latest.wrapper as Record<string, unknown> | undefined;

  const topLevel: Record<string, unknown> = {};
  for (const source of [raw, wrapper, (wrapper as { data?: unknown } | undefined)?.data]) {
    if (source && typeof source === 'object' && !Array.isArray(source)) {
      for (const key of TOP_LEVEL_KEYS) {
        if (key in (source as object) && !(key in topLevel)) topLevel[key] = (source as Record<string, unknown>)[key];
      }
    }
  }

  const base = {
    found: true,
    ran: true,
    node: identity,
    runs: runs.length,
    top_level: topLevel,
    shape_assumed: latest.assumed || undefined,
  };

  if (select && select.length > 0) {
    return { ...base, selected: select.slice(0, 8).map((selector) => selectValue(latest.wrapper, selector)) };
  }
  return {
    ...base,
    shape: summarizeShape(latest.wrapper),
    hint: 'This is the shape only. Call again with `select` (e.g. ["data.data.customer"]) to read specific values.',
  };
}
