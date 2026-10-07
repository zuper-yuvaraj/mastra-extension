import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assembleContext } from '../../lib/orchestrator';
import { buildSeed, triage } from '../seed';

import { fakeExecution } from './fakeExecution';

test('triage', () => {
  assert.equal(triage(null), 'NO_EXECUTION');
  assert.equal(triage(fakeExecution(true)), 'EXECUTION_FAILED');
  assert.equal(triage(fakeExecution(false)), 'NO_FAILURE');
  assert.equal(triage(fakeExecution(false), 'why did it go to the else branch instead?'), 'BRANCH_QUESTION');
});

test('triage: health questions short-circuit, specific questions on a healthy run go to the agent', () => {
  const ok = fakeExecution(false);
  for (const q of ['did it fail?', 'any errors?', 'what happened?', 'is it ok']) assert.equal(triage(ok, q), 'NO_FAILURE', q);
  assert.equal(triage(ok, 'what did Get Job return?'), 'QUESTION');
  assert.equal(triage(ok, 'where did the customer email come from?'), 'QUESTION');
  assert.equal(triage(ok, 'did Get Job fail?'), 'QUESTION', 'naming a node makes it specific');
  assert.equal(triage({ ...fakeExecution(true), definitionOnly: true }, 'what does Send Email do?'), 'WORKFLOW_QUESTION');
});

test('definition-only seed carries the workflow outline with connections resolved by node id', async () => {
  const execution = fakeExecution(false);
  const nodes = execution.workflowData?.nodes ?? [];
  const [a, b] = nodes;
  const withIds = {
    ...execution,
    definitionOnly: true,
    workflowData: {
      ...execution.workflowData,
      nodes: nodes.map((n, i) => ({ ...n, id: `id-${i}` })),
      connections: [{ source: 'id-0', target: 'id-1', output_value: true }],
    },
  };
  const seed = await buildSeed(withIds, assembleContext(withIds, null));
  assert.equal(seed.mode, 'WORKFLOW_QUESTION');
  assert.deepEqual(seed.workflow_outline?.connections, [{ from: a!.action_name, to: b!.action_name, when: true }]);
  assert.equal(seed.executed_nodes.length, 0);
});

test('seed for a failed run points at the null customer, not just at the failed node', async () => {
  const execution = fakeExecution(true);
  const seed = await buildSeed(execution, assembleContext(execution, null));

  assert.equal(seed.mode, 'EXECUTION_FAILED');
  assert.equal(seed.failed_node?.name, 'Send Email');
  assert.equal(seed.execution.error_message, 'recipient is required');

  const toField = seed.failed_node_inputs.find((i) => i.field === 'to.value');
  assert.equal(toField?.status, 'null');
  assert.equal(toField?.target?.name, 'Get Job');
  assert.equal(toField?.failedAt, '.data.data.customer');

  // the literal subject has no reference, so it produces no input entry
  assert.equal(seed.failed_node_inputs.some((i) => i.field.startsWith('subject')), false);

  assert.deepEqual(seed.executed_nodes.map((n) => n.name), ['On Webhook', 'Get Job', 'Send Email']);
  assert.ok(seed.upstream_chain.some((hop) => hop.name === 'Get Job' && hop.ran));
});

test('seed for a successful run has no failed node and no inputs', async () => {
  const execution = fakeExecution(false);
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.equal(seed.mode, 'NO_FAILURE');
  assert.equal(seed.failed_node, null);
  assert.equal(seed.failed_node_inputs.length, 0);
});

test('seed without an execution is empty but valid', async () => {
  const seed = await buildSeed(null, assembleContext(null, null));
  assert.equal(seed.mode, 'NO_EXECUTION');
  assert.equal(seed.executed_nodes.length, 0);
});

test('a failed run carries the workflow outline so the investigator knows what the workflow is for', async () => {
  const execution = fakeExecution(true);
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.deepEqual(seed.workflow_outline?.nodes.map((n) => n.name), ['On Webhook', 'Get Job', 'Send Email']);
});
