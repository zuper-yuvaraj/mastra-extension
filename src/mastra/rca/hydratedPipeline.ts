// The hydrated RCA engine, end to end. Code builds everything the model needs (stages 1 to 4); the model is
// called once to read it (stage 5); code checks every claim against what the model was shown, and when a
// quote is not a verbatim excerpt, or a business answer slips into technical language, the model is shown what
// is wrong and asked to correct it (bounded).
//
//   understand the workflow ─┐
//   hydrate every reference  ├─> pack ─> analysis (bounded get_node_data loop) ─> verify ─┐
//   documentation lookup    ─┘                                  ▲                          │ bad quotes, technical
//                                                                └──── repair (bounded) ◄───┘ words for a business reader
//
// What kind of answer is wanted (rca/intent.ts) decides the path:
//   explain / rca     the analysis above; rendered with or without the RCA (rca/views.ts)
//   chat + run data   the same pack, answered as a chat reply (a doubt about a node's data, how something works)
//   chat, no run data the light path (rca/chatLight.ts): small talk, general Workflow Builder help
// With no intent (the older callers) it answers as rca, as before. Anything it cannot place (no execution, a pack
// that cannot be built) goes to the tool-using investigator.

import { RequestContext } from '@mastra/core/request-context';
import { assembleContext } from '../lib/orchestrator';
import { ZUPER_CHAT_CONTEXT_KEY } from '../tools/zuperChatTools';
import { businessLeaks, leakMessage, type Leak } from './audience';
import { NO_ANSWER, runLightChat } from './chatLight';
import { RCA_ANALYSIS_EFFORT, RCA_ANALYSIS_MODEL, RCA_EVIDENCE_MAX_STEPS, RCA_QUOTE_REPAIRS, RCA_STRUCTURING_EFFORT } from './config';
import { MAX_EVIDENCE_CHARS } from './conversation';
import { hydrateExecution, type HydratedExecution } from './hydrate';
import { buildPack } from './hydratedPack';
import { answerWithoutAgent, investigate, type InvestigationInput, type InvestigatorAgent, type RcaResult } from './investigate';
import { docsForNodes, kbStep, referenceLinks, type KbStepDeps, type KbStepResult } from './kbStep';
import { EvidenceLedger, RCA_LEDGER_KEY } from './ledger';
import { kbNodes } from './pipeline';
import { progressText } from './progress';
import { triage } from './seed';
import { understandWorkflow } from './understand';
import { HYDRATED_INSUFFICIENT, hydratedVerdictSchema, renderVerdictHtml, verdictSchema, type HydratedVerdict, type VerifiedVerdict } from './verdict';
import { verifyVerdict } from './verify';
import { renderCrisp } from './views';

export interface HydratedPipelineInput extends InvestigationInput {
  /** The model that reads the pack; its one tool is get_node_data (agents/rcaEvidenceAgent.ts). */
  analyst: InvestigatorAgent;
  /** Stage 1: says what the workflow is for (agents/rcaUnderstandAgent.ts). */
  understander: InvestigatorAgent;
  /** The light chat path (agents/rcaChatAgent.ts). Without it, a chat that needs no run data goes to the investigator. */
  chat?: InvestigatorAgent;
  /** Where to go when the pack cannot be built (hydration failed unexpectedly). Default: the investigator. */
  fallback?: (input: InvestigationInput) => Promise<RcaResult>;
  deps?: { kb?: KbStepDeps };
}

/** What the model is told when its answer failed a check: which quotes, and what a quote has to be; and, for a
 * business reader, which parts used technical language. */
