// Stage 4 of the hydrated RCA engine: the one message the analysis model reads. Everything in it is
// already established by code (stages 2 and 3); this only decides what to leave out and how to lay it out.
//
//   hydrated execution -> drop repeated data -> trim to the budgets -> strip cosmetics -> sections
//
// Repeats are dropped BEFORE trimming, so a node's budget is spent on data that is shown, not on a copy
// that is about to become a pointer. Nothing here edits its input.

import type { BranchDecision } from '../lib/workflowGraph';
import type { HydratedExecution, HydratedNode, HydratedReference } from './hydrate';
import type { Audience, ResponseType } from './intent';
import type { KbDoc } from './kbStep';
import { referenceBase, toSelector, trimHydrated, type TrimOptions, type TrimReport } from './trim';
import type { Understanding } from './understand';

/** A later copy of data this large becomes a pointer; smaller data is cheaper to repeat than to point at. */
const MIN_REPEAT_CHARS = 600;

/** How to read the pack. Single source of truth for the analysis instructions (stage 5), so the wording
 * never drifts from what this module actually produces. */
export const PACK_LEGEND = [
  'HOW TO READ THE PACK',
  '- HYDRATED WORKFLOW is the workflow exactly as it ran (the version that executed). Each node has `form_fields` (its configuration, and a Code node\'s source) and, when it ran, `execution` (how it ran) and `references_node_data`.',
  '- `references_node_data` maps each expression the node reads to the REAL value it got in this run: `value`, the node it came from (`from_node`), and its `status`. `used_in` says which field uses it; `used_as` is the name a Code node reads it by (`$input.<name>`).',
  '- A reference `status` other than `resolved` is itself evidence: `undefined`/`null` (the path is wrong or empty, see `failed_at` and `available_keys`), `not_evaluated` (the field is FIXED, so the expression is used as literal text), `fetch_failed` (the data could not be loaded: conclude nothing about it), `skipped_node_not_run`, `variable` (a workflow variable: its value is never shown).',
  '- `same_as` means the value is identical to the one under that earlier node and expression; it is not repeated.',
  '- A line starting with `// ` inside an array or string is a comment, not data: items were removed to keep the pack small. It lists what was removed and the exact get_node_data call that fetches one item. Never conclude that something is missing from data that was cut; fetch it first.',
  '- `execution.output` is the node\'s output when no other node reads it; otherwise `output_read_by` names the nodes whose references hold it. `output_same_as_input` means it passed its input through. For the failed node, `input_received` is what it received.',
  '- `[REDACTED]` replaces a credential. It is not a missing value.',
  '- Quotation marks around a string are JSON notation, never part of the value. `""` means the value is EMPTY: nothing was set, which is a very common cause of "not found". A value that really contains a quote character shows it escaped inside the string (`\\"`). Never say a value "has quotation marks" or is "wrapped in quotes" because of the notation, and a `note` on a reference that says a value is empty is the fact to use.',
  '- RESPONSE MODE (explain, rca or chat) and AUDIENCE (business or technical), when present under QUESTION, say what kind of answer is wanted and for whom. Follow their definitions in the instructions. With none, answer as rca.',
  '- EXECUTION FLOW lists the nodes in the order they ran. A node absent from it did not run. BRANCH DECISIONS say which output an If/Else, Split or Loop took.',
  '- DATA GAPS are places where data could not be loaded. Anything that depends on them is unknown, not wrong.',
].join('\n');

const size = (value: unknown): number => JSON.stringify(value ?? null).length;

// ---- repeated data ------------------------------------------------------------------------------------

/** Two references hold the same data when they read the same node run at the same path. A `source_node`
 * reference reads the node's output, a named one reads its wrapper, so they are never the same. */
function repeatKey(ref: HydratedReference, expression: string): string | null {
  if (ref.status !== 'resolved' || ref.value === undefined || !ref.from_node?.uid) return null;
  const how = ref.kind === 'source_node' ? 'output' : `wrapper${toSelector(referenceBase(expression))}`;
  return `${ref.from_node.uid}#${ref.iteration ?? '-'}|${how}`;
}

/** The execution with each later copy of large data replaced by a pointer to the first. */
export function markRepeats(hydrated: HydratedExecution): { hydrated: HydratedExecution; repeats: number } {
  const first = new Map<string, string>();
  let repeats = 0;
  const nodes = hydrated.workflow.nodes.map((node) => {
    let changed = false;
    const references: Record<string, HydratedReference> = {};
    for (const [expression, ref] of Object.entries(node.references_node_data)) {
      const key = repeatKey(ref, expression);
      if (key && size(ref.value) >= MIN_REPEAT_CHARS) {
        const seen = first.get(key);
        if (seen) {
          const { value: _dropped, ...rest } = ref;
          references[expression] = { ...rest, same_as: seen };
          repeats++;
          changed = true;
          continue;
        }
        first.set(key, `${String(node.action_name ?? node.node_uid)} > ${expression}`);
      }
      references[expression] = ref;
    }
    return changed ? { ...node, references_node_data: references } : node;
  });
  return { hydrated: { ...hydrated, workflow: { ...hydrated.workflow, nodes } }, repeats };
}

// ---- layout -------------------------------------------------------------------------------------------

/** The node as the model needs it: what it is, how it is configured, what it read, how it ran. Positions,
 * colours, icons, credentials and pinned data are the editor's, not the workflow's. */
