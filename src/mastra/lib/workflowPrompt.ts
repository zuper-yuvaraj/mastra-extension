import type { WorkflowDetail } from './zuperWorkflowApi';
import type { BranchDecision, BranchType, LineageHop } from './workflowGraph';

export function buildWorkflowPrompt(workflow: WorkflowDetail): string {
  return [
    "Complete workflow definition (JSON):",
    JSON.stringify(workflow, null, 2),
    "",
    "You are explaining a Zuper (field service management) automated workflow to a Zuper admin.",
    "Using Zuper terminology (Quote/Estimate, Job, Job Category, Job Status, Customer, Trigger, Action),",
    "Need to give two explanation, one explanation need to be in simple 4 bullet points, and the other explanation need to be in detailed group of nodes which acheive one thing, and each bullet point should be a complete sentence.",

    "each conditional branch and what happens in each case. Be concrete about field values (e.g. status",
    "names) rather than repeating raw code. Do not mention internal node ids or JSON structure.",
    "\nWrap under the html tags to display nicely in the web page",
  ]
    .filter(Boolean)
    .join("\n");
}

// Stage 1 (see orchestrator.ts's classifyIntent) — a cheap, short classification call that runs
// BEFORE any evidence is fetched, so the deterministic evidence planner (Stage 2) knows what to
// fetch instead of the reasoning model discovering it live via 30 rounds of tool calls.
export function buildIntentClassifierPrompt(
  question: string,
  recentTurns: Array<{ role: string; content: string }>,
  nodeIndex: Array<{ name: string; branch_type: BranchType | null }>,
): string {
  return [
    "Classify a user question about a Zuper workflow into a structured intent. Respond with ONLY a",
    "single JSON object — no markdown fencing, no other text — matching exactly this shape:",
    '{"intent": "FAILURE_DIAGNOSIS|BRANCH_DIVERGENCE|CODE_NODE_QUESTION|DATA_DEPENDENCY|GENERAL_EXPLANATION|FIELD_SEMANTICS|OTHER",',
    ' "target_node_hint": string|null, "expected_flow_hint": string|null, "needs_docs": boolean, "confidence": "high"|"low"}',
    "",
    "FAILURE_DIAGNOSIS: why something failed/errored. BRANCH_DIVERGENCE: why an IF/ELSE or SPLIT",
    "node took one path instead of another the user expected. CODE_NODE_QUESTION: about a Code",
    "node's JavaScript logic specifically. DATA_DEPENDENCY: one node's output feeding (or failing to",
    "feed) another node. GENERAL_EXPLANATION: what the workflow/a node does, no error/branch/code",
    "focus. FIELD_SEMANTICS: what a specific Zuper field/status/category/API concept means. OTHER:",
    "anything else, including small talk or questions unrelated to this workflow.",
    "",
    "target_node_hint must be one of the exact node names listed below, or null if none is clearly",
    "referenced. needs_docs is true only if answering requires knowing how a specific Zuper API",
    "field or endpoint behaves, beyond what this workflow's own data shows. confidence is \"low\"",
    "whenever the question does not clearly fit one category — OTHER is always an acceptable answer.",
    "",
    "Nodes in this workflow:",
    JSON.stringify(nodeIndex.map((n) => ({ name: n.name, branch_type: n.branch_type }))),
    "",
    recentTurns.length > 0
      ? `Recent conversation (oldest first):\n${recentTurns.map((t) => `${t.role}: ${t.content}`).join("\n")}`
      : "",
    `User question: ${question}`,
  ]
    .filter(Boolean)
    .join("\n");
}

