// Usage: npm run rca:chat-e2e
// In-process end-to-end check of POST /zuper/chat on the HYDRATED engine (RCA_ENGINE=hydrated):
// HTTP request -> route -> hydrated engine (workflow summary, every reference dereferenced, one pack) ->
// real model (needs OPENAI_API_KEY) -> verified answer -> chat HTML. Only the Zuper network calls are stubbed
// (fetch), serving a REAL captured execution (fixtures/rca/update-appointment-404.json). It checks the whole
// conversation: first question, the chips (no model call), a follow-up (same engine, no new Zuper calls),
// streaming, validation, and that no token or id leaks into a reply. Uses a minimal Mastra instance, so
// nothing is exported to the Mastra platform or written to the app database.

process.env.RCA_ENGINE = 'hydrated';

import { Mastra } from '@mastra/core/mastra';
import { rcaAnalystAgent } from '../src/mastra/agents/rcaAnalystAgent';
import { rcaChatAgent } from '../src/mastra/agents/rcaChatAgent';
import { rcaEvidenceAgent } from '../src/mastra/agents/rcaEvidenceAgent';
import { rcaIntentAgent } from '../src/mastra/agents/rcaIntentAgent';
import { rcaInvestigatorAgent } from '../src/mastra/agents/rcaInvestigatorAgent';
import { rcaUnderstandAgent } from '../src/mastra/agents/rcaUnderstandAgent';
import { loadFixture } from '../src/mastra/rca/fixture';
import { handleRcaChat } from '../src/mastra/routes/zuperRcaChatRoute';
import { rcaPipelineWorkflow } from '../src/mastra/workflows/rcaPipelineWorkflow';

const BASE = 'https://offline.zuperpro.com';
const fixture = loadFixture('fixtures/rca/update-appointment-404.json');
const WF = fixture.workflow_uid;
const EX = fixture.summary.workflow_execution.execution_uid;
const TOKEN = 'e2e-token-123456';

// ── stub the Zuper API with the captured execution ─────────────────────────────
let zuperCalls = 0;
const seenAuth = new Set<string>();
const realFetch = globalThis.fetch;
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input);
  if (!url.startsWith(BASE)) return realFetch(input, init); // model provider calls pass through
  zuperCalls++;
  seenAuth.add(String((init?.headers as Record<string, string> | undefined)?.authorization));
  const json = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } });
  if (url.endsWith(`/api/workflows/${WF}/executions/${EX}/summary`)) return json(fixture.summary);
  const match = /\/nodes\/([^/?]+)(?:\?iteration=(\d+))?$/.exec(url);
  if (match) {
    const [, uid, iteration] = match;
    const payload = iteration !== undefined ? fixture.iteration_data?.[uid!]?.[iteration] : fixture.node_data[uid!];
    if (payload) return json(payload);
  }
  return new Response('not found', { status: 404 });
}) as typeof fetch;

// ── count what the model-backed agents are asked ───────────────────────────────────
const asked = { evidence: 0, understand: 0, investigator: 0, analyst: 0, intent: 0, chat: 0 };
const count = (agent: { generate: (...args: any[]) => Promise<any> }, key: keyof typeof asked) => {
  const original = agent.generate.bind(agent);
  agent.generate = (async (...args: any[]) => {
    asked[key]++;
    return original(...args);
  }) as typeof agent.generate;
};
count(rcaEvidenceAgent as never, 'evidence');
count(rcaUnderstandAgent as never, 'understand');
count(rcaInvestigatorAgent as never, 'investigator');
count(rcaAnalystAgent as never, 'analyst');
count(rcaIntentAgent as never, 'intent');
count(rcaChatAgent as never, 'chat');

const mastra = new Mastra({
  agents: { rcaInvestigatorAgent, rcaAnalystAgent, rcaUnderstandAgent, rcaEvidenceAgent, rcaIntentAgent, rcaChatAgent },
  workflows: { rcaPipelineWorkflow },
});

function fakeContext(headers: Record<string, string>, rawBody: string, signal = new AbortController().signal) {
  const lower = Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]));
  return {
    req: { header: (name: string) => lower[name.toLowerCase()], json: async () => JSON.parse(rawBody), raw: { signal } },
    header: () => undefined,
    json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status, headers: { 'content-type': 'application/json' } }),
    get: (key: string) => (key === 'mastra' ? mastra : undefined),
  };
}

const auth = { authorization: `Bearer ${TOKEN}` };
const base = { apiUrl: BASE, workflowBuilderUrl: BASE, workflowUid: WF, executionUid: EX };
const user = (content: string) => ({ role: 'user' as const, content });
const bot = (content: string) => ({ role: 'assistant' as const, content });

