import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import {
  ClientSchema,
  ProgramAssignmentSchema,
  WorkoutLogSchema,
  SnapshotResponseSchema,
} from '@aura/shared';

const app = Fastify({ logger: true });
app.register(cors, { origin: true });

const clients: Record<string, z.infer<typeof ClientSchema>> = {};

app.post('/auth/login', async () => {
  return { token: 'stub-token', role: 'trainer' };
});

app.post('/clients', async (req, reply) => {
  const parsed = ClientSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  const client = parsed.data;
  clients[client.id] = client;
  return { client };
});

app.post('/programs/assign', async (req, reply) => {
  const parsed = ProgramAssignmentSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  return { assignment: parsed.data };
});

app.post('/workouts/log', async (req, reply) => {
  const parsed = WorkoutLogSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  return { log: parsed.data };
});

app.get('/clients/:id/snapshot', async (req, reply) => {
  const { id } = req.params as { id: string };
  const client = clients[id];
  if (!client) {
    return reply.status(404).send({ error: 'Client not found' });
  }

  const snapshot = {
    clientId: id,
    summary: `Client ${client.name} is on track.`,
    riskFlags: ['none'],
    suggestedActions: ['Send encouragement message'],
    draftMessage: `Hey ${client.name}, great work staying consistent!`,
    programAdjustments: [],
  };

  return SnapshotResponseSchema.parse(snapshot);
});

app.listen({ port: 4000, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
