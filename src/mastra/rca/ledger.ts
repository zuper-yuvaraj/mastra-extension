// Records everything the investigator was actually shown (seed + every tool result) so the final
// verdict can be checked against it: a quote in the verdict must be a verbatim excerpt of something
// in here, otherwise it was invented.

export interface LedgerEntry {
  tool: string;
  label: string;
  text: string;
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

  record(tool: string, label: string, value: unknown): void {
    const text = typeof value === 'string' ? value : safeStringify(value);
    this.entries.push({ tool, label, text });
    this.haystack += `\n${normalize(text)}`;
    this.unescaped += `\n${normalize(unescapeJson(text))}`;
  }

  /** True when `quote` appears verbatim (modulo whitespace) in any recorded result. */
  contains(quote: string): boolean {
    const needle = normalize(quote);
    return needle.length > 0 && (this.haystack.includes(needle) || this.unescaped.includes(needle));
  }

  get size(): number {
    return this.entries.length;
  }

  toolCalls(): number {
    return this.entries.filter((e) => e.tool !== 'seed').length;
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
