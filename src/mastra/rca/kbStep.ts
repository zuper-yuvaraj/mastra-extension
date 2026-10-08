// The knowledge-base step of the RCA pipeline. It runs first, from what the workflow is made of (node
// types, the Zuper module each native node acts on, the endpoint each HTTP node calls), before any
// execution data is read. Exact lookups come first; the vector search only fills what they cannot name.
//
// Two outputs: `docs` (short text the analysis may use, for the modules involved in the failure) and
// links to the documentation and API reference for the modules the workflow uses, which are shown to the
// user at the end of every answer. The links come from here, never from the model, so none is invented.

import { loadRecords } from '../knowledge/api/records';
import { apiDocUrl } from '../knowledge/api/urls';
import type { ApiEndpointRecord } from '../knowledge/api/distill';
import { searchKnowledge, type KnowledgeHit, type SearchOptions } from '../knowledge/search';
import { matchApiEndpoint } from './kbHints';

export interface KbNode {
  /** Display name the user gave the node. */
  name: string;
  /** action_key / node type, e.g. "if_else", "zuper_update", "http_request". */
  key: string;
  formFields: Record<string, unknown>;
}

export interface KbDoc {
  title: string;
  url: string;
  /** Short excerpt for the analysis. */
  text: string;
  /** Nodes of the workflow this page is about. */
  forNodes: string[];
  via: 'endpoint' | 'search';
}

export interface KbStepResult {
  docs: KbDoc[];
}

export interface KbStepDeps {
  search?: (query: string, options: SearchOptions) => Promise<KnowledgeHit[]>;
  records?: () => ApiEndpointRecord[];
}

const MAX_TEXT_CHARS = 600;
const MAX_SEARCHES = 14;
/** The question itself is searched only when something close enough exists: "if required". */
const QUESTION_MIN_SCORE = 0.5;

const NATIVE_VERBS: Record<string, (module: string) => string> = {
  zuper_get_record: (m) => `Get ${m} details`,
  zuper_update: (m) => `Update a ${m}`,
  zuper_create: (m) => `Create a ${m}`,
};

const HUMAN_NODE: Record<string, string> = {
  if_else: 'If/Else',
  code: 'Code',
  loop: 'Loop',
  split: 'Split',
  merge: 'Merge',
  wait: 'Wait',
  http_request: 'HTTP Request',
  http_request_v2: 'HTTP Request',
  zuper_get_record: 'Get Record',
  zuper_update: 'Edit Record',
  zuper_create: 'Create Record',
  zuper_email: 'Send Email',
  stop_error: 'Stop and error',
  external_webhook: 'External Webhook',
  schedule: 'Schedule',
};

/** The value of a form field, when it is a plain literal (an expression is only known at run time). */
function fixedValue(field: unknown): string | undefined {
  if (field && typeof field === 'object') {
    const { type, value } = field as { type?: unknown; value?: unknown };
    if (type === 'FIXED' && typeof value === 'string' && value.trim()) return value.trim();
  }
  return undefined;
}

interface Query {
  query: string;
  options: SearchOptions;
  forNodes: string[];
}

