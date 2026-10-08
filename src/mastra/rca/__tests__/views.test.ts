import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { VerifiedVerdict } from '../verdict';
import { CHIP_DETAIL, CHIP_FIX, chipsFor, classifyChipRequest, renderCrisp, renderDetail, renderFix } from '../views';

function verdict(overrides: Partial<VerifiedVerdict> = {}): VerifiedVerdict {
  return {
    status: 'failed',
    summary: 'Create Job failed because the payload had no customer.',
    failed_node: { uid: 'n2', name: 'Create Job', error: 'customer required' },
    root_cause: { node_uid: 'n1', name: 'Payload for job', category: 'CODE_ERROR', explanation: 'it never sets customer' },
    evidence_chain: [{ node_uid: 'n1', name: 'Payload for job', observation: 'no customer key', quote: '"job":{}', verified: true }],
    fix: { description: 'Set the customer in the payload', node_uid: 'n1', suggested_change: 'payload.job.customer = customer;' },
    confidence: 'high',
    knowledge_used: [],
    references: [],
    workflow_purpose: '',
    headline: '',
    issues: [],
    ...overrides,
  };
}

test('crisp is laid out under headers: purpose, headline, body, confidence, references', () => {
  assert.equal(
    renderCrisp(verdict({ workflow_purpose: 'Creates a job and fills its custom fields.', headline: 'While creating the job, Create Job failed' })),
    '<p><strong>What this workflow does</strong></p><p>Creates a job and fills its custom fields.</p>' +
      '<p><strong>While creating the job, Create Job failed</strong></p>' +
      '<p>Create Job failed because the payload had no customer.</p>' +
      '<p><strong>Detailed RCA</strong></p><ul><li><strong>Payload for job</strong>: no customer key</li></ul>' +
      '<p><strong>Confidence: High</strong></p><p>Every supporting detail was checked against the execution data.</p>',
  );
});

test('sections with nothing to say are left out', () => {
  const html = renderCrisp(verdict({ status: 'answered', root_cause: null, evidence_chain: [] }));
  assert.equal(html, '<p>Create Job failed because the payload had no customer.</p>');
  const canned = renderCrisp(verdict({ status: 'insufficient_evidence', root_cause: null, evidence_chain: [], confidence: 'low' }));
  assert.ok(!canned.includes('Confidence'), 'a canned answer states no confidence');
});

test('crisp adds one honest caveat when confidence is lower, and says why', () => {
  const gap = renderCrisp(
    verdict({ confidence: 'medium', issues: ['Some node data could not be loaded, so parts of this analysis could not be checked against the real data.'] }),
  );
  assert.match(gap, /<strong>Confidence: Medium<\/strong><\/p><p>Some of the data could not be read/);
  const unverified = renderCrisp(
    verdict({ confidence: 'medium', evidence_chain: [{ node_uid: 'n1', name: 'X', observation: 'o', quote: 'q', verified: false }] }),
  );
  assert.match(unverified, /could not be verified against the data/);
});

test('an unconfirmed hypothesis is shown, labelled, instead of being lost', () => {
  const v = verdict({
    status: 'insufficient_evidence',
    root_cause: null,
    confidence: 'low',
    issues: ['Possible cause (not confirmed): Construct - builds the URL wrongly'],
  });
  assert.match(renderCrisp(v), /Possible cause \(not confirmed\): Construct/);
});

test('detail shows the failed node, root cause and evidence with verification marks', () => {
  const html = renderDetail(verdict({ evidence_chain: [{ node_uid: 'n1', name: 'P', observation: 'o', quote: 'q', verified: false }] }));
  assert.match(html, /Failed at:/);
  assert.match(html, /Root cause \(code error\) at Payload for job/);
  assert.match(html, /could not be verified/);
});

test('fix renders code in a pre block, escaped, and warns when confidence is not high', () => {
  const html = renderFix(verdict({ fix: { description: 'Do <b>this</b>', node_uid: null, suggested_change: 'if (a < b && c) {}' } }));
  assert.match(html, /<pre><code>if \(a &lt; b &amp;&amp; c\) \{\}<\/code><\/pre>/);
  assert.match(html, /Do &lt;b&gt;this&lt;\/b&gt;/);
  assert.ok(!html.includes('Check this against your workflow'));
  assert.match(renderFix(verdict({ confidence: 'low' })), /Check this against your workflow/);
});

