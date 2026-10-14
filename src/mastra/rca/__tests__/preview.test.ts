import assert from 'node:assert/strict';
import { test } from 'node:test';
import { preview } from '../preview';
import { runPipeline } from '../pipeline';
import type { InvestigatorAgent } from '../investigate';
import type { RcaVerdict } from '../verdict';
import { fakeExecution } from './fakeExecution';

// A model once read `"\"abc\""` (a string preview that was JSON-quoted and then encoded again) as "the project uid
// is wrapped in quotation marks" and blamed a 404 on it. Strings must reach the model as they are.

test('a string is shown as it is, with no quotation marks added', () => {
  assert.equal(preview('abc'), 'abc');
  assert.equal(preview(''), '');
  assert.equal(preview('a "quoted" word'), 'a "quoted" word', 'quotes that are really in the value stay');
});

test('everything else is rendered as JSON text', () => {
  assert.equal(preview(5), '5');
  assert.equal(preview(true), 'true');
  assert.equal(preview(null), 'null');
  assert.equal(preview({ a: 'b' }), '{"a":"b"}');
  assert.equal(preview(['x']), '["x"]');
});

test('a long string is cut with its length; a credential is still redacted', () => {
  assert.equal(preview('x'.repeat(50), 10), `${'x'.repeat(10)}…(50 chars)`);
  assert.equal(preview('Bearer abcdefghijklmnop1234'), 'Bearer [REDACTED]');
});

const verdict: RcaVerdict = {
  status: 'failed',
  workflow_purpose: '',
  headline: '',
  summary: 's',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'x' },
  evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: '"customer":null' }],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [],
};

test('the older pipeline sends a string value as "value":"job-1", not as "value":"\\"job-1\\""', async () => {
  const seen: string[] = [];
  const analyst: InvestigatorAgent = {
    generate: async (messages: any) => {
      seen.push(messages[0].content);
      return { object: verdict, steps: [{}] };
    },
  };
  await runPipeline({
    agent: analyst,
    analyst,
    executionContext: fakeExecution(true),
    question: 'why did it fail?',
    zuperToken: 't',
    zuperApiUrl: 'https://x.zuperpro.com',
    deps: { kb: { search: async () => [], records: () => [] } },
  });
  assert.match(seen[0]!, /"value":"job-1"/, 'the value as it is');
  // The old shape of the bug. (A node's `output` is still a block of JSON text inside a string in this engine, so
  // `\"job-1\"` can appear there; the resolved input value is what the model blamed.)
  assert.ok(!seen[0]!.includes('"value":"\\"job-1\\""'), 'the resolved input is not wrapped in a second layer of quotation marks');
});
