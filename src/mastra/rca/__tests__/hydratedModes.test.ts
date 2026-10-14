import assert from 'node:assert/strict';
import { beforeEach, test } from 'node:test';
import { NO_ANSWER } from '../chatLight';
import { RCA_QUOTE_REPAIRS } from '../config';
import { resetHydrationCache } from '../hydrate';
import { repairMessage, runHydrated } from '../hydratedPipeline';
import type { Intent } from '../intent';
import type { InvestigatorAgent } from '../investigate';
import { resetUnderstandingCache, type Understanding } from '../understand';
import type { RcaVerdict } from '../verdict';
import { fakeExecution } from './fakeExecution';

beforeEach(() => {
  resetHydrationCache();
  resetUnderstandingCache();
});

const understanding: Understanding = {
  purpose: 'Emails the customer when a webhook reports a job.',
  trigger: 'A webhook call arrives.',
  groups: [{ name: 'Notify', goal: 'Email the customer.', node_names: ['On Webhook', 'Get Job', 'Send Email'] }],
};

const intent = (type: Intent['type'], audience: Intent['audience'] = 'business', needsData = true): Intent => ({ type, audience, needsData, via: 'model' });

const analysis: RcaVerdict & { chat_reply: string } = {
  status: 'failed',
  workflow_purpose: 'Makes sure the customer is told when a job is reported.',
  headline: 'While trying to email the customer, the step "Send Email" failed',
  summary: 'The automation was emailing the customer. The email step had no address to send to, so no email went out.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'The job it loaded has no customer, so there was no email address to use.' },
  evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'The job came back without a customer.', quote: '"customer":null' }],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [],
  chat_reply: '',
};

interface Call {
  content: string;
  all: any[];
}
function sequence(...returns: unknown[]) {
  const calls: Call[] = [];
  const agent: InvestigatorAgent & { calls: Call[] } = {
    calls,
    generate: async (messages: any) => {
      calls.push({ content: messages[0].content, all: messages });
      return { object: returns[Math.min(calls.length - 1, returns.length - 1)], steps: [{}] };
    },
  };
  return agent;
}
const kbDeps = {
  search: async (query: string) => [{ id: query, score: 0.8, kind: 'business', topic: 'doc', title: `Doc ${query}`, text: 'how it works', source_url: `https://docs.test/${encodeURIComponent(query)}` }],
  records: () => [],
};

function setup(overrides: Record<string, unknown> = {}) {
  const analyst = sequence(analysis);
  const chat = sequence({ reply: 'Light reply.' });
  const legacy = sequence(analysis);
  const input = { agent: legacy, analyst, chat, understander: sequence(understanding), executionContext: fakeExecution(true), question: 'why did it fail?', zuperToken: 't', zuperApiUrl: 'https://x.zuperpro.com', deps: { kb: kbDeps }, ...overrides };
  return { analyst, chat, legacy, input: input as Parameters<typeof runHydrated>[0] };
}

// ---- explain and rca ------------------------------------------------------------------------------------------

test('explain: the pack says so, and the answer is the explanation layout with no RCA', async () => {
  const { analyst, input } = setup({ intent: intent('explain') });
  const result = await runHydrated(input);
  assert.match(analyst.calls[0]!.content, /^QUESTION: why did it fail\?\nRESPONSE MODE: explain\nAUDIENCE: business\n/);
  assert.equal(result.verdict.mode, 'explain');
  assert.equal(result.verdict.audience, 'business');
  assert.match(result.html, /What this workflow does/);
  assert.match(result.html, /While trying to email the customer/);
  assert.ok(!result.html.includes('RCA') && !result.html.includes('Root cause'), 'the cause waits for the RCA chip');
  assert.equal(result.verdict.root_cause?.name, 'Get Job', 'but it is found and stored');
});

test('rca: the answer is the RCA layout, with the root cause', async () => {
  const { input } = setup({ intent: intent('rca', 'technical') });
  const result = await runHydrated(input);
  assert.equal(result.verdict.mode, 'rca');
  assert.match(result.html, /<strong>RCA<\/strong>/);
  assert.match(result.html, /Root cause:<\/strong> Get Job/);
});

test('with no router the answer is what it always was: no mode, the older HTML', async () => {
  const { analyst, input } = setup();
  const result = await runHydrated(input);
  assert.doesNotMatch(analyst.calls[0]!.content, /RESPONSE MODE|AUDIENCE:/);
  assert.equal(result.verdict.mode, undefined);
  assert.match(result.html, /Failed at:/);
});

test('"did it fail?" on a run that did not is still answered without a model call, for explain and rca', async () => {
  for (const type of ['explain', 'rca'] as const) {
    const { analyst, chat, input } = setup({ executionContext: fakeExecution(false), question: 'did it fail?', intent: intent(type) });
    const result = await runHydrated(input);
    assert.equal(result.verdict.status, 'no_issue');
    assert.equal(analyst.calls.length + chat.calls.length, 0);
  }
});

// ---- chat -----------------------------------------------------------------------------------------------------

test('a chat about the run is answered as a chat, never forced into a failure report', async () => {
  const reply = { ...analysis, status: 'failed', headline: 'should not show', workflow_purpose: 'nor this', chat_reply: 'The job came back with no customer, so there was nobody to email.\n\n- customer: empty' };
  const analyst = sequence(reply);
  const { input } = setup({ analyst, question: 'what did Get Job return?', intent: intent('chat') });
  const result = await runHydrated(input);
  assert.match(analyst.calls[0]!.content, /RESPONSE MODE: chat/);
  assert.equal(result.verdict.mode, 'chat');
  assert.equal(result.verdict.status, 'answered', 'it can never replace the stored diagnosis');
  assert.deepEqual([result.verdict.root_cause, result.verdict.fix, result.verdict.failed_node, result.verdict.workflow_purpose, result.verdict.headline], [null, null, null, '', '']);
  assert.deepEqual(result.verdict.references, [], 'a chat reply shows no documentation links');
  assert.equal(result.html, '<p>The job came back with no customer, so there was nobody to email.</p><ul><li>customer: empty</li></ul>');
  assert.equal(result.meta.mode, 'QUESTION');
});

