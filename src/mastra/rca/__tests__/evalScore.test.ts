import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, scoreRun, summarize, type RunScore } from '../evalScore';
import type { RcaResult } from '../investigate';
import type { RcaVerdict, VerifiedVerdict } from '../verdict';

function result(overrides: Partial<VerifiedVerdict> = {}, steps = 4, tool_calls = 3): RcaResult {
  const verdict: VerifiedVerdict = {
    status: 'failed',
    summary: 's',
    failed_node: null,
    root_cause: { node_uid: 'n1', name: 'Construct', category: 'CODE_ERROR', explanation: 'x' },
    evidence_chain: [
      { node_uid: 'n1', name: 'Construct', observation: 'o', quote: 'q1', verified: true },
      { node_uid: 'n1', name: 'Construct', observation: 'o', quote: 'q2', verified: true },
    ],
    fix: null,
    confidence: 'high',
    knowledge_used: [],
    references: [],
    workflow_purpose: '',
    headline: '',
    issues: [],
    ...overrides,
  };
  return { verdict, html: '', meta: { mode: 'EXECUTION_FAILED', execution_status: 'FAILED', steps, tool_calls, model: 'm' }, evidence: [] };
}

test('a correct answer scores on status, node and category', () => {
  const s = scoreRun({ status: 'failed', root_cause_node: 'construct', category: 'CODE_ERROR' }, result(), 2000);
  assert.deepEqual([s.status_ok, s.node_ok, s.category_ok], [true, true, true]);
  assert.equal(s.confident_wrong, false);
  assert.equal(s.evidence_verified, 2);
  assert.equal(s.clean, true);
});

test('the right node with the wrong category is a category miss only', () => {
  const s = scoreRun(
    { status: 'failed', root_cause_node: 'Construct', category: 'CODE_ERROR' },
    result({ root_cause: { node_uid: 'n1', name: 'Construct', category: 'WRONG_EXPRESSION_PATH', explanation: 'x' } }),
    1,
  );
  assert.deepEqual([s.status_ok, s.node_ok, s.category_ok], [true, true, false]);
  assert.equal(s.confident_wrong, false, 'a category label miss is not a confident wrong answer');
});

test('a wrong node said with high confidence is a confident-wrong answer; with low confidence it is not', () => {
  const wrong = { root_cause: { node_uid: 'n9', name: 'Get Job', category: 'CODE_ERROR' as const, explanation: 'x' } };
  assert.equal(scoreRun({ root_cause_node: 'Construct' }, result(wrong), 1).confident_wrong, true);
  assert.equal(scoreRun({ root_cause_node: 'Construct' }, result({ ...wrong, confidence: 'low' }), 1).confident_wrong, false);
});

test('expecting insufficient_evidence: no root-cause node is compared, and saying so is correct', () => {
  const answer = result({ status: 'insufficient_evidence', root_cause: null, confidence: 'low', evidence_chain: [] });
  const s = scoreRun({ status: 'insufficient_evidence', root_cause_node: 'Ignored' }, answer, 1);
  assert.equal(s.status_ok, true);
  assert.equal(s.node_ok, null, 'no cause is expected, so none is scored');
  assert.equal(scoreRun({ status: 'failed' }, answer, 1).status_ok, false, 'giving up when a cause was expected is a miss');
});

test('several acceptable statuses', () => {
  assert.equal(scoreRun({ status: ['failed', 'insufficient_evidence'] }, result({ status: 'insufficient_evidence' as RcaVerdict['status'] }), 1).status_ok, true);
});

test('unverified quotes lower the quote rate and the clean rate', () => {
  const s = scoreRun(
    { status: 'failed' },
    result({
      evidence_chain: [
        { node_uid: 'n1', name: 'C', observation: 'o', quote: 'a', verified: true },
        { node_uid: 'n1', name: 'C', observation: 'o', quote: 'b', verified: false },
      ],
      issues: ['quote for "C" was not found in any tool result'],
    }),
    1,
  );
  assert.equal(s.evidence_verified, 1);
  assert.equal(s.clean, false);
});

