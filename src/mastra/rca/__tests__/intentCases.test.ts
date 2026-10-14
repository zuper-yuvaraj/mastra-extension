import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { FIXTURE_DIR } from '../fixture';
import { routeByRules, routeIntent, type ExecutionState } from '../intent';
import { fakeExecution } from './fakeExecution';

interface Case {
  id: string;
  question: string;
  state: ExecutionState;
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
  rules: boolean;
  expected: { type: 'explain' | 'rca' | 'chat'; audience: 'business' | 'technical' | null; needsData?: boolean };
}
const file = JSON.parse(readFileSync(path.join(FIXTURE_DIR, 'intent-cases.json'), 'utf8')) as { nodes: string[]; cases: Case[] };

// The same labelled messages score the real router in `npm run rca:intent-eval`. Offline, they pin down what the
// cheap rules decide on their own, and make sure the rules never decide something they should leave to the model.

test('there are enough labelled cases, covering every kind of answer and state', () => {
  assert.ok(file.cases.length >= 30);
  for (const type of ['explain', 'rca', 'chat']) assert.ok(file.cases.some((c) => c.expected.type === type), type);
  for (const state of ['failed', 'completed', 'definition']) assert.ok(file.cases.some((c) => c.state === state), state);
  assert.equal(new Set(file.cases.map((c) => c.id)).size, file.cases.length, 'ids are unique');
});

for (const c of file.cases.filter((x) => x.state === 'failed' || x.state === 'completed')) {
  if (c.rules) {
    test(`rules decide "${c.question}" (${c.id}) on their own, correctly`, () => {
      const got = routeByRules({ question: c.question, executionState: c.state, nodeNames: file.nodes });
      assert.ok(got, 'the rules decided');
      assert.equal(got.type, c.expected.type);
      if (c.expected.audience) assert.equal(got.audience, c.expected.audience);
      if (c.expected.type === 'chat') assert.equal(got.needsData, c.expected.needsData);
    });
  } else {
    test(`rules leave "${c.question}" (${c.id}) to the model`, () => {
      assert.equal(routeByRules({ question: c.question, executionState: c.state, nodeNames: file.nodes }), null);
    });
  }
}

for (const c of file.cases.filter((x) => x.state === 'definition')) {
  test(`with no run, "${c.question}" ends as chat without data (${c.id})`, async () => {
    const ctx = fakeExecution(false);
    ctx.definitionOnly = true;
    const got = await routeIntent({ question: c.question, turns: [{ role: 'user', content: c.question }], executionContext: ctx });
    assert.deepEqual([got.type, got.needsData], [c.expected.type, c.expected.needsData]);
  });
}
