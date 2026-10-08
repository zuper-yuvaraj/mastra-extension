// Where the backtrace starts. For a failed run it is the failed node. For a run that finished, the
// question decides: a node it names, or an outcome that did not happen ("why was no job created?").
// A node that never ran is explained by what gated it, found here in code from the recorded branch
// decisions and loop counts, so the backtrace can start from the data that decided the path.

import { getExecutionWorkflowGraph, type BranchDecision } from '../lib/workflowGraph';
import type { ExecutionContext } from '../lib/zuperExecutionApi';
import { defaultIteration } from './seed';

export interface Blocker {
  kind: 'if_else' | 'loop_empty';
  uid: string;
  name: string;
  /** In words: the output taken and what it led to, or that the loop had nothing to iterate. */
  detail: string;
  iteration: number | null;
}

export type Target =
  | { kind: 'failed'; uid: string; iteration: number | null }
  /** A node that ran, named by the question. */
  | { kind: 'node'; uid: string; iteration: number | null }
  /** A node that did not run, and the decision(s) that kept the flow from reaching it. */
  | { kind: 'gated'; uid: string; iteration: number | null; wanted: { uid: string; name: string }; blockers: Blocker[] }
  /** A node that did not run with no recorded decision in the way: the nearest node that did run. */
  | { kind: 'unreached'; uid: string; iteration: number | null; wanted: { uid: string; name: string } }
  | { kind: 'none'; note: string };

export interface TargetDeps {
  /** Maps an outcome described in the question to node names (a small model call in production). The
   * result is checked against the workflow's node names here. */
  mapOutcome?: (question: string, nodeNames: string[]) => Promise<string[]>;
}

const words = (text: string): string => ` ${text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()} `;

function closure(starts: string[], edges: Map<string, string[]>): Set<string> {
  const seen = new Set<string>();
  const stack = [...starts];
  while (stack.length > 0) {
    for (const next of edges.get(stack.pop()!) ?? []) {
      if (!seen.has(next)) {
        seen.add(next);
        stack.push(next);
      }
    }
  }
  return seen;
}

/** Nodes of the workflow version that ran, whose display names appear in the question. Longest first, so
 * "Get Job 2" wins over "Get Job". */
function namedNodes(ctx: ExecutionContext, question: string): Array<{ uid: string; name: string }> {
  const padded = words(question);
  return (ctx.workflowData?.nodes ?? [])
    .filter((n) => n.node_uid && n.action_name && n.action_name.trim().length > 2)
    .map((n) => ({ uid: n.node_uid, name: n.action_name! }))
    .filter((n) => padded.includes(words(n.name)))
    .sort((a, b) => b.name.length - a.name.length)
    .filter((n, _i, all) => !all.some((other) => other !== n && other.name.length > n.name.length && words(other.name).includes(words(n.name)) && padded.includes(words(other.name))));
}

