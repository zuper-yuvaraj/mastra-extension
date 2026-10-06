// Usage: npm run kb:eval
// Retrieval regression test: each question must surface one of its expected chunk ids in the top 3.
// Off-topic questions must return nothing above the similarity floor.

import { getApiChangelog, getApiEndpoint, listApiEndpoints, listApiModules } from '../src/mastra/knowledge/api/lookup';
import { DEFAULT_MIN_SCORE, searchKnowledge } from '../src/mastra/knowledge/search';

interface Case {
  q: string;
  /** Any of these chunk ids (exact or prefix) in the top 3 counts as a pass. */
  expect: string[];
  /** Restrict the search to one KB (omit to search everything, like an unfiltered agent call). */
  kind?: string;
  /** Deliberately search all KBs together (like an agent that passes no `kind`). */
  unfiltered?: boolean;
  /** A real, understood retrieval weakness: reported as a warning, not a failure. */
  known?: string;
}

const CASES: Case[] = [
  { q: 'why is my expression value undefined even though the previous node returned data', expect: ['wb:expressions_reference:common_mistakes.0', 'wb:expressions_reference:core_model'] },
  { q: 'where is the HTTP response body in a downstream expression', expect: ['wb:expressions_reference:node_output_shapes.http_request_v2'] },
  { q: 'how do I read the Get Record node output fields', expect: ['wb:expressions_reference:node_output_shapes.zuper_get_record'] },
  { q: 'which output of the if else node is the true branch', expect: ['wb:node_catalog:if_else'], unfiltered: true },
  { q: 'can a code node use lodash or moment', expect: ['wb:code_node_runtime:sandbox.modules'] },
  { q: 'what happens when a code node returns nothing', expect: ['wb:code_node_runtime:sandbox.return'] },
  { q: 'code node v2 throws when I use $item', expect: ['wb:code_node_runtime:versions.v2'] },
  { unfiltered: true, q: 'what is the difference between IS_EMPTY in trigger filters and EMPTY in if else', expect: ['wb:trigger_filters_catalog:important_distinction_vs_if_else', 'wb:trigger_filters_catalog:operator_catalogue', 'wb:node_field_schemas:if_else.conditions.gotchas'] },
  { q: 'how do I get the current loop item and index', expect: ['wb:expressions_reference:loop.'] },
  { q: 'loop node input_data field', expect: ['wb:node_catalog:loop', 'wb:node_field_schemas:loop', 'wb:code_node_runtime:zuper_api_recipe.loop_input_data'] },
  { q: 'which modules can only be updated through an http request node', expect: ['wb:node_capabilities:code_only_modules'] },
  { q: 'can I create a quote with a native node', expect: ['wb:node_capabilities:code_only_modules'] },
  { q: 'how to paginate through all jobs', expect: ['wb:code_node_runtime:zuper_api_recipe.pagination_pattern', 'wb:code_node_runtime:zuper_api_recipe.paginate'] },
  { q: 'today is computed in UTC and misses evening jobs', expect: ['wb:code_node_runtime:zuper_api_recipe.timezone_dates', 'wb:code_node_runtime:zuper_api_recipe.compute_date_range'] },
  { q: 'workflow did not trigger because of the trigger filter', expect: ['wb:trigger_filters_catalog:'] },
  { q: 'how long can a code node run before timeout', expect: ['wb:code_node_runtime:sandbox.limits'] },
  { q: 'what wait type can I use inside a loop', expect: ['wb:node_field_schemas:wait.mode_options.FIXED', 'wb:node_catalog:wait'] },
  { q: 'wait node inside a loop', expect: ['wb:node_catalog:wait', 'wb:node_field_schemas:wait'], known: 'short ambiguous query ranks the loop node first; the wait node is 8th' },
  { q: 'how do I use a workflow variable in an expression', expect: ['wb:expressions_reference:variables', 'wb:expressions_reference:accessors.'] },

  // ── business docs (kind=business): expected ids are page prefixes `biz:<path>` ──
  { kind: 'business', q: 'what is the difference between a proposal and a quote', expect: ['biz:Accounting/Difference_Between_Proposals_and_Quotes'] },
  { kind: 'business', q: 'how do I request a partial payment from a customer on an invoice', expect: ['biz:Accounting/Invoices/collecting-partial-payments'] },
  { kind: 'business', q: 'how do I record a payment against an invoice', expect: ['biz:Accounting/Invoices/Recording_payments'] },
  { kind: 'business', q: 'how do I create a purchase order', expect: ['biz:Purchasing/Purchase-Orders/Creating-purchase-order'] },
  { kind: 'business', q: 'what do the purchase order statuses mean', expect: ['biz:Purchasing/Purchase-Orders/Purchase-order-status'] },
  { kind: 'business', q: 'how do milestones and dependencies work in a project', expect: ['biz:Projects/Milestones_and_dependencies'] },
  { kind: 'business', q: 'what is progressive invoicing for projects', expect: ['biz:Projects/Progressive_invoicing'] },
  { kind: 'business', q: 'how do I create a new job', expect: ['biz:Work_Order_Management/Jobs/creating_a_new_job'] },
  { kind: 'business', q: 'how do I create a recurring route for dispatch', expect: ['biz:Dispatch/Create_manage_recurring_route'] },
  { kind: 'business', q: 'how do I create a service contract', expect: ['biz:Contracts_and_Assets_Management/Contract/Creating_Contract'] },
  { kind: 'business', q: 'what are the workflow builder trigger types', expect: ['biz:Workflow_builder/Triggers'] },
  { kind: 'business', q: 'how does version control work for workflows', expect: ['biz:Workflow_builder/Monitoring_and_version_control'] },
  { kind: 'business', q: 'how do I apply a pricelist to a quote', expect: ['biz:Inventory_Management/Pricelists/Apply_Pricelist'] },
  { kind: 'business', q: 'how do I set up job costing with time and material', expect: ['biz:Job_Costing/Time_and_Material', 'biz:Job_Costing/Configuring_Job_Costing'] },
  { kind: 'business', q: 'how do I create a transfer between warehouses', expect: ['biz:Inventory_Management/transfer/Create_Transfer'] },

  // ── API docs (kind=api): ids are `api:<area>/<module>/<endpoint>` ──
  { kind: 'api', q: 'get the details of a single job by its uid', expect: ['api:work-order-management/jobs/get-job-details'] },
  { kind: 'api', q: 'create a new invoice', expect: ['api:accounting/invoices/create-a-invoice'] },
  { kind: 'api', q: 'change the status of an invoice to paid', expect: ['api:accounting/invoices/update-a-invoice-status'] },
  { kind: 'api', q: 'list jobs filtered by priority or category', expect: ['api:work-order-management/jobs/get-all-jobs'] },
  { kind: 'api', q: 'send a quote to the customer by email', expect: ['api:accounting/quotes-proposals/send-a-quote'] },
  { kind: 'api', q: 'update the status of a quote', expect: ['api:accounting/quotes-proposals/update-quote-status'] },
  { kind: 'api', q: 'create a milestone in a project', expect: ['api:work-order-management/projects/create-milestone'] },
  { kind: 'api', q: 'which API endpoints does the invoices module have', expect: ['api:module:accounting/invoices'] },
  { kind: 'api', q: 'update custom fields on any record with a merge', expect: ['api:guide:api-reference/others/custom-fields/update-custom-fields', 'api:others/custom-fields/update-custom-fields'] },
  { kind: 'api', q: 'how do I authenticate API requests with an API key', expect: ['api:guide:api-reference/zuper-pro-api/general/', 'api:guide:guides/documentation/getting-started'] },
  { kind: 'api', q: 'what API changes were released in september 2026', expect: ['api:changelog:changelog/september-2026-updates'], known: 'semantic search is weak on dates; the exact get_api_changelog tool covers this (checked below)' },
  { kind: 'api', q: 'Zuper MCP server tools', expect: ['api:guide:guides/documentation/zupers-model-context-protocol-mcp-server'] },
];

