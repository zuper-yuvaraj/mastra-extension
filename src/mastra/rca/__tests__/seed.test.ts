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
