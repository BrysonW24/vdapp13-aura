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
