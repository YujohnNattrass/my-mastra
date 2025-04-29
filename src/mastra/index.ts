
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { anotherWorkflow, weatherWorkflow } from './workflows';
import { anotherAgent, weatherAgent } from './agents';

export const mastra = new Mastra({
  workflows: { weatherWorkflow, anotherWorkflow },
  agents: { weatherAgent, anotherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'debug',
  })
});
