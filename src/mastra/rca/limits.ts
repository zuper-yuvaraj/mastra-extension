// Protects the model budget: an investigation costs real money and 30-50 seconds, and the endpoint is
// reachable by anyone holding a Zuper token. Per-account limits, in process memory.

export class RateLimitError extends Error {
  constructor(
    readonly code: 'RATE_LIMITED' | 'TOO_MANY_INVESTIGATIONS',
    readonly retryAfterSeconds: number,
  ) {
    super(code);
  }
}

export interface LimitOptions {
  /** Investigations an account may start per window. */
  maxPerWindow: number;
  windowMs: number;
  /** Investigations an account may have running at once. */
  maxConcurrent: number;
}

export const DEFAULT_LIMITS: LimitOptions = { maxPerWindow: 20, windowMs: 60_000, maxConcurrent: 2 };

export class AccountLimiter {
  private readonly starts = new Map<string, number[]>();
  private readonly running = new Map<string, number>();

  constructor(private readonly options: LimitOptions = DEFAULT_LIMITS) {}

  /** Reserves a slot for `account` (throws RateLimitError when none); call the returned function when done. */
  acquire(account: string, now: number = Date.now()): () => void {
    const { maxPerWindow, windowMs, maxConcurrent } = this.options;
    const recent = (this.starts.get(account) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= maxPerWindow) throw new RateLimitError('RATE_LIMITED', Math.max(1, Math.ceil((windowMs - (now - recent[0]!)) / 1000)));
    if ((this.running.get(account) ?? 0) >= maxConcurrent) throw new RateLimitError('TOO_MANY_INVESTIGATIONS', 5);

    recent.push(now);
    this.starts.set(account, recent);
    this.running.set(account, (this.running.get(account) ?? 0) + 1);

    let released = false;
    return () => {
      if (released) return;
      released = true;
      const left = (this.running.get(account) ?? 1) - 1;
      if (left <= 0) this.running.delete(account);
      else this.running.set(account, left);
    };
  }
}
