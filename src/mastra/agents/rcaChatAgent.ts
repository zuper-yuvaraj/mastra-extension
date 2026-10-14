import { Agent } from '@mastra/core/agent';
import { buildLightChatInstructions } from '../rca/chatLight';
import { RCA_CHAT_MODEL } from '../rca/config';

// The light chat path of the hydrated chat (rca/chatLight.ts): small talk, general Workflow Builder help, and a chat
// with no run to look at. No tools: it answers from the workflow's summary and definition and the documentation.
//
// Instructions are a function so the generated primer is read when a run starts, not at server boot.
export const rcaChatAgent = new Agent({
  id: 'rca-chat',
  name: 'Zuper Workflow Chat Assistant',
  description: 'Answers questions about a workflow and the Workflow Builder when no run data is needed.',
  instructions: () => buildLightChatInstructions(),
  model: RCA_CHAT_MODEL,
});
