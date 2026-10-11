import assert from 'node:assert/strict';
import { beforeEach, test } from 'node:test';
import type { InvestigatorAgent } from '../investigate';
import { resetUnderstandingCache, sanitizeUnderstanding, slimWorkflowForUnderstanding, understandWorkflow, UNGROUPED, type Understanding } from '../understand';
import { fakeExecution } from './fakeExecution';

const good: Understanding = {
  purpose: 'Emails the customer when a webhook reports a job.',
  trigger: 'A webhook call arrives.',
  groups: [
    { name: 'Receive the job', goal: 'Take the job from the webhook and load it.', node_names: ['On Webhook', 'Get Job'] },
    { name: 'Notify', goal: 'Email the customer.', node_names: ['Send Email'] },
  ],
};

function scripted(returns: unknown | (() => unknown)) {
  const seen: string[] = [];
  const agent: InvestigatorAgent & { seen: string[] } = {
    seen,
    generate: async (messages: any, options: any) => {
      seen.push(messages[0].content);
      assert.equal(options.maxSteps, 1, 'a single call');
      assert.equal(options.tools, undefined, 'with no tools');
      const value = typeof returns === 'function' ? (returns as () => unknown)() : returns;
      return { object: value, steps: [{}] };
    },
  };
  return agent;
}

beforeEach(() => resetUnderstandingCache());

test('the model sees names, types, config and connections, in flow order', () => {
  const slim = slimWorkflowForUnderstanding(fakeExecution(true));
  assert.deepEqual(
    slim.nodes.map((n) => n.name),
    ['On Webhook', 'Get Job', 'Send Email'],
  );
  assert.equal(slim.nodes[1]!.type, 'zuper_get_record');
  assert.match(slim.nodes[1]!.config.job_uid!, /getLatestNodeData\('On Webhook'\)/);
  assert.equal(slim.nodes[2]!.config.subject, 'Update on job');
  assert.deepEqual(slim.connections.map((c) => `${c.from}>${c.to}`).sort(), ['Get Job>Send Email', 'On Webhook>Get Job']);
});

test('cosmetics, credentials and variable values never reach the model', () => {
  const ctx = fakeExecution(true);
  const nodes = ctx.workflowData!.nodes!;
  Object.assign(nodes[0]!, { position: { x: 1, y: 2 }, node_icon: 'https://icon', color: { main: '#fff' }, credentials: { token: 'SECRET-TOKEN' }, pinned_data: { a: 1 } });
  (ctx.workflowData as Record<string, unknown>).meta_data = { variables: [{ name: 'BASE_URL', value: 'https://secret.example' }] };
  const slim = slimWorkflowForUnderstanding(ctx);
  const text = JSON.stringify(slim);
  for (const leaked of ['SECRET-TOKEN', 'https://icon', '#fff', 'secret.example', 'position']) assert.ok(!text.includes(leaked), `${leaked} leaked`);
  assert.deepEqual(slim.variables, ['BASE_URL']);
});

test('sanitising drops invented and duplicate names and appends missed nodes', () => {
  const out = sanitizeUnderstanding(
    {
      ...good,
      groups: [
        { name: 'A', goal: 'g', node_names: ['On Webhook', 'Made Up', 'Get Job'] },
        { name: 'B', goal: 'g', node_names: ['Get Job'] },
        { name: 'Empty', goal: 'g', node_names: ['Nothing'] },
      ],
    },
    ['On Webhook', 'Get Job', 'Send Email'],
  );
  assert.deepEqual(out.groups.map((g) => g.name), ['A', UNGROUPED]);
  assert.deepEqual(out.groups[0]!.node_names, ['On Webhook', 'Get Job']);
  assert.deepEqual(out.groups[1]!.node_names, ['Send Email']);
});

test('a new workflow version asks again', async () => {
  const agent = scripted(good);
  for (const version of ['v1', 'v2']) {
    const ctx = fakeExecution(true);
    (ctx.workflowData as Record<string, unknown>).version_id = version;
    const result = await understandWorkflow({ agent, executionContext: ctx });
    assert.equal(result.cached, false);
    assert.equal(result.understanding?.purpose, good.purpose);
  }
  assert.equal(agent.seen.length, 2);
});

test('a repeat call for one version does not reach the model', async () => {
  const agent = scripted(good);
  const ctx = fakeExecution(true);
  (ctx.workflowData as Record<string, unknown>).version_id = 'v1';
  await understandWorkflow({ agent, executionContext: ctx });
  const again = await understandWorkflow({ agent, executionContext: ctx });
  assert.equal(again.cached, true);
  assert.equal(agent.seen.length, 1);
});

test('an unusable or failing answer gives null and is not cached', async () => {
  const ctx = fakeExecution(true);
  (ctx.workflowData as Record<string, unknown>).version_id = 'v1';

  const bad = scripted({ nope: true });
  assert.equal((await understandWorkflow({ agent: bad, executionContext: ctx })).understanding, null);

  const throwing = scripted(() => {
    throw new Error('model down');
  });
  assert.equal((await understandWorkflow({ agent: throwing, executionContext: ctx })).understanding, null);

  const ok = scripted(good);
  const recovered = await understandWorkflow({ agent: ok, executionContext: ctx });
  assert.equal(recovered.cached, false, 'the failures were not cached');
  assert.ok(recovered.understanding);
});

test('an aborted request is not swallowed', async () => {
  const controller = new AbortController();
  const agent: InvestigatorAgent = {
    generate: async () => {
      controller.abort();
      throw new Error('aborted');
    },
  };
  await assert.rejects(understandWorkflow({ agent, executionContext: fakeExecution(true), signal: controller.signal }));
});