export function slimNode(node: HydratedNode): Record<string, unknown> {
  const out: Record<string, unknown> = { node_uid: node.node_uid, name: node.action_name, type: node.action_key ?? node.node_name };
  if (node.node_name && node.node_name !== node.action_key) out.node_name = node.node_name;
  if (node.action_type) out.action_type = node.action_type;
  if (typeof node.description === 'string' && node.description) out.description = node.description;
  if (typeof node.module === 'string' && node.module) out.module = node.module;
  if (node.is_active === false) out.is_active = false;
  out.form_fields = node.form_fields;
  out.execution = node.execution;
  out.references_node_data = node.references_node_data;
  return out;
}

/** Connections by node name, with the result an If/Else output is taken on. */
function namedConnections(hydrated: HydratedExecution): Array<{ from: string; to: string; when?: boolean }> {
  const nameByKey = new Map<string, string>();
  for (const node of hydrated.workflow.nodes) {
    const name = String(node.action_name ?? node.node_uid);
    for (const key of [node.node_uid, node.id]) if (typeof key === 'string' && key) nameByKey.set(key, name);
  }
  const label = (value: unknown): string => (typeof value === 'string' ? (nameByKey.get(value) ?? value) : '(unknown)');
  return hydrated.workflow.connections
    .map((c) => ({ from: label(c.source), to: label(c.target), ...(typeof c.output_value === 'boolean' ? { when: c.output_value } : {}) }))
    .filter((c) => c.from !== c.to);
}

function slimFlow(hydrated: HydratedExecution): Array<Record<string, unknown>> {
  return hydrated.execution_flow.map((entry) => ({
    order: entry.order,
    node: entry.name,
    status: entry.status,
    ...(entry.runs > 1 ? { runs: entry.runs } : {}),
    ...(entry.is_loop ? { loop: true, ...(entry.total_iterations !== null ? { total_iterations: entry.total_iterations } : {}) } : {}),
    ...(entry.failed_iterations.length > 0 ? { failed_iterations: entry.failed_iterations } : {}),
  }));
}

export interface PackInput {
  hydrated: HydratedExecution;
  /** Stage 1's summary of what the workflow is for; null when it could not be produced. */
  understanding: Understanding | null;
  question: string;
  /** Earlier turns of this conversation, when this is a follow-up. */
  history?: string;
  /** Documentation excerpts for the workflow's modules (kbStep). Optional and small. */
  docs?: KbDoc[];
  trim?: TrimOptions;
  /** What kind of answer is wanted and for whom (rca/intent.ts). Absent: the RCA layout, wording left to the model. */
  intent?: { type: ResponseType; audience: Audience };
}

export interface PackReport {
  chars: number;
  /** Characters per section, to see what a pack is made of. */
  sections: Record<string, number>;
  /** How many later copies of the same data became pointers. */
  repeats: number;
  trim: TrimReport;
}

export interface Pack {
  /** What the model reads. */
  message: string;
  /** What the evidence ledger must record: the message without the question, the conversation and the
   * documentation, so a quote can only be verified against data from this execution. */
  evidence: string;
  report: PackReport;
}

export function buildPack(input: PackInput): Pack {
  const { hydrated: deduped, repeats } = markRepeats(input.hydrated);
  const { hydrated, report: trim } = trimHydrated(deduped, input.trim);

  const workflow = {
    name: hydrated.workflow.name,
    ...(hydrated.workflow.description ? { description: hydrated.workflow.description } : {}),
    version: hydrated.workflow.version_id ?? hydrated.workflow.version,
    variable_names: hydrated.workflow.variable_names,
    nodes: hydrated.workflow.nodes.map(slimNode),
    connections: namedConnections(hydrated),
  };
  const decisions: BranchDecision[] = hydrated.branch_decisions;

  const sections: Array<[string, unknown]> = [
    ['WORKFLOW UNDERSTANDING', input.understanding ?? '(not available: work from the workflow itself)'],
    ['EXECUTION', hydrated.execution],
    ['EXECUTION FLOW', slimFlow(hydrated)],
    ['BRANCH DECISIONS', decisions],
    ['DATA GAPS', hydrated.data_gaps],
    ['HYDRATED WORKFLOW', workflow],
    ...(input.docs && input.docs.length > 0 ? ([['DOCS', input.docs.map((d) => ({ title: d.title, about: d.forNodes, text: d.text }))]] as Array<[string, unknown]>) : []),
  ];

  const sizes: Record<string, number> = {};
  const parts = [
    `QUESTION: ${input.question.trim() || 'Why did this execution fail? Find the root cause.'}`,
    ...(input.intent ? [`RESPONSE MODE: ${input.intent.type}`, `AUDIENCE: ${input.intent.audience}`] : []),
    ...(input.history ? ['', 'CONVERSATION SO FAR:', input.history] : []),
  ];
  const evidence: string[] = [];
  for (const [title, body] of sections) {
    const text = typeof body === 'string' ? body : JSON.stringify(body);
    sizes[title] = text.length;
    const block = ['', `${title}${typeof body === 'string' ? ':' : ' (JSON):'}`, text];
    parts.push(...block);
    if (title !== 'DOCS') evidence.push(...block);
  }
  const message = parts.join('\n');
  return { message, evidence: evidence.join('\n').trimStart(), report: { chars: message.length, sections: sizes, repeats, trim } };
}
