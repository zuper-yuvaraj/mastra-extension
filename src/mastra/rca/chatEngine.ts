// One chat turn: the conversational front of the RCA investigator.
//
// The extension sends the conversation so far; this decides what the newest message needs. A request for
// more of an answer already given ("Explain in detail", "Give me the fix") is re-rendered from the stored,
// verified verdict with no model call. Anything else goes to the investigator with the earlier turns and
// the findings already established, so a follow-up builds on checked facts instead of starting over.

import type { WorkflowDetail } from '../lib/zuperWorkflowApi';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { ConversationStore, findingsForPrompt, historyForPrompt, type ChatTurn } from './conversation';
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

export async function converse(input: ConverseInput): Promise<ConverseResult> {
  const { store, key, turns } = input;
  const question = lastUserMessage(turns);
  const state = store.get(key);

  const chip = classifyChipRequest(question);
  if (chip && state) {
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

  const firstQuestion = !turns.some((t) => t.role === 'assistant');
  const run = input.pipeline && firstQuestion ? input.pipeline : investigate;
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
  });

  // Answers that needed no investigation ("nothing to analyse", "still running") say nothing about the
  // run worth remembering, and must not displace a real diagnosis the chips refer to.
  const investigated = result.meta.model !== null;
  const next = investigated ? store.record(key, result.verdict, result.evidence) : state;
  const chipTarget = next ? (next.primary ?? next.last) : result.verdict;

  return {
    reply: withoutIds(renderCrisp(result.verdict), question),
    suggestions: chipsFor(chipTarget),
    verdict: result.verdict,
    view: 'crisp',
    fromCache: false,
  };
}
