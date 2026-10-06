const CATEGORY_CACHE_TTL_MS = 3 * 60 * 1000;

export interface JobStatus {
  status_uid: string;
  status_name: string;
  status_color?: string;
}

export interface EstimatedDuration {
  days: number;
  hours: number;
  minutes: number;
}

export interface JobCategory {
  category_uid: string;
  category_name: string;
  category_color?: string;
  estimated_duration?: EstimatedDuration;
  job_statuses: JobStatus[];
}

interface CacheEntry {
  promise: Promise<JobCategory[]>;
  fetchedAt: number;
}

// Unlike a single logged-in browser extension, this process serves many different Zuper accounts,
// so the cache is keyed by apiUrl (per-tenant base URL) — a single global slot here would leak one
// company's categories into another company's request.
const cache = new Map<string, CacheEntry>();

async function fetchCategories(token: string, apiUrl: string): Promise<JobCategory[]> {
  const res = await fetch(`${apiUrl}/api/jobs/category?populate_statuses=true`, {
    headers: {
      authorization: `Bearer ${token}`,
      'x-zuper-client': 'WEB_APP',
      'x-zuper-client-version': '3.0',
      accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error(`API_${res.status}`);

  const body = await res.json();
  return (body.data ?? []) as JobCategory[];
}

export function getCategories(token: string, apiUrl: string, forceRefresh = false): Promise<JobCategory[]> {
  const entry = cache.get(apiUrl);
  const stale = !entry || Date.now() - entry.fetchedAt > CATEGORY_CACHE_TTL_MS;

  if (!entry || stale || forceRefresh) {
    const promise = fetchCategories(token, apiUrl);
    cache.set(apiUrl, { promise, fetchedAt: Date.now() });
    return promise;
  }

  return entry.promise;
}
