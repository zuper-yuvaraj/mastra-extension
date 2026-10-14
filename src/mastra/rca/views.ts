// The chat shows one verified verdict in three ways. They are rendered deterministically from the same
// verdict, so the "Explain in detail" / "Give me the fix" chips cost no model call, answer instantly, and can
// never disagree with the first answer. Tags are limited to what the extension's sanitizer keeps.

import { CHIP_RCA } from './intent';
import { renderReferences, renderVerdictHtml, type VerifiedVerdict } from './verdict';

export { CHIP_RCA };
export type ChatView = 'crisp' | 'detail' | 'fix' | 'rca';

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

const CATEGORY_WORDS = (category: string): string => category.replace(/_/g, ' ').toLowerCase();

/** The third part of the answer: the root cause in words, then the backtrace one line per node (failure first,
 * origin last). Only lines whose quote was checked against the data are shown as findings, and the root cause
 * is stated only when the verifier confirmed it (an unconfirmed one is shown as a labelled hypothesis). */
function renderRca(v: VerifiedVerdict): string {
  if (v.status !== 'failed' && v.status !== 'unexpected_branch') return '';
  const lines = v.evidence_chain.filter((e) => e.verified && !READER_LIMIT.test(e.quote)).slice(0, MAX_RCA_LINES);
  if (lines.length === 0 && !v.root_cause) return '';
  const cause = v.root_cause
    ? `<p><strong>Root cause:</strong> ${esc(v.root_cause.name)} (${esc(CATEGORY_WORDS(v.root_cause.category))}) — ${esc(v.root_cause.explanation.trim())}</p>`
    : '';
  const chain = lines.length > 0 ? `<ul>${lines.map((e) => `<li><strong>${esc(e.name)}</strong>: ${esc(e.observation)}</li>`).join('')}</ul>` : '';
  return heading('RCA') + cause + chain;
}

/**
 * Plain text with a little structure, as HTML that uses only the tags the chat keeps: blank lines separate
 * paragraphs, lines starting "- ", "* " or "1. " are a list, three backticks fence a code block, `code` and
 * **bold** are inline. Everything is escaped first, so whatever a model wrote cannot add markup.
 */
export function chatTextToHtml(text: string): string {
  const inline = (s: string): string => esc(s).replace(/`([^`\n]+)`/g, '<code>$1</code>').replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const isItem = (line: string): boolean => /^\s*(?:[-*•]|\d+[.)])\s+/.test(line);
  const isFence = (line: string): boolean => line.trim().startsWith('```');
  const blocks: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (isFence(line)) {
      const code: string[] = [];
      for (i++; i < lines.length && !isFence(lines[i]!); i++) code.push(lines[i]!);
      i++; // the closing fence (or the end of the text)
      blocks.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
    } else if (isItem(line)) {
      const items: string[] = [];
      for (; i < lines.length && isItem(lines[i]!); i++) items.push(`<li>${inline(lines[i]!.replace(/^\s*(?:[-*•]|\d+[.)])\s+/, ''))}</li>`);
      blocks.push(`<ul>${items.join('')}</ul>`);
    } else if (!line.trim()) {
      i++;
    } else {
      const paragraph: string[] = [];
      for (; i < lines.length && lines[i]!.trim() && !isItem(lines[i]!) && !isFence(lines[i]!); i++) paragraph.push(lines[i]!.trim());
      blocks.push(`<p>${inline(paragraph.join(' '))}</p>`);
    }
  }
  return blocks.join('');
}

/** An answer that is not confirmed still shows the hypothesis, clearly labelled, so it is not lost. */
const hypothesisOf = (v: VerifiedVerdict): string | undefined =>
  v.issues.find((i) => i.startsWith('Possible cause (not confirmed)') || i.startsWith('Unconfirmed hypothesis'));

/** How sure we are. Always stated for a diagnosis; for other answers only when it is not high. Canned answers
 * (no execution, still running) have no analysis behind them, so they state none. */
function renderConfidence(v: VerifiedVerdict, hypothesis: string | undefined): string {
  const analysed = v.evidence_chain.length > 0 || v.root_cause !== null;
  if (!analysed || !(DIAGNOSTIC.has(v.status) || v.confidence !== 'high')) return '';
  const why = caveat(v);
  return (
    heading(`Confidence: ${LEVEL[v.confidence]}`) +
    (why && !hypothesis ? `<p>${esc(why.charAt(0).toUpperCase() + why.slice(1))}.</p>` : !why ? '<p>Every supporting detail was checked against the execution data.</p>' : '')
  );
}

