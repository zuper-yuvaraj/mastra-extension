// Records everything the investigator was actually shown (seed + every tool result) so the final
// verdict can be checked against it: a quote in the verdict must be a verbatim excerpt of something
// in here, otherwise it was invented.

export interface LedgerEntry {
  tool: string;
  label: string;
  text: string;
  /** `knowledge` results (documentation) are listed but are never evidence a quote can be checked against. */
  kind?: 'evidence' | 'knowledge';
}

/** Whitespace-insensitive so JSON re-indentation or line wrapping cannot hide a real match. */
function normalize(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export class EvidenceLedger {
  private readonly entries: LedgerEntry[] = [];
  private haystack = '';
  /** The same text with JSON string escaping removed: a value shown inside a JSON string (`\"job-1\"`) is
   * quoted by readers as plain `"job-1"`, and that is still a verbatim quote of the value. */
  private unescaped = '';

  private listener: ((entry: LedgerEntry) => void) | null = null;

  /** Called after every tool result is recorded (not for the seed or carried-over evidence): the hook
   * that lets a caller report progress without depending on the agent framework's callbacks. */
  onToolResult(listener: (entry: LedgerEntry) => void): void {
    this.listener = listener;
  }

  record(tool: string, label: string, value: unknown): void {
    const text = typeof value === 'string' ? value : safeStringify(value);
    this.entries.push({ tool, label, text });
    this.haystack += `\n${normalize(text)}`;
    this.unescaped += `\n${normalize(unescapeJson(text))}`;
    if (tool !== 'seed' && tool !== 'prior') this.listener?.({ tool, label, text });
  }

  /** A documentation lookup: recorded and reported like any tool call, but kept out of what a quote may be
   * verified against, because the evidence chain is for data read from this execution only. */
  recordKnowledge(tool: string, label: string, value: unknown): void {
    const text = typeof value === 'string' ? value : safeStringify(value);
    this.entries.push({ tool, label, text, kind: 'knowledge' });
    this.listener?.({ tool, label, text, kind: 'knowledge' });
  }

  /** True when `text` appears in a documentation result: how a cited URL is proven to have been shown. */
  knowledgeContains(text: string): boolean {
    return text.length > 0 && this.entries.some((e) => e.kind === 'knowledge' && e.text.includes(text));
  }

  /** The knowledge tools actually called in this run. */
  knowledgeTools(): Set<string> {
    return new Set(this.entries.filter((e) => e.kind === 'knowledge').map((e) => e.tool));
  }

  /** True when `quote` appears verbatim (modulo whitespace) in any recorded result. */
  contains(quote: string): boolean {
    const needle = normalize(quote);
    return needle.length > 0 && (this.haystack.includes(needle) || this.unescaped.includes(needle));
  }

  get size(): number {
    return this.entries.length;
  }

  /** Tool calls made in THIS run: what was carried over from earlier turns is not counted. */
  toolCalls(): number {
    return this.entries.filter((e) => e.tool !== 'seed' && e.tool !== 'prior').length;
  }

  /** Evidence from earlier turns of the same conversation, so a quote that was verified then still verifies now. */
  preload(texts: string[]): void {
    for (const text of texts) this.record('prior', 'earlier turn', text);
  }

  /** What this run was shown (seed and tool results), for carrying into the next turn. Newest first wins when
   * the budget is exceeded, so the most recent evidence is the part that is kept. */
  exportTexts(maxChars: number): string[] {
    const kept: string[] = [];
    let used = 0;
    for (const entry of [...this.entries].reverse()) {
      if (entry.kind === 'knowledge') continue;
      if (used + entry.text.length > maxChars) continue;
      kept.push(entry.text);
      used += entry.text.length;
    }
    return kept.reverse();
  }
}

function unescapeJson(text: string): string {
  return text.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}

/** Key under which the per-run ledger travels in the request context. */
export const RCA_LEDGER_KEY = 'rcaLedger';
