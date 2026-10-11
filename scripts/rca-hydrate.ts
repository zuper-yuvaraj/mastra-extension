// Usage: npm run rca:hydrate -- [--fixture fixtures/rca/<name>.json] [--out hydrated.json] [--node "<name>"]
// Runs stage 2 of the hydrated RCA engine (reference hydration) on a captured execution, offline: no token,
// no network, no model. Prints per-node reference counts and how much data each carries, and, with --out,
// writes the full hydrated JSON. --node prints one node's hydrated JSON.

import { writeFileSync } from 'node:fs';
import { executionContextFromFixture, loadFixture } from '../src/mastra/rca/fixture';
import { hydrateExecution } from '../src/mastra/rca/hydrate';
import { fakeExecution } from '../src/mastra/rca/__tests__/fakeExecution';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const fixturePath = arg('fixture');
const fixture = fixturePath ? loadFixture(fixturePath) : null;
const ctx = fixture ? executionContextFromFixture(fixture) : fakeExecution(true);

const started = Date.now();
const hydrated = await hydrateExecution(ctx);
const ms = Date.now() - started;
const size = (value: unknown): number => JSON.stringify(value ?? null).length;

console.log(`${fixture ? `fixture: ${fixture.name}` : 'built-in synthetic execution'}`);
console.log(`workflow "${hydrated.workflow.name}", execution ${hydrated.execution.status}, failed node ${hydrated.execution.failed_node_uid ?? '-'}`);
console.log(`${hydrated.workflow.nodes.length} nodes (${hydrated.execution_flow.length} ran), hydrated in ${ms} ms\n`);

console.log('node'.padEnd(26), 'ran'.padEnd(5), 'refs'.padEnd(5), 'unresolved'.padEnd(11), 'ref data'.padEnd(10), 'output');
for (const node of hydrated.workflow.nodes) {
  const refs = Object.values(node.references_node_data);
  const bad = refs.filter((r) => !['resolved', 'variable'].includes(r.status)).map((r) => r.status);
  const refBytes = refs.reduce((n, r) => n + size(r.value), 0);
  const output = node.execution.output !== undefined ? `${size(node.execution.output)} B here` : node.execution.output_read_by ? `read by ${node.execution.output_read_by.join(', ')}` : '-';
  console.log(
    String(node.action_name).slice(0, 25).padEnd(26),
    String(node.execution.executed).padEnd(5),
    String(refs.length).padEnd(5),
    (bad.join(',') || '-').padEnd(11),
    `${refBytes} B`.padEnd(10),
    output,
  );
}

console.log(`\ntotal hydrated size (untrimmed): ${size(hydrated)} B   (stored workflow: ${size(ctx.workflowData)} B)`);
if (hydrated.data_gaps.length > 0) console.log(`data gaps:\n  ${hydrated.data_gaps.join('\n  ')}`);

const only = arg('node');
if (only) console.log(`\n${JSON.stringify(hydrated.workflow.nodes.find((n) => n.action_name === only) ?? 'no such node', null, 2)}`);
const out = arg('out');
if (out) {
  writeFileSync(out, JSON.stringify(hydrated, null, 2));
  console.log(`wrote ${out}`);
}
