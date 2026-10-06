// Usage: npm run kb:sync -- [kind] [--dry-run]
//   kind: workflow_builder | business | api (default: all KBs that exist so far)
// Idempotent: unchanged chunks are skipped (no embedding calls), changed ones re-embedded,
// chunks whose source disappeared are removed. Prints a diff.

import { syncChunks, type KbChunk } from '../src/mastra/knowledge/ingest';
import { API_KIND, buildApiChunks } from '../src/mastra/knowledge/api/chunks';
import { BUSINESS_KIND, buildBusinessChunks } from '../src/mastra/knowledge/business/chunks';
import { buildWorkflowBuilderChunks, WORKFLOW_BUILDER_KIND } from '../src/mastra/knowledge/workflowBuilder/chunks';
import { loadWorkflowBuilderKnowledge } from '../src/mastra/knowledge/workflowBuilder/loader';

const KBS: Record<string, () => KbChunk[]> = {
  [WORKFLOW_BUILDER_KIND]: buildWorkflowBuilderChunks,
  [BUSINESS_KIND]: buildBusinessChunks,
  [API_KIND]: buildApiChunks,
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const requested = args.filter((a) => !a.startsWith('--'));
const kinds = requested.length > 0 ? requested : Object.keys(KBS);

for (const kind of kinds) {
  const build = KBS[kind];
  if (!build) {
    console.error(`unknown kind "${kind}". Known: ${Object.keys(KBS).join(', ')}`);
    process.exit(1);
  }
  const report = await syncChunks(kind, build(), { dryRun });
  console.log(
    `${dryRun ? '[dry-run] ' : ''}${kind}: ${report.total} chunks — ` +
      `${report.added.length} added, ${report.changed.length} changed, ${report.removed.length} removed, ${report.unchanged} unchanged`,
  );
  for (const id of report.added) console.log(`  + ${id}`);
  for (const id of report.changed) console.log(`  ~ ${id}`);
  for (const id of report.removed) console.log(`  - ${id}`);
  if (kind === WORKFLOW_BUILDER_KIND) {
    console.log('  source versions:', loadWorkflowBuilderKnowledge().versions);
  }
}
