import { z } from 'zod';

export const ClientSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  goal: z.string().min(1),
  coachId: z.string().min(1),
});

export const ProgramAssignmentSchema = z.object({
  clientId: z.string().min(1),
  programId: z.string().min(1),
  startDate: z.string().min(1),
});

export const WorkoutLogSchema = z.object({
  clientId: z.string().min(1),
  workoutId: z.string().min(1),
  completedAt: z.string().min(1),
  notes: z.string().optional(),
});

export const SnapshotResponseSchema = z.object({
  clientId: z.string().min(1),
  summary: z.string().min(1),
  riskFlags: z.array(z.string()),
  suggestedActions: z.array(z.string()),
  draftMessage: z.string().min(1),
  programAdjustments: z.array(z.string()),
});

export const CheckinSchema = z.object({
  id: z.string().min(1),
  clientId: z.string().min(1),
  submittedAt: z.string().min(1),
  mood: z.number().min(1).max(10),
  sleepHours: z.number().min(0),
  soreness: z.string().min(1),
  adherence: z.number().min(0).max(100),
  notes: z.string().optional(),
});

export const MessageSchema = z.object({
  id: z.string().min(1),
  threadId: z.string().min(1),
  senderId: z.string().min(1),
  body: z.string().min(1),
  sentAt: z.string().min(1),
});

export const SessionSchema = z.object({
  id: z.string().min(1),
  clientId: z.string().min(1),
  startsAt: z.string().min(1),
  endsAt: z.string().min(1),
  location: z.string().optional(),
});

export const ProgramTemplateSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  focus: z.string().min(1),
  durationWeeks: z.number().min(1),
});

export const WorkoutSchema = z.object({
  id: z.string().min(1),
  programId: z.string().min(1),
  title: z.string().min(1),
  notes: z.string().optional(),
});
