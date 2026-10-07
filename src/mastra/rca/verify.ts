// Deterministic check of the model's verdict against what it was actually shown. The model proposes;
// this decides what the user may trust. Anything it cannot back is flagged and confidence is lowered.

import type { EvidenceLedger } from './ledger';
import type { RcaVerdict, VerifiedVerdict } from './verdict';

const CONFIDENCE_ORDER = ['low', 'medium', 'high'] as const;

function lower(current: RcaVerdict['confidence'], cap: RcaVerdict['confidence']): RcaVerdict['confidence'] {
  return CONFIDENCE_ORDER.indexOf(current) <= CONFIDENCE_ORDER.indexOf(cap) ? current : cap;
}

export function verifyVerdict(
  verdict: RcaVerdict,
  context: { nodeUids: ReadonlySet<string>; ledger: EvidenceLedger },
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
  if (unverified > 0) confidence = lower(confidence, 'low');
  else if (issues.length > 0) confidence = lower(confidence, 'medium');

  return { ...verdict, status, confidence, evidence_chain: evidence, issues };
}
