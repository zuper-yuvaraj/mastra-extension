import assert from 'node:assert/strict';
import { test } from 'node:test';
import { EvidenceLedger } from '../ledger';
import { renderVerdictHtml, type RcaVerdict } from '../verdict';
import { verifyVerdict } from '../verify';

const nodeUids = new Set(['n1', 'n2']);

function verdict(overrides: Partial<RcaVerdict> = {}): RcaVerdict {
  return {
    status: 'failed',
    summary: 'The job lookup returned no customer.',
    failed_node: { uid: 'n2', name: 'Send Email', error: 'recipient is required' },
    root_cause: { node_uid: 'n1', name: 'Get Job', category: 'MISSING_DATA', explanation: 'customer is null' },
    evidence_chain: [{ node_uid: 'n1', name: 'Get Job', observation: 'customer is null', quote: '"customer":null' }],
    fix: { description: 'Guard for a missing customer', node_uid: 'n2', suggested_change: null },
    confidence: 'high',
    knowledge_used: [],
    ...overrides,
  };
}

function ledgerWith(text: string): EvidenceLedger {
  const ledger = new EvidenceLedger();
  ledger.record('inspect_node', 'Get Job', text);
  return ledger;
}

test('a clean, evidenced verdict keeps its confidence', () => {
  const v = verifyVerdict(verdict(), { nodeUids, ledger: ledgerWith('{"data":{"customer":null}}') });
  assert.equal(v.issues.length, 0);
  assert.equal(v.confidence, 'high');
  assert.equal(v.evidence_chain[0]?.verified, true);
});

test('an invented quote is flagged and confidence drops to low', () => {
  const v = verifyVerdict(verdict(), { nodeUids, ledger: ledgerWith('{"data":{"customer":{"id":1}}}') });
  assert.equal(v.evidence_chain[0]?.verified, false);
  assert.equal(v.confidence, 'low');
  assert.match(v.issues.join(' '), /not found in any tool result/);
});

test('quote matching ignores whitespace and re-indentation', () => {
  const v = verifyVerdict(verdict(), { nodeUids, ledger: ledgerWith('{\n  "customer" :  null\n}') });
  // the quote has no spaces; the data has — whitespace is normalized, but characters must still match
  assert.equal(v.evidence_chain[0]?.verified, false);
  const spaced = verifyVerdict(
    verdict({ evidence_chain: [{ node_uid: 'n1', name: 'Get Job', observation: 'x', quote: '"customer" : null' }] }),
    { nodeUids, ledger: ledgerWith('{\n  "customer"   :\n  null }') },
  );
  assert.equal(spaced.evidence_chain[0]?.verified, true);
});

test('unknown node uids are flagged', () => {
  const v = verifyVerdict(
    verdict({ root_cause: { node_uid: 'ghost', name: 'Ghost', category: 'OTHER', explanation: 'x' } }),
    { nodeUids, ledger: ledgerWith('"customer":null') },
  );
  assert.match(v.issues.join(' '), /ghost/);
  assert.notEqual(v.confidence, 'high');
});

test('claiming a failure with no root cause becomes insufficient_evidence', () => {
  const v = verifyVerdict(verdict({ root_cause: null }), { nodeUids, ledger: ledgerWith('"customer":null') });
  assert.equal(v.status, 'insufficient_evidence');
  assert.equal(v.confidence, 'low');
});

test('no cited evidence caps confidence at low', () => {
  const v = verifyVerdict(verdict({ evidence_chain: [] }), { nodeUids, ledger: ledgerWith('x') });
  assert.equal(v.confidence, 'low');
});

test('no_issue verdicts are not penalised for having no evidence', () => {
  const v = verifyVerdict(
    verdict({ status: 'no_issue', root_cause: null, evidence_chain: [], failed_node: null, fix: null }),
    { nodeUids, ledger: new EvidenceLedger() },
  );
  assert.equal(v.status, 'no_issue');
  assert.equal(v.confidence, 'high');
});

test('rendered HTML escapes model text', () => {
  const v = verifyVerdict(verdict({ summary: '<script>alert(1)</script>' }), { nodeUids, ledger: ledgerWith('"customer":null') });
  const html = renderVerdictHtml(v);
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
});

test('a value shown JSON-escaped inside a tool result can be quoted as the plain value', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', { selected: [{ selector: 'data.body.job_uid', value: '"job-1"' }] });
  assert.equal(ledger.contains('"job-1"'), true, 'plain quote of the value');
  assert.equal(ledger.contains('"job-2"'), false, 'a different value is still rejected');
  assert.equal(ledger.contains('"job-1" and "customer":null'), false, 'joining pieces is still rejected');
});
