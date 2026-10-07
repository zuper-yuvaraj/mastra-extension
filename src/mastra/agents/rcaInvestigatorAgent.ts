import { Agent } from '@mastra/core/agent';
import { RCA_MODEL } from '../rca/config';
import { buildRcaInstructions } from '../rca/instructions';
import { rcaTools } from '../tools/rcaTools';

// Investigates one workflow execution the way a technical person would: failed node, what it received,
// then backwards through the executed nodes to the first one that went wrong. Read-only tools only.
// The per-run facts arrive in the user message and the per-run execution/ledger arrive through the
// request context (see rca/investigate.ts), so this one agent serves every account concurrently.
//
// Instructions are a function so the generated primer is read when a run starts, not at server boot.
export const rcaInvestigatorAgent = new Agent({
  id: 'rca-investigator',
  name: 'Zuper Workflow RCA Investigator',
  description: 'Finds the root cause of a failed or unexpectedly routed Zuper workflow execution, with verifiable evidence.',
  instructions: () => buildRcaInstructions(),
  model: RCA_MODEL,
  tools: rcaTools,
});
