import type { BranchDecision, BranchType, LineageGraph } from './workflowGraph';

export interface NodeIndexEntry {
  node_uid: string;
  name: string;
  branch_type: BranchType | null;
}

export interface ChatFailure {
  node_uid: string | null;
  name: string | null;
  error_message: string | null;
  error_code: string | null;
}

// Stage 0 output — the grounding facts every later stage builds on, computed once per turn from
// data already fetched/cached by zuperWorkflowApi.ts/zuperExecutionApi.ts.
export interface ChatContext {
  hasExecution: boolean;
  nodeIndex: NodeIndexEntry[];
  failure: ChatFailure | null;
  branchDecisions: BranchDecision[];
  branchType: Map<string, BranchType>;
  lineage: LineageGraph;
}
