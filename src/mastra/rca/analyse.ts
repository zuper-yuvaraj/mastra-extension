// The one model call of the pipeline: it reads the complete evidence pack and writes the structured
// verdict. No tools, no extra fetching; see analystInstructions.ts for what it is told to do.

import type { Backtrace } from './backtrace';
import type { InvestigatorAgent } from './investigate';
import type { KbDoc } from './kbStep';
import { RCA_REASONING_EFFORT, RCA_STRUCTURING_MODEL } from './config';
import type { Target } from './target';
import type { WorkflowOutline } from './seed';
import { INSUFFICIENT_VERDICT, verdictSchema, type RcaVerdict } from './verdict';

const MAX_PACK_CHARS = 60_000;

/** The trace as JSON for the prompt. Nodes that matter (the failure, anything that produced or fed a bad
 * value, the nearest nodes) keep everything; the rest shrink to status and the inputs that were wrong, then
 * the tail is cut, so a 40-node trace still fits while the evidence that decides the answer is untouched. */
export function compactTrace(trace: Backtrace, maxChars = MAX_PACK_CHARS): Backtrace {
  if (JSON.stringify(trace).length <= maxChars) return trace;

  const shrunk: Backtrace = {
    ...trace,
    nodes: trace.nodes.map((node) => {
      const matters = node.failed || node.output_bad || node.feeds_failed.length > 0 || node.depth <= 1;
      if (matters) return node;
      return {
        ...node,
        config: Object.fromEntries(Object.keys(node.config).map((key) => [key, '(omitted)'])),
        output: undefined,
        inputs: node.inputs.filter((i) => i.status !== 'resolved' && i.status !== 'variable'),
        runtime: node.runtime && !('unavailable' in node.runtime) ? { ...node.runtime, resolved_fields: null } : node.runtime,
      };
    }),
  };
  let nodes = shrunk.nodes;
  while (JSON.stringify({ ...shrunk, nodes }).length > maxChars && nodes.length > 8) nodes = nodes.slice(0, -1);
  return { ...shrunk, nodes, capped: shrunk.capped || nodes.length < trace.nodes.length };
}

export interface AnalysisInput {
  agent: InvestigatorAgent;
  question: string;
  outline: WorkflowOutline;
  /** The execution's own facts: its status and the error it reported (which can name the cause even when no node data could be read). */
  execution?: { uid: string | null; status: string | null; error_message: string | null; error_code: string | null };
  target: Target;
  trace: Backtrace;
  docs: KbDoc[];
  /** Earlier turns, when this is a follow-up. */
  history?: string;
  signal?: AbortSignal;
}

export function buildAnalysisMessage(input: Omit<AnalysisInput, 'agent' | 'signal'>): string {
  return [
    `QUESTION: ${input.question.trim() || 'Why did this execution fail? Find the root cause.'}`,
    ...(input.history ? ['', 'CONVERSATION SO FAR:', input.history] : []),
    '',
    'EXECUTION (JSON):',
    JSON.stringify(input.execution ?? null),
    '',
    'WORKFLOW (JSON):',
    JSON.stringify(input.outline),
    '',
    'TARGET (JSON):',
    JSON.stringify(input.target),
    '',
    'TRACE (JSON, complete):',
    JSON.stringify(compactTrace(input.trace)),
    '',
    'DOCS (JSON):',
    JSON.stringify(input.docs.map((d) => ({ title: d.title, about: d.forNodes, text: d.text }))),
  ].join('\n');
}

export async function analyse(input: AnalysisInput): Promise<{ verdict: RcaVerdict; steps: number }> {
  const response = await input.agent.generate([{ role: 'user', content: buildAnalysisMessage(input) }], {
    ...(input.signal ? { abortSignal: input.signal } : {}),
    maxSteps: 1,
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
  return { verdict: parsed.success ? parsed.data : INSUFFICIENT_VERDICT, steps: response.steps?.length ?? 0 };
}
