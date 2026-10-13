import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { beforeEach, test } from 'node:test';
import { createExecutionContext, type ExecutedWorkflowNode, type ExecutionSummaryResponse } from '../../lib/zuperExecutionApi';
import { projectPath } from '../../knowledge/paths';
import { executionContextFromFixture, loadFixture } from '../fixture';
import { hydrateExecution, resetHydrationCache, type HydratedNode } from '../hydrate';
import { resolveNodeInputs } from '../resolveInput';
import { sanitize } from '../sanitize';
import { makeResolverEnv } from '../seed';

beforeEach(() => resetHydrationCache());

// ---- a synthetic execution in the real node-data shape ------------------------------------------------

const wrap = (name: string, data: unknown, extra: Record<string, unknown> = {}) => ({ node: { node_name: name }, data, ...extra });
const envelope = (uid: string, status: string, input: unknown, executionData: unknown, iteration: number | null = null) => ({
  node_execution: { node_uid: uid, status, input_data: input, execution_data: executionData, current_iteration: iteration, total_iterations: null, remarks: null },
});
const expr = (value: string) => ({ type: 'EXPRESSION', value });

interface Spec {
  nodes: Array<{ uid: string; name: string; key?: string; form_fields?: Record<string, unknown> }>;
  /** Execution order, one entry per node RUN (a loop body node appears once per iteration). */
  runs: Array<{ uid: string; status?: string; iteration?: number | null; is_loop?: boolean; total?: number | null }>;
  /** `uid` or `uid:iteration` -> raw node-data payload. A missing key makes the fetch fail (API_500). */
  data: Record<string, unknown>;
  failed?: string;
  status?: string;
  company?: string;
  version?: string;
}

function build(spec: Spec) {
  const calls: string[] = [];
  let active = 0;
  let peak = 0;
  const nodes: ExecutedWorkflowNode[] = spec.nodes.map((n) => ({
    node_uid: n.uid,
    action_name: n.name,
    node_name: n.key ?? 'code',
    action_key: n.key ?? 'code',
    form_fields: n.form_fields ?? {},
  }));
  const summary: ExecutionSummaryResponse = {
    workflow_execution: {
      execution_uid: 'exec-1',
      workflow_uid: 'wf-1',
      status: spec.status ?? (spec.failed ? 'FAILED' : 'COMPLETED'),
      failed_node_uid: spec.failed,
      workflow_data: {
        workflow_uid: 'wf-1',
        workflow_name: 'Test workflow',
        company_id: spec.company ?? 'co-1',
        version_id: spec.version ?? 'v1',
        nodes,
        connections: spec.nodes.slice(1).map((n, i) => ({ source: spec.nodes[i]!.uid, target: n.uid })),
      },
    },
    node_execution: spec.runs.map((r) => ({
      node_uid: r.uid,
      status: r.status ?? (r.uid === spec.failed ? 'FAILED' : 'COMPLETED'),
      current_iteration: r.iteration ?? null,
      total_iterations: r.total ?? null,
      output_value: null,
      is_loop: r.is_loop ?? false,
    })),
  };
  const ctx = createExecutionContext(summary, async (uid, iteration) => {
    const key = iteration === undefined ? uid : `${uid}:${iteration}`;
    calls.push(key);
    active++;
    peak = Math.max(peak, active);
    await new Promise((resolve) => setImmediate(resolve));
    active--;
    const value = spec.data[key];
    if (value === undefined) throw new Error('API_500');
    return value;
  });
  return { ctx, calls, peak: () => peak };
}

const node = (h: Awaited<ReturnType<typeof hydrateExecution>>, name: string): HydratedNode => {
  const found = h.workflow.nodes.find((n) => n.action_name === name);
  assert.ok(found, `node ${name}`);
  return found;
};