export async function locateTarget(ctx: ExecutionContext, question: string, deps: TargetDeps = {}): Promise<Target> {
  if (ctx.definitionOnly) return { kind: 'none', note: 'There is no run, only the workflow definition.' };

  if (ctx.failure?.node_uid) {
    return { kind: 'failed', uid: ctx.failure.node_uid, iteration: defaultIteration(ctx, ctx.failure.node_uid) ?? null };
  }

  let named = namedNodes(ctx, question);
  if (named.length === 0 && deps.mapOutcome) {
    const all = (ctx.workflowData?.nodes ?? []).filter((n) => n.node_uid && n.action_name);
    const byName = new Map(all.map((n) => [n.action_name!.toLowerCase(), n]));
    const mapped = await deps.mapOutcome(question, all.map((n) => n.action_name!)).catch(() => [] as string[]);
    // a name the model made up is dropped here
    named = mapped.flatMap((name) => {
      const node = byName.get(name.toLowerCase());
      return node ? [{ uid: node.node_uid, name: node.action_name! }] : [];
    });
  }

  const executionUid = ctx.summary.workflow_execution?.execution_uid ?? 'unknown';
  const { graph, branchDecisions } = getExecutionWorkflowGraph(ctx, executionUid);
  const ran = new Set((ctx.summary.node_execution ?? []).map((e) => e.node_uid));

  const wanted = named.find((n) => !ran.has(n.uid));
  if (!wanted) {
    const first = named[0];
    if (first) return { kind: 'node', uid: first.uid, iteration: defaultIteration(ctx, first.uid) ?? null };
    // Nothing named: the last place the flow ended early is the likeliest thing being asked about.
    const ended = [...branchDecisions].reverse().find((d) => d.flow_ended);
    if (ended) return { kind: 'node', uid: ended.node_uid, iteration: ended.iteration };
    return { kind: 'none', note: 'The question does not point at a node, and the run shows no early end.' };
  }

  const blockers = findBlockers(ctx, wanted.uid, branchDecisions, graph.downstream, graph.upstream);
  if (blockers.length > 0) {
    const nearest = blockers[0]!;
    return { kind: 'gated', uid: nearest.uid, iteration: nearest.iteration, wanted, blockers };
  }

  // No decision in the way: start from the closest node before it that did run.
  const before = closure([wanted.uid], graph.upstream);
  const executedBefore = [...before].filter((uid) => ran.has(uid));
  const closest = executedBefore.sort((a, b) => (closure([b], graph.upstream).size - closure([a], graph.upstream).size))[0];
  return closest ? { kind: 'unreached', uid: closest, iteration: defaultIteration(ctx, closest) ?? null, wanted } : { kind: 'none', note: `"${wanted.name}" did not run and nothing before it did either.` };
}

/** Decisions that kept the flow from `wantedUid`, nearest first: an If/Else whose taken output does not
 * lead to it while another output does, or a loop that iterated zero times with the node inside. */
function findBlockers(
  ctx: ExecutionContext,
  wantedUid: string,
  decisions: BranchDecision[],
  downstream: Map<string, string[]>,
  upstream: Map<string, string[]>,
): Blocker[] {
  const uidOf = (name: string | null): string | undefined => (name ? ctx.findNode(name)?.node_uid : undefined);
  const out: Blocker[] = [];

  for (const d of decisions) {
    const takenUid = uidOf(d.took);
    const reachableViaTaken = takenUid ? closure([takenUid], downstream).add(takenUid) : new Set<string>();
    const notTakenUids = d.notTaken.map(uidOf).filter((u): u is string => Boolean(u));
    const reachableViaOther = new Set<string>(notTakenUids);
    for (const uid of notTakenUids) closure([uid], downstream).forEach((x) => reachableViaOther.add(x));
    if (reachableViaOther.has(wantedUid) && !reachableViaTaken.has(wantedUid)) {
      out.push({
        kind: 'if_else',
        uid: d.node_uid,
        name: d.name,
        iteration: d.iteration,
        detail: d.flow_ended
          ? `${d.name} evaluated ${d.branch}, and that output has no node connected, so the workflow ended there`
          : `${d.name} evaluated ${d.branch} and continued to ${d.took}, not toward the node in question`,
      });
    }
  }

  for (const entry of ctx.summary.node_execution ?? []) {
    if (!entry.is_loop || entry.total_iterations !== 0) continue;
    if (closure([entry.node_uid], downstream).has(wantedUid)) {
      const name = ctx.findNode(entry.node_uid)?.action_name ?? entry.node_uid;
      out.push({ kind: 'loop_empty', uid: entry.node_uid, name, iteration: entry.current_iteration, detail: `${name} had nothing to iterate over, so the nodes inside it never ran` });
    }
  }

  // nearest to the wanted node = the one with the most ancestors
  const depth = (uid: string): number => closure([uid], upstream).size;
  return out.sort((a, b) => depth(b.uid) - depth(a.uid));
}
