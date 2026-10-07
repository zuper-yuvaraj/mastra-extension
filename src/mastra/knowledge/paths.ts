// Where the project's knowledge-base/ and fixtures/ live. Not `process.cwd()`: `mastra dev` and
// `mastra start` run from `.mastra/output`, so cwd-relative paths silently point at the wrong place
// there. Walk up from cwd until a directory containing `knowledge-base/` is found; override with
// KB_PROJECT_ROOT when the layout is unusual (e.g. a container).

import { existsSync } from 'node:fs';
import path from 'node:path';

function findProjectRoot(): string {
  const explicit = process.env.KB_PROJECT_ROOT;
  if (explicit) return path.resolve(explicit);

  let dir = process.cwd();
  for (let i = 0; i < 6; i++) {
    if (existsSync(path.join(dir, 'knowledge-base'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return process.cwd();
}

export const PROJECT_ROOT = findProjectRoot();

export function projectPath(...parts: string[]): string {
  return path.join(PROJECT_ROOT, ...parts);
}

export function knowledgeBasePath(...parts: string[]): string {
  return projectPath('knowledge-base', ...parts);
}
