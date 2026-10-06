import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import type { ChatContext } from '../lib/chatContext';
import { getCategories } from '../lib/zuperCategoryApi';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { findWorkflowNode, type WorkflowDetail } from '../lib/zuperWorkflowApi';
import { traceLineage } from '../lib/workflowGraph';

// Per-request state the reasoning agent's tool calls need, threaded in via requestContext (see
// lib/orchestrator.ts's runReasoning) rather than baked into the tool at agent-creation time —
// this Node process handles many concurrent chat turns across different workflows/accounts, unlike
// the original browser-extension background script which only ever served one signed-in user.
export interface ZuperChatRequestContext {
  zuperToken: string;
  zuperApiUrl: string;
  executionContext: ExecutionContext | null;
  liveWorkflow: WorkflowDetail | null;
  chatContext: ChatContext;
}

/** ExecutionContext carries live closures (findNode/getNodeExecutionData), so this is stored via
 * requestContext.setRaw/getRaw rather than a schema-validated key. */
export const ZUPER_CHAT_CONTEXT_KEY = 'zuperChat';

const NODE_ARG_DESCRIPTION =
  'Node name exactly as referenced in expressions (e.g. the "Get Job 2" in ' +
  "$.getLatestNodeData('Get Job 2')), or the node_uid. Either works.";

const MAX_TOOL_RESULT_CHARS = 20000;
// A single node's definition or execution payload is the actual evidence for a diagnosis, so it
// gets far more headroom than a list-shaped result — a real failed node's form_fields alone can
// run past 20k, and cutting it mid-JSON destroys exactly the code/references being investigated.
const MAX_NODE_RESULT_CHARS = 60000;
const DROP_NODE_FIELDS = new Set(['pinned_data', 'credentials', 'color', 'node_icon', 'is_pinned', 'is_active']);

// Drops cosmetic fields a tool result doesn't need. Unlike the list-shaped results, form_fields is
// deliberately left intact: it holds the Code-node source and the expressions that carry every
// node-to-node reference, which is the whole point of fetching a definition.
function stripNodeDefinition(node: unknown): unknown {
  if (typeof node !== 'object' || node === null) return node;
  const trimmed: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
    if (DROP_NODE_FIELDS.has(key)) continue;
    trimmed[key] = value;
  }
  return trimmed;
}

function capText(text: string, limit: number = MAX_TOOL_RESULT_CHARS): string {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit)}\n...[TRUNCATED — ${text.length} chars total, showing first ${limit}]`;
}

const NO_EXECUTION_MESSAGE =
  'No execution is currently active for this workflow — test it or open a past execution to see runtime data.';

function resolveNodeUid(
  nodeArg: string,
  executionContext: ExecutionContext | null,
  liveWorkflow: WorkflowDetail | null,
): string | null {
  if (executionContext) {
    const node = executionContext.findNode(nodeArg);
    return typeof node?.node_uid === 'string' ? node.node_uid : null;
  }
  if (liveWorkflow) {
    const node = findWorkflowNode(liveWorkflow.nodes, nodeArg);
    return node ? (node.node_uid ?? node.id) : null;
  }
  return null;
}

// The bounded fallback tool set for Stage 4 (see lib/orchestrator.ts) — most retrieval now happens
// deterministically before the model is ever called, so these only cover what the evidence plan
// didn't anticipate. Kept intentionally small, with the reasoning agent's maxSteps capping rounds.
export const getJobCategoriesAndStatusesTool = createTool({
  id: 'get_job_categories_and_statuses',
  description:
    "Fetch this Zuper account's Job Categories with their category_uid, each with its Job " +
    'Statuses and their status_uid. Workflow nodes reference categories and statuses by raw UID ' +
    'with no readable name attached, so use this to resolve any category_uid/status_uid found in ' +
    'a node, and to check whether such a UID is actually valid. Works with or without an active ' +
    'execution.',
  inputSchema: z.object({}),
  execute: async (_input, { requestContext }) => {
    const ctx = requestContext.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
    try {
      const categories = await getCategories(ctx.zuperToken, ctx.zuperApiUrl);
      return capText(
        JSON.stringify(
          categories.map((category) => ({
            category_uid: category.category_uid,
            category_name: category.category_name,
            job_statuses: (category.job_statuses ?? []).map((status) => ({
              status_uid: status.status_uid,
              status_name: status.status_name,
            })),
          })),
        ),
      );
    } catch (err) {
      const reason = err instanceof Error ? err.message : 'UNKNOWN_ERROR';
      return `Could not fetch job categories and statuses (${reason}). Answer without them, and say so if a category_uid or status_uid can't be resolved.`;
    }
  },
});

