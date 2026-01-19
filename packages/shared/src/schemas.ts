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
