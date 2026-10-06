// Usage: npm run kb:chunks -- business
// Builds the chunks for a KB WITHOUT embedding anything, prints statistics and writes every chunk to
// knowledge-base/.generated/<kind>-chunks.jsonl so the output can be reviewed before `kb:sync` spends
// embedding calls.

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { KbChunk } from '../src/mastra/knowledge/ingest';
import { API_KIND, buildApiKnowledge } from '../src/mastra/knowledge/api/chunks';
import { BUSINESS_KIND, buildBusinessChunks } from '../src/mastra/knowledge/business/chunks';

const BUILDERS: Record<string, () => KbChunk[]> = {
  business: buildBusinessChunks,
  [API_KIND]: () => buildApiKnowledge().chunks,
};

const kind = process.argv[2] ?? 'business';
const build = BUILDERS[kind === BUSINESS_KIND ? 'business' : kind];
if (!build) {
  console.error(`unknown kb "${kind}". Known: ${Object.keys(BUILDERS).join(', ')}`);
  process.exit(1);
}

const chunks = build();
const out = path.resolve('knowledge-base/.generated', `${kind}-chunks.jsonl`);
mkdirSync(path.dirname(out), { recursive: true });
writeFileSync(out, chunks.map((c) => JSON.stringify({ id: c.id, text: c.text, metadata: c.metadata })).join('\n'));

const lengths = chunks.map((c) => c.text.length).sort((a, b) => a - b);
const pct = (p: number) => lengths[Math.min(lengths.length - 1, Math.floor(lengths.length * p))]!;
const byArea = new Map<string, number>();
for (const c of chunks) byArea.set(c.metadata.area ?? '-', (byArea.get(c.metadata.area ?? '-') ?? 0) + 1);

console.log(`${chunks.length} chunks from ${new Set(chunks.map((c) => c.metadata.source_file)).size} pages -> ${out}`);
console.log(`chars: min ${lengths[0]}, p10 ${pct(0.1)}, median ${pct(0.5)}, p90 ${pct(0.9)}, max ${lengths[lengths.length - 1]}`);
console.log(`approx embedding tokens: ${Math.round(lengths.reduce((a, b) => a + b, 0) / 4).toLocaleString()}`);
console.log('by area:', Object.fromEntries([...byArea].sort((a, b) => b[1] - a[1])));
