// Usage: npm run rca:hydrate -- [--fixture fixtures/rca/<name>.json] [--trim | --pack] [--out file] [--node "<name>"]
// Runs stages 2 to 4 of the hydrated RCA engine (reference hydration, trimming, the pack) on a captured execution,
// offline: no token, no network, no model. Prints per-node reference counts and how much data each carries, and,
// with --out, writes the full hydrated JSON. --node prints one node's hydrated JSON. --trim applies the size
// budgets (see rca/trim.ts) and lists every cut; --out and --node then show the trimmed result. --pack builds the
// message the analysis model would be sent (rca/hydratedPack.ts), prints what it is made of, and with --out writes it.

import { writeFileSync } from 'node:fs';
import { executionContextFromFixture, loadFixture } from '../src/mastra/rca/fixture';
import { hydrateExecution } from '../src/mastra/rca/hydrate';
import { buildPack } from '../src/mastra/rca/hydratedPack';
import { trimHydrated } from '../src/mastra/rca/trim';
import { fakeExecution } from '../src/mastra/rca/__tests__/fakeExecution';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const fixturePath = arg('fixture');
const fixture = fixturePath ? loadFixture(fixturePath) : null;
const ctx = fixture ? executionContextFromFixture(fixture) : fakeExecution(true);

const started = Date.now();
const full = await hydrateExecution(ctx);
const trimmed = process.argv.includes('--trim') ? trimHydrated(full) : null;
const hydrated = trimmed?.hydrated ?? full;
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

console.log(`\ntotal hydrated size: ${size(full)} B untrimmed   (stored workflow: ${size(ctx.workflowData)} B)`);
if (trimmed) {
  const { report } = trimmed;
  console.log(`after trimming: ${report.after_chars} B${report.over_budget ? '  (STILL OVER BUDGET: only evidence is left to cut)' : ''}, ${report.trimmed.length} cut(s):`);
  for (const cut of report.trimmed) console.log(`  ${cut.node.padEnd(22)} ${cut.kind.padEnd(7)} ${String(cut.removed).padStart(6)} of ${String(cut.total).padEnd(6)} ${cut.path.slice(0, 80)}`);
}
if (hydrated.data_gaps.length > 0) console.log(`data gaps:\n  ${hydrated.data_gaps.join('\n  ')}`);

const only = arg('node');
if (only) console.log(`\n${JSON.stringify(hydrated.workflow.nodes.find((n) => n.action_name === only) ?? 'no such node', null, 2)}`);
const out = arg('out');
if (process.argv.includes('--pack')) {
  const pack = buildPack({ hydrated: full, understanding: null, question: arg('question') ?? '' });
  console.log(`
pack: ${pack.report.chars} chars (about ${Math.round(pack.report.chars / 4)} tokens), ${pack.report.repeats} repeat(s) pointed at, ${pack.report.trim.trimmed.length} cut(s)`);
  for (const [name, chars] of Object.entries(pack.report.sections)) console.log(`  ${name.padEnd(24)} ${chars} chars`);
  if (out) {
    writeFileSync(out, pack.message);
    console.log(`wrote ${out}`);
  }
} else if (out) {
  writeFileSync(out, JSON.stringify(hydrated, null, 2));
  console.log(`wrote ${out}`);
}
