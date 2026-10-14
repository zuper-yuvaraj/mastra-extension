import assert from 'node:assert/strict';
import { beforeEach, test } from 'node:test';
import { RCA_CHAT_MODEL } from '../config';
import { buildLightChatInstructions, chatVerdict, NO_ANSWER, runLightChat } from '../chatLight';
import type { Intent } from '../intent';
import type { InvestigatorAgent } from '../investigate';
import { resetUnderstandingCache, type Understanding } from '../understand';
import { fakeExecution } from './fakeExecution';

beforeEach(() => resetUnderstandingCache());

const understanding: Understanding = {
  purpose: 'Emails the customer when a webhook reports a job.',
  trigger: 'A webhook call arrives.',
  groups: [{ name: 'Notify', goal: 'Email the customer.', node_names: ['On Webhook', 'Get Job', 'Send Email'] }],
};

const business: Intent = { type: 'chat', audience: 'business', needsData: false, via: 'model' };
const technical: Intent = { ...business, audience: 'technical' };

interface Call {
  content: string;
  options: any;
  all: any[];
}
function agent(...replies: unknown[]) {
  const calls: Call[] = [];
  const a: InvestigatorAgent & { calls: Call[] } = {
    calls,
    generate: async (messages: any, options: any) => {
      calls.push({ content: messages[0].content, options, all: messages });
      return { object: replies[Math.min(calls.length - 1, replies.length - 1)], steps: [{}] };
    },
  };
  return a;
}
const kbDeps = {
  search: async (query: string) => [{ id: query, score: 0.8, kind: 'workflow_builder', topic: 'wait', title: 'Wait node', text: 'Pauses the flow.', source_url: 'https://docs.test/wait' }],
  records: () => [],
};

function run(question: string, extra: Record<string, unknown> = {}) {
  const chat = agent({ reply: 'Sure.' });
  const understander = agent(understanding);
  const input = {
    agent: agent(null),
    chat,
    understander,
    executionContext: fakeExecution(true),
    question,
    zuperToken: 't',
    zuperApiUrl: 'https://x.zuperpro.com',
    intent: business,
    deps: { kb: kbDeps },
    ...extra,
  };
  return { chat, understander, input: input as Parameters<typeof runLightChat>[0] };
}

test('small talk needs nothing: one quick call, no workflow summary, no documentation', async () => {
  const { chat, understander, input } = run('thanks!', {});
  const result = await runLightChat(input);
  assert.equal(chat.calls.length, 1);
  assert.equal(understander.calls.length, 0);
  assert.doesNotMatch(chat.calls[0]!.content, /WORKFLOW UNDERSTANDING|DOCS/);
  assert.match(chat.calls[0]!.content, /^QUESTION: thanks!\nAUDIENCE: business/);
  assert.equal(result.verdict.mode, 'chat');
  assert.equal(result.verdict.status, 'answered');
  assert.equal(result.verdict.chat_reply, 'Sure.');
  assert.equal(result.html, '<p>Sure.</p>');
  assert.deepEqual([result.meta.engine, result.meta.model, result.meta.steps, result.meta.tool_calls], ['hydrated', RCA_CHAT_MODEL, 1, 0]);
});