test('summaries are rates over the runs where a check applies', () => {
  const runs: RunScore[] = [
    scoreRun({ status: 'failed', root_cause_node: 'Construct', category: 'CODE_ERROR' }, result(), 1000),
    scoreRun({ status: 'failed', root_cause_node: 'Construct', category: 'CODE_ERROR' }, result({ root_cause: { node_uid: 'n1', name: 'Construct', category: 'OTHER', explanation: 'x' } }), 3000),
    scoreRun({ status: 'failed', root_cause_node: 'Construct', category: 'CODE_ERROR' }, result({ root_cause: { node_uid: 'n2', name: 'Get Job', category: 'OTHER', explanation: 'x' }, confidence: 'low' }), 5000),
  ];
  const sum = summarize(runs);
  assert.equal(sum.runs, 3);
  assert.equal(sum.node_rate, 2 / 3);
  assert.equal(sum.category_rate, 1 / 3);
  assert.equal(sum.status_rate, 1);
  assert.equal(sum.confident_wrong, 0);
  assert.equal(sum.avg_seconds, 3);
  assert.equal(sum.max_seconds, 5);
});

test('a check that never applied is null, not 0', () => {
  const sum = summarize([scoreRun({}, result(), 1)]);
  assert.equal(sum.node_rate, null);
  assert.equal(sum.status_rate, null);
});

test('the pass criteria put trust first: any confident-wrong answer fails the eval', () => {
  const good = summarize([scoreRun({ status: 'failed', root_cause_node: 'Construct' }, result(), 1)]);
  assert.equal(evaluate([{ id: 'good', summary: good }]).pass, true);

  const confidentWrong = summarize([
    scoreRun({ status: 'failed', root_cause_node: 'Construct' }, result({ root_cause: { node_uid: 'n2', name: 'Get Job', category: 'OTHER', explanation: 'x' } }), 1),
  ]);
  const verdict = evaluate([{ id: 'good', summary: good }, { id: 'bad', summary: confidentWrong }]);
  assert.equal(verdict.pass, false);
  assert.match(verdict.failures.join(' '), /confident-but-wrong/);
});

test('low node-match rate and unreal quotes fail the eval', () => {
  const sloppy = summarize([
    scoreRun(
      { status: 'failed', root_cause_node: 'Construct' },
      result({
        confidence: 'low',
        root_cause: { node_uid: 'n2', name: 'Other', category: 'OTHER', explanation: 'x' },
        evidence_chain: [{ node_uid: 'n1', name: 'C', observation: 'o', quote: 'a', verified: false }],
      }),
      1,
    ),
  ]);
  const verdict = evaluate([{ id: 'sloppy', summary: sloppy }]);
  assert.equal(verdict.pass, false);
  assert.match(verdict.failures.join(' '), /root-cause node match/);
  assert.match(verdict.failures.join(' '), /quote verification/);
});

test('an average cannot hide a case that mostly fails: each case has a floor', () => {
  const right = () => scoreRun({ status: 'failed', root_cause_node: 'Construct' }, result(), 1);
  const wrong = () => scoreRun({ status: 'failed', root_cause_node: 'Construct' }, result({ confidence: 'low', root_cause: { node_uid: 'n2', name: 'Other', category: 'OTHER', explanation: 'x' } }), 1);
  const strong = Array.from({ length: 4 }, (_, i) => ({ id: `ok-${i}`, summary: summarize([right(), right(), right()]) }));
  const weak = { id: 'weak-case', summary: summarize([right(), wrong(), wrong()]) };
  // averaged over five cases the node rate is (4 + 1/3) / 5 = 87%, above the 80% bar...
  const average = (strong.reduce((n, e) => n + (e.summary.node_rate ?? 0), 0) + (weak.summary.node_rate ?? 0)) / 5;
  assert.ok(average > 0.8);
  // ...but the weak case on its own is below the floor, so the eval fails and names it.
  const verdict = evaluate([...strong, weak]);
  assert.equal(verdict.pass, false);
  assert.match(verdict.failures.join(' '), /case "weak-case": root-cause node match 33%/);
});

test('the standing data-gap note does not make a run unclean, but a real issue does', () => {
  const gap = scoreRun({ status: 'failed' }, result({ issues: ['Some node data could not be loaded, so parts of this analysis could not be checked against the real data.'] }), 1);
  assert.equal(gap.clean, true);
  const real = scoreRun({ status: 'failed' }, result({ issues: ['quote for "X" was not found in any tool result'] }), 1);
  assert.equal(real.clean, false);
  const hypothesis = scoreRun({ status: 'failed' }, result({ issues: ['Unconfirmed hypothesis (X): data could not be loaded'] }), 1);
  assert.equal(hypothesis.clean, false);
});
