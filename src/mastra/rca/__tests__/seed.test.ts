import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assembleContext } from '../../lib/orchestrator';
import type { ExecutedWorkflowNode, ExecutionContext } from '../../lib/zuperExecutionApi';
import { buildSeed, triage } from '../seed';

// A synthetic run, shaped from the documented behaviour (expressions_reference.json): every node's
// execution data is a {node, data} wrapper, Get Record keeps the API body under .data.data.
// Flow: On Webhook -> Get Job -> Send Email. Get Job returns a job whose customer is null, so Send
// Email fails reading the customer's email. Real captured executions replace this in the eval set.
const wrap = (name: string, data: unknown) => ({ node: { node_name: name }, data });

const nodes: ExecutedWorkflowNode[] = [
  { node_uid: 'u-hook', action_name: 'On Webhook', node_name: 'webhook', form_fields: {} },
  {
    node_uid: 'u-job',
    action_name: 'Get Job',
    node_name: 'zuper_get_record',
    form_fields: { job_uid: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('On Webhook').data.body.job_uid }}" } },
  },
  {
    node_uid: 'u-mail',
    action_name: 'Send Email',
    node_name: 'zuper_email',
    form_fields: {
      to: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('Get Job').data.data.customer.customer_email }}" },
      subject: { type: 'FIXED', value: 'Update on job' },
    },
  },
];

const nodeData: Record<string, unknown> = {
  'u-hook': wrap('webhook', { body: { job_uid: 'job-1' } }),
  'u-job': wrap('zuper_get_record', { data: { job_uid: 'job-1', customer: null } }),
  'u-mail': { status: 'FAILED', error: 'recipient is required' },
};

function fakeExecution(failure: boolean): ExecutionContext {
  const byUid = new Map(nodes.map((n) => [n.node_uid, n]));
  return {
    summary: {
      workflow_execution: {
        execution_uid: 'exec-1',
        workflow_uid: 'wf-1',
        status: failure ? 'FAILED' : 'COMPLETED',
        error_message: failure ? 'recipient is required' : undefined,
        failed_node_uid: failure ? 'u-mail' : undefined,
        workflow_data: {
          nodes,
          connections: [
            { source: 'u-hook', target: 'u-job' },
            { source: 'u-job', target: 'u-mail' },
          ],
        },
      },
      node_execution: nodes.map((n) => ({
        node_uid: n.node_uid,
        status: n.node_uid === 'u-mail' && failure ? 'FAILED' : 'COMPLETED',
        current_iteration: null,
        total_iterations: null,
        output_value: null,
        is_loop: false,
      })),
    },
    workflowData: { nodes, connections: [
      { source: 'u-hook', target: 'u-job' },
      { source: 'u-job', target: 'u-mail' },
    ] },
    executedNodes: nodes.map((n, i) => ({
      node_uid: n.node_uid,
      name: n.action_name!,
      type: n.node_name!,
      status: n.node_uid === 'u-mail' && failure ? 'FAILED' : 'COMPLETED',
      order: i + 1,
    })),
    failure: failure ? { node_uid: 'u-mail', name: 'Send Email', error_message: 'recipient is required', error_code: null } : null,
    findNode: (key) => byUid.get(key) ?? nodes.find((n) => n.action_name?.toLowerCase() === key.toLowerCase()),
    getNodeExecutionData: (key) => {
      const node = byUid.get(key) ?? nodes.find((n) => n.action_name?.toLowerCase() === key.toLowerCase());
      return node ? Promise.resolve(nodeData[node.node_uid]) : undefined;
    },
  };
}

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
