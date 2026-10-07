// What the user sees while the investigator works: one short line per tool call, in the words a person
// would use ("Reading what Get Job returned"), never tool names or raw arguments.

export interface ProgressEvent {
  text: string;
}

function nodeOf(label: string): string | null {
  try {
    const input = JSON.parse(label) as { node?: unknown; nameOrUid?: unknown; name?: unknown };
    const value = input.node ?? input.nameOrUid ?? input.name;
    return typeof value === 'string' && value.trim() ? value.trim().slice(0, 60) : null;
  } catch {
    return null;
  }
}

export function progressText(tool: string, label: string): string {
  const node = nodeOf(label);
  switch (tool) {
    case 'get_execution_overview':
      return 'Reviewing the execution';
    case 'get_node_definition':
      return node ? `Reading the configuration of ${node}` : 'Reading a node configuration';
    case 'get_node_input':
      return node ? `Checking what ${node} received` : 'Checking a node input';
    case 'get_node_data':
      return node ? `Reading what ${node} returned` : 'Reading node data';
    case 'trace_lineage':
      return node ? `Tracing where ${node} gets its data` : 'Tracing data lineage';
    case 'get_branch_analysis':
      return 'Checking which branch was taken';
    case 'get_job_categories_and_statuses':
      return 'Looking up job categories and statuses';
    default:
      return 'Checking the Zuper documentation';
  }
}
