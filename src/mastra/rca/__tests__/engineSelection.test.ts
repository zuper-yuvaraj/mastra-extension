import assert from 'node:assert/strict';
import { test } from 'node:test';
import { chatEngineSelection } from '../engineSelection';

test('RCA_ENGINE=hydrated puts the first question and the follow-ups on the hydrated engine', () => {
  const s = chatEngineSelection({ RCA_ENGINE: 'hydrated' });
  assert.deepEqual([s.handler, s.firstQuestion, s.followUp], ['rca', 'hydrated', 'hydrated']);
  assert.match(s.summary, /RCA_ENGINE=hydrated; first question: hydrated; follow-ups: hydrated/);
});

test('unset or "pipeline": the older pipeline answers the first question, the investigator the follow-ups', () => {
  for (const env of [{}, { RCA_ENGINE: 'pipeline' }, { RCA_ENGINE: '' }]) {
    const s = chatEngineSelection(env);
    assert.deepEqual([s.handler, s.firstQuestion, s.followUp], ['rca', 'pipeline', 'investigator']);
  }
  assert.match(chatEngineSelection({}).summary, /RCA_ENGINE=\(not set, so pipeline\)/, 'a server that did not read its .env says so');
});

test('anything else goes straight to the tool-using investigator', () => {
  const s = chatEngineSelection({ RCA_ENGINE: 'agent' });
  assert.deepEqual([s.firstQuestion, s.followUp], ['investigator', 'investigator']);
});

test('ZUPER_CHAT_ENGINE=legacy selects the old chat, and RCA_ENGINE is ignored', () => {
  const s = chatEngineSelection({ ZUPER_CHAT_ENGINE: 'legacy', RCA_ENGINE: 'hydrated' });
  assert.equal(s.handler, 'legacy');
  assert.match(s.summary, /LEGACY chat.*RCA_ENGINE is ignored/);
  assert.equal(chatEngineSelection({ ZUPER_CHAT_ENGINE: 'rca' }).handler, 'rca');
});
