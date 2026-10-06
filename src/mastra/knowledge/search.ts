import { EMBEDDING_DIMENSION, KB_INDEX, embedTexts, ensureKbIndex, getKbVector } from './vector';

export interface KnowledgeHit {
  id: string;
  score: number;
  kind: string;
  topic: string;
  title: string;
  text: string;
  /** Exact-lookup tool call that returns the authoritative detail for this hit, when one exists. */
  lookup?: string;
  area?: string;
  module?: string;
  /** Page URL, for business docs. */
  source_url?: string;
}

export interface SearchOptions {
  kind?: string;
  topic?: string;
  area?: string;
  module?: string;
  topK?: number;
  /** Cosine similarity floor. Below it a hit is treated as noise rather than returned. */
  minScore?: number;
}

export const DEFAULT_MIN_SCORE = 0.3;

export async function searchKnowledge(query: string, options: SearchOptions = {}): Promise<KnowledgeHit[]> {
  const { kind, topic, area, module, topK = 5, minScore = DEFAULT_MIN_SCORE } = options;
  await ensureKbIndex();

  const filter: Record<string, string> = {};
  if (kind) filter.kind = kind;
  if (topic) filter.topic = topic;
  if (area) filter.area = area;
  if (module) filter.module = module;

  const [queryVector] = await embedTexts([query]);
  const results = await getKbVector().query({
    indexName: KB_INDEX,
    queryVector: queryVector!,
    topK,
    filter: Object.keys(filter).length > 0 ? filter : undefined,
    minScore,
  });

  return results.map((r) => ({
    id: r.id,
    score: Number(r.score.toFixed(3)),
    kind: String(r.metadata?.kind ?? ''),
    topic: String(r.metadata?.topic ?? ''),
    title: String(r.metadata?.title ?? ''),
    text: String(r.metadata?.text ?? ''),
    lookup: r.metadata?.lookup ? String(r.metadata.lookup) : undefined,
    area: r.metadata?.area ? String(r.metadata.area) : undefined,
    module: r.metadata?.module ? String(r.metadata.module) : undefined,
    source_url: r.metadata?.source_url ? String(r.metadata.source_url) : undefined,
  }));
}

export interface ListedChunk {
  id: string;
  title: string;
  text: string;
  source_file: string;
  generated_at: string;
}

/** Every chunk matching a metadata filter, with no embedding call (exact filtering, not similarity).
 * The vector API has no list call, so this queries with a fixed probe vector and no score floor. */
export async function listChunks(filter: Record<string, string>, limit = 200): Promise<ListedChunk[]> {
  await ensureKbIndex();
  const probe = new Array<number>(EMBEDDING_DIMENSION).fill(0);
  probe[0] = 1;
  const results = await getKbVector().query({
    indexName: KB_INDEX,
    queryVector: probe,
    topK: limit,
    filter,
    minScore: -1,
  });
  return results
    .map((r) => ({
      id: r.id,
      title: String(r.metadata?.title ?? ''),
      text: String(r.metadata?.text ?? ''),
      source_file: String(r.metadata?.source_file ?? ''),
      generated_at: String(r.metadata?.generated_at ?? ''),
    }))
    .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}
