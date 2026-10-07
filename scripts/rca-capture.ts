// Usage:
//   ZUPER_TOKEN=<bearer> npm run rca:capture -- \
//     --workflow <workflow_uid> --execution <execution_uid> \
//     --workflow-builder-url https://<dc>.zuperpro.com --name bad-upstream-customer \
//     [--root-cause "Get Job"] [--category MISSING_DATA] [--status failed] [--notes "..."]
//
// Saves one execution (summary + the runtime data of every executed node) to fixtures/rca/<name>.json,
// redacting credentials, bearer/JWT strings and email addresses. The token is read from the environment,
// never from the command line (which ends up in shell history). READ the file before sharing or committing
// it: names, addresses and free text are not redacted.

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { getExecutionContext } from '../src/mastra/lib/zuperExecutionApi';
import { FIXTURE_DIR, type RcaFixture } from '../src/mastra/rca/fixture';
import { assertAllowedBaseUrl } from '../src/mastra/rca/hosts';
import { sanitize } from '../src/mastra/rca/sanitize';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const token = process.env.ZUPER_TOKEN;
const workflowUid = arg('workflow');
const executionUid = arg('execution');
const baseUrl = arg('workflow-builder-url');
const name = arg('name');

if (!token || !workflowUid || !executionUid || !baseUrl || !name) {
  console.error('Need ZUPER_TOKEN in the environment and --workflow, --execution, --workflow-builder-url, --name.');
  process.exit(1);
}
if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) {
  console.error('--name must be lowercase letters, digits and dashes.');
  process.exit(1);
}

const origin = assertAllowedBaseUrl(baseUrl);
const execution = await getExecutionContext(workflowUid, executionUid, token, origin, true);

const nodeData: Record<string, unknown> = {};
const uids = execution.executedNodes.map((n) => n.node_uid);
for (let i = 0; i < uids.length; i += 5) {
  await Promise.all(
    uids.slice(i, i + 5).map(async (uid) => {
      nodeData[uid] = await execution.getNodeExecutionData(uid);
    }),
  );
}

const expectedRoot = arg('root-cause');
const fixture: RcaFixture = sanitize({
  name,
  description: arg('notes'),
  captured_at: new Date().toISOString(),
  workflow_uid: workflowUid,
  summary: execution.summary,
  node_data: nodeData,
  expected: expectedRoot || arg('status') || arg('category')
    ? {
        status: arg('status') as NonNullable<RcaFixture['expected']>['status'],
        root_cause_node: expectedRoot,
        category: arg('category'),
      }
    : undefined,
});

mkdirSync(FIXTURE_DIR, { recursive: true });
const file = path.join(FIXTURE_DIR, `${name}.json`);
writeFileSync(file, JSON.stringify(fixture, null, 2));

const failedFetches = Object.entries(nodeData).filter(
  ([, v]) => v && typeof v === 'object' && Object.keys(v as object).length === 1 && 'error' in (v as object),
);
console.log(`saved ${file}`);
console.log(`  execution status: ${execution.summary.workflow_execution?.status}, ${uids.length} executed nodes`);
if (failedFetches.length > 0) console.warn(`  WARNING: ${failedFetches.length} node(s) returned a fetch error instead of data`);
console.log('  review the file before sharing or committing it.');
