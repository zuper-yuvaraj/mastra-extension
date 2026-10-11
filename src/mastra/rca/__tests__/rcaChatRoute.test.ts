import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Hono } from 'hono';
import { handleRcaChat } from '../../routes/zuperRcaChatRoute';
import { RCA_LEDGER_KEY, type EvidenceLedger } from '../ledger';
import type { RcaVerdict } from '../verdict';

// These tests are about the investigator path and its response shape. The route's default engine is the
// pipeline, which needs a real Mastra (it runs a workflow); the stub below only has getAgent.
process.env.RCA_ENGINE = 'agent';

const answered: RcaVerdict = {
  status: 'answered',
  summary: 'Send Email runs after Get Job.',
  failed_node: null,
  root_cause: null,
  evidence_chain: [],
  fix: null,
  confidence: 'high',
  knowledge_used: [],
  references: [],
  workflow_purpose: '',
  headline: '',
};

const workflow = {
  workflow_uid: 'wf-route-0001',
  workflow_name: 'Demo',
  nodes: [
    { id: 'a-id', node_uid: 'u-a', action_key: 'trigger', action_name: 'On Webhook', action_type: 'TRIGGER', form_fields: {} },
    { id: 'b-id', node_uid: 'u-b', action_key: 'email', action_name: 'Send Email', action_type: 'ACTION', form_fields: {} },
  ],
  connections: [{ source: 'a-id', target: 'b-id' }],
  draft_version: { version: '1' },
};

function app(onGenerate?: (messages: any, options: any) => void) {
  const agent = {
    generate: async (messages: any, options: any) => {
      onGenerate?.(messages, options);
      (options.requestContext.getRaw(RCA_LEDGER_KEY) as EvidenceLedger).record('get_node_definition', JSON.stringify({ node: 'Send Email' }), 'x');
      return { object: answered, steps: [{}] };
    },
  };
  const hono = new Hono();
  hono.use('*', async (c, next) => {
    c.set('mastra' as never, { getAgent: () => agent } as never);
    await next();
  });
  hono.post('/zuper/chat', handleRcaChat);
  return hono;
}

const body = (extra: Record<string, unknown> = {}) =>
  JSON.stringify({
    apiUrl: 'https://us-west-1c.zuperpro.com',
    workflowBuilderUrl: 'https://workflow.zuperpro.com',
    workflowUid: 'wf-route-0001',
    turns: [{ role: 'user', content: 'what comes after On Webhook?' }],
    ...extra,
  });

const post = (hono: Hono, payload: string, token: string | null = 'tok-route') =>
  hono.request('/zuper/chat', { method: 'POST', body: payload, headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) } });

async function withWorkflowFetch<T>(fn: () => T | Promise<T>): Promise<T> {
  const real = globalThis.fetch;
  globalThis.fetch = (async () => new Response(JSON.stringify({ data: workflow }), { status: 200 })) as typeof fetch;
  try {
    return await fn();
  } finally {
    globalThis.fetch = real;
  }
}

test('no token is refused, a bad body is refused before any work', async () => {
  const hono = app();
  assert.equal((await post(hono, body(), null)).status, 401);
  assert.equal((await post(hono, '{nope')).status, 400);
  const badHost = await post(hono, body({ apiUrl: 'http://169.254.169.254' }));
  assert.equal(badHost.status, 400);
  assert.equal(((await badHost.json()) as { error: string }).error, 'HOST_NOT_ALLOWED');
});

test('a chat with no execution is answered from the workflow definition, in the legacy response shape', async () => {
  let seedMessage = '';
  const res = await withWorkflowFetch(() => post(app((messages) => (seedMessage = messages[0].content)), body()));
  assert.equal(res.status, 200);
  const json = (await res.json()) as { ok: boolean; data: { reply: string; suggestions: string[] } };
  assert.equal(json.ok, true);
  assert.equal(json.data.reply, '<p>Send Email runs after Get Job.</p>');
  assert.deepEqual(json.data.suggestions, []);
  assert.match(seedMessage, /MODE: WORKFLOW_QUESTION/);
  assert.match(seedMessage, /"from":"On Webhook","to":"Send Email"/);
});

test('streaming sends progress lines, then the result', async () => {
  const res = await withWorkflowFetch(() => post(app(), body({ stream: true })));
  assert.equal(res.headers.get('content-type'), 'application/x-ndjson; charset=utf-8');
  const events = (await res.text()).trim().split('\n').map((line) => JSON.parse(line) as { type: string; text?: string; data?: { reply: string } });
  assert.deepEqual(events.map((e) => e.type), ['progress', 'progress', 'result']);
  assert.equal(events[1]!.text, 'Reading the configuration of Send Email');
  assert.equal(events[2]!.data?.reply, '<p>Send Email runs after Get Job.</p>');
});

test('an upstream failure is reported as a code, not a stack trace', async () => {
  const real = globalThis.fetch;
  globalThis.fetch = (async () => new Response('no', { status: 401 })) as typeof fetch;
  try {
    const res = await post(app(), body({ workflowUid: 'wf-route-0002' }), 'tok-401');
    assert.equal(res.status, 401);
    assert.equal(((await res.json()) as { error: string }).error, 'API_401');
  } finally {
    globalThis.fetch = real;
  }
});

test('RCA_ENGINE=hydrated serves the chat with the hydrated engine, which hands a definition-only chat to the investigator', async () => {
  const requested: string[] = [];
  const generated: string[] = [];
  const agent = {
    generate: async (messages: any) => {
      generated.push(String(messages[0].content).slice(0, 40));
      return { object: answered, steps: [{}] };
    },
  };
  const hono = new Hono();
  hono.use('*', async (c, next) => {
    c.set('mastra' as never, { getAgent: (name: string) => (requested.push(name), agent) } as never);
    await next();
  });
  hono.post('/zuper/chat', handleRcaChat);

  process.env.RCA_ENGINE = 'hydrated';
  try {
    const res = await withWorkflowFetch(() => post(hono, body({ workflowUid: 'wf-route-0003' }), 'tok-hydrated'));
    assert.equal(res.status, 200);
    assert.equal(((await res.json()) as { data: { reply: string } }).data.reply, '<p>Send Email runs after Get Job.</p>');
  } finally {
    process.env.RCA_ENGINE = 'agent';
  }
  for (const name of ['rcaInvestigatorAgent', 'rcaEvidenceAgent', 'rcaUnderstandAgent']) assert.ok(requested.includes(name), `${name} was wired in`);
  assert.equal(generated.length, 1, 'no execution to hydrate, so only the investigator was asked');
  assert.match(generated[0]!, /^MODE: WORKFLOW_QUESTION/);
});
