import { Agent } from '@mastra/core/agent';
import { RCA_MODEL } from '../rca/config';
import { buildAnalystInstructions } from '../rca/analystInstructions';

// Reads the complete evidence pack the pipeline gathered (see rca/pipeline.ts) and writes the structured
// verdict. No tools: everything it may say is in the message, and everything it says is checked against it.
export const rcaAnalystAgent = new Agent({
  id: 'rca-analyst',
  name: 'Zuper Workflow RCA Analyst',
  description: 'Explains the root cause of a workflow execution from a complete, pre-fetched backtrace.',
  instructions: () => buildAnalystInstructions(),
  model: RCA_MODEL,
});
