import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { projectPath } from '../../knowledge/paths';
import { executionContextFromFixture, loadFixture } from '../fixture';
import { hydrateExecution, type HydratedExecution, type HydratedNode } from '../hydrate';
import { toWrapper } from '../resolveInput';
import { parseSelector, selectValue } from '../shape';
import { toSelector, trimHydrated, trimValue, type FetchHint } from '../trim';

const item = (i: number) => ({ category_uid: `uid-${i}`, category_name: `Category ${i}`, notes: 'x'.repeat(120), status: 'ACTIVE' });
const list = (n: number) => Array.from({ length: n }, (_, i) => item(i));
const size = (v: unknown) => JSON.stringify(v).length;
const hintFor = (node: string): FetchHint => (path) => ({ node, select: toSelector(path) });

// ---- trimValue --------------------------------------------------------------------------------------------

test('data that fits is returned as it is: same object, nothing noted', () => {
  const value = { data: list(3) };
  const result = trimValue(value, 100_000);
  assert.equal(result.value, value);
  assert.deepEqual(result.notes, []);
});

test('an array keeps its first item, then one comment with the count and the way to fetch the rest', () => {
  const result = trimValue({ data: { value: list(13) } }, 2500, hintFor('GET Categories'));
  const cut = (result.value as { data: { value: unknown[] } }).data.value;
  assert.equal(cut.length, 2);
  assert.deepEqual(cut[0], item(0));
  const marker = cut[1] as string;
  assert.match(marker, /^\/\/ 12 more objects removed \(13 in total\)/);
  assert.match(marker, /\[5\] category_name=Category 5, category_uid=uid-5/, 'the index says which item is which');
  assert.match(marker, /get_node_data\(node "GET Categories", select \["data\.value\[<n>\]"\]\)/);
  assert.deepEqual(result.notes, [{ path: 'data.value', kind: 'array', removed: 12, total: 13 }]);
});

test('only what is needed is cut: the largest array first, the rest left whole', () => {
  const small = list(3);
  const result = trimValue({ small, big: list(40) }, 3000, hintFor('N'));
  const out = result.value as { small: unknown; big: unknown[] };
  assert.equal(out.small, small, 'the small array is the same object');
  assert.equal(out.big.length, 2);
  assert.equal(result.notes.length, 1);
});

test('a nested array is cut once its parent no longer is the largest', () => {
  const rows = Array.from({ length: 6 }, (_, i) => ({ row: i, cells: list(30) }));
  const before = JSON.stringify({ rows });
  const result = trimValue({ rows }, 4000, hintFor('N'));
  assert.equal(JSON.stringify({ rows }), before, 'cutting inside an array does not edit that array');
  const out = result.value as { rows: Array<{ cells: unknown[] }> };
  assert.equal(out.rows.length, 2, 'rows cut first');
  assert.equal(out.rows[0]!.cells.length, 2, 'then the first row’s cells');
  assert.ok(size(result.value) <= 4000 + 400, `size ${size(result.value)}`);
});

test('the index of removed items stays small however long the array is', () => {
  const result = trimValue({ v: list(2000) }, 1000, hintFor('N'));
  const marker = (result.value as { v: unknown[] }).v[1] as string;
  assert.ok(marker.length < 1200, `marker ${marker.length} chars`);
  assert.match(marker, /…and \d+ more/);
  assert.match(marker, /\(2000 in total\)/);
});

test('an array of plain values says values, and shows them', () => {
  const result = trimValue({ ids: Array.from({ length: 400 }, (_, i) => `id-${i}`) }, 500, hintFor('N'));
  const marker = (result.value as { ids: unknown[] }).ids[1] as string;
  assert.match(marker, /399 more values removed/);
  assert.match(marker, /\[1\] id-1 \| \[2\] id-2/);
});

test('without a way to fetch it, the comment says so instead of inventing a call', () => {
  const marker = (trimValue({ v: list(20) }, 800).value as { v: unknown[] }).v[1] as string;
  assert.match(marker, /not available in this pack/);
  assert.ok(!marker.includes('get_node_data'));
});