test('a chat about a run that did not fail is not answered with "completed without errors"', async () => {
  // (a run that did not fail has no failed node, so the job's whole output is not in the pack: cite nothing here)
  const analyst = sequence({ ...analysis, evidence_chain: [], chat_reply: 'It returned the job.' });
  const { input } = setup({ analyst, executionContext: fakeExecution(false), question: 'what did Get Job return?', intent: intent('chat') });
  const result = await runHydrated(input);
  assert.equal(analyst.calls.length, 1);
  assert.equal(result.verdict.chat_reply, 'It returned the job.');
});

test('a chat answer with no reply says so plainly', async () => {
  const { input } = setup({ analyst: sequence({ ...analysis, chat_reply: '   ' }), intent: intent('chat') });
  assert.equal((await runHydrated(input)).verdict.chat_reply, NO_ANSWER);
});

test('a chat that needs no run data takes the light path; the heavy analysis is not run', async () => {
  const { analyst, chat, input } = setup({ question: 'how does a wait node work?', intent: intent('chat', 'business', false) });
  const result = await runHydrated(input);
  assert.equal(chat.calls.length, 1);
  assert.equal(analyst.calls.length, 0);
  assert.equal(result.verdict.chat_reply, 'Light reply.');
});

test('a chat with no run to look at takes the light path, even if it asked for data', async () => {
  const definition = fakeExecution(false);
  definition.definitionOnly = true;
  const { analyst, chat, input } = setup({ executionContext: definition, intent: intent('chat', 'business', true) });
  await runHydrated(input);
  assert.equal(chat.calls.length, 1);
  assert.equal(analyst.calls.length, 0);
});

test('without a light chat agent, a chat that needs no data goes to the investigator as before', async () => {
  const { legacy, input } = setup({ chat: undefined, intent: intent('chat', 'business', false), executionContext: null });
  await runHydrated(input);
  assert.ok(legacy.calls.length <= 1);
});

// ---- the audience ---------------------------------------------------------------------------------------------

const technicalSummary = { ...analysis, summary: 'The HTTP node got a 404 from the API.' };

test('a business answer that used technical words is sent back once, with what to change', async () => {
  const analyst = sequence(technicalSummary, analysis);
  const progress: string[] = [];
  const { input } = setup({ analyst, intent: intent('explain'), onProgress: (e: { text: string }) => progress.push(e.text) });
  const result = await runHydrated(input);
  assert.equal(analyst.calls.length, 2);
  const message = analyst.calls[1]!.all[2].content as string;
  assert.match(message, /for a non-technical reader/);
  assert.match(message, /- summary: .*HTTP/);
  assert.match(message, /Answer again with the complete answer/);
  assert.equal(result.verdict.summary, analysis.summary);
  assert.equal(result.meta.steps, 2);
  assert.ok(progress.includes('Putting it in plainer words'));
});

test('a technical audience is never sent back for technical words', async () => {
  const analyst = sequence(technicalSummary);
  await runHydrated(setup({ analyst, intent: intent('explain', 'technical') }).input);
  assert.equal(analyst.calls.length, 1);
});

test('the parts a later chip will show are checked too, even if this answer does not show them', async () => {
  const leakyCause = { ...analysis, root_cause: { ...analysis.root_cause!, explanation: 'The expression {{$.getLatestNodeData("Get Job")}} gave a null payload.' } };
  const analyst = sequence(leakyCause, analysis);
  await runHydrated(setup({ analyst, intent: intent('explain') }).input);
  assert.equal(analyst.calls.length, 2);
  assert.match(analyst.calls[1]!.all[2].content, /- root cause: /);
});

test('for a chat only the reply is checked', async () => {
  const quiet = sequence({ ...analysis, summary: 'The HTTP node got a 404.', chat_reply: 'It returned an empty customer.' });
  await runHydrated(setup({ analyst: quiet, intent: intent('chat') }).input);
  assert.equal(quiet.calls.length, 1, 'the summary is not shown in a chat');

  const leaky = sequence({ ...analysis, chat_reply: 'It returned JSON with a null customer.' }, { ...analysis, chat_reply: 'It returned a job with no customer.' });
  const result = await runHydrated(setup({ analyst: leaky, intent: intent('chat') }).input);
  assert.equal(leaky.calls.length, 2);
  assert.equal(result.verdict.chat_reply, 'It returned a job with no customer.');
});

test('the repair is bounded: still technical after the allowed rounds, the answer stands', async () => {
  const analyst = sequence(technicalSummary);
  const result = await runHydrated(setup({ analyst, intent: intent('explain') }).input);
  assert.equal(analyst.calls.length, 1 + RCA_QUOTE_REPAIRS);
  assert.match(result.verdict.summary, /HTTP/);
});

test('one repair round can fix a quote and technical words together', () => {
  const text = repairMessage([{ name: 'Get Job', quote: 'x', why: 'quote' }], [{ field: 'summary', term: 'HTTP' }]);
  assert.match(text, /1\. Get Job: "x" is not a verbatim excerpt/);
  assert.match(text, /- summary: HTTP/);
  assert.equal(text.match(/Answer again with the complete answer/g)?.length, 1);
  assert.doesNotMatch(repairMessage([], [{ field: 'summary', term: 'HTTP' }]), /verbatim excerpt/);
});
