// Optional run trace of the hydrated engine, for understanding what is sent to the model and what comes back.
// Switched on with RCA_TRACE=1 (config.ts). One Markdown file per query is written to RCA_TRACE_DIR: the
// question, each step the pipeline took, the full prompt, every model call and its answer, and the final
// response. Off, every call is a no-op. Tracing never changes or fails a request.
//
// A trace holds a customer's workflow data, so the directory is gitignored. Credentials are never recorded:
// the caller's token is not passed in, and the pack has its own credentials redacted.

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { RCA_TRACE, RCA_TRACE_DIR } from './config';

export interface RcaTrace {
  /** Records one step. A string is shown as text, anything else as JSON. */
  step(title: string, body?: unknown): void;
  /** Writes the file; returns its path, or null when tracing is off or the write failed. */
  save(): Promise<string | null>;
}

const OFF: RcaTrace = { step: () => undefined, save: async () => null };

/** A fence longer than any run of backticks inside the text, so the text cannot close it early. */
function fenced(text: string, lang: string): string {
  const longest = Math.max(0, ...(text.match(/`+/g) ?? []).map((run) => run.length));
  const fence = '`'.repeat(Math.max(3, longest + 1));
  return `${fence}${lang}\n${text}\n${fence}`;
}

function render(body: unknown): string {
  if (body === undefined) return '';
  if (typeof body === 'string') return fenced(body, 'text');
  try {
    return fenced(JSON.stringify(body, null, 2) ?? String(body), 'json');
  } catch {
    return fenced(String(body), 'text');
  }
}

export function startTrace(label: string): RcaTrace {
  if (!RCA_TRACE) return OFF;
  const started = Date.now();
  const parts: string[] = [];
  let count = 0;
  return {
    step(title, body) {
      count++;
      parts.push(`## ${count}. ${title}  (+${Date.now() - started} ms)`, render(body), '');
    },
    async save() {
      try {
        const name = `${new Date(started).toISOString().replace(/[:.]/g, '-')}_${label.replace(/[^\w-]/g, '_').slice(0, 60)}.md`;
        const file = join(RCA_TRACE_DIR, name);
        await mkdir(RCA_TRACE_DIR, { recursive: true });
        await writeFile(file, [`# RCA trace: ${label}`, `Started ${new Date(started).toISOString()}, took ${Date.now() - started} ms`, '', ...parts].join('\n'), 'utf8');
        return file;
      } catch (error) {
        console.warn('[rca] could not write the trace:', error instanceof Error ? error.message : error);
        return null;
      }
    },
  };
}
