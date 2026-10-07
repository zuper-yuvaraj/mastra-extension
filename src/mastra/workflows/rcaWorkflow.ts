import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import { getExecutionContext } from '../lib/zuperExecutionApi';
import { investigate } from '../rca/investigate';
import { getRunSecrets } from '../rca/runSecrets';
import { verifiedVerdictSchema } from '../rca/verdict';

// Root-cause analysis of one workflow execution.
//   load-context  fetch the execution (cached per execution); fails fast and visibly on auth/network
//   investigate   seed -> investigator agent with read-only tools -> verify its verdict against the data
//
// Mastra persists a run's input, step outputs and request context. So none of them may carry the
// caller's bearer token: the route keeps it in memory (rca/runSecrets.ts) and passes only an opaque,
// one-time `runKey`. The live execution context (which holds closures) is likewise re-obtained from
// the per-execution cache inside each step instead of being passed along.

const inputSchema = z.object({
  /** Opaque key to this run's in-memory secrets (token, base URLs). Not a credential by itself. */
  runKey: z.string(),
  workflowUid: z.string(),
  executionUid: z.string(),
  question: z.string().optional(),
  forceRefresh: z.boolean().optional(),
});

const resultSchema = z.object({
  verdict: verifiedVerdictSchema,
  html: z.string(),
  meta: z.object({
    mode: z.string(),
    execution_status: z.string().nullable(),
    steps: z.number(),
    tool_calls: z.number(),
    model: z.string().nullable(),
  }),
});

export type RcaWorkflowResult = z.infer<typeof resultSchema>;

const loadContext = createStep({
  id: 'load-context',
  description: 'Fetch the execution and its executed workflow snapshot (cached per execution).',
  inputSchema,
  outputSchema: inputSchema.extend({ executionStatus: z.string().nullable(), nodeCount: z.number() }),
  execute: async ({ inputData }) => {
    const run = getRunSecrets(inputData.runKey);
    const execution = await getExecutionContext(
      inputData.workflowUid,
      inputData.executionUid,
      run.zuperToken,
      run.workflowBuilderUrl,
      inputData.forceRefresh,
    );
    return {
      ...inputData,
      executionStatus: execution.summary.workflow_execution?.status ?? null,
      nodeCount: execution.executedNodes.length,
    };
  },
});

const investigateStep = createStep({
  id: 'investigate',
  description: 'Build the seed evidence, run the investigator agent, and verify its verdict against the data it saw.',
  inputSchema: loadContext.outputSchema,
  outputSchema: resultSchema,
  execute: async ({ inputData, mastra }) => {
    const run = getRunSecrets(inputData.runKey);
    // Same cached execution load-context fetched; getExecutionContext returns it without another request.
    const executionContext = await getExecutionContext(
      inputData.workflowUid,
      inputData.executionUid,
      run.zuperToken,
      run.workflowBuilderUrl,
    );
    return investigate({
      agent: mastra.getAgent('rcaInvestigatorAgent'),
      executionContext,
      question: inputData.question,
      zuperToken: run.zuperToken,
      zuperApiUrl: run.apiUrl,
    });
  },
});

export const rcaWorkflow = createWorkflow({
  id: 'rca-workflow',
  description: 'Root-cause analysis of a failed or unexpectedly routed Zuper workflow execution.',
  inputSchema,
  outputSchema: resultSchema,
})
  .then(loadContext)
  .then(investigateStep)
  .commit();
