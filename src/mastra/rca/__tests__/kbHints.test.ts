import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { ApiEndpointRecord } from '../../knowledge/api/distill';
import { EvidenceLedger } from '../ledger';
import { kbHints, matchApiEndpoint } from '../kbHints';
import type { NodeRuntime } from '../nodeData';
import type { RcaVerdict } from '../verdict';
import { verifyVerdict } from '../verify';
import { renderCrisp, renderFix } from '../views';

const record = (id: string, method: string, path: string): ApiEndpointRecord =>
  ({ id, area: 'a', module: 'jobs', title: id, method, path, description: '', params: [], requestBody: null, response: null, associations: [], sourceFile: '' }) as ApiEndpointRecord;

const records = [record('jobs/get', 'GET', '/jobs/{job_uid}'), record('jobs/update', 'PUT', '/jobs'), record('jobs/create', 'POST', '/jobs')];

const runtime = (over: Partial<NodeRuntime>): NodeRuntime => ({
  node_status: 'FAILED', http_status: 404, error: 'Not Found', output_value: null, remarks: null,
  iteration: null, total_iterations: null, resolved_fields: { url: 'https://x.zuperpro.com/api/jobs/abc', method: 'GET' }, received_from: null, ...over,
});

test('a request URL matches the one documented endpoint, with or without the /api prefix', () => {
  assert.equal(matchApiEndpoint('https://x.zuperpro.com/api/jobs/abc-123', 'get', records)?.id, 'jobs/get');
  assert.equal(matchApiEndpoint('https://x.zuperpro.com/jobs/abc-123', 'GET', records)?.id, 'jobs/get');
  assert.equal(matchApiEndpoint('https://x.zuperpro.com/api/jobs', 'PUT', records)?.id, 'jobs/update');
  assert.equal(matchApiEndpoint('https://x.zuperpro.com/api/nothing', 'GET', records), null);
  assert.equal(matchApiEndpoint('not a url', 'GET', records), null);
});

test('hints: node info always, Code runtime for a Code node, endpoint docs (strong) for an HTTP 4xx', () => {
  const http = kbHints({ nodeKey: 'http_request_v2', runtime: runtime({}), records });
  assert.deepEqual(http.map((h) => [h.tool, h.strong]), [['get_node_info', false], ['get_api_endpoint', true]]);
  assert.deepEqual(http[1]!.args, { id: 'jobs/get' });

  assert.deepEqual(kbHints({ nodeKey: 'code', runtime: null, records }).map((h) => h.tool), ['get_node_info', 'get_code_runtime']);
  assert.equal(kbHints({ nodeKey: 'http_request_v2', runtime: runtime({ http_status: 200 }), records }).some((h) => h.strong), false);
  assert.equal(kbHints({ nodeKey: 'http_request_v2', runtime: { unavailable: 'x' }, records }).some((h) => h.strong), false);
});

const verdict = (over: Partial<RcaVerdict> = {}): RcaVerdict => ({
  status: 'failed',
  summary: 's',
  failed_node: { uid: 'n1', name: 'Call', error: 'Not Found' },
  root_cause: { node_uid: 'n1', name: 'Call', category: 'EXTERNAL_API_ERROR', explanation: 'wrong path' },
  evidence_chain: [{ node_uid: 'n1', name: 'Call', observation: 'o', quote: 'Not Found' }],
  fix: null,
  confidence: 'high',
  knowledge_used: [{ tool: 'get_api_endpoint', id: 'jobs/get' }],
  references: [],
  workflow_purpose: '',
  headline: '',
  ...over,
});
const strong = [{ tool: 'get_api_endpoint', strong: true, why: 'compare with GET /jobs/{job_uid}' }];

test('documentation text never verifies a quote, but the lookup is remembered', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', 'Not Found');
  ledger.recordKnowledge('get_api_endpoint', '{}', 'Returns 204 on success, a documented sentence');
  assert.equal(ledger.contains('a documented sentence'), false);
  assert.equal(ledger.contains('Not Found'), true);
  assert.deepEqual([...ledger.knowledgeTools()], ['get_api_endpoint']);
  assert.deepEqual(ledger.exportTexts(1000), ['Not Found'], 'docs are not carried as evidence');
});

test('skipping the documentation that applies lowers confidence and says so', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', 'Not Found');
  const v = verifyVerdict(verdict(), { nodeUids: new Set(['n1']), ledger, kbHints: strong });
  assert.equal(v.confidence, 'medium');
  assert.match(v.issues.join(' '), /documentation that applies here was not consulted/);
  assert.deepEqual(v.knowledge_used, [], 'a lookup that was never made is not claimed');
  assert.match(v.adjustments?.join(' ') ?? '', /never looked up/);

  ledger.recordKnowledge('get_api_endpoint', '{}', 'doc');
  const ok = verifyVerdict(verdict(), { nodeUids: new Set(['n1']), ledger, kbHints: strong });
  assert.equal(ok.confidence, 'high');
  assert.equal(ok.knowledge_used.length, 1);
});

test('quoted previews are read, and a Zuper URL matching no documented endpoint is a strong lead', () => {
  const quoted = runtime({ resolved_fields: { url: '"https://us-east-1.zuperpro.com/api/appointments"', method: '"PUT"' } });
  const hints = kbHints({ nodeKey: 'http_request', runtime: quoted, records });
  const lead = hints.find((h) => h.tool === 'search_knowledge');
  assert.ok(lead?.strong);
  assert.deepEqual(lead?.args, { query: 'PUT /api/appointments', kind: 'api' });

  const outside = runtime({ resolved_fields: { url: 'https://example.com/x', method: 'GET' } });
  assert.equal(kbHints({ nodeKey: 'http_request', runtime: outside, records }).some((h) => h.strong), false);
});

test('an API hint is met by any API lookup', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', 'Not Found');
  ledger.recordKnowledge('list_api_endpoints', '{}', 'doc');
  const v = verifyVerdict(verdict({ knowledge_used: [] }), { nodeUids: new Set(['n1']), ledger, kbHints: strong });
  assert.equal(v.confidence, 'high');
});

test('only references whose URL a documentation lookup returned survive, and they render last', () => {
  const ledger = new EvidenceLedger();
  ledger.record('get_node_data', '{}', 'Not Found');
  ledger.recordKnowledge('get_api_endpoint', '{}', { found: true, source_url: 'https://developers.zuper.co/reference/create-job' });
  const v = verifyVerdict(
    verdict({
      references: [
        { title: 'Create a Job', url: 'https://developers.zuper.co/reference/create-job' },
        { title: 'Invented', url: 'https://developers.zuper.co/reference/not-real' },
      ],
    }),
    { nodeUids: new Set(['n1']), ledger },
  );
  assert.deepEqual(v.references.map((r) => r.title), ['Create a Job']);
  assert.match(v.adjustments?.join(' ') ?? '', /1 reference/);
  const html = renderCrisp(v);
  assert.ok(html.endsWith('<li><a href="https://developers.zuper.co/reference/create-job">Create a Job</a></li></ul>'), html);
  assert.ok(renderFix({ ...v, fix: { description: 'd', node_uid: null, suggested_change: null } }).endsWith('</ul>'));
});