/** hook -> job -> mail, where mail reads job's customer email. */
function chain(overrides: Partial<Spec> = {}, jobOut: unknown = { data: { job_uid: 'job-1', customer: { email: 'a@b.com' } }, status: 200 }): Spec {
  const hookOut = wrap('On Webhook', { body: { job_uid: 'job-1' } });
  return {
    nodes: [
      { uid: 'u-hook', name: 'On Webhook', key: 'webhook' },
      { uid: 'u-job', name: 'Get Job', key: 'zuper_get_record', form_fields: { job_uid: expr("{{$.getLatestNodeData('On Webhook')['data']['body']['job_uid']}}") } },
      { uid: 'u-mail', name: 'Send Email', key: 'zuper_email', form_fields: { to: expr("{{$.getLatestNodeData('Get Job')['data']['data']['customer']['email']}}"), subject: { type: 'FIXED', value: 'Hi' } } },
    ],
    runs: [{ uid: 'u-hook' }, { uid: 'u-job' }, { uid: 'u-mail' }],
    data: {
      'u-hook': envelope('u-hook', 'COMPLETED', null, hookOut),
      'u-job': envelope('u-job', 'COMPLETED', hookOut, wrap('Get Job', jobOut)),
      'u-mail': envelope('u-mail', 'COMPLETED', wrap('Get Job', jobOut), wrap('Send Email', { sent: true })),
    },
    ...overrides,
  };
}

// ---- values and references ------------------------------------------------------------------------------

test('a reference carries the real value at its path, untruncated', async () => {
  const big = Array.from({ length: 500 }, (_, i) => ({ i, label: `item-${i}` }));
  const { ctx } = build(chain({}, { data: { job_uid: 'job-1', customer: { email: 'a@b.com' }, items: big }, status: 200 }));
  (ctx.workflowData!.nodes![2]!.form_fields as Record<string, unknown>).items = expr("{{$.getLatestNodeData('Get Job')['data']['data']['items']}}");
  const h = await hydrateExecution(ctx);

  const refs = node(h, 'Send Email').references_node_data;
  const email = refs["$.getLatestNodeData('Get Job')['data']['data']['customer']['email']"]!;
  assert.equal(email.status, 'resolved');
  assert.equal(email.value, 'a@b.com');
  assert.deepEqual(email.from_node, { uid: 'u-job', name: 'Get Job' });
  assert.deepEqual(email.used_in, ['to.value']);
  const items = refs["$.getLatestNodeData('Get Job')['data']['data']['items']"]!;
  assert.equal((items.value as unknown[]).length, 500, 'stage 2 never trims');
});

test('nodes that ran come first, in execution order, then the ones that did not', async () => {
  const spec = chain();
  spec.nodes.push({ uid: 'u-skip', name: 'Never Ran', form_fields: { x: expr("{{$.getLatestNodeData('Get Job')['data']}}") } });
  spec.nodes = [spec.nodes[3]!, spec.nodes[2]!, spec.nodes[1]!, spec.nodes[0]!];
  const { ctx } = build(spec);
  const h = await hydrateExecution(ctx);
  assert.deepEqual(h.workflow.nodes.map((n) => n.action_name), ['On Webhook', 'Get Job', 'Send Email', 'Never Ran']);
  assert.deepEqual(h.execution_flow.map((f) => f.name), ['On Webhook', 'Get Job', 'Send Email']);
});

test('a node that did not run lists what it would have read, and costs no fetch', async () => {
  const spec = chain();
  spec.nodes.push({ uid: 'u-skip', name: 'Never Ran', form_fields: { x: expr("{{$.getLatestNodeData('Get Job')['data']['data']}}") } });
  const { ctx, calls } = build(spec);
  const h = await hydrateExecution(ctx);
  const skipped = node(h, 'Never Ran');
  assert.deepEqual(skipped.execution, { executed: false });
  const entry = skipped.references_node_data["$.getLatestNodeData('Get Job')['data']['data']"]!;
  assert.equal(entry.status, 'skipped_node_not_run');
  assert.equal(entry.value, undefined);
  assert.ok(!calls.includes('u-skip'));
});