test('the selector in a comment is valid and points at the removed item', () => {
  const data = { data: { 'custom fields': list(10) } };
  const result = trimValue(data, 800, hintFor('N'));
  const marker = (result.value as { data: { 'custom fields': unknown[] } }).data['custom fields'][1] as string;
  const select = /select \["(.+?)\[<n>\]"\]/.exec(marker)![1]!;
  assert.equal(select, "data['custom fields']", 'a key with a space is quoted');
  assert.ok(parseSelector(`${select}[7]`), 'get_node_data can parse it');
  const got = selectValue({ node: {}, ...data }, `${select}[7]`);
  assert.equal(got.status, 'resolved');
  assert.match(got.value!, /Category 7/);
});

test('a long string is cut to its head, with its full length', () => {
  const result = trimValue({ body: 'A'.repeat(5000) }, 1000, hintFor('N'));
  const body = (result.value as { body: string }).body;
  assert.ok(body.startsWith('A'.repeat(300)));
  assert.match(body, /truncated: 5000 chars in total/);
  assert.ok(body.length < 600);
});

test('a comment is never cut itself, however long it is', () => {
  // 600 items of 40-char names make an index close to its cap; the whole thing is far over a tiny budget
  const result = trimValue({ v: Array.from({ length: 600 }, (_, i) => ({ name: `a-long-name-for-item-number-${i}`, pad: 'p'.repeat(200) })) }, 300, hintFor('N'));
  const marker = (result.value as { v: unknown[] }).v[1] as string;
  assert.ok(marker.startsWith('// '));
  assert.ok(!marker.includes('truncated'), 'the comment is left whole');
  assert.equal(result.notes.filter((n) => n.kind === 'string').length, 0);
});

test('an ordinary record is never cut by its keys; only a huge map is', () => {
  const record = Object.fromEntries(Array.from({ length: 70 }, (_, i) => [`field_${i}`, 'v'.repeat(40)]));
  assert.equal(trimValue({ job: record }, 500).notes.filter((n) => n.kind === 'keys').length, 0, '70 keys is a normal record');
  const map = Object.fromEntries(Array.from({ length: 300 }, (_, i) => [`key_${i}`, 'v'.repeat(40)]));
  const cut = trimValue({ map }, 2000, hintFor('N'));
  assert.equal(cut.notes.filter((n) => n.kind === 'keys').length, 1);
  const out = (cut.value as { map: Record<string, string> }).map;
  assert.match(out['//']!, /240 more keys removed \(300 in total\): key_60, key_61/);
});

test('when nothing more can be cut it stops, however small the budget', () => {
  const result = trimValue({ a: 1, b: 'two', c: [1] }, 1);
  assert.deepEqual(result.value, { a: 1, b: 'two', c: [1] });
});

test('cutting inside a single-item array leaves that array alone', () => {
  // one row is not itself cut, so the path to its cells runs through the ORIGINAL array
  const rows = [{ row: 0, cells: list(60) }];
  const before = JSON.stringify(rows);
  const result = trimValue({ rows }, 1500, hintFor('N'));
  assert.equal(JSON.stringify(rows), before);
  assert.equal((result.value as { rows: Array<{ cells: unknown[] }> }).rows[0]!.cells.length, 2);
  assert.equal(rows[0]!.cells.length, 60);
});

test('the input is never edited, and what is not cut is shared, not copied', () => {
  const kept = { keep: list(2) };
  const input = { kept, big: list(50) };
  const before = JSON.stringify(input);
  const result = trimValue(input, 2000, hintFor('N'));
  assert.equal(JSON.stringify(input), before);
  assert.equal((result.value as { kept: unknown }).kept, kept);
  assert.equal(input.big.length, 50);
});

// ---- trimHydrated -----------------------------------------------------------------------------------------

