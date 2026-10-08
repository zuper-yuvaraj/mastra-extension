import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { InvestigatorAgent } from '../investigate';
import { runPipeline } from '../pipeline';
import type { RcaVerdict } from '../verdict';
import { fakeExecution } from './fakeExecution';

const analysis: RcaVerdict = {
  status: 'failed',
  workflow_purpose: 'Emails the customer when a webhook reports a job.',
  headline: 'While emailing the customer, Send Email failed',
  summary: 'Send Email had no recipient because Get Job returned a job without a customer.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
  evidence_chain: [
    { node_uid: 'u-mail', name: 'Send Email', observation: 'Send Email reads the customer email from Get Job, which was not there, so it failed.', quote: 'recipient is required' },
    { node_uid: 'u-job', name: 'Get Job', observation: 'Get Job returned the job with customer null.', quote: '"customer":null' },
  ],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [{ title: 'Made up', url: 'https://invented.example' }],
};

function scripted(returns: unknown) {
  const seen: string[] = [];
  const agent: InvestigatorAgent & { seen: string[] } = {
    seen,
    generate: async (messages: any, options: any) => {
      seen.push(messages[0].content);
      assert.equal(options.maxSteps, 1, 'the analysis is a single call');
      assert.equal(options.tools, undefined, 'and has no tools');
      return { object: returns, steps: [{}] };
    },
  };
  return agent;
}

const kbDeps = {
  search: async (query: string) => [{ id: query, score: 0.8, kind: 'business', topic: 'doc', title: `Doc ${query}`, text: 'how it works', source_url: `https://docs.test/${encodeURIComponent(query)}` }],
  records: () => [],
};

const base = (agent: InvestigatorAgent, analyst: InvestigatorAgent, ctx = fakeExecution(true), question = 'why did it fail?') => ({
  agent,
  analyst,
  executionContext: ctx,
  question,
  zuperToken: 't',
  zuperApiUrl: 'https://x.zuperpro.com',
  deps: { kb: kbDeps },
});

test('a failed run: whole trace gathered by code, one analysis call, claims verified, links from the KB step', async () => {
  const legacy = scripted(analysis);
  const analyst = scripted(analysis);
  const progress: string[] = [];
  const result = await runPipeline({ ...base(legacy, analyst), onProgress: (e) => progress.push(e.text) });

  assert.equal(legacy.seen.length, 0, 'the tool-using agent is not used');
  assert.equal(analyst.seen.length, 1);
  assert.match(analyst.seen[0]!, /"name":"Get Job"/, 'the producer node is in the pack without the model asking for it');
  assert.match(analyst.seen[0]!, /"origin_candidates":\["u-job#-"\]/);
  assert.equal(result.meta.engine, 'pipeline');
  assert.equal(result.meta.trace_nodes, 3);
  assert.equal(result.verdict.evidence_chain.every((e) => e.verified), true, result.verdict.issues.join('; '));
  assert.equal(result.verdict.confidence, 'high');
  assert.ok(result.verdict.references.length > 0 && result.verdict.references.every((r) => r.url.startsWith('https://docs.test/')), 'model-supplied links are replaced by the KB step');
  assert.deepEqual(progress, ['Reading the workflow and its documentation', 'Tracing the data back through every node it depends on', 'Analysing']);
});

test('a quote copied from documentation does not verify', async () => {
  const quoting = { ...analysis, evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: 'how it works' }] };
  const result = await runPipeline(base(scripted(analysis), scripted(quoting)));
  assert.equal(result.verdict.evidence_chain[0]!.verified, false);
  assert.equal(result.verdict.confidence, 'low');
});

test('a healthy run asked "did it fail?" is answered without any model call', async () => {
  const legacy = scripted(analysis);
  const analyst = scripted(analysis);
  const result = await runPipeline(base(legacy, analyst, fakeExecution(false), 'did it fail?'));
  assert.equal(result.verdict.status, 'no_issue');
  assert.equal(legacy.seen.length + analyst.seen.length, 0);
});

test('a question that points at no node falls back to the tool-using investigator', async () => {
  const legacy = { calls: 0, generate: async () => { legacy.calls++; return { object: { ...analysis, status: 'answered' as const, root_cause: null, evidence_chain: [] }, steps: [] }; } };
  const analyst = scripted(analysis);
  const result = await runPipeline(base(legacy as unknown as InvestigatorAgent, analyst, fakeExecution(false), 'what is going on with the thing?'));
  assert.equal(legacy.calls, 1);
  assert.equal(analyst.seen.length, 0);
  assert.equal(result.verdict.status, 'answered');
});

test('an upstream node whose own data could not be read is never confirmed as the cause', async () => {
  const ctx = fakeExecution(true);
  const original = ctx.getNodeExecutionData;
  // Get Job ran, but its data cannot be loaded
  ctx.getNodeExecutionData = (key, iteration) => (key === 'u-job' ? Promise.resolve({ error: 'FETCH_FAILED' }) : original(key, iteration));
  const claiming = { ...analysis, evidence_chain: [{ node_uid: 'u-mail', name: 'Send Email', observation: 'the execution error', quote: 'recipient is required' }] };
  const result = await runPipeline(base(scripted(claiming), scripted(claiming), ctx));
  assert.equal(result.verdict.status, 'insufficient_evidence');
  assert.equal(result.verdict.root_cause, null);
  assert.match(result.verdict.issues.join(' '), /Possible cause \(not confirmed\): Get Job/);
});
