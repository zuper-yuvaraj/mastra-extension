import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { projectPath } from '../../knowledge/paths';
import { assembleContext } from '../../lib/orchestrator';
import { buildWorkflowGraph, computeBranchDecisions } from '../../lib/workflowGraph';
import { createExecutionContext, type ExecutionSummaryResponse } from '../../lib/zuperExecutionApi';
import { executionContextFromFixture, loadFixture } from '../fixture';
import { extractReferences } from '../references';
import { buildSeed, summarizeExecutedNodes } from '../seed';
import { getNodeData, getNodeInput } from '../toolLogic';

// Regression tests against REAL execution summaries exported from Zuper (samples/). They pin down
// things synthetic data hid: connections name nodes by `id` (not node_uid), loops produce one
// node_execution entry per iteration, an If/Else can have only one output connected, and Code v2 nodes
// declare inputs inside a FIXED envelope. Skipped when the samples are not present.
const dir = projectPath('samples');
const have = existsSync(dir);
const load = (name: string) => JSON.parse(readFileSync(`${dir}/${name}.json`, 'utf8')) as {
  workflow_execution: { workflow_data: { nodes: any[]; connections: any[] } } & Record<string, any>;
  node_execution: any[];
};
const options = { skip: have ? false : 'samples/ not present' };

const SAMPLES = ['wf_exeution_1', 'wf_execution_3', 'wf_with_loop_execution_2'];

for (const name of SAMPLES) {
  test(`${name}: every connection resolves to nodes (except edges to deleted nodes)`, options, () => {
    const { workflow_execution: we } = load(name);
    const { nodes, connections } = we.workflow_data;
    const graph = buildWorkflowGraph(nodes, connections);
    const edges = [...graph.upstream.values()].reduce((n, list) => n + list.length, 0);
    // a loop marker self-edge or an edge to a deleted node may legitimately not resolve (1 in the loop sample)
    assert.ok(edges >= connections.length - 1, `${edges} edges from ${connections.length} connections`);
    assert.ok(edges > 0);
  });

  test(`${name}: the seed builds on the real structure`, options, async () => {
    const j = load(name);
    const execution = createExecutionContext(j as unknown as ExecutionSummaryResponse, async () => {
      throw new Error('FETCH_FAILED');
    });
    const seed = await buildSeed(execution, assembleContext(execution, null));
    assert.equal(seed.mode, 'NO_FAILURE');
    assert.ok(seed.executed_nodes.length > 0);
  });

  test(`${name}: no real {{ }} expression goes unrecognised`, options, () => {
    const { workflow_execution: we } = load(name);
    const missed: string[] = [];
    const walk = (value: unknown, where: string): void => {
      if (typeof value === 'string') {
        if (/\{\{[^}]*\}\}/.test(value) && extractReferences({ x: { type: 'EXPRESSION', value } }).length === 0) missed.push(`${where}: ${value.slice(0, 80)}`);
      } else if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${where}[${i}]`));
      else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`);
    };
    for (const node of we.workflow_data.nodes) walk(node.form_fields, node.action_name);
    assert.deepEqual(missed, []);
  });

  test(`${name}: Code v2 declared inputs are evaluated, not reported as FIXED`, options, () => {
    const { workflow_execution: we } = load(name);
    for (const node of we.workflow_data.nodes.filter((n) => n.node_name === 'code')) {
      const wrong = extractReferences(node.form_fields).filter((r) => !r.evaluated && r.field.startsWith('inputs'));
      assert.deepEqual(wrong.map((r) => r.field), [], node.action_name);
    }
  });
}

test('real If/Else decisions: the taken branch is named, and a branch with nothing connected says the flow ended', options, () => {
  const first = load('wf_exeution_1');
  const d1 = computeBranchDecisions(first.workflow_execution.workflow_data.nodes, first.node_execution, first.workflow_execution.workflow_data.connections);
  const ifElse = d1.find((d) => d.name === 'If/Else');
  assert.equal(ifElse?.branch, 'TRUE');
  assert.equal(ifElse?.took, 'Get Checklist Value');
  assert.equal(ifElse?.flow_ended, false);

  const third = load('wf_execution_3');
  const d3 = computeBranchDecisions(third.workflow_execution.workflow_data.nodes, third.node_execution, third.workflow_execution.workflow_data.connections);
  const ended = d3.find((d) => d.name === 'If/Else 1 1 1');
  assert.equal(ended?.branch, 'FALSE');
  assert.equal(ended?.took, null, 'the FALSE output has no node connected');
  assert.equal(ended?.flow_ended, true);
  assert.deepEqual(ended?.notTaken, ['Edit Record 1 1']);
});

