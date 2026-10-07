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
