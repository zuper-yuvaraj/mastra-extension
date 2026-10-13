import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createExecutionContext } from '../../lib/zuperExecutionApi';
import { rcaEvidenceTools } from '../../tools/rcaEvidenceTools';
import { RCA_ANALYSIS_MODEL, RCA_EVIDENCE_MAX_STEPS, RCA_QUOTE_REPAIRS } from '../config';
import { resetHydrationCache } from '../hydrate';
import { buildHydratedInstructions } from '../hydratedInstructions';
import { repairMessage, runHydrated } from '../hydratedPipeline';
import type { InvestigatorAgent } from '../investigate';
import { EvidenceLedger, RCA_LEDGER_KEY } from '../ledger';
import { resetUnderstandingCache, type Understanding } from '../understand';
import { INSUFFICIENT_VERDICT, type RcaVerdict } from '../verdict';
import { fakeExecution } from './fakeExecution';

const understanding: Understanding = {
  purpose: 'Emails the customer when a webhook reports a job.',
  trigger: 'A webhook call arrives.',
  groups: [{ name: 'Notify the customer', goal: 'Load the job and email it.', node_names: ['On Webhook', 'Get Job', 'Send Email'] }],
};

const analysis: RcaVerdict = {
  status: 'failed',
  workflow_purpose: 'Emails the customer when a webhook reports a job.',
  headline: 'While emailing the customer, Send Email failed',
  summary: 'Send Email had no recipient because Get Job returned a job without a customer.',
  failed_node: { uid: 'u-mail', name: 'Send Email', error: 'recipient is required' },
  root_cause: { node_uid: 'u-job', name: 'Get Job', category: 'BAD_UPSTREAM_DATA', explanation: 'customer is null' },
  evidence_chain: [
    { node_uid: 'u-mail', name: 'Send Email', observation: 'Send Email failed for lack of a recipient.', quote: 'recipient is required' },
    { node_uid: 'u-job', name: 'Get Job', observation: 'Get Job returned the job with customer null.', quote: '"customer":null' },
  ],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [{ title: 'Made up', url: 'https://invented.example' }],
};

interface Call {
  content: string;
  options: any;
}

/** An agent that records how it was called and answers with `returns` (or whatever `act` makes of the call). */
function scripted(returns: unknown, act?: (call: Call) => void) {
  const calls: Call[] = [];
  const agent: InvestigatorAgent & { calls: Call[] } = {
    calls,
    generate: async (messages: any, options: any) => {
      const call = { content: messages[0].content as string, options };
      calls.push(call);
      act?.(call);
      return { object: returns, steps: [{}, {}] };
    },
  };
  return agent;
}

const kbDeps = {
  search: async (query: string) => [{ id: query, score: 0.8, kind: 'business', topic: 'doc', title: `Doc ${query}`, text: 'how it works', source_url: `https://docs.test/${encodeURIComponent(query)}` }],
  records: () => [],
};

function setup(overrides: Record<string, unknown> = {}) {
  resetHydrationCache();
  resetUnderstandingCache();
  const legacy = scripted(analysis);
  const analyst = scripted(analysis);
  const understander = scripted(understanding);
  const input = {
    agent: legacy,
    analyst,
    understander,
    executionContext: fakeExecution(true),
    question: 'why did it fail?',
    zuperToken: 't',
    zuperApiUrl: 'https://x.zuperpro.com',
    deps: { kb: kbDeps },
    ...overrides,
  };
  return { legacy, analyst, understander, input: input as Parameters<typeof runHydrated>[0] };
}

// ---- the run ------------------------------------------------------------------------------------------