test('real loops are classified as loops, not branches, and iterations are collapsed per node', options, () => {
  const j = load('wf_with_loop_execution_2');
  const { nodes, connections } = j.workflow_execution.workflow_data;

  const graph = buildWorkflowGraph(nodes, connections);
  assert.equal([...graph.branchType.values()].filter((t) => t === 'LOOP').length, 2);
  assert.deepEqual(computeBranchDecisions(nodes, j.node_execution, connections), [], 'loop outputs are not branch decisions');

  const execution = createExecutionContext(j as unknown as ExecutionSummaryResponse, async () => ({}));
  const summary = summarizeExecutedNodes(execution);
  assert.ok(j.node_execution.length > summary.length, `${j.node_execution.length} entries collapse into ${summary.length} nodes`);
  const loop = summary.find((n) => n.name === 'Loop Task Creation');
  assert.equal(loop?.is_loop, true);
  assert.equal(loop?.total_iterations, 12);
  assert.equal(loop?.runs, 13);
});

test('Code v2 input mapping is exposed: $input.<name> is the named upstream node data', options, () => {
  const { workflow_execution: we } = load('wf_with_loop_execution_2');
  const construct = we.workflow_data.nodes.find((n) => n.action_name === 'Construct Payload');
  const refs = extractReferences(construct.form_fields);
  const jobData = refs.find((r) => r.alias === 'job_data');
  assert.equal(jobData?.targetName, 'Get Job');
  assert.equal(jobData?.evaluated, true);
});

test('every node type that appears in real executions can be looked up in the knowledge base', options, async () => {
  const { getNodeFields, getNodeInfo } = await import('../../knowledge/workflowBuilder/lookup');
  const types = new Set<string>();
  for (const name of SAMPLES) for (const node of load(name).workflow_execution.workflow_data.nodes) types.add(node.node_name);

  const missing = [...types].filter((type) => !(getNodeInfo(type) as { found: boolean }).found);
  assert.deepEqual(missing, [], 'node types an agent would see in an execution but the knowledge base cannot find');

  // the two the catalog names differently: an HTTP node and a Zuper event trigger (e.g. job.status_update)
  assert.equal((getNodeInfo('http_request') as { action_key?: string }).action_key, 'http_request_v2');
  assert.equal((getNodeInfo('job.status_update') as { action_key?: string }).action_key, 'zuper_event_trigger');
  assert.equal((getNodeFields('job.status_update') as { found: boolean }).found, true);
});

// ── real FAILED executions (samples/failed_executions): summaries only, so node data is unavailable ──
const FAILED = ['faied_execution_1', 'failed_execution_2', 'failed_execution_3'];
const loadFailed = (name: string) => JSON.parse(readFileSync(`${dir}/failed_executions/${name}.json`, 'utf8')) as ExecutionSummaryResponse;
const failedOptions = { skip: existsSync(`${dir}/failed_executions`) ? false : 'samples/failed_executions not present' };

const unreadable = (summary: ExecutionSummaryResponse) =>
  createExecutionContext(summary, async () => {
    throw new Error('FETCH_FAILED');
  });

test('failed executions: the failed node and error are found, even when the error message is empty', failedOptions, async () => {
  const expected: Record<string, { node: string; error: string | null }> = {
    faied_execution_1: { node: 'Create Job', error: 'Either customer or organization data is required' },
    failed_execution_2: { node: 'update Appointment', error: '' },
    failed_execution_3: { node: 'clear schedule', error: 'Cannot clear schedule for a job with multiple Appointments.' },
  };
  for (const name of FAILED) {
    const execution = unreadable(loadFailed(name));
    const seed = await buildSeed(execution, assembleContext(execution, null));
    assert.equal(seed.mode, 'EXECUTION_FAILED', name);
    assert.equal(seed.failed_node?.name, expected[name]!.node, name);
    assert.equal(seed.execution.error_message, expected[name]!.error, name);
  }
});