export function repairMessage(failed: Array<{ name: string; quote: string; why: 'quote' | 'node' }>, leaks: Leak[] = []): string {
  const parts: string[] = [];
  if (failed.length > 0) {
    const lines = failed.map((f, i) =>
      f.why === 'node'
        ? `${i + 1}. ${f.name}: its node_uid is not a node of this workflow. Copy the \`node_uid\` field of that node from the pack exactly.`
        : `${i + 1}. ${f.name}: ${JSON.stringify(f.quote)} is not a verbatim excerpt of the pack or of a tool result.`,
    );
    parts.push(
      'Your answer cannot be accepted as it stands. These items failed the check against the data you were shown:',
      ...lines,
      '',
      'A quote must be ONE contiguous piece copied character for character: a single `"key":value` pair, or a single line of Code exactly as written in the source. Do not add or remove quotes, spaces or fields, do not join two places, and do not abbreviate with "...". If two things matter, give two quotes. If you cannot find an exact excerpt that supports a claim, drop the claim.',
    );
  }
  if (leaks.length > 0) parts.push(...(parts.length > 0 ? [''] : []), leakMessage(leaks));
  parts.push('Answer again with the complete answer, changing only what these items require.');
  return parts.join('\n');
}

/** The technical language in the parts of a business answer the reader can be shown. */
function leaksOf(v: VerifiedVerdict, type: string): Leak[] {
  if (type === 'chat') return businessLeaks({ chat_reply: v.chat_reply });
  // Every view of an explanation or an RCA is rendered from this one answer, so all of it must read in plain words.
  return businessLeaks({
    workflow_purpose: v.workflow_purpose,
    headline: v.headline,
    summary: v.summary,
    'root cause': v.root_cause?.explanation,
    evidence: v.evidence_chain.map((e) => e.observation).join(' '),
    fix: v.fix?.description,
  });
}

