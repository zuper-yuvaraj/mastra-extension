// The router: which kind of answer a message needs, and for whom. It runs BEFORE any analysis, so a chat
// about a node's data is not forced into a failure report just because the run failed.
//
//   type      explain  what happened / why it failed, in general        (purpose, "While trying to…", references)
//             rca      the root cause, or a deeper look at the failure   (purpose, "While trying to…", RCA, references)
//             chat     anything else: a doubt about a node's data, how something works, small talk
//   audience  business  everyday wording: no node types, expressions, JSON, status codes or ids
//             technical node names, values, HTTP status, expressions
//
// Rules decide the clear cases for free; a small model decides the rest; code guards both (no run to analyse
// means chat; a router that fails or is slow falls back to a safe default).

import { z } from 'zod';
import { isTerminalStatus, type ExecutionContext } from '../lib/zuperExecutionApi';
import { RCA_INTENT_EFFORT, RCA_INTENT_MODEL, RCA_INTENT_TIMEOUT_MS } from './config';
import { htmlToText, type ChatTurn } from './conversation';
import type { InvestigatorAgent } from './investigate';

export const RESPONSE_TYPES = ['explain', 'rca', 'chat'] as const;
export type ResponseType = (typeof RESPONSE_TYPES)[number];
export type Audience = 'business' | 'technical';
export type ExecutionState = 'none' | 'definition' | 'failed' | 'completed' | 'running';

export interface Intent {
  type: ResponseType;
  audience: Audience;
  /** Whether answering needs this workflow's nodes or run data. False for greetings and general help. */
  needsData: boolean;
  /** Who decided: the rules, the model, a safe default, or a code guardrail. */
  via: 'rules' | 'model' | 'fallback' | 'guardrail';
}

const TERMINAL_OK = new Set(['COMPLETED', 'SUCCESS', 'SUCCEEDED']);

export function executionStateOf(ctx: ExecutionContext | null): ExecutionState {
  if (!ctx) return 'none';
  if (ctx.definitionOnly) return 'definition';
  if (ctx.failure) return 'failed';
  const status = ctx.summary.workflow_execution?.status?.trim().toUpperCase();
  if (status && TERMINAL_OK.has(status)) return 'completed';
  return isTerminalStatus(status) ? 'failed' : 'running';
}

const nodeNamesOf = (ctx: ExecutionContext | null): string[] =>
  (ctx?.workflowData?.nodes ?? []).map((n) => String(n.action_name ?? '').trim()).filter(Boolean);

// ---- rules --------------------------------------------------------------------------------------------------