test('the same expression in two fields is one entry listing both; a Code input names its alias', async () => {
  const spec = chain();
  const same = "{{$.getLatestNodeData('Get Job')['data']['data']['job_uid']}}";
  spec.nodes[2]!.form_fields = {
    a: expr(same),
    b: expr(same),
    inputs: { type: 'FIXED', value: [{ node: 'Get Job', variable_name: 'getJob', source_type: 'NODE', expression: "{{$.getLatestNodeData('Get Job')['data']['data']}}" }] },
  };
  const { ctx } = build(spec);
  const refs = node(await hydrateExecution(ctx), 'Send Email').references_node_data;
  assert.equal(Object.keys(refs).length, 2);
  assert.deepEqual(refs[same.slice(2, -2)]!.used_in, ['a.value', 'b.value']);
  const code = refs["$.getLatestNodeData('Get Job')['data']['data']"]!;
  assert.deepEqual(code.used_as, ['$input.getJob']);
  assert.deepEqual(code.used_in, ['inputs.value[0].expression']);
});

test('statuses: a FIXED field is not evaluated, a variable has no value, a dynamic bracket is flagged', async () => {
  const spec = chain();
  spec.nodes[2]!.form_fields = {
    fixed: { type: 'FIXED', value: "{{$.getLatestNodeData('Get Job')['data']}}" },
    variable: expr("{{$.getVariable('BASE_URL')}}"),
    dynamic: expr("{{$.getNodeData('Get Job')[$.getCurrentLoopIndex()]['data']}}"),
  };
  const { ctx } = build(spec);
  const refs = Object.values(node(await hydrateExecution(ctx), 'Send Email').references_node_data);
  const byKind = (k: string) => refs.find((r) => r.kind === k)!;
  assert.equal(refs.find((r) => r.status === 'not_evaluated')!.value, undefined);
  assert.equal(byKind('variable').status, 'variable');
  assert.equal(byKind('variable').value, undefined, 'a variable value is never exposed');
  assert.equal(byKind('all_runs').status, 'dynamic');
});

test('a broken path says where it broke and which keys exist', async () => {
  const spec = chain();
  spec.nodes[2]!.form_fields = { to: expr("{{$.getLatestNodeData('Get Job')['data']['customer']['email']}}") };
  const { ctx } = build(spec);
  const [ref] = Object.values(node(await hydrateExecution(ctx), 'Send Email').references_node_data);
  assert.equal(ref!.status, 'undefined');
  assert.ok(ref!.failed_at);
  assert.ok(ref!.available_keys?.includes('data'), 'points at the right key');
  assert.equal(ref!.value, undefined);
});

test('source_node and $item read the producing node', async () => {
  const spec = chain();
  spec.nodes[1]!.form_fields = { module: { type: 'FIXED', value: 'JOB' }, source_node: { type: 'FIXED', value: 'u-hook' } };
  spec.nodes[2]!.form_fields = { to: expr('{{$item.data.data.customer.email}}') };
  // source_node needs a uid-shaped value to be recognised
  const uid = '615d972b-2acf-4f0e-9090-62ddcddc50b2';
  spec.nodes[0]!.uid = uid;
  spec.runs[0]!.uid = uid;
  spec.data[uid] = spec.data['u-hook'];
  spec.nodes[1]!.form_fields!.source_node = { type: 'FIXED', value: uid };
  const { ctx } = build(spec);
  const h = await hydrateExecution(ctx);

  const source = Object.values(node(h, 'Get Job').references_node_data)[0]!;
  assert.equal(source.kind, 'source_node');
  assert.equal(source.status, 'resolved');
  assert.deepEqual(source.value, { body: { job_uid: 'job-1' } }, "the producing node's output");
  const previous = Object.values(node(h, 'Send Email').references_node_data)[0]!;
  assert.equal(previous.kind, 'previous');
  assert.equal(previous.from_node?.name, 'Get Job');
  assert.equal(previous.value, 'a@b.com');
});

// ---- failures and gaps ----------------------------------------------------------------------------------

