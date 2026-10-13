// Which engine answers POST /zuper/chat, decided from the environment in one place so the route, the server
// start-up log and the tests cannot disagree.
//
//   ZUPER_CHAT_ENGINE=legacy      the old orchestrator (routes/zuperChatRoute.ts), nothing below applies
//   RCA_ENGINE=hydrated           first question AND follow-ups on the hydrated engine
//   RCA_ENGINE=pipeline or unset  first question on the older pipeline, follow-ups on the investigator
//   RCA_ENGINE=<anything else>    everything on the tool-using investigator

export type FirstQuestionEngine = 'hydrated' | 'pipeline' | 'investigator';

export interface ChatEngineSelection {
  handler: 'rca' | 'legacy';
  firstQuestion: FirstQuestionEngine;
  followUp: 'hydrated' | 'investigator';
  /** One line for a log: what is set and what it means. */
  summary: string;
}

export function chatEngineSelection(env: Record<string, string | undefined>): ChatEngineSelection {
  if (env.ZUPER_CHAT_ENGINE === 'legacy') {
    return { handler: 'legacy', firstQuestion: 'investigator', followUp: 'investigator', summary: '/zuper/chat -> the LEGACY chat (ZUPER_CHAT_ENGINE=legacy); RCA_ENGINE is ignored' };
  }
  const setting = env.RCA_ENGINE;
  const firstQuestion: FirstQuestionEngine = setting === 'hydrated' ? 'hydrated' : !setting || setting === 'pipeline' ? 'pipeline' : 'investigator';
  const followUp = firstQuestion === 'hydrated' ? 'hydrated' : 'investigator';
  return {
    handler: 'rca',
    firstQuestion,
    followUp,
    summary: `/zuper/chat -> RCA chat; RCA_ENGINE=${setting ? setting : '(not set, so pipeline)'}; first question: ${firstQuestion}; follow-ups: ${followUp}`,
  };
}
