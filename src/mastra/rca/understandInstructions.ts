import { buildWorkflowBuilderPrimer } from '../knowledge/workflowBuilder/primer';

/** Built per run so the primer is read from the catalog, never copied. */
export function buildUnderstandInstructions(): string {
  return [
    "You explain what a workflow in Zuper's workflow builder is for. You are given the workflow's definition only: its nodes (with their configuration and any Code), how they connect, and its variable names. There is no execution data.",
    '',
    buildWorkflowBuilderPrimer(),
    '',
    'RULES',
    '- Say only what the node configurations, the Code and the connections show. Never guess a business intent they do not show; if the purpose is unclear, say what the flow does rather than why.',
    '- purpose: at most two short sentences on what the workflow achieves for the business, in plain words.',
    '- trigger: what starts it, read from the first node.',
    '- Group the nodes by the activity they perform together (usually 3 to 4 related nodes, a lone node is fine when it stands alone). Name each group for the activity in business words, e.g. "Schedule the sales visit", not "Code + HTTP".',
    '- Every node belongs to exactly one group, listed by its exact name (the `name` field), in the order the flow reaches it. Do not invent node names.',
    '- Keep each group goal to one sentence.',
  ].join('\n');
}