test('a failed run: one analysis call over the whole pack, claims verified, links from the KB step', async () => {
  const { legacy, analyst, understander, input } = setup();
  const progress: string[] = [];
  const result = await runHydrated({ ...input, onProgress: (e) => progress.push(e.text) });

  assert.equal(legacy.calls.length, 0, 'the tool-using investigator is not used');
  assert.equal(understander.calls.length, 1);
  assert.equal(analyst.calls.length, 1);
  const message = analyst.calls[0]!.content;
  assert.match(message, /^QUESTION: why did it fail\?/);
  assert.match(message, /"purpose":"Emails the customer when a webhook reports a job\."/, 'the workflow summary is in the pack');
  assert.match(message, /"references_node_data"/);
  assert.match(message, /"name":"Get Job"/, 'every node is there without the model asking for it');
  assert.match(message, /\nDOCS \(JSON\):/);

  assert.equal(result.meta.engine, 'hydrated');
  assert.equal(result.meta.model, RCA_ANALYSIS_MODEL);
  assert.equal(result.meta.trace_nodes, 3);
  assert.equal(result.verdict.evidence_chain.every((e) => e.verified), true, result.verdict.issues.join('; '));
  assert.equal(result.verdict.confidence, 'high');
  assert.ok(result.verdict.references.length > 0 && result.verdict.references.every((r) => r.url.startsWith('https://docs.test/')), 'model-supplied links are replaced');
  assert.deepEqual(progress, ['Reading the workflow and resolving every node it depends on', 'Analysing']);
});

test('the model call is bounded: a step cap, no tools on the last step, structured output', async () => {
  const { analyst, input } = setup();
  await runHydrated(input);
  const { options } = analyst.calls[0]!;
  assert.equal(options.maxSteps, RCA_EVIDENCE_MAX_STEPS);
  for (let step = 0; step < RCA_EVIDENCE_MAX_STEPS - 1; step++) assert.equal(options.prepareStep({ stepNumber: step }), undefined, `step ${step} may use the tool`);
  assert.deepEqual(options.prepareStep({ stepNumber: RCA_EVIDENCE_MAX_STEPS - 1 }), { toolChoice: 'none' }, 'the last step must answer');
  assert.equal(options.structuredOutput.errorStrategy, 'fallback');
  assert.deepEqual(options.structuredOutput.fallbackValue, INSUFFICIENT_VERDICT);
  assert.ok(options.requestContext.getRaw(RCA_LEDGER_KEY) instanceof EvidenceLedger);
});

test('a quote copied from documentation does not verify; one copied from the run does', async () => {
  const quoting = { ...analysis, evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: 'how it works' }] };
  const { input } = setup({ analyst: scripted(quoting) });
  const result = await runHydrated(input);
  assert.equal(result.verdict.evidence_chain[0]!.verified, false);
  assert.equal(result.verdict.confidence, 'low');
});

test('data the model reads with the tool is evidence, and is reported as progress', async () => {
  const quoting = { ...analysis, evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: '"deep_value":"from-the-tool"' }] };
  const analyst = scripted(quoting, ({ options }) => {
    (options.requestContext.getRaw(RCA_LEDGER_KEY) as EvidenceLedger).record('get_node_data', '{"node":"Get Job"}', { data: { deep_value: 'from-the-tool' } });
  });
  const progress: string[] = [];
  const { input } = setup({ analyst, onProgress: (e: { text: string }) => progress.push(e.text) });
  const result = await runHydrated(input);
  assert.equal(result.verdict.evidence_chain[0]!.verified, true);
  assert.equal(result.meta.tool_calls, 1);
  assert.ok(progress.includes('Reading what Get Job returned'), progress.join(' | '));
});

test('a follow-up carries its history and findings, and earlier evidence still verifies', async () => {
  const earlier = { ...analysis, evidence_chain: [{ node_uid: 'u-job', name: 'Get Job', observation: 'x', quote: 'seen-in-an-earlier-turn' }] };
  const analyst = scripted(earlier);
  const { input } = setup({
    analyst,
    conversation: { history: 'USER: why?\nASSISTANT: Send Email failed.', findings: '{"root_cause":"Get Job"}', priorEvidence: ['{"note":"seen-in-an-earlier-turn"}'] },
  });
  const result = await runHydrated(input);
  const message = analyst.calls[0]!.content;
  assert.match(message, /CONVERSATION SO FAR:\nUSER: why\?/);
  assert.match(message, /ALREADY ESTABLISHED \(verified earlier in this conversation, JSON\):\n\{"root_cause":"Get Job"\}/);
  assert.equal(result.verdict.evidence_chain[0]!.verified, true);
});

