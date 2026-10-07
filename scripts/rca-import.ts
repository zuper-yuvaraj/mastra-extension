// Usage:
//   npm run rca:import -- <network-dump.txt> --name <slug> \
//     [--root-cause "Construct"] [--category CODE_ERROR] [--status failed] [--notes "..."]
//
// Turns requests copied from the browser network tab (the execution's /summary and each node's
// /nodes/<uid> response, pasted into one text file) into fixtures/rca/<name>.json, sanitized, with the
// expected answer attached when you give one. No token or network needed. READ the fixture afterwards:
// credentials and emails are redacted, but names, addresses and free text are not.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { FIXTURE_DIR, type RcaFixture } from '../src/mastra/rca/fixture';
import { parseNetworkDump } from '../src/mastra/rca/importCapture';
import { sanitize } from '../src/mastra/rca/sanitize';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const input = process.argv[2];
const name = arg('name');
if (!input || input.startsWith('--') || !name || !/^[a-z0-9][a-z0-9-]*$/.test(name)) {
  console.error('Usage: npm run rca:import -- <network-dump.txt> --name <lowercase-slug> [--root-cause <node name>] [--category X] [--status failed] [--notes "..."]');
  process.exit(1);
}

const capture = parseNetworkDump(readFileSync(input, 'utf8'));
const we = capture.summary.workflow_execution;
const executed = [...new Set(capture.summary.node_execution.map((e) => e.node_uid))];
const nodeName = (uid: string) =>
  we.workflow_data?.nodes?.find((n) => n.node_uid === uid)?.action_name ?? uid.slice(0, 8);
const hasData = (uid: string) => uid in capture.nodeData || uid in capture.iterationData;
const missing = executed.filter((uid) => !hasData(uid));

const root = arg('root-cause');
const fixture: RcaFixture = sanitize({
  name,
  description: arg('notes'),
  captured_at: new Date().toISOString(),
  workflow_uid: we.workflow_uid,
  summary: capture.summary,
  node_data: capture.nodeData,
  iteration_data: Object.keys(capture.iterationData).length > 0 ? capture.iterationData : undefined,
  expected:
    root || arg('status') || arg('category')
      ? {
          status: arg('status') as NonNullable<RcaFixture['expected']>['status'],
          root_cause_node: root,
          category: arg('category'),
        }
      : undefined,
});

mkdirSync(FIXTURE_DIR, { recursive: true });
const file = path.join(FIXTURE_DIR, `${name}.json`);
writeFileSync(file, JSON.stringify(fixture, null, 2));

console.log(`saved ${file}`);
console.log(`  execution ${we.execution_uid}: ${we.status} (${we.mode}/${we.type}), ${executed.length} executed nodes`);
console.log(`  node data for ${executed.length - missing.length}/${executed.length} executed nodes`);
for (const [uid, runs] of Object.entries(capture.iterationData)) console.log(`  loop node ${nodeName(uid)}: iterations captured ${Object.keys(runs).join(', ')}`);
if (missing.length > 0) console.log(`  missing node data: ${missing.map(nodeName).join(', ')}`);
if (capture.duplicates.length > 0) console.log(`  node copied more than once (first kept): ${capture.duplicates.map(nodeName).join(', ')}`);
for (const s of capture.skipped) console.log(`  skipped: ${s}`);
console.log('  review the file before sharing or committing it.');
