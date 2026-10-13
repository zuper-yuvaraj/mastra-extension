// Stage 1 of the hydrated RCA engine: what is this workflow for, and which nodes work together on one
// activity. One small model call over the workflow DEFINITION only (no run data), so the answer holds for
// every execution of that version and is cached per version.

import { z } from 'zod';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { configOf } from './backtrace';
import { RCA_UNDERSTAND_EFFORT, RCA_UNDERSTAND_MODEL, RCA_UNDERSTAND_TTL_MS } from './config';
import type { InvestigatorAgent } from './investigate';
import { ResultCache } from './resultCache';
import { buildWorkflowOutline } from './seed';

export const UNGROUPED = 'Ungrouped';

export const understandingSchema = z.object({
  purpose: z.string().describe('What the workflow achieves for the business, in at most two short sentences.'),
  trigger: z.string().describe('What starts the workflow, read from its first node.'),
  groups: z
    .array(
      z.object({
        name: z.string().describe('The activity, in business words (e.g. "Schedule the sales visit").'),
        goal: z.string().describe('One sentence on what this group of nodes achieves.'),
        node_names: z.array(z.string()).describe('Exact node names (the `name` field), in the order the flow reaches them.'),
      }),
    )
    .describe('Every node in exactly one group.'),
});

export type Understanding = z.infer<typeof understandingSchema>;

/** The workflow as the model sees it: names, types, what each node is configured to do, how they connect.
 * No positions, colours, icons, credentials or ids, and variable names only (a value can be a secret). */
export interface SlimWorkflow {
  name: string | null;
  description?: string;
  variables: string[];
  nodes: Array<{ name: string; type: string; description?: string; config: Record<string, string> }>;
  connections: Array<{ from: string; to: string; when?: boolean }>;
}

/** Nodes in the order the flow reaches them (entry nodes first), falling back to the stored order for
 * anything a cycle or a missing connection leaves out. */
function flowOrder(names: string[], connections: SlimWorkflow['connections']): string[] {
  const incoming = new Map(names.map((n) => [n, 0]));
  const next = new Map<string, string[]>();
  for (const c of connections) {
    if (!incoming.has(c.from) || !incoming.has(c.to)) continue;
    incoming.set(c.to, (incoming.get(c.to) ?? 0) + 1);
    next.set(c.from, [...(next.get(c.from) ?? []), c.to]);
  }
  const queue = names.filter((n) => incoming.get(n) === 0);
  const order: string[] = [];
  const seen = new Set<string>();
  while (queue.length > 0) {
    const name = queue.shift()!;
    if (seen.has(name)) continue;
    seen.add(name);
    order.push(name);
    for (const child of next.get(name) ?? []) {
      incoming.set(child, (incoming.get(child) ?? 1) - 1);
      if (incoming.get(child) === 0) queue.push(child);
    }
  }
  return [...order, ...names.filter((n) => !seen.has(n))];
}

/** The workflow's variable NAMES. Values are never read: a variable can be a secret (an API key). */
export function variableNamesOf(workflowData: ExecutionContext['workflowData']): string[] {
  const variables = (workflowData?.meta_data as { variables?: unknown } | undefined)?.variables;
  if (Array.isArray(variables)) {
    return variables.map((v) => (v && typeof v === 'object' ? String((v as { name?: unknown; key?: unknown }).name ?? (v as { key?: unknown }).key ?? '') : String(v))).filter(Boolean);
  }
  return variables && typeof variables === 'object' ? Object.keys(variables) : [];
}

