import { randomUUID } from 'node:crypto';
import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import type { RcaResult } from '../rca/investigate';
import { newRun, stageAnalyse, stageBacktrace, stageFinish, stagePrepare, type PipelineInput, type PipelineRun } from '../rca/pipeline';

// The evidence-complete RCA as a Mastra workflow, so each stage shows up on its own in traces:
//   prepare    documentation for the workflow's modules + where to start (code)
//   backtrace  every reference followed back to its origin, all node data fetched (code)
//   analyse    ONE model call over the complete evidence pack
//   finish     claims checked against the evidence, documentation links attached (code)
//
// Mastra saves every step's input and output to storage, and the run data here is the customer's. So the
// steps pass only an opaque `runKey` and a one-line note; the data itself lives in this process's memory
// for the length of the run (same idea as rca/runSecrets.ts) and is dropped afterwards.

const runs = new Map<string, PipelineRun>();

function runFor(key: string): PipelineRun {
  const run = runs.get(key);
  if (!run) throw new Error('RCA_RUN_NOT_FOUND');
  return run;
}

const schema = z.object({ runKey: z.string(), note: z.string().optional() });

const stage = (id: string, description: string, work: (run: PipelineRun) => Promise<void> | void, note: (run: PipelineRun) => string) =>
  createStep({
    id,
    description,
    inputSchema: schema,
    outputSchema: schema,
    execute: async ({ inputData }) => {
      const run = runFor(inputData.runKey);
      await work(run);
      return { runKey: inputData.runKey, note: note(run) };
    },
  });

const prepare = stage('prepare', 'Documentation for the workflow modules, and where the backtrace starts.', stagePrepare, (run) =>
  run.result ? 'answered without a trace' : `target: ${run.target?.kind ?? 'none'}`,
);
const backtrace = stage('backtrace', 'Follow every reference back to its origin and fetch all the node data.', stageBacktrace, (run) =>
  run.trace ? `${run.trace.nodes.length} node runs traced${run.trace.capped ? ' (capped)' : ''}` : 'skipped',
);
const analyse = stage('analyse', 'The single model call over the complete evidence pack.', stageAnalyse, (run) => (run.raw ? 'analysed' : 'skipped'));
const finish = stage('finish', 'Verify every claim against the evidence and attach the documentation links.', stageFinish, (run) =>
  run.result ? `confidence: ${run.result.verdict.confidence}` : 'no result',
);

export const rcaPipelineWorkflow = createWorkflow({
  id: 'rca-pipeline-workflow',
  description: 'Evidence-complete root-cause analysis: documentation, full backtrace, one analysis, verification.',
  inputSchema: schema,
  outputSchema: schema,
})
  .then(prepare)
  .then(backtrace)
  .then(analyse)
  .then(finish)
  .commit();

/** Runs the workflow for one question and returns its result. */
export async function runPipelineViaWorkflow(
  mastra: { getWorkflow: (id: 'rcaPipelineWorkflow') => any },
  input: PipelineInput,
): Promise<RcaResult> {
  const run = newRun(input);
  const key = randomUUID();
  runs.set(key, run);
  try {
    const result = await (await mastra.getWorkflow('rcaPipelineWorkflow').createRun()).start({ inputData: { runKey: key } });
    if (result.status !== 'success') {
      const failed = Object.values(result.steps ?? {}).find((step: any) => step?.status === 'failed') as { error?: unknown } | undefined;
      const reason = failed?.error ?? (result as { error?: unknown }).error;
      throw reason instanceof Error ? reason : new Error(typeof reason === 'string' ? reason : 'RCA_FAILED');
    }
    if (!run.result) throw new Error('RCA_PIPELINE_NO_RESULT');
    return run.result;
  } finally {
    runs.delete(key);
  }
}
