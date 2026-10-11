import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { projectPath } from '../../knowledge/paths';
import { RCA_PACK_CHARS } from '../config';
import { executionContextFromFixture, loadFixture } from '../fixture';
import { hydrateExecution, type HydratedExecution, type HydratedNode } from '../hydrate';
import { buildPack, markRepeats, PACK_LEGEND, slimNode } from '../hydratedPack';
import { trimHydrated } from '../trim';
import type { Understanding } from '../understand';

const item = (i: number) => ({ category_uid: `uid-${i}`, category_name: `Category ${i}`, notes: 'x'.repeat(120), status: 'ACTIVE' });
const list = (n: number) => Array.from({ length: n }, (_, i) => item(i));

interface Ref {
  value: unknown;
  from: string;
  iteration?: number;
  kind?: string;
}

function node(name: string, refs: Record<string, Ref> = {}, extra: Record<string, unknown> = {}): HydratedNode {
  return {
    node_uid: `uid-${name}`,
    id: `id-${name}`,
    action_name: name,
    action_key: 'code',
    node_name: 'code',
    form_fields: { code: { type: 'FIXED', value: 'return 1;' } },
    references_node_data: Object.fromEntries(
      Object.entries(refs).map(([expression, r]) => [
        expression,
        { used_in: ['f.value'], kind: r.kind ?? 'latest', status: 'resolved', from_node: { uid: `uid-${r.from}`, name: r.from }, ...(r.iteration !== undefined ? { iteration: r.iteration } : {}), value: r.value },
      ]),
    ),
    execution: { executed: true, status: 'COMPLETED' },
    ...extra,
  } as HydratedNode;
}

const execution = (nodes: HydratedNode[], connections: Array<Record<string, unknown>> = [], failed: string | null = null): HydratedExecution => ({
  execution: { uid: 'e', status: failed ? 'FAILED' : 'COMPLETED', mode: null, type: null, error_message: null, error_code: null, failed_node_uid: failed },
  workflow: { uid: 'w', name: 'My workflow', description: 'Does things', version: 'v1', version_id: '77', nodes, connections, variable_names: ['BASE_URL'] },
  execution_flow: nodes.map((n, i) => ({ order: i + 1, uid: n.node_uid, name: String(n.action_name), type: 'code', status: 'COMPLETED', runs: 1, total_iterations: null, is_loop: false, failed_iterations: [] })),
  branch_decisions: [],
  data_gaps: [],
});

const understanding: Understanding = { purpose: 'Books the visit.', trigger: 'A job changes status.', groups: [{ name: 'Book', goal: 'Create the appointment.', node_names: ['A'] }] };
const GET = (n: string, path = "['data']['data']") => `$.getLatestNodeData('${n}')${path}`;

/** The JSON that follows a `TITLE (JSON):` line. */
const section = (message: string, title: string): unknown => {
  const header = `\n${title} (JSON):\n`;
  const at = message.indexOf(header);
  assert.ok(at >= 0, `section ${title}`);
  return JSON.parse(message.slice(at + header.length).split('\n')[0]!);
};

// ---- layout -------------------------------------------------------------------------------------------

test('the message holds the question, then the sections in a fixed order, each readable as JSON', () => {
  const { message } = buildPack({ hydrated: execution([node('A')]), understanding, question: 'why did it fail?' });
  const titles = [...message.matchAll(/^([A-Z ]+?)(?: \(JSON\))?:$/gm)].map((m) => m[1]);
  assert.deepEqual(titles, ['WORKFLOW UNDERSTANDING', 'EXECUTION', 'EXECUTION FLOW', 'BRANCH DECISIONS', 'DATA GAPS', 'HYDRATED WORKFLOW']);
  assert.ok(message.startsWith('QUESTION: why did it fail?'));
  assert.deepEqual(section(message, 'WORKFLOW UNDERSTANDING'), understanding);
  assert.equal((section(message, 'HYDRATED WORKFLOW') as { name: string }).name, 'My workflow');
  assert.deepEqual(section(message, 'DATA GAPS'), []);
});

