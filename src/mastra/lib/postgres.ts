// One place that reads the Postgres connection settings, shared by app storage (index.ts) and the
// knowledge-base vector store (knowledge/vector.ts). Hosted Postgres (Neon, Supabase, Vercel Postgres)
// exposes a single URL; `pgvector` must be enabled on the database (CREATE EXTENSION vector).

export function postgresUrl(...preferred: Array<string | undefined>): string {
  const url = preferred.find(Boolean) ?? process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
  if (!url) {
    throw new Error('No Postgres connection string. Set DATABASE_URL (and optionally KB_DATABASE_URL for the knowledge base).');
  }
  return url;
}

/** Serverless instances each open their own pool, so keep it small: many instances x many connections
 * exhausts a hosted database quickly. */
export const POOL_OPTIONS = { max: 3, idleTimeoutMillis: 10_000 } as const;

/** App tables live in their own schema, not `public`: on Supabase the public schema is exposed through the
 * project's REST API (with a public anon key), a separate schema is not. The `vector` type itself stays in
 * `public`, where every role can resolve it. */
export const PG_SCHEMA = process.env.MASTRA_PG_SCHEMA || 'mastra';
