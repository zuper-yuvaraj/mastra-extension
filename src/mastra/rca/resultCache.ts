// Caches finished RCA results and coalesces identical in-flight requests (an RCA is a 20-60 s,
// paid LLM run; a double-click must not start it twice). The key includes a hash of the caller's
// token so one account can never be served another account's analysis.

import { createHash } from 'node:crypto';

interface Entry<T> {
  value: T;
  storedAt: number;
}

export function resultKey(token: string, executionUid: string, question: string | undefined): string {
  const who = createHash('sha256').update(token).digest('hex').slice(0, 16);
  return `${who}:${executionUid}:${(question ?? '').trim().toLowerCase()}`;
}

export class ResultCache<T> {
  private readonly done = new Map<string, Entry<T>>();
  private readonly inFlight = new Map<string, Promise<{ value: T; cacheable: boolean }>>();

  constructor(
    private readonly ttlMs: number,
    private readonly maxEntries = 200,
  ) {}

  /** `compute` says whether its result may be reused (not for a still-running execution). */
  async getOrCompute(
    key: string,
    compute: () => Promise<{ value: T; cacheable: boolean }>,
    options: { bypass?: boolean } = {},
  ): Promise<{ value: T; cached: boolean }> {
    const hit = this.done.get(key);
    if (!options.bypass && hit && Date.now() - hit.storedAt <= this.ttlMs) return { value: hit.value, cached: true };

    const pending = this.inFlight.get(key);
    if (pending && !options.bypass) return { value: (await pending).value, cached: false };

    const run = compute();
    this.inFlight.set(key, run);
    try {
      const { value, cacheable } = await run;
      if (cacheable) this.store(key, value);
      else this.done.delete(key);
      return { value, cached: false };
    } finally {
      this.inFlight.delete(key); // also on failure: a failed run is never cached and the next call retries
    }
  }

  private store(key: string, value: T): void {
    this.done.set(key, { value, storedAt: Date.now() });
    if (this.done.size > this.maxEntries) {
      const oldest = this.done.keys().next().value;
      if (oldest !== undefined) this.done.delete(oldest);
    }
  }
}