// ---- quotes that fail the check -----------------------------------------------------------------------

/** Answers with each value in turn (the last one repeats) and records every call. */
function sequence(...returns: unknown[]) {
  const calls: Call[] = [];
  const agent: InvestigatorAgent & { calls: Call[]; messages: any[][] } = {
    calls,
    messages: [],
    generate: async (messages: any, options: any) => {
      calls.push({ content: messages[0].content, options });
      agent.messages.push(messages);
      return { object: returns[Math.min(calls.length - 1, returns.length - 1)], steps: [{}, {}] };
    },
  };
  return agent;
}
const withQuote = (quote: string, node_uid = 'u-job'): RcaVerdict => ({ ...analysis, evidence_chain: [{ node_uid, name: 'Get Job', observation: 'x', quote }] });

test('a quote that is not verbatim is sent back once, and the corrected answer verifies', async () => {
  const analyst = sequence(withQuote('"customer": null,'), withQuote('"customer":null'));
  const { input } = setup({ analyst });
  const progress: string[] = [];
  const result = await runHydrated({ ...input, onProgress: (e) => progress.push(e.text) });

  assert.equal(analyst.calls.length, 2);
  const second = analyst.messages[1]!;
  assert.equal(second.length, 3, 'the pack, the answer given, and what is wrong with it');
  assert.equal(second[0].role, 'user');
  assert.equal(second[1].role, 'assistant');
  assert.ok(second[1].content.includes(JSON.stringify('"customer": null,')), 'the model sees its own answer');
  assert.match(second[2].content, /1. Get Job: /, 'it is told which item failed');
  assert.match(second[2].content, /not a verbatim excerpt/);
  assert.equal(result.verdict.evidence_chain[0]!.verified, true);
  assert.equal(result.verdict.confidence, 'high');
  assert.equal(result.meta.steps, 4, 'both rounds are counted');
  assert.ok(progress.includes('Checking the evidence'));
});

test('the repair is bounded: still wrong after the allowed rounds, the answer stands, marked unverified', async () => {
  const analyst = sequence(withQuote('never in the data'));
  const { input } = setup({ analyst });
  const result = await runHydrated(input);
  assert.equal(analyst.calls.length, 1 + RCA_QUOTE_REPAIRS);
  assert.equal(result.verdict.evidence_chain[0]!.verified, false);
  assert.equal(result.verdict.confidence, 'low');
});

test('an item with an unknown node_uid is told so, not that its quote is wrong', async () => {
  const analyst = sequence(withQuote('"customer":null', 'not-a-node'), withQuote('"customer":null'));
  const { input } = setup({ analyst });
  await runHydrated(input);
  assert.match(analyst.messages[1]![2].content, /node_uid is not a node of this workflow/);
});

test('an unusable second answer never replaces a usable first one', async () => {
  const analyst = sequence(withQuote('never in the data'), { nonsense: true });
  const { input } = setup({ analyst });
  const result = await runHydrated(input);
  assert.equal(analyst.calls.length, 2);
  assert.equal(result.verdict.summary, analysis.summary, 'the first answer is kept, not the empty fallback');
  assert.ok(result.verdict.issues.some((issue) => issue.includes('Get Job')), 'with the verifier’s note about it');
});

test('a clean answer, and an answer that gave no evidence at all, are not sent back', async () => {
  const clean = sequence(analysis);
  await runHydrated(setup({ analyst: clean }).input);
  assert.equal(clean.calls.length, 1);

  const nothing = sequence({ nonsense: true });
  await runHydrated(setup({ analyst: nothing }).input);
  assert.equal(nothing.calls.length, 1);
});

