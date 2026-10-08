import { Mastra } from '@mastra/core/mastra';
import { PostgresStore } from '@mastra/pg';
import { VercelDeployer } from '@mastra/deployer-vercel';
import {
  MastraStorageExporter,
  MastraPlatformExporter,
  Observability,
  SensitiveDataFilter,
} from '@mastra/observability';
import { agent } from './agents/agent';
import { startScheduleTool, stopScheduleTool } from './tools/schedule-tools';
import { zuperClassifierAgent } from './agents/zuperClassifierAgent';
import { zuperChatAgent } from './agents/zuperChatAgent';
import { rcaInvestigatorAgent } from './agents/rcaInvestigatorAgent';
import { rcaWorkflow } from './workflows/rcaWorkflow';
import { knowledgeTools } from './tools/knowledgeTools';
import { handleZuperChat } from './routes/zuperChatRoute';
import { handleZuperExplain } from './routes/zuperExplainRoute';
import { handleZuperRca } from './routes/zuperRcaRoute';
import { handleRcaChat } from './routes/zuperRcaChatRoute';
import { PG_SCHEMA, POOL_OPTIONS, postgresUrl } from './lib/postgres';

// ZUPER_CHAT_ENGINE=rca serves /zuper/chat with the RCA investigator (conversational, one agent for every
// question). Unset keeps the legacy orchestrator, so the switch is reversible by configuration alone.
const chatHandler = process.env.ZUPER_CHAT_ENGINE === 'rca' ? handleRcaChat : handleZuperChat;

const onVercel = Boolean(process.env.VERCEL);

export const mastra = new Mastra({
  // A chat investigation takes 30-50 s of model time; the function must be allowed to run that long.
  deployer: new VercelDeployer({ maxDuration: 120, studio: false }),
  // The starter agent has a local shell and file workspace, which has no place on a public server.
  agents: { ...(onVercel ? {} : { agent }), zuperClassifierAgent, zuperChatAgent, rcaInvestigatorAgent },
  workflows: { rcaWorkflow },
  tools: { ...(onVercel ? {} : { startScheduleTool, stopScheduleTool }), ...knowledgeTools },
  server: {
    // Mastra's own /api routes (run any agent or workflow with our model key) have no auth here. On the
    // public deployment they are closed unless the caller presents MASTRA_ADMIN_KEY; /zuper/* routes do
    // their own bearer-token check and are unaffected.
    middleware: onVercel
      ? [
          {
            path: '/api/*',
            handler: async (c, next) => {
              const key = process.env.MASTRA_ADMIN_KEY;
              if (key && c.req.header('x-mastra-admin-key') === key) return next();
              return c.json({ error: 'NOT_FOUND' }, 404);
            },
          },
        ]
      : [],
    apiRoutes: [
      // No Mastra-managed auth provider is configured (server.auth) — these routes do their own
      // bearer-token relay from the Zuper Toolkit extension (see routes/zuperChatRoute.ts), so
      // Mastra's own auth gate is explicitly bypassed rather than left to its unconfigured default.
      { path: '/zuper/chat', method: 'POST', handler: chatHandler, requiresAuth: false },
      { path: '/zuper/explain', method: 'POST', handler: handleZuperExplain, requiresAuth: false },
      { path: '/zuper/rca', method: 'POST', handler: handleZuperRca, requiresAuth: false },
    ],
  },
  storage: new PostgresStore({
    id: 'mastra-storage',
    connectionString: postgresUrl(),
    schemaName: PG_SCHEMA,
    pgPoolOptions: POOL_OPTIONS,
  }),
  observability: new Observability({
    configs: {
      default: {
        serviceName: 'mastra',
        exporters: [new MastraStorageExporter(), new MastraPlatformExporter()],
        spanOutputProcessors: [new SensitiveDataFilter()],
      },
    },
  }),
});
