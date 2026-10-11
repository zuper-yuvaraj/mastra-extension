import assert from 'node:assert/strict';
import { test } from 'node:test';
import { configOf } from '../backtrace';
import { investigate, type InvestigatorAgent } from '../investigate';
import { EvidenceLedger, RCA_LEDGER_KEY } from '../ledger';
import { describeNodeRuntime } from '../nodeData';
import { runPipeline } from '../pipeline';
import { preview } from '../preview';
import { withEvidence } from '../recorded';
import { resolveNodeInputs } from '../resolveInput';
import { pathEndsAtSecret, redactSecrets } from '../sanitize';
import { makeResolverEnv } from '../seed';
import type { RcaVerdict } from '../verdict';
import { fakeExecution, nodeData, nodes } from './fakeExecution';

// What the model must never see (credentials) and what it must keep seeing (evidence and configuration).
const HEADER_SECRET = 'sk-live-HEADERSECRET-0001';
const PASSWORD_SECRET = 'hunter2-PASSWORD-0002';
const KEY_SECRET = 'sk-live-APIKEYVALUE-0003';
const BEARER_SECRET = 'abcdefghijklmnop1234';
const SECRETS = [HEADER_SECRET, PASSWORD_SECRET, KEY_SECRET, BEARER_SECRET];

const headerParameters = [{ header_key: { type: 'FIXED', value: 'x-api-key' }, header_value: { type: 'FIXED', value: HEADER_SECRET } }];

// Send Email is configured with hard-coded credentials, reads an api_key from Get Job, and fails.
const mail = nodes.find((n) => n.node_uid === 'u-mail')!;
mail.form_fields = {
  ...mail.form_fields,
  key: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('Get Job').data.data.api_key }}" },
  password: { type: 'FIXED', value: PASSWORD_SECRET },
  authentication: { type: 'FIXED', value: 'HEADER_AUTH' },
  header_parameters: headerParameters,
};
const jobOut = { node: { node_name: 'Get Job' }, data: { data: { job_uid: 'job-1', customer: null, api_key: KEY_SECRET }, status: 200 } };
nodeData['u-job'] = { node_execution: { node_uid: 'u-job', status: 'COMPLETED', input_data: null, execution_data: jobOut, current_iteration: null, total_iterations: null, remarks: null } };
nodeData['u-mail'] = {
  node_execution: {
    node_uid: 'u-mail',
    status: 'FAILED',
    input_data: jobOut,
    execution_data: {
      node: { node_name: 'Send Email' },
      error: `recipient is required (sent with Bearer ${BEARER_SECRET})`,
      form_fields: {
        subject: { type: 'FIXED', value: 'Update on job' },
        password: { type: 'FIXED', value: PASSWORD_SECRET },
        authentication: { type: 'FIXED', value: 'HEADER_AUTH' },
        header_parameters: headerParameters,
      },
    },
    current_iteration: null,
    total_iterations: null,
    remarks: null,
  },
};

const noSecrets = (text: string, where: string) => {
  for (const secret of SECRETS) assert.ok(!text.includes(secret), `${secret} reached ${where}`);
};

const analysis: RcaVerdict = {
  status: 'failed',
  workflow_purpose: 'Emails the customer.',
  headline: 'While emailing the customer, Send Email failed',
  summary: 'Send Email had no recipient.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
  evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'Get Job returned no customer.', quote: '"customer":null' }],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [],
};

const scripted = () => {
  const seen: string[] = [];
  const agent: InvestigatorAgent & { seen: string[] } = {
    seen,
    generate: async (messages: any) => {
      seen.push(messages[0].content);
      return { object: analysis, steps: [{}] };
    },
  };
  return agent;
};

// ---- the building blocks --------------------------------------------------------------------------------

test('preview redacts a credential inside a value, keeps configuration and data', () => {
  const text = preview({ header_parameters: headerParameters, authentication: 'HEADER_AUTH', customer_email: 'a@b.com', password: 'x1' }, 2000);
  noSecrets(text, 'a preview');
  assert.match(text, /HEADER_AUTH/);
  assert.match(text, /a@b\.com/);
  assert.match(text, /x-api-key/, 'the header NAME is kept: it says what was sent');
});

test('a {type, value} form field named like a credential is redacted on its value', () => {
  const text = preview({ password: { type: 'FIXED', value: PASSWORD_SECRET }, authentication: { type: 'FIXED', value: 'HEADER_AUTH' }, url: { type: 'FIXED', value: 'https://x.test' } }, 2000);
  noSecrets(text, 'a preview');
  assert.match(text, /FIXED/, 'the envelope stays');
  assert.match(text, /HEADER_AUTH/);
  assert.match(text, /https:\/\/x\.test/);
});

test('an empty credential field stays empty: nothing to hide, and "empty" can be the cause', () => {
  const out = redactSecrets({ password: { type: 'FIXED', value: '' }, token: '', api_key: 'real' });
  assert.equal(out.password.value, '');
  assert.equal(out.token, '');
  assert.equal(out.api_key, '[REDACTED]');
});

