import { Agent } from '@mastra/core/agent';

// Used for two one-shot, tool-free calls: Stage 1 intent classification (see lib/orchestrator.ts)
// and the "Explain Workflow" one-shot summary. Both send one fully self-contained user message
// (the caller-built prompt already states exactly what output format is required), so the agent's
// own instructions stay neutral rather than pushing it toward either JSON or prose.
export const zuperClassifierAgent = new Agent({
  id: 'zuper-classifier',
  name: 'Zuper Workflow Classifier',
  description: 'Cheap, tool-free calls for Zuper Workflow Builder: intent classification and one-shot workflow explanations.',
  instructions:
    'Follow the instructions in the user message exactly, including any required output format ' +
    '(plain JSON, HTML, etc). Do not add commentary, preamble, or markdown fencing beyond what is asked for.',
  model: 'openai/gpt-5-mini',
});
