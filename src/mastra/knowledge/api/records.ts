// Distilled API endpoint records: build (raw OpenAPI pages -> records on disk) and load (records ->
// memory, for exact lookup). The raw pages are 150 KB each; the records are ~2 KB and are what the
// agent actually reads.

import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { readApiPage, type ApiEndpointRecord } from './distill';

export const API_DOCS_ROOT =
  process.env.KB_API_DOCS_DIR ?? path.resolve(process.cwd(), 'knowledge-base/zuper-api-docs');
export const API_REFERENCE_DIR = path.join(API_DOCS_ROOT, 'api-reference');
export const GENERATED_API_DIR =
  process.env.KB_GENERATED_API_DIR ?? path.resolve(process.cwd(), 'knowledge-base/.generated/api');

export function walkMarkdown(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMarkdown(full, out);
    else if (entry.name.toLowerCase().endsWith('.md')) out.push(full);
  }
  return out.sort();
}

export interface DistillResult {
  records: ApiEndpointRecord[];
  /** Pages with no OpenAPI block (prose pages) — chunked as text instead. */
  proseFiles: string[];
}

/** Distills every page under api-reference/ (optionally only those whose relative path starts with a prefix). */
export function distillAll(prefixes: string[] = []): DistillResult {
  const records: ApiEndpointRecord[] = [];
  const proseFiles: string[] = [];
  for (const file of walkMarkdown(API_REFERENCE_DIR)) {
    const relative = path.relative(API_REFERENCE_DIR, file).split(path.sep).join('/');
    if (prefixes.length > 0 && !prefixes.some((p) => relative.startsWith(p))) continue;
    const record = readApiPage(file, API_REFERENCE_DIR);
    if (record) records.push(record);
    else proseFiles.push(file);
  }
  return { records, proseFiles };
}

/** Replaces the generated records directory with exactly these records. */
export function writeRecords(records: ApiEndpointRecord[], outDir: string = GENERATED_API_DIR): void {
  rmSync(outDir, { recursive: true, force: true });
  for (const record of records) {
    const target = path.join(outDir, `${record.id}.json`);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, JSON.stringify(record));
  }
}

let cached: ApiEndpointRecord[] | null = null;

/** Loads the generated records (cached). Run `npm run kb:distill` or `npm run kb:sync -- api` to create them. */
export function loadRecords(dir: string = GENERATED_API_DIR): ApiEndpointRecord[] {
  if (cached && dir === GENERATED_API_DIR) return cached;
  const records: ApiEndpointRecord[] = [];
  const walk = (current: string): void => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.json')) records.push(JSON.parse(readFileSync(full, 'utf8')) as ApiEndpointRecord);
    }
  };
  try {
    walk(dir);
  } catch {
    throw new Error(`API records not found in ${dir}. Run "npm run kb:distill" first.`);
  }
  if (dir === GENERATED_API_DIR) cached = records;
  return records;
}
