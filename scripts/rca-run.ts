// Usage: npm run rca:run -- [--fixture fixtures/rca/<name>.json] [--question "why did it go to else?"]
// Runs the real investigator agent over a captured execution (or the built-in synthetic one) with no
// token and no Zuper network access, through the same investigate() a live request uses. Needs
// OPENAI_API_KEY. Prints the verdict, what was verified, and how much work it took.

import { assembleContext } from '../src/mastra/lib/orchestrator';
import { rcaInvestigatorAgent } from '../src/mastra/agents/rcaInvestigatorAgent';
import { executionContextFromFixture, loadFixture } from '../src/mastra/rca/fixture';
import { investigate } from '../src/mastra/rca/investigate';
import { fakeExecution } from '../src/mastra/rca/__tests__/fakeExecution';

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const fixturePath = arg('fixture');
const fixture = fixturePath ? loadFixture(fixturePath) : null;
const executionContext = fixture ? executionContextFromFixture(fixture) : fakeExecution(true);
assembleContext(executionContext, null); // fail fast on a malformed fixture

console.log(fixture ? `fixture: ${fixture.name}` : 'fixture: built-in synthetic (customer is null -> Send Email fails)');
if (fixture?.expected) console.log('expected:', JSON.stringify(fixture.expected));

const started = Date.now();
const result = await investigate({
  agent: rcaInvestigatorAgent,
  executionContext,
  question: arg('question'),
  zuperToken: 'offline',
  zuperApiUrl: 'https://offline.invalid',
});

const v = result.verdict;
console.log('\n=== VERDICT ===');
console.log(`status: ${v.status}   confidence: ${v.confidence}`);
console.log(`summary: ${v.summary}`);
if (v.failed_node) console.log(`failed node: ${v.failed_node.name} — ${v.failed_node.error}`);
if (v.root_cause) console.log(`root cause: [${v.root_cause.category}] ${v.root_cause.name} — ${v.root_cause.explanation}`);
console.log('evidence:');
for (const e of v.evidence_chain) console.log(`  ${e.verified ? '✔' : '✘'} ${e.name}: ${e.observation}\n      "${e.quote}"`);
if (v.fix) console.log(`fix: ${v.fix.description}${v.fix.suggested_change ? `\n     ${v.fix.suggested_change}` : ''}`);
if (v.knowledge_used.length > 0) console.log(`knowledge used: ${v.knowledge_used.map((k) => `${k.tool}:${k.id}`).join(', ')}`);
if (v.issues.length > 0) console.log(`verification issues: ${v.issues.join(' | ')}`);

console.log('\n=== RUN ===');
console.log(`mode ${result.meta.mode}, ${result.meta.steps} agent steps, ${result.meta.tool_calls} tool calls, model ${result.meta.model}, ${((Date.now() - started) / 1000).toFixed(1)}s`);
