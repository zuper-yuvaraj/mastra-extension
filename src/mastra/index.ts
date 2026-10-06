import { Mastra } from '@mastra/core/mastra';
import { LibSQLStore } from '@mastra/libsql';
import { DuckDBStore } from '@mastra/duckdb';
import { MastraCompositeStore } from '@mastra/core/storage';
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
import { handleZuperChat } from './routes/zuperChatRoute';
import { handleZuperExplain } from './routes/zuperExplainRoute';

export const mastra = new Mastra({
  bundler: {
    externals: ['@duckdb/node-bindings'],
  },
  agents: { agent, zuperClassifierAgent, zuperChatAgent },
  tools: { startScheduleTool, stopScheduleTool },
  server: {
    apiRoutes: [
      // No Mastra-managed auth provider is configured (server.auth) — these routes do their own
      // bearer-token relay from the Zuper Toolkit extension (see routes/zuperChatRoute.ts), so
      // Mastra's own auth gate is explicitly bypassed rather than left to its unconfigured default.
      { path: '/zuper/chat', method: 'POST', handler: handleZuperChat, requiresAuth: false },
      { path: '/zuper/explain', method: 'POST', handler: handleZuperExplain, requiresAuth: false },
    ],
  },
  storage: new MastraCompositeStore({
    id: 'composite-storage',
    default: new LibSQLStore({
      id: 'mastra-storage',
      url: process.env.TURSO_DATABASE_URL || 'file:./mastra.db',
      authToken: process.env.TURSO_AUTH_TOKEN || undefined,
    }),
    domains: {
      observability: await new DuckDBStore().getStore('observability'),
    },
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
