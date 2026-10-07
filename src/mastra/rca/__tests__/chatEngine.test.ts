import assert from 'node:assert/strict';
import { test } from 'node:test';
import { converse } from '../chatEngine';
import { ConversationStore, conversationKey, type ChatTurn } from '../conversation';
import { RCA_LEDGER_KEY, type EvidenceLedger } from '../ledger';
import type { InvestigatorAgent } from '../investigate';
import type { RcaVerdict } from '../verdict';
import { CHIP_DETAIL, CHIP_FIX } from '../views';
import { fakeExecution } from './fakeExecution';

const diagnosis: RcaVerdict = {
  status: 'failed',
  summary: 'The email had no recipient because the job has no customer.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
  evidence_chain: [{ node_uid: 'u-mail', name: 'Send Email', observation: 'the execution error', quote: 'recipient is required' }],
  fix: { description: 'Guard against a missing customer', node_uid: 'u-mail', suggested_change: null },
  confidence: 'high',
  knowledge_used: [],
  references: [],
  workflow_purpose: '',
  headline: '',
};

/** Returns each scripted verdict in turn and records the messages it was sent. */
function scripted(...returns: RcaVerdict[]) {
  const sent: string[] = [];
  let ledger: EvidenceLedger | undefined;
  const agent: InvestigatorAgent & { calls: number; sent: string[]; ledger: () => EvidenceLedger | undefined } = {
    calls: 0,
    sent,
    ledger: () => ledger,
    generate: async (messages: any, options: any) => {
      sent.push(messages[0].content);
      ledger = options.requestContext.getRaw(RCA_LEDGER_KEY);
      return { object: returns[Math.min(agent.calls++, returns.length - 1)], steps: [{}] };
    },
  };
  return agent;
}

const user = (content: string): ChatTurn => ({ role: 'user', content });
const bot = (content: string): ChatTurn => ({ role: 'assistant', content });

function setup() {
  return { store: new ConversationStore(), key: conversationKey('tok', 'wf', 'ex'), execution: fakeExecution(true) };
}

const base = (s: ReturnType<typeof setup>, agent: InvestigatorAgent, turns: ChatTurn[]) => ({
  agent,
  store: s.store,
  key: s.key,
  turns,
  executionContext: s.execution,
  token: 'tok',
  apiUrl: 'https://x.zuperpro.com',
});

test('first turn investigates, answers crisply and offers the chips', async () => {
  const s = setup();
  const agent = scripted(diagnosis);
  const r = await converse(base(s, agent, [user('why did it fail?')]));
  assert.equal(agent.calls, 1);
  assert.match(r.reply, /^<p>The email had no recipient because the job has no customer\.<\/p><p><strong>Confidence: High<\/strong>/);
  assert.deepEqual(r.suggestions, [CHIP_DETAIL, CHIP_FIX]);
  assert.equal(r.fromCache, false);
});

test('the chips re-render the stored verdict without calling the model, and drop the chip just used', async () => {
  const s = setup();
  const agent = scripted(diagnosis);
  await converse(base(s, agent, [user('why did it fail?')]));

  const detail = await converse(base(s, agent, [user('why did it fail?'), bot('<p>x</p>'), user(CHIP_DETAIL)]));
  assert.equal(agent.calls, 1, 'no second model call');
  assert.equal(detail.fromCache, true);
  assert.equal(detail.view, 'detail');
  assert.match(detail.reply, /Failed at:/);
  assert.deepEqual(detail.suggestions, [CHIP_FIX]);

  const fix = await converse(base(s, agent, [user('a'), bot('b'), user(CHIP_FIX)]));
  assert.equal(fix.view, 'fix');
  assert.match(fix.reply, /Guard against a missing customer/);
  assert.deepEqual(fix.suggestions, [CHIP_DETAIL]);
});

test('a follow-up goes to the model with the history and the verified findings, and its quotes may use earlier evidence', async () => {
  const s = setup();
  const agent = scripted(diagnosis, {
    ...diagnosis,
    status: 'answered',
    summary: 'The recipient field was empty.',
    root_cause: null,
    fix: null,
    // appears only in the FIRST turn's evidence (the seed), not in anything fetched this turn
    evidence_chain: [{ node_uid: 'u-mail', name: 'Send Email', observation: 'error', quote: 'recipient is required' }],
  });
  await converse(base(s, agent, [user('why did it fail?')]));
  const second = await converse(base(s, agent, [user('why did it fail?'), bot('<p>The email had no recipient.</p>'), user('what was the error exactly?')]));

  assert.equal(agent.calls, 2);
  assert.match(agent.sent[1]!, /CONVERSATION SO FAR:\nuser: why did it fail\?\nassistant: The email had no recipient\./);
  assert.match(agent.sent[1]!, /ALREADY ESTABLISHED/);
  assert.equal(second.verdict.status, 'answered');
  assert.equal(second.verdict.evidence_chain[0]?.verified, true);
  assert.equal(second.reply, '<p>The recipient field was empty.</p>');
});

test('a side question does not change what the chips explain', async () => {
  const s = setup();
  const agent = scripted(diagnosis, { ...diagnosis, status: 'answered', summary: 'Side answer.', root_cause: null, fix: null, evidence_chain: [] });
  await converse(base(s, agent, [user('why did it fail?')]));
  const side = await converse(base(s, agent, [user('a'), bot('b'), user('what is the trigger?')]));
  assert.deepEqual(side.suggestions, [CHIP_DETAIL, CHIP_FIX], 'chips still refer to the diagnosis');

  const detail = await converse(base(s, agent, [user('a'), bot('b'), user(CHIP_DETAIL)]));
  assert.match(detail.reply, /customer is null|Get Job/, 'explains the diagnosis, not the side answer');
});

test('with no stored diagnosis, a chip request is just a question for the model', async () => {
  const s = setup();
  const agent = scripted(diagnosis);
  const r = await converse(base(s, agent, [user(CHIP_FIX)]));
  assert.equal(agent.calls, 1);
  assert.equal(r.fromCache, false);
});

test('answers that need no investigation are not remembered and call no model', async () => {
  const s = setup();
  const agent = scripted(diagnosis);
  const ok = await converse({ ...base(s, agent, [user('did it fail?')]), executionContext: fakeExecution(false) });
  assert.equal(agent.calls, 0);
  assert.equal(ok.verdict.status, 'no_issue');
  assert.equal(s.store.get(s.key), null);
});

test('progress is reported for each tool result during the turn', async () => {
  const s = setup();
  const seen: string[] = [];
  const agent: InvestigatorAgent = {
    generate: async (_m: any, options: any) => {
      (options.requestContext.getRaw(RCA_LEDGER_KEY) as EvidenceLedger).record('get_node_data', JSON.stringify({ node: 'Get Job' }), 'x');
      return { object: diagnosis, steps: [{}] };
    },
  };
  await converse({ ...base(s, agent, [user('why?')]), onProgress: (e) => seen.push(e.text) });
  assert.deepEqual(seen, ['Reading what Get Job returned']);
});