test('a failure inside a loop reports the iteration it failed in', failedOptions, async () => {
  const execution = unreadable(loadFailed('faied_execution_1'));
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.equal(seed.failed_node?.iteration, 0);
  assert.equal(seed.failed_node?.total_iterations, 2);
  const create = seed.executed_nodes.find((n) => n.name === 'Create Job');
  assert.deepEqual(create?.failed_iterations, [0]);
});

test('the failed node\'s inputs are traced to the node that built them, and unreadable data is reported as such', failedOptions, async () => {
  const execution = unreadable(loadFailed('faied_execution_1'));
  const seed = await buildSeed(execution, assembleContext(execution, null));
  const body = seed.failed_node_inputs.find((i) => i.field === 'json_body.value');
  assert.equal(body?.target?.name, 'Payload for job');
  assert.equal(body?.status, 'fetch_failed', 'no node data: nothing may be concluded about the payload');
  assert.ok(seed.upstream_chain.some((hop) => hop.name === 'Payload for job'));
});

test('a native node acts on the record named by source_node, and that is shown as its input', failedOptions, async () => {
  const execution = unreadable(loadFailed('failed_execution_3'));
  const seed = await buildSeed(execution, assembleContext(execution, null));
  const source = seed.failed_node_inputs.find((i) => i.kind === 'source_node');
  assert.equal(source?.target?.name, 'On Job Status Update', 'clear schedule acts on the job the trigger delivered');
  assert.equal(source?.status, 'resolved');
  assert.match(source?.note ?? '', /record supplied by/);
  assert.ok(seed.upstream_chain.some((hop) => hop.name === 'On Job Status Update'), 'lineage follows source_node too');
});

test('node-level execution_status is ignored: it is stale canvas state, not this run', failedOptions, async () => {
  // In failed_execution_3, "Update due date" is marked ERROR on the node but completed in this run.
  const summary = loadFailed('failed_execution_3');
  const marked = summary.workflow_execution.workflow_data?.nodes?.find((n) => n.action_name === 'Update due date');
  assert.equal(marked?.execution_status, 'ERROR');
  const execution = unreadable(summary);
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.equal(seed.executed_nodes.find((n) => n.name === 'Update due date')?.status, 'COMPLETED');
  assert.ok(!JSON.stringify(seed).includes('"ERROR"'), 'the stale marker does not leak into the seed');
});

test('a draft manual run and a live automated run both load', failedOptions, () => {
  const modes = FAILED.map((n) => `${loadFailed(n).workflow_execution.mode}/${loadFailed(n).workflow_execution.type}`);
  assert.deepEqual(modes.sort(), ['AUTOMATED/LIVE', 'MANUAL/DRAFT', 'MANUAL/DRAFT']);
});

// ── a real failed execution WITH node data (fixtures/rca/update-appointment-404.json) ──
// Captured from the workflow builder's network tab. Ground truth: the Code node "Construct" builds the Update
// Appointment URL without the appointment uid; "update Appointment" PUTs to it and gets 404 "Cannot PUT
// /api/appointments". The execution-level error_message is EMPTY: the real error is on the node.
const fixtureFile = projectPath('fixtures', 'rca', 'update-appointment-404.json');
const fixtureOptions = { skip: existsSync(fixtureFile) ? false : 'fixtures/rca/update-appointment-404.json not present' };
const realFixture = () => executionContextFromFixture(loadFixture(fixtureFile));

