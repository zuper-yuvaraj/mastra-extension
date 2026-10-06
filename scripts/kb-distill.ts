// Usage: node scripts/kb-distill.ts [relative-path-prefix ...]
//   e.g. node scripts/kb-distill.ts work-order-management/jobs accounting/invoices
// With no prefix, distills every API page. Output goes to knowledge-base/.generated/api/.

import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { readApiPage } from '../src/mastra/knowledge/api/distill';

const ROOT = path.resolve('knowledge-base/zuper-api-docs/api-reference');
const OUT = path.resolve('knowledge-base/.generated/api');
const prefixes = process.argv.slice(2).map((p) => p.replace(/\\/g, '/'));

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

const files = walk(ROOT).filter((file) => {
  if (prefixes.length === 0) return true;
  const relative = path.relative(ROOT, file).split(path.sep).join('/');
  return prefixes.some((p) => relative.startsWith(p));
});

let written = 0;
let skipped = 0;
let totalBytes = 0;
let largest = { id: '', bytes: 0 };

for (const file of files) {
  const record = readApiPage(file, ROOT);
  if (!record) {
    skipped++;
    console.warn(`skip (no OpenAPI block): ${path.relative(ROOT, file)}`);
    continue;
  }
  const target = path.join(OUT, `${record.id}.json`);
  mkdirSync(path.dirname(target), { recursive: true });
  const json = JSON.stringify(record);
  writeFileSync(target, json);
  written++;
  totalBytes += json.length;
  if (json.length > largest.bytes) largest = { id: record.id, bytes: json.length };
}

console.log(
  `distilled ${written}/${files.length} (skipped ${skipped}); avg ${Math.round(totalBytes / Math.max(written, 1))} B, largest ${largest.id} = ${largest.bytes} B`,
);
