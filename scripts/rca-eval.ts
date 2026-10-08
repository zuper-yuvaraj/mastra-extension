// Usage: npm run rca:eval -- [--runs 3] [--case <id substring>] [--json out.json] [--no-fail]
//
// Runs the real investigator (real model, needs OPENAI_API_KEY) over the labelled cases in
// fixtures/rca/eval-cases.json, several times each because the agent varies, and reports how often it
// found the right root-cause node, status and category, whether its quotes were real, and whether it was
// ever confidently wrong. Offline: no Zuper token or network. Exits non-zero when the trust thresholds
// in rca/evalScore.ts are not met (unless --no-fail).
//
// A case is { id, fixture | summary, question?, expected, note }. `fixture` is a name under fixtures/rca/
// (or "synthetic"); `summary` is a raw execution-summary file (no node data). Cases whose files are
// missing are skipped, with a message.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { rcaInvestigatorAgent } from '../src/mastra/agents/rcaInvestigatorAgent';
import { projectPath } from '../src/mastra/knowledge/paths';
import { createExecutionContext, type ExecutionContext, type ExecutionSummaryResponse } from '../src/mastra/lib/zuperExecutionApi';
import { RCA_MAX_STEPS, RCA_MODEL, RCA_REASONING_EFFORT } from '../src/mastra/rca/config';
import { DEFAULT_THRESHOLDS, evaluate, scoreRun, summarize, type Expected, type RunScore } from '../src/mastra/rca/evalScore';
import { FIXTURE_DIR, executionContextFromFixture, loadFixture } from '../src/mastra/rca/fixture';
import { investigate } from '../src/mastra/rca/investigate';
import { rcaAnalystAgent } from '../src/mastra/agents/rcaAnalystAgent';
import { runPipeline } from '../src/mastra/rca/pipeline';
import { fakeExecution } from '../src/mastra/rca/__tests__/fakeExecution';

interface EvalCase {
  id: string;
  fixture?: string;
  summary?: string;
  question?: string;
  note?: string;
  expected: Expected;
}

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const runs = Number(arg('runs') ?? 3);
// --engine pipeline evaluates the evidence-complete pipeline; the default is the tool-using agent.
const usePipeline = arg('engine') === 'pipeline';
const only = arg('case');
const cases = (JSON.parse(readFileSync(path.join(FIXTURE_DIR, 'eval-cases.json'), 'utf8')) as EvalCase[]).filter(
  (c) => !only || c.id.includes(only),
);

function load(c: EvalCase): ExecutionContext | string {
  if (c.fixture === 'synthetic') return fakeExecution(true);
  if (c.fixture) {
    const file = path.join(FIXTURE_DIR, `${c.fixture}.json`);
    return existsSync(file) ? executionContextFromFixture(loadFixture(file)) : `fixture ${c.fixture} not found`;
  }
  if (c.summary) {
    const file = projectPath(c.summary);
    if (!existsSync(file)) return `${c.summary} not found`;
    const summary = JSON.parse(readFileSync(file, 'utf8')) as ExecutionSummaryResponse;
    return createExecutionContext(summary, async () => {
      throw new Error('FETCH_FAILED');
    });
  }
  return 'case has neither fixture nor summary';
}

const pct = (v: number | null) => (v === null ? '  - ' : `${String(Math.round(v * 100)).padStart(3)}%`);
const out: Array<{ id: string; scores: RunScore[]; answers: string[] }> = [];

console.log(`engine ${usePipeline ? 'pipeline' : 'agent'}, model ${RCA_MODEL}, reasoning effort ${RCA_REASONING_EFFORT}, max steps ${RCA_MAX_STEPS}, ${runs} run(s) per case\n`);

for (const c of cases) {
  const execution = load(c);
  if (typeof execution === 'string') {
    console.log(`SKIP ${c.id}: ${execution}`);
    continue;
  }
  const scores: RunScore[] = [];
  const answers: string[] = [];
  for (let i = 0; i < runs; i++) {
    const started = Date.now();
    const input = {
      agent: rcaInvestigatorAgent,
      executionContext: execution,
      question: c.question,
      zuperToken: 'offline',
      zuperApiUrl: 'https://offline.invalid',
    };
    const result = usePipeline ? await runPipeline({ ...input, analyst: rcaAnalystAgent }) : await investigate(input);
    scores.push(scoreRun(c.expected, result, Date.now() - started));
    const v = result.verdict;
    answers.push(`${v.status}/${v.confidence} cause=${v.root_cause ? `${v.root_cause.name} [${v.root_cause.category}]` : '-'} unverified=${v.evidence_chain.filter((e) => !e.verified).length}`);
  }
  out.push({ id: c.id, scores, answers });
  const s = summarize(scores);
  console.log(
    `${c.id.padEnd(30)} status ${pct(s.status_rate)}  node ${pct(s.node_rate)}  category ${pct(s.category_rate)}  quotes ${pct(s.quote_rate)}  clean ${pct(s.clean_rate)}  ` +
      `confident-wrong ${s.confident_wrong}  ${s.avg_tool_calls.toFixed(1)} tools  ${s.avg_seconds.toFixed(0)}s avg (max ${s.max_seconds.toFixed(0)}s)`,
  );
}

const entries = out.map((o) => ({ id: o.id, summary: summarize(o.scores) }));
const verdict = evaluate(entries, DEFAULT_THRESHOLDS);

console.log('\n--- what each run actually said ---');
for (const o of out) {
  console.log(o.id);
  o.answers.forEach((a, i) => console.log(`   run ${i + 1}: ${a}`));
}

const all = out.flatMap((o) => o.scores);
console.log(`\n${out.length} case(s), ${all.length} run(s), ${(all.reduce((n, s) => n + s.ms, 0) / 60000).toFixed(1)} min`);
console.log(verdict.pass ? 'EVAL PASSED' : `EVAL FAILED: ${verdict.failures.join('; ')}`);

const jsonOut = arg('json');
if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify({ engine: usePipeline ? 'pipeline' : 'agent', model: RCA_MODEL, reasoning_effort: RCA_REASONING_EFFORT, runs, cases: out.map((o) => ({ id: o.id, summary: summarize(o.scores), scores: o.scores, answers: o.answers })), verdict }, null, 2));
  console.log(`wrote ${jsonOut}`);
}
process.exit(verdict.pass || process.argv.includes('--no-fail') ? 0 : 1);