test('real node data: the failed node\'s own error, HTTP status and resolved request are surfaced when the execution message is empty', fixtureOptions, async () => {
  const execution = realFixture();
  assert.equal(execution.summary.workflow_execution.error_message, '', 'the execution-level message really is empty');

  const seed = await buildSeed(execution, assembleContext(execution, null));
  const runtime = seed.failed_node_runtime as { http_status: number; error: string; resolved_fields: Record<string, string>; received_from: string };
  assert.equal(runtime.http_status, 404);
  assert.match(runtime.error, /Cannot PUT \/api\/appointments/);
  assert.ok(!runtime.error.includes('<'), 'an HTML error page is reduced to its text');
  assert.match(runtime.resolved_fields.url!, /us-east-1\.zuperpro\.com\/api\/appointments"?$/);
  assert.equal(runtime.received_from, 'Construct');
});

test('real node data: the real envelope is read, so paths resolve against what Construct produced', fixtureOptions, async () => {
  const execution = realFixture();
  const input: any = await getNodeInput(execution, 'update Appointment');
  const url = input.inputs.find((i: any) => i.field === 'url.value');
  assert.equal(url.status, 'resolved');
  assert.equal(url.target.name, 'Construct');
  assert.match(url.value, /api\/appointments"$/, 'the URL ends at /appointments: no appointment uid');
  assert.equal(url.shapeAssumed, undefined, 'nothing is assumed about the shape any more');

  const data: any = await getNodeData(execution, 'Construct', { select: ['data.data.association_payload.url', 'data.data.appointment_update_payload.url'] });
  assert.match(data.selected[0].value, /appointments\/[0-9a-f-]{36}\/associations/, 'the association URL does carry the appointment uid');
  assert.doesNotMatch(data.selected[1].value, /appointments\/[0-9a-f-]{36}/, 'the update URL does not');
});

test('real node data: input_data is what the node received', fixtureOptions, async () => {
  const execution = realFixture();
  const received: any = await getNodeData(execution, 'update Appointment', { which: 'input', select: ['data.data.appointment_update_payload.url'] });
  assert.equal(received.selected[0].status, 'resolved');
  const trigger: any = await getNodeData(execution, 'On Job Status Update', { which: 'input', select: ['data'] });
  assert.match(trigger.message, /received no input/, 'a trigger has no input_data');
});

test('real node data: the one node without captured data is reported as unreadable, not as empty', fixtureOptions, async () => {
  const execution = realFixture();
  const result: any = await getNodeData(execution, 'Update due date');
  assert.equal(result.fetch_failed, 'FETCH_FAILED');
});

test('the fixture holds no credentials, emails or phone numbers', fixtureOptions, () => {
  const text = readFileSync(fixtureFile, 'utf8');
  assert.ok(!text.includes('fbeaaf5723'), 'the x-api-key value from the resolved headers is redacted');
  assert.deepEqual([...new Set(text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? [])].filter((e) => !e.endsWith('@example.test')), []);
  assert.ok(!/"\d{3}\.\d{3}\.\d{4}"/.test(text), 'phone numbers are redacted');
});

test('the network-dump importer reads the real capture: summary, node data, the duplicated node', existsSync(`${dir}/failed_execution_with_each_node_data`) ? {} : { skip: 'capture not present' }, async () => {
  const { parseNetworkDump } = await import('../importCapture');
  const text = readFileSync(`${dir}/failed_execution_with_each_node_data/d6dceea4-9830-40cc-93e1-bbd244f91cfa.txt`, 'utf8');
  const capture = parseNetworkDump(text);
  assert.equal(capture.summary.workflow_execution.status, 'FAILED');
  assert.equal(Object.keys(capture.nodeData).length, 13);
  assert.equal(capture.duplicates.length, 1);
  assert.deepEqual(capture.skipped, []);
  assert.throws(() => parseNetworkDump('Request URL\nhttps://x/api/workflows/a/executions/b/nodes/11111111-1111-1111-1111-111111111111\nRequest method\nGET\n\n{}'), /No execution summary/);
});

// ── a real execution with a LOOP and per-iteration node data (fixtures/rca/loop-appointments-completed.json) ──
// Nodes in a loop are fetched per iteration (`.../nodes/<uid>?iteration=N`), NOT as an array of runs.
// A loop node's execution_data.data is the CURRENT ELEMENT; its input_data on iteration k>0 is the body's
// result from iteration k-1. Only Construct, Loop and "create Appointment" (iterations 0 and 1) were captured.
const loopFile = projectPath('fixtures', 'rca', 'loop-appointments-completed.json');
const loopOptions = { skip: existsSync(loopFile) ? false : 'fixtures/rca/loop-appointments-completed.json not present' };
const loopExecution = () => executionContextFromFixture(loadFixture(loopFile));

test('real loop: iterations come from the summary (the loop has one more "done" pass than its body)', loopOptions, () => {
  const execution = loopExecution();
  assert.deepEqual(execution.iterationsOf('Loop'), [0, 1, 2]);
  assert.deepEqual(execution.iterationsOf('create Appointment'), [0, 1]);
  assert.deepEqual(execution.iterationsOf('Construct'), [], 'a node outside the loop ran once');
});

test('real loop: the loop node\'s data is the current element, per iteration', loopOptions, async () => {
  const execution = loopExecution();
  const first: any = await getNodeData(execution, 'Loop', { iteration: 0, select: ['data.service'] });
  const second: any = await getNodeData(execution, 'Loop', { iteration: 1, select: ['data.service'] });
  assert.equal(first.selected[0].value, '"Roofing"');
  assert.equal(second.selected[0].value, '"Gutters"');
  assert.equal(first.runtime.iteration, 0);
  assert.equal(first.runtime.total_iterations, 2);
  assert.equal(first.runtime.received_from, 'Construct', 'iteration 0 is fed by the node before the loop');
  assert.equal(second.runtime.received_from, 'create Appointment', 'iteration 1 is fed by the body result of iteration 0');
});

test('real loop: which="input" on iteration 1 is the previous iteration\'s body result', loopOptions, async () => {
  const input: any = await getNodeData(loopExecution(), 'Loop', { iteration: 1, which: 'input', select: ['data.message'] });
  assert.equal(input.selected[0].value, '"Appointment Created Successfully"');
});

test('real loop: a body node resolves its sources at the SAME iteration', loopOptions, async () => {
  const execution = loopExecution();
  const at0: any = await getNodeInput(execution, 'create Appointment', 0);
  const at1: any = await getNodeInput(execution, 'create Appointment', 1);
  const body0 = at0.inputs.find((i: any) => i.field === 'json_body.value');
  const body1 = at1.inputs.find((i: any) => i.field === 'json_body.value');
  assert.equal(body0.iteration, 0);
  assert.equal(body1.iteration, 1);
  assert.notEqual(body0.value, body1.value, 'each iteration built a different request body');
  assert.match(body1.value, /Gutters/);
});

test('real loop: an iteration that was not captured is unreadable, one that never ran says which did', loopOptions, async () => {
  const execution = loopExecution();
  const notCaptured: any = await getNodeData(execution, 'Loop', { iteration: 2 });
  assert.equal(notCaptured.fetch_failed, 'FETCH_FAILED');
  assert.equal(notCaptured.iteration, 2);
  const neverRan: any = await getNodeData(execution, 'Loop', { iteration: 5 });
  assert.match(neverRan.message, /did not run in iteration 5/);
  assert.deepEqual(neverRan.available_iterations, [0, 1, 2]);
});

test('real loop: the seed reports the silent flow end and collapses the loop', loopOptions, async () => {
  const execution = loopExecution();
  const seed = await buildSeed(execution, assembleContext(execution, null));
  assert.equal(seed.mode, 'NO_FAILURE');
  const ended = seed.branch_decisions.find((d) => d.name === 'If/Else 1 1 1');
  assert.equal(ended?.flow_ended, true);
  const loop = seed.executed_nodes.find((n) => n.name === 'Loop');
  assert.equal(loop?.runs, 3);
  assert.equal(loop?.total_iterations, 2);
});

test('the importer keeps per-iteration responses apart and tolerates pasted bare URLs without labels', existsSync(`${dir}/execution_with_loop.txt`) ? {} : { skip: 'loop capture not present' }, async () => {
  const { parseNetworkDump } = await import('../importCapture');
  const capture = parseNetworkDump(readFileSync(`${dir}/execution_with_loop.txt/exeution_with_loop_with_each_node_data.txt`, 'utf8'));
  assert.equal(Object.keys(capture.nodeData).length, 1, 'Construct, fetched once');
  assert.deepEqual(Object.values(capture.iterationData).map((runs) => Object.keys(runs)), [['0', '1'], ['0', '1']]);
  assert.deepEqual(capture.skipped, []);
});
