import { z } from 'zod';
import { zuperClassifierAgent } from '../agents/zuperClassifierAgent';
import type { ChatContext, ChatFailure, NodeIndexEntry } from './chatContext';
import { getCategories, type JobCategory } from './zuperCategoryApi';
import { getEndpointDoc } from './docsApi';
import type { ExecutionContext } from './zuperExecutionApi';
import { buildIntentClassifierPrompt } from './workflowPrompt';
import {
  getExecutionWorkflowGraph,
  getLiveWorkflowGraph,
  traceLineage,
  type BranchDecision,
  type LineageHop,
} from './workflowGraph';
import type { WorkflowDetail } from './zuperWorkflowApi';

export type { ChatContext, ChatFailure, NodeIndexEntry } from './chatContext';

export type ChatIntent =
  | 'FAILURE_DIAGNOSIS'
  | 'BRANCH_DIVERGENCE'
  | 'CODE_NODE_QUESTION'
  | 'DATA_DEPENDENCY'
  | 'GENERAL_EXPLANATION'
  | 'FIELD_SEMANTICS'
  | 'OTHER';

// Predefined (not model-generated) quick-reply follow-ups shown after an answer — deterministic,
// so there's no risk of a bad/irrelevant suggestion. Clicking one just sends its label as the next
// user message, which the reasoning prompt recognises as a request to expand the short default
// answer (see buildReasoningInstructions in workflowPrompt.ts).
const FOLLOW_UP_SUGGESTIONS: Record<ChatIntent, string[]> = {
  FAILURE_DIAGNOSIS: ['Explain in detail', 'Give me the fix'],
  BRANCH_DIVERGENCE: ['Explain in detail'],
  CODE_NODE_QUESTION: ['Explain in detail'],
  DATA_DEPENDENCY: ['Explain in detail'],
  GENERAL_EXPLANATION: [],
  FIELD_SEMANTICS: [],
  OTHER: [],
};

export function getFollowUpSuggestions(intent: ChatIntent): string[] {
  return FOLLOW_UP_SUGGESTIONS[intent] ?? [];
}

// Models sometimes wrap JSON in a markdown fence despite being told not to.
function stripJsonFence(text: string): string {
  const trimmed = text.trim();
  const fenced = /^```(?:json)?\s*([\s\S]*?)\s*```$/i.exec(trimmed);
  return fenced ? fenced[1]! : trimmed;
}

export function assembleContext(
  executionContext: ExecutionContext | null,
  liveWorkflow: WorkflowDetail | null,
): ChatContext {
  if (executionContext) {
    const executionUid = executionContext.summary.workflow_execution?.execution_uid ?? 'unknown';
    const { graph, lineage, branchDecisions } = getExecutionWorkflowGraph(executionContext, executionUid);
    const nodeIndex: NodeIndexEntry[] = executionContext.executedNodes.map((n) => ({
      node_uid: n.node_uid,
      name: n.name,
      branch_type: graph.branchType.get(n.node_uid) ?? null,
    }));
    return {
      hasExecution: true,
      nodeIndex,
      failure: executionContext.failure,
      branchDecisions,
      branchType: graph.branchType,
      lineage,
    };
  }

  if (liveWorkflow) {
    const { graph, lineage } = getLiveWorkflowGraph(liveWorkflow);
    const nodeIndex: NodeIndexEntry[] = liveWorkflow.nodes.map((n) => {
      const key = n.node_uid ?? n.id;
      return { node_uid: key, name: n.action_name, branch_type: graph.branchType.get(key) ?? null };
    });
    return { hasExecution: false, nodeIndex, failure: null, branchDecisions: [], branchType: graph.branchType, lineage };
  }

  return { hasExecution: false, nodeIndex: [], failure: null, branchDecisions: [], branchType: new Map(), lineage: { references: new Map(), referencedBy: new Map() } };
}

// Stage 1 — the only stage that calls an LLM to decide something rather than compute/compose it.
export interface IntentClassification {
  intent: ChatIntent;
  target_node_hint: string | null;
  expected_flow_hint: string | null;
  needs_docs: boolean;
  confidence: 'high' | 'low';
}

