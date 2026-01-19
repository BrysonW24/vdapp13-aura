import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import {
  ClientSchema,
  ProgramAssignmentSchema,
  WorkoutLogSchema,
  SnapshotResponseSchema,
  CheckinSchema,
  MessageSchema,
  SessionSchema,
  ProgramTemplateSchema,
  WorkoutSchema,
} from '@aura/shared';

const app = Fastify({ logger: true });
app.register(cors, { origin: true });

const clients: Record<string, z.infer<typeof ClientSchema>> = {};
const checkins: z.infer<typeof CheckinSchema>[] = [];
const messages: z.infer<typeof MessageSchema>[] = [];
const sessions: z.infer<typeof SessionSchema>[] = [];
const programTemplates: z.infer<typeof ProgramTemplateSchema>[] = [];
const workouts: z.infer<typeof WorkoutSchema>[] = [];

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

app.post('/checkins', async (req, reply) => {
  const parsed = CheckinSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  checkins.push(parsed.data);
  return { checkin: parsed.data };
});

app.post('/messages', async (req, reply) => {
  const parsed = MessageSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  messages.push(parsed.data);
  return { message: parsed.data };
});

app.post('/sessions', async (req, reply) => {
  const parsed = SessionSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  sessions.push(parsed.data);
  return { session: parsed.data };
});

app.post('/programs/templates', async (req, reply) => {
  const parsed = ProgramTemplateSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  programTemplates.push(parsed.data);
  return { template: parsed.data };
});

app.post('/workouts', async (req, reply) => {
  const parsed = WorkoutSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send(parsed.error.format());
  }
  workouts.push(parsed.data);
  return { workout: parsed.data };
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
