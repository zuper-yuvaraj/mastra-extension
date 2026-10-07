// Deterministic check of the model's verdict against what it was actually shown. The model proposes;
// this decides what the user may trust. Anything it cannot back is flagged and confidence is lowered.

import type { EvidenceLedger } from './ledger';
import type { RcaVerdict, VerifiedVerdict } from './verdict';

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

  return { ...verdict, status, root_cause: rootCause, confidence, evidence_chain: evidence, issues };
}