test('missing node data becomes one gap per node, never a throw', async () => {
  const spec = chain();
  delete spec.data['u-job'];
  const { ctx } = build(spec);
  const h = await hydrateExecution(ctx);

  assert.equal(node(h, 'Get Job').execution.unavailable, 'API_500');
  const ref = Object.values(node(h, 'Send Email').references_node_data)[0]!;
  assert.equal(ref.status, 'fetch_failed');
  assert.equal(ref.value, undefined);
  assert.deepEqual(h.data_gaps, ['Get Job: this node ran, but its data could not be loaded (API_500)']);
});

test('the failed node keeps its error, status, resolved fields and what it received', async () => {
  const spec = chain({ failed: 'u-mail' });
  const jobOut = wrap('Get Job', { data: { job_uid: 'job-1', customer: null }, status: 200 });
  spec.data['u-job'] = envelope('u-job', 'COMPLETED', null, jobOut);
  spec.data['u-mail'] = envelope('u-mail', 'FAILED', jobOut, {
    node: { node_name: 'Send Email' },
    error: '<html><body><pre>Cannot POST /mail</pre></body></html>',
    status: 404,
    form_fields: { to: { type: 'EXPRESSION', value: 'x' }, subject: { type: 'FIXED', value: 'Hi' }, body: { type: 'FIXED', value: '' } },
  });
  const { ctx } = build(spec);
  const mail = node(await hydrateExecution(ctx), 'Send Email').execution;
  assert.equal(mail.status, 'FAILED');
  assert.equal(mail.http_status, 404);
  assert.equal(mail.error, 'Cannot POST /mail', 'an HTML error page is reduced to its text');
  assert.deepEqual(mail.resolved_fields, { to: 'x', subject: 'Hi' }, 'real values, empty defaults left out');
  assert.deepEqual((mail.input_received as { data: unknown }).data, { data: { job_uid: 'job-1', customer: null }, status: 200 });
});

// ---- output: shown once ---------------------------------------------------------------------------------

test('an output appears under the nodes that read it, or on the node when nothing does', async () => {
  const h = await hydrateExecution(build(chain()).ctx);
  const job = node(h, 'Get Job').execution;
  assert.deepEqual(job.output_read_by, ['Send Email']);
  assert.equal(job.output, undefined, 'already in Send Email.references_node_data');
  assert.deepEqual(node(h, 'Send Email').execution.output, { sent: true }, 'nothing reads it, so it is here');
});

test('a node that passes its input through does not repeat it', async () => {
  const spec = chain();
  const job = wrap('Get Job', { data: { job_uid: 'job-1' } });
  spec.nodes.push({ uid: 'u-if', name: 'If/Else', key: 'if_else' });
  spec.runs.push({ uid: 'u-if' });
  spec.data['u-if'] = envelope('u-if', 'COMPLETED', job, { ...job, output_value: true });
  const exec = node(await hydrateExecution(build(spec).ctx), 'If/Else').execution;
  assert.equal(exec.output_same_as_input, true);
  assert.equal(exec.output, undefined);
  assert.equal(exec.output_value, true);
});

// ---- loops ----------------------------------------------------------------------------------------------

function loopSpec(): Spec {
  const loopOut = (i: number) => wrap('Loop', { item: `row-${i}` });
  return {
    nodes: [
      { uid: 'u-loop', name: 'Loop', key: 'loop' },
      { uid: 'u-body', name: 'Create', key: 'http_request', form_fields: { url: expr("{{$.getLatestNodeData('Loop')['data']['item']}}") } },
    ],
    runs: [
      { uid: 'u-loop', iteration: 0, is_loop: true, total: 2 },
      { uid: 'u-body', iteration: 0 },
      { uid: 'u-loop', iteration: 1, is_loop: true, total: 2 },
      { uid: 'u-body', iteration: 1 },
      { uid: 'u-loop', iteration: 2, is_loop: true, total: 2 },
    ],
    data: {
      'u-loop:0': envelope('u-loop', 'COMPLETED', null, loopOut(0), 0),
      'u-loop:1': envelope('u-loop', 'COMPLETED', null, loopOut(1), 1),
      'u-loop:2': envelope('u-loop', 'COMPLETED', null, wrap('Loop', { done: true }), 2),
      'u-body:0': envelope('u-body', 'COMPLETED', loopOut(0), wrap('Create', { id: 'a' }), 0),
      'u-body:1': envelope('u-body', 'COMPLETED', loopOut(1), wrap('Create', { id: 'b' }), 1),
    },
  };
}

