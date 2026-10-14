import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AUDIENCE_RULES, businessLeaks, leakMessage } from '../audience';
import { buildHydratedInstructions } from '../hydratedInstructions';

test('a business answer in everyday words has no leaks', () => {
  const leaks = businessLeaks({
    workflow_purpose: 'Makes sure that when a proposal is approved, the sales visit is booked and the customer is told.',
    headline: 'While trying to update the visit time, the step "update Appointment" failed',
    summary: 'Zuper said it could not find that appointment, so the later steps did not run and the customer was not told.',
  });
  assert.deepEqual(leaks, []);
});

test('the clear technical leaks are found, each with the field it is in', () => {
  const leaks = businessLeaks({
    summary: 'The HTTP node returned 404 for the API call.',
    explanation: 'The expression {{$.getLatestNodeData("Get Job")}} gave a null payload for 936e6181-ebe7-4f18-9a2b-a54a995daef9 in JSON.',
    chat_reply: 'Check the `url` endpoint and the node_uid.',
  });
  const terms = (field: string) => leaks.filter((l) => l.field === field).map((l) => l.term);
  assert.deepEqual(terms('summary').sort(), ['API', 'HTTP', '"node"', 'a status code'].sort());
  assert.ok(['an id', 'an expression ({{ }})', 'a field path ($.)', 'JSON', 'payload', 'null or undefined'].every((t) => terms('explanation').includes(t)), terms('explanation').join(','));
  assert.ok(['code in backticks', 'endpoint', 'uid'].every((t) => terms('chat_reply').includes(t)), terms('chat_reply').join(','));
});

test('ordinary words that merely look technical are not flagged', () => {
  assert.deepEqual(businessLeaks({ summary: 'The appointment was rescheduled for 4 jobs at 5:00 on the 15th; the autonomous crew, a nodding customer and a pie chart are fine.' }), []);
});

test('empty and missing fields are skipped', () => {
  assert.deepEqual(businessLeaks({ a: '', b: undefined }), []);
});

test('the message sent back names each field and what to change, and keeps the facts', () => {
  const text = leakMessage([
    { field: 'summary', term: 'HTTP' },
    { field: 'summary', term: 'API' },
    { field: 'chat_reply', term: 'JSON' },
  ]);
  assert.match(text, /- summary: HTTP, API/);
  assert.match(text, /- chat_reply: JSON/);
  assert.match(text, /say "step" instead of "node"/);
  assert.match(text, /Keep every fact; change only the wording/);
});

test('the instructions define the three response modes and both audiences, using the shared rules', () => {
  const text = buildHydratedInstructions();
  assert.match(text, /RESPONSE MODES/);
  for (const mode of ['- explain:', '- rca:', '- chat:']) assert.ok(text.includes(mode), mode);
  assert.match(text, /Do NOT explain the upstream root cause or show evidence in the summary/);
  assert.match(text, /status: answered\. chat_reply:/);
  assert.ok(text.includes(AUDIENCE_RULES), 'the audience rules are the shared ones');
  assert.match(text, /The audience decides the wording of EVERY field/);
});