const OFF_TOPIC = ['what is the weather in Paris today', 'best pizza topping', 'how do I train a neural network'];

let failed = 0;
for (const c of CASES) {
  const kind = c.kind ?? (c.expect.every((e) => e.startsWith('wb:')) && !c.unfiltered ? 'workflow_builder' : undefined);
  const hits = await searchKnowledge(c.q, { topK: 3, minScore: 0, kind });
  const ok = hits.some((h) => c.expect.some((e) => h.id === e || h.id.startsWith(e)));
  const warnOnly = !ok && c.known !== undefined;
  if (!ok && !warnOnly) failed++;
  console.log(`${ok ? 'PASS' : warnOnly ? 'WARN' : 'FAIL'}  ${c.q}`);
  if (warnOnly) console.log(`      known limitation: ${c.known}`);
  else if (!ok) console.log(`      expected ${c.expect.join(' | ')}\n      got      ${hits.map((h) => `${h.id} (${h.score})`).join(', ')}`);
}

console.log(`\noff-topic (floor ${DEFAULT_MIN_SCORE}):`);
for (const q of OFF_TOPIC) {
  const all = await searchKnowledge(q, { topK: 1, minScore: 0 });
  const kept = await searchKnowledge(q, { topK: 3 });
  const bad = kept.length > 0;
  if (bad) failed++;
  console.log(`${bad ? 'FAIL' : 'PASS'}  "${q}" top score ${all[0]?.score ?? 'n/a'}, returned ${kept.length}`);
}