test('a general question gets what the workflow is for and the relevant documentation, not the definition', async () => {
  const { chat, understander, input } = run('How does a Wait node work?');
  await runLightChat(input);
  assert.equal(understander.calls.length, 1);
  const sent = chat.calls[0]!.content;
  assert.match(sent, /WORKFLOW UNDERSTANDING \(JSON\):\n\{"purpose":"Emails the customer/);
  assert.match(sent, /DOCS \(JSON\):\n\[\{"title":"Wait node"/);
  assert.doesNotMatch(sent, /\nWORKFLOW \(JSON\)/, 'there is a run, so the definition is not what it is about');
});

test('a chat with no run gets the workflow definition, since that is all there is to talk about', async () => {
  const definition = fakeExecution(false);
  definition.definitionOnly = true;
  const { chat, input } = run('What does Send Email do?', { executionContext: definition });
  const result = await runLightChat(input);
  assert.match(chat.calls[0]!.content, /\nWORKFLOW \(JSON\):\n\{"name":.*"nodes":\[\{"name":"On Webhook"/);
  assert.equal(result.meta.mode, 'WORKFLOW_QUESTION');
});

test('history is carried, and the evidence the conversation already had is kept', async () => {
  const { chat, input } = run('and the next one?', { conversation: { history: 'user: what is a loop?\nassistant: It repeats steps.', findings: null, priorEvidence: ['earlier evidence'] } });
  const result = await runLightChat(input);
  assert.match(chat.calls[0]!.content, /CONVERSATION SO FAR:\nuser: what is a loop\?/);
  assert.deepEqual(result.evidence, ['earlier evidence']);
});

test('a business answer that used technical words is sent back once and the rewrite is used', async () => {
  const chat = agent({ reply: 'It calls the API endpoint with a JSON payload.' }, { reply: 'It asks Zuper to update the appointment.' });
  const { input } = run('What does that step do?', { chat });
  const result = await runLightChat(input);
  assert.equal(chat.calls.length, 2);
  assert.match(chat.calls[1]!.all[2].content, /for a non-technical reader/);
  assert.match(chat.calls[1]!.all[2].content, /- chat_reply: .*API/);
  assert.equal(result.verdict.chat_reply, 'It asks Zuper to update the appointment.');
  assert.equal(result.meta.steps, 2);
});

test('a rewrite that comes back empty keeps the first reply; a technical audience is never rewritten', async () => {
  const chat = agent({ reply: 'It calls the API.' }, { nonsense: true });
  const kept = await runLightChat(run('What does that step do?', { chat }).input);
  assert.equal(kept.verdict.chat_reply, 'It calls the API.');

  const tech = agent({ reply: 'It calls the HTTP API with a JSON payload.' });
  await runLightChat(run('What does that step do?', { chat: tech, intent: technical }).input);
  assert.equal(tech.calls.length, 1);
});

test('an unusable answer says so plainly instead of showing nothing', async () => {
  const result = await runLightChat(run('hmm', { chat: agent({ nonsense: true }) }).input);
  assert.equal(result.verdict.chat_reply, NO_ANSWER);
  assert.equal(result.html, `<p>${NO_ANSWER}</p>`);
});

test('a cancelled request is not sent back for a rewrite', async () => {
  const controller = new AbortController();
  const chat = agent({ reply: 'It calls the API.' });
  const original = chat.generate;
  chat.generate = async (m: any, o: any) => {
    controller.abort();
    return original(m, o);
  };
  await assert.rejects(runLightChat(run('What does that step do?', { chat, abortSignal: controller.signal }).input));
  assert.equal(chat.calls.length, 1);
});

test('the call is one quick step with structured output', async () => {
  const { chat, input } = run('thanks!');
  await runLightChat(input);
  assert.equal(chat.calls[0]!.options.maxSteps, 1);
  assert.equal(chat.calls[0]!.options.structuredOutput.errorStrategy, 'fallback');
});

test('chatVerdict is a plain answer: nothing diagnosed, nothing to confirm', () => {
  const v = chatVerdict('Hello', { audience: 'technical' });
  assert.deepEqual([v.status, v.mode, v.audience, v.root_cause, v.fix, v.evidence_chain, v.confidence], ['answered', 'chat', 'technical', null, null, [], 'high']);
});

test('the instructions say what the assistant is for, what it does not have, and the audience rules', () => {
  const text = buildLightChatInstructions();
  assert.match(text, /chat assistant inside Zuper's Workflow Builder/);
  assert.match(text, /do NOT have this workflow's run data/);
  assert.match(text, /outside what you can help with here/);
  assert.match(text, /- business: you write for a Zuper admin/);
  assert.match(text, /WORKFLOW BUILDER ORIENTATION/);
});
