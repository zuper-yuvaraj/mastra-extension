// Usage: npm run kb:migrate-pg -- [path/to/kb.db] [--dry-run]
// One-off: copies the vectors of a previous local libSQL knowledge base into Postgres (pgvector) as they
// are, so nothing is re-embedded. Reads the SQLite file read-only; target is KB_DATABASE_URL / DATABASE_URL.
// Idempotent: upserting the same ids again overwrites them.

import { DatabaseSync } from 'node:sqlite';
import { knowledgeBasePath } from '../src/mastra/knowledge/paths';
import { cleanForPostgres, EMBEDDING_DIMENSION, ensureKbIndex, getKbVector, KB_INDEX } from '../src/mastra/knowledge/vector';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const file = args.find((a) => !a.startsWith('--')) ?? knowledgeBasePath('.generated', 'kb.db');
const BATCH = 200;

const db = new DatabaseSync(file, { readOnly: true });
const rows = db.prepare('SELECT vector_id, embedding, metadata FROM zuper_kb ORDER BY id').all() as Array<{
  vector_id: string;
  embedding: Uint8Array;
  metadata: string;
}>;
console.log(`${file}: ${rows.length} vectors${dryRun ? ' (dry run, nothing written)' : ''}`);

const toVector = (blob: Uint8Array): number[] => {
  // copy first: a Buffer from SQLite is not guaranteed to be 4-byte aligned
  const floats = new Float32Array(blob.slice().buffer);
  if (floats.length !== EMBEDDING_DIMENSION) throw new Error(`unexpected embedding length ${floats.length}`);
  return Array.from(floats);
};

if (!dryRun) {
  await ensureKbIndex();
  const store = getKbVector();
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    await store.upsert({
      indexName: KB_INDEX,
      ids: batch.map((r) => r.vector_id),
      vectors: batch.map((r) => toVector(r.embedding)),
      metadata: batch.map((r) => cleanForPostgres(JSON.parse(r.metadata) as Record<string, unknown>)),
    });
    console.log(`  ${Math.min(i + BATCH, rows.length)} / ${rows.length}`);
  }
  const stats = await store.describeIndex({ indexName: KB_INDEX });
  console.log(`done: index ${KB_INDEX} now holds ${stats.count} vectors`);
  if (stats.count < rows.length) process.exitCode = 1;
}
