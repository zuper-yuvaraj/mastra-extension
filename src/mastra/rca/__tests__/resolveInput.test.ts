import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveNodeInputs, toWrapper, walkPath, type ResolverEnv } from '../resolveInput';

// Wrapper shape per knowledge-base/workflow-builder/expressions_reference.json: {node, data: payload}.
const wrap = (name: string, data: unknown) => ({ node: { node_name: name }, data });

function makeEnv(nodes: Record<string, { name: string; data?: unknown; upstream?: string }>): ResolverEnv {
  const byName = new Map(Object.entries(nodes).map(([uid, n]) => [n.name.toLowerCase(), uid]));
  const chain = (uid: string, hops: number): string | undefined => {
    let current: string | undefined = uid;
    for (let i = 0; i < hops && current; i++) current = nodes[current]?.upstream;
    return current;
  };
  return {
    uidByName: (name) => byName.get(name.toLowerCase()),
    nameByUid: (uid) => nodes[uid]?.name,
    previousNodeUid: (uid) => chain(uid, 1),
    recentNodeUid: (uid, n) => chain(uid, n),
    getNodeExecutionData: (uid) => (nodes[uid]?.data === undefined ? undefined : Promise.resolve(nodes[uid]!.data)),
  };
}

const resolve = (expr: string, env: ResolverEnv, type = 'EXPRESSION') =>
  resolveNodeInputs('self', { f: { type, value: expr } }, env);

test('resolves a value through the wrapper (.data.data for Get Record)', async () => {
  const env = makeEnv({
    up: { name: 'Get Record', data: wrap('zuper_get_record', { data: { job_title: 'Fix AC' } }) },
  });
  const [r] = await resolve("{{ $.getLatestNodeData('Get Record').data.data.job_title }}", env);
  assert.equal(r?.status, 'resolved');
  assert.equal(r?.value, '"Fix AC"');
  assert.equal(r?.target?.name, 'Get Record');
});

test('omitting .data reports the missing key and what keys do exist', async () => {
  const env = makeEnv({ up: { name: 'On Webhook', data: wrap('webhook', { body: { job_uid: 'j1' } }) } });
  const [r] = await resolve("{{ $.getLatestNodeData('On Webhook').body.job_uid }}", env);
  assert.equal(r?.status, 'undefined');
  assert.equal(r?.segment, '.body');
  assert.ok(r?.availableKeys?.includes('data'), 'points at the .data wrapper key');
});

test('single data where the node needs data.data is reported at the right segment', async () => {
  const env = makeEnv({ up: { name: 'Get Record', data: wrap('zuper_get_record', { data: { job_title: 'x' } }) } });
  const [r] = await resolve("{{ $.getLatestNodeData('Get Record').data.job_title }}", env);
  assert.equal(r?.status, 'undefined');
  assert.equal(r?.segment, '.job_title');
  assert.deepEqual(r?.availableKeys, ['data']);
});

test('null parent is reported as null, not as a generic failure', async () => {
  const env = makeEnv({ up: { name: 'Get Job', data: wrap('zuper_get_record', { data: { customer: null } }) } });
  const [r] = await resolve("{{ $.getLatestNodeData('Get Job').data.data.customer.customer_email }}", env);
  assert.equal(r?.status, 'null');
  assert.equal(r?.failedAt, '.data.data.customer');
});

test('a resolved null value is status null with value "null"', async () => {
  const env = makeEnv({ up: { name: 'Get Job', data: wrap('x', { email: null }) } });
  const [r] = await resolve("{{ $.getLatestNodeData('Get Job').data.email }}", env);
  assert.equal(r?.status, 'null');
  assert.equal(r?.value, 'null');
});

test('unknown node name', async () => {
  const [r] = await resolve("{{ $.getLatestNodeData('Get Jbo').data.x }}", makeEnv({ up: { name: 'Get Job', data: wrap('x', {}) } }));
  assert.equal(r?.status, 'target_unknown');
  assert.match(r?.note ?? '', /misspelled|renamed/);
});

test('node that did not run in this execution', async () => {
  const [r] = await resolve("{{ $.getLatestNodeData('Branch B').data.x }}", makeEnv({ up: { name: 'Branch B' } }));
  assert.equal(r?.status, 'target_not_run');
});

test('FIXED field is not evaluated', async () => {
  const [r] = await resolve("{{ $.getLatestNodeData('A').data.x }}", makeEnv({ up: { name: 'A', data: wrap('x', { x: 1 }) } }), 'FIXED');
  assert.equal(r?.status, 'not_evaluated');
});

test('$item resolves to the closest upstream node', async () => {
  const env = makeEnv({
    a: { name: 'A', data: wrap('x', { v: 'from A' }) },
    self: { name: 'Self', upstream: 'a' },
  });
  const [r] = await resolve('{{ $item.data.v }}', env);
  assert.equal(r?.status, 'resolved');
  assert.equal(r?.target?.name, 'A');
});

test('getNodeData picks the selected run; a missing run is reported', async () => {
  const runs = [wrap('x', { v: 'first' }), wrap('x', { v: 'second' })];
  const env = makeEnv({ up: { name: 'Loop Body', data: runs } });
  const second = await resolve("{{ $.getNodeData('Loop Body')[1].data.v }}", env);
  assert.equal(second[0]?.value, '"second"');
  const missing = await resolve("{{ $.getNodeData('Loop Body')[5].data.v }}", env);
  assert.equal(missing[0]?.status, 'undefined');
  assert.match(missing[0]?.note ?? '', /2 run/);
});

test('loop-index selector is reported as dynamic, not guessed', async () => {
  const env = makeEnv({ up: { name: 'Loop Body', data: [wrap('x', { v: 1 })] } });
  const [r] = await resolve("{{ $.getNodeData('Loop Body')[$.getCurrentLoopIndex()].data.v }}", env);
  assert.equal(r?.status, 'dynamic');
});

test('numeric string key indexes an array (custom_fields["14"])', async () => {
  const env = makeEnv({ up: { name: 'Get Job', data: wrap('x', { custom_fields: [{ label: 'a' }, { label: 'b' }] }) } });
  const [r] = await resolve("{{ $.getLatestNodeData('Get Job').data.custom_fields['1'].label }}", env);
  assert.equal(r?.value, '"b"');
});

test('variables are reported, not resolved', async () => {
  const [r] = await resolve('{{ variable.zuper_api_key }}', makeEnv({}));
  assert.equal(r?.status, 'variable');
});

test('payload that is not a wrapper is flagged as an assumption', async () => {
  const env = makeEnv({ up: { name: 'A', data: { status: 'COMPLETED', output: { x: 1 } } } });
  const [r] = await resolve("{{ $.getLatestNodeData('A').data.output.x }}", env);
  assert.equal(r?.status, 'resolved');
  assert.equal(r?.shapeAssumed, true);
});

test('toWrapper finds execution_data wherever the API nests it', () => {
  const wrapper = { node: {}, data: { a: 1 } };
  assert.equal(toWrapper({ status: 'ok', execution_data: wrapper }).wrapper, wrapper);
  assert.equal(toWrapper({ data: { execution_data: wrapper } }).wrapper, wrapper);
  assert.equal(toWrapper(wrapper).assumed, false);
  assert.equal(toWrapper({ foo: 1 }).assumed, true);
});

test('walkPath type mismatch on a primitive', () => {
  const r = walkPath({ data: 'text' }, [
    { kind: 'key', key: 'data' },
    { kind: 'key', key: 'length2' },
  ]);
  assert.equal(r.status, 'type_mismatch');
});
