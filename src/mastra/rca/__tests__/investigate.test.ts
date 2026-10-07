import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildUserMessage, investigate, type InvestigatorAgent } from '../investigate';
import { buildRcaInstructions } from '../instructions';
import { RCA_LEDGER_KEY, type EvidenceLedger } from '../ledger';
import { buildSeed } from '../seed';
import { assembleContext } from '../../lib/orchestrator';
import { INSUFFICIENT_VERDICT, type RcaVerdict } from '../verdict';
import { fakeExecution } from './fakeExecution';

function verdict(overrides: Partial<RcaVerdict> = {}): RcaVerdict {
  return {
    status: 'failed',
    summary: 'The email had no recipient because the job has no customer.',
    failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
    root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
    evidence_chain: [
      { node_uid: 'u-mail', name: 'Send Email', observation: 'the execution error', quote: 'recipient is required' },
      { node_uid: 'exec-1', name: 'Execution', observation: 'execution-level error', quote: 'recipient is required' },
    ],
    fix: { description: 'Guard against a missing customer', node_uid: 'u-mail', suggested_change: null },
    confidence: 'high',
    knowledge_used: [],
    ...overrides,
  };
}

/** A scripted stand-in for the model: records how it was called and returns a fixed verdict. */
function scriptedAgent(returns: unknown, onCall?: (messages: any, options: any) => void): InvestigatorAgent & { calls: number } {
  const agent = {
    calls: 0,
    generate: async (messages: any, options: any) => {
      agent.calls++;
      onCall?.(messages, options);
      return { object: returns, steps: [{}, {}] };
    },
  };
  return agent;
}

const run = (agent: InvestigatorAgent, execution = fakeExecution(true), question?: string) =>
  investigate({ agent, executionContext: execution, question, zuperToken: 'tok', zuperApiUrl: 'https://x.zuperpro.com' });

test('a failed run goes to the agent and its verdict is verified against the seed', async () => {
  const agent = scriptedAgent(verdict());
  const result = await run(agent);
  assert.equal(agent.calls, 1);
  assert.equal(result.verdict.status, 'failed');
  assert.equal(result.verdict.evidence_chain.every((e) => e.verified), true, JSON.stringify(result.verdict.issues));
  assert.equal(result.verdict.confidence, 'high');
  assert.equal(result.meta.mode, 'EXECUTION_FAILED');
  assert.equal(result.meta.steps, 2);
});

test('an invented quote is caught even though the model returned a well-formed verdict', async () => {
  const bad = verdict({
    evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: 'customer_email is "bob@x.com"' }],
  });
  const result = await run(scriptedAgent(bad));
  assert.equal(result.verdict.evidence_chain[0]?.verified, false);
  assert.equal(result.verdict.confidence, 'low');
  assert.match(result.html, /could not be verified/);
});

test('a node that is not in this execution is flagged', async () => {
  const result = await run(scriptedAgent(verdict({ root_cause: { node_uid: 'u-ghost', name: 'Ghost', category: 'OTHER', explanation: 'x' } })));
  assert.match(result.verdict.issues.join(' '), /u-ghost/);
});

test('garbage from the model falls back to insufficient_evidence instead of throwing', async () => {
  const result = await run(scriptedAgent({ nonsense: true }));
  assert.equal(result.verdict.status, INSUFFICIENT_VERDICT.status);
  assert.equal(result.verdict.root_cause, null);
});

test('a successful run is answered without calling the model', async () => {
  const agent = scriptedAgent(verdict());
  const result = await run(agent, fakeExecution(false));
  assert.equal(agent.calls, 0);
  assert.equal(result.verdict.status, 'no_issue');
  assert.equal(result.meta.model, null);
});

test('a branch question on a successful run does go to the agent', async () => {
  const agent = scriptedAgent(verdict({ status: 'unexpected_branch' }));
  const result = await run(agent, fakeExecution(false), 'why did it go to the else branch instead?');
  assert.equal(agent.calls, 1);
  assert.equal(result.meta.mode, 'BRANCH_QUESTION');
});

test('no execution is answered without calling the model', async () => {
  const agent = scriptedAgent(verdict());
  const result = await investigate({ agent, executionContext: null, zuperToken: 't', zuperApiUrl: 'https://x.zuperpro.com' });
  assert.equal(agent.calls, 0);
  assert.equal(result.verdict.status, 'insufficient_evidence');
});

test('the agent gets a request context holding the ledger and execution, the seed in the message, and a step cap', async () => {
  let captured: { messages: any; options: any } | undefined;
  await run(scriptedAgent(verdict(), (messages, options) => (captured = { messages, options })));

  const ledger = captured!.options.requestContext.getRaw(RCA_LEDGER_KEY) as EvidenceLedger;
  assert.ok(ledger.size >= 1, 'the seed is recorded so quotes from it can be verified');
  assert.equal(captured!.options.maxSteps, 12);
  assert.ok(captured!.options.structuredOutput.schema);

  const text = captured!.messages[0].content as string;
  assert.match(text, /MODE: EXECUTION_FAILED/);
  assert.match(text, /SEED EVIDENCE/);
  assert.match(text, /\.data\.data\.customer/);
});

test('the bearer token is never put in the prompt or the structured-output options', async () => {
  let captured: { messages: any; options: any } | undefined;
  await investigate({
    agent: scriptedAgent(verdict(), (messages, options) => (captured = { messages, options })),
    executionContext: fakeExecution(true),
    zuperToken: 'SECRET-TOKEN-XYZ',
    zuperApiUrl: 'https://x.zuperpro.com',
  });
  assert.ok(!JSON.stringify(captured!.messages).includes('SECRET-TOKEN-XYZ'));
  assert.ok(!JSON.stringify(captured!.options.structuredOutput).includes('SECRET-TOKEN-XYZ'));
});

test('the user message states the question, or a default one', async () => {
  const execution = fakeExecution(true);
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.match(buildUserMessage(seed, 'Why no email?'), /QUESTION: Why no email\?/);
  assert.match(buildUserMessage(seed), /Why did this execution fail/);
});

test('an oversized seed is trimmed to a bounded prompt', async () => {
  const execution = fakeExecution(true);
  const seed = await buildSeed(execution, assembleContext(execution, null));
  const huge = { ...seed, executed_nodes: Array.from({ length: 3000 }, (_, i) => ({ order: i, uid: `u${i}`, name: `Node ${i}`, type: 't', status: 'COMPLETED' })) };
  assert.ok(buildUserMessage(huge).length < 16000);
});

test('instructions carry the method, the quoting rule and the generated orientation', () => {
  const text = buildRcaInstructions();
  assert.match(text, /FIRST node whose output is wrong/);
  assert.match(text, /VERBATIM/);
  assert.match(text, /WORKFLOW BUILDER ORIENTATION/);
  assert.match(text, /two-a/);
});
