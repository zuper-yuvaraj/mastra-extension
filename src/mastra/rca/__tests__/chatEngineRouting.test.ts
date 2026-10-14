import assert from 'node:assert/strict';
import { test } from 'node:test';
import { converse } from '../chatEngine';
import { ConversationStore, conversationKey, type ChatTurn } from '../conversation';
import { CHIP_RCA, type Audience, type Intent, type RouteInput } from '../intent';
import type { InvestigationInput, InvestigatorAgent, RcaResult } from '../investigate';
import type { VerifiedVerdict } from '../verdict';
import { CHIP_DETAIL, CHIP_FIX } from '../views';
import { fakeExecution } from './fakeExecution';

const base: VerifiedVerdict = {
  status: 'failed',
  workflow_purpose: 'Makes sure the customer is told when a job is reported.',
  headline: 'While trying to email the customer, the step "Send Email" failed',
  summary: 'The email step had no address to send to, so no email went out.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'The job it loaded has no customer.' },
  evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'The job came back without a customer.', quote: '"customer":null', verified: true }],
  fix: { description: 'Handle a job with no customer', node_uid: 'u-mail', suggested_change: null },
  confidence: 'high',
  knowledge_used: [],
  references: [],
  issues: [],
};
const explain: VerifiedVerdict = { ...base, mode: 'explain', audience: 'business' };
const chat = (reply: string, audience: Audience = 'business'): VerifiedVerdict => ({
  ...base,
  status: 'answered',
  workflow_purpose: '',
  headline: '',
  summary: '',
  failed_node: null,
  root_cause: null,
  fix: null,
  evidence_chain: [],
  mode: 'chat',
  audience,
  chat_reply: reply,
});

const result = (verdict: VerifiedVerdict, evidence: string[] = ['pack']): RcaResult => ({ verdict, html: '', meta: { mode: 'EXECUTION_FAILED', execution_status: null, steps: 1, tool_calls: 0, model: 'm' }, evidence });
const user = (content: string): ChatTurn => ({ role: 'user', content });
const bot = (content: string): ChatTurn => ({ role: 'assistant', content });
const intent = (type: Intent['type'], audience: Audience = 'business', needsData = true): Intent => ({ type, audience, needsData, via: 'model' });

function setup(answers: VerifiedVerdict[], routes: Intent[] = []) {
  const store = new ConversationStore();
  const key = conversationKey('tok', 'wf', 'ex');
  const ran: Array<{ question: string; intent: Intent | undefined; first: boolean }> = [];
  const routed: Array<Pick<RouteInput, 'question' | 'turns'>> = [];
  let a = 0;
  let r = 0;
  const engine = (first: boolean) => async (i: InvestigationInput) => {
    ran.push({ question: i.question ?? '', intent: i.intent, first });
    return result(answers[Math.min(a++, answers.length - 1)]!);
  };
  const inert: InvestigatorAgent = { generate: async () => ({ object: null, steps: [] }) };
  const send = (turns: ChatTurn[], withRouter = true, onProgress?: (e: { text: string }) => void) =>
    converse({
      agent: inert,
      pipeline: engine(true),
      followUp: engine(false),
      ...(withRouter
        ? {
            route: async (input: RouteInput) => {
              routed.push({ question: input.question, turns: input.turns });
              return routes[Math.min(r++, routes.length - 1)]!;
            },
          }
        : {}),
      store,
      key,
      turns,
      executionContext: fakeExecution(true),
      token: 'tok',
      apiUrl: 'https://x.zuperpro.com',
      onProgress,
    });
  return { store, key, ran, routed, send };
}

test('each message is routed first, and the engine is told what it needs; the first question and the follow-ups go to their engines', async () => {
  const s = setup([explain, chat('It returned an empty customer.')], [intent('explain'), intent('chat', 'technical')]);
  const first = await s.send([user('why did it fail?')]);
  assert.deepEqual(s.routed.map((x) => x.question), ['why did it fail?']);
  assert.deepEqual([s.ran[0]!.first, s.ran[0]!.intent?.type, s.ran[0]!.intent?.audience], [true, 'explain', 'business']);
  assert.match(first.reply, /What this workflow does/);
  assert.ok(!first.reply.includes('RCA'));
  assert.deepEqual(first.suggestions, [CHIP_RCA, CHIP_FIX]);

  const second = await s.send([user('why did it fail?'), bot(first.reply), user('what did Get Job return?')]);
  assert.deepEqual([s.ran[1]!.first, s.ran[1]!.intent?.type, s.ran[1]!.intent?.audience], [false, 'chat', 'technical']);
  assert.equal(second.reply, '<p>It returned an empty customer.</p>');
  assert.deepEqual(second.suggestions, [], 'a chat answer offers no chips');
  assert.equal(second.fromCache, false);
});