function plan(nodes: KbNode[], question: string | undefined): { queries: Query[]; endpointDocs: Array<{ nodes: string[]; url: string; method?: string }> } {
  const queries: Query[] = [];
  const endpointDocs: Array<{ nodes: string[]; url: string; method?: string }> = [];
  const add = (query: string, options: SearchOptions, node: string) => {
    const existing = queries.find((q) => q.query === query);
    if (existing) {
      if (!existing.forNodes.includes(node)) existing.forNodes.push(node);
    } else {
      queries.push({ query, options, forNodes: [node] });
    }
  };

  for (const node of nodes) {
    const isTrigger = !(node.key in HUMAN_NODE) && !node.key.startsWith('zuper_') && /^[a-z]+\.[a-z_]+/.test(node.key);
    if (isTrigger) {
      add(`workflow trigger ${node.key.replace(/[._]/g, ' ')}`, { kind: 'business', area: 'Workflow_builder', topK: 1 }, node.name);
      continue;
    }
    const human = HUMAN_NODE[node.key];
    if (human) add(`${human} node in the workflow builder`, { kind: 'business', area: 'Workflow_builder', topK: 1 }, node.name);

    const verb = NATIVE_VERBS[node.key];
    const module = fixedValue(node.formFields.module);
    if (verb && module) add(verb(module.toLowerCase().replace(/_/g, ' ')), { kind: 'api', topK: 1 }, node.name);

    if (node.key.startsWith('http_request')) {
      const url = fixedValue(node.formFields.url);
      if (url) endpointDocs.push({ nodes: [node.name], url, method: fixedValue(node.formFields.method) });
    }
  }
  if (question && question.trim().length >= 12) {
    queries.push({ query: question.trim(), options: { topK: 2, minScore: QUESTION_MIN_SCORE }, forNodes: [] });
  }
  return { queries: queries.slice(0, MAX_SEARCHES), endpointDocs };
}

function excerpt(text: string): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  return flat.length > MAX_TEXT_CHARS ? `${flat.slice(0, MAX_TEXT_CHARS)}…` : flat;
}

export async function kbStep(input: { nodes: KbNode[]; question?: string }, deps: KbStepDeps = {}): Promise<KbStepResult> {
  const search = deps.search ?? searchKnowledge;
  const { queries, endpointDocs } = plan(input.nodes, input.question);

  const docs = new Map<string, KbDoc>();
  const keep = (doc: KbDoc) => {
    const existing = docs.get(doc.url);
    if (existing) existing.forNodes = [...new Set([...existing.forNodes, ...doc.forNodes])];
    else docs.set(doc.url, doc);
  };

  // Exact: an HTTP node whose URL is a literal that matches one documented endpoint.
  if (endpointDocs.length > 0) {
    const records = deps.records ? deps.records() : safeRecords();
    for (const entry of endpointDocs) {
      const record = matchApiEndpoint(entry.url, entry.method, records);
      const url = record ? apiDocUrl(record.sourceFile) : undefined;
      if (record && url) {
        keep({ title: `${record.title} (${record.method} ${record.path})`, url, text: excerpt(record.description || record.title), forNodes: entry.nodes, via: 'endpoint' });
      }
    }
  }

  // Semantic: everything the exact lookups could not name. A failed search costs a link, not the answer.
  const results = await Promise.all(
    queries.map(async (q) => {
      try {
        return { q, hits: await search(q.query, q.options) };
      } catch {
        return { q, hits: [] as KnowledgeHit[] };
      }
    }),
  );
  for (const { q, hits } of results) {
    for (const hit of hits) {
      if (hit.source_url) keep({ title: hit.title, url: hit.source_url, text: excerpt(hit.text), forNodes: q.forNodes, via: 'search' });
    }
  }
  return { docs: [...docs.values()] };
}

function safeRecords(): ApiEndpointRecord[] {
  try {
    return loadRecords();
  } catch {
    return [];
  }
}

/** The links shown at the end of the answer: the pages for the nodes in focus (the failure and the nodes
 * it traces back to) first, then the rest, without repeats. */
export function referenceLinks(result: KbStepResult, focusNodes: string[], limit = 5): Array<{ title: string; url: string }> {
  const focus = new Set(focusNodes);
  const rank = (doc: KbDoc): number => (doc.forNodes.some((n) => focus.has(n)) ? 0 : doc.forNodes.length === 0 ? 2 : 1);
  return [...result.docs]
    .sort((a, b) => rank(a) - rank(b))
    .slice(0, limit)
    .map((d) => ({ title: d.title, url: d.url }));
}

/** Context for the analysis: only the pages that concern nodes in the trace. */
export function docsForNodes(result: KbStepResult, nodes: string[]): KbDoc[] {
  const wanted = new Set(nodes);
  return result.docs.filter((d) => d.forNodes.length === 0 || d.forNodes.some((n) => wanted.has(n)));
}
