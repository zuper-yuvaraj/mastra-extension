import { z } from 'zod';

export const ROOT_CAUSE_CATEGORIES = [
  'BAD_UPSTREAM_DATA',
  'WRONG_EXPRESSION_PATH',
  'MISSING_DATA',
  'CODE_ERROR',
  'EXTERNAL_API_ERROR',
  'CONFIGURATION',
  'BRANCH_CONDITION',
  'PERMISSION',
  'OTHER',
] as const;

const evidenceItemSchema = z.object({
  node_uid: z
    .string()
    .describe(
      'uid of the node this evidence concerns, copied from the seed or tool results. For a fact about the execution as a whole (its status, its error message, the executed-node list, a branch list) use the execution uid from the seed (execution.uid). Never invent a node name or uid.',
    ),
  name: z.string(),
  observation: z.string().describe('What this node showed, in plain words.'),
  quote: z
    .string()
    .describe('One short, CONTIGUOUS, VERBATIM excerpt copied from a single tool result or the seed (a value, a key, an error text). Never paraphrase, never join pieces from different results, never add or drop characters.'),
});

export const verdictSchema = z.object({
  status: z
    .enum(['failed', 'unexpected_branch', 'no_issue', 'insufficient_evidence', 'answered'])
    .describe(
      'failed: the execution errored. unexpected_branch: it ran but took a path the user did not expect. no_issue: nothing wrong found. insufficient_evidence: the data does not establish a cause or the answer. answered: the user asked an informational question (what a node does, what value a field held, how the workflow is built) and it is answered from the data; there is no failure to diagnose.',
    ),
  workflow_purpose: z
    .string()
    .describe('What this workflow does for the business, in at most two short lines (about 25 words), read from the node flow, e.g. "Receives a call webhook, fetches the call details and logs them against the customer." Empty string for a follow-up question, or when the purpose cannot be told from the nodes. Never guess.'),
  headline: z
    .string()
    .describe('A short header (under 15 words) in the shape "While <the activity the failed node was performing>, <node name> failed", e.g. "While fetching the call details, Get Call details failed". For an unexpected branch: "While deciding <what>, <node name> took the <TRUE/FALSE> path". Empty string when nothing failed or the user asked an informational question. No ids.'),
  summary: z
    .string()
    .describe(
      'The body under the headline: at most TWO plain sentences, about 50 words, that DIRECTLY answer the question asked. For a failure: why that node failed (its own error, in words) and whether a preceding node caused it (name it and what it produced) or that the preceding nodes were checked and are fine. Do not repeat the workflow purpose or the headline here. Zuper terminology. NEVER include a uuid, uid or other identifier; refer to nodes by name. For a follow-up, answer the follow-up, not the original question again.',
    ),
  failed_node: z
    .object({ uid: z.string().nullable(), name: z.string().nullable(), error: z.string().nullable() })
    .nullable(),
  root_cause: z
    .object({
      node_uid: z.string().describe('The node where the problem STARTS — often upstream of the node that errored.'),
      name: z.string(),
      category: z
        .enum(ROOT_CAUSE_CATEGORIES)
        .describe(
          'Choose by WHERE the fault is, at the root-cause node. ' +
            'CODE_ERROR: the root-cause node is a Code node (or other user-written logic) and its own code produced the wrong value, even though the symptom shows up later at another node. ' +
            'WRONG_EXPRESSION_PATH: the node reads a path that does not exist in the data it was given (a missing .data, a wrong key). ' +
            'BAD_UPSTREAM_DATA: the producing node did its job as configured but the record or response it returned holds wrong or empty values. ' +
            'MISSING_DATA: a record or field the workflow depends on does not exist in the account. ' +
            'EXTERNAL_API_ERROR: a call to Zuper or another service failed for a reason on the service side (rejected request, rule, outage). ' +
            'CONFIGURATION: a native node is set up in a way that cannot work (wrong module, operation, field mapping). ' +
            'BRANCH_CONDITION: an If/Else condition or trigger filter evaluated differently than intended. ' +
            'PERMISSION: the user or API key is not allowed to do it. OTHER: none of these.',
        ),
      explanation: z.string(),
    })
    .nullable(),
  evidence_chain: z
    .array(evidenceItemSchema)
    .describe('Ordered from the failed node back to the root cause. Only data read from this execution (nodes or the execution itself); documentation belongs in knowledge_used, never here.'),
  fix: z
    .object({
      description: z.string(),
      node_uid: z.string().nullable().describe('The uid of an EXISTING node in this execution to change, copied from the seed or tool results; null if the change is a new node or is not tied to one node.'),
      suggested_change: z.string().nullable().describe('Concrete change, e.g. the corrected expression or code line. Use only fields and values seen in the evidence; if it assumes anything unseen, say so inside the text.'),
    })
    .nullable(),
  confidence: z.enum(['high', 'medium', 'low']),
  references: z
    .array(z.object({ title: z.string(), url: z.string() }))
    .max(3)
    .describe('Documentation pages the conclusion relied on, for the reader to open: title and the exact source_url copied from a knowledge tool result. Only pages you actually used; never invent or edit a URL. Empty if none.'),
  knowledge_used: z
    .array(z.object({ tool: z.string(), id: z.string() }))
    .describe('Only KNOWLEDGE lookups the conclusion relied on (search_knowledge, get_node_info, get_node_output_shape, get_expression_rules, get_code_runtime, get_api_endpoint, ...) with the id or topic asked for. Not runtime inspection tools. Empty if none were used.'),
});

