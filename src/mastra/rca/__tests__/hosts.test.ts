import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assertAllowedBaseUrl, HostNotAllowedError } from '../hosts';

const SUFFIXES = ['zuperpro.com', 'zuper.co'];
const ok = (url: string) => assertAllowedBaseUrl(url, SUFFIXES);
const rejected = (url: string) => assert.throws(() => ok(url), HostNotAllowedError, url);

test('accepts https hosts under the allowed suffixes and returns the bare origin', () => {
  assert.equal(ok('https://us-west-1c.zuperpro.com'), 'https://us-west-1c.zuperpro.com');
  assert.equal(ok('https://app.zuper.co/api/ignored/path'), 'https://app.zuper.co');
  assert.equal(ok('https://zuperpro.com'), 'https://zuperpro.com');
});

test('rejects non-https, credentials, ports', () => {
  rejected('http://us.zuperpro.com');
  rejected('https://user:pass@us.zuperpro.com');
  rejected('https://us.zuperpro.com:8443');
});

test('rejects internal and metadata addresses (SSRF)', () => {
  rejected('https://169.254.169.254/latest/meta-data');
  rejected('https://127.0.0.1');
  rejected('https://localhost');
  rejected('https://[::1]');
  rejected('https://10.0.0.5');
});

test('rejects look-alike domains', () => {
  rejected('https://zuperpro.com.evil.com');
  rejected('https://evilzuperpro.com');
  rejected('https://zuper.co.attacker.io');
  rejected('https://notzuper.co');
});

test('rejects garbage', () => {
  rejected('not a url');
  rejected('');
  rejected('javascript:alert(1)');
});