test('a loop body shows its last iteration and reads the loop node at the same one', async () => {
  const h = await hydrateExecution(build(loopSpec()).ctx);
  const body = node(h, 'Create');
  assert.equal(body.execution.runs, 2);
  assert.deepEqual(body.execution.iterations, [0, 1]);
  assert.equal(body.execution.iteration_shown, 1);
  const ref = Object.values(body.references_node_data)[0]!;
  assert.equal(ref.iteration, 1);
  assert.equal(ref.value, 'row-1');
  assert.equal(node(h, 'Loop').execution.is_loop, true);
});

test('a loop body that failed shows the iteration it failed in', async () => {
  const spec = loopSpec();
  spec.failed = 'u-body';
  spec.runs[1]!.status = 'FAILED';
  spec.runs = spec.runs.slice(0, 2);
  const body = node(await hydrateExecution(build(spec).ctx), 'Create');
  assert.deepEqual(body.execution.failed_iterations, [0]);
  assert.equal(body.execution.iteration_shown, 0);
  assert.equal(Object.values(body.references_node_data)[0]!.value, 'row-0');
});

// ---- cost: fetches, concurrency, cache ------------------------------------------------------------------

test('every node is fetched once, however many nodes read it', async () => {
  const spec = chain();
  spec.nodes[2]!.form_fields = { a: expr("{{$.getLatestNodeData('Get Job')['data']['data']['job_uid']}}"), b: expr("{{$.getLatestNodeData('On Webhook')['data']['body']}}") };
  spec.nodes[1]!.form_fields = { b: expr("{{$.getLatestNodeData('On Webhook')['data']['body']}}") };
  const { ctx, calls } = build(spec);
  await hydrateExecution(ctx);
  assert.deepEqual([...calls].sort(), ['u-hook', 'u-job', 'u-mail']);
});

test('concurrency is bounded', async () => {
  const names = Array.from({ length: 12 }, (_, i) => `n${i}`);
  const spec: Spec = {
    nodes: names.map((n) => ({ uid: `u-${n}`, name: n })),
    runs: names.map((n) => ({ uid: `u-${n}` })),
    data: Object.fromEntries(names.map((n) => [`u-${n}`, envelope(`u-${n}`, 'COMPLETED', null, wrap(n, { v: 1 }))])),
  };
  const run = build(spec);
  await hydrateExecution(run.ctx, { concurrency: 3 });
  assert.ok(run.peak() <= 3, `peak ${run.peak()}`);
  assert.ok(run.peak() > 1, 'and it does run in parallel');
});

test('a finished execution is hydrated once; a running one, one with gaps, and a bypass are not served from cache', async () => {
  const done = build(chain());
  const first = await hydrateExecution(done.ctx);
  const callsAfterFirst = done.calls.length;
  assert.equal(await hydrateExecution(done.ctx), first);
  assert.equal(done.calls.length, callsAfterFirst, 'no fetch on the second call');
  assert.notEqual(await hydrateExecution(done.ctx, { bypassCache: true }), first);

  resetHydrationCache();
  const running = build(chain({ status: 'RUNNING' }));
  const a = await hydrateExecution(running.ctx);
  assert.notEqual(await hydrateExecution(running.ctx), a);

  resetHydrationCache();
  const spec = chain();
  delete spec.data['u-job'];
  const gappy = build(spec);
  const g = await hydrateExecution(gappy.ctx);
  assert.notEqual(await hydrateExecution(gappy.ctx), g, 'a partial result is retried, not kept');
});

test('another company with the same execution uid is not served this result', async () => {
  const a = await hydrateExecution(build(chain({ company: 'co-A' })).ctx);
  const b = await hydrateExecution(build(chain({ company: 'co-B' })).ctx);
  assert.notEqual(a, b);
});

