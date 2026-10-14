// One chat turn: the conversational front of the RCA investigator.
//
// The extension sends the conversation so far; this decides what the newest message needs. A request for
// more of an answer already given ("Explain in detail", "Give me the fix") is re-rendered from the stored,
// verified verdict with no model call. Anything else goes to the investigator with the earlier turns and
// the findings already established, so a follow-up builds on checked facts instead of starting over.

import type { WorkflowDetail } from '../lib/zuperWorkflowApi';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { ConversationStore, findingsForPrompt, historyForPrompt, type ChatTurn, type ConversationState } from './conversation';
import type { Audience, Intent, RouteInput } from './intent';
import { investigate, type InvestigationInput, type InvestigatorAgent, type RcaResult } from './investigate';
import type { ProgressEvent } from './progress';
import type { VerifiedVerdict } from './verdict';
import { CHIP_DETAIL, CHIP_FIX, chipsFor, classifyChipRequest, renderCrisp, renderView, withoutIds, type ChatView } from './views';

export interface ConverseInput {
  agent: InvestigatorAgent;
  /** When set, the FIRST question of a conversation (no assistant reply yet) runs the evidence-complete
   * pipeline through this function. Follow-ups use `agent` with the evidence already gathered, and never
   * repeat the full analysis, even if the server lost its stored state. */
  pipeline?: (input: InvestigationInput) => Promise<RcaResult>;
  /** When set, follow-up questions run through this instead of `agent` (the hydrated engine answers them from
   * the same cached pack, so a follow-up is as well grounded as the first answer). */
  followUp?: (input: InvestigationInput) => Promise<RcaResult>;
  /** The router (rca/intent.ts). When set, every message is classified first (what kind of answer, for whom) and
   * the result goes to the engine as `intent`; the older engines are given none and answer as they always did. */
  route?: (input: RouteInput) => Promise<Intent>;
  store: ConversationStore;
  /** See conversationKey: account + workflow + execution. */
  key: string;
  /** The whole chat; the last turn is the user's new message. */
  turns: ChatTurn[];
  /** The run being discussed, or a definition-only context when there is none. */
  executionContext: ExecutionContext | null;
  liveWorkflow?: WorkflowDetail | null;
  token: string;
  apiUrl: string;
  onProgress?: (event: ProgressEvent) => void;
  signal?: AbortSignal;
}

export interface ConverseResult {
  /** HTML for the extension's sanitizer. */
  reply: string;
  suggestions: string[];
  verdict: VerifiedVerdict;
  view: ChatView;
  /** True when the reply was re-rendered from the stored verdict and no model was called. */
  fromCache: boolean;
}

function lastUserMessage(turns: ChatTurn[]): string {
  for (let i = turns.length - 1; i >= 0; i--) if (turns[i]!.role === 'user') return turns[i]!.content.trim();
  return '';
}

/** The stored diagnosis, when it can answer a request for the root cause as it stands: it found one, and it was
 * written for the same audience (a business explanation cannot stand in for a technical RCA). */
function reusableRca(state: ConversationState | null, audience?: Audience): VerifiedVerdict | null {
  const primary = state?.primary;
  if (!primary?.root_cause) return null;
  if (audience && primary.audience && primary.audience !== audience) return null;
  return primary;
}

/** The RCA of a stored diagnosis, shown with no model call. */
function showRca(primary: VerifiedVerdict, question: string): ConverseResult {
  const verdict: VerifiedVerdict = { ...primary, mode: 'rca' };
  return { reply: withoutIds(renderView(verdict, 'rca'), question), suggestions: chipsFor(verdict), verdict, view: 'rca', fromCache: true };
}

export async function converse(input: ConverseInput): Promise<ConverseResult> {
  const { store, key, turns } = input;
  const question = lastUserMessage(turns);
  const state = store.get(key);

  const chip = classifyChipRequest(question);
  if (chip === 'rca') {
    const primary = reusableRca(state);
    if (primary) return showRca(primary, question);
    // Nothing stored to show (it expired, or the server restarted): the router treats the chip text as a request for the RCA.
  } else if (chip && state) {
    const verdict = state.primary ?? state.last;
    const used = chip === 'detail' ? CHIP_DETAIL : CHIP_FIX;
    return {
      reply: withoutIds(renderView(verdict, chip), question),
      suggestions: chipsFor(verdict).filter((c) => c !== used),
      verdict,
      view: chip,
      fromCache: true,
    };
  }

  // What this message needs, and for whom (hydrated engine only). A typed request for the root cause is answered
  // from the stored diagnosis too, when it found one for the same audience.
  const intent = input.route
    ? await input.route({ question, turns, executionContext: input.executionContext, signal: input.signal, onProgress: input.onProgress })
    : undefined;
  if (intent?.type === 'rca') {
    const primary = reusableRca(state, intent.audience);
    if (primary) return showRca(primary, question);
  }

  const firstQuestion = !turns.some((t) => t.role === 'assistant');
  const run = (firstQuestion ? input.pipeline : input.followUp) ?? investigate;
  const result = await run({
    agent: input.agent,
    executionContext: input.executionContext,
    liveWorkflow: input.liveWorkflow,
    question,
    zuperToken: input.token,
    zuperApiUrl: input.apiUrl,
    conversation: { history: historyForPrompt(turns), findings: findingsForPrompt(state), priorEvidence: state?.evidence ?? [] },
    onProgress: input.onProgress,
    abortSignal: input.signal,
    intent,
  });

  // Answers that needed no investigation ("nothing to analyse", "still running") say nothing about the
  // run worth remembering, and must not displace a real diagnosis the chips refer to. (A chat answer is stored
  // as the latest answer, but only a diagnosis becomes the one the chips refer to: see ConversationStore.)
  const investigated = result.meta.model !== null;
  const next = investigated ? store.record(key, result.verdict, result.evidence) : state;
  const chipTarget = next ? (next.primary ?? next.last) : result.verdict;

  return {
    reply: withoutIds(renderCrisp(result.verdict), question),
    // An answer from the hydrated engine offers what its own layout leaves to ask for (a chat answer offers none);
    // the older engines offer chips for the stored diagnosis.
    suggestions: result.verdict.mode ? chipsFor(result.verdict) : chipsFor(chipTarget),
    verdict: result.verdict,
    view: 'crisp',
    fromCache: false,
  };
}
