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
    references: [],
    workflow_purpose: '',
    headline: '',
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

test('evidence that only says data could not be loaded does not support a cause', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', { node: 'Construct', fetch_failed: 'FETCH_FAILED', message: 'The node ran but its data could not be loaded.' });
  const gapOnly = verdict({
    evidence_chain: [
      { node_uid: 'n1', name: 'Get Job', observation: 'its data could not be loaded', quote: '"fetch_failed":"FETCH_FAILED"' },
      { node_uid: 'n2', name: 'Send Email', observation: 'same', quote: 'The node ran but its data could not be loaded.' },
    ],
  });
  const v = verifyVerdict(gapOnly, { nodeUids, ledger, dataGaps: true });
  assert.equal(v.status, 'insufficient_evidence', 'a failure verdict resting on "could not load" is downgraded');
  assert.equal(v.root_cause, null, 'the unconfirmed cause is not presented as a finding');
  assert.equal(v.confidence, 'low');
  assert.match(v.issues.join(' '), /Unconfirmed hypothesis \(Get Job/);
});

test('a real quote at the failed node keeps the verdict even when other data was unavailable', () => {
  const ledger = new EvidenceLedger();
  ledger.record('seed', 'seed', { execution: { error_message: 'recipient is required' }, note: 'other node data fetch_failed' });
  const v = verifyVerdict(verdict({ evidence_chain: [{ node_uid: 'n2', name: 'Send Email', observation: 'the error', quote: 'recipient is required' }] }), {
    nodeUids,
    ledger,
    dataGaps: true,
  });
  assert.equal(v.status, 'failed');
  assert.notEqual(v.root_cause, null);
  assert.equal(v.confidence, 'medium', 'capped: some node data could not be checked');
  assert.match(v.issues.join(' '), /could not be loaded/);
});

test("the execution's own uid counts as a place evidence may come from", () => {
  const ledger = new EvidenceLedger();
  ledger.record('seed', 'seed', { error_message: 'Cannot clear schedule for a job with multiple Appointments.' });
  const v = verifyVerdict(
    verdict({
      failed_node: { uid: 'n2', name: 'clear schedule', error: 'x' },
      root_cause: { node_uid: 'n2', name: 'clear schedule', category: 'CONFIGURATION', explanation: 'x' },
      evidence_chain: [{ node_uid: 'exec-1', name: 'Execution', observation: 'error', quote: 'Cannot clear schedule for a job with multiple Appointments.' }],
    }),
    { nodeUids: new Set(['n1', 'n2', 'exec-1']), ledger, executionUid: 'exec-1' },
  );
  assert.equal(v.status, 'failed');
  assert.equal(v.confidence, 'high');
});

test('no data gaps and clean evidence stays high', () => {
  const ledger = new EvidenceLedger();
  ledger.record('seed', 'seed', 'recipient is required');
  const v = verifyVerdict(verdict({ evidence_chain: [{ node_uid: 'n2', name: 'Send Email', observation: 'e', quote: 'recipient is required' }] }), { nodeUids, ledger });
  assert.equal(v.confidence, 'high');
  assert.equal(v.issues.length, 0);
});

test('one unverified quote does not sink an answer that is supported at the root-cause node', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', { value: '{"url":"https://x/api/appointments"}', note: 'recipient is required' });
  const mixed = verdict({
    failed_node: { uid: 'n2', name: 'Send Email', error: 'x' },
    root_cause: { node_uid: 'n1', name: 'Get Job', category: 'CODE_ERROR', explanation: 'x' },
    evidence_chain: [
      { node_uid: 'n2', name: 'Send Email', observation: 'a', quote: 'recipient is required' },
      { node_uid: 'n1', name: 'Get Job', observation: 'b', quote: '{"url":"https://x/api/appointments"}' },
      { node_uid: 'n1', name: 'Get Job', observation: 'c', quote: '"payload_url":{"url":"https://x/api/appointments"}' }, // key prepended: not verbatim
      { node_uid: 'n2', name: 'Send Email', observation: 'd', quote: '{"url":"https://x/api/appointments"}' },
    ],
  });
  const v = verifyVerdict(mixed, { nodeUids, ledger });
  assert.equal(v.evidence_chain.filter((e) => !e.verified).length, 1);
  assert.equal(v.confidence, 'medium');
});

test('mostly unverified evidence, or none at the root-cause node, is still low', () => {
  const ledger = new EvidenceLedger();
  ledger.record('seed', 'seed', 'recipient is required');
  const unsupportedRoot = verifyVerdict(
    verdict({
      evidence_chain: [
        { node_uid: 'n2', name: 'Send Email', observation: 'a', quote: 'recipient is required' },
        { node_uid: 'n1', name: 'Get Job', observation: 'b', quote: 'made up' },
      ],
    }),
    { nodeUids, ledger },
  );
  assert.equal(unsupportedRoot.confidence, 'low', 'nothing verified at the root-cause node');

  const mostlyWrong = verifyVerdict(
    verdict({
      evidence_chain: [
        { node_uid: 'n1', name: 'Get Job', observation: 'a', quote: 'recipient is required' },
        { node_uid: 'n1', name: 'Get Job', observation: 'b', quote: 'made up 1' },
        { node_uid: 'n1', name: 'Get Job', observation: 'c', quote: 'made up 2' },
      ],
    }),
    { nodeUids, ledger },
  );
  assert.equal(mostlyWrong.confidence, 'low', 'more than a third unverified');
});

test('a cause in a Code node is always CODE_ERROR, and the change is recorded', () => {
  const ledger = ledgerWith('{"data":{"customer":null}}');
  const nodeTypes = new Map([['n1', 'code']]);
  const v = verifyVerdict(verdict(), { nodeUids, ledger, nodeTypes });
  assert.equal(v.root_cause?.category, 'CODE_ERROR');
  assert.match(v.adjustments?.[0] ?? '', /MISSING_DATA to CODE_ERROR/);

  const api = verifyVerdict(
    verdict({ root_cause: { node_uid: 'n1', name: 'Get Job', category: 'EXTERNAL_API_ERROR', explanation: 'x' } }),
    { nodeUids, ledger, nodeTypes },
  );
  assert.equal(api.root_cause?.category, 'EXTERNAL_API_ERROR', 'an outside cause is left as the model said');

  const http = verifyVerdict(verdict(), { nodeUids, ledger, nodeTypes: new Map([['n1', 'http_request']]) });
  assert.equal(http.root_cause?.category, 'MISSING_DATA');
  assert.equal(http.adjustments, undefined);
});
