import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { withEvidence } from '../rca/recorded';
import { getExecutionOverview, getNodeData, getNodeDefinition, getNodeInput } from '../rca/toolLogic';
import { knowledgeTools } from './knowledgeTools';
import {
  ZUPER_CHAT_CONTEXT_KEY,
  getBranchAnalysisTool,
  getJobCategoriesAndStatusesTool,
  traceLineageTool,
  type ZuperChatRequestContext,
} from './zuperChatTools';

// The RCA investigator's toolset. Every tool is read-only, takes the per-request execution from the
// request context (the bearer token never appears in tool input or output), and records its result in
// the run's evidence ledger via withEvidence() so the verdict can be checked against it.

const NODE_ARG = z
  .string()
  .describe('Node name exactly as shown in the execution overview / used in expressions (e.g. "Get Job"), or its node uid.');

function ctx(context: { requestContext: { getRaw: (key: string) => unknown } }): ZuperChatRequestContext {
  return context.requestContext.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
}

const executionOverviewTool = createTool({
  id: 'get_execution_overview',
  description:
    'Start here. The execution status and error, the failed node, and every executed node in execution ' +
    'order with its status and whether it is an IF/ELSE or SPLIT branch.',
  inputSchema: z.object({}),
  execute: async (_input, context) => {
    const { executionContext, chatContext } = ctx(context as never);
    return getExecutionOverview(executionContext, chatContext);
  },
});

const nodeDefinitionTool = createTool({
  id: 'get_node_definition',
  description:
    "A node's configuration as it ran: its fields, expressions, and a Code node's JavaScript. Use it to read " +
    'what the node was told to do. To see what it actually RECEIVED, use get_node_input; to see what it ' +
    'PRODUCED, use get_node_data.',
  inputSchema: z.object({ node: NODE_ARG }),
  execute: async ({ node }, context) => getNodeDefinition(ctx(context as never).executionContext, node),
});

const nodeInputTool = createTool({
  id: 'get_node_input',
  description:
    'What a node actually received. Takes every expression in the node that reads another node or variable ' +
    'and resolves it against this execution\'s real data, walking the path one segment at a time. For each ' +
    'reference it reports resolved / null / undefined (and exactly which segment is missing, with the keys ' +
    'that do exist) / node did not run / node name not found / field is FIXED so never evaluated. This is ' +
    'the fastest way to find which input of the failed node is wrong and which node produced it.',
  inputSchema: z.object({ node: NODE_ARG }),
  execute: async ({ node }, context) => getNodeInput(ctx(context as never).executionContext, node),
});

const nodeDataTool = createTool({
  id: 'get_node_data',
  description:
    "What a node produced at runtime. Without `select` it returns the payload's SHAPE (keys, types, array " +
    'lengths) plus status/error fields — never the whole payload. Pass `select` with paths (e.g. ' +
    '["data.data.customer", "data.items[0].id"]) to read specific values in full. Paths start at the node\'s ' +
    '{node, data} wrapper, so a payload field is reached through `data`.',
  inputSchema: z.object({
    node: NODE_ARG,
    select: z.array(z.string()).max(8).optional().describe('Paths to read, e.g. ["data.data.customer"].'),
  }),
  execute: async ({ node, select }, context) => getNodeData(ctx(context as never).executionContext, node, select),
});

const knowledge = Object.fromEntries(
  Object.entries(knowledgeTools).map(([name, tool]) => [name, withEvidence(tool as never)]),
);

export const rcaTools = {
  get_execution_overview: withEvidence(executionOverviewTool),
  get_node_definition: withEvidence(nodeDefinitionTool),
  get_node_input: withEvidence(nodeInputTool),
  get_node_data: withEvidence(nodeDataTool),
  trace_lineage: withEvidence(traceLineageTool as never),
  get_branch_analysis: withEvidence(getBranchAnalysisTool as never),
  get_job_categories_and_statuses: withEvidence(getJobCategoriesAndStatusesTool as never),
  ...knowledge,
};
