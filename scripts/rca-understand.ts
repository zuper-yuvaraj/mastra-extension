// Usage: npm run rca:understand -- [--fixture fixtures/rca/<name>.json | --summary <execution summary>.json]
// Runs stage 1 of the hydrated RCA engine (workflow understanding) with the real model on a captured
// workflow, with no token and no Zuper network access. Needs OPENAI_API_KEY. Prints what the model was
// sent (size), what it answered, and runs twice to show the per-version cache. Definition only: node data
// is not needed, so a bare execution summary works.

import { readFileSync } from 'node:fs';
import { rcaUnderstandAgent } from '../src/mastra/agents/rcaUnderstandAgent';
import { createExecutionContext, type ExecutionSummaryResponse } from '../src/mastra/lib/zuperExecutionApi';
import { executionContextFromFixture, loadFixture } from '../src/mastra/rca/fixture';
import { slimWorkflowForUnderstanding, understandWorkflow } from '../src/mastra/rca/understand';
import { fakeExecution } from '../src/mastra/rca/__tests__/fakeExecution';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const fixturePath = arg('fixture');
const summaryPath = arg('summary');
const executionContext = summaryPath
  ? createExecutionContext(JSON.parse(readFileSync(summaryPath, 'utf8')) as ExecutionSummaryResponse, async () => {
      throw new Error('FETCH_FAILED');
    })
  : fixturePath
    ? executionContextFromFixture(loadFixture(fixturePath))
    : fakeExecution(true);

const slim = slimWorkflowForUnderstanding(executionContext);
const original = JSON.stringify(executionContext.workflowData ?? {}).length;
console.log(`workflow "${slim.name}": ${slim.nodes.length} nodes, ${original} chars stored -> ${JSON.stringify(slim).length} chars sent`);

for (const run of [1, 2]) {
  const started = Date.now();
  const { understanding, cached } = await understandWorkflow({ agent: rcaUnderstandAgent, executionContext });
  console.log(`\n=== run ${run}: ${cached ? 'CACHE HIT' : 'model call'}, ${((Date.now() - started) / 1000).toFixed(1)}s ===`);
  if (run === 2) continue;
  if (!understanding) {
    console.log('no understanding (the model gave no usable answer)');
    break;
  }
  console.log(`purpose: ${understanding.purpose}\ntrigger: ${understanding.trigger}`);
  for (const group of understanding.groups) console.log(`\n- ${group.name}: ${group.goal}\n    ${group.node_names.join(' -> ')}`);
}
