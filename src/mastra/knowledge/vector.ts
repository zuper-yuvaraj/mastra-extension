// Shared vector store + embedder for every KB (workflow_builder now; api / business / past_rca later).
// One index, separated by a `kind` metadata field.
//
// Storage: a local libSQL file in development, hosted Turso in production — chosen purely by env:
//   KB_DATABASE_URL  (+ KB_DATABASE_AUTH_TOKEN)   explicit override
//   TURSO_DATABASE_URL (+ TURSO_AUTH_TOKEN)       same Turso DB the rest of the app uses
//   otherwise                                     file:<project root>/knowledge-base/.generated/kb.db
// The project root is found by walking up from the cwd (see paths.ts), so `mastra dev`, which runs
// from .mastra/output, and `npm run kb:sync` read the same file.

import { createClient } from '@libsql/client';
import { LibSQLVector } from '@mastra/libsql';
import { ModelRouterEmbeddingModel } from '@mastra/core/llm';
import { knowledgeBasePath } from './paths';

export const KB_INDEX = 'zuper_kb';
export const EMBEDDING_MODEL = 'openai/text-embedding-3-small';
export const EMBEDDING_DIMENSION = 1536;
const EMBED_BATCH_SIZE = 64;

function resolveConnection(): { url: string; authToken?: string } {
  const url = process.env.KB_DATABASE_URL ?? process.env.TURSO_DATABASE_URL;
  if (url) {
    return { url, authToken: process.env.KB_DATABASE_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN ?? undefined };
  }
  const file = knowledgeBasePath('.generated', 'kb.db').replace(/\\/g, '/');
  return { url: `file:${file}` };
}

let vector: LibSQLVector | null = null;
let indexReady: Promise<void> | null = null;

export function getKbVector(): LibSQLVector {
  if (!vector) {
    const { url, authToken } = resolveConnection();
    vector = new LibSQLVector({ id: 'zuper-kb-vector', url, authToken });
  }
  return vector;
}

/** libSQL's default vector index keeps a full float32 copy of every neighbour inside each graph node:
 * ~300 KB per 1536-dim vector (881 MB for 2.8k vectors). Compressing neighbours to float8 and capping
 * them at 32 gave 177 MB on the same data with the retrieval eval unchanged. Replaces the default
 * index that createIndex() builds; the table and data are untouched. */
async function tuneVectorIndex(): Promise<void> {
  const { url, authToken } = resolveConnection();
  const client = createClient({ url, authToken });
  try {
    await client.execute(`DROP INDEX IF EXISTS ${KB_INDEX}_vector_idx`);
    await client.execute(
      `CREATE INDEX ${KB_INDEX}_vector_idx ON ${KB_INDEX} (libsql_vector_idx(embedding, 'metric=cosine', 'compress_neighbors=float8', 'max_neighbors=32'))`,
    );
  } finally {
    client.close();
  }
}

/** Creates the index on first use (no-op afterwards). */
export function ensureKbIndex(): Promise<void> {
  if (!indexReady) {
    indexReady = (async () => {
      const store = getKbVector();
      const existing = await store.listIndexes();
      if (!existing.includes(KB_INDEX)) {
        await store.createIndex({ indexName: KB_INDEX, dimension: EMBEDDING_DIMENSION });
        await tuneVectorIndex();
      }
    })().catch((err) => {
      indexReady = null; // let the next call retry instead of caching a failure
      throw err;
    });
  }
  return indexReady;
}

let embedder: ModelRouterEmbeddingModel | null = null;

export async function embedTexts(values: string[]): Promise<number[][]> {
  embedder ??= new ModelRouterEmbeddingModel(EMBEDDING_MODEL);
  const out: number[][] = [];
  for (let i = 0; i < values.length; i += EMBED_BATCH_SIZE) {
    const batch = values.slice(i, i + EMBED_BATCH_SIZE);
    const { embeddings } = await embedder.doEmbed({ values: batch });
    out.push(...embeddings);
  }
  return out;
}