function node(name: string, parts: { refs?: Record<string, { value: unknown; from: string; iteration?: number }>; output?: unknown; input?: unknown; fields?: Record<string, unknown>; status?: string; iteration?: number } = {}): HydratedNode {
  return {
    node_uid: `uid-${name}`,
    action_name: name,
    form_fields: { code: { type: 'FIXED', value: 'return 1;' } },
    references_node_data: Object.fromEntries(
      Object.entries(parts.refs ?? {}).map(([expression, r]) => [
        expression,
        { used_in: ['f.value'], kind: 'latest', status: 'resolved', from_node: { uid: `uid-${r.from}`, name: r.from }, ...(r.iteration !== undefined ? { iteration: r.iteration } : {}), value: r.value },
      ]),
    ),
    execution: {
      executed: true,
      status: parts.status ?? 'COMPLETED',
      ...(parts.iteration !== undefined ? { iteration_shown: parts.iteration } : {}),
      ...(parts.output !== undefined ? { output: parts.output } : {}),
      ...(parts.input !== undefined ? { input_received: parts.input } : {}),
      ...(parts.fields ? { resolved_fields: parts.fields } : {}),
      error: 'the error text must survive',
    },
  } as HydratedNode;
}

const execution = (nodes: HydratedNode[], failed: string | null = null): HydratedExecution => ({
  execution: { uid: 'e', status: failed ? 'FAILED' : 'COMPLETED', mode: null, type: null, error_message: null, error_code: null, failed_node_uid: failed },
  workflow: { uid: 'w', name: 'W', description: null, version: null, version_id: null, nodes, connections: [], variable_names: [] },
  execution_flow: [],
  branch_decisions: [],
  data_gaps: [],
});

const REF = "$.getLatestNodeData('GET Categories')['data']['data']";

test('a reference comment names the source node, its iteration and the full selector', () => {
  const h = execution([node('Construct', { refs: { [REF]: { value: list(40), from: 'GET Categories', iteration: 2 } } })]);
  const { hydrated, report } = trimHydrated(h, { nodeChars: 3000, packChars: 1_000_000 });
  const ref = hydrated.workflow.nodes[0]!.references_node_data[REF]!;
  const marker = (ref.value as unknown[])[1] as string;
  assert.match(marker, /get_node_data\(node "GET Categories", iteration 2, select \["data\.data\[<n>\]"\]\)/, 'the base comes from the expression, the array is the value itself');
  assert.equal(report.trimmed[0]!.node, 'Construct');
});

test('the output of a node and what the failed node received are fetchable too', () => {
  const h = execution([node('Leaf', { output: { rows: list(40) }, iteration: 3 }), node('Failed', { status: 'FAILED', input: { data: { rows: list(40) } } })], 'uid-Failed');
  const { hydrated } = trimHydrated(h, { nodeChars: 2000, packChars: 1_000_000, criticalFactor: 1 });
  const out = ((hydrated.workflow.nodes[0]!.execution.output as { rows: unknown[] }).rows[1]) as string;
  assert.match(out, /get_node_data\(node "Leaf", iteration 3, select \["data\.rows\[<n>\]"\]\)/);
  const input = ((hydrated.workflow.nodes[1]!.execution.input_received as { data: { rows: unknown[] } }).data.rows[1]) as string;
  assert.match(input, /get_node_data\(node "Failed", which "input", select \["data\.rows\[<n>\]"\]\)/);
});

test('definitions, errors and statuses are never trimmed; the failed node gets more room', () => {
  const failed = node('Failed', { status: 'FAILED', refs: { [REF]: { value: list(30), from: 'A' } } });
  const other = node('Other', { refs: { [REF]: { value: list(30), from: 'A' } } });
  const { hydrated } = trimHydrated(execution([failed, other], 'uid-Failed'), { nodeChars: 3000, packChars: 1_000_000, criticalFactor: 3 });
  const [f, o] = hydrated.workflow.nodes;
  assert.equal(f!.execution.error, 'the error text must survive');
  assert.deepEqual(f!.form_fields, failed.form_fields);
  assert.ok((f!.references_node_data[REF]!.value as unknown[]).length > (o!.references_node_data[REF]!.value as unknown[]).length, 'the failed node keeps more');
});