const FALLBACK_CLASSIFICATION: IntentClassification = {
  intent: 'OTHER',
  target_node_hint: null,
  expected_flow_hint: null,
  needs_docs: false,
  confidence: 'low',
};

const intentClassificationSchema = z.object({
  intent: z.enum([
    'FAILURE_DIAGNOSIS',
    'BRANCH_DIVERGENCE',
    'CODE_NODE_QUESTION',
    'DATA_DEPENDENCY',
    'GENERAL_EXPLANATION',
    'FIELD_SEMANTICS',
    'OTHER',
  ]),
  target_node_hint: z.string().nullable(),
  expected_flow_hint: z.string().nullable(),
  needs_docs: z.boolean(),
  confidence: z.enum(['high', 'low']),
});

export async function classifyIntent(
  question: string,
  recentTurns: Array<{ role: 'user' | 'assistant'; content: string }>,
  context: ChatContext,
): Promise<IntentClassification> {
  const prompt = buildIntentClassifierPrompt(question, recentTurns, context.nodeIndex);
  try {
    const result = await zuperClassifierAgent.generate(prompt, {
      structuredOutput: {
        schema: intentClassificationSchema,
        errorStrategy: 'fallback',
        fallbackValue: FALLBACK_CLASSIFICATION,
      },
    });
    return result.object;
  } catch {
    return FALLBACK_CLASSIFICATION;
  }
}

// Stage 2 — a routing table over the classified intent, not a judgment call. No model involved.
export interface EvidencePlan {
  intent: ChatIntent;
  targetNodeUid: string | null;
  traceDirection: 'upstream' | 'downstream' | null;
  wantsBranchAnalysis: boolean;
  wantsCategoriesStatuses: boolean;
  wantsDocs: boolean;
}

function resolveTargetNodeUid(hint: string | null, nodeIndex: NodeIndexEntry[]): string | null {
  if (!hint) return null;
  const normalized = hint.trim().toLowerCase();
  const exact = nodeIndex.find((n) => n.name.trim().toLowerCase() === normalized);
  if (exact) return exact.node_uid;
  const partial = nodeIndex.find((n) => n.name.trim().toLowerCase().includes(normalized));
  return partial?.node_uid ?? null;
}

export function planEvidence(classification: IntentClassification, context: ChatContext): EvidencePlan {
  const hintedNodeUid = resolveTargetNodeUid(classification.target_node_hint, context.nodeIndex);

  // A low-confidence or unrecognised intent skips straight to a minimal general-purpose plan rather
  // than forcing a wrong specialized investigation.
  if (classification.confidence === 'low' || classification.intent === 'OTHER') {
    return {
      intent: classification.intent,
      targetNodeUid: hintedNodeUid,
      traceDirection: null,
      wantsBranchAnalysis: false,
      wantsCategoriesStatuses: false,
      wantsDocs: false,
    };
  }

  const base = { intent: classification.intent, wantsDocs: classification.needs_docs };

  switch (classification.intent) {
    case 'FAILURE_DIAGNOSIS':
      return {
        ...base,
        targetNodeUid: context.failure?.node_uid ?? hintedNodeUid,
        traceDirection: 'upstream',
        wantsBranchAnalysis: true,
        wantsCategoriesStatuses: true,
      };
    case 'BRANCH_DIVERGENCE':
      return { ...base, targetNodeUid: hintedNodeUid, traceDirection: null, wantsBranchAnalysis: true, wantsCategoriesStatuses: false };
    case 'CODE_NODE_QUESTION':
      return { ...base, targetNodeUid: hintedNodeUid, traceDirection: 'upstream', wantsBranchAnalysis: false, wantsCategoriesStatuses: false };
    case 'DATA_DEPENDENCY':
      return { ...base, targetNodeUid: hintedNodeUid, traceDirection: 'downstream', wantsBranchAnalysis: false, wantsCategoriesStatuses: false };
    case 'FIELD_SEMANTICS':
      return { ...base, targetNodeUid: hintedNodeUid, traceDirection: null, wantsBranchAnalysis: false, wantsCategoriesStatuses: true, wantsDocs: true };
    default: // GENERAL_EXPLANATION
      return { ...base, targetNodeUid: hintedNodeUid, traceDirection: null, wantsBranchAnalysis: false, wantsCategoriesStatuses: false };
  }
}

