import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assembleContext } from '../../lib/orchestrator';
import { executionContextFromFixture, type RcaFixture } from '../fixture';
import { sanitize } from '../sanitize';
import { buildSeed } from '../seed';
import { getNodeInput } from '../toolLogic';
import { fakeExecution, nodeData } from './fakeExecution';

test('sanitize redacts credentials by key, bearer/JWT strings and emails, and keeps structure', () => {
  const input = {
    headers: { Authorization: 'Bearer abcdefghijklmnop12345', 'x-api-key': 'k-123', accept: 'application/json' },
    token: 'secret-token',
    note: 'sent with Bearer abcdefghijklmnop12345 and eyJhbGciOi.eyJzdWIiOiIx.c2lnbmF0dXJl',
    customer: { email: 'Jane.Doe@acme.com', cc: ['jane.doe@acme.com', 'bob@acme.com'] },
    count: 5,
    nested: { password: 12345 },
  };
  const out: any = sanitize(input);
  assert.equal(out.headers.Authorization, '[REDACTED]');
  assert.equal(out.headers['x-api-key'], '[REDACTED]');
  assert.equal(out.headers.accept, 'application/json');
  assert.equal(out.token, '[REDACTED]');
  assert.equal(out.nested.password, '[REDACTED]');
  assert.ok(!out.note.includes('abcdefghijklmnop12345'));
  assert.ok(!out.note.includes('eyJhbGciOi'));
  assert.equal(out.customer.email, out.customer.cc[0], 'the same address gets the same placeholder (case-insensitive)');
  assert.notEqual(out.customer.cc[0], out.customer.cc[1]);
  assert.match(out.customer.email, /@example\.test$/);
  assert.equal(out.count, 5);
  assert.deepEqual(Object.keys(out.customer), ['email', 'cc']);
});

test('sanitize does not mutate its input', () => {
  const input = { token: 'x', a: { email: 'a@b.co' } };
  sanitize(input);
  assert.equal(input.token, 'x');
  assert.equal(input.a.email, 'a@b.co');
});

test('a fixture round-trips into an execution context the tools and seed can use', async () => {
  const live = fakeExecution(true);
  const fixture: RcaFixture = {
    name: 'synthetic',
    captured_at: '2026-10-07T00:00:00.000Z',
    workflow_uid: 'wf-1',
    summary: live.summary,
    node_data: sanitize(nodeData),
    expected: { status: 'failed', root_cause_node: 'Get Job', category: 'MISSING_DATA' },
  };

  const context = executionContextFromFixture(JSON.parse(JSON.stringify(fixture)));
  const seed = await buildSeed(context, assembleContext(context, null));
  assert.equal(seed.mode, 'EXECUTION_FAILED');
  assert.equal(seed.failed_node_inputs[0]?.status, 'null');

  const input: any = await getNodeInput(context, 'Send Email');
  assert.equal(input.inputs[0].target.name, 'Get Job');
});

test('a node missing from the fixture surfaces as a fetch failure, not as empty data', async () => {
  const live = fakeExecution(true);
  const context = executionContextFromFixture({
    name: 'partial',
    captured_at: 'x',
    workflow_uid: 'wf-1',
    summary: live.summary,
    node_data: { 'u-hook': nodeData['u-hook'] },
  });
  const input: any = await getNodeInput(context, 'Send Email');
  assert.equal(input.inputs[0].status, 'fetch_failed');
});

test('sanitize redacts the secret in a header/parameter pair even though its own key name is innocuous', () => {
  const out: any = sanitize({
    header_parameters: [
      { header_key: { type: 'FIXED', value: 'x-api-key' }, header_value: { type: 'EXPRESSION', value: 'fbeaaf5723df022a211f298aef2b4799' } },
      { header_key: { type: 'FIXED', value: 'Authorization' }, header_value: { type: 'EXPRESSION', value: 'tok-123' } },
      { header_key: { type: 'FIXED', value: 'Accept' }, header_value: { type: 'FIXED', value: 'application/json' } },
    ],
    query: [{ key: 'api_key', value: 'abc123' }, { key: 'page', value: '2' }],
  });
  assert.equal(out.header_parameters[0].header_value.value, '[REDACTED]');
  assert.equal(out.header_parameters[0].header_value.type, 'EXPRESSION', 'structure is kept');
  assert.equal(out.header_parameters[1].header_value.value, '[REDACTED]');
  assert.equal(out.header_parameters[2].header_value.value, 'application/json', 'harmless headers are untouched');
  assert.equal(out.query[0].value, '[REDACTED]');
  assert.equal(out.query[1].value, '2');
  assert.ok(!JSON.stringify(out).includes('fbeaaf57'));
});

test('sanitize redacts phone numbers by key name and leaves ids and dates alone', () => {
  const out: any = sanitize({
    customer: { home_phone_number: '402.588.0008', work_phone_number: '', mobile: 2065557663, job_uid: 'e80d3250-a456-444f-95f8-58a9a0ec901b', created: '2026-07-23' },
  });
  assert.equal(out.customer.home_phone_number, '[REDACTED_PHONE]');
  assert.equal(out.customer.mobile, '[REDACTED_PHONE]');
  assert.equal(out.customer.work_phone_number, '', 'an empty value stays empty');
  assert.equal(out.customer.job_uid, 'e80d3250-a456-444f-95f8-58a9a0ec901b');
  assert.equal(out.customer.created, '2026-07-23');
});
