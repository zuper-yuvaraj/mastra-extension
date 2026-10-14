import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { InvestigatorAgent } from '../investigate';
import { applyGuardrails, audienceOf, CHIP_RCA, executionStateOf, fallbackIntent, routeByRules, routeIntent, type ExecutionState, type Intent } from '../intent';
import { fakeExecution } from './fakeExecution';

const NODES = ['On Webhook', 'Get Job', 'Send Email', 'update Appointment', 'Construct'];
const rules = (question: string, executionState: ExecutionState = 'failed') => routeByRules({ question, executionState, nodeNames: NODES });
const shape = (i: Intent | null) => (i ? `${i.type}/${i.audience}${i.type === 'chat' ? (i.needsData ? '/data' : '/nodata') : ''}` : null);

// ---- rules: the clear cases cost no model call --------------------------------------------------------------

test('"why did it fail?" and its everyday variants are explain, in business wording', () => {
  for (const q of ['Why did this workflow fail?', 'why did it fail', 'What happened?', 'what went wrong here', 'what is the problem', 'Why did this execution error out?', 'why has this failed']) {
    assert.equal(shape(rules(q)), 'explain/business', q);
  }
});

test('asking for the root cause, the reason or a closer look is rca', () => {
  for (const q of ['Find the root cause (RCA) of this workflow failure', 'find the reason', 'Find the cause of the failure', 'do an RCA', 'dig deeper into this failure', 'investigate this', 'explain the failure in detail', 'Give me a detailed analysis of why it failed']) {
    assert.equal(rules(q)?.type, 'rca', q);
  }
  assert.equal(rules('find in detail')?.type, 'rca', 'a short "in detail" on a failed run means look closer at the failure');
  assert.equal(rules('find in detail', 'completed'), null, 'but not on a run that did not fail');
});

test('technical wording makes the audience technical, and it is the question that decides', () => {
  assert.equal(shape(rules('Find the RCA for the 404 on update Appointment')), 'rca/technical');
  assert.equal(shape(rules('Find the root cause. The payload and the expression look wrong')), 'rca/technical');
  assert.equal(audienceOf('why did my job not get scheduled?'), 'business');
  assert.equal(audienceOf('why does `$.getLatestNodeData` return null'), 'technical');
  assert.equal(audienceOf('is the API key variable set?'), 'technical');
  assert.equal(audienceOf('how many jobs are there? 250 maybe'), 'business', 'a plain number is not a status code');
});

test('the RCA chip and small talk are decided by rules', () => {
  assert.equal(shape(rules(CHIP_RCA)), 'rca/business');
  for (const q of ['thanks!', 'hi', 'Hello', 'ok', 'thank you', 'good morning']) assert.equal(shape(rules(q)), 'chat/business/nodata', q);
});

test('a question about specific data, or that names a node, is left to the model', () => {
  for (const q of ['What did Get Record return?', 'why did update Appointment fail?', 'what does this workflow do for us?', 'how does a Wait node work?', 'is the customer email filled in?', 'Why is the project uid empty?', 'which node ran after Get Job?', 'explain what Construct does in detail']) {
    assert.equal(rules(q), null, q);
  }
});

test('an empty question is not decided', () => assert.equal(rules('   '), null));

// ---- guardrails and fallbacks ---------------------------------------------------------------------------------

test('with no run to analyse, every answer is chat without data', () => {
  for (const state of ['none', 'definition'] as const) {
    const g = applyGuardrails({ type: 'explain', audience: 'business', needsData: true, via: 'model' }, state);
    assert.deepEqual([g.type, g.needsData, g.via], ['chat', false, 'guardrail']);
    assert.equal(applyGuardrails({ type: 'chat', audience: 'technical', needsData: false, via: 'model' }, state).via, 'model', 'chat that needs none is left alone');
  }
});

test('explain and rca always need the run data; chat keeps what it said', () => {
  assert.equal(applyGuardrails({ type: 'rca', audience: 'business', needsData: false, via: 'model' }, 'failed').needsData, true);
  assert.equal(applyGuardrails({ type: 'chat', audience: 'business', needsData: false, via: 'model' }, 'failed').needsData, false);
});

test('the default when no model decides: explain a failed run, otherwise chat', () => {
  assert.equal(shape(fallbackIntent('failed', 'hmm')), 'explain/business');
  assert.equal(shape(fallbackIntent('completed', 'hmm')), 'chat/business/data');
  assert.equal(shape(fallbackIntent('definition', 'hmm')), 'chat/business/nodata');
});

test('the execution state: none, definition only, failed, completed, running', () => {
  assert.equal(executionStateOf(null), 'none');
  assert.equal(executionStateOf(fakeExecution(true)), 'failed');
  assert.equal(executionStateOf(fakeExecution(false)), 'completed');
  const definition = fakeExecution(false);
  definition.definitionOnly = true;
  assert.equal(executionStateOf(definition), 'definition');
  const running = fakeExecution(false);
  running.summary.workflow_execution!.status = 'RUNNING';
  assert.equal(executionStateOf(running), 'running');
});

