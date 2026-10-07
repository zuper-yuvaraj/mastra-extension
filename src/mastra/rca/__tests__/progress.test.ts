import assert from 'node:assert/strict';
import { test } from 'node:test';
import { EvidenceLedger } from '../ledger';
import { progressText } from '../progress';

test('progress reads like a person, and names the node when it can', () => {
  assert.equal(progressText('get_node_data', JSON.stringify({ node: 'Get Job' })), 'Reading what Get Job returned');
  assert.equal(progressText('get_node_data', 'not json'), 'Reading node data');
  assert.equal(progressText('search_knowledge', '{}'), 'Checking the Zuper documentation');
});

test('the ledger reports tool results, but not the seed or carried-over evidence', () => {
  const ledger = new EvidenceLedger();
  const seen: string[] = [];
  ledger.onToolResult((e) => seen.push(e.tool));
  ledger.record('seed', 'seed', 'a');
  ledger.preload(['b']);
  ledger.record('get_node_data', '{}', 'c');
  assert.deepEqual(seen, ['get_node_data']);
});