test('the resolved fields a node ran with are redacted before they become preview strings', () => {
  const runtime = describeNodeRuntime(nodeData['u-mail'])!;
  noSecrets(JSON.stringify(runtime), 'resolved_fields');
  assert.match(runtime.resolved_fields!.authentication!, /HEADER_AUTH/);
  assert.match(runtime.resolved_fields!.header_parameters!, /x-api-key/);
  assert.match(String(runtime.error), /recipient is required/, 'the error text is kept, only the bearer token goes');
});

test('a node definition with a hard-coded credential is shown without it', () => {
  const config = configOf(mail.form_fields);
  noSecrets(JSON.stringify(config), 'a node configuration');
  assert.equal(config.password, '[REDACTED]');
  assert.equal(config.authentication, 'HEADER_AUTH');
  assert.match(config.header_parameters!, /x-api-key/);
});

test('a value read from a secret key is redacted; one read from a normal key is not', async () => {
  const env = makeResolverEnv(fakeExecution(true));
  const [secret] = await resolveNodeInputs('u-mail', { f: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('Get Job').data.data.api_key }}" } }, env);
  assert.equal(secret!.status, 'resolved');
  assert.equal(secret!.value, '"[REDACTED]"');
  const [plain] = await resolveNodeInputs('u-mail', { f: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('Get Job').data.data.job_uid }}" } }, env);
  assert.equal(plain!.value, '"job-1"');
});

test('pathEndsAtSecret looks at the key being read, not the node name', () => {
  assert.equal(pathEndsAtSecret("$.getLatestNodeData('Get Job')['data']['api_key']"), true);
  assert.equal(pathEndsAtSecret("$.getLatestNodeData('Get Auth Token').data.data.job_uid"), false, 'a node called "Auth Token" is not a secret');
  assert.equal(pathEndsAtSecret("$.getLatestNodeData('Config')['data']['authentication']"), false, 'configuration, not a credential');
  assert.equal(pathEndsAtSecret("$.getLatestNodeData('Get Job')['data']['data']"), false);
});

test('redactSecrets returns a copy and leaves the original untouched', () => {
  const original = { password: 'p4ss', nested: { token: 't0k' }, keep: 'ok' };
  const copy = redactSecrets(original);
  assert.deepEqual(copy, { password: '[REDACTED]', nested: { token: '[REDACTED]' }, keep: 'ok' });
  assert.equal(original.password, 'p4ss');
});

// ---- what actually reaches the model --------------------------------------------------------------------

test('pipeline: the analysis message and the stored evidence hold no credential, and the verdict still verifies', async () => {
  const analyst = scripted();
  const result = await runPipeline({
    agent: scripted(),
    analyst,
    executionContext: fakeExecution(true),
    question: 'why did it fail?',
    zuperToken: 't',
    zuperApiUrl: 'https://x.zuperpro.com',
    deps: { kb: { search: async () => [], records: () => [] } },
  });
  assert.equal(analyst.seen.length, 1);
  noSecrets(analyst.seen[0]!, 'the analysis message');
  noSecrets(JSON.stringify(result.evidence), 'the stored evidence');
  assert.match(analyst.seen[0]!, /"authentication":"HEADER_AUTH"|authentication/);
  assert.match(analyst.seen[0]!, /recipient is required/, 'the evidence itself is intact');
  assert.equal(result.verdict.evidence_chain[0]!.verified, true, result.verdict.issues.join('; '));
});

test('investigator: the seed prompt and the ledger hold no credential', async () => {
  const agent = scripted();
  const result = await investigate({ agent, executionContext: fakeExecution(true), question: 'why did it fail?', zuperToken: 't', zuperApiUrl: 'https://x.zuperpro.com' });
  assert.equal(agent.seen.length, 1);
  noSecrets(agent.seen[0]!, 'the investigator prompt');
  noSecrets(JSON.stringify(result.evidence), 'the stored evidence');
  assert.match(agent.seen[0]!, /recipient is required/);
});

test('tools: an evidence tool result is redacted before the model and the ledger see it; documentation is not', async () => {
  const ledger = new EvidenceLedger();
  const context = { requestContext: { getRaw: (key: string) => (key === RCA_LEDGER_KEY ? ledger : undefined) } };
  const evidence = withEvidence({ id: 'get_thing', description: 'x', execute: async () => ({ job: { api_key: KEY_SECRET, title: 'Fix AC' } }) });
  const docs = withEvidence({ id: 'get_doc', description: 'x', execute: async () => ({ text: 'Send the api_key header' }) }, 'knowledge');

  const shown = JSON.stringify(await (evidence as any).execute({}, context));
  noSecrets(shown, 'the tool result');
  assert.match(shown, /Fix AC/);
  assert.equal(ledger.contains(KEY_SECRET), false);
  assert.equal(ledger.contains('Fix AC'), true, 'the ledger holds what the model saw');
  assert.match(JSON.stringify(await (docs as any).execute({}, context)), /Send the api_key header/);
});