export const inspectNodeTool = createTool({
  id: 'inspect_node',
  description:
    "Look up one node not already covered by EVIDENCE: its full definition (form_fields, " +
    'Code-node JavaScript, request bodies, expressions) plus, when an execution is active, what ' +
    'it actually returned at runtime or its error.',
  inputSchema: z.object({ node: z.string().describe(NODE_ARG_DESCRIPTION) }),
  execute: async ({ node: nodeArg }, { requestContext }) => {
    const { executionContext, liveWorkflow } = requestContext.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
    if (!nodeArg) return 'A node name or node_uid is required.';
    if (executionContext) {
      const node = executionContext.findNode(nodeArg);
      if (!node) return `No node found matching "${nodeArg}" in the workflow version that ran.`;
      const dataPromise = executionContext.getNodeExecutionData(nodeArg);
      const execution = dataPromise ? await dataPromise : null;
      return capText(JSON.stringify({ definition: stripNodeDefinition(node), execution }), MAX_NODE_RESULT_CHARS);
    }
    if (!liveWorkflow) return 'Could not load the live workflow definition.';
    const node = findWorkflowNode(liveWorkflow.nodes, nodeArg);
    if (!node) return `No node found matching "${nodeArg}" in the live workflow.`;
    return capText(JSON.stringify({ definition: stripNodeDefinition(node), execution: null }), MAX_NODE_RESULT_CHARS);
  },
});

export const traceLineageTool = createTool({
  id: 'trace_lineage',
  description:
    "Walk the data-reference chain from one node outward, hop by hop, fetching each hop's " +
    "runtime data. direction 'upstream' (default) finds what a node's own references depend on " +
    "— root-cause backtracking. direction 'downstream' finds what reads FROM a node — what a bad " +
    'value broke further down the workflow. Only available when an execution is active.',
  inputSchema: z.object({
    node: z.string().describe(NODE_ARG_DESCRIPTION),
    direction: z.enum(['upstream', 'downstream']).optional(),
    max_hops: z.number().optional(),
  }),
  execute: async ({ node: nodeArg, direction: directionArg, max_hops }, { requestContext }) => {
    const { executionContext, liveWorkflow, chatContext } = requestContext.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
    if (!executionContext) return `${NO_EXECUTION_MESSAGE} Lineage tracing needs runtime data.`;
    if (!nodeArg) return 'A node name or node_uid is required.';
    const targetUid = resolveNodeUid(nodeArg, executionContext, liveWorkflow);
    if (!targetUid) return `No node found matching "${nodeArg}".`;
    const direction = directionArg === 'downstream' ? 'downstream' : 'upstream';
    const maxHops = typeof max_hops === 'number' ? Math.max(1, Math.min(max_hops, 8)) : 5;
    const hops = await traceLineage(targetUid, chatContext.lineage, executionContext, direction, maxHops);
    return capText(JSON.stringify(hops), MAX_NODE_RESULT_CHARS);
  },
});

export const getBranchAnalysisTool = createTool({
  id: 'get_branch_analysis',
  description:
    'For one IF/ELSE or SPLIT node (or every branch node, with no argument): its branch type, ' +
    'every outgoing path, which one was actually taken this execution (if any), and which were ' +
    "not. Use for any 'why did it go to X instead of Y' question.",
  inputSchema: z.object({ node: z.string().describe(NODE_ARG_DESCRIPTION).optional() }),
  execute: async ({ node: nodeArg }, { requestContext }) => {
    const { executionContext, liveWorkflow, chatContext } = requestContext.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
    if (nodeArg) {
      const targetUid = resolveNodeUid(nodeArg, executionContext, liveWorkflow) ?? nodeArg;
      const decision = chatContext.branchDecisions.find((d) => d.node_uid === targetUid) ?? null;
      const branchType = chatContext.branchType.get(targetUid) ?? null;
      return capText(JSON.stringify({ node_uid: targetUid, branch_type: branchType, decision }));
    }
    const all = [...chatContext.branchType.entries()].map(([node_uid, branch_type]) => ({
      node_uid,
      branch_type,
      decision: chatContext.branchDecisions.find((d) => d.node_uid === node_uid) ?? null,
    }));
    return capText(JSON.stringify(all));
  },
});

export const zuperChatTools = {
  get_job_categories_and_statuses: getJobCategoriesAndStatusesTool,
  inspect_node: inspectNodeTool,
  trace_lineage: traceLineageTool,
  get_branch_analysis: getBranchAnalysisTool,
};