// Stage 3 — executes the plan: parallel fetches, never a model call. Only resolved facts go into
// the bundle, never raw API payloads.
export interface EvidenceBundle {
  intent: ChatIntent;
  failure: ChatFailure | null;
  branchDecisions: BranchDecision[];
  lineage: LineageHop[] | null;
  categoriesStatuses: JobCategory[] | null;
  docs: Array<{ query: string; content: string }>;
}

async function resolveDocsForNode(
  nodeUid: string | null,
  context: ChatContext,
): Promise<Array<{ query: string; content: string }>> {
  if (!nodeUid) return [];
  const node = context.nodeIndex.find((n) => n.node_uid === nodeUid);
  if (!node) return [];
  const doc = await getEndpointDoc(node.name).catch(() => null);
  return doc ? [{ query: node.name, content: doc }] : [];
}

export async function retrieveEvidence(
  plan: EvidencePlan,
  context: ChatContext,
  executionContext: ExecutionContext | null,
  zuperToken: string,
  zuperApiUrl: string,
): Promise<EvidenceBundle> {
  const [categoriesStatuses, lineage, docs] = await Promise.all([
    plan.wantsCategoriesStatuses ? getCategories(zuperToken, zuperApiUrl).catch(() => null) : Promise.resolve(null),
    plan.traceDirection && plan.targetNodeUid && executionContext
      ? traceLineage(plan.targetNodeUid, context.lineage, executionContext, plan.traceDirection, 5).catch(() => [])
      : Promise.resolve(null),
    plan.wantsDocs ? resolveDocsForNode(plan.targetNodeUid, context) : Promise.resolve([]),
  ]);

  return {
    intent: plan.intent,
    failure: context.failure,
    branchDecisions: plan.wantsBranchAnalysis
      ? context.branchDecisions.filter((d) => !plan.targetNodeUid || d.node_uid === plan.targetNodeUid)
      : [],
    lineage,
    categoriesStatuses,
    docs,
  };
}

// Stage 4's output shape — produced by the reasoning agent (see agents/zuperChatAgent.ts) via
// prompted JSON (not structuredOutput: see route handler for why free-form + manual parsing is
// preferred here over Mastra's schema-validated mode).
export interface ChatVerdict {
  citations: Array<{ node_uid: string; field?: string; claim: string }>;
  html_answer: string;
  confidence: 'high' | 'low' | 'insufficient_evidence';
}

export function parseVerdict(raw: string): ChatVerdict {
  try {
    const parsed = JSON.parse(stripJsonFence(raw)) as Record<string, unknown>;
    if (typeof parsed.html_answer === 'string') {
      const confidence = parsed.confidence;
      return {
        citations: Array.isArray(parsed.citations) ? (parsed.citations as ChatVerdict['citations']) : [],
        html_answer: parsed.html_answer,
        confidence:
          confidence === 'high' || confidence === 'insufficient_evidence' ? confidence : 'low',
      };
    }
  } catch {
    // Not valid JSON (or missing html_answer) — fall through to treating the raw text as the answer
    // itself, so a model that ignores the JSON instruction still produces a visible reply.
  }
  return { citations: [], html_answer: raw, confidence: 'low' };
}

// Stage 5 — deterministic, no model call. Every citation must point at a node this turn actually
// knows about; anything else is flagged rather than silently trusted.
export function validateVerdict(verdict: ChatVerdict, context: ChatContext): ChatVerdict {
  const validUids = new Set(context.nodeIndex.map((n) => n.node_uid));
  const unverifiable = verdict.citations.filter((c) => c.node_uid && !validUids.has(c.node_uid));
  if (unverifiable.length === 0) return verdict;

  const names = unverifiable.map((c) => c.node_uid).join(', ');
  return {
    ...verdict,
    html_answer: `${verdict.html_answer}<p><em>Note: could not verify a reference to node(s): ${names}.</em></p>`,
  };
}