const call = async (label: string, init: { headers?: Record<string, string>; body?: unknown; raw?: string }) => {
  const started = Date.now();
  const res = await handleRcaChat(fakeContext(init.headers ?? {}, init.raw ?? JSON.stringify(init.body)) as never);
  const text = await res.text();
  console.log(`\n[${label}] HTTP ${res.status} in ${((Date.now() - started) / 1000).toFixed(1)}s`);
  return { status: res.status, text, json: (() => { try { return JSON.parse(text); } catch { return null; } })() };
};

let failures = 0;
const expect = (name: string, ok: boolean, detail = '') => {
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `  ${detail}`}`);
};
const plain = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// validation (no model)
expect('no token -> 401', (await call('no token', { body: { ...base, turns: [user('why did it fail?')] } })).status === 401);
expect('non-Zuper host -> 400', (await call('bad host', { headers: auth, body: { ...base, apiUrl: 'https://evil.example.com', turns: [user('why?')] } })).status === 400);
expect('no model was used for validation', asked.evidence + asked.understand + asked.investigator + asked.analyst + asked.intent + asked.chat === 0);

// 1. the first question
const first = await call('first question', { headers: auth, body: { ...base, turns: [user('why did it fail?')] } });
const reply: string = first.json?.data?.reply ?? '';
expect('first answer ok', first.status === 200 && first.json?.ok === true, first.text.slice(0, 300));
expect('the hydrated engine answered (not the older pipeline or investigator)', asked.evidence >= 1 && asked.analyst === 0 && asked.investigator === 0, JSON.stringify(asked));
expect('the workflow was summarised once', asked.understand === 1, JSON.stringify(asked));
expect('"why did it fail?" is an explanation: purpose + while-trying, and NO RCA section', /What this workflow does/.test(reply) && /<strong>While [^<]+<\/strong>/.test(reply) && !/<strong>RCA<\/strong>/.test(reply), reply.slice(0, 400));
expect('the rules decided it: the router model was not asked', asked.intent === 0, JSON.stringify(asked));
expect('a confidence line is shown', /confidence/i.test(plain(reply)), plain(reply).slice(-300));
expect('business wording: no JSON, HTTP, expressions, status codes or "node"', !/\bJSON\b|\bHTTP\b|\{\{|\$\.|\b4\d\d\b|\bnode\b/i.test(plain(reply)), plain(reply).slice(0, 600));
expect('no ids in the reply', !/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(reply));
expect('offers the RCA chip', (first.json?.data?.suggestions ?? []).includes('Find the root cause (RCA)'), JSON.stringify(first.json?.data?.suggestions));
console.log(`        reply: ${plain(reply).slice(0, 600)}`);

// 2. a chip is re-rendered from the stored verdict: no model, no Zuper
const modelBefore = asked.evidence + asked.understand;
const zuperBefore = zuperCalls;
const fix = await call('chip: Give me the fix', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('Give me the fix')] } });
expect('the chip answers with a fix', fix.status === 200 && /Suggested fix/.test(fix.json?.data?.reply ?? ''), (fix.json?.data?.reply ?? fix.text).slice(0, 300));
expect('the chip used no model and no Zuper call', asked.evidence + asked.understand === modelBefore && zuperCalls === zuperBefore, JSON.stringify({ asked, zuperCalls, zuperBefore }));

// 3. a follow-up goes through the same engine, from the cached pack
const zuperBeforeFollowUp = zuperCalls;
const evidenceBefore = asked.evidence;
const followUp = await call('follow-up', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('which node builds the URL that was sent?')] } });
expect('follow-up ok', followUp.status === 200 && followUp.json?.ok === true, followUp.text.slice(0, 300));
expect('follow-up used the hydrated engine', asked.evidence > evidenceBefore && asked.investigator === 0, JSON.stringify(asked));
expect('follow-up fetched nothing new from Zuper (cached pack)', zuperCalls === zuperBeforeFollowUp, `${zuperCalls - zuperBeforeFollowUp} new call(s)`);
expect('follow-up does not repeat the workflow summary', asked.understand === 1, JSON.stringify(asked));
console.log(`        follow-up: ${plain(followUp.json?.data?.reply ?? '').slice(0, 400)}`);

// 2b. the RCA chip: shown from the stored diagnosis, no model, no Zuper
const beforeRca = { model: asked.evidence + asked.understand + asked.intent, zuper: zuperCalls };
const rca = await call('chip: Find the root cause (RCA)', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('Find the root cause (RCA)')] } });
const rcaReply: string = rca.json?.data?.reply ?? '';
expect('the RCA chip shows the RCA section with a root cause', rca.status === 200 && /<strong>RCA<\/strong>/.test(rcaReply) && /Root cause/.test(rcaReply), rcaReply.slice(0, 300));
expect('the RCA chip used no model and no Zuper call', asked.evidence + asked.understand + asked.intent === beforeRca.model && zuperCalls === beforeRca.zuper, JSON.stringify({ asked, zuperCalls }));
expect('the RCA names the real cause (Construct builds the URL)', /Construct/.test(plain(rcaReply)), plain(rcaReply).slice(0, 400));
console.log(`        rca: ${plain(rcaReply).slice(0, 600)}`);

// 2c. a typed technical RCA request needs a new analysis (the stored one was written for business readers)
const typedRca = await call('typed technical RCA', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('Find the RCA for the 404 on update Appointment, with the expression and JSON that caused it')] } });
const typedReply: string = typedRca.json?.data?.reply ?? '';
expect('a technical RCA is answered, with the RCA section', typedRca.status === 200 && /<strong>RCA<\/strong>/.test(typedReply), typedReply.slice(0, 300));
expect('it is technical: mentions the 404 or the endpoint', /404|Cannot PUT|\/appointments/.test(plain(typedReply)), plain(typedReply).slice(0, 400));
console.log(`        technical rca: ${plain(typedReply).slice(0, 600)}`);

// 2d. chat: a doubt about one step's data is answered freely from the real data, with no template and no chips
const doubt = await call('chat: doubt about a step', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('What did the Get Job step return?')] } });
const doubtReply: string = doubt.json?.data?.reply ?? '';
expect('the chat answer is free-form: no section headings, no chips', doubt.status === 200 && !/What this workflow does|<strong>RCA<\/strong>/.test(doubtReply) && (doubt.json?.data?.suggestions ?? []).length === 0, JSON.stringify({ reply: doubtReply.slice(0, 200), chips: doubt.json?.data?.suggestions }));
expect('it answers, not just declines', plain(doubtReply).length > 40, plain(doubtReply));
console.log(`        chat: ${plain(doubtReply).slice(0, 600)}`);

// 2e. small talk takes the light path: no analysis of the run and no Zuper call
const zuperBeforeChat = zuperCalls;
const evidenceBeforeChat = asked.evidence;
const hello = await call('chat: small talk', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('thanks!')] } });
expect('small talk is answered without analysing the run or calling Zuper', hello.status === 200 && asked.evidence === evidenceBeforeChat && zuperCalls === zuperBeforeChat, JSON.stringify({ asked, zuperCalls }));

// 2f. an unrelated topic is politely declined
const offTopic = await call('chat: unrelated', { headers: auth, body: { ...base, turns: [user('why did it fail?'), bot(reply), user('Write me a poem about the ocean')] } });
expect('an unrelated request is declined, not answered', offTopic.status === 200 && !/waves/i.test(plain(offTopic.json?.data?.reply ?? '')), plain(offTopic.json?.data?.reply ?? '').slice(0, 300));
console.log(`        off-topic: ${plain(offTopic.json?.data?.reply ?? '').slice(0, 300)}`);

// 4. streaming: progress lines, then the result
const streamed = await call('streaming', { headers: auth, body: { ...base, turns: [user('why did it fail?')], stream: true } });
const lines = streamed.text.trim().split('\n').map((l) => JSON.parse(l));
expect('stream has progress then a result', lines[0]?.type === 'progress' && lines.at(-1)?.type === 'result', JSON.stringify(lines.map((l) => l.type)));
expect('stream reports the work', lines.some((l) => /Reading the workflow|Analysing/.test(l.text ?? '')), JSON.stringify(lines.map((l) => l.text).filter(Boolean)));

// 5. nothing sensitive leaks
const everything = [first.text, fix.text, rca.text, typedRca.text, doubt.text, hello.text, offTopic.text, followUp.text, streamed.text].join('\n');
expect('the bearer token reached Zuper', seenAuth.has(`Bearer ${TOKEN}`));
expect('the token is in no reply', !everything.includes(TOKEN));

console.log(`\nmodel calls: ${JSON.stringify(asked)}, Zuper calls: ${zuperCalls}`);
console.log(`${failures === 0 ? 'all passed' : `${failures} failed`}`);
process.exit(failures === 0 ? 0 : 1);
