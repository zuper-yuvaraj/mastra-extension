// An ExecutionContext with no execution behind it, built from the live workflow definition. It lets the
// same agent and tools answer questions about a workflow the user has open but has not run ("what does
// this node do?", "where does the customer come from?"): node definitions, connections and references
// can be read, and every runtime-data tool says plainly that there is no run to read.

import {
  createExecutionContext,
  type ExecutedWorkflowNode,
  type ExecutionContext,
  type ExecutionSummaryResponse,
} from '../lib/zuperExecutionApi';
import type { WorkflowDetail } from '../lib/zuperWorkflowApi';

export function definitionOnlyContext(workflow: WorkflowDetail): ExecutionContext {
  // The graph cache is keyed by execution uid, so the stand-in uid carries the version: an edited workflow
  // never reuses the graph of its previous version.
  const executionUid = `definition:${workflow.workflow_uid}:${workflow.draft_version?.version ?? 'unversioned'}`;

  const nodes: ExecutedWorkflowNode[] = workflow.nodes.map((node) => ({
    ...(node as unknown as Record<string, unknown>),
    // live nodes may lack node_uid; their connections use `id`, which then doubles as the uid
    node_uid: node.node_uid ?? node.id,
    action_name: node.action_name,
    node_name: ((node as unknown as { node_name?: string }).node_name ?? node.action_key) as string,
    form_fields: node.form_fields ?? {},
  }));

  const summary: ExecutionSummaryResponse = {
    workflow_execution: {
      execution_uid: executionUid,
      workflow_uid: workflow.workflow_uid,
      status: 'NOT_RUN',
      workflow_data: {
        workflow_uid: workflow.workflow_uid,
        workflow_name: workflow.workflow_name,
        nodes,
        connections: workflow.connections as unknown as Array<Record<string, unknown>>,
      },
    },
    node_execution: [],
  };

  const context = createExecutionContext(summary, async () => {
    throw new Error('NO_RUN');
  });
  return { ...context, definitionOnly: true };
}
