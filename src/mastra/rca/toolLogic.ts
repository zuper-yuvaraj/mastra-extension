// The investigator's read-only inspection functions, as plain functions of (execution, args) so they
// can be tested without Mastra or a network. tools/rcaTools.ts wraps them as Mastra tools.

import type { ChatContext } from '../lib/chatContext';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_TOOL_RESULT_CHARS } from './config';
import { describeNodeRuntime, parseNodeExecution } from './nodeData';
import { fetchFailure, resolveNodeInputs, toWrapper } from './resolveInput';
import { selectValue, summarizeShape } from './shape';
import { defaultIteration, makeResolverEnv, summarizeExecutedNodes } from './seed';

const NO_EXECUTION = {
  found: false,
  message: 'No execution is active for this workflow, so there is no runtime data to inspect.',
};

/** Said by every runtime-data tool when the chat has the workflow open but no run: definitions are readable,
 * values are not. Deliberately not worded as a fetch failure (that would flag a data gap in the verdict). */
const NO_RUN = {
  found: true,
  ran: false,
  no_run: true,
  message: 'There is no execution here, only the workflow definition. Runtime values do not exist; answer from the node definitions and connections, and do not state what any node received or returned.',
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
  if (executionContext.definitionOnly) {
    return {
      ...NO_RUN,
      nodes: (executionContext.workflowData?.nodes ?? []).map((n) => n.action_name),
      note: 'The workflow outline (nodes and connections) is in the seed. Use get_node_definition for any node.',
    };
  }
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
    executed_nodes: summarizeExecutedNodes(executionContext).map((n) => ({
      ...n,
      branch_type: chatContext.branchType.get(n.uid) ?? null,
    })),
    note:
      'Nodes are listed in execution order, one entry per node; `runs` is how many times it ran (more than 1 ' +
      'inside a loop). Node names are what expressions reference.',
  };
}

function notFound(nameOrUid: string, executionContext: ExecutionContext) {
  return {
    found: false,
    message: `No node "${nameOrUid}" in the workflow version that ran.`,
    available_nodes: (executionContext.definitionOnly
      ? (executionContext.workflowData?.nodes ?? []).map((n) => n.action_name)
      : executionContext.executedNodes.map((n) => n.name)
    ).slice(0, 60),
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

function iterationProblem(executionContext: ExecutionContext, nodeUid: string, iteration: number | undefined, identity: object) {
  const available = executionContext.iterationsOf(nodeUid);
  if (iteration === undefined || available.length === 0 || available.includes(iteration)) return null;
  return {
    found: true,
    ran: true,
    node: identity,
    available_iterations: available,
    message: `This node did not run in iteration ${iteration}. It ran in iterations ${available.join(', ')}.`,
  };
}

export async function getNodeInput(executionContext: ExecutionContext | null, nameOrUid: string, iteration?: number) {
  if (!executionContext) return NO_EXECUTION;
  const node = executionContext.findNode(nameOrUid);
  if (!node?.node_uid) return notFound(nameOrUid, executionContext);

  const identity = { uid: node.node_uid, name: node.action_name ?? null, type: node.node_name ?? null };
  if (executionContext.definitionOnly) return { ...NO_RUN, node: identity, form_fields: node.form_fields ?? {} };
  const wrongIteration = iterationProblem(executionContext, node.node_uid, iteration, identity);
  if (wrongIteration) return wrongIteration;
  const at = iteration ?? defaultIteration(executionContext, node.node_uid);

  const inputs = await resolveNodeInputs(node.node_uid, node.form_fields, makeResolverEnv(executionContext), at);
  const problems = inputs.filter((i) => i.status !== 'resolved' && i.status !== 'variable');
  return {
    found: true,
    node: identity,
    ...(at !== undefined ? { iteration: at, available_iterations: executionContext.iterationsOf(node.node_uid) } : {}),
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

export interface NodeDataOptions {
  /** Paths to read in full, e.g. ["data.data.customer"]. */
  select?: string[];
  /** `output` (default): what the node produced. `input`: what it received (the previous node's data). */
  which?: 'output' | 'input';
  /** For a node inside a loop: which iteration. Default: the one it failed in, else the last. */
  iteration?: number;
}

/** Runtime of one executed node: the facts first (status, its own error, HTTP status, the fields it ran
 * with, what fed it), then the payload shape, then any selected paths in full. */
export async function getNodeData(
  executionContext: ExecutionContext | null,
  nameOrUid: string,
  arg?: string[] | NodeDataOptions,
) {
  const { select, which = 'output', iteration: requested } = Array.isArray(arg) ? { select: arg, which: 'output' as const, iteration: undefined } : (arg ?? {});
  if (!executionContext) return NO_EXECUTION;
  const node = executionContext.findNode(nameOrUid);
  if (!node?.node_uid) return notFound(nameOrUid, executionContext);

  const identity = { uid: node.node_uid, name: node.action_name ?? null, type: node.node_name ?? null };
  if (executionContext.definitionOnly) return { ...NO_RUN, node: identity };
  const wrongIteration = iterationProblem(executionContext, node.node_uid, requested, identity);
  if (wrongIteration) return wrongIteration;
  const iteration = requested ?? defaultIteration(executionContext, node.node_uid);
  const availableIterations = executionContext.iterationsOf(node.node_uid);

  const pending = executionContext.getNodeExecutionData(node.node_uid, iteration);
  if (!pending) return { found: true, ran: false, node: identity, message: `"${node.action_name}" did not run in this execution.` };

  const raw = await pending;
  const failure = fetchFailure(raw);
  if (failure) {
    return {
      found: true,
      ran: true,
      node: identity,
      ...(iteration !== undefined ? { iteration } : {}),
      fetch_failed: failure,
      message: 'The node ran but its data could not be loaded.',
    };
  }

  const latest = toWrapper(raw);
  const latestRaw = raw;
  const wrapper = latest.wrapper as Record<string, unknown> | undefined;

  // The real API shape (node_execution envelope) carries the node's own facts; an older/unknown shape
  // falls back to scanning for the usual status/error keys.
  const runtime = describeNodeRuntime(latestRaw);
  let topLevel: Record<string, unknown> | undefined;
  if (!runtime) {
    topLevel = {};
    for (const source of [raw, wrapper, (wrapper as { data?: unknown } | undefined)?.data]) {
      if (source && typeof source === 'object' && !Array.isArray(source)) {
        for (const key of TOP_LEVEL_KEYS) {
          if (key in (source as object) && !(key in topLevel)) topLevel[key] = (source as Record<string, unknown>)[key];
        }
      }
    }
  }

  const received = parseNodeExecution(latestRaw)?.inputData ?? null;
  const base = {
    found: true,
    ran: true,
    node: identity,
    runs: Math.max(availableIterations.length, 1),
    ...(iteration !== undefined ? { iteration, available_iterations: availableIterations } : {}),
    ...(runtime ? { runtime } : { top_level: topLevel }),
    shape_assumed: latest.assumed || undefined,
  };

  if (select && select.length > 0) {
    const target = which === 'input' ? received : latest.wrapper;
    if (which === 'input' && received === null) {
      return { ...base, which, selected: [], message: 'This node received no input data (it is a trigger, or nothing fed it).' };
    }
    return { ...base, which, selected: select.slice(0, 8).map((selector) => selectValue(target, selector)) };
  }
  return {
    ...base,
    output_shape: summarizeShape(latest.wrapper),
    input_shape: received === null ? null : summarizeShape(received),
    hint:
      'Shapes only. Call again with `select` (e.g. ["data.data.customer"]) to read values of what the node produced, ' +
      'or with which="input" to read what it received.',
  };
}
