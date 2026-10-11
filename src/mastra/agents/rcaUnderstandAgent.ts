import { Agent } from '@mastra/core/agent';
import { RCA_UNDERSTAND_MODEL } from '../rca/config';
import { buildUnderstandInstructions } from '../rca/understandInstructions';

// Stage 1 of the hydrated RCA engine (see rca/understand.ts): reads a workflow's definition and says what it
// is for and how its nodes group into activities. No tools; the result is cached per workflow version.
export const rcaUnderstandAgent = new Agent({
  id: 'rca-understand',
  name: 'Zuper Workflow Understanding',
  description: 'Summarises what a workflow version is for and groups its nodes into activities.',
  instructions: () => buildUnderstandInstructions(),
  model: RCA_UNDERSTAND_MODEL,
});
