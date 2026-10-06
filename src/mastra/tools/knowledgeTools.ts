import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { searchKnowledge } from '../knowledge/search';
import {
  getCodeRuntime,
  getExpressionRules,
  getNativeCapabilities,
  getNodeFields,
  getNodeInfo,
  getNodeOutputShape,
  getTriggerFilterInfo,
  listNodes,
} from '../knowledge/workflowBuilder/lookup';

// Read-only knowledge tools for the RCA / workflow-builder agents. Nothing here calls a Zuper API or
// needs the user's token — the knowledge is static files plus a vector index. Exact facts (field
// names, enums, handles) come from the lookup tools; search_knowledge only helps find the right one.

const NODE_KEY = z.string().describe('Node action_key, e.g. "if_else", "loop", "http_request_v2". Use list_nodes for valid keys.');

export const searchKnowledgeTool = createTool({
  id: 'search_knowledge',
  description:
    'Semantic search over the Zuper knowledge base when you do not know which exact lookup to call. ' +
    'Returns the closest topics with a `lookup` hint naming the exact tool call that returns the ' +
    'authoritative detail — prefer calling that lookup for exact facts. Returns an empty list when ' +
    'nothing relevant exists; do not guess in that case.',
  inputSchema: z.object({
    query: z.string().describe('A natural-language question or keywords.'),
    kind: z.enum(['workflow_builder']).optional().describe('Restrict to one knowledge base.'),
    topic: z.enum(['node', 'node_gotcha', 'expression', 'code', 'trigger', 'capability']).optional(),
    top_k: z.number().int().min(1).max(10).optional(),
  }),
  execute: async ({ query, kind, topic, top_k }) => {
    const hits = await searchKnowledge(query, { kind, topic, topK: top_k ?? 5 });
    return hits.length > 0 ? { hits } : { hits: [], message: 'No relevant knowledge found. Do not guess.' };
  },
});

export const listNodesTool = createTool({
  id: 'list_nodes',
  description: 'List every workflow-builder node type with its action_key, category and one-line when_to_use.',
  inputSchema: z.object({}),
  execute: async () => listNodes(),
});

export const getNodeInfoTool = createTool({
  id: 'get_node_info',
  description:
    'Exact definition of one workflow node: what it does, when to use it, input/output handles ' +
    '(e.g. if_else two-a = TRUE, two-b = FALSE), connection rules, constraints, and the shape of its ' +
    'output as seen by downstream nodes.',
  inputSchema: z.object({ node: NODE_KEY }),
  execute: async ({ node }) => getNodeInfo(node),
});

export const getNodeFieldsTool = createTool({
  id: 'get_node_fields',
  description:
    "A node's form fields: meaning, fixed-vs-expression, value source, dependencies and gotchas. " +
    'For big nodes (zuper_update/zuper_create) pass `mode` (a module like JOB or an operation like ' +
    'UPDATE_STATUS) or `field` (one field name) — the response lists available_modes and field_names.',
  inputSchema: z.object({
    node: NODE_KEY,
    mode: z.string().optional().describe('A mode / module / operation value from available_modes.'),
    field: z.string().optional().describe('One field name from field_names.'),
  }),
  execute: async ({ node, mode, field }) => getNodeFields(node, { mode, field }),
});

export const getNodeOutputShapeTool = createTool({
  id: 'get_node_output_shape',
  description:
    "What a node's output looks like to downstream expressions (e.g. HTTP body is at .data.data, " +
    'status at .data.status). Use when a downstream value is undefined/empty and you must check the access path.',
  inputSchema: z.object({ node: NODE_KEY }),
  execute: async ({ node }) => getNodeOutputShape(node),
});

export const getExpressionRulesTool = createTool({
  id: 'get_expression_rules',
  description:
    'How workflow expressions work: the {node, data} wrapper, accessors ($item, $.getLatestNodeData, ' +
    '$.getNodeData), loop helpers, variables, FIXED vs EXPRESSION, rendering, common mistakes and worked examples.',
  inputSchema: z.object({}),
  execute: async () => getExpressionRules(),
});

export const getCodeRuntimeTool = createTool({
  id: 'get_code_runtime',
  description:
    'Code node runtime: allowed require() modules, timeout, v1 vs v2 globals, return rule, forbidden ' +
    'operations, plus Zuper API recipes (pagination, status enums, timezones). Pass `topic` (from the ' +
    'recipe_topics in the first response) for one recipe in full.',
  inputSchema: z.object({ topic: z.string().optional() }),
  execute: async ({ topic }) => getCodeRuntime(topic),
});

export const getTriggerFilterInfoTool = createTool({
  id: 'get_trigger_filter_info',
  description:
    'Trigger filter rules: rule shape, operator catalogue (IS_EMPTY vs the if_else EMPTY), evaluation ' +
    'semantics, value resolution, supported trigger modules. Use when a workflow did not fire or fired unexpectedly. ' +
    'Pass `topic` for one section.',
  inputSchema: z.object({ topic: z.string().optional() }),
  execute: async ({ topic }) => getTriggerFilterInfo(topic),
});

export const getNativeCapabilitiesTool = createTool({
  id: 'get_native_capabilities',
  description:
    'Which Zuper modules/operations have a native workflow node and which must go through an HTTP Request ' +
    'node (e.g. quotes/estimates). Pass `module` (e.g. JOB, QUOTE) for one module.',
  inputSchema: z.object({ module: z.string().optional() }),
  execute: async ({ module }) => getNativeCapabilities(module),
});

export const knowledgeTools = {
  search_knowledge: searchKnowledgeTool,
  list_nodes: listNodesTool,
  get_node_info: getNodeInfoTool,
  get_node_fields: getNodeFieldsTool,
  get_node_output_shape: getNodeOutputShapeTool,
  get_expression_rules: getExpressionRulesTool,
  get_code_runtime: getCodeRuntimeTool,
  get_trigger_filter_info: getTriggerFilterInfoTool,
  get_native_capabilities: getNativeCapabilitiesTool,
};
