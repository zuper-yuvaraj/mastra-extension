import assert from 'node:assert/strict';
import { test } from 'node:test';
import { extractBearerToken, httpFailure, parseRcaRequest } from '../request';
import { ResultCache, resultKey } from '../resultCache';
import { dropRunSecrets, getRunSecrets, putRunSecrets, runSecretCount } from '../runSecrets';

const valid = {
  apiUrl: 'https://us-west-1c.zuperpro.com/api/ignored',
  workflowBuilderUrl: 'https://wf.zuperpro.com',
  workflowUid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  executionUid: 'exec_12345678',
};

test('a valid request is normalized to bare origins', () => {
  const parsed = parseRcaRequest({ ...valid, question: '  why else? ', forceRefresh: true });
  assert.equal(parsed.ok, true);
  if (parsed.ok) {
    assert.equal(parsed.value.apiUrl, 'https://us-west-1c.zuperpro.com');
    assert.equal(parsed.value.question, 'why else?');
    assert.equal(parsed.value.forceRefresh, true);
  }
});

test('missing or malformed fields are rejected with a reason', () => {
  for (const bad of [null, 'x', {}, { ...valid, executionUid: undefined }, { ...valid, workflowUid: 42 }]) {
    const parsed = parseRcaRequest(bad);
    assert.equal(parsed.ok, false);
    if (!parsed.ok) assert.equal(parsed.status, 400);
  }
});

test('uids that could alter a request URL are rejected', () => {
  for (const uid of ['../../admin', 'a/b/c/d/e/f/g/h', 'ok?x=1&y=2....', 'short', 'has space in it', 'x'.repeat(65)]) {
    assert.equal(parseRcaRequest({ ...valid, executionUid: uid }).ok, false, uid);
  }
});

test('hosts outside the allow-list are rejected with HOST_NOT_ALLOWED', () => {
  for (const url of ['https://evil.example.com', 'http://us.zuperpro.com', 'https://169.254.169.254', 'https://zuperpro.com.evil.io']) {
    const parsed = parseRcaRequest({ ...valid, apiUrl: url });
    assert.equal(parsed.ok, false, url);
    if (!parsed.ok) assert.equal(parsed.error, 'HOST_NOT_ALLOWED');
  }
});

test('an over-long question is rejected', () => {
  assert.equal(parseRcaRequest({ ...valid, question: 'x'.repeat(501) }).ok, false);
});

test('bearer token extraction', () => {
  assert.equal(extractBearerToken('Bearer abc.def'), 'abc.def');
  assert.equal(extractBearerToken('bearer   abc '), 'abc');
  assert.equal(extractBearerToken('Basic abc'), null);
  assert.equal(extractBearerToken(undefined), null);
  assert.equal(extractBearerToken('Bearer '), null);
});

test('upstream API errors keep their meaning instead of becoming a 500', () => {
  assert.deepEqual(httpFailure(new Error('API_401')), { status: 401, error: 'API_401' });
  assert.deepEqual(httpFailure(new Error('API_404')), { status: 404, error: 'API_404' });
  assert.equal(httpFailure(new Error('API_500')).status, 502);
  assert.equal(httpFailure(new Error('boom')).status, 500);
  assert.equal(httpFailure('weird').status, 500);
});

test('the result cache key separates accounts, executions and questions', () => {
  const a = resultKey('token-A', 'e1', 'Why?');
  assert.equal(a, resultKey('token-A', 'e1', ' why? '), 'case and whitespace do not matter');
  assert.notEqual(a, resultKey('token-B', 'e1', 'why?'), 'a different account never shares an entry');
  assert.notEqual(a, resultKey('token-A', 'e2', 'why?'));
  assert.notEqual(a, resultKey('token-A', 'e1', 'something else'));
  assert.ok(!a.includes('token-A'), 'the token itself is not part of the key');
});

test('cache: reuse, expiry, bypass, uncacheable results, and failures are not cached', async () => {
  let now = 0;
  const realNow = Date.now;
  Date.now = () => now;
  try {
    const cache = new ResultCache<string>(1000);
    let runs = 0;
    const compute = (cacheable = true) => async () => ({ value: `v${++runs}`, cacheable });

    assert.deepEqual(await cache.getOrCompute('k', compute()), { value: 'v1', cached: false });
    assert.deepEqual(await cache.getOrCompute('k', compute()), { value: 'v1', cached: true });
    assert.equal((await cache.getOrCompute('k', compute(), { bypass: true })).value, 'v2', 'bypass recomputes');
    now = 5000;
    assert.equal((await cache.getOrCompute('k', compute())).value, 'v3', 'expired entry is recomputed');

    assert.equal((await cache.getOrCompute('live', compute(false))).cached, false);
    assert.equal((await cache.getOrCompute('live', compute(false))).cached, false, 'uncacheable is never reused');

    await assert.rejects(cache.getOrCompute('bad', async () => { throw new Error('boom'); }), /boom/);
    assert.equal((await cache.getOrCompute('bad', compute())).cached, false, 'a failure is not cached, the next call retries');
  } finally {
    Date.now = realNow;
  }
});

test('cache: identical concurrent requests share one run', async () => {
  const cache = new ResultCache<string>(1000);
  let runs = 0;
  const slow = async () => {
    runs++;
    await new Promise((r) => setTimeout(r, 20));
    return { value: 'shared', cacheable: true };
  };
  const results = await Promise.all([cache.getOrCompute('k', slow), cache.getOrCompute('k', slow), cache.getOrCompute('k', slow)]);
  assert.equal(runs, 1);
  assert.deepEqual(results.map((r) => r.value), ['shared', 'shared', 'shared']);
});

test('cache evicts the oldest entry beyond its size limit', async () => {
  const cache = new ResultCache<number>(60_000, 2);
  for (const key of ['a', 'b', 'c']) await cache.getOrCompute(key, async () => ({ value: 1, cacheable: true }));
  assert.equal((await cache.getOrCompute('a', async () => ({ value: 2, cacheable: true }))).cached, false, 'oldest was evicted');
  assert.equal((await cache.getOrCompute('c', async () => ({ value: 2, cacheable: true }))).cached, true);
});

test('run secrets: one-time key, dropped after use, unknown key is NOT_AUTHENTICATED', () => {
  const before = runSecretCount();
  const key = putRunSecrets({ zuperToken: 't', apiUrl: 'https://a.zuperpro.com', workflowBuilderUrl: 'https://b.zuperpro.com' });
  assert.notEqual(key, 't');
  assert.ok(!key.includes('t-'), 'the key is random, not derived from the token');
  assert.equal(getRunSecrets(key).zuperToken, 't');
  dropRunSecrets(key);
  assert.throws(() => getRunSecrets(key), /NOT_AUTHENTICATED/);
  assert.throws(() => getRunSecrets('never-issued'), /NOT_AUTHENTICATED/);
  assert.equal(runSecretCount(), before);
});
