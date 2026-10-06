import { Agent } from '@mastra/core/agent';
import { zuperChatTools } from '../tools/zuperChatTools';

// Stage 4 of the chat pipeline (see lib/orchestrator.ts) — the one call that produces the answer.
// Most retrieval already happened deterministically before this agent is ever invoked; its 4 tools
// are only a bounded fallback for whatever the evidence plan under-fetched (capped via maxSteps on
// the generate() call, not here, since it's the same cap regardless of which chat turn is running).
export const zuperChatAgent = new Agent({
  id: 'zuper-chat-reasoner',
  name: 'Zuper Workflow Chat Reasoner',
  description: 'Answers questions about a Zuper workflow or one of its executions, grounded in deterministically computed evidence.',
  instructions:
    'Answer only using the EVIDENCE and tool results you are given for this turn — the caller ' +
    'always supplies the full system instructions per request.',
  model: 'openai/gpt-5-mini',
  tools: zuperChatTools,
});
