// Usage: npm run rca:e2e
// In-process end-to-end check of POST /zuper/rca: HTTP request -> route -> Mastra workflow -> real
// investigator agent (real model, needs OPENAI_API_KEY) -> verified verdict. Only the Zuper network
// calls are stubbed (fetch), serving the synthetic execution. Uses a minimal Mastra instance, so
// nothing is exported to the Mastra platform or written to the app database.

import { Mastra } from '@mastra/core/mastra';
import { rcaInvestigatorAgent } from '../src/mastra/agents/rcaInvestigatorAgent';
import { handleZuperRca } from '../src/mastra/routes/zuperRcaRoute';
import { runSecretCount } from '../src/mastra/rca/runSecrets';
import { rcaWorkflow } from '../src/mastra/workflows/rcaWorkflow';
import { fakeExecution, nodeData } from '../src/mastra/rca/__tests__/fakeExecution';

const WF = 'wf-synthetic-1';
const EX = 'exec-synthetic-1';
const BASE = 'https://offline.zuperpro.com';

// ── stub the Zuper API ───────────────────────────────────────────────────────────────────────────
const execution = fakeExecution(true);
const seenAuth = new Set<string>();
let zuperCalls = 0;
const realFetch = globalThis.fetch;
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input);
  if (!url.startsWith(BASE)) return realFetch(input, init); // model provider calls pass through
  zuperCalls++;
  seenAuth.add(String((init?.headers as Record<string, string> | undefined)?.authorization));
  const json = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } });
  if (url.endsWith(`/api/workflows/${WF}/executions/${EX}/summary`)) return json(execution.summary);
  const node = /\/nodes\/([^/?]+)$/.exec(url)?.[1];
  if (node && node in nodeData) return json(nodeData[node]);
  return new Response('not found', { status: 404 });
}) as typeof fetch;

// ── app ──────────────────────────────────────────────────────────────────────────────────────────
// A minimal stand-in for Hono's Context: the handler only uses req.header, req.json, json and get.
const mastra = new Mastra({ agents: { rcaInvestigatorAgent }, workflows: { rcaWorkflow } });

// Remember every run the route creates, so the persisted runs can be inspected afterwards.
const runIds: string[] = [];
const workflow = mastra.getWorkflow('rcaWorkflow');
const createRun = workflow.createRun.bind(workflow);
workflow.createRun = (async (...args: Parameters<typeof createRun>) => {
  const run = await createRun(...args);
  runIds.push(run.runId);
  return run;
}) as typeof workflow.createRun;

function fakeContext(headers: Record<string, string>, rawBody: string) {
  const lower = Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]));
  return {
    req: {
      header: (name: string) => lower[name.toLowerCase()],
      json: async () => JSON.parse(rawBody),
    },
    json: (payload: unknown, status = 200) =>
      new Response(JSON.stringify(payload), { status, headers: { 'content-type': 'application/json' } }),
    get: (key: string) => (key === 'mastra' ? mastra : undefined),
  };
}

const body = { apiUrl: BASE, workflowBuilderUrl: BASE, workflowUid: WF, executionUid: EX };
const call = async (label: string, init: { headers?: Record<string, string>; body?: unknown; raw?: string }) => {
  const started = Date.now();
  const res = await handleZuperRca(fakeContext(init.headers ?? {}, init.raw ?? JSON.stringify(init.body)) as never);
  const json: any = await res.json();
  console.log(`\n[${label}] HTTP ${res.status} in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  return { status: res.status, json };
};
const auth = { authorization: 'Bearer test-token-123' };

let failures = 0;
const expect = (name: string, ok: boolean, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `  ${detail}`}`);
};

// request validation (no LLM)
expect('no token -> 401', (await call('no token', { body })).status === 401);
expect('non-Zuper host -> 400 HOST_NOT_ALLOWED', (await call('bad host', { headers: auth, body: { ...body, apiUrl: 'https://evil.example.com' } })).json.error === 'HOST_NOT_ALLOWED');
expect('internal address -> 400', (await call('ssrf', { headers: auth, body: { ...body, workflowBuilderUrl: 'https://169.254.169.254' } })).status === 400);
expect('path-injection uid -> 400', (await call('bad uid', { headers: auth, body: { ...body, executionUid: '../../admin' } })).status === 400);
expect('bad json -> 400', (await call('bad json', { headers: auth, raw: '{nope' })).status === 400);

// the real run
const first = await call('first run (real agent)', { headers: auth, body });
const d = first.json.data;
expect('first run ok', first.status === 200 && first.json.ok === true, JSON.stringify(first.json).slice(0, 300));
expect('status failed', d?.status === 'failed', String(d?.status));
expect('root cause is Get Job', d?.root_cause?.name === 'Get Job', JSON.stringify(d?.root_cause));
expect('every quote verified', d?.evidence_chain?.length > 0 && d.evidence_chain.every((e: any) => e.verified), JSON.stringify(d?.issues));
expect('html present and escaped', typeof d?.html === 'string' && d.html.includes('<strong>') && !d.html.includes('<script'));
expect('not served from cache', d?.meta?.cached === false);
console.log(`        summary: ${d?.summary}`);
console.log(`        meta: ${JSON.stringify(d?.meta)}`);

// cache
const callsBefore = zuperCalls;
const second = await call('second run (same request)', { headers: auth, body });
expect('second run served from cache', second.json.data?.meta?.cached === true);
expect('cache made no Zuper calls', zuperCalls === callsBefore);

// a different account must not be served the first account's analysis
const other = await call('other account, cache probe', { headers: { authorization: 'Bearer another-token-456' }, body: { ...body, question: 'why did it fail? (probe)' } });
expect('different token + question is not a cache hit', other.json.data?.meta?.cached !== true);

// the token reached Zuper but is nowhere in the response
const serialized = JSON.stringify(first.json);
expect('bearer token sent to Zuper', seenAuth.has('Bearer test-token-123'));
expect('token not echoed in the response', !serialized.includes('test-token-123'));

// A failing run (the execution does not exist) maps to the upstream status, and leaves nothing behind.
const missing = await call('unknown execution', { headers: auth, body: { ...body, executionUid: 'exec-missing-1' } });
expect('unknown execution -> 404 (not a blanket 500)', missing.status === 404, `${missing.status} ${JSON.stringify(missing.json)}`);
expect('no in-memory secrets are left after success or failure', runSecretCount() === 0, String(runSecretCount()));

// Mastra persists a run's input, outputs and request context. The token must not be in any of them.
let persisted = '';
for (const id of runIds) {
  persisted += JSON.stringify(
    await workflow.getWorkflowRunById(id, { fields: ['requestContext', 'result', 'steps', 'payload', 'error'] as never }),
  );
}
expect(`inspected ${runIds.length} stored run(s)`, runIds.length >= 3, String(runIds.length));
expect('first token is not in any stored run', !persisted.includes('test-token-123'));
expect('second token is not in any stored run', !persisted.includes('another-token-456'));

console.log(`\n${failures === 0 ? 'all passed' : `${failures} failed`}`);
process.exit(failures === 0 ? 0 : 1);
