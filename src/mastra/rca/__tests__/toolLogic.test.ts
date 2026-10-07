import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assembleContext } from '../../lib/orchestrator';
import { createExecutionContext, type ExecutionContext } from '../../lib/zuperExecutionApi';
import { EvidenceLedger } from '../ledger';
import { selectValue, summarizeShape } from '../shape';
import { capResult, getExecutionOverview, getNodeData, getNodeDefinition, getNodeInput } from '../toolLogic';
import { fakeExecution } from './fakeExecution';

const failed = fakeExecution(true);

test('overview lists executed nodes in order and the failure', () => {
  const overview: any = getExecutionOverview(failed, assembleContext(failed, null));
  assert.equal(overview.found, true);
  assert.equal(overview.failure.name, 'Send Email');
  assert.deepEqual(overview.executed_nodes.map((n: any) => n.name), ['On Webhook', 'Get Job', 'Send Email']);
});

test('every tool says so when there is no execution', async () => {
  const none = { found: false };
  assert.equal((getExecutionOverview(null, assembleContext(null, null)) as any).found, none.found);
  assert.equal((getNodeDefinition(null, 'x') as any).found, false);
  assert.equal(((await getNodeInput(null, 'x')) as any).found, false);
  assert.equal(((await getNodeData(null, 'x')) as any).found, false);
});

test('node definition drops cosmetic fields and keeps form_fields', () => {
  const def: any = getNodeDefinition(failed, 'Send Email');
  assert.equal(def.found, true);
  assert.ok(def.definition.form_fields);
  assert.equal('color' in def.definition, false);
});

test('unknown node lists the nodes that do exist', async () => {
  const result: any = await getNodeInput(failed, 'Send Emial');
  assert.equal(result.found, false);
  assert.ok(result.available_nodes.includes('Send Email'));
});

test('get_node_input names the broken input and its summary says so', async () => {
  const result: any = await getNodeInput(failed, 'Send Email');
  assert.equal(result.found, true);
  assert.match(result.summary, /1 of 1 reference\(s\) did not resolve/);
  assert.equal(result.inputs[0].status, 'null');
  assert.equal(result.inputs[0].failedAt, '.data.data.customer');
});

test('a node with only literal fields says it reads nothing', async () => {
  const result: any = await getNodeInput(failed, 'On Webhook');
  assert.match(result.summary, /literal/);
});

test('get_node_data without select returns a shape, never the raw payload', async () => {
  const result: any = await getNodeData(failed, 'Get Job');
  assert.equal(result.ran, true);
  assert.ok(result.shape);
  assert.equal(result.selected, undefined);
  assert.match(result.hint, /select/);
});

test('get_node_data with select reads exact values and reports misses with the real keys', async () => {
  const result: any = await getNodeData(failed, 'Get Job', ['data.data.job_uid', 'data.customer']);
  assert.equal(result.selected[0].status, 'resolved');
  assert.equal(result.selected[0].value, '"job-1"');
  assert.equal(result.selected[1].status, 'undefined');
  assert.deepEqual(result.selected[1].availableKeys, ['data']);
});

test('top-level status and error are surfaced for a failed node', async () => {
  const result: any = await getNodeData(failed, 'Send Email');
  assert.equal(result.top_level.status, 'FAILED');
  assert.equal(result.top_level.error, 'recipient is required');
  assert.equal(result.shape_assumed, true, 'this payload is not a {node,data} wrapper, so that is reported');
});

test('a failed node-data fetch is reported as such, not as empty data', async () => {
  const summary = failed.summary;
  const broken: ExecutionContext = createExecutionContext(summary, async () => {
    throw new Error('API_403');
  });
  const result: any = await getNodeData(broken, 'Get Job');
  assert.equal(result.fetch_failed, 'API_403');
  const input: any = await getNodeInput(broken, 'Send Email');
  assert.equal(input.inputs[0].status, 'fetch_failed');
});

test('a node that did not run is reported', async () => {
  const ctx = createExecutionContext(
    { ...failed.summary, node_execution: failed.summary.node_execution.filter((n) => n.node_uid !== 'u-job') },
    async () => ({}),
  );
  const result: any = await getNodeData(ctx, 'Get Job');
  assert.equal(result.found, true, 'the node exists in the workflow version that ran');
  assert.equal(result.ran, false);
  assert.match(result.message, /did not run/);
});

test('summarizeShape shows structure and bounds long strings and arrays', () => {
  const shape: any = summarizeShape({ items: Array.from({ length: 500 }, () => ({ id: 1 })), note: 'x'.repeat(200) });
  assert.equal(shape.items.array_length, 500);
  assert.ok(shape.note.length < 80);
});

test('selectValue handles brackets, bad selectors and missing paths', () => {
  const root = { data: { items: [{ id: 7 }] } };
  assert.equal(selectValue(root, 'data.items[0].id').value, '7');
  assert.equal(selectValue(root, "['data']['items'][0]['id']").value, '7');
  assert.equal(selectValue(root, 'data..oops').status, 'invalid_selector');
  assert.equal(selectValue(root, 'data.items[3].id').status, 'undefined');
});

test('capResult truncates oversized output with a hint to narrow the request', () => {
  const big = capResult({ blob: 'x'.repeat(50_000) }, 1000) as any;
  assert.equal(big.truncated, true);
  assert.ok(big.preview.length <= 1000);
  assert.match(big.note, /narrower/);
});

test('ledger accepts tool results and later verifies quotes against them', async () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_input', '{}', await getNodeInput(failed, 'Send Email'));
  assert.equal(ledger.contains('"failedAt":".data.data.customer"'), true);
  assert.equal(ledger.contains('"failedAt":".data.data.invented"'), false);
});