export async function runHydrated(input: HydratedPipelineInput): Promise<RcaResult> {
  const { executionContext: ctx, question = '', conversation, onProgress, abortSignal, intent } = input;
  const say = (text: string) => onProgress?.({ text });
  const fallback = input.fallback ?? investigate;

  if (!ctx) return investigate(input);

  // A chat that needs no run data (small talk, general help, or no run to look at) is one quick call.
  if (intent?.type === 'chat' && (!intent.needsData || ctx.definitionOnly)) {
    return input.chat ? runLightChat({ ...input, chat: input.chat, intent }) : investigate(input);
  }

  // A chat about the run's data is answered as a chat: it is never forced into a failure report, and the
  // "completed without errors" and "still running" replies are for questions about whether it failed.
  const chatWithData = intent?.type === 'chat';
  const mode = chatWithData ? 'QUESTION' : triage(ctx, question);
  const status = ctx.summary.workflow_execution?.status ?? null;

  if (!chatWithData) {
    const direct = answerWithoutAgent({ mode, execution: { status } });
    if (direct) {
      return {
        verdict: direct,
        html: renderVerdictHtml(direct),
        meta: { mode, execution_status: status, engine: 'hydrated', steps: 0, tool_calls: 0, model: null },
        evidence: conversation?.priorEvidence ?? [],
      };
    }
    if (mode === 'WORKFLOW_QUESTION') return investigate(input);
  }

  // Stages 1 to 3 are independent of each other, so they run together.
  say('Reading the workflow and resolving every node it depends on');
  let gathered;
  try {
    gathered = await Promise.all([
      understandWorkflow({ agent: input.understander, executionContext: ctx, signal: abortSignal }),
      hydrateExecution(ctx, { signal: abortSignal }),
      kbStep({ nodes: kbNodes(ctx), question }, input.deps?.kb),
    ]);
  } catch (error) {
    if (abortSignal?.aborted) throw error;
    console.warn('[rca] the hydrated pack could not be built, using the fallback:', error instanceof Error ? error.message : error);
    return fallback(input);
  }
  const [{ understanding }, hydrated, kb] = gathered as [Awaited<ReturnType<typeof understandWorkflow>>, HydratedExecution, KbStepResult];

  const ranNames = hydrated.execution_flow.map((entry) => entry.name);
  const docs = docsForNodes(kb, ranNames);
  const pack = buildPack({ hydrated, understanding, question, history: conversation?.history, docs, intent: intent && { type: intent.type, audience: intent.audience } });
  const findings = conversation?.findings ? `\n\nALREADY ESTABLISHED (verified earlier in this conversation, JSON):\n${conversation.findings}` : '';

  // The ledger holds what the model is shown as EVIDENCE (the pack, and every tool result); documentation is
  // recorded apart, so a quote copied from it can never verify.
  const ledger = new EvidenceLedger();
  ledger.preload(conversation?.priorEvidence ?? []);
  ledger.record('seed', 'pack', pack.evidence);
  for (const doc of docs) ledger.recordKnowledge('kb_step', doc.title, doc.text);
  if (onProgress) ledger.onToolResult((entry) => onProgress({ text: progressText(entry.tool, entry.label) }));

  // A fresh request context, not the caller's: it carries live closures, which must not end up in anything
  // that gets persisted. get_node_data reads the execution from here.
  const requestContext = new RequestContext();
  requestContext.setRaw(ZUPER_CHAT_CONTEXT_KEY, {
    zuperToken: input.zuperToken,
    zuperApiUrl: input.zuperApiUrl,
    executionContext: ctx,
    liveWorkflow: input.liveWorkflow ?? null,
    chatContext: assembleContext(ctx, input.liveWorkflow ?? null),
  });
  requestContext.setRaw(RCA_LEDGER_KEY, ledger);

  const maxSteps = RCA_EVIDENCE_MAX_STEPS;
  const analyse = (messages: Array<{ role: 'user' | 'assistant'; content: string }>) =>
    input.analyst.generate(messages, {
      requestContext,
      ...(abortSignal ? { abortSignal } : {}),
      maxSteps,
      // The last step may not call a tool, so the model always ends with an answer, never with a request.
      prepareStep: ({ stepNumber }: { stepNumber: number }) => (stepNumber >= maxSteps - 1 ? { toolChoice: 'none' } : undefined),
      providerOptions: { openai: { reasoningEffort: RCA_ANALYSIS_EFFORT } },
      structuredOutput: {
        schema: hydratedVerdictSchema,
        model: RCA_ANALYSIS_MODEL,
        providerOptions: { openai: { reasoningEffort: RCA_STRUCTURING_EFFORT } },
        errorStrategy: 'fallback',
        fallbackValue: HYDRATED_INSUFFICIENT,
      },
    });
  // The model is asked for the whole schema; an answer that is complete except for the chat reply (which only a
  // chat answer needs) is still a good answer, not a lost one.
  const read = (response: { object?: unknown }): HydratedVerdict => {
    const parsed = hydratedVerdictSchema.safeParse(response.object);
    if (parsed.success) return parsed.data;
    const base = verdictSchema.safeParse(response.object);
    return base.success ? { ...base.data, chat_reply: '' } : HYDRATED_INSUFFICIENT;
  };

  const nodes = hydrated.workflow.nodes;
  const failedUid = hydrated.execution.failed_node_uid;
  const nodeUids = new Set([...(hydrated.execution.uid ? [hydrated.execution.uid] : []), ...nodes.map((n) => n.node_uid)]);
  const nodeTypes = new Map<string, string>();
  for (const node of nodes) if (node.node_uid && node.node_name) nodeTypes.set(node.node_uid, String(node.node_name));
  // An upstream node whose own run data could not be read cannot be CONFIRMED as the cause: what it produced is
  // exactly what is unknown. The idea stays as a hypothesis (the verifier turns it into a note). The exceptions
  // are the failed node, and a node with a recorded branch decision: which output an If/Else took comes from the
  // execution summary, not from the node's data, so "it evaluated FALSE and the flow ended" is known.
  const decided = new Set(hydrated.branch_decisions.map((decision) => decision.node_uid));

  const check = (raw: HydratedVerdict): VerifiedVerdict => {
    const rootNode = raw.root_cause ? nodes.find((n) => n.node_uid === raw.root_cause!.node_uid) : undefined;
    const unreadableRoot = Boolean(rootNode && rootNode.node_uid !== failedUid && !decided.has(rootNode.node_uid) && rootNode.execution.executed && rootNode.execution.unavailable);
    const claimed: HydratedVerdict = unreadableRoot && (raw.status === 'failed' || raw.status === 'unexpected_branch') ? { ...raw, status: 'insufficient_evidence' } : raw;
    return verifyVerdict(claimed, {
      nodeUids,
      ledger,
      executionUid: hydrated.execution.uid ?? undefined,
      dataGaps: hydrated.data_gaps.length > 0 || ledger.contains('fetch_failed'),
      nodeTypes,
    });
  };
  const answerType = intent?.type ?? 'rca';
  const leaks = (v: VerifiedVerdict): Leak[] => (intent?.audience === 'business' ? leaksOf(v, answerType) : []);

  say('Analysing');
  const first = { role: 'user' as const, content: `${pack.message}${findings}` };
  let response = await analyse([first]);
  let steps = response.steps?.length ?? 0;
  let raw = read(response);
  let verified = check(raw);

  // The model proposes, code checks. An answer that failed a check gets the model one bounded chance to put it
  // right, instead of being counted against a correct answer: a quote that is not a verbatim excerpt, and, for a
  // business reader, technical language.
  for (let round = 0; round < RCA_QUOTE_REPAIRS; round++) {
    const failed = verified.evidence_chain.filter((e) => !e.verified);
    const leaked = leaks(verified);
    if (failed.length === 0 && leaked.length === 0) break;
    if (abortSignal?.aborted) throw abortSignal.reason instanceof Error ? abortSignal.reason : new Error('ABORTED');
    say(leaked.length > 0 && failed.length === 0 ? 'Putting it in plainer words' : 'Checking the evidence');
    const why = failed.map((e) => ({ name: e.name, quote: e.quote, why: nodeUids.has(e.node_uid) ? ('quote' as const) : ('node' as const) }));
    response = await analyse([first, { role: 'assistant', content: JSON.stringify(raw) }, { role: 'user', content: repairMessage(why, leaked) }]);
    steps += response.steps?.length ?? 0;
    const repaired = read(response);
    if (repaired === HYDRATED_INSUFFICIENT) break; // an unusable second answer must not replace a usable first one
    raw = repaired;
    verified = check(raw);
  }

  // The links come from the documentation step, not from the model, so none can be invented. A chat reply shows none.
  const focus = [raw.failed_node?.name, raw.root_cause?.name].filter((name): name is string => Boolean(name));
  let verdict: VerifiedVerdict = { ...verified, references: answerType === 'chat' ? [] : referenceLinks(kb, focus.length > 0 ? focus : ranNames.slice(0, 4)) };
  if (intent) {
    // The mode and the audience are the router's, never the model's. A chat answer diagnoses nothing, so it can
    // never replace the diagnosis that the chips and the follow-ups refer to.
    verdict = { ...verdict, mode: intent.type, audience: intent.audience };
    if (intent.type === 'chat') {
      verdict = { ...verdict, status: 'answered', failed_node: null, root_cause: null, fix: null, workflow_purpose: '', headline: '', chat_reply: (verdict.chat_reply ?? '').trim() || NO_ANSWER };
    }
  }
  console.log(
    `[rca] hydrated engine answered (${answerType}${intent ? `/${intent.audience}` : ''}): status=${verdict.status} confidence=${verdict.confidence} model=${RCA_ANALYSIS_MODEL} steps=${steps} tool_calls=${ledger.toolCalls() - docs.length} pack=${pack.report.chars} chars (${pack.report.trim.trimmed.length} cut, ${pack.report.repeats} repeat)`,
  );

  return {
    verdict,
    html: intent ? renderCrisp(verdict) : renderVerdictHtml(verdict),
    meta: {
      mode,
      execution_status: status,
      engine: 'hydrated',
      steps,
      // The documentation lookups were made by code before the model ran, so they are not its tool calls.
      tool_calls: ledger.toolCalls() - docs.length,
      model: RCA_ANALYSIS_MODEL,
      trace_nodes: hydrated.execution_flow.length,
      trace_capped: pack.report.trim.over_budget,
    },
    evidence: ledger.exportTexts(MAX_EVIDENCE_CHARS),
  };
}