// Stage 4 (see orchestrator.ts's parseVerdict) — short and evidence-oriented: the deterministic
// stages already computed execution order, the failed node, branch decisions and the lineage
// chain, so this prompt's job is to explain those facts, not rediscover them from raw JSON.
export function buildReasoningInstructions(): string {
  return [
    "You are a chat assistant embedded in the Zuper (field service management) Workflow Builder,",
    "answering questions about one specific automated workflow — either its live/current definition,",
    "or one specific execution of it (see EVIDENCE below for which one, and its computed facts).",
    "",
    "EVIDENCE below is the source of truth: it already contains the deterministically computed",
    "execution order, failed node, branch decisions (which path was actually taken vs. not), and",
    "data-lineage chain relevant to this question — do not recompute or second-guess these facts,",
    "explain them. If EVIDENCE is missing something you genuinely need, you may call one of the",
    "bounded fallback tools (inspect_node, trace_lineage, get_branch_analysis,",
    "get_job_categories_and_statuses) — but only when EVIDENCE truly doesn't cover it.",
    "",
    "DEFAULT ANSWER LENGTH — this applies to every question, not just failure/branch ones: 1-2",
    "sentences, crisp, on the point, something the reader understands at a glance. This is the",
    "default even for a first failure/branch question, not a fallback for simple ones. Only expand",
    "beyond that — more sentences, structure, a walkthrough — when the user's message explicitly",
    "asks for it (\"explain in detail\", \"more detail\", \"walk me through it\", \"give me the fix\",",
    "\"how do I fix it\"), which are also the labels of follow-up buttons the user can click.",
    "",
    "Using Zuper terminology (Quote/Estimate, Job, Job Category, Job Status, Customer, Trigger, Action),",
    "answer conversationally. Use HTML only where it improves readability — a short answer can be",
    "plain text or a single <p>. Only these tags are allowed: p, ul, ol, li, strong, em, b, i, br,",
    "div, span, h1-h6, pre, code — no attributes, no markdown. When showing code (e.g. a Code node's",
    "JavaScript), do not paste the entire raw source — simplify to short, illustrative JS conveying",
    "just the relevant logic, wrapped in <pre><code> with <, >, & escaped as &lt; &gt; &amp;. Only",
    "discuss this workflow; if asked something unrelated, say so.",
    "",
    "Failure/issue questions — the crisp default is a single <p> naming the failed node and the",
    "plain-language cause. No hop-by-hop trace or fix steps unless detail/a fix is explicitly asked.",
    "",
    "When detail is asked for, use this structure:",
    "<p><strong>Details on the failure:</strong></p>",
    "<ul><li>Failed at: [node name]</li>",
    "<li>Detailed explanation: [walk the lineage chain from EVIDENCE, hop by hop, node name + what",
    "went wrong at each hop, nested bullets if useful; say so explicitly if no root cause was found]</li></ul>",
    "",
    "When a fix is asked for, use this structure:",
    "<p><strong>Error fix:</strong> [complete fix for the failed node, and for the root cause node if",
    "different; if you change a Code node's code, give the complete code, not a snippet — only the",
    "specific line(s) that need to change should differ from the original]</p>",
    "",
    "Branch/path questions — the crisp default is one sentence naming which path was actually taken",
    "and why. Only use this fuller structure when the user asks to explain in detail:",
    "<p><strong>What actually happened:</strong> [the branch node's name, its type (IF/ELSE or",
    "SPLIT), which path EVIDENCE shows was actually taken]</p>",
    "<p><strong>Why:</strong> [the condition/value that decided it, from EVIDENCE — never invent a",
    "condition value that isn't in EVIDENCE]</p>",
    "",
    "Respond with ONLY a single JSON object, no markdown fencing, no other text, matching exactly:",
    '{"citations": [{"node_uid": string, "field": string (optional), "claim": string}],',
    ' "html_answer": string (your full HTML-formatted answer as described above),',
    ' "confidence": "high"|"low"|"insufficient_evidence"}',
    "citations must list every node_uid your answer actually relies on, from EVIDENCE or a tool",
    "result — never a node_uid you have not actually seen. Use \"insufficient_evidence\" honestly",
    "when EVIDENCE and the fallback tools together still don't establish an answer.",
  ]
    .filter(Boolean)
    .join("\n");
}

interface EvidenceForPrompt {
  failure: { node_uid: string | null; name: string | null; error_message: string | null; error_code: string | null } | null;
  branchDecisions: BranchDecision[];
  lineage: LineageHop[] | null;
  categoriesStatuses: unknown;
  docs: Array<{ query: string; content: string }>;
}

// The compact Stage 3 output, replacing the old raw workflow/execution JSON dump — only resolved
// facts reach the model, never the full node/connection payload.
export function buildEvidenceContext(evidence: EvidenceForPrompt, hasExecution: boolean): string {
  const sections: string[] = [
    hasExecution
      ? "An execution is active. EVIDENCE reflects the workflow version that actually ran and this run's facts."
      : "No execution is active — EVIDENCE reflects only the live/current workflow definition. There is no runtime data to report.",
  ];

  if (evidence.failure) {
    sections.push(`FAILURE: ${JSON.stringify(evidence.failure)}`);
  }
  if (evidence.branchDecisions.length > 0) {
    sections.push(`BRANCH DECISIONS (taken vs. not-taken paths, actually observed at runtime):\n${JSON.stringify(evidence.branchDecisions)}`);
  }
  if (evidence.lineage) {
    sections.push(`DATA-LINEAGE CHAIN (hop by hop, closest first):\n${JSON.stringify(evidence.lineage)}`);
  }
  if (evidence.categoriesStatuses) {
    sections.push(`ACCOUNT JOB CATEGORIES/STATUSES:\n${JSON.stringify(evidence.categoriesStatuses)}`);
  }
  for (const doc of evidence.docs) {
    sections.push(`ZUPER API DOC for "${doc.query}":\n${doc.content}`);
  }

  return `EVIDENCE:\n${sections.join("\n\n")}`;
}
