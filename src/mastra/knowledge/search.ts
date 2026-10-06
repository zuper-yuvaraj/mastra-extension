import { KB_INDEX, embedTexts, ensureKbIndex, getKbVector } from './vector';

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
  /** Page URL, for business docs. */
  source_url?: string;
}

export interface SearchOptions {
  kind?: string;
  topic?: string;
  area?: string;
  topK?: number;
  /** Cosine similarity floor. Below it a hit is treated as noise rather than returned. */
  minScore?: number;
}

export const DEFAULT_MIN_SCORE = 0.3;

export async function searchKnowledge(query: string, options: SearchOptions = {}): Promise<KnowledgeHit[]> {
  const { kind, topic, area, topK = 5, minScore = DEFAULT_MIN_SCORE } = options;
  await ensureKbIndex();

  const filter: Record<string, string> = {};
  if (kind) filter.kind = kind;
  if (topic) filter.topic = topic;
  if (area) filter.area = area;

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
    source_url: r.metadata?.source_url ? String(r.metadata.source_url) : undefined,
  }));
}