test('an already-aborted request is rejected before any work', async () => {
  const run = build(chain());
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(hydrateExecution(run.ctx, { signal: controller.signal }));
  assert.equal(run.calls.length, 0);
});

// ---- secrets --------------------------------------------------------------------------------------------

test('credentials are redacted; configuration and customer data are not', async () => {
  const configOut = wrap('Config', { API_KEY: 'sk-live-SECRET', base: 'https://x.test', customer_email: 'owner@acme.com' });
  const spec: Spec = {
    nodes: [
      { uid: 'u-cfg', name: 'Config' },
      {
        uid: 'u-http',
        name: 'Call',
        key: 'http_request',
        form_fields: {
          key: expr("{{$.getLatestNodeData('Config')['data']['API_KEY']}}"),
          all: expr("{{$.getLatestNodeData('Config')['data']}}"),
          email: expr("{{$.getLatestNodeData('Config')['data']['customer_email']}}"),
          password: { type: 'FIXED', value: 'hunter2-in-definition' },
        },
      },
    ],
    runs: [{ uid: 'u-cfg' }, { uid: 'u-http' }],
    data: {
      'u-cfg': envelope('u-cfg', 'COMPLETED', null, configOut),
      'u-http': envelope('u-http', 'COMPLETED', configOut, {
        node: { node_name: 'Call' },
        status: 200,
        form_fields: {
          url: { type: 'FIXED', value: 'https://x.test' },
          password: { type: 'FIXED', value: 'hunter2' },
          authentication: { type: 'FIXED', value: 'HEADER_AUTH' },
          header_parameters: [{ header_key: { type: 'FIXED', value: 'x-api-key' }, header_value: { type: 'EXPRESSION', value: 'real-header-secret' } }],
          note: { type: 'FIXED', value: 'sent with Bearer abcdefghijklmnop1234' },
        },
      }),
    },
  };
  const h = await hydrateExecution(build(spec).ctx);
  const text = JSON.stringify(h);
  for (const leaked of ['sk-live-SECRET', 'hunter2', 'hunter2-in-definition', 'real-header-secret', 'abcdefghijklmnop1234']) assert.ok(!text.includes(leaked), `${leaked} leaked`);

  const call = node(h, 'Call');
  const refs = call.references_node_data;
  assert.equal(refs["$.getLatestNodeData('Config')['data']['API_KEY']"]!.value, '[REDACTED]', 'a value read from a secret key');
  assert.equal((refs["$.getLatestNodeData('Config')['data']"]!.value as Record<string, unknown>).API_KEY, '[REDACTED]', 'a secret key inside a larger value');
  assert.equal(refs["$.getLatestNodeData('Config')['data']['customer_email']"]!.value, 'owner@acme.com', 'an email is evidence');
  assert.equal((refs["$.getLatestNodeData('Config')['data']"]!.value as Record<string, unknown>).base, 'https://x.test');
  assert.equal(call.execution.resolved_fields!.authentication, 'HEADER_AUTH', 'which auth scheme is configuration, not a secret');
  assert.equal(call.execution.resolved_fields!.password, '[REDACTED]');
});

test('sanitize: credentials-only mode keeps emails and phones, keepKeys keeps configuration', () => {
  const input = { email: 'a@b.com', phone: '555-0100', note: 'mail a@b.com', token: 'abc', authentication: 'NONE', auth_header: 'Bearer abcdefghijklmnop1234' };
  const out = sanitize(input, { pii: false, keepKeys: /^authentication$/i });
  assert.equal(out.email, 'a@b.com');
  assert.equal(out.phone, '555-0100');
  assert.equal(out.note, 'mail a@b.com');
  assert.equal(out.token, '[REDACTED]');
  assert.equal(out.authentication, 'NONE');
  assert.equal(out.auth_header, '[REDACTED]');
  // default behaviour is unchanged
  const full = sanitize(input);
  assert.equal(full.email, 'redacted-1@example.test');
  assert.equal(full.phone, '[REDACTED_PHONE]');
  assert.equal(full.authentication, '[REDACTED]');
});

