// Deterministic check of the model's verdict against what it was actually shown. The model proposes;
// this decides what the user may trust. Anything it cannot back is flagged and confidence is lowered.

import type { EvidenceLedger } from './ledger';
import type { RcaVerdict, VerifiedVerdict } from './verdict';

/** Any of these answers "what does the documented API say", so a hint for one is met by another. */
const API_LOOKUPS = new Set(['search_knowledge', 'get_api_endpoint', 'list_api_endpoints', 'list_api_modules']);

const CONFIDENCE_ORDER = ['low', 'medium', 'high'] as const;

function lower(current: RcaVerdict['confidence'], cap: RcaVerdict['confidence']): RcaVerdict['confidence'] {
  return CONFIDENCE_ORDER.indexOf(current) <= CONFIDENCE_ORDER.indexOf(cap) ? current : cap;
}

/** A note that data could not be read says what we could NOT see; it is never a finding. A model that
 * cites it as evidence is explaining its own blindness (one run blamed "the platform" because every
 * node-data fetch had failed in the test setup). */
const DATA_GAP = /fetch_failed|could not be loaded/i;

export function verifyVerdict(
  verdict: RcaVerdict,
  context: {
    nodeUids: ReadonlySet<string>;
    ledger: EvidenceLedger;
    /** The execution's own uid: its error message is legitimate evidence. */
    executionUid?: string;
    /** Some node data could not be loaded, so parts of the analysis are unchecked. */
    dataGaps?: boolean;
    /** node uid -> node type, to correct a category the node type settles. */
    nodeTypes?: ReadonlyMap<string, string>;
    /** Documentation the seed pointed at; a strong one that was never consulted is a gap. */
    kbHints?: ReadonlyArray<{ tool: string; strong: boolean; why: string }>;
  },
): VerifiedVerdict {
  const issues: string[] = [];
  const known = (uid: string | null | undefined): boolean => !uid || context.nodeUids.has(uid);

  if (!known(verdict.failed_node?.uid)) issues.push(`failed node "${verdict.failed_node?.uid}" is not part of this execution`);
  if (!known(verdict.root_cause?.node_uid)) issues.push(`root-cause node "${verdict.root_cause?.node_uid}" is not part of this execution`);
  if (!known(verdict.fix?.node_uid)) issues.push(`fix node "${verdict.fix?.node_uid}" is not part of this execution`);

  const evidence = verdict.evidence_chain.map((item) => {
    const nodeKnown = context.nodeUids.has(item.node_uid);
    const quoted = context.ledger.contains(item.quote);
    if (!nodeKnown) issues.push(`evidence cites unknown node "${item.node_uid}"`);
    if (!quoted) issues.push(`quote for "${item.name}" was not found in any tool result`);
    return { ...item, verified: nodeKnown && quoted };
  });

  let { status, confidence } = verdict;
  const unverified = evidence.filter((e) => !e.verified).length;
  const claimsCause = status === 'failed' || status === 'unexpected_branch';

  if (claimsCause && !verdict.root_cause) {
    issues.push('a cause was claimed but no root cause was given');
    status = 'insufficient_evidence';
    confidence = lower(confidence, 'low');
  }
  if (claimsCause && evidence.length === 0) {
    issues.push('no evidence was cited');
    confidence = lower(confidence, 'low');
  }
  // A cause must rest on something actually read at the node where it happened (or the execution's own
  // error), not on "that data could not be loaded".
  let rootCause = verdict.root_cause;
  if (claimsCause && status === verdict.status && rootCause) {
    const relevant = new Set([verdict.failed_node?.uid, rootCause.node_uid, context.executionUid].filter(Boolean));
    const informative = evidence.some((e) => e.verified && relevant.has(e.node_uid) && !DATA_GAP.test(e.quote));
    if (!informative) {
      issues.push(
        `Unconfirmed hypothesis (${rootCause.name}, ${rootCause.category.replace(/_/g, ' ').toLowerCase()}): ${rootCause.explanation} ` +
          'The data needed to confirm it could not be read.',
      );
      status = 'insufficient_evidence';
      rootCause = null;
      confidence = lower(confidence, 'low');
    }
  }

  // The same code failure was labelled CODE_ERROR, WRONG_EXPRESSION_PATH or OTHER from run to run. When the
  // cause sits in a Code node, the category is not a judgement call. Causes outside our control stay as said.
  const adjustments: string[] = [];

  // knowledge_used is the model's own claim; keep only lookups that were actually made.
  const consulted = context.ledger.knowledgeTools();
  const knowledgeUsed = verdict.knowledge_used.filter((k) => consulted.has(k.tool));
  if (knowledgeUsed.length < verdict.knowledge_used.length) {
    adjustments.push(`Removed ${verdict.knowledge_used.length - knowledgeUsed.length} knowledge reference(s) that were never looked up.`);
  }
  // A reference is only as good as its URL: keep the ones a documentation lookup actually returned.
  const references = verdict.references.filter((r) => context.ledger.knowledgeContains(r.url.replace(/[.]md$/, '')));
  if (references.length < verdict.references.length) {
    adjustments.push(`Removed ${verdict.references.length - references.length} reference(s) whose URL was not in any documentation result.`);
  }
  if (claimsCause) {
    for (const hint of context.kbHints ?? []) {
      const met = API_LOOKUPS.has(hint.tool) ? [...API_LOOKUPS].some((t) => consulted.has(t)) : consulted.has(hint.tool);
      if (hint.strong && !met) issues.push(`The documentation that applies here was not consulted: ${hint.why}.`);
    }
  }
  if (rootCause && /^code/i.test(context.nodeTypes?.get(rootCause.node_uid) ?? '')) {
    const keep = new Set(['CODE_ERROR', 'EXTERNAL_API_ERROR', 'PERMISSION']);
    if (!keep.has(rootCause.category)) {
      adjustments.push(`Category changed from ${rootCause.category} to CODE_ERROR because the root cause is in a Code node.`);
      rootCause = { ...rootCause, category: 'CODE_ERROR' };
    }
  }

  // "Not enough evidence" and a named root cause contradict each other; keep the hypothesis, as a note.
  if (status === 'insufficient_evidence' && rootCause) {
    issues.push(`Possible cause (not confirmed): ${rootCause.name} — ${rootCause.explanation}`);
    rootCause = null;
  }

  if (context.dataGaps) {
    issues.push('Some node data could not be loaded, so parts of this analysis could not be checked against the real data.');
    confidence = lower(confidence, 'medium');
  }
  // One sloppy quote (e.g. a key name prepended to a value that was read correctly) must not sink an
  // otherwise well-supported answer. Medium needs a verified, informative quote at the root-cause node
  // and at most a third of the evidence unverified; anything weaker is low.
  if (unverified > 0) {
    const supportedAtRoot =
      rootCause !== null &&
      evidence.some((e) => e.verified && e.node_uid === rootCause!.node_uid && !DATA_GAP.test(e.quote));
    confidence = lower(confidence, supportedAtRoot && unverified / evidence.length <= 1 / 3 ? 'medium' : 'low');
  } else if (issues.length > 0) {
    confidence = lower(confidence, 'medium');
  }

  return { ...verdict, references, knowledge_used: knowledgeUsed, status, root_cause: rootCause, confidence, evidence_chain: evidence, issues, ...(adjustments.length > 0 ? { adjustments } : {}) };
}
