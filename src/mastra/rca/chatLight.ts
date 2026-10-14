// The light chat path: small talk, general Workflow Builder help, and a chat with no run to look at. It needs no
// run data, so it is one quick call: the workflow's summary and definition (when there is no run), documentation
// excerpts, and the conversation. The heavy path (the whole pack) is for questions that need the run.

import { z } from 'zod';
import { buildWorkflowBuilderPrimer } from '../knowledge/workflowBuilder/primer';
import { AUDIENCE_RULES, businessLeaks, leakMessage } from './audience';
import { RCA_CHAT_EFFORT, RCA_CHAT_MODEL } from './config';
import { isSmallTalk, type Intent } from './intent';
import type { InvestigationInput, InvestigatorAgent, RcaResult } from './investigate';
import { kbStep, type KbDoc, type KbStepDeps } from './kbStep';
import { kbNodes } from './pipeline';
import { slimWorkflowForUnderstanding, understandWorkflow, type Understanding } from './understand';
import { INSUFFICIENT_VERDICT, type VerifiedVerdict } from './verdict';
import { renderCrisp } from './views';

export const lightChatSchema = z.object({ reply: z.string().describe('The answer, in short paragraphs, with "- " bullets where a list helps. No ids.') });

const MAX_DOCS = 5;

export const NO_ANSWER = "I couldn't answer that just now. Could you rephrase it, or ask about a specific step of this workflow?";

/** The verified-verdict shape of a chat answer: nothing diagnosed, the reply in `chat_reply`. */
export function chatVerdict(reply: string, intent: Pick<Intent, 'audience'>, extra: Partial<VerifiedVerdict> = {}): VerifiedVerdict {
  return {
    ...INSUFFICIENT_VERDICT,
    status: 'answered',
    summary: '',
    confidence: 'high',
    evidence_chain: [],
    issues: [],
    mode: 'chat',
    audience: intent.audience,
    chat_reply: reply.trim() || NO_ANSWER,
    ...extra,
  };
}

export function buildLightChatInstructions(): string {
  const text = `You are the chat assistant inside Zuper's Workflow Builder. Zuper is a field service management product; a workflow automates manual work. You help people understand THIS workflow and how the Workflow Builder works.

HOW TO ANSWER
- Answer exactly what was asked, the way a helpful assistant would: briefly for a simple question, at more length only when the person asks for it. Plain paragraphs, and "- " bullets where a list helps.
- The message may include WORKFLOW UNDERSTANDING (what the workflow is for and how its steps group), WORKFLOW (its definition) and DOCS (documentation excerpts). Use only those and the orientation below.
- You do NOT have this workflow's run data in this answer. If the person asks what happened in a run, why it failed, or what a step returned, say you can look into that, and suggest they ask directly, for example "Why did this workflow fail?".
- Never invent details about this workflow, Zuper or the Workflow Builder. When you are not sure, say so.
- Stay on this workflow and the Workflow Builder. For anything unrelated, say in one polite sentence that it is outside what you can help with here.
- Small talk: reply briefly and warmly, and offer help in one line.
- Never write a uuid, uid or other identifier.

AUDIENCE (the message names one; with none, use business)
${AUDIENCE_RULES}`;
  try {
    return `${text}\n\n${buildWorkflowBuilderPrimer()}`;
  } catch (error) {
    console.warn('[rca] workflow-builder primer unavailable:', error instanceof Error ? error.message : error);
    return text;
  }
}

export interface LightChatInput extends InvestigationInput {
  /** The model that answers (agents/rcaChatAgent.ts). */
  chat: InvestigatorAgent;
  /** Stage 1: says what the workflow is for (cached per workflow version). */
  understander: InvestigatorAgent;
  intent: Intent;
  deps?: { kb?: KbStepDeps };
}

function lightMessage(input: LightChatInput, understanding: Understanding | null, workflow: unknown, docs: KbDoc[]): string {
  const { question = '', intent, conversation } = input;
  return [
    `QUESTION: ${question.trim()}`,
    `AUDIENCE: ${intent.audience}`,
    ...(conversation?.history ? ['', 'CONVERSATION SO FAR:', conversation.history] : []),
    ...(understanding ? ['', 'WORKFLOW UNDERSTANDING (JSON):', JSON.stringify(understanding)] : []),
    ...(workflow ? ['', 'WORKFLOW (JSON):', JSON.stringify(workflow)] : []),
    ...(docs.length > 0 ? ['', 'DOCS (JSON):', JSON.stringify(docs.map((d) => ({ title: d.title, about: d.forNodes, text: d.text })))] : []),
  ].join('\n');
}

export async function runLightChat(input: LightChatInput): Promise<RcaResult> {
  const { executionContext: ctx, question = '', conversation, onProgress, abortSignal, intent } = input;
  onProgress?.({ text: 'Thinking it through' });

  // A greeting needs nothing. Anything else gets what the workflow is for and the relevant documentation; a chat with
  // no run to look at also gets the workflow's definition, since that is all there is to talk about.
  let understanding: Understanding | null = null;
  let docs: KbDoc[] = [];
  if (ctx && !isSmallTalk(question)) {
    const [understood, kb] = await Promise.all([
      understandWorkflow({ agent: input.understander, executionContext: ctx, signal: abortSignal }),
      kbStep({ nodes: kbNodes(ctx), question }, input.deps?.kb),
    ]);
    understanding = understood.understanding;
    docs = kb.docs.slice(0, MAX_DOCS);
  }
  const workflow = ctx?.definitionOnly ? slimWorkflowForUnderstanding(ctx) : null;

  const ask = async (messages: Array<{ role: 'user' | 'assistant'; content: string }>): Promise<string> => {
    const response = await input.chat.generate(messages, {
      ...(abortSignal ? { abortSignal } : {}),
      maxSteps: 1,
      providerOptions: { openai: { reasoningEffort: RCA_CHAT_EFFORT } },
      structuredOutput: {
        schema: lightChatSchema,
        model: RCA_CHAT_MODEL,
        providerOptions: { openai: { reasoningEffort: RCA_CHAT_EFFORT } },
        errorStrategy: 'fallback',
        fallbackValue: null,
      },
    });
    const parsed = lightChatSchema.safeParse(response.object);
    return parsed.success ? parsed.data.reply.trim() : '';
  };

  const first = { role: 'user' as const, content: lightMessage(input, understanding, workflow, docs) };
  let reply = await ask([first]);
  let calls = 1;

  // A business answer that slipped into technical language goes back once to be said in everyday words.
  const leaks = intent.audience === 'business' && reply ? businessLeaks({ chat_reply: reply }) : [];
  if (leaks.length > 0) {
    if (abortSignal?.aborted) throw abortSignal.reason instanceof Error ? abortSignal.reason : new Error('ABORTED');
    const rewritten = await ask([first, { role: 'assistant', content: JSON.stringify({ reply }) }, { role: 'user', content: leakMessage(leaks) }]);
    calls++;
    if (rewritten) reply = rewritten;
  }

  const verdict = chatVerdict(reply, intent);
  return {
    verdict,
    html: renderCrisp(verdict),
    meta: {
      mode: ctx?.definitionOnly ? 'WORKFLOW_QUESTION' : 'QUESTION',
      execution_status: ctx?.summary.workflow_execution?.status ?? null,
      engine: 'hydrated',
      steps: calls,
      tool_calls: 0,
      model: RCA_CHAT_MODEL,
    },
    // Nothing was read from the run, so what the conversation already established still stands.
    evidence: conversation?.priorEvidence ?? [],
  };
}
