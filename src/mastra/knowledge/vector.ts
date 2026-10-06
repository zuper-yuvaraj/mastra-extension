// Shared vector store + embedder for every KB (workflow_builder now; api / business / past_rca later).
// One index, separated by a `kind` metadata field.
//
// Storage: a local libSQL file in development, hosted Turso in production — chosen purely by env:
//   KB_DATABASE_URL  (+ KB_DATABASE_AUTH_TOKEN)   explicit override
//   TURSO_DATABASE_URL (+ TURSO_AUTH_TOKEN)       same Turso DB the rest of the app uses
//   otherwise                                     file:<cwd>/knowledge-base/.generated/kb.db
// Note: `mastra dev` runs from .mastra/output, so for the dev server set KB_DATABASE_URL to an
// absolute `file:` URL so the server and `npm run kb:sync` read the same file.

import path from 'node:path';
import { LibSQLVector } from '@mastra/libsql';
import { ModelRouterEmbeddingModel } from '@mastra/core/llm';

export const KB_INDEX = 'zuper_kb';
export const EMBEDDING_MODEL = 'openai/text-embedding-3-small';
export const EMBEDDING_DIMENSION = 1536;
const EMBED_BATCH_SIZE = 64;

function resolveConnection(): { url: string; authToken?: string } {
  const url = process.env.KB_DATABASE_URL ?? process.env.TURSO_DATABASE_URL;
  if (url) {
    return { url, authToken: process.env.KB_DATABASE_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN ?? undefined };
  }
  const file = path.resolve(process.cwd(), 'knowledge-base/.generated/kb.db').replace(/\\/g, '/');
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

/** Creates the index on first use (no-op afterwards). */
export function ensureKbIndex(): Promise<void> {
  if (!indexReady) {
    indexReady = (async () => {
      const store = getKbVector();
      const existing = await store.listIndexes();
      if (!existing.includes(KB_INDEX)) {
        await store.createIndex({ indexName: KB_INDEX, dimension: EMBEDDING_DIMENSION });
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
