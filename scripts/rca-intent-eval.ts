// Usage: npm run rca:intent-eval
// Scores the chat router (src/mastra/rca/intent.ts) on the labelled messages in fixtures/rca/intent-cases.json.
// Needs OPENAI_API_KEY: every message the rules do not decide is classified by the real router model.
// Prints the answer type and audience accuracy, and each miss. Exits 1 when any answer type is wrong.

import { readFileSync } from 'node:fs';
import { rcaIntentAgent } from '../src/mastra/agents/rcaIntentAgent';
import { routeIntent, type ExecutionState } from '../src/mastra/rca/intent';
import type { ExecutionContext } from '../src/mastra/lib/zuperExecutionApi';

interface Case {
  id: string;
  question: string;
  state: ExecutionState;
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
  expected: { type: string; audience: string | null; needsData?: boolean };
}
const file = JSON.parse(readFileSync('fixtures/rca/intent-cases.json', 'utf8')) as { nodes: string[]; cases: Case[] };

// Only what the router reads from a run: the node names and whether it failed, finished or is only a definition.
function contextFor(state: ExecutionState): ExecutionContext | null {
  if (state === 'none') return null;
  return {
    definitionOnly: state === 'definition',
    failure: state === 'failed' ? { failedNodeUid: 'u0' } : undefined,
    summary: { workflow_execution: { status: state === 'running' ? 'RUNNING' : state === 'failed' ? 'FAILED' : 'COMPLETED' } },
    workflowData: { nodes: file.nodes.map((name, i) => ({ node_uid: `u${i}`, action_name: name })) },
  } as unknown as ExecutionContext;
}

let typeOk = 0;
let audienceOk = 0;
let audienceTotal = 0;
let needsDataOk = 0;
let needsDataTotal = 0;
const misses: string[] = [];
const started = Date.now();
for (const c of file.cases) {
  const history = c.history ?? [];
  const got = await routeIntent({
    question: c.question,
    turns: [...history, { role: 'user', content: c.question }],
    executionContext: contextFor(c.state),
    classifier: rcaIntentAgent as never,
  });
  const okType = got.type === c.expected.type;
  if (okType) typeOk++;
  else misses.push(`type      "${c.question}" (${c.id}): expected ${c.expected.type}, got ${got.type} via ${got.via}`);
  if (c.expected.audience) {
    audienceTotal++;
    if (got.audience === c.expected.audience) audienceOk++;
    else misses.push(`audience  "${c.question}" (${c.id}): expected ${c.expected.audience}, got ${got.audience} via ${got.via}`);
  }
  if (c.expected.type === 'chat' && c.expected.needsData !== undefined) {
    needsDataTotal++;
    if (got.needsData === c.expected.needsData) needsDataOk++;
    else misses.push(`needsData "${c.question}" (${c.id}): expected ${c.expected.needsData}, got ${got.needsData} via ${got.via}`);
  }
  console.log(`${okType ? 'ok  ' : 'MISS'} ${got.via.padEnd(8)} ${c.id.padEnd(22)} -> ${got.type}/${got.audience}${got.type === 'chat' ? `/data=${got.needsData}` : ''}`);
}

const pct = (n: number, total: number) => `${n}/${total} (${total ? Math.round((n / total) * 100) : 100}%)`;
console.log(`\nanswer type: ${pct(typeOk, file.cases.length)}`);
console.log(`audience:    ${pct(audienceOk, audienceTotal)}`);
console.log(`needs data:  ${pct(needsDataOk, needsDataTotal)}`);
console.log(`took ${((Date.now() - started) / 1000).toFixed(1)}s`);
if (misses.length > 0) console.log(`\n${misses.join('\n')}`);
process.exit(typeOk === file.cases.length ? 0 : 1);