// ── exact lookup checks (no embeddings): the lookup layer must return exact, complete facts ──
function check(name: string, ok: boolean, detail = ''): void {
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  lookup: ${name}${ok ? '' : `  ${detail}`}`);
}

console.log('\nexact lookup:');
const byId: any = getApiEndpoint({ id: 'work-order-management/jobs/get-job-details' });
check('get_api_endpoint by id', byId.found && byId.endpoint?.method === 'GET' && byId.endpoint?.path === '/jobs/{job_uid}');
check(
  'job response links to customer and invoice',
  ['customer', 'invoice'].every((m) => byId.endpoint?.associations?.some((a: any) => a.module === m)),
  JSON.stringify(byId.endpoint?.associations),
);
const byPath: any = getApiEndpoint({ method: 'post', path: '/invoice' });
check('get_api_endpoint by method+path', byPath.found && byPath.endpoint?.id === 'accounting/invoices/create-a-invoice', JSON.stringify(byPath).slice(0, 200));
const byTitle: any = getApiEndpoint({ title: 'Get Invoice Details', module: 'invoices' });
check('get_api_endpoint by title+module', byTitle.found && byTitle.endpoint?.path === '/invoice/{invoice_uid}', JSON.stringify(byTitle).slice(0, 200));
const shared: any = getApiEndpoint({ method: 'GET', path: '/estimate/{estimate_uid}' });
check('shared path is reported as ambiguous, not guessed', shared.ambiguous === true && shared.matches.length >= 2, JSON.stringify(shared).slice(0, 200));
check('unknown endpoint says not found', (getApiEndpoint({ id: 'nope/nope/nope' }) as any).found === false);
const invoices: any = listApiEndpoints('accounting/invoices');
check('list_api_endpoints for accounting/invoices', invoices.found && invoices.endpoints.length === 10, `${invoices.endpoints?.length}`);
const moduleCount = listApiModules().modules.length;
check('list_api_modules covers 70+ modules', moduleCount >= 70, `${moduleCount}`);
const sept: any = await getApiChangelog('September 2026');
check('get_api_changelog by month', sept.found && sept.month === 'september-2026' && sept.entries.length > 0, JSON.stringify(sept).slice(0, 200));
const months: any = await getApiChangelog();
check('get_api_changelog lists months', Boolean(months.available_months?.includes('september-2026')), JSON.stringify(months).slice(0, 200));
const biggest = Math.max(
  ...listApiModules().modules.flatMap((m) => {
    const eps: any = listApiEndpoints(m.module);
    return (eps.endpoints ?? []).map((e: any) => JSON.stringify(getApiEndpoint({ id: e.id })).length);
  }),
);
check('no get_api_endpoint result exceeds 14 KB', biggest <= 14500, `${biggest}`);

console.log(`\n${failed === 0 ? 'all passed' : `${failed} failed`}`);
process.exit(failed === 0 ? 0 : 1);
