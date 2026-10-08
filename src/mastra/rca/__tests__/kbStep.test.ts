import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { ApiEndpointRecord } from '../../knowledge/api/distill';
import type { KnowledgeHit, SearchOptions } from '../../knowledge/search';
import { docsForNodes, kbStep, referenceLinks, type KbNode } from '../kbStep';

const fixed = (value: string) => ({ type: 'FIXED', value });
const nodes: KbNode[] = [
  { name: 'On Job Status Update', key: 'job.status_update', formFields: {} },
  { name: 'Get Job', key: 'zuper_get_record', formFields: { module: fixed('JOB') } },
  { name: 'Check category', key: 'if_else', formFields: {} },
  { name: 'Build payload', key: 'code', formFields: {} },
  { name: 'Update Job', key: 'http_request', formFields: { url: fixed('https://us-east-1.zuperpro.com/api/jobs'), method: fixed('PUT') } },
  { name: 'Set fields', key: 'zuper_update', formFields: { module: fixed('JOB') } },
];

const record = { id: 'wom/jobs/update-job', method: 'PUT', path: '/jobs', title: 'Update a Job', description: 'Updates a job.', sourceFile: 'work-order-management/jobs/update-job.md' } as ApiEndpointRecord;

function fakeSearch() {
  const calls: Array<{ query: string; options: SearchOptions }> = [];
  const search = async (query: string, options: SearchOptions): Promise<KnowledgeHit[]> => {
    calls.push({ query, options });
    return [{ id: query, score: 0.7, kind: options.kind ?? 'x', topic: 't', title: `Doc: ${query}`, text: 'x'.repeat(2000), source_url: `https://docs.test/${encodeURIComponent(query)}` }];
  };
  return { calls, search };
}

test('searches are built from the workflow itself: node types, module actions, trigger', async () => {
  const { calls, search } = fakeSearch();
  await kbStep({ nodes }, { search, records: () => [record] });
  const queries = calls.map((c) => c.query);
  assert.ok(queries.includes('If/Else node in the workflow builder'));
  assert.ok(queries.includes('Code node in the workflow builder'));
  assert.ok(queries.includes('Get job details'), 'native Get Record on JOB -> API doc');
  assert.ok(queries.includes('Update a job'));
  assert.ok(queries.includes('workflow trigger job status update'));
  assert.equal(new Set(queries).size, queries.length, 'no duplicate searches');
});

test('an HTTP node with a literal documented URL gets its endpoint page exactly, with its link', async () => {
  const { search } = fakeSearch();
  const result = await kbStep({ nodes }, { search, records: () => [record] });
  const doc = result.docs.find((d) => d.via === 'endpoint');
  assert.equal(doc?.title, 'Update a Job (PUT /jobs)');
  assert.deepEqual(doc?.forNodes, ['Update Job']);
});

test('the question is searched only with a high score floor, and a failing search loses a link, not the step', async () => {
  const { calls } = fakeSearch();
  const result = await kbStep(
    { nodes: [nodes[1]!], question: 'why was the quote not created?' },
    { search: async (q, o) => { calls.push({ query: q, options: o }); if (o.kind === 'api') throw new Error('down'); return []; }, records: () => [] },
  );
  assert.deepEqual(result.docs, []);
  assert.equal(calls.find((c) => c.query === 'why was the quote not created?')?.options.minScore, 0.5);
});

test('links put the pages for the failure first, are capped, and excerpts are short', async () => {
  const { search } = fakeSearch();
  const result = await kbStep({ nodes }, { search, records: () => [record] });
  assert.ok(result.docs.every((d) => d.text.length <= 601));
  const links = referenceLinks(result, ['Build payload'], 3);
  assert.equal(links.length, 3);
  assert.match(links[0]!.title, /Code node/);
  assert.equal(new Set(links.map((l) => l.url)).size, 3);
  assert.ok(docsForNodes(result, ['Build payload']).every((d) => d.forNodes.length === 0 || d.forNodes.includes('Build payload')));
});
