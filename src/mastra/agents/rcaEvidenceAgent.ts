import { Agent } from '@mastra/core/agent';
import { RCA_ANALYSIS_MODEL } from '../rca/config';
import { buildHydratedInstructions } from '../rca/hydratedInstructions';
import { rcaEvidenceTools } from '../tools/rcaEvidenceTools';

// Stage 5 of the hydrated RCA engine (rca/hydratedPipeline.ts): reads the pack and writes the verdict. Its one
// tool, get_node_data, reads the original data of what the pack cut for size. The per-run execution and
// evidence ledger arrive through the request context, so this one agent serves every account concurrently.
//
// Instructions are a function so the generated primer is read when a run starts, not at server boot.
export const rcaEvidenceAgent = new Agent({
  id: 'rca-evidence',
  name: 'Zuper Workflow RCA Analyst (hydrated)',
  description: 'Explains the root cause of a workflow execution from a complete, pre-resolved pack, reading more only when data was cut.',
  instructions: () => buildHydratedInstructions(),
  model: RCA_ANALYSIS_MODEL,
  tools: rcaEvidenceTools,
});
