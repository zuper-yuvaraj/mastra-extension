// Shared vector store + embedder for every KB (workflow_builder, api, business; past_rca later).
// One index, separated by a `kind` metadata field.
//
// Storage: Postgres with pgvector, so it works the same on a laptop and on serverless hosting.
//   KB_DATABASE_URL   explicit connection string for the knowledge base
//   DATABASE_URL      the same database the rest of the app uses (default)
// The index is created on first use. `npm run kb:sync` fills it; `npm run kb:migrate-pg` copies a
// previous local libSQL kb.db into it without re-embedding.

import { PgVector } from '@mastra/pg';
import { ModelRouterEmbeddingModel } from '@mastra/core/llm';
import { PG_SCHEMA, POOL_OPTIONS, postgresUrl } from '../lib/postgres';

export const KB_INDEX = 'zuper_kb';
export const EMBEDDING_MODEL = 'openai/text-embedding-3-small';
export const EMBEDDING_DIMENSION = 1536;
const EMBED_BATCH_SIZE = 64;

/** A UTF-16 half that is not part of a pair: what is left when text is cut in the middle of an emoji. */
const LONE_SURROGATE = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g;

/** Postgres JSON refuses a lone surrogate (SQLite did not). Replaces each with U+FFFD in every string of
 * the value, so metadata can be stored. */
export function cleanForPostgres<T>(value: T): T {
  if (typeof value === 'string') return value.replace(LONE_SURROGATE, '�') as T;
  if (Array.isArray(value)) return value.map(cleanForPostgres) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanForPostgres(item)])) as T;
  }
  return value;
}

let vector: PgVector | null = null;
let indexReady: Promise<void> | null = null;

export function getKbVector(): PgVector {
  vector ??= new PgVector({
    id: 'zuper-kb-vector',
    connectionString: postgresUrl(process.env.KB_DATABASE_URL),
    schemaName: PG_SCHEMA,
    pgPoolOptions: POOL_OPTIONS,
  });
  return vector;
}

/** Creates the index on first use (no-op afterwards). Cosine distance, as the embeddings are meant for. */
export function ensureKbIndex(): Promise<void> {
  if (!indexReady) {
    indexReady = (async () => {
      const store = getKbVector();
      const existing = await store.listIndexes();
      if (!existing.includes(KB_INDEX)) {
        await store.createIndex({ indexName: KB_INDEX, dimension: EMBEDDING_DIMENSION, metric: 'cosine' });
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
