// A short orientation block for an agent's instructions, generated from the node catalog and the
// expressions reference so it cannot drift from them. Everything else is fetched on demand with the
// lookup tools; this only covers what an agent needs before it knows what to look up.

import { loadWorkflowBuilderKnowledge } from './loader';

export function buildWorkflowBuilderPrimer(): string {
  const { nodeCatalog, expressions } = loadWorkflowBuilderKnowledge();

  const nodes = nodeCatalog.nodes
    .map((node) => {
      const key = node.action_key.includes(' ') || node.action_key.includes('(') ? 'zuper_event_trigger' : node.action_key;
      return `- ${key} (${node.action_name}): ${node.when_to_use}`;
    })
    .join('\n');

  const core = expressions.core_model as Record<string, string>;
  const shapes = expressions.node_output_shapes as Record<string, { data_shape?: string; access?: string; gotcha?: string }>;
  const doubleData = ['zuper_get_record', 'http_request_v2']
    .map((key) => shapes[key])
    .filter((s): s is NonNullable<typeof s> => Boolean(s?.access))
    .map((s) => `- ${s.access}${s.gotcha ? ` — ${s.gotcha}` : ''}`)
    .join('\n');

  return [
    'WORKFLOW BUILDER ORIENTATION (from the node catalog and expressions reference)',
    '',
    'Node types:',
    nodes,
    '',
    'How data moves between nodes:',
    `- ${core.wrapper}`,
    `- ${core.golden_rule}`,
    doubleData,
    '- if_else routes by output value: TRUE leaves through handle two-a, FALSE through two-b.',
    '- A form field is { type: FIXED | EXPRESSION, value }. Only EXPRESSION values are evaluated; a reference inside a FIXED field is used as literal text.',
  ].join('\n');
}
