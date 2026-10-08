import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Mastra } from '@mastra/core/mastra';
import type { InvestigatorAgent } from '../investigate';
import type { RcaVerdict } from '../verdict';
import { rcaPipelineWorkflow, runPipelineViaWorkflow } from '../../workflows/rcaPipelineWorkflow';
import { fakeExecution } from './fakeExecution';

const verdict: RcaVerdict = {
  status: 'failed',
  workflow_purpose: 'Emails the customer.',
  headline: 'While emailing the customer, Send Email failed',
  summary: 'Send Email had no recipient because Get Job returned no customer.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
  evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'Get Job returned the job with customer null.', quote: '"customer":null' }],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [],
};

test('the pipeline runs as a Mastra workflow, step by step, and nothing is kept afterwards', async () => {
  const mastra = new Mastra({ workflows: { rcaPipelineWorkflow } });
  const analyst: InvestigatorAgent = { generate: async () => ({ object: verdict, steps: [{}] }) };
  const legacy: InvestigatorAgent = { generate: async () => { throw new Error('the tool-using agent must not run'); } };
  const progress: string[] = [];

  const result = await runPipelineViaWorkflow(mastra as never, {
    agent: legacy,
    analyst,
    executionContext: fakeExecution(true),
    question: 'why did it fail?',
    zuperToken: 'secret-token',
    zuperApiUrl: 'https://x.zuperpro.com',
    onProgress: (e) => progress.push(e.text),
    deps: { kb: { search: async () => [], records: () => [] } },
  });

  assert.equal(result.meta.engine, 'pipeline');
  assert.equal(result.verdict.evidence_chain[0]!.verified, true);
  assert.equal(progress.length, 3);

});

test('a failing stage surfaces as an error instead of an empty answer', async () => {
  const mastra = new Mastra({ workflows: { rcaPipelineWorkflow } });
  const analyst: InvestigatorAgent = { generate: async () => { throw new Error('model down'); } };
  await assert.rejects(
    runPipelineViaWorkflow(mastra as never, {
      agent: analyst,
      analyst,
      executionContext: fakeExecution(true),
      question: 'why did it fail?',
      zuperToken: 't',
      zuperApiUrl: 'https://x.zuperpro.com',
      deps: { kb: { search: async () => [], records: () => [] } },
    }),
    /model down/,
  );
});
