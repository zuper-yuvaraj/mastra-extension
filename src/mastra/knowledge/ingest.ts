// Generic, idempotent sync of one KB's chunks into the shared vector index. Chunks are identified by
// a stable id and a content hash: unchanged chunks are skipped (no embedding cost), changed ones are
// re-embedded, and chunks whose source disappeared are deleted.

import { createHash } from 'node:crypto';
import { EMBEDDING_DIMENSION, KB_INDEX, embedTexts, ensureKbIndex, getKbVector } from './vector';

export interface KbChunkMetadata {
  kind: string;
  topic: string;
  title: string;
  /** Exact-lookup tool call that returns the full, authoritative data for this chunk, if one exists. */
  lookup?: string;
  source_file: string;
  generated_at: string;
  hash: string;
  /** Top-level product area (business docs) or API section, e.g. `Accounting`, `work-order-management`. */
  area?: string;
  /** API module folder, e.g. `jobs`, `invoices`. */
  module?: string;
  /** Public page the chunk came from, so an answer can cite it. */
  source_url?: string;
}

export interface KbChunk {
  id: string;
  /** The text that is embedded and shown to the agent. */
  text: string;
  metadata: KbChunkMetadata;
}

export function hashText(text: string): string {
  return createHash('sha256').update(text).digest('hex').slice(0, 16);
}

export interface SyncReport {
  kind: string;
  total: number;
  added: string[];
  changed: string[];
  removed: string[];
  unchanged: number;
}

/** id -> hash for everything currently indexed under `kind`. The vector API has no list call, so this
 * runs a similarity query with a fixed probe vector and a filter, asking for every match. */
async function listIndexed(kind: string): Promise<Map<string, string>> {
  const probe = new Array<number>(EMBEDDING_DIMENSION).fill(0);
  probe[0] = 1;
  const results = await getKbVector().query({
    indexName: KB_INDEX,
    queryVector: probe,
    topK: 20000,
    filter: { kind },
    minScore: -1,
  });
  return new Map(results.map((r) => [r.id, String(r.metadata?.hash ?? '')]));
}

export async function syncChunks(kind: string, chunks: KbChunk[], options: { dryRun?: boolean } = {}): Promise<SyncReport> {
  const ids = new Set<string>();
  for (const chunk of chunks) {
    if (ids.has(chunk.id)) throw new Error(`duplicate chunk id: ${chunk.id}`);
    ids.add(chunk.id);
  }

  await ensureKbIndex();
  const existing = await listIndexed(kind);

  const added = chunks.filter((c) => !existing.has(c.id));
  const changed = chunks.filter((c) => existing.has(c.id) && existing.get(c.id) !== c.metadata.hash);
  const removed = [...existing.keys()].filter((id) => !ids.has(id));
  const report: SyncReport = {
    kind,
    total: chunks.length,
    added: added.map((c) => c.id),
    changed: changed.map((c) => c.id),
    removed,
    unchanged: chunks.length - added.length - changed.length,
  };
  if (options.dryRun) return report;

  const toWrite = [...added, ...changed];
  if (toWrite.length > 0) {
    const vectors = await embedTexts(toWrite.map((c) => c.text));
    await getKbVector().upsert({
      indexName: KB_INDEX,
      ids: toWrite.map((c) => c.id),
      vectors,
      metadata: toWrite.map((c) => ({ ...c.metadata, text: c.text })),
    });
  }
  if (removed.length > 0) {
    await getKbVector().deleteVectors({ indexName: KB_INDEX, ids: removed });
  }
  return report;
}
