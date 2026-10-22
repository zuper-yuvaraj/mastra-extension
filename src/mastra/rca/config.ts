// Single place for RCA tunables, so a model or budget change is one edit.

/** Re-evaluate on real executions (see scripts/rca-eval.ts); gpt-5.6 is the likely upgrade. */
export const RCA_MODEL = process.env.RCA_MODEL ?? 'openai/gpt-5-mini';

/** Turns the investigator's final text into the structured verdict. Separate from the investigator so
 * the investigator can use tools freely (not every model supports tools and a response schema in one
 * call). Defaults to the investigator's model. */
export const RCA_STRUCTURING_MODEL = process.env.RCA_STRUCTURING_MODEL ?? RCA_MODEL;

/** How hard the model thinks per step. A 7-step investigation took 78 s at the default; this trades some
 * depth for latency. Re-evaluate with scripts/rca-eval.ts. Ignored by providers without the option. */
export const RCA_REASONING_EFFORT = process.env.RCA_REASONING_EFFORT ?? 'low';

/** Tool-calling rounds the investigator may use before it must answer. */
export const RCA_MAX_STEPS = Number(process.env.RCA_MAX_STEPS ?? 12);

/** How far the seed's upstream chain walks from the failed node. */
export const RCA_SEED_HOPS = 5;

/** Per-tool-result cap. Smaller than the chat tools' 60,000: the agent drills in with selectors. */
export const RCA_TOOL_RESULT_CHARS = 12000;

/** Value previews inside resolved inputs. */
export const RCA_VALUE_PREVIEW_CHARS = 300;

/** How long a finished RCA verdict is reused for a terminal execution. */
export const RCA_RESULT_TTL_MS = 10 * 60 * 1000;

/** Stage 1 of the hydrated engine: one definition-only call that says what a workflow version is for and
 * how its nodes group into activities. Cached per version, so a long TTL is safe. */
export const RCA_UNDERSTAND_MODEL = process.env.RCA_UNDERSTAND_MODEL ?? 'openai/gpt-5.1';

export const RCA_UNDERSTAND_EFFORT = process.env.RCA_UNDERSTAND_EFFORT ?? 'low';

/** A workflow version never changes once it has run, so its understanding can be kept for a day. */
export const RCA_UNDERSTAND_TTL_MS = Number(process.env.RCA_UNDERSTAND_TTL_MS ?? 24 * 60 * 60 * 1000);

/** Node-data fetches in flight at once while hydrating an execution (stage 2 of the hydrated engine). */
export const RCA_HYDRATE_CONCURRENCY = Number(process.env.RCA_HYDRATE_CONCURRENCY ?? 6);

/** Stage 3 of the hydrated engine (rca/trim.ts): serialised-size budget for the data one node read or produced. */
export const RCA_TRIM_NODE_CHARS = Number(process.env.RCA_TRIM_NODE_CHARS ?? 16000);

/** The failed node's data may be this many times larger: it is the evidence the answer rests on. */
export const RCA_TRIM_CRITICAL_FACTOR = Number(process.env.RCA_TRIM_CRITICAL_FACTOR ?? 3);

/** Budget for the whole hydrated execution (about 40k tokens at the default). */
export const RCA_PACK_CHARS = Number(process.env.RCA_PACK_CHARS ?? 160000);

/** Stage 5 of the hydrated engine (rca/hydratedPipeline.ts): the model that reads the pack and answers. */
export const RCA_ANALYSIS_MODEL = process.env.RCA_ANALYSIS_MODEL ?? 'openai/gpt-5.1';

export const RCA_ANALYSIS_EFFORT = process.env.RCA_ANALYSIS_EFFORT ?? 'medium';

/** Turns the analysis text into the structured verdict: a formatting job, so it thinks little. */
export const RCA_STRUCTURING_EFFORT = process.env.RCA_STRUCTURING_EFFORT ?? 'low';

/** Model steps the analysis may take, counting the final answer: at most this minus one rounds of get_node_data
 * calls. On the last step the tool is switched off, so the model always has to answer. */
export const RCA_EVIDENCE_MAX_STEPS = Number(process.env.RCA_EVIDENCE_MAX_STEPS ?? 6);

/** Extra rounds, after the first answer, in which the model is shown the quotes that failed verification and
 * asks to replace them with exact excerpts. Each costs one more model call, and only happens when a quote
 * failed. 0 turns it off. */
export const RCA_QUOTE_REPAIRS = Number(process.env.RCA_QUOTE_REPAIRS ?? 1);

/** The router (rca/intent.ts): decides which kind of answer a message needs and for whom. A small, cheap call,
 * made only when the rules cannot decide. */
export const RCA_INTENT_MODEL = process.env.RCA_INTENT_MODEL ?? 'openai/gpt-5-mini';

export const RCA_INTENT_EFFORT = process.env.RCA_INTENT_EFFORT ?? 'low';

/** How long the router may take before the rules' default is used instead. */
export const RCA_INTENT_TIMEOUT_MS = Number(process.env.RCA_INTENT_TIMEOUT_MS ?? 8000);

/** The light chat path (rca/chatLight.ts): small talk and general Workflow Builder help, answered without the
 * run data. Defaults to the analysis model, at low effort. */
export const RCA_CHAT_MODEL = process.env.RCA_CHAT_MODEL ?? RCA_ANALYSIS_MODEL;

export const RCA_CHAT_EFFORT = process.env.RCA_CHAT_EFFORT ?? 'low';

/** Writes a Markdown trace of every hydrated-engine query (prompt, steps, model answers, response) to RCA_TRACE_DIR
 * (rca/trace.ts). For understanding and debugging only: traces contain customer workflow data. */
export const RCA_TRACE = ['1', 'true', 'on'].includes((process.env.RCA_TRACE ?? '').toLowerCase());

export const RCA_TRACE_DIR = process.env.RCA_TRACE_DIR ?? 'rca-traces';
