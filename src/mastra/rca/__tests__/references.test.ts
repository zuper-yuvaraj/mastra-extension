import assert from 'node:assert/strict';
import { test } from 'node:test';
import { extractFromString, extractReferences, parseAccessors, renderSegments } from '../references';

test('dot path after getLatestNodeData is captured (the old extractor dropped it)', () => {
  const [ref] = extractFromString("{{ $.getLatestNodeData('Get Record').data.data.customer.customer_email }}");
  assert.equal(ref?.kind, 'latest');
  assert.equal(ref?.targetName, 'Get Record');
  assert.equal(renderSegments(ref!.path), '.data.data.customer.customer_email');
});

test('bracket and numeric-string accessors', () => {
  const [ref] = extractFromString("$.getLatestNodeData('Get Record').data.data.custom_fields['14'].value");
  assert.equal(renderSegments(ref!.path), '.data.data.custom_fields.14.value');
  assert.deepEqual(ref!.path[3], { kind: 'key', key: '14' });
  assert.deepEqual(ref!.path[4], { kind: 'key', key: 'value' });
});

test('getNodeData: leading [i] is the run selector, the rest is the path', () => {
  const [ref] = extractFromString("{{$.getNodeData('On Webhook')[0]['data']['body']['date']}}");
  assert.equal(ref?.kind, 'all_runs');
  assert.deepEqual(ref?.runSelector, { kind: 'index', index: 0 });
  assert.equal(renderSegments(ref!.path), '.data.body.date');
});

test('getNodeData with a loop index is a dynamic run selector', () => {
  const [ref] = extractFromString("$.getNodeData('Fetch')[$.getCurrentLoopIndex()].data.x");
  assert.equal(ref?.runSelector?.kind, 'dynamic');
  assert.equal(renderSegments(ref!.path), '.data.x');
});

test('$item and getRecentNodeData', () => {
  const item = extractFromString('{{ $item.data.body.job_uid }}');
  assert.equal(item[0]?.kind, 'previous');
  assert.equal(renderSegments(item[0]!.path), '.data.body.job_uid');

  const recent = extractFromString('{{ $.getRecentNodeData(2).data.amount }}');
  assert.equal(recent[0]?.kind, 'recent');
  assert.equal(recent[0]?.recent, 2);
});

test('$items and $itemX are not $item', () => {
  assert.equal(extractFromString('const x = $items.length; $itemFoo.data').length, 0);
});

test('variables in all three spellings', () => {
  const names = extractFromString("{{ variable.api_base_url }} {{ VARIABLE.key }} {{ $.getVariable('token') }}").map((r) => r.variable);
  assert.deepEqual(names.sort(), ['api_base_url', 'key', 'token']);
});

test('several references inside a code node string', () => {
  const code = "const a = $.getLatestNodeData('A').data.items; const b = $.getLatestNodeData('B').data.total;";
  assert.equal(extractFromString(code).length, 2);
});

test('FIXED field with an expression is flagged as never evaluated', () => {
  const refs = extractReferences({
    url: { type: 'FIXED', value: "{{ $.getLatestNodeData('A').data.id }}" },
    body: { type: 'EXPRESSION', value: "{{ $.getLatestNodeData('A').data.id }}" },
  });
  const fixed = refs.find((r) => r.field === 'url.value');
  const expr = refs.find((r) => r.field === 'body.value');
  assert.equal(fixed?.evaluated, false);
  assert.equal(fixed?.fieldType, 'FIXED');
  assert.equal(expr?.evaluated, true);
});

test('field paths through arrays and nested objects', () => {
  const refs = extractReferences({ conditions: [{ value1: { type: 'EXPRESSION', value: '{{ $item.data.status }}' } }] });
  assert.equal(refs[0]?.field, 'conditions[0].value1.value');
});

test('parseAccessors stops at filters and handles nested brackets', () => {
  const { segments, end } = parseAccessors(".data[ $.fn(['x']) ].y | json", 0);
  assert.equal(segments.length, 3);
  assert.equal(segments[1]?.kind, 'dynamic');
  assert.equal(".data[ $.fn(['x']) ].y | json".slice(end).trim(), '| json');
});