test('the router is given the whole chat', async () => {
  const s = setup([explain], [intent('explain')]);
  await s.send([user('earlier'), bot('<p>answer</p>'), user('why did it fail?')]);
  assert.equal(s.routed[0]!.turns.length, 3);
});

test('the root-cause chip shows the RCA of the stored explanation instantly: no router, no model', async () => {
  const s = setup([explain], [intent('explain')]);
  const first = await s.send([user('why did it fail?')]);
  const before = { routed: s.routed.length, ran: s.ran.length };
  const rca = await s.send([user('why did it fail?'), bot(first.reply), user(CHIP_RCA)]);
  assert.deepEqual([s.routed.length, s.ran.length], [before.routed, before.ran]);
  assert.equal(rca.fromCache, true);
  assert.equal(rca.view, 'rca');
  assert.equal(rca.verdict.mode, 'rca');
  assert.match(rca.reply, /<strong>RCA<\/strong><\/p><p><strong>Root cause:<\/strong> Get Job \(bad upstream data\) — The job it loaded has no customer\./);
  assert.deepEqual(rca.suggestions, [CHIP_DETAIL, CHIP_FIX]);
});

test('a typed request for the root cause is also answered from the stored one, when it was written for the same audience', async () => {
  const s = setup([explain, { ...base, mode: 'rca', audience: 'technical' }], [intent('explain', 'business'), intent('rca', 'business'), intent('rca', 'technical')]);
  const first = await s.send([user('why did it fail?')]);
  const same = await s.send([user('why did it fail?'), bot(first.reply), user('find the root cause')]);
  assert.equal(same.fromCache, true, 'the same audience: shown from the stored answer');
  assert.equal(s.ran.length, 1);

  const different = await s.send([user('why did it fail?'), bot(first.reply), user('find the RCA of the 404 on update Appointment')]);
  assert.equal(different.fromCache, false, 'a technical RCA cannot be made from a business explanation');
  assert.equal(s.ran.length, 2);
  assert.equal(s.ran[1]!.intent?.audience, 'technical');
});

test('a chat answer never replaces the diagnosis the chips refer to', async () => {
  const s = setup([explain, chat('Just a chat reply.')], [intent('explain'), intent('chat')]);
  const first = await s.send([user('why did it fail?')]);
  await s.send([user('why did it fail?'), bot(first.reply), user('what does Construct do?')]);
  assert.equal(s.store.get(s.key)?.primary?.mode, 'explain', 'the diagnosis is still the stored one');
  assert.equal(s.store.get(s.key)?.last.mode, 'chat');

  const fix = await s.send([user('x'), bot('y'), user('Give me the fix')]);
  assert.equal(fix.fromCache, true);
  assert.match(fix.reply, /Suggested fix/);
  const rca = await s.send([user('x'), bot('y'), user(CHIP_RCA)]);
  assert.equal(rca.verdict.root_cause?.name, 'Get Job');
});

test('the root-cause chip with nothing stored goes through the router and the engine like any request for the RCA', async () => {
  const s = setup([{ ...base, mode: 'rca', audience: 'business' }], [intent('rca')]);
  const out = await s.send([user('x'), bot('y'), user(CHIP_RCA)]);
  assert.equal(out.fromCache, false);
  assert.deepEqual([s.routed.length, s.ran.length, s.ran[0]!.intent?.type], [1, 1, 'rca']);
});

test('a chat that reads no run data keeps the evidence the conversation already had', async () => {
  const s = setup([explain], [intent('explain')]);
  await s.send([user('why did it fail?')]);
  assert.deepEqual(s.store.get(s.key)?.evidence, ['pack']);
});

test('without a router the engine is given no intent, and the layout is the one the older engines produce', async () => {
  const s = setup([base]);
  const out = await s.send([user('why did it fail?')], false);
  assert.equal(s.ran[0]!.intent, undefined);
  assert.match(out.reply, /<strong>RCA<\/strong>/);
  assert.deepEqual(out.suggestions, [CHIP_DETAIL, CHIP_FIX]);
});

test('the evidence and fix chips still re-render with no router and no model', async () => {
  const s = setup([base]);
  await s.send([user('why did it fail?')], false);
  const before = s.ran.length;
  const fix = await s.send([user('why did it fail?'), bot('<p>x</p>'), user('Give me the fix')], false);
  assert.equal(fix.fromCache, true);
  assert.equal(s.ran.length, before);
});