test('fix with nothing to offer says so and points at the root cause', () => {
  const html = renderFix(verdict({ fix: null }));
  assert.match(html, /could not determine a specific fix/);
  assert.match(html, /Payload for job/);
});

test('chips only offer what has something to show', () => {
  assert.deepEqual(chipsFor(verdict()), [CHIP_DETAIL, CHIP_FIX]);
  assert.deepEqual(chipsFor(verdict({ fix: null })), [CHIP_DETAIL]);
  assert.deepEqual(chipsFor(verdict({ fix: null, root_cause: null, evidence_chain: [] })), []);
});

test('typed or clicked chip requests are recognised; real questions are not', () => {
  for (const m of ['Show evidence', 'Explain in detail', 'explain it in detail', 'more detail', 'Walk me through it', 'show the evidence', 'How did you conclude that?']) {
    assert.equal(classifyChipRequest(m), 'detail', m);
  }
  for (const m of ['Give me the fix', 'how do I fix it?', 'what is the fix', 'fix it', "what's the fix?"]) {
    assert.equal(classifyChipRequest(m), 'fix', m);
  }
  for (const m of ['why is customer null?', 'explain why the loop stopped', 'what was the url?', 'fix the customer lookup in Get Job and also tell me why']) {
    assert.equal(classifyChipRequest(m), null, m);
  }
});

test('every view only uses tags the extension sanitizer keeps', () => {
  const allowed = new Set(['p', 'strong', 'em', 'ul', 'li', 'code', 'pre']);
  const html = [renderCrisp(verdict({ confidence: 'low' })), renderDetail(verdict()), renderFix(verdict())].join('');
  for (const tag of html.match(/<\/?([a-z0-9]+)/g) ?? []) assert.ok(allowed.has(tag.replace(/<\/?/, '')), tag);
});

test('ids are removed from replies unless the user asked for them', async () => {
  const { withoutIds } = await import('../views');
  const id = 'e80d3250-a456-444f-95f8-58a9a0ec901b';
  assert.equal(withoutIds(`<p>Create Job (${id}) failed for job ${id}.</p>`, 'why did it fail?'), '<p>Create Job failed for job.</p>');
  assert.equal(withoutIds(`<p>job ${id}</p>`, 'what is the job uuid?'), `<p>job ${id}</p>`);
  assert.equal(withoutIds('<p>order 1234 failed</p>', 'why'), '<p>order 1234 failed</p>');
});

test('lines about our reader failing are limits on the analysis, not findings, so they are not shown as RCA', () => {
  const html = renderCrisp(
    verdict({
      evidence_chain: [
        { node_uid: 'n1', name: 'Get Job', observation: 'its data could not be loaded', quote: '"unavailable":"FETCH_FAILED"', verified: true },
        { node_uid: 'n1', name: 'If/Else', observation: 'the condition checks the category', quote: 'category', verified: true },
      ],
    }),
  );
  assert.ok(!html.includes('could not be loaded'));
  assert.match(html, /<strong>If\/Else<\/strong>: the condition checks the category/);
});

test('references are links, escaped, and only https addresses become links', async () => {
  const { renderReferences } = await import('../verdict');
  assert.equal(
    renderReferences([{ title: 'Update a Job (PUT /jobs)', url: 'https://developers.zuper.co/reference/update-job' }]),
    '<p><strong>Reference</strong></p><ul><li><a href="https://developers.zuper.co/reference/update-job">Update a Job (PUT /jobs)</a></li></ul>',
  );
  const odd = renderReferences([
    { title: 'x', url: 'javascript:alert(1)' },
    { title: 'Q"uote', url: 'https://docs.zuper.co/a"onmouseover="x' },
  ]);
  assert.ok(!odd.includes('<a href="javascript'), 'a non-https address is never a link');
  assert.ok(!odd.includes('"onmouseover="'), 'quotes in an address cannot break out of the attribute');
  assert.equal(renderReferences([]), '');
});
