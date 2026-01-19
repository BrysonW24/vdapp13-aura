export type UserRole = 'trainer' | 'client' | 'assistant';

export interface ClientProfile {
  id: string;
  name: string;
  goal: string;
  coachId: string;
}

export interface ProgramAssignment {
  clientId: string;
  programId: string;
  startDate: string;
}

export interface WorkoutLog {
  clientId: string;
  workoutId: string;
  completedAt: string;
  notes?: string;
}

export interface ClientSnapshot {
  clientId: string;
  summary: string;
  riskFlags: string[];
  suggestedActions: string[];
  draftMessage: string;
  programAdjustments: string[];
}

export interface Checkin {
  id: string;
  clientId: string;
  submittedAt: string;
  mood: number;
  sleepHours: number;
  soreness: string;
  adherence: number;
  notes?: string;
}

export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  body: string;
  sentAt: string;
}

export interface Session {
  id: string;
  clientId: string;
  startsAt: string;
  endsAt: string;
  location?: string;
}

export interface ProgramTemplate {
  id: string;
  title: string;
  focus: string;
  durationWeeks: number;
}

export interface Workout {
  id: string;
  programId: string;
  title: string;
  notes?: string;
}