test('an aborted request is not sent back for repair', async () => {
  const controller = new AbortController();
  const analyst = sequence(withQuote('never in the data'));
  const original = analyst.generate;
  analyst.generate = async (messages: any, options: any) => {
    controller.abort();
    return original(messages, options);
  };
  const { input } = setup({ analyst, abortSignal: controller.signal });
  await assert.rejects(runHydrated(input));
  assert.equal(analyst.calls.length, 1);
});

test('the repair message names each failure and says what a quote has to be', () => {
  const text = repairMessage([
    { name: 'Construct', quote: 'url : "x"', why: 'quote' },
    { name: 'Get Job', quote: '', why: 'node' },
  ]);
  assert.match(text, /1\. Construct: "url : \\"x\\"" is not a verbatim excerpt/);
  assert.match(text, /2\. Get Job: its node_uid is not a node of this workflow/);
  assert.match(text, /character for character/);
  assert.match(text, /do not abbreviate/i);
});

// ---- when the model has no say ------------------------------------------------------------------------

test('a healthy run asked "did it fail?" is answered without any model call', async () => {
  const { legacy, analyst, understander, input } = setup({ executionContext: fakeExecution(false), question: 'did it fail?' });
  const result = await runHydrated(input);
  assert.equal(result.verdict.status, 'no_issue');
  assert.equal(legacy.calls.length + analyst.calls.length + understander.calls.length, 0);
  assert.equal(result.meta.model, null);
});

test('no execution at all is handed to the investigator, which says there is nothing to analyse', async () => {
  const { legacy, analyst, understander, input } = setup({ executionContext: null });
  const result = await runHydrated(input);
  assert.equal(result.meta.model, null, 'no model was needed');
  assert.equal(result.meta.engine, undefined, 'the investigator answered, not this engine');
  assert.equal(analyst.calls.length + understander.calls.length + legacy.calls.length, 0);
});

test('a definition-only chat goes to the tool-using investigator', async () => {
  const ctx = fakeExecution(false);
  ctx.definitionOnly = true;
  const { legacy, analyst, input } = setup({ executionContext: ctx });
  await runHydrated(input);
  assert.equal(legacy.calls.length, 1);
  assert.equal(analyst.calls.length, 0);
});

// ---- when something underneath fails ------------------------------------------------------------------

