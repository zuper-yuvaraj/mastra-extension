// Scores an RCA result against what a person established for that execution. Deterministic and separate
// from the runner so the scoring itself can be tested. The runner repeats each case because the agent is
// not deterministic: a single pass or fail says little, the rate over several runs says more.

import type { RcaResult } from './investigate';
import type { RcaVerdict } from './verdict';

type Status = RcaVerdict['status'];

export interface Expected {
  /** Acceptable verdict status(es). */
  status?: Status | Status[];
  /** Name of the node where the problem starts (case-insensitive). Only meaningful for a failure verdict. */
  root_cause_node?: string;
  /** Acceptable category(ies). Scored separately: a wrong label with the right node is a smaller miss. */
  category?: string | string[];
}

export interface RunScore {
  status_ok: boolean | null;
  node_ok: boolean | null;
  category_ok: boolean | null;
  evidence_total: number;
  evidence_verified: number;
  /** The verifier found nothing wrong with the verdict. */
  clean: boolean;
  confidence: RcaVerdict['confidence'];
  /** Said "high" and was wrong about the status or the node: the failure that matters most. */
  confident_wrong: boolean;
  steps: number;
  tool_calls: number;
  ms: number;
}

const list = <T>(value: T | T[] | undefined): T[] | null => (value === undefined ? null : Array.isArray(value) ? value : [value]);
const same = (a: string | null | undefined, b: string) => (a ?? '').trim().toLowerCase() === b.trim().toLowerCase();

export function scoreRun(expected: Expected, result: RcaResult, ms: number): RunScore {
  const v = result.verdict;

  const statuses = list(expected.status);
  const statusOk = statuses ? statuses.includes(v.status) : null;

  // A root-cause node is only expected when a cause is expected: for no_issue / insufficient_evidence
  // verdicts there is none to compare.
  const expectsCause = !statuses || statuses.some((s) => s === 'failed' || s === 'unexpected_branch');
  const nodeOk = expected.root_cause_node && expectsCause ? same(v.root_cause?.name, expected.root_cause_node) : null;

  const categories = list(expected.category);
  const categoryOk = categories && expectsCause ? categories.includes(v.root_cause?.category ?? '') : null;

  const verified = v.evidence_chain.filter((e) => e.verified).length;
  return {
    status_ok: statusOk,
    node_ok: nodeOk,
    category_ok: categoryOk,
    evidence_total: v.evidence_chain.length,
    evidence_verified: verified,
    // The standing "some node data could not be loaded" note is expected whenever data is missing; it is
    // not a defect of the answer, so it does not make a run unclean.
    clean: v.issues.every((issue) => /could not be loaded/i.test(issue) && !/hypothesis/i.test(issue)),
    confidence: v.confidence,
    confident_wrong: v.confidence === 'high' && (statusOk === false || nodeOk === false),
    steps: result.meta.steps,
    tool_calls: result.meta.tool_calls,
    ms,
  };
}

export interface CaseSummary {
  runs: number;
  /** Rates over the runs where the check applies; null when it never applied. */
  status_rate: number | null;
  node_rate: number | null;
  category_rate: number | null;
  /** Share of cited quotes that were found in the data (1 = every quote real). */
  quote_rate: number | null;
  clean_rate: number;
  confident_wrong: number;
  avg_tool_calls: number;
  avg_seconds: number;
  max_seconds: number;
}

const rate = (values: Array<boolean | null>): number | null => {
  const applicable = values.filter((v): v is boolean => v !== null);
  return applicable.length === 0 ? null : applicable.filter(Boolean).length / applicable.length;
};
const mean = (xs: number[]) => (xs.length === 0 ? 0 : xs.reduce((a, b) => a + b, 0) / xs.length);

export function summarize(scores: RunScore[]): CaseSummary {
  const total = scores.reduce((n, s) => n + s.evidence_total, 0);
  const verified = scores.reduce((n, s) => n + s.evidence_verified, 0);
  return {
    runs: scores.length,
    status_rate: rate(scores.map((s) => s.status_ok)),
    node_rate: rate(scores.map((s) => s.node_ok)),
    category_rate: rate(scores.map((s) => s.category_ok)),
    quote_rate: total === 0 ? null : verified / total,
    clean_rate: scores.length === 0 ? 0 : scores.filter((s) => s.clean).length / scores.length,
    confident_wrong: scores.filter((s) => s.confident_wrong).length,
    avg_tool_calls: mean(scores.map((s) => s.tool_calls)),
    avg_seconds: mean(scores.map((s) => s.ms / 1000)),
    max_seconds: Math.max(0, ...scores.map((s) => s.ms / 1000)),
  };
}

/** Pass criteria for the whole eval. Deliberately about trustworthiness first: a wrong confident answer is
 * worse than a missed one, and a verdict citing quotes that are not in the data is worse than either. */
export interface Thresholds {
  node_rate: number;
  status_rate: number;
  quote_rate: number;
  max_confident_wrong: number;
  /** No single case may fall below this node/status rate: an average must not hide a case that mostly fails. */
  min_case_rate: number;
}

export const DEFAULT_THRESHOLDS: Thresholds = {
  node_rate: 0.8,
  status_rate: 0.8,
  quote_rate: 0.9,
  max_confident_wrong: 0,
  min_case_rate: 0.67,
};

export function evaluate(
  entries: Array<{ id: string; summary: CaseSummary }>,
  t: Thresholds = DEFAULT_THRESHOLDS,
): { pass: boolean; failures: string[] } {
  const summaries = entries.map((e) => e.summary);
  const failures: string[] = [];
  for (const { id, summary } of entries) {
    for (const [name, value] of [['root-cause node', summary.node_rate], ['status', summary.status_rate]] as const) {
      if (value !== null && value < t.min_case_rate) {
        failures.push(`case "${id}": ${name} match ${(value * 100).toFixed(0)}% is below the per-case floor ${(t.min_case_rate * 100).toFixed(0)}%`);
      }
    }
  }
  const check = (name: string, values: Array<number | null>, min: number) => {
    const applicable = values.filter((v): v is number => v !== null);
    if (applicable.length === 0) return;
    const avg = mean(applicable);
    if (avg < min) failures.push(`${name} ${(avg * 100).toFixed(0)}% is below ${(min * 100).toFixed(0)}%`);
  };
  check('root-cause node match', summaries.map((s) => s.node_rate), t.node_rate);
  check('status match', summaries.map((s) => s.status_rate), t.status_rate);
  check('quote verification', summaries.map((s) => s.quote_rate), t.quote_rate);
  const wrong = summaries.reduce((n, s) => n + s.confident_wrong, 0);
  if (wrong > t.max_confident_wrong) failures.push(`${wrong} confident-but-wrong answer(s) (allowed: ${t.max_confident_wrong})`);
  return { pass: failures.length === 0, failures };
}
