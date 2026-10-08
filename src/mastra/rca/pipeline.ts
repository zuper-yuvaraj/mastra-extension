// The evidence-complete RCA pipeline. Code gathers everything (documentation for the workflow's modules,
// the full backtrace from the node in question to its origin); the model is called once, to explain it;
// code checks every claim against what was gathered and attaches the documentation links.
//
//   knowledge-base step ─┐
//                        ├─> backtrace (every reference, transitively) ─> analysis (one call) ─> verify
//   locate the target  ──┘
//
// The stages share one `PipelineRun`. `runPipeline` runs them in order; the Mastra workflow
// (workflows/rcaPipelineWorkflow.ts) runs the same stages as steps, so each is visible in traces.
// Anything the pipeline cannot place (no run, no node to start from, a definition-only chat) is handed to
// the tool-using investigator, so no question is left without an answer.

import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { analyse } from './analyse';
import { buildBacktrace, type Backtrace } from './backtrace';
import { RCA_MODEL } from './config';
import { MAX_EVIDENCE_CHARS } from './conversation';
import { answerWithoutAgent, investigate, type InvestigationInput, type InvestigatorAgent, type RcaResult } from './investigate';
import { docsForNodes, kbStep, referenceLinks, type KbDoc, type KbNode, type KbStepDeps, type KbStepResult } from './kbStep';
import { EvidenceLedger } from './ledger';
import { buildWorkflowOutline, triage, type RcaMode } from './seed';
import { locateTarget, type Target, type TargetDeps } from './target';
import { renderVerdictHtml, type RcaVerdict } from './verdict';
import { verifyVerdict } from './verify';

export interface PipelineInput extends InvestigationInput {
  /** The model that explains the evidence pack (no tools). */
  analyst: InvestigatorAgent;
  deps?: { kb?: KbStepDeps; target?: TargetDeps };
}

/** Everything the stages hand to each other. Held in memory only: it contains the customer's run data. */
export interface PipelineRun {
  input: PipelineInput;
  mode?: RcaMode;
  kb?: KbStepResult;
  target?: Target;
  trace?: Backtrace;
  docs?: KbDoc[];
  raw?: RcaVerdict;
  steps?: number;
  /** Set as soon as the answer is known (a direct answer, a fallback, or the final verdict). */
  result?: RcaResult;
}

export const newRun = (input: PipelineInput): PipelineRun => ({ input });

const say = (run: PipelineRun, text: string) => run.input.onProgress?.({ text });

function kbNodes(ctx: ExecutionContext): KbNode[] {
  return (ctx.workflowData?.nodes ?? []).map((n) => ({
    name: n.action_name ?? n.node_uid,
    key: String(n.action_key ?? n.node_name ?? ''),
    formFields: (n.form_fields ?? {}) as Record<string, unknown>,
  }));
}

/** Decides whether the pipeline applies, then runs the documentation step and locates the target. */
export async function stagePrepare(run: PipelineRun): Promise<void> {
  const { executionContext: ctx, question = '' } = run.input;
  if (!ctx) {
    run.result = await investigate(run.input);
    return;
  }
  const mode = triage(ctx, question);
  run.mode = mode;
  const status = ctx.summary.workflow_execution?.status ?? null;

  const direct = answerWithoutAgent({ mode, execution: { status } });
  if (direct) {
    run.result = {
      verdict: direct,
      html: renderVerdictHtml(direct),
      meta: { mode, execution_status: status, engine: 'pipeline', steps: 0, tool_calls: 0, model: null },
      evidence: run.input.conversation?.priorEvidence ?? [],
    };
    return;
  }
  if (mode === 'WORKFLOW_QUESTION') {
    run.result = await investigate(run.input);
    return;
  }

  say(run, 'Reading the workflow and its documentation');
  const [kb, target] = await Promise.all([
    kbStep({ nodes: kbNodes(ctx), question }, run.input.deps?.kb),
    locateTarget(ctx, question, run.input.deps?.target),
  ]);
  run.kb = kb;
  run.target = target;
  if (target.kind === 'none') run.result = await investigate(run.input);
}

/** Walks every reference back from the target, fetching all the node data it needs. */
export async function stageBacktrace(run: PipelineRun): Promise<void> {
  if (run.result || !run.target || run.target.kind === 'none' || !run.input.executionContext) return;
  say(run, 'Tracing the data back through every node it depends on');
  run.trace = await buildBacktrace(run.input.executionContext, { uid: run.target.uid, iteration: run.target.iteration });
  run.docs = docsForNodes(run.kb ?? { docs: [] }, run.trace.nodes.map((n) => n.name));
}

