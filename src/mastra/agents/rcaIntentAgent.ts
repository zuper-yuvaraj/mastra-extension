import { Agent } from '@mastra/core/agent';
import { RCA_INTENT_MODEL } from '../rca/config';
import { INTENT_INSTRUCTIONS } from '../rca/intent';

// The router of the hydrated chat (rca/intent.ts): says which kind of answer a message needs (explain, rca or
// chat) and for whom (business or technical). One small, tool-free call, made only when the rules cannot decide.
export const rcaIntentAgent = new Agent({
  id: 'rca-intent',
  name: 'Zuper Workflow Chat Router',
  description: 'Classifies a chat message into the kind of answer it needs and the audience it is written for.',
  instructions: INTENT_INSTRUCTIONS,
  model: RCA_INTENT_MODEL,
});