test('the result is a copy: node data held by the context is never edited', async () => {
  const spec = chain();
  spec.nodes[2]!.form_fields = { to: expr("{{$.getLatestNodeData('Get Job')['data']['data']['customer']}}") };
  const { ctx } = build(spec);
  const before = JSON.stringify(spec.data);
  const h = await hydrateExecution(ctx);

  const mail = node(h, 'Send Email');
  const read = Object.values(mail.references_node_data)[0]!.value as Record<string, unknown>;
  assert.equal(typeof read, 'object', 'the test must mutate an object, not a string');
  read.mutated = true;
  (mail.execution.output as Record<string, unknown>).mutated = true;
  assert.equal(JSON.stringify(spec.data), before, 'the cached node data is untouched');
});

// ---- resolveNodeInputs keeps its default output ---------------------------------------------------------

test('resolveNodeInputs returns rawValue only when asked', async () => {
  const { ctx } = build(chain());
  const env = makeResolverEnv(ctx);
  const fields = ctx.findNode('u-mail')!.form_fields;
  const plain = await resolveNodeInputs('u-mail', fields, env);
  assert.ok(plain.every((r) => !('rawValue' in r)), 'default output is unchanged');
  const kept = await resolveNodeInputs('u-mail', fields, env, undefined, { keepValue: true });
  assert.equal(kept[0]!.rawValue, 'a@b.com');
  assert.equal(kept[0]!.value, plain[0]!.value, 'the preview is the same either way');
});

// ---- real captured executions (skipped when the fixtures are absent) ------------------------------------

const FAILED = projectPath('fixtures', 'rca', 'update-appointment-404.json');
const LOOP = projectPath('fixtures', 'rca', 'loop-appointments-completed.json');

test('real failed execution: the 404 is traceable to the URL the Code node built', { skip: existsSync(FAILED) ? false : 'fixture not present' }, async () => {
  const h = await hydrateExecution(executionContextFromFixture(loadFixture(FAILED)));
  assert.equal(h.execution.status, 'FAILED');
  assert.equal(h.workflow.nodes.length, 16);
  assert.equal(h.execution_flow.length, 14);

  const failed = node(h, 'update Appointment');
  assert.equal(failed.execution.http_status, 404);
  assert.match(String(failed.execution.error), /Cannot PUT \/api\/appointments/);
  const url = failed.references_node_data["$.getLatestNodeData('Construct')['data']['data']['appointment_update_payload']['url']"]!;
  assert.equal(url.status, 'resolved');
  assert.equal(url.value, 'https://us-east-1.zuperpro.com/api/appointments');
  assert.equal(url.from_node?.name, 'Construct');
  assert.ok(failed.execution.input_received, 'what the failed node received');

  const construct = node(h, 'Construct');
  const aliases = Object.values(construct.references_node_data).flatMap((r) => r.used_as ?? []).sort();
  assert.deepEqual(aliases, ['$input.getCategories', '$input.getConfig', '$input.getJob', '$input.getServiceTasks']);
  const variables = Object.values(construct.references_node_data).filter((r) => r.kind === 'variable');
  assert.ok(variables.length > 0 && variables.every((r) => r.value === undefined));

  assert.equal(node(h, 'If/Else 1').execution.executed, false);
  assert.ok(!JSON.stringify(h).includes('"API_KEY":"'), 'no credential values');
});

test('real loop execution: the body reads the loop node at its own iteration', { skip: existsSync(LOOP) ? false : 'fixture not present' }, async () => {
  const h = await hydrateExecution(executionContextFromFixture(loadFixture(LOOP)));
  const body = node(h, 'create Appointment');
  assert.deepEqual(body.execution.iterations, [0, 1]);
  assert.equal(body.execution.iteration_shown, 1);
  const refs = Object.values(body.references_node_data);
  assert.ok(refs.length > 0 && refs.every((r) => r.iteration === 1 && r.status === 'resolved'));
  assert.ok(h.data_gaps.length > 0, 'the capture has no data for most nodes, and says so');
});