export function slimWorkflowForUnderstanding(ctx: ExecutionContext): SlimWorkflow {
  const outline = buildWorkflowOutline(ctx);
  const byName = new Map((ctx.workflowData?.nodes ?? []).map((node) => [node.action_name ?? node.node_uid, node]));
  return {
    name: outline.name,
    ...(outline.description ? { description: outline.description } : {}),
    variables: variableNamesOf(ctx.workflowData),
    nodes: flowOrder(
      outline.nodes.map((n) => n.name),
      outline.connections,
    ).map((name) => {
      const node = byName.get(name);
      const description = typeof node?.description === 'string' && node.description.trim() ? node.description.trim() : undefined;
      return { name, type: String(node?.action_key ?? node?.node_name ?? 'unknown'), ...(description ? { description } : {}), config: configOf(node?.form_fields) };
    }),
    connections: outline.connections,
  };
}

/** Keeps the model's grouping honest: only real nodes, each in one group, none missing. */
export function sanitizeUnderstanding(raw: Understanding, nodeNames: string[]): Understanding {
  const real = new Set(nodeNames);
  const placed = new Set<string>();
  const groups = raw.groups
    .map((group) => ({
      ...group,
      node_names: group.node_names.filter((name) => {
        if (!real.has(name) || placed.has(name)) return false;
        placed.add(name);
        return true;
      }),
    }))
    .filter((group) => group.node_names.length > 0);
  const missed = nodeNames.filter((name) => !placed.has(name));
  if (missed.length > 0) groups.push({ name: UNGROUPED, goal: 'Nodes the summary did not place in an activity.', node_names: missed });
  return { ...raw, groups };
}

const newCache = () => new ResultCache<Understanding | null>(RCA_UNDERSTAND_TTL_MS, 500);
let cache = newCache();

/** Clears the per-version cache (tests). */
export const resetUnderstandingCache = (): void => {
  cache = newCache();
};

/** A workflow version never changes once it has run, so this identifies one. The company is part of the key
 * so one account can never be served another's summary. */
export function understandingKey(ctx: ExecutionContext): string | null {
  const data = ctx.workflowData;
  const workflowUid = data?.workflow_uid ?? ctx.summary.workflow_execution?.workflow_uid;
  const version = data?.version_id ?? data?.version ?? ctx.summary.workflow_execution?.version_details?.version;
  if (!workflowUid || version === undefined || version === null || version === '') return null;
  return `${data?.company_id ?? 'unknown'}:${workflowUid}:${version}`;
}

export interface UnderstandInput {
  agent: InvestigatorAgent;
  executionContext: ExecutionContext;
  signal?: AbortSignal;
}

export interface UnderstandResult {
  /** Null when the model could not produce a usable answer; later stages carry on without it. */
  understanding: Understanding | null;
  cached: boolean;
}

async function ask(input: UnderstandInput, slim: SlimWorkflow): Promise<Understanding | null> {
  try {
    const response = await input.agent.generate([{ role: 'user', content: `WORKFLOW (JSON):\n${JSON.stringify(slim)}` }], {
      ...(input.signal ? { abortSignal: input.signal } : {}),
      maxSteps: 1,
      providerOptions: { openai: { reasoningEffort: RCA_UNDERSTAND_EFFORT } },
      structuredOutput: {
        schema: understandingSchema,
        model: RCA_UNDERSTAND_MODEL,
        providerOptions: { openai: { reasoningEffort: RCA_UNDERSTAND_EFFORT } },
        errorStrategy: 'fallback',
        fallbackValue: null,
      },
    });
    const parsed = understandingSchema.safeParse(response.object);
    return parsed.success ? sanitizeUnderstanding(parsed.data, slim.nodes.map((n) => n.name)) : null;
  } catch (error) {
    if (input.signal?.aborted) throw error;
    return null;
  }
}

export async function understandWorkflow(input: UnderstandInput): Promise<UnderstandResult> {
  const slim = slimWorkflowForUnderstanding(input.executionContext);
  if (slim.nodes.length === 0) return { understanding: null, cached: false };

  const compute = async () => {
    const value = await ask(input, slim);
    return { value, cacheable: value !== null };
  };
  const key = understandingKey(input.executionContext);
  if (!key) return { understanding: (await compute()).value, cached: false };

  const { value, cached } = await cache.getOrCompute(key, compute);
  return { understanding: value, cached };
}