test('an empty question gets the default, a follow-up carries its history, a missing summary says so', () => {
  const { message } = buildPack({ hydrated: execution([node('A')]), understanding: null, question: '   ', history: 'USER: and the loop?' });
  assert.match(message, /^QUESTION: Why did this execution fail\? Find the root cause\./);
  assert.match(message, /CONVERSATION SO FAR:\nUSER: and the loop\?/);
  assert.match(message, /WORKFLOW UNDERSTANDING:\n\(not available/);
  assert.ok(!message.includes('\nDOCS'), 'no docs section without docs');
});

test('documentation excerpts are added when there are any', () => {
  const docs = [{ title: 'Get Job', url: 'https://docs.test/x', text: 'how it works', forNodes: ['A'], via: 'endpoint' as const }];
  const { message } = buildPack({ hydrated: execution([node('A')]), understanding, question: 'q', docs });
  assert.deepEqual(section(message, 'DOCS'), [{ title: 'Get Job', about: ['A'], text: 'how it works' }]);
});

test('the evidence text is the data only: no question, no conversation, no documentation', () => {
  const docs = [{ title: 'Get Job', url: 'https://docs.test/x', text: 'DOC-ONLY-SENTENCE', forNodes: ['A'], via: 'endpoint' as const }];
  const pack = buildPack({ hydrated: execution([node('A')]), understanding, question: 'ASKED-THING', history: 'EARLIER-TURN', docs });
  assert.ok(pack.message.includes('DOC-ONLY-SENTENCE') && pack.message.includes('ASKED-THING') && pack.message.includes('EARLIER-TURN'));
  for (const left of ['DOC-ONLY-SENTENCE', 'ASKED-THING', 'EARLIER-TURN', 'QUESTION:', 'CONVERSATION SO FAR']) assert.ok(!pack.evidence.includes(left), `${left} is not evidence`);
  assert.match(pack.evidence, /^WORKFLOW UNDERSTANDING \(JSON\):/);
  assert.match(pack.evidence, /HYDRATED WORKFLOW \(JSON\):/);
});

test('the editor’s cosmetics are dropped; the configuration and the run data are not', () => {
  const messy = node('A', { [GET('B')]: { value: { ok: true }, from: 'B' } }, {
    position: { x: 1, y: 2 },
    color: { main: '#fff' },
    node_icon: 'https://icon.test/a.svg',
    is_pinned: false,
    is_active: true,
    credentials: { token: 'x' },
    pinned_data: { a: 1 },
    master_node_uid: 'm',
    execution_status: 'NONE',
    node_display_name: 'Code',
    input: 1,
    output: 1,
    description: 'Runs custom code',
  });
  const slim = slimNode(messy);
  assert.deepEqual(Object.keys(slim), ['node_uid', 'name', 'type', 'description', 'form_fields', 'execution', 'references_node_data']);
  assert.deepEqual(slim.form_fields, messy.form_fields);
  assert.equal(slimNode({ ...messy, is_active: false }).is_active, false, 'a disabled node says so');
});

test('connections are named, and an If/Else output carries the result it is taken on', () => {
  const nodes = [node('If/Else'), node('Yes'), node('No')];
  const connections = [
    { source: 'id-If/Else', target: 'uid-Yes', output_value: true },
    { source: 'uid-If/Else', target: 'id-No', output_value: false },
    { source: 'id-Yes', target: 'id-Yes' },
  ];
  const { message } = buildPack({ hydrated: execution(nodes, connections), understanding, question: 'q' });
  const wf = section(message, 'HYDRATED WORKFLOW') as { connections: unknown[] };
  assert.deepEqual(wf.connections, [
    { from: 'If/Else', to: 'Yes', when: true },
    { from: 'If/Else', to: 'No', when: false },
  ]);
});

test('the execution flow lists the nodes in run order with loop and failure detail only where there is some', () => {
  const h = execution([node('A'), node('Loop'), node('B')]);
  h.execution_flow = [
    { order: 1, uid: 'uid-A', name: 'A', type: 'code', status: 'COMPLETED', runs: 1, total_iterations: null, is_loop: false, failed_iterations: [] },
    { order: 2, uid: 'uid-Loop', name: 'Loop', type: 'loop', status: 'COMPLETED', runs: 4, total_iterations: 3, is_loop: true, failed_iterations: [] },
    { order: 3, uid: 'uid-B', name: 'B', type: 'code', status: 'FAILED', runs: 3, total_iterations: null, is_loop: false, failed_iterations: [2] },
  ];
  const flow = section(buildPack({ hydrated: h, understanding, question: 'q' }).message, 'EXECUTION FLOW');
  assert.deepEqual(flow, [
    { order: 1, node: 'A', status: 'COMPLETED' },
    { order: 2, node: 'Loop', status: 'COMPLETED', runs: 4, loop: true, total_iterations: 3 },
    { order: 3, node: 'B', status: 'FAILED', runs: 3, failed_iterations: [2] },
  ]);
});

// ---- repeated data ------------------------------------------------------------------------------------

test('the later copy of large data becomes a pointer to the first; the first keeps the data', () => {
  const big = list(10);
  const h = execution([node('A', { [GET('Src')]: { value: big, from: 'Src' } }), node('B', { [GET('Src')]: { value: big, from: 'Src' } })]);
  const { hydrated, repeats } = markRepeats(h);
  const [a, b] = hydrated.workflow.nodes;
  assert.equal(repeats, 1);
  assert.equal(a!.references_node_data[GET('Src')]!.value, big);
  const later = b!.references_node_data[GET('Src')]!;
  assert.equal('value' in later, false);
  assert.equal(later.same_as, `A > ${GET('Src')}`);
  assert.ok(later.same_as!.split(' > ')[1]! in a!.references_node_data, 'the pointer names a key that exists');
  assert.equal(later.status, 'resolved');
  assert.deepEqual(later.used_in, ['f.value'], 'the rest of the reference is kept');
});

test('small data is repeated, not pointed at; a different iteration or path is different data', () => {
  const small = { id: 1 };
  const big = list(10);
  const h = execution([
    node('A', { [GET('S')]: { value: small, from: 'S' }, [GET('L')]: { value: big, from: 'L', iteration: 0 }, [GET('P')]: { value: big, from: 'P' } }),
    node('B', { [GET('S')]: { value: small, from: 'S' }, [GET('L')]: { value: big, from: 'L', iteration: 1 }, [GET('P', "['data']")]: { value: big, from: 'P' } }),
  ]);
  const { repeats, hydrated } = markRepeats(h);
  assert.equal(repeats, 0);
  assert.equal(hydrated.workflow.nodes[1], h.workflow.nodes[1], 'a node with no repeat is the same object');
});

test('the same path is the same data however it is spelled; a source_node read is not a wrapper read', () => {
  const big = list(10);
  const h = execution([
    node('A', { "$.getNodeData('S')[0]['data']['data']": { value: big, from: 'S', kind: 'all_runs' } }),
    node('B', { [GET('S')]: { value: big, from: 'S' } }),
    node('C', { 'source_node=uid-S': { value: big, from: 'S', kind: 'source_node' } }),
  ]);
  const { hydrated, repeats } = markRepeats(h);
  assert.equal(repeats, 1);
  assert.equal(hydrated.workflow.nodes[1]!.references_node_data[GET('S')]!.same_as, "A > $.getNodeData('S')[0]['data']['data']");
  assert.ok('value' in hydrated.workflow.nodes[2]!.references_node_data['source_node=uid-S']!);
});

test('a whole-wrapper read and a source_node read of the same node are different data, so both are kept', () => {
  const wrapper = { node: { node_name: 'S' }, data: list(10) };
  const output = list(10);
  const h = execution([
    node('A', { "$.getLatestNodeData('S')": { value: wrapper, from: 'S' } }),
    node('B', { 'source_node=uid-S': { value: output, from: 'S', kind: 'source_node' } }),
  ]);
  const { hydrated, repeats } = markRepeats(h);
  assert.equal(repeats, 0);
  assert.equal(hydrated.workflow.nodes[1]!.references_node_data['source_node=uid-S']!.value, output);
});

test('repeats are dropped before trimming, so a node’s budget goes to data that is shown', () => {
  const shared = list(50);
  const own = list(50);
  const h = execution([
    node('A', { [GET('Shared')]: { value: shared, from: 'Shared' } }),
    node('B', { [GET('Shared')]: { value: shared, from: 'Shared' }, [GET('Own')]: { value: own, from: 'Own' } }),
  ]);
  const options = { nodeChars: 12_000, packChars: 1_000_000 };
  assert.ok(trimHydrated(h, options).report.trimmed.length > 0, 'without the pointer, B is over its budget');
  const pack = buildPack({ hydrated: h, understanding, question: 'q', trim: options });
  assert.deepEqual(pack.report.trim.trimmed, []);
  assert.equal(pack.report.repeats, 1);
  const b = (section(pack.message, 'HYDRATED WORKFLOW') as { nodes: Array<{ references_node_data: Record<string, { value?: unknown[] }> }> }).nodes[1]!;
  assert.equal(b.references_node_data[GET('Own')]!.value!.length, 50, 'B’s own data is whole');
});

test('building a pack does not edit the execution it was given', () => {
  const big = list(40);
  const h = execution([node('A', { [GET('S')]: { value: big, from: 'S' } }), node('B', { [GET('S')]: { value: big, from: 'S' } })]);
  const before = JSON.stringify(h);
  buildPack({ hydrated: h, understanding, question: 'q', trim: { nodeChars: 2000, packChars: 1_000_000 } });
  assert.equal(JSON.stringify(h), before);
});

// ---- the legend ---------------------------------------------------------------------------------------

test('the legend explains every marker the pack can contain', () => {
  for (const term of ['references_node_data', 'same_as', '`// `', 'get_node_data', '[REDACTED]', 'output_read_by', 'output_same_as_input', 'input_received', 'EXECUTION FLOW', 'BRANCH DECISIONS', 'DATA GAPS']) {
    assert.ok(PACK_LEGEND.includes(term), `legend mentions ${term}`);
  }
  for (const status of ['undefined', 'null', 'not_evaluated', 'fetch_failed', 'skipped_node_not_run', 'variable']) assert.ok(PACK_LEGEND.includes(status), `legend explains status ${status}`);
});

// ---- the real captured execution ----------------------------------------------------------------------

const FAILED = projectPath('fixtures', 'rca', 'update-appointment-404.json');

test('real failed execution: a pack well under budget that still holds the evidence for the 404', { skip: existsSync(FAILED) ? false : 'fixture not present' }, async () => {
  const full = await hydrateExecution(executionContextFromFixture(loadFixture(FAILED)));
  const pack = buildPack({ hydrated: full, understanding, question: 'why did it fail?' });

  assert.ok(pack.report.chars < JSON.stringify(full).length, 'smaller than the hydrated execution');
  assert.ok(pack.report.chars < RCA_PACK_CHARS);
  assert.ok(pack.report.repeats >= 1, 'the category list is read by two nodes and shown once');
  assert.ok(!pack.report.trim.over_budget);

  // the evidence the answer rests on
  assert.match(pack.message, /Cannot PUT \/api\/appointments/);
  assert.match(pack.message, /"http_status":404/);
  const wf = section(pack.message, 'HYDRATED WORKFLOW') as { nodes: Array<{ name: string; form_fields: unknown; execution: { input_received?: unknown }; references_node_data: Record<string, { value?: unknown }> }> };
  const failed = wf.nodes.find((n) => n.name === 'update Appointment')!;
  assert.ok(Object.values(failed.references_node_data).some((r) => r.value === 'https://us-east-1.zuperpro.com/api/appointments'), 'the URL the node was given');
  assert.ok(failed.execution.input_received, 'what it received');
  const code = wf.nodes.find((n) => n.name === 'Construct')!.form_fields as { code: string };
  assert.match(code.code, /\/appointments`/, 'the Code that built the URL is in the pack, whole');

  // nothing of the editor's
  for (const noise of ['"position"', 'node_icon', '"color"', 'pinned_data', 'master_node_uid']) assert.ok(!pack.message.includes(noise), `${noise} is gone`);
});