/** "Why did it fail?": what the workflow does, then "While trying to ...", told at more length, with no RCA. */
function renderExplain(v: VerifiedVerdict): string {
  const parts: string[] = [];
  if (v.workflow_purpose.trim()) parts.push(heading('What this workflow does'), chatTextToHtml(v.workflow_purpose.trim()));
  if (v.headline.trim()) parts.push(heading(v.headline.trim()));
  parts.push(chatTextToHtml(v.summary));
  const hypothesis = hypothesisOf(v);
  if (hypothesis) parts.push(`<p><em>${esc(hypothesis)}</em></p>`);
  parts.push(renderConfidence(v, hypothesis), renderReferences(v.references));
  return parts.join('');
}

/** Anything else: the reply as it was written, with a note only when the evidence behind it is limited. */
function renderChat(v: VerifiedVerdict): string {
  const reply = (v.chat_reply ?? '').trim() || v.summary.trim();
  const why = v.evidence_chain.length > 0 || v.issues.length > 0 ? caveat(v) : null;
  return chatTextToHtml(reply) + (why ? `<p><em>Note: ${esc(why)}.</em></p>` : '') + renderReferences(v.references);
}

/** The default chat answer. By mode: explain (see renderExplain), chat (see renderChat), or the RCA layout, which
 * is also what the older engines produce: what the workflow does; "While trying to ...", what failed or happened;
 * the RCA, the root cause and how it was reached; then how sure we are and the documentation relied on. Sections
 * with nothing to say are left out. */
export function renderCrisp(v: VerifiedVerdict): string {
  if (v.mode === 'chat') return renderChat(v);
  if (v.mode === 'explain') return renderExplain(v);
  const parts: string[] = [];
  if (v.workflow_purpose.trim()) parts.push(heading('What this workflow does'), `<p>${esc(v.workflow_purpose.trim())}</p>`);
  if (v.headline.trim()) parts.push(heading(v.headline.trim()));
  parts.push(`<p>${esc(v.summary)}</p>`);
  const hypothesis = hypothesisOf(v);
  if (hypothesis) parts.push(`<p><em>${esc(hypothesis)}</em></p>`);
  parts.push(renderRca(v), renderConfidence(v, hypothesis), renderReferences(v.references));
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
  if (view === 'rca') return renderCrisp({ ...v, mode: 'rca' });
  return view === 'detail' ? renderDetail(v) : view === 'fix' ? renderFix(v) : renderCrisp(v);
}

/** Quick-reply chips offered after an answer: only what has something to show. A chat answer offers none; an
 * explanation offers the root cause (already found, so it is shown instantly) and the fix. */
export function chipsFor(v: VerifiedVerdict): string[] {
  if (v.mode === 'chat') return [];
  const chips: string[] = [];
  if (v.mode === 'explain') {
    if (v.root_cause) chips.push(CHIP_RCA);
  } else if (v.evidence_chain.length > 0 || v.root_cause) {
    chips.push(CHIP_DETAIL);
  }
  if (v.fix) chips.push(CHIP_FIX);
  return chips;
}

const DETAIL_REQUEST =
  /^\s*(explain(\s+it|\s+this)?(\s+in\s+detail)?|more\s+detail(s)?|in\s+detail|walk\s+me\s+through(\s+it)?|show\s+(me\s+)?(the\s+)?evidence|how\s+did\s+you\s+(get|reach|conclude)\s+(that|this))\s*[.?!]*\s*$/i;
const FIX_REQUEST =
  /^\s*(give\s+me\s+the\s+fix|(what('s|\s+is)\s+)?the\s+fix|how\s+(do|can|should)\s+i\s+fix(\s+it|\s+this)?|fix(\s+it|\s+this)?)\s*[.?!]*\s*$/i;

/** Is this message just a click on (or a typed copy of) one of the chips? Those re-render, not re-investigate. The
 * root-cause chip is matched only by its exact label; a typed "find the root cause" goes through the router. */
export function classifyChipRequest(message: string): 'detail' | 'fix' | 'rca' | null {
  if (message.trim() === CHIP_RCA) return 'rca';
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
