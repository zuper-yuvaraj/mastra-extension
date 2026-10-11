import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { withEvidence } from '../rca/recorded';
import { getNodeData } from '../rca/toolLogic';
import { ZUPER_CHAT_CONTEXT_KEY, type ZuperChatRequestContext } from './zuperChatTools';

// The one tool of the hydrated analysis (rca/hydratedPipeline.ts). The pack already holds every node's
// configuration, what it read and how it ran, so there is nothing to look up except the DATA that was cut
// from the pack for size. Narrower than the investigator's get_node_data on purpose: paths are required,
// so it cannot be used to dump a node, and the description says when NOT to use it.

const getNodeDataTool = createTool({
  id: 'get_node_data',
  description:
    'Read the original data of a node, for something the pack does not show: a value inside a "// ... removed" ' +
    'comment, or a field that was cut. Each such comment gives the exact call to make; copy it. ' +
    "Paths start at the node's {node, data} wrapper, so a payload field is reached through `data` " +
    '(e.g. "data.data.value[7]"). Use which="input" for what the node RECEIVED. ' +
    'Do not call it for anything already in the pack. Each path returns at most about 3000 characters, so ask ' +
    'for one item or field, not a whole list.',
  inputSchema: z.object({
    node: z.string().describe('The node name exactly as in the pack, or its node_uid.'),
    select: z.array(z.string()).min(1).max(8).describe('Paths to read, e.g. ["data.data.value[7]"]. Required.'),
    which: z.enum(['output', 'input']).optional().describe('output (default): what the node produced. input: what it received.'),
    iteration: z.number().int().min(0).optional().describe('Only for a node inside a loop: which iteration (0-based). Use the one the comment names.'),
  }),
  execute: async ({ node, select, which, iteration }, context) => {
    const request = (context as never as { requestContext: { getRaw: (key: string) => unknown } }).requestContext;
    const { executionContext } = request.getRaw(ZUPER_CHAT_CONTEXT_KEY) as ZuperChatRequestContext;
    return getNodeData(executionContext, node, { select, which, iteration });
  },
});

export const rcaEvidenceTools = { get_node_data: withEvidence(getNodeDataTool) };
