import type { ExecutedWorkflowNode, ExecutionContext } from '../../lib/zuperExecutionApi';

// A synthetic run in the REAL node-data shape (confirmed on a captured execution, see rca/nodeData.ts):
// GET .../nodes/{uid} returns { node_execution: { status, input_data, execution_data, ... } } where
// execution_data is the {node, data} wrapper and input_data is the previous node's wrapper.
// Flow: On Webhook -> Get Job -> Send Email. Get Job returns a job whose customer is null, so Send
// Email fails reading the customer's email.
const wrap = (name: string, data: unknown) => ({ node: { node_name: name }, data });
const envelope = (uid: string, status: string, input: unknown, executionData: unknown) => ({
  node_execution: {
    node_uid: uid,
    status,
    input_data: input,
    execution_data: executionData,
    current_iteration: null,
    total_iterations: null,
    remarks: null,
  },
});
const hookOut = wrap('On Webhook', { body: { job_uid: 'job-1' } });
const jobOut = wrap('Get Job', { data: { job_uid: 'job-1', customer: null }, status: 200 });

export const nodes: ExecutedWorkflowNode[] = [
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

export const nodeData: Record<string, unknown> = {
  'u-hook': envelope('u-hook', 'COMPLETED', null, hookOut),
  'u-job': envelope('u-job', 'COMPLETED', hookOut, jobOut),
  'u-mail': envelope('u-mail', 'FAILED', jobOut, { node: { node_name: 'Send Email' }, error: 'recipient is required' }),
};

export function fakeExecution(failure: boolean): ExecutionContext {
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
    iterationsOf: () => [],
    getNodeExecutionData: (key) => {
      const node = byUid.get(key) ?? nodes.find((n) => n.action_name?.toLowerCase() === key.toLowerCase());
      return node ? Promise.resolve(nodeData[node.node_uid]) : undefined;
    },
  };
}