test('a node whose data fits is returned as the same object', () => {
  const small = node('Small', { refs: { [REF]: { value: list(2), from: 'A' } } });
  const { hydrated, report } = trimHydrated(execution([small]), { nodeChars: 50_000, packChars: 1_000_000 });
  assert.equal(hydrated.workflow.nodes[0], small);
  assert.deepEqual(report.trimmed, []);
  assert.equal(report.over_budget, false);
});

test('when the whole pack is too large, every node’s budget is tightened until it fits', () => {
  // each node's data (50 items, ~9 KB) fits its own 12 000 budget, so only the pack budget forces cuts
  const nodes = Array.from({ length: 10 }, (_, i) => node(`N${i}`, { refs: { [REF]: { value: list(50), from: 'A' } } }));
  const h = execution(nodes);
  const loose = trimHydrated(h, { nodeChars: 12_000, packChars: 1_000_000 });
  const tight = trimHydrated(h, { nodeChars: 12_000, packChars: 20_000 });
  assert.equal(loose.report.trimmed.length, 0, 'every node fits its own budget');
  assert.ok(tight.report.after_chars < loose.report.after_chars);
  assert.ok(tight.report.after_chars <= 20_000, `after ${tight.report.after_chars}`);
  assert.equal(tight.report.over_budget, false);
});

test('a pack that cannot fit says so instead of cutting evidence it may not', () => {
  const h = execution([node('N', { refs: { [REF]: { value: list(5), from: 'A' } } })]);
  const { report } = trimHydrated(h, { nodeChars: 50_000, packChars: 100 });
  assert.equal(report.over_budget, true);
});

test('trimming a hydrated execution does not touch the one it was given', () => {
  const h = execution([node('Construct', { refs: { [REF]: { value: list(40), from: 'A' } } })]);
  const before = JSON.stringify(h);
  trimHydrated(h, { nodeChars: 2000, packChars: 1_000_000 });
  assert.equal(JSON.stringify(h), before);
});

// ---- the real captured executions -------------------------------------------------------------------------

const FAILED = projectPath('fixtures', 'rca', 'update-appointment-404.json');

test('real failed execution: the big lists are cut, and a comment fetches the exact item from the real data', { skip: existsSync(FAILED) ? false : 'fixture not present' }, async () => {
  const ctx = executionContextFromFixture(loadFixture(FAILED));
  const full = await hydrateExecution(ctx);
  const { hydrated, report } = trimHydrated(full);
  assert.ok(report.after_chars < report.before_chars);
  assert.equal(report.over_budget, false);

  const construct = hydrated.workflow.nodes.find((n) => n.action_name === 'Construct')!;
  const categories = Object.entries(construct.references_node_data).find(([k]) => k.includes('GET Categories'))![1].value as unknown[];
  const marker = categories[1] as string;
  assert.match(marker, /12 more objects removed \(13 in total\)/);
  assert.match(marker, /category_name=Sales Visit/, 'the name the Code node looks up is in the index');

  // the call the comment tells the model to make returns the real removed item
  const select = /select \["(.+?)\[<n>\]"\]/.exec(marker)![1]!;
  const raw = await ctx.getNodeExecutionData('GET Categories');
  const original = (full.workflow.nodes.find((n) => n.action_name === 'Construct')!.references_node_data[Object.keys(construct.references_node_data).find((k) => k.includes('GET Categories'))!]!.value as unknown[])[7];
  const got = selectValue(toWrapper(raw).wrapper, `${select}[7]`);
  assert.equal(got.status, 'resolved');
  assert.equal(got.value!.slice(0, 80), JSON.stringify(original).slice(0, 80));

  // the evidence behind the failure is whole
  const failed = hydrated.workflow.nodes.find((n) => n.action_name === 'update Appointment')!;
  assert.deepEqual(failed.execution, full.workflow.nodes.find((n) => n.action_name === 'update Appointment')!.execution);
  assert.equal(JSON.stringify(hydrated.workflow.nodes.map((n) => n.form_fields)), JSON.stringify(full.workflow.nodes.map((n) => n.form_fields)), 'definitions are untouched');
});