/** The single model call. */
export async function stageAnalyse(run: PipelineRun): Promise<void> {
  const { executionContext: ctx } = run.input;
  if (run.result || !ctx || !run.target || run.target.kind === 'none' || !run.trace) return;
  say(run, 'Analysing');
  const { verdict, steps } = await analyse({
    agent: run.input.analyst,
    question: run.input.question ?? '',
    outline: buildWorkflowOutline(ctx),
    execution: executionFacts(ctx),
    target: run.target,
    trace: run.trace,
    docs: run.docs ?? [],
    history: run.input.conversation?.history,
    signal: run.input.abortSignal,
  });
  run.raw = verdict;
  run.steps = steps;
}

/** Checks every claim against what was gathered and attaches the documentation links. */
function executionFacts(ctx: ExecutionContext) {
  const wf = ctx.summary.workflow_execution;
  return { uid: wf?.execution_uid ?? null, status: wf?.status ?? null, error_message: wf?.error_message ?? null, error_code: wf?.error_code ?? null };
}

export function stageFinish(run: PipelineRun): void {
  const { executionContext: ctx } = run.input;
  if (run.result || !ctx || !run.trace || !run.raw) return;
  const trace = run.trace;

  // What the analysis was shown. A quote must come from the execution data (the trace and workflow),
  // never from documentation, which is recorded separately.
  const ledger = new EvidenceLedger();
  ledger.preload(run.input.conversation?.priorEvidence ?? []);
  ledger.record('seed', 'trace', trace);
  ledger.record('seed', 'workflow', buildWorkflowOutline(ctx));
  ledger.record('seed', 'execution', executionFacts(ctx));
  for (const doc of run.docs ?? []) ledger.recordKnowledge('kb_step', doc.title, doc.text);

  const executionUid = ctx.summary.workflow_execution?.execution_uid;
  const nodeUids = new Set<string>([
    ...(executionUid ? [executionUid] : []),
    ...trace.nodes.map((n) => n.uid),
    ...(ctx.workflowData?.nodes ?? []).map((n) => n.node_uid).filter((uid): uid is string => Boolean(uid)),
  ]);
  const nodeTypes = new Map<string, string>();
  for (const node of ctx.workflowData?.nodes ?? []) if (node.node_uid && node.node_name) nodeTypes.set(node.node_uid, String(node.node_name));

  // The trace labels each node-run "<uid>#<iteration>"; the model sometimes copies that label into node_uid.
  const bareUid = (uid: string): string => uid.replace(/#.*$/, '');
  // An upstream node whose own run data could not be read cannot be CONFIRMED as the cause: what it
  // produced is exactly what is unknown. Keep the idea as a hypothesis (verify turns it into a note).
  const rootUid = run.raw.root_cause ? bareUid(run.raw.root_cause.node_uid) : null;
  const rootNode = rootUid ? trace.nodes.find((n) => n.uid === rootUid) : undefined;
  const unreadableRoot = Boolean(rootNode && rootNode.depth > 0 && rootNode.ran && rootNode.runtime && 'unavailable' in rootNode.runtime);
  const raw = {
    ...run.raw,
    ...(unreadableRoot && (run.raw.status === 'failed' || run.raw.status === 'unexpected_branch') ? { status: 'insufficient_evidence' as const } : {}),
    failed_node: run.raw.failed_node && { ...run.raw.failed_node, uid: run.raw.failed_node.uid && bareUid(run.raw.failed_node.uid) },
    root_cause: run.raw.root_cause && { ...run.raw.root_cause, node_uid: bareUid(run.raw.root_cause.node_uid) },
    fix: run.raw.fix && { ...run.raw.fix, node_uid: run.raw.fix.node_uid && bareUid(run.raw.fix.node_uid) },
    evidence_chain: run.raw.evidence_chain.map((e) => ({ ...e, node_uid: bareUid(e.node_uid) })),
  };
  const verified = verifyVerdict(raw, { nodeUids, ledger, executionUid, dataGaps: trace.data_gaps.length > 0, nodeTypes });
  // The links come from the documentation step, not from the model, so none can be invented.
  const verdict = { ...verified, references: referenceLinks(run.kb ?? { docs: [] }, trace.nodes.slice(0, 4).map((n) => n.name)) };

  run.result = {
    verdict,
    html: renderVerdictHtml(verdict),
    meta: {
      mode: run.mode ?? 'EXECUTION_FAILED',
      execution_status: ctx.summary.workflow_execution?.status ?? null,
      engine: 'pipeline',
      steps: run.steps ?? 0,
      tool_calls: 0,
      model: RCA_MODEL,
      trace_nodes: trace.nodes.length,
      trace_capped: trace.capped,
    },
    evidence: ledger.exportTexts(MAX_EVIDENCE_CHARS),
  };
}

export async function runPipeline(input: PipelineInput): Promise<RcaResult> {
  const run = newRun(input);
  await stagePrepare(run);
  await stageBacktrace(run);
  await stageAnalyse(run);
  stageFinish(run);
  if (!run.result) throw new Error('RCA_PIPELINE_NO_RESULT');
  return run.result;
}
