// Public page for a documented API endpoint, from the manifest the docs were downloaded with. Lets an
// answer cite the page a fact came from. Missing manifest or entry means no URL, never a guessed one.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { API_DOCS_ROOT } from './records';

interface ManifestEntry {
  url?: string;
  file?: string;
}

let byFile: Map<string, string> | null = null;

function load(): Map<string, string> {
  if (byFile) return byFile;
  byFile = new Map();
  const manifest = path.join(API_DOCS_ROOT, '_manifest.json');
  if (!existsSync(manifest)) return byFile;
  try {
    const parsed = JSON.parse(readFileSync(manifest, 'utf8')) as { folders?: Record<string, ManifestEntry[]> };
    for (const entries of Object.values(parsed.folders ?? {})) {
      for (const entry of entries) if (entry.file && entry.url) byFile.set(entry.file.split(String.fromCharCode(92)).join('/'), entry.url.replace(/\.md$/, ''));
    }
  } catch {
    // an unreadable manifest only costs the links
  }
  return byFile;
}

/** `sourceFile` is relative to api-reference/ (a record's sourceFile), or already starts with it. */
export function apiDocUrl(sourceFile: string): string | undefined {
  const normalized = sourceFile.split(String.fromCharCode(92)).join('/');
  return load().get(normalized.startsWith('api-reference/') ? normalized : `api-reference/${normalized}`);
}
