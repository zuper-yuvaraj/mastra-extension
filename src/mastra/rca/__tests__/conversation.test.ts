import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ConversationStore, conversationKey, findingsForPrompt, historyForPrompt, htmlToText } from '../conversation';
import { EvidenceLedger } from '../ledger';
import type { VerifiedVerdict } from '../verdict';

function verdict(status: VerifiedVerdict['status'], summary = 's'): VerifiedVerdict {
  return {
    status,
    summary,
    failed_node: null,
    root_cause: status === 'failed' ? { node_uid: 'n1', name: 'Construct', category: 'CODE_ERROR', explanation: 'x' } : null,
    evidence_chain: [
      { node_uid: 'n1', name: 'Construct', observation: 'ok', quote: 'real quote', verified: true },
      { node_uid: 'n1', name: 'Construct', observation: 'bad', quote: 'made up', verified: false },
    ],
    fix: null,
    confidence: 'high',
    knowledge_used: [],
    references: [],
    workflow_purpose: '',
    headline: '',
    issues: [],
  };
}

test('the key separates accounts, workflows and executions, and never contains the token', () => {
  const a = conversationKey('token-A', 'wf1', 'ex1');
  assert.notEqual(a, conversationKey('token-B', 'wf1', 'ex1'));
  assert.notEqual(a, conversationKey('token-A', 'wf1', 'ex2'));
  assert.notEqual(a, conversationKey('token-A', 'wf1', null));
  assert.ok(!a.includes('token-A'));
});

test('a side question does not displace the diagnosis the chips refer to', () => {
  const store = new ConversationStore();
  store.record('k', verdict('failed', 'the diagnosis'), ['e1']);
  const after = store.record('k', verdict('answered', 'the url was X'), ['e1', 'e2']);
  assert.equal(after.primary?.summary, 'the diagnosis');
  assert.equal(after.last.summary, 'the url was X');
  assert.deepEqual(after.evidence, ['e1', 'e2']);

  const next = store.record('k', verdict('unexpected_branch', 'a new diagnosis'), []);
  assert.equal(next.primary?.summary, 'a new diagnosis', 'a new diagnosis replaces it');
});

test('state expires, and the oldest conversation is dropped first', () => {
  const realNow = Date.now;
  let now = 1_000;
  Date.now = () => now;
  try {
    const store = new ConversationStore(1000, 2);
    store.record('a', verdict('failed'), []);
    now = 1_500;
    assert.ok(store.get('a'));
    now = 3_000;
    assert.equal(store.get('a'), null, 'expired');

    store.record('x', verdict('failed'), []);
    store.record('y', verdict('failed'), []);
    store.record('z', verdict('failed'), []);
    assert.equal(store.get('x'), null, 'oldest dropped over the limit');
    assert.ok(store.get('z'));
  } finally {
    Date.now = realNow;
  }
});

test('evidence carried from an earlier turn still verifies a later quote', () => {
  const first = new EvidenceLedger();
  first.record('seed', 'seed', 'the failing url is https://x/api/appointments');
  first.record('get_node_data', '{}', { note: 'status 404' });

  const second = new EvidenceLedger();
  second.preload(first.exportTexts(10_000));
  assert.equal(second.contains('https://x/api/appointments'), true);
  assert.equal(second.contains('status 404'), true);
  assert.equal(second.contains('something never shown'), false);
  assert.equal(second.toolCalls(), 0, 'carried-over evidence is not counted as work done this turn');
});

test('the evidence budget keeps the NEWEST results', () => {
  const ledger = new EvidenceLedger();
  ledger.record('a', '', 'x'.repeat(60));
  ledger.record('b', '', 'y'.repeat(60));
  ledger.record('c', '', 'z'.repeat(60));
  const kept = ledger.exportTexts(130);
  assert.equal(kept.length, 2);
  assert.ok(kept[0]!.startsWith('y') && kept[1]!.startsWith('z'));
});

test('assistant replies are turned from HTML into words for the model, user text is left alone', () => {
  assert.equal(htmlToText('<p>Create <strong>Job</strong> failed &amp; stopped.</p><ul><li>a &lt; b</li></ul>'), 'Create Job failed & stopped.\na < b');
  const history = historyForPrompt([
    { role: 'user', content: 'why did it fail?' },
    { role: 'assistant', content: '<p>Because <em>customer</em> was null.</p>' },
    { role: 'user', content: 'and the fix?' },
  ]);
  assert.equal(history, 'user: why did it fail?\nassistant: Because customer was null.');
});

test('history is capped in length and number of turns', () => {
  const turns = Array.from({ length: 20 }, (_, i) => ({ role: (i % 2 ? 'assistant' : 'user') as 'user' | 'assistant', content: `t${i} ${'x'.repeat(2000)}` }));
  const lines = historyForPrompt(turns).split('\n');
  assert.equal(lines.length, 6);
  assert.ok(lines.every((l) => l.length < 700));
});

test('findings only include evidence that was verified', () => {
  const store = new ConversationStore();
  const state = store.record('k', verdict('failed'), []);
  const findings = JSON.parse(findingsForPrompt(state)!);
  assert.deepEqual(findings.evidence.map((e: { quote: string }) => e.quote), ['real quote']);
  assert.equal(findings.root_cause.name, 'Construct');
  assert.equal(findingsForPrompt(null), null);
});
