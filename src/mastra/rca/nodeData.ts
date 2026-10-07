// What GET /api/workflows/{wf}/executions/{ex}/nodes/{node_uid} really returns (confirmed on a real
// failed execution; see samples/):
//
//   { node_execution: {
//       node_uid, status,                      // node status: COMPLETED | FAILED ...
//       input_data,                            // what the node RECEIVED: the previous node's {data, node}
//                                              //   wrapper (null for a trigger)
//       execution_data,                        // what it PRODUCED: a {data, node} wrapper, plus, depending
//                                              //   on the node type, siblings of `data`:
//                                              //   form_fields  the fields with expressions already EVALUATED
//                                              //   status       HTTP status (http nodes)
//                                              //   error        the failure text (http nodes: can be an HTML page)
//                                              //   output_value true/false (http success, if/else result)
//                                              //   request_data what was sent
//       current_iteration, total_iterations,   // loop position
//       remarks } }
//
// The execution-level error_message can be empty (a real failed run had ""), while the node's own
// execution_data carries the actual error and HTTP status. So the node's runtime facts matter.

import { preview } from './resolveInput';

export interface ParsedNodeExecution {
  status: string | null;
  inputData: unknown;
  /** The node's {data, node} wrapper (what accessors like $.getLatestNodeData return). */
  executionData: Record<string, unknown> | null;
  remarks: unknown;
  currentIteration: number | null;
  totalIterations: number | null;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Reads the `node_execution` envelope. Null when the payload is not in that shape. */
export function parseNodeExecution(raw: unknown): ParsedNodeExecution | null {
  const envelope = isObject(raw) && isObject(raw.node_execution) ? raw.node_execution : null;
  if (!envelope) return null;
  return {
    status: typeof envelope.status === 'string' ? envelope.status : null,
    inputData: envelope.input_data ?? null,
    executionData: isObject(envelope.execution_data) ? envelope.execution_data : null,
    remarks: envelope.remarks ?? null,
    currentIteration: typeof envelope.current_iteration === 'number' ? envelope.current_iteration : null,
    totalIterations: typeof envelope.total_iterations === 'number' ? envelope.total_iterations : null,
  };
}

const ERROR_PREVIEW_CHARS = 1200;
const FIELD_PREVIEW_CHARS = 400;

/** An HTML error page (an HTTP node that hit a 404 gets one) boiled down to its text. */
function readableError(error: unknown): string | null {
  if (error === null || error === undefined || error === '') return null;
  const text = typeof error === 'string' ? error : JSON.stringify(error);
  const stripped = /<\s*(html|body|pre)\b/i.test(text)
    ? text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    : text;
  return stripped.length <= ERROR_PREVIEW_CHARS ? stripped : `${stripped.slice(0, ERROR_PREVIEW_CHARS)}…(${stripped.length} chars)`;
}

/** Fields with a value: the node's resolved form_fields minus the dozens of empty defaults. */
function resolvedFields(formFields: unknown): Record<string, string> | null {
  if (!isObject(formFields)) return null;
  const out: Record<string, string> = {};
  for (const [name, field] of Object.entries(formFields)) {
    const value = isObject(field) && 'value' in field ? field.value : field;
    const empty =
      value === '' || value === null || value === undefined || value === false ||
      (Array.isArray(value) && value.length === 0) ||
      (isObject(value) && Object.keys(value).length === 0);
    if (!empty) out[name] = preview(value, FIELD_PREVIEW_CHARS);
  }
  return Object.keys(out).length > 0 ? out : null;
}

export interface NodeRuntime {
  node_status: string | null;
  /** HTTP status of an http node's call. */
  http_status: number | null;
  /** The node's own failure text (an HTML error page is reduced to its text). */
  error: string | null;
  output_value: boolean | null;
  remarks: unknown;
  iteration: number | null;
  total_iterations: number | null;
  /** What the node actually ran with: its fields after expressions were evaluated (empty ones omitted). */
  resolved_fields: Record<string, string> | null;
  /** The node that fed this one (its input_data wrapper's node), if any. */
  received_from: string | null;
}

/** The facts about one node's run a person reads first in the canvas. */
export function describeNodeRuntime(raw: unknown): NodeRuntime | null {
  const parsed = parseNodeExecution(raw);
  if (!parsed) return null;
  const data = parsed.executionData ?? {};
  const input = isObject(parsed.inputData) ? parsed.inputData : null;
  const inputNode = input && isObject(input.node) ? input.node : null;
  return {
    node_status: parsed.status,
    http_status: typeof data.status === 'number' ? data.status : null,
    error: readableError(data.error),
    output_value: typeof data.output_value === 'boolean' ? data.output_value : null,
    remarks: parsed.remarks,
    iteration: parsed.currentIteration,
    total_iterations: parsed.totalIterations,
    resolved_fields: resolvedFields(data.form_fields),
    received_from: inputNode && typeof inputNode.node_name === 'string' ? inputNode.node_name : null,
  };
}