// ---- the model ------------------------------------------------------------------------------------------------

function classifier(returns: unknown | (() => unknown)) {
  const calls: Array<{ content: string; options: any }> = [];
  const agent: InvestigatorAgent & { calls: typeof calls } = {
    calls,
    generate: async (messages: any, options: any) => {
      calls.push({ content: messages[0].content, options });
      const value = typeof returns === 'function' ? (returns as () => unknown)() : returns;
      return { object: value, steps: [{}] };
    },
  };
  return agent;
}
const turns = (...texts: string[]) => texts.map((content, i) => ({ role: (i % 2 === 0 ? 'user' : 'assistant') as 'user' | 'assistant', content }));
const route = (question: string, c: InvestigatorAgent | undefined, extra: Record<string, unknown> = {}) =>
  routeIntent({ question, turns: turns(question), executionContext: fakeExecution(true), classifier: c, ...extra });

test('a message the rules cannot decide goes to the model, which sees the run state, the nodes and the chat', async () => {
  const c = classifier({ type: 'chat', audience: 'technical', needs_data: true });
  const progress: string[] = [];
  const intent = await routeIntent({
    question: 'What did Get Job return?',
    turns: turns('why did it fail?', '<p>Send Email failed.</p><ul><li>no recipient</li></ul>', 'What did Get Job return?'),
    executionContext: fakeExecution(true),
    classifier: c,
    onProgress: (e) => progress.push(e.text),
  });
  assert.deepEqual(shape(intent), 'chat/technical/data');
  assert.equal(intent.via, 'model');
  assert.deepEqual(progress, ['Understanding your question']);
  const sent = c.calls[0]!.content;
  assert.match(sent, /EXECUTION: failed/);
  assert.match(sent, /NODES: \["On Webhook","Get Job","Send Email"/);
  assert.match(sent, /assistant: Send Email failed\.\nno recipient/, 'earlier answers go in as words, not tags');
  assert.match(sent, /MESSAGE: What did Get Job return\?/);
  assert.equal(c.calls[0]!.options.maxSteps, 1);
  assert.equal(c.calls[0]!.options.structuredOutput.errorStrategy, 'fallback');
});

test('rules decide without calling the model, and say nothing about it', async () => {
  const c = classifier({ type: 'chat', audience: 'business', needs_data: false });
  const progress: string[] = [];
  const intent = await route('Why did this workflow fail?', c, { onProgress: (e: { text: string }) => progress.push(e.text) });
  assert.equal(shape(intent), 'explain/business');
  assert.equal(c.calls.length, 0);
  assert.deepEqual(progress, []);
});

test('explain and rca from the model always need data; chat takes the model at its word', async () => {
  assert.equal((await route('hmm what is this', classifier({ type: 'explain', audience: 'business', needs_data: false }))).needsData, true);
  assert.equal((await route('hmm what is this', classifier({ type: 'chat', audience: 'business', needs_data: false }))).needsData, false);
});

test('an unusable answer, an error, or no model at all falls back to the safe default', async () => {
  assert.equal((await route('hmm what is this', classifier({ nope: 1 }))).via, 'fallback');
  assert.equal((await route('hmm what is this', classifier(() => { throw new Error('model down'); }))).via, 'fallback');
  const none = await route('hmm what is this', undefined);
  assert.deepEqual([none.type, none.via], ['explain', 'fallback']);
});

test('a router that is too slow is given up on, and the default is used', async () => {
  const hanging: InvestigatorAgent = {
    generate: (_m: any, options: any) => new Promise((_resolve, reject) => options.abortSignal.addEventListener('abort', () => reject(new Error('timed out')))),
  };
  const started = Date.now();
  const intent = await route('hmm what is this', hanging, { timeoutMs: 30 });
  assert.equal(intent.via, 'fallback');
  assert.ok(Date.now() - started < 1500);
});

test('a request that was cancelled is not mistaken for a slow router', async () => {
  const controller = new AbortController();
  const c: InvestigatorAgent = {
    generate: async () => {
      controller.abort();
      throw new Error('aborted');
    },
  };
  await assert.rejects(route('hmm what is this', c, { signal: controller.signal }));
});

test('no run to analyse: even a model that says explain ends as chat without data', async () => {
  const definition = fakeExecution(false);
  definition.definitionOnly = true;
  const intent = await routeIntent({ question: 'hmm what is this', turns: turns('hmm what is this'), executionContext: definition, classifier: classifier({ type: 'explain', audience: 'business', needs_data: true }) });
  assert.deepEqual([intent.type, intent.needsData, intent.via], ['chat', false, 'guardrail']);
});
