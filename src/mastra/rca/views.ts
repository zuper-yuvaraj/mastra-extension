// The chat shows one verified verdict in three ways. They are rendered deterministically from the same
// verdict, so the "Explain in detail" / "Give me the fix" chips cost no model call, answer instantly, and can
// never disagree with the first answer. Tags are limited to what the extension's sanitizer keeps.

import { renderReferences, renderVerdictHtml, type VerifiedVerdict } from './verdict';

export type ChatView = 'crisp' | 'detail' | 'fix';

export const CHIP_DETAIL = 'Show evidence';
export const CHIP_FIX = 'Give me the fix';

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const DATA_GAP = /could not be loaded/i;

/** Why the answer deserves a caveat, in a few words, or null when it needs none. */
function caveat(v: VerifiedVerdict): string | null {
  if (v.confidence === 'high') return null;
  const unverified = v.evidence_chain.filter((e) => !e.verified).length;
  if (v.issues.some((i) => DATA_GAP.test(i))) return 'some of the data could not be read, so parts of this could not be checked';
  if (unverified > 0) return 'part of the supporting evidence could not be verified against the data';
  return 'the evidence is limited';
}

const DIAGNOSTIC = new Set<VerifiedVerdict['status']>(['failed', 'unexpected_branch', 'insufficient_evidence']);
const LEVEL = { high: 'High', medium: 'Medium', low: 'Low' } as const;

const heading = (text: string): string => `<p><strong>${esc(text)}</strong></p>`;
const MAX_RCA_LINES = 4;
/** A line about OUR reader failing is a limit on the analysis, not a finding about the run. */
const READER_LIMIT = /fetch_failed|could not be loaded|"unavailable"/i;

/** The backtrace in words, one line per node, failure first and the origin last. Only lines whose quote was
 * checked against the data are shown as findings. */
function renderDetailedRca(v: VerifiedVerdict): string {
  if (v.status !== 'failed' && v.status !== 'unexpected_branch') return '';
  const lines = v.evidence_chain.filter((e) => e.verified && !READER_LIMIT.test(e.quote)).slice(0, MAX_RCA_LINES);
  if (lines.length === 0) return '';
  return heading('Detailed RCA') + `<ul>${lines.map((e) => `<li><strong>${esc(e.name)}</strong>: ${esc(e.observation)}</li>`).join('')}</ul>`;
}

/** The default chat answer, under plain headers: what the workflow does, what failed and why, how sure we
 * are, and the documentation relied on. Sections with nothing to say are left out. */
export function renderCrisp(v: VerifiedVerdict): string {
  const parts: string[] = [];
  if (v.workflow_purpose.trim()) parts.push(heading('What this workflow does'), `<p>${esc(v.workflow_purpose.trim())}</p>`);
  if (v.headline.trim()) parts.push(heading(v.headline.trim()));
  parts.push(`<p>${esc(v.summary)}</p>`);

  // An answer that is not confirmed still shows the hypothesis, clearly labelled, so it is not lost.
  const hypothesis = v.issues.find((i) => i.startsWith('Possible cause (not confirmed)') || i.startsWith('Unconfirmed hypothesis'));
  if (hypothesis) parts.push(`<p><em>${esc(hypothesis)}</em></p>`);

  parts.push(renderDetailedRca(v));

  // Confidence is always stated for a diagnosis; for other answers only when it is not high.
  // Canned answers (no execution, still running) have no analysis behind them, so they state none.
  const analysed = v.evidence_chain.length > 0 || v.root_cause !== null;
  if (analysed && (DIAGNOSTIC.has(v.status) || v.confidence !== 'high')) {
    const why = caveat(v);
    parts.push(heading(`Confidence: ${LEVEL[v.confidence]}`));
    if (why && !hypothesis) parts.push(`<p>${esc(why.charAt(0).toUpperCase() + why.slice(1))}.</p>`);
    else if (!why) parts.push('<p>Every supporting detail was checked against the execution data.</p>');
  }
  parts.push(renderReferences(v.references));
  return parts.join('');
}

/** "Explain in detail": the full walkthrough (failed node, root cause, evidence with verification marks). */
export function renderDetail(v: VerifiedVerdict): string {
  return renderVerdictHtml(v);
}

/** "Give me the fix": the fix, with code in a copyable block. */
export function renderFix(v: VerifiedVerdict): string {
  if (!v.fix) {
    return `<p>I could not determine a specific fix from the data available.${
      v.root_cause ? ` The problem starts at <strong>${esc(v.root_cause.name)}</strong>.` : ''
    }</p>`;
  }
  const parts = [`<p><strong>Suggested fix:</strong> ${esc(v.fix.description)}</p>`];
  if (v.fix.suggested_change) parts.push(`<pre><code>${esc(v.fix.suggested_change)}</code></pre>`);
  if (v.confidence !== 'high') {
    parts.push('<p><em>Check this against your workflow before applying it: the analysis could not confirm every detail it relies on.</em></p>');
  }
  parts.push(renderReferences(v.references));
  return parts.join('');
}

export function renderView(v: VerifiedVerdict, view: ChatView): string {
  return view === 'detail' ? renderDetail(v) : view === 'fix' ? renderFix(v) : renderCrisp(v);
}

/** Quick-reply chips offered after an answer: only what has something to show. */
export function chipsFor(v: VerifiedVerdict): string[] {
  const chips: string[] = [];
  if (v.evidence_chain.length > 0 || v.root_cause) chips.push(CHIP_DETAIL);
  if (v.fix) chips.push(CHIP_FIX);
  return chips;
}

const DETAIL_REQUEST =
  /^\s*(explain(\s+it|\s+this)?(\s+in\s+detail)?|more\s+detail(s)?|in\s+detail|walk\s+me\s+through(\s+it)?|show\s+(me\s+)?(the\s+)?evidence|how\s+did\s+you\s+(get|reach|conclude)\s+(that|this))\s*[.?!]*\s*$/i;
const FIX_REQUEST =
  /^\s*(give\s+me\s+the\s+fix|(what('s|\s+is)\s+)?the\s+fix|how\s+(do|can|should)\s+i\s+fix(\s+it|\s+this)?|fix(\s+it|\s+this)?)\s*[.?!]*\s*$/i;

/** Is this message just a click on (or a typed copy of) one of the chips? Those re-render, not re-investigate. */
export function classifyChipRequest(message: string): 'detail' | 'fix' | null {
  if (DETAIL_REQUEST.test(message)) return 'detail';
  if (FIX_REQUEST.test(message)) return 'fix';
  return null;
}

const UUID = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';
const WRAPPED_UUID = new RegExp(String.raw`\s*[(\[]\s*${UUID}\s*[)\]]`, 'gi');
const BARE_UUID = new RegExp(String.raw`\s*\b${UUID}\b`, 'gi');
const ASKS_FOR_IDS = /\b(uuids?|uids?|guids?|ids?|identifiers?)\b/i;

/** Ids mean nothing to a Zuper admin. Whatever the model wrote, they are removed from the reply unless the
 * user's message asked for them. */
export function withoutIds(html: string, question: string): string {
  if (ASKS_FOR_IDS.test(question)) return html;
  return html.replace(WRAPPED_UUID, '').replace(BARE_UUID, '');
}
