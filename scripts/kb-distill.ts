// Usage: npm run kb:distill -- [relative-path-prefix ...]
//   e.g. npm run kb:distill -- work-order-management/jobs accounting/invoices
// Distills API pages into knowledge-base/.generated/api/. With no prefix it distills every page
// and replaces the whole directory; with prefixes it only reports (so a partial run never deletes
// records), writing to knowledge-base/.generated/api-partial/ for inspection.

import path from 'node:path';
import { distillAll, writeRecords } from '../src/mastra/knowledge/api/records';

const prefixes = process.argv.slice(2).map((p) => p.split('\\').join('/'));
const { records, proseFiles } = distillAll(prefixes);

const outDir = prefixes.length === 0 ? undefined : path.resolve('knowledge-base/.generated/api-partial');
writeRecords(records, outDir);

const bytes = records.map((r) => JSON.stringify(r).length);
const largest = records.reduce((a, r, i) => (bytes[i]! > a.bytes ? { id: r.id, bytes: bytes[i]! } : a), { id: '', bytes: 0 });
console.log(
  `distilled ${records.length} endpoints (${proseFiles.length} prose pages skipped); ` +
    `avg ${Math.round(bytes.reduce((a, b) => a + b, 0) / Math.max(records.length, 1))} B, largest ${largest.id} = ${largest.bytes} B`,
);
for (const file of proseFiles) console.log(`  prose: ${path.basename(file)}`);