test('a workflow summary that could not be made does not stop the answer', async () => {
  const failing: InvestigatorAgent = {
    generate: async () => {
      throw new Error('model down');
    },
  };
  const { analyst, input } = setup({ understander: failing });
  const result = await runHydrated(input);
  assert.match(analyst.calls[0]!.content, /WORKFLOW UNDERSTANDING:\n\(not available/);
  assert.equal(result.meta.engine, 'hydrated');
});

test('if the pack cannot be built, the fallback answers instead', async () => {
  const ctx = fakeExecution(true);
  ctx.getNodeExecutionData = () => Promise.reject(new Error('unexpected'));
  let fallbackCalls = 0;
  const fallback = async () => {
    fallbackCalls++;
    return { verdict: { ...INSUFFICIENT_VERDICT, issues: [] }, html: '', meta: { mode: 'EXECUTION_FAILED' as const, execution_status: null, steps: 0, tool_calls: 0, model: null }, evidence: [] };
  };
  const { analyst, input } = setup({ executionContext: ctx, fallback });
  await runHydrated(input);
  assert.equal(fallbackCalls, 1);
  assert.equal(analyst.calls.length, 0);
});

test('an aborted request stops before the model is called', async () => {
  const controller = new AbortController();
  controller.abort();
  const { analyst, input } = setup({ abortSignal: controller.signal });
  await assert.rejects(runHydrated(input));
  assert.equal(analyst.calls.length, 0);
});

test('an upstream node whose own data could not be read is never confirmed as the cause', async () => {
  const ctx = fakeExecution(true);
  const original = ctx.getNodeExecutionData;
  ctx.getNodeExecutionData = (key, iteration) => (key === 'u-job' ? Promise.resolve({ error: 'FETCH_FAILED' }) : original(key, iteration));
  const { input } = setup({ executionContext: ctx });
  const result = await runHydrated(input);
  assert.equal(result.verdict.status, 'insufficient_evidence');
});

test('a branch node is a confirmed cause from its recorded decision, even when its own data could not be read', async () => {
  const wrap = (data: unknown) => ({ node: { node_name: 'x' }, data });
  const nodes = [
    { node_uid: 'u-trigger', action_name: 'Trigger', node_name: 'webhook', action_key: 'webhook', form_fields: {} },
    { node_uid: 'u-if', action_name: 'If/Else', node_name: 'if_else', action_key: 'if_else', form_fields: {} },
    { node_uid: 'u-yes', action_name: 'Yes', node_name: 'code', action_key: 'code', form_fields: {} },
  ];
  const connections = [
    { source: 'u-trigger', target: 'u-if' },
    { source: 'u-if', target: 'u-yes', output_value: true },
  ];
  const run = (uid: string, output_value: boolean | null = null) => ({ node_uid: uid, status: 'COMPLETED', current_iteration: null, total_iterations: null, output_value, is_loop: false });
  const ctx = createExecutionContext(
    { workflow_execution: { execution_uid: 'e1', workflow_uid: 'w1', status: 'COMPLETED', workflow_data: { workflow_uid: 'w1', nodes, connections } }, node_execution: [run('u-trigger'), run('u-if', false)] } as never,
    async (uid) => {
      if (uid === 'u-trigger') return { node_execution: { node_uid: uid, status: 'COMPLETED', input_data: null, execution_data: wrap({ body: {} }) } };
      throw new Error('API_500'); // the If/Else's own data cannot be read
    },
  );
  const verdict: RcaVerdict = {
    ...analysis,
    status: 'unexpected_branch',
    failed_node: null,
    root_cause: { node_uid: 'u-if', name: 'If/Else', category: 'BRANCH_CONDITION', explanation: 'The condition evaluated FALSE and nothing is connected to FALSE.' },
    evidence_chain: [{ node_uid: 'u-if', name: 'If/Else', observation: 'It evaluated FALSE and the flow ended.', quote: '"flow_ended":true' }],
  };
  const { input } = setup({ executionContext: ctx, question: 'why did Yes not run?', analyst: scripted(verdict) });
  const result = await runHydrated(input);
  assert.equal(result.verdict.status, 'unexpected_branch', result.verdict.issues.join(' | '));
  assert.equal(result.verdict.root_cause?.name, 'If/Else');
});

// ---- the instructions and the tool --------------------------------------------------------------------

test('the instructions state the tool budget, the no-guessing rule, and the legend of the pack', () => {
  const text = buildHydratedInstructions();
  assert.match(text, new RegExp(`at most ${RCA_EVIDENCE_MAX_STEPS - 1} rounds of tool calls`));
  assert.match(text, /Never assume, never guess/);
  assert.match(text, /insufficient_evidence/);
  assert.match(text, /HOW TO READ THE PACK/);
  assert.match(text, /\/\/ /);
});

test('get_node_data needs a path, reads the original data, and records it as evidence', async () => {
  const tool = rcaEvidenceTools.get_node_data as any;
  assert.equal(tool.inputSchema.safeParse({ node: 'Get Job' }).success, false, 'a path is required: no dumping a node');
  assert.equal(tool.inputSchema.safeParse({ node: 'Get Job', select: [] }).success, false);

  const ledger = new EvidenceLedger();
  const requestContext = { getRaw: (key: string) => (key === RCA_LEDGER_KEY ? ledger : { executionContext: fakeExecution(true) }) };
  const out = JSON.stringify(await tool.execute({ node: 'Get Job', select: ['data.data.job_uid'] }, { requestContext }));
  assert.match(out, /job-1/);
  assert.equal(ledger.contains('job-1'), true);
});
