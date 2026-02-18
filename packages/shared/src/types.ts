// ==================== User Types ====================

export interface User {
    id: string;
    email: string;
    name: string;
    nativeLanguage: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserProfile {
    userId: string;
    avatar?: string;
    timezone: string;
    dailyGoalMinutes: number;
    currentStreak: number;
    longestStreak: number;
}

// ==================== Language & Curriculum Types ====================

export interface Language {
    code: string; // ISO 639-1 code (e.g., 'en', 'fr', 'de')
    name: string; // Display name (e.g., 'English', 'French')
    isActive: boolean;
}

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type SkillType = 'speaking' | 'listening' | 'writing' | 'reading' | 'vocabulary' | 'grammar';

export interface Level {
    id: string;
    languageCode: string;
    cefrLevel: CEFRLevel;
    order: number;
    name: string;
    description: string;
    requiredScoreToAdvance: number; // 0-100
}

export interface Stage {
    id: string;
    levelId: string;
    order: number;
    name: string;
    description: string;
    skillFocus: SkillType;
}

export type LessonType =
    | 'vocabulary'
    | 'grammar'
    | 'listening'
    | 'speaking'
    | 'conversation'
    | 'writing'
    | 'review';

export interface Lesson {
    id: string;
    stageId: string;
    order: number;
    type: LessonType;
    title: string;
    description: string;
    durationMinutes: number;
    contentJson: Record<string, unknown>; // Lesson-specific content structure
}

// ==================== Exercise Types ====================

export type ExerciseType =
    | 'multiple_choice'
    | 'fill_in_blank'
    | 'translation'
    | 'sentence_ordering'
    | 'free_text'
    | 'pronunciation'
    | 'listening_comprehension';

export interface Exercise {
    id: string;
    lessonId: string;
    type: ExerciseType;
    order: number;
    prompt: string;
    expectedAnswer?: string;
    options?: string[]; // For multiple choice
    difficulty: number; // 1-10
    metadata?: Record<string, unknown>;
}

export interface ExerciseAttempt {
    id: string;
    userId: string;
    exerciseId: string;
    userAnswer: string;
    aiEvaluation: string;
    score: number; // 0-100
    attemptNumber: number;
    createdAt: Date;
}

// ==================== Enrollment & Progress ====================

export interface Enrollment {
    id: string;
    userId: string;
    languageCode: string;
    currentLevelId: string;
    currentStageId?: string;
    overallProgress: number; // 0-100
    startedAt: Date;
}

export interface LessonCompletion {
    id: string;
    userId: string;
    lessonId: string;
    score: number; // 0-100
    timeSpentSeconds: number;
    completedAt: Date;
    attemptNumber: number;
}

export interface ProgressSnapshot {
    id: string;
    userId: string;
    enrollmentId: string;
    date: Date;
    vocabularyScore: number; // 0-100
    grammarScore: number;
    speakingScore: number;
    listeningScore: number;
    writingScore: number;
    readingScore: number;
}

// ==================== Voice & Conversation ====================

export interface VoiceSession {
    id: string;
    userId: string;
    lessonId?: string;
    audioUrl: string;
    transcript: string;
    aiFeedback: string;
    pronunciationScore: number; // 0-100
    durationSeconds: number;
    createdAt: Date;
}

export interface ConversationMessage {
    role: 'teacher' | 'student';
    content: string;
    audioUrl?: string;
    timestamp: Date;
}

// ==================== Homework ====================

export type HomeworkType =
    | 'translation'
    | 'writing_prompt'
    | 'listening_comprehension'
    | 'grammar_drill'
    | 'journal';

export type HomeworkStatus = 'assigned' | 'submitted' | 'graded' | 'overdue';

export interface HomeworkAssignment {
    id: string;
    userId: string;
    assignedByLessonId: string;
    type: HomeworkType;
    prompt: string;
    dueDate: Date;
    status: HomeworkStatus;
    createdAt: Date;
}

export interface HomeworkSubmission {
    id: string;
    assignmentId: string;
    content: string;
    aiGrade: number; // 0-100
    aiFeedback: string;
    submittedAt: Date;
}

// ==================== API Response Types ====================

export interface APIResponse<T = unknown> {
    success: boolean;
    data: T | null;
    error: {
        code: string;
        message: string;
    } | null;
    meta: {
        timestamp: string;
        requestId: string;
    };
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

// ==================== Auth Types ====================

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: number; // seconds
}

export interface JWTPayload {
    userId: string;
    email: string;
    iat: number;
    exp: number;
}
