// One RCA run: build the seed, let the investigator agent work through the tools, then verify its
// verdict against everything it was actually shown. Shared by the workflow step and the offline
// runner (scripts/rca-run.ts), so a captured fixture exercises exactly the code a live request does.

import { RequestContext } from '@mastra/core/request-context';
import { assembleContext } from '../lib/orchestrator';
import type { WorkflowDetail } from '../lib/zuperWorkflowApi';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { ZUPER_CHAT_CONTEXT_KEY } from '../tools/zuperChatTools';
import { RCA_MAX_STEPS, RCA_MODEL, RCA_REASONING_EFFORT, RCA_STRUCTURING_MODEL } from './config';
import { EvidenceLedger, RCA_LEDGER_KEY } from './ledger';
import { buildSeed, type RcaMode, type RcaSeed } from './seed';
import {
  INSUFFICIENT_VERDICT,
  renderVerdictHtml,
  verdictSchema,
  type RcaVerdict,
  type VerifiedVerdict,
} from './verdict';
import { verifyVerdict } from './verify';

const MAX_SEED_CHARS = 14000;

/** The part of an Agent this module uses, so tests can substitute a scripted one. */
export interface InvestigatorAgent {
  generate: (messages: any, options: any) => Promise<{ object?: unknown; text?: string; steps?: unknown[] }>;
}

export interface InvestigationInput {
  agent: InvestigatorAgent;
  executionContext: ExecutionContext | null;
  liveWorkflow?: WorkflowDetail | null;
  question?: string;
  zuperToken: string;
  zuperApiUrl: string;
}

export interface RcaResult {
  verdict: VerifiedVerdict;
  /** HTML generated from the verdict (not model-written). */
  html: string;
  meta: {
    mode: RcaMode;
    execution_status: string | null;
    steps: number;
    tool_calls: number;
    model: string | null;
  };
}

function staticVerdict(status: RcaVerdict['status'], summary: string): VerifiedVerdict {
  return { ...INSUFFICIENT_VERDICT, status, summary, confidence: 'high', evidence_chain: [], issues: [] };
}

/** Modes that need no investigation: answered deterministically, without spending an LLM call. */
function answerWithoutAgent(seed: RcaSeed): VerifiedVerdict | null {
  switch (seed.mode) {
    case 'NO_EXECUTION':
      return { ...staticVerdict('insufficient_evidence', 'No execution was found for this request, so there is nothing to analyse. Open or run an execution and try again.'), confidence: 'low' };
    case 'RUNNING':
      return { ...staticVerdict('insufficient_evidence', `This execution is still running (status ${seed.execution.status ?? 'unknown'}). Analyse it again once it has finished.`), confidence: 'low' };
    case 'NO_FAILURE':
      return staticVerdict(
        'no_issue',
        'This execution completed without errors. If it took a path you did not expect, ask why (for example "why did it go to the else branch?").',
      );
    default:
      return null;
  }
}

/** The seed as JSON for the prompt, trimmed to a bounded size without cutting it mid-structure. */
function seedForPrompt(seed: RcaSeed): string {
  let trimmed: RcaSeed = seed;
  let text = JSON.stringify(trimmed);
  for (const limit of [80, 40, 20]) {
    if (text.length <= MAX_SEED_CHARS) break;
    trimmed = { ...trimmed, executed_nodes: trimmed.executed_nodes.slice(0, limit), upstream_chain: trimmed.upstream_chain.slice(0, limit) };
    text = JSON.stringify(trimmed);
  }
  return text.length <= MAX_SEED_CHARS ? text : `${text.slice(0, MAX_SEED_CHARS)}…(seed truncated)`;
}

export function buildUserMessage(seed: RcaSeed, question?: string): string {
  const ask =
    question?.trim() ||
    (seed.mode === 'EXECUTION_FAILED' ? 'Why did this execution fail? Find the root cause.' : 'Explain what happened in this execution.');
  return [`MODE: ${seed.mode}`, `QUESTION: ${ask}`, '', 'SEED EVIDENCE (JSON):', seedForPrompt(seed)].join('\n');
}

export async function investigate(input: InvestigationInput): Promise<RcaResult> {
  const { agent, executionContext, liveWorkflow, question, zuperToken, zuperApiUrl } = input;

  const chatContext = assembleContext(executionContext, liveWorkflow ?? null);
  const seed = await buildSeed(executionContext, chatContext, question);
  const baseMeta = { mode: seed.mode, execution_status: seed.execution.status };

  const direct = answerWithoutAgent(seed);
  if (direct) {
    return { verdict: direct, html: renderVerdictHtml(direct), meta: { ...baseMeta, steps: 0, tool_calls: 0, model: null } };
  }

  // The ledger holds everything the agent is shown. Quotes in its verdict are checked against it.
  const ledger = new EvidenceLedger();
  ledger.record('seed', 'seed', seed);

  // A fresh request context, not the workflow's: it carries live closures and the bearer token, which
  // must not end up in anything the workflow persists.
  const requestContext = new RequestContext();
  requestContext.setRaw(ZUPER_CHAT_CONTEXT_KEY, { zuperToken, zuperApiUrl, executionContext, liveWorkflow: liveWorkflow ?? null, chatContext });
  requestContext.setRaw(RCA_LEDGER_KEY, ledger);

  const response = await agent.generate([{ role: 'user', content: buildUserMessage(seed, question) }], {
    requestContext,
    maxSteps: RCA_MAX_STEPS,
    providerOptions: { openai: { reasoningEffort: RCA_REASONING_EFFORT } },
    structuredOutput: {
      schema: verdictSchema,
      model: RCA_STRUCTURING_MODEL,
      providerOptions: { openai: { reasoningEffort: RCA_REASONING_EFFORT } },
      errorStrategy: 'fallback',
      fallbackValue: INSUFFICIENT_VERDICT,
    },
  });

  const parsed = verdictSchema.safeParse(response.object);
  const raw: RcaVerdict = parsed.success ? parsed.data : INSUFFICIENT_VERDICT;

  // Valid references: this execution's nodes, and the execution itself (its own error is evidence too).
  const executionUid = executionContext?.summary.workflow_execution?.execution_uid;
  const nodeUids = new Set<string>([
    ...(executionUid ? [executionUid] : []),
    ...(executionContext?.executedNodes.map((n) => n.node_uid) ?? []),
    ...((executionContext?.workflowData?.nodes ?? []).map((n) => n.node_uid).filter((uid): uid is string => Boolean(uid))),
  ]);
  const verdict = verifyVerdict(raw, { nodeUids, ledger });

  return {
    verdict,
    html: renderVerdictHtml(verdict),
    meta: { ...baseMeta, steps: response.steps?.length ?? 0, tool_calls: ledger.toolCalls(), model: RCA_MODEL },
  };
}
