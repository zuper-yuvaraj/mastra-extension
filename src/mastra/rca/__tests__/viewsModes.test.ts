import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CHIP_RCA } from '../intent';
import type { VerifiedVerdict } from '../verdict';
import { CHIP_DETAIL, CHIP_FIX, chatTextToHtml, chipsFor, classifyChipRequest, renderCrisp, renderView } from '../views';

function verdict(overrides: Partial<VerifiedVerdict> = {}): VerifiedVerdict {
  return {
    status: 'failed',
    workflow_purpose: 'Keeps jobs moving: when a proposal is approved, it books the sales visit.',
    headline: 'While trying to update the appointment, the step "update Appointment" failed',
    summary: 'The automation was updating the visit time.\n\nThe update was refused, so nothing after it ran.',
    failed_node: { uid: 'n2', name: 'update Appointment', error: 'not found' },
    root_cause: { node_uid: 'n1', name: 'Construct', category: 'CODE_ERROR', explanation: 'It built the update address without saying which appointment to change.' },
    evidence_chain: [{ node_uid: 'n1', name: 'Construct', observation: 'It leaves out the appointment id.', quote: 'x', verified: true }],
    fix: { description: 'Add the appointment id to the address', node_uid: 'n1', suggested_change: 'url = `${base}/appointments/${uid}`' },
    confidence: 'high',
    knowledge_used: [],
    references: [{ title: 'Update an Appointment', url: 'https://docs.test/appointments' }],
    issues: [],
    mode: 'explain',
    audience: 'business',
    ...overrides,
  };
}

// ---- the text converter ---------------------------------------------------------------------------------------

test('text becomes paragraphs, lists and code blocks', () => {
  const html = chatTextToHtml('First line\nsame paragraph\n\n- one\n- two\n\n1. a\n2) b\n\n```\nconst x = 1 < 2;\n```\n\nDone with `code` and **bold**.');
  assert.equal(
    html,
    '<p>First line same paragraph</p><ul><li>one</li><li>two</li></ul><ul><li>a</li><li>b</li></ul><pre><code>const x = 1 &lt; 2;</code></pre><p>Done with <code>code</code> and <strong>bold</strong>.</p>',
  );
});

test('whatever the model wrote cannot add markup, and only the kept tags appear', () => {
  const html = chatTextToHtml('<script>alert(1)</script> & "quoted"\n- <b>x</b>\n```\n<img src=x onerror=1>\n```');
  assert.ok(!html.includes('<script') && !html.includes('<b>') && !html.includes('<img'));
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt; &amp; &quot;quoted&quot;/);
  const allowed = new Set(['p', 'strong', 'em', 'ul', 'li', 'code', 'pre']);
  for (const tag of html.match(/<\/?([a-z0-9]+)/g) ?? []) assert.ok(allowed.has(tag.replace(/<\/?/, '')), tag);
});

test('an unfinished code fence and empty text do not break it', () => {
  assert.equal(chatTextToHtml('```\nlet a'), '<pre><code>let a</code></pre>');
  assert.equal(chatTextToHtml('   \n\n  '), '');
});

// ---- explain: no RCA ------------------------------------------------------------------------------------------

test('explain: what the workflow does, "While trying to...", told at length, then confidence and references; no RCA', () => {
  assert.equal(
    renderCrisp(verdict()),
    '<p><strong>What this workflow does</strong></p><p>Keeps jobs moving: when a proposal is approved, it books the sales visit.</p>' +
      '<p><strong>While trying to update the appointment, the step &quot;update Appointment&quot; failed</strong></p>' +
      '<p>The automation was updating the visit time.</p><p>The update was refused, so nothing after it ran.</p>' +
      '<p><strong>Confidence: High</strong></p><p>Every supporting detail was checked against the execution data.</p>' +
      '<p><strong>Reference</strong></p><ul><li><a href="https://docs.test/appointments">Update an Appointment</a></li></ul>',
  );
  const html = renderCrisp(verdict());
  assert.ok(!html.includes('RCA') && !html.includes('Root cause') && !html.includes('appointment id'), 'the cause is kept for the RCA chip');
});

test('explain still carries a labelled hypothesis and the confidence caveat', () => {
  const html = renderCrisp(verdict({ confidence: 'low', root_cause: null, issues: ['Possible cause (not confirmed): Construct - leaves out the id'] }));
  assert.match(html, /<em>Possible cause \(not confirmed\): Construct/);
  assert.match(html, /Confidence: Low/);
});

// ---- chat ------------------------------------------------------------------------------------------------------

test('chat: the reply as written, with no headings and no confidence line', () => {
  const html = renderCrisp(
    verdict({ mode: 'chat', status: 'answered', workflow_purpose: '', headline: '', summary: '', root_cause: null, fix: null, evidence_chain: [], references: [], chat_reply: 'It returned 3 appointments.\n\n- first: Sales Visit\n- second: Install' }),
  );
  assert.equal(html, '<p>It returned 3 appointments.</p><ul><li>first: Sales Visit</li><li>second: Install</li></ul>');
});

test('chat adds one honest note only when the evidence behind it is limited', () => {
  const limited = renderCrisp(
    verdict({ mode: 'chat', status: 'answered', root_cause: null, fix: null, confidence: 'medium', chat_reply: 'It looks empty.', evidence_chain: [{ node_uid: 'n', name: 'Get Job', observation: 'o', quote: 'q', verified: false }] }),
  );
  assert.match(limited, /<p><em>Note: part of the supporting evidence could not be verified against the data\.<\/em><\/p>/);
  const clean = renderCrisp(verdict({ mode: 'chat', status: 'answered', root_cause: null, fix: null, chat_reply: 'It is filled in.', references: [] }));
  assert.ok(!clean.includes('Note:'));
});

test('a chat answer with an empty reply falls back to the summary rather than showing nothing', () => {
  assert.equal(renderCrisp(verdict({ mode: 'chat', status: 'answered', chat_reply: '', summary: 'Nothing to add.', references: [], evidence_chain: [] })), '<p>Nothing to add.</p>');
});

// ---- chips -----------------------------------------------------------------------------------------------------

test('chips: explain offers the root cause and the fix; rca and the older engines offer evidence and the fix; chat none', () => {
  assert.deepEqual(chipsFor(verdict()), [CHIP_RCA, CHIP_FIX]);
  assert.deepEqual(chipsFor(verdict({ root_cause: null, fix: null })), [], 'no root cause found, so none to offer');
  assert.deepEqual(chipsFor(verdict({ mode: 'rca' })), [CHIP_DETAIL, CHIP_FIX]);
  assert.deepEqual(chipsFor(verdict({ mode: undefined })), [CHIP_DETAIL, CHIP_FIX]);
  assert.deepEqual(chipsFor(verdict({ mode: 'chat' })), []);
});

test('the root-cause chip re-renders an explanation as the RCA layout, from the stored answer', () => {
  const html = renderView(verdict(), 'rca');
  assert.match(html, /<p><strong>RCA<\/strong><\/p><p><strong>Root cause:<\/strong> Construct \(code error\) — It built the update address without saying which appointment to change\.<\/p>/);
  assert.match(html, /What this workflow does/);
});

test('only the exact chip label is a chip; a typed request goes through the router', () => {
  assert.equal(classifyChipRequest(CHIP_RCA), 'rca');
  assert.equal(classifyChipRequest('  Find the root cause (RCA)  '), 'rca');
  assert.equal(classifyChipRequest('find the root cause'), null);
  assert.equal(classifyChipRequest('Give me the fix'), 'fix');
});
