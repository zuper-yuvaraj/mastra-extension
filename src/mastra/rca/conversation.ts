// Memory for a chat about one execution, kept short-lived and in process memory only.
//
// The extension already stores the conversation and resends it on every message, so the server does not
// need to own it. What the server must keep is what the conversation cannot carry: the last VERIFIED
// verdict and the evidence the investigator was actually shown. With those, a follow-up ("give me the
// fix", "why was it null?") builds on facts that were already checked, and a quote from an earlier turn
// still verifies instead of being rejected as invented.
//
// Nothing is written to disk. Entries expire, and the key includes a hash of the caller's token so one
// account can never read another's.

import { createHash } from 'node:crypto';
import type { VerifiedVerdict } from './verdict';

export interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

export interface ConversationState {
  /** The most recent verdict that diagnosed something; what "explain" / "fix" chips refer to. */
  primary: VerifiedVerdict | null;
  /** The most recent answer of any kind. */
  last: VerifiedVerdict;
  /** Everything the investigator was shown, newest kept when over budget. */
  evidence: string[];
  updatedAt: number;
}

export const CONVERSATION_TTL_MS = 15 * 60 * 1000;
export const MAX_EVIDENCE_CHARS = 250_000;

/** A stable, non-reversible id for the caller's account, so the token itself is never used as a key. */
export function accountKey(token: string): string {
  return createHash('sha256').update(token).digest('hex').slice(0, 16);
}

export function conversationKey(token: string, workflowUid: string, executionUid: string | null): string {
  return `${accountKey(token)}:${workflowUid}:${executionUid ?? 'definition'}`;
}

/** Statuses that diagnose the run, as opposed to answering a side question. */
const DIAGNOSTIC = new Set<VerifiedVerdict['status']>(['failed', 'unexpected_branch', 'insufficient_evidence', 'no_issue']);

export class ConversationStore {
  private readonly entries = new Map<string, ConversationState>();

  constructor(
    private readonly ttlMs: number = CONVERSATION_TTL_MS,
    private readonly maxConversations: number = 300,
  ) {}

  get(key: string): ConversationState | null {
    const entry = this.entries.get(key);
    if (!entry) return null;
    if (Date.now() - entry.updatedAt > this.ttlMs) {
      this.entries.delete(key);
      return null;
    }
    return entry;
  }

  /** Records the outcome of a turn. A side question's answer never displaces the diagnosis the chips refer to. */
  record(key: string, verdict: VerifiedVerdict, evidence: string[]): ConversationState {
    const previous = this.get(key);
    const primary = DIAGNOSTIC.has(verdict.status) ? verdict : (previous?.primary ?? null);
    const state: ConversationState = { primary, last: verdict, evidence, updatedAt: Date.now() };
    this.entries.delete(key); // re-insert so the oldest conversation is the first to go
    this.entries.set(key, state);
    if (this.entries.size > this.maxConversations) {
      const oldest = this.entries.keys().next().value;
      if (oldest !== undefined) this.entries.delete(oldest);
    }
    return state;
  }

  forget(key: string): void {
    this.entries.delete(key);
  }
}

const MAX_HISTORY_TURNS = 6;
const MAX_TURN_CHARS = 600;

/** Assistant replies are HTML; the model needs the words, not the tags. */
export function htmlToText(html: string): string {
  return html
    .replace(/<\/(p|li|h[1-6]|div|pre)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

/** The conversation before the current question, compact: last few turns, each trimmed. */
export function historyForPrompt(turns: ChatTurn[]): string {
  const earlier = turns.slice(0, -1).slice(-MAX_HISTORY_TURNS);
  return earlier
    .map((turn) => {
      const text = turn.role === 'assistant' ? htmlToText(turn.content) : turn.content.trim();
      return `${turn.role}: ${text.length > MAX_TURN_CHARS ? `${text.slice(0, MAX_TURN_CHARS)}…` : text}`;
    })
    .join('\n');
}

/** What was already established and verified, in a form the model can rely on and quote from. */
export function findingsForPrompt(state: ConversationState | null): string | null {
  const v = state?.primary ?? state?.last;
  if (!v) return null;
  return JSON.stringify({
    status: v.status,
    confidence: v.confidence,
    summary: v.summary,
    failed_node: v.failed_node,
    root_cause: v.root_cause,
    evidence: v.evidence_chain.filter((e) => e.verified).map((e) => ({ node: e.name, observation: e.observation, quote: e.quote })),
    fix: v.fix,
  });
}
