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

export const verdictSchema = z.object({
  status: z
    .enum(['failed', 'unexpected_branch', 'no_issue', 'insufficient_evidence'])
    .describe('failed: the execution errored. unexpected_branch: it ran but took a path the user did not expect. no_issue: nothing wrong found. insufficient_evidence: the data does not establish a cause.'),
  summary: z.string().describe('One or two plain sentences: what went wrong and why. Zuper terminology, no node ids.'),
  failed_node: z
    .object({ uid: z.string().nullable(), name: z.string().nullable(), error: z.string().nullable() })
    .nullable(),
  root_cause: z
    .object({
      node_uid: z.string().describe('The node where the problem STARTS — often upstream of the node that errored.'),
      name: z.string(),
      category: z.enum(ROOT_CAUSE_CATEGORIES),
      explanation: z.string(),
    })
    .nullable(),
  evidence_chain: z
    .array(
      z.object({
        node_uid: z.string(),
        name: z.string(),
        observation: z.string().describe('What this node showed, in plain words.'),
        quote: z
          .string()
          .describe('A short VERBATIM excerpt copied from a tool result that proves the observation (a value, key or error text). Never paraphrase.'),
      }),
    )
    .describe('Ordered from the failed node back to the root cause.'),
  fix: z
    .object({
      description: z.string(),
      node_uid: z.string().nullable(),
      suggested_change: z.string().nullable().describe('Concrete change, e.g. the corrected expression or code line.'),
    })
    .nullable(),
  confidence: z.enum(['high', 'medium', 'low']),
  knowledge_used: z
    .array(z.object({ tool: z.string(), id: z.string() }))
    .describe('Knowledge-base entries (tool + id/topic) the conclusion relied on.'),
});

export type RcaVerdict = z.infer<typeof verdictSchema>;

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
  /** Problems found by verification (unknown nodes, unverifiable quotes). Empty when clean. */
  issues: string[];
}

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const STATUS_TITLE: Record<RcaVerdict['status'], string> = {
  failed: 'Execution failed',
  unexpected_branch: 'Unexpected path taken',
  no_issue: 'No issue found',
  insufficient_evidence: 'Not enough evidence to determine a cause',
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
  return parts.join('');
}
