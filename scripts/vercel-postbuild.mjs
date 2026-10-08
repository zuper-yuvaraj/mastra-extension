// Run after `mastra build` on Vercel. The function only contains the bundled code, but the knowledge
// tools read a few files at runtime (node catalog JSON, distilled API records, the docs manifest).
// Copy exactly those into the function so paths.ts finds `knowledge-base/` next to the code.

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const fn = path.join('.vercel', 'output', 'functions', 'index.func');
if (!existsSync(fn)) {
  console.error(`postbuild: ${fn} not found; did "mastra build" run with the Vercel deployer?`);
  process.exit(1);
}

const copies = [
  ['knowledge-base/workflow-builder', 'knowledge-base/workflow-builder'],
  ['knowledge-base/.generated/api', 'knowledge-base/.generated/api'],
  ['knowledge-base/zuper-api-docs/_manifest.json', 'knowledge-base/zuper-api-docs/_manifest.json'],
];
for (const [from, to] of copies) {
  if (!existsSync(from)) {
    console.error(`postbuild: missing ${from}`);
    process.exit(1);
  }
  const target = path.join(fn, to);
  mkdirSync(path.dirname(target), { recursive: true });
  cpSync(from, target, { recursive: true });
  console.log(`postbuild: copied ${from}`);
}