/** Words that ask for the cause itself. */
const RCA_STRONG = /\b(root[\s-]?cause|rca|find (?:out )?(?:the )?(?:reason|cause)|deep[\s-]dive|investigate|dig (?:deeper|in|into))\b/i;
const IN_DETAIL = /\b(?:in[\s-]detail|detailed (?:explanation|analysis|breakdown|rca))\b/i;
/** "why did it fail", "what happened", "what went wrong". */
const EXPLAIN_ASK = /(\bwhy\b.{0,40}\b(?:fail(?:ed|s|ing|ure)?|errored|error|stopped|broke|broken|crash(?:ed)?)\b|\bwhat(?:'s| is| was)? (?:happened|went wrong|wrong|the (?:issue|problem|error))\b|\bwhat happened\b)/i;
const FAILURE_WORD = /\b(fail(?:ed|s|ing|ure)?|error(?:ed|s)?|broke|broken|stopped|crash(?:ed)?)\b/i;
/** The question is about specific data, not about the failure as a whole. */
const DATA_CUE = /\b(return(?:ed|s)?|output|values?|data|fields?|response|result|contain(?:s|ed)?|show me|which|list|how many|empty|missing)\b/i;
const SMALL_TALK = /^\s*(?:hi|hello|hey|thanks|thank you|thx|ok|okay|cool|great|got it|good (?:morning|afternoon|evening)|bye|goodbye)\b[\s!.?]*$/i;
/** Everyday words are the default; these make it technical. */
const TECHNICAL = /(\{\{|\$\.|`|\bexpressions?\b|\bpayloads?\b|\bjson\b|\bapi\b|\bhttp\b|\bendpoints?\b|\b(?:400|401|403|404|405|409|422|429|500|502|503|504)\b|\bstatus code\b|\bvariables?\b|\bjavascript\b|\bcode node\b|\bgetLatestNodeData\b|\bheaders?\b|\b(?:request|response) body\b|\bschema\b|\bnull\b|\bundefined\b|\barray\b|\bobject\b|\bstack trace\b|\bnode_uid\b|\buid\b|\bquery param)/i;

export const CHIP_RCA = 'Find the root cause (RCA)';

/** A greeting or a thank-you: answered with no workflow context at all. */
export const isSmallTalk = (question: string): boolean => SMALL_TALK.test(question);

export function audienceOf(question: string): Audience {
  return TECHNICAL.test(question) ? 'technical' : 'business';
}

const namesANode = (question: string, names: string[]): boolean => {
  const q = question.toLowerCase();
  return names.some((n) => n.length >= 3 && q.includes(n.toLowerCase()));
};

export interface RulesInput {
  question: string;
  executionState: ExecutionState;
  nodeNames: string[];
}

/** The clear cases, decided with no model call. Null when the rules cannot tell. */
export function routeByRules({ question, executionState, nodeNames }: RulesInput): Intent | null {
  const q = question.trim();
  if (!q) return null;
  const audience = audienceOf(q);
  const decided = (type: ResponseType, needsData: boolean, who: Audience = audience): Intent => ({ type, audience: who, needsData, via: 'rules' });

  if (q === CHIP_RCA) return decided('rca', true, 'business');
  if (SMALL_TALK.test(q)) return decided('chat', false, 'business');

  const aboutData = DATA_CUE.test(q) || namesANode(q, nodeNames);
  if (RCA_STRONG.test(q)) return decided('rca', true);
  if (IN_DETAIL.test(q) && FAILURE_WORD.test(q) && !aboutData) return decided('rca', true);
  if (EXPLAIN_ASK.test(q) && !aboutData) return decided('explain', true);
  // A failed run asked only "in detail" (no subject) is a request to look closer at the failure.
  if (executionState === 'failed' && IN_DETAIL.test(q) && !aboutData && q.split(/\s+/).length <= 6) return decided('rca', true);
  return null;
}

// ---- guardrails -----------------------------------------------------------------------------------------------

/** What a router answer may be, given what exists to analyse. */
export function applyGuardrails(intent: Intent, executionState: ExecutionState): Intent {
  if (executionState === 'none' || executionState === 'definition') {
    // No run to analyse: only the workflow itself can be talked about.
    return intent.type === 'chat' && !intent.needsData ? intent : { ...intent, type: 'chat', needsData: false, via: 'guardrail' };
  }
  if (intent.type !== 'chat') return { ...intent, needsData: true };
  return intent;
}

/** The safe default when the model is unavailable or too slow. */
export function fallbackIntent(executionState: ExecutionState, question: string): Intent {
  const audience = audienceOf(question);
  if (executionState === 'failed') return { type: 'explain', audience, needsData: true, via: 'fallback' };
  return { type: 'chat', audience, needsData: executionState === 'completed' || executionState === 'running', via: 'fallback' };
}

// ---- the model --------------------------------------------------------------------------------------------------

export const intentSchema = z.object({
  type: z.enum(RESPONSE_TYPES),
  audience: z.enum(['business', 'technical']),
  needs_data: z.boolean(),
});

export const INTENT_INSTRUCTIONS = `You route one message in a chat about a Zuper workflow and its runs to the kind of answer it needs. Reply with the JSON object only.

type
- explain: the person wants to know what happened or why the workflow or run failed, in general ("why did this fail?", "what went wrong?", "what happened here?"). A short account of what the automation was doing and what failed. Not a deep investigation.
- rca: the person asks for the root cause or a closer look at a failure: "find the root cause", "RCA", "find the reason", "dig deeper", "investigate", "explain the failure in detail", or, right after an explanation, "but why did that happen?".
- chat: everything else. A question about one node, what it returned, a value, a branch, what a node or the workflow does, how the Workflow Builder works, a doubt about data, or small talk.

needs_data
- Always true for explain and rca.
- For chat: true when the answer needs this workflow's real nodes or run data ("what did Get Record return?", "is the customer empty?", "what does Construct do?"). False for greetings, thanks, and general Workflow Builder or Zuper questions ("what is a loop node?", "how do I wait until a date?").

audience
- technical: the person uses technical vocabulary (expression, payload, API, JSON, HTTP, status codes, variables, code), names nodes, fields or values, or asks for specifics of data.
- business: the question is in everyday terms about what happened, why, or what the workflow is for (jobs, customers, appointments, quotes). When unsure, choose business. A follow-up keeps the audience of the conversation unless its wording changes.

Examples
- "Why did this workflow fail?" -> explain, business
- "what happened to my job?" -> explain, business
- "Find the root cause of this failure" -> rca, business
- "Find the RCA for the 404 on update Appointment" -> rca, technical
- "but why did the URL come out without an id?" (after an explanation) -> rca, technical
- "What did Get Record return for custom_fields?" -> chat, technical, needs_data true
- "Was the customer's email filled in?" -> chat, business, needs_data true
- "What does this workflow do for us?" -> chat, business, needs_data true
- "How does a Wait node work?" -> chat, business, needs_data false
- "thanks!" -> chat, business, needs_data false`;

export interface RouteInput {
  question: string;
  /** The whole chat; the last turn is the question. */
  turns: ChatTurn[];
  executionContext: ExecutionContext | null;
  /** The router model (agents/rcaIntentAgent.ts). Without one, the rules and the default decide. */
  classifier?: InvestigatorAgent;
  signal?: AbortSignal;
  timeoutMs?: number;
  onProgress?: (event: { text: string }) => void;
}

const MAX_CONTEXT_TURNS = 4;
const MAX_TURN_CHARS = 300;

function classifierMessage(input: RouteInput, state: ExecutionState, names: string[]): string {
  const recent = input.turns
    .slice(0, -1)
    .slice(-MAX_CONTEXT_TURNS)
    .map((t) => {
      const text = t.role === 'assistant' ? htmlToText(t.content) : t.content.trim();
      return `${t.role}: ${text.length > MAX_TURN_CHARS ? `${text.slice(0, MAX_TURN_CHARS)}…` : text}`;
    });
  return [
    `EXECUTION: ${state === 'none' || state === 'definition' ? 'none (only the workflow definition is open)' : state}`,
    `NODES: ${JSON.stringify(names)}`,
    ...(recent.length > 0 ? ['', 'RECENT CHAT (oldest first):', ...recent] : []),
    '',
    `MESSAGE: ${input.question.trim()}`,
  ].join('\n');
}

/** Decides what a message needs. Never throws except when the request itself was cancelled. */
export async function routeIntent(input: RouteInput): Promise<Intent> {
  const state = executionStateOf(input.executionContext);
  const names = nodeNamesOf(input.executionContext);
  const byRules = routeByRules({ question: input.question, executionState: state, nodeNames: names });
  if (byRules) return applyGuardrails(byRules, state);
  if (!input.classifier) return applyGuardrails(fallbackIntent(state, input.question), state);

  input.onProgress?.({ text: 'Understanding your question' });
  const timeout = AbortSignal.timeout(input.timeoutMs ?? RCA_INTENT_TIMEOUT_MS);
  const signal = input.signal ? AbortSignal.any([input.signal, timeout]) : timeout;
  try {
    const response = await input.classifier.generate([{ role: 'user', content: classifierMessage(input, state, names) }], {
      abortSignal: signal,
      maxSteps: 1,
      providerOptions: { openai: { reasoningEffort: RCA_INTENT_EFFORT } },
      structuredOutput: {
        schema: intentSchema,
        model: RCA_INTENT_MODEL,
        providerOptions: { openai: { reasoningEffort: RCA_INTENT_EFFORT } },
        errorStrategy: 'fallback',
        fallbackValue: null,
      },
    });
    const parsed = intentSchema.safeParse(response.object);
    if (parsed.success) {
      const { type, audience, needs_data } = parsed.data;
      return applyGuardrails({ type, audience, needsData: type === 'chat' ? needs_data : true, via: 'model' }, state);
    }
  } catch (error) {
    if (input.signal?.aborted) throw error; // the client went away; a slow or failed router is not that
  }
  return applyGuardrails(fallbackIntent(state, input.question), state);
}
