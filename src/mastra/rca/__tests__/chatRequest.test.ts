import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseChatRequest } from '../chatRequest';
import { AccountLimiter, RateLimitError } from '../limits';

const valid = {
  apiUrl: 'https://us-west-1c.zuperpro.com',
  workflowBuilderUrl: 'https://workflow.zuperpro.com',
  workflowUid: 'wf-12345678',
  executionUid: 'ex-12345678',
  turns: [{ role: 'user', content: 'why did it fail?' }],
};

test('a valid request parses, with or without an execution', () => {
  const r = parseChatRequest(valid);
  assert.ok(r.ok);
  assert.equal(r.ok && r.value.stream, false);
  const none = parseChatRequest({ ...valid, executionUid: null });
  assert.ok(none.ok && none.value.executionUid === null);
});

test('bad shapes are rejected with a reason', () => {
  const cases: Array<[unknown, RegExp]> = [
    [null, /JSON object/],
    [{ ...valid, workflowUid: '../x' }, /workflowUid/],
    [{ ...valid, executionUid: 'a/b' }, /executionUid/],
    [{ ...valid, turns: [] }, /non-empty/],
    [{ ...valid, turns: [{ role: 'assistant', content: 'hi' }] }, /last turn/],
    [{ ...valid, turns: [{ role: 'system', content: 'x' }] }, /role/],
    [{ ...valid, turns: [{ role: 'user', content: 'x'.repeat(1001) }] }, /question is limited/],
    [{ ...valid, turns: Array.from({ length: 41 }, () => ({ role: 'user', content: 'x' })) }, /limited to 40/],
  ];
  for (const [body, detail] of cases) {
    const r = parseChatRequest(body);
    assert.ok(!r.ok, JSON.stringify(body).slice(0, 60));
    assert.match(!r.ok ? (r.detail ?? '') : '', detail);
  }
});

test('hosts outside Zuper are refused', () => {
  const r = parseChatRequest({ ...valid, apiUrl: 'http://169.254.169.254' });
  assert.ok(!r.ok && r.error === 'HOST_NOT_ALLOWED');
});

test('the limiter caps starts per window and concurrent runs, per account', () => {
  const limiter = new AccountLimiter({ maxPerWindow: 3, windowMs: 1000, maxConcurrent: 2 });
  const a = limiter.acquire('A', 0);
  const b = limiter.acquire('A', 1);
  assert.throws(() => limiter.acquire('A', 2), (e) => e instanceof RateLimitError && e.code === 'TOO_MANY_INVESTIGATIONS');
  a();
  a(); // releasing twice must not free a second slot
  const c = limiter.acquire('A', 3);
  assert.throws(() => limiter.acquire('A', 4), (e) => e instanceof RateLimitError && e.code === 'RATE_LIMITED', 'three starts used the window');
  b();
  c();
  assert.throws(() => limiter.acquire('A', 5), (e) => e instanceof RateLimitError && e.code === 'RATE_LIMITED');
  limiter.acquire('B', 5)(); // another account is unaffected
  limiter.acquire('A', 2000)(); // the window has passed
});
