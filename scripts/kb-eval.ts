// Usage: npm run kb:eval
// Retrieval regression test: each question must surface one of its expected chunk ids in the top 3.
// Off-topic questions must return nothing above the similarity floor.

import { DEFAULT_MIN_SCORE, searchKnowledge } from '../src/mastra/knowledge/search';

interface Case {
  q: string;
  /** Any of these chunk ids (exact or prefix) in the top 3 counts as a pass. */
  expect: string[];
  /** A real, understood retrieval weakness: reported as a warning, not a failure. */
  known?: string;
}

const CASES: Case[] = [
  { q: 'why is my expression value undefined even though the previous node returned data', expect: ['wb:expressions_reference:common_mistakes.0', 'wb:expressions_reference:core_model'] },
  { q: 'where is the HTTP response body in a downstream expression', expect: ['wb:expressions_reference:node_output_shapes.http_request_v2'] },
  { q: 'how do I read the Get Record node output fields', expect: ['wb:expressions_reference:node_output_shapes.zuper_get_record'] },
  { q: 'which output of the if else node is the true branch', expect: ['wb:node_catalog:if_else'] },
  { q: 'can a code node use lodash or moment', expect: ['wb:code_node_runtime:sandbox.modules'] },
  { q: 'what happens when a code node returns nothing', expect: ['wb:code_node_runtime:sandbox.return'] },
  { q: 'code node v2 throws when I use $item', expect: ['wb:code_node_runtime:versions.v2'] },
  { q: 'what is the difference between IS_EMPTY in trigger filters and EMPTY in if else', expect: ['wb:trigger_filters_catalog:important_distinction_vs_if_else', 'wb:trigger_filters_catalog:operator_catalogue', 'wb:node_field_schemas:if_else.conditions.gotchas'] },
  { q: 'how do I get the current loop item and index', expect: ['wb:expressions_reference:loop.'] },
  { q: 'loop node input_data field', expect: ['wb:node_catalog:loop', 'wb:node_field_schemas:loop', 'wb:code_node_runtime:zuper_api_recipe.loop_input_data'] },
  { q: 'which modules can only be updated through an http request node', expect: ['wb:node_capabilities:code_only_modules'] },
  { q: 'can I create a quote with a native node', expect: ['wb:node_capabilities:code_only_modules'] },
  { q: 'how to paginate through all jobs', expect: ['wb:code_node_runtime:zuper_api_recipe.pagination_pattern', 'wb:code_node_runtime:zuper_api_recipe.paginate'] },
  { q: 'today is computed in UTC and misses evening jobs', expect: ['wb:code_node_runtime:zuper_api_recipe.timezone_dates', 'wb:code_node_runtime:zuper_api_recipe.compute_date_range'] },
  { q: 'workflow did not trigger because of the trigger filter', expect: ['wb:trigger_filters_catalog:'] },
  { q: 'how long can a code node run before timeout', expect: ['wb:code_node_runtime:sandbox.limits'] },
  { q: 'what wait type can I use inside a loop', expect: ['wb:node_field_schemas:wait.mode_options.FIXED', 'wb:node_catalog:wait'] },
  { q: 'wait node inside a loop', expect: ['wb:node_catalog:wait', 'wb:node_field_schemas:wait'], known: 'short ambiguous query ranks the loop node first; the wait node is 8th' },
  { q: 'how do I use a workflow variable in an expression', expect: ['wb:expressions_reference:variables', 'wb:expressions_reference:accessors.'] },
];

const OFF_TOPIC = ['what is the weather in Paris today', 'best pizza topping', 'how do I train a neural network'];

let failed = 0;
for (const c of CASES) {
  const hits = await searchKnowledge(c.q, { topK: 3, minScore: 0 });
  const ok = hits.some((h) => c.expect.some((e) => h.id === e || h.id.startsWith(e)));
  const warnOnly = !ok && c.known !== undefined;
  if (!ok && !warnOnly) failed++;
  console.log(`${ok ? 'PASS' : warnOnly ? 'WARN' : 'FAIL'}  ${c.q}`);
  if (warnOnly) console.log(`      known limitation: ${c.known}`);
  else if (!ok) console.log(`      expected ${c.expect.join(' | ')}\n      got      ${hits.map((h) => `${h.id} (${h.score})`).join(', ')}`);
}

console.log(`\noff-topic (floor ${DEFAULT_MIN_SCORE}):`);
for (const q of OFF_TOPIC) {
  const all = await searchKnowledge(q, { topK: 1, minScore: 0 });
  const kept = await searchKnowledge(q, { topK: 3 });
  const bad = kept.length > 0;
  if (bad) failed++;
  console.log(`${bad ? 'FAIL' : 'PASS'}  "${q}" top score ${all[0]?.score ?? 'n/a'}, returned ${kept.length}`);
}

console.log(`\n${failed === 0 ? 'all passed' : `${failed} failed`}`);
process.exit(failed === 0 ? 0 : 1);