export type RcaVerdict = z.infer<typeof verdictSchema>;

/** Used when the model produces nothing usable, so the caller still gets a well-formed answer. */
export const INSUFFICIENT_VERDICT: RcaVerdict = {
  status: 'insufficient_evidence',
  workflow_purpose: '',
  headline: '',
  summary: 'The investigation could not reach a conclusion from the available data.',
  failed_node: null,
  root_cause: null,
  evidence_chain: [],
  fix: null,
  confidence: 'low',
  references: [],
  knowledge_used: [],
};

/** Shape of a verified verdict, for workflow step output. */
export const verifiedVerdictSchema = verdictSchema.omit({ evidence_chain: true }).extend({
  evidence_chain: z.array(evidenceItemSchema.extend({ verified: z.boolean() })),
  issues: z.array(z.string()),
  adjustments: z.array(z.string()).optional(),
});

export interface VerifiedEvidence {
  node_uid: string;
  name: string;
  observation: string;
  quote: string;
  /** True when the quote was found verbatim in a recorded tool result. */
  verified: boolean;
}

export interface VerifiedVerdict extends Omit<RcaVerdict, 'evidence_chain'> {
  evidence_chain: VerifiedEvidence[];
  /** Changes the verifier made to the model's answer (e.g. a category corrected from the node type). */
  adjustments?: string[];
  /** Problems found by verification (unknown nodes, unverifiable quotes). Empty when clean. */
  issues: string[];
}

export function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** The documentation the answer relied on, last in every reply, as links the reader can open. Only https
 * addresses become links (the chat also refuses any other host); anything else is shown as plain text. */
export function renderReferences(references: ReadonlyArray<{ title: string; url: string }>): string {
  if (references.length === 0) return '';
  const item = (r: { title: string; url: string }): string =>
    /^https:\/\//i.test(r.url) ? `<li><a href="${esc(r.url)}">${esc(r.title)}</a></li>` : `<li>${esc(r.title)}: ${esc(r.url)}</li>`;
  return `<p><strong>Reference</strong></p><ul>${references.map(item).join('')}</ul>`;
}

const STATUS_TITLE: Record<RcaVerdict['status'], string> = {
  failed: 'Execution failed',
  unexpected_branch: 'Unexpected path taken',
  no_issue: 'No issue found',
  insufficient_evidence: 'Not enough evidence to determine a cause',
  answered: 'Answer',
};

/** HTML for the UI, generated from the verdict rather than written by the model. Tags limited to
 * p, ul, li, strong, em, code so the existing chat renderer's allow-list accepts it. */
export function renderVerdictHtml(verdict: VerifiedVerdict): string {
  const parts: string[] = [`<p><strong>${esc(STATUS_TITLE[verdict.status])}</strong> — ${esc(verdict.summary)}</p>`];

  if (verdict.failed_node?.name) {
    parts.push(
      `<p><strong>Failed at:</strong> ${esc(verdict.failed_node.name)}${
        verdict.failed_node.error ? ` — <code>${esc(verdict.failed_node.error)}</code>` : ''
      }</p>`,
    );
  }
  if (verdict.root_cause) {
    parts.push(
      `<p><strong>Root cause (${esc(verdict.root_cause.category.replace(/_/g, ' ').toLowerCase())}) at ${esc(
        verdict.root_cause.name,
      )}:</strong> ${esc(verdict.root_cause.explanation)}</p>`,
    );
  }
  if (verdict.evidence_chain.length > 0) {
    const items = verdict.evidence_chain
      .map(
        (e) =>
          `<li><strong>${esc(e.name)}</strong>: ${esc(e.observation)} <code>${esc(e.quote)}</code>${
            e.verified ? '' : ' <em>(could not be verified against the data)</em>'
          }</li>`,
      )
      .join('');
    parts.push(`<p><strong>How we got there:</strong></p><ul>${items}</ul>`);
  }
  if (verdict.fix) {
    parts.push(
      `<p><strong>Suggested fix:</strong> ${esc(verdict.fix.description)}${
        verdict.fix.suggested_change ? ` <code>${esc(verdict.fix.suggested_change)}</code>` : ''
      }</p>`,
    );
  }
  if (verdict.issues.length > 0) {
    parts.push(`<p><em>Verification notes: ${esc(verdict.issues.join('; '))}</em></p>`);
  }
  parts.push(renderReferences(verdict.references));
  return parts.join('');
}
