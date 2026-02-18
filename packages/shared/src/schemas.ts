import { z } from 'zod';
import { LANGUAGE_CODES, CEFR_LEVELS, SKILL_TYPES, DAILY_GOAL_OPTIONS } from './constants';

// ==================== Auth Schemas ====================

export const registerSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
    nativeLanguage: z.string().min(2, 'Native language is required'),
});

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export const refreshTokenSchema = z.object({
    refreshToken: z.string().min(1, 'Refresh token is required'),
});

// ==================== User Profile Schemas ====================

export const updateProfileSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    nativeLanguage: z.string().min(2).optional(),
    timezone: z.string().optional(),
    dailyGoalMinutes: z.enum([...DAILY_GOAL_OPTIONS.map(String)] as [string, ...string[]]).transform(Number).optional(),
});

// ==================== Enrollment Schemas ====================

export const createEnrollmentSchema = z.object({
    languageCode: z.enum(LANGUAGE_CODES as unknown as [string, ...string[]]),
    proficiencyLevel: z.enum(['complete_beginner', 'some_basics', 'intermediate']).optional(),
});

// ==================== Lesson Schemas ====================

export const startLessonSchema = z.object({
    lessonId: z.string().uuid('Invalid lesson ID'),
});

export const completeLessonSchema = z.object({
    lessonId: z.string().uuid('Invalid lesson ID'),
    score: z.number().min(0).max(100),
    timeSpentSeconds: z number().int().min(0),
    exercises: z.array(
        z.object({
            exerciseId: z.string().uuid(),
            userAnswer: z.string(),
            score: z.number().min(0).max(100),
        })
    ),
});

// ==================== Exercise Schemas ====================

export const submitExerciseSchema = z.object({
    exerciseId: z.string().uuid('Invalid exercise ID'),
    userAnswer: z.string().min(1, 'Answer cannot be empty'),
});

// ==================== Voice Session Schemas ====================

export const createVoiceSessionSchema = z.object({
    lessonId: z.string().uuid().optional(),
    audioData: z.instanceof(Buffer).or(z.string()), // Base64 or Buffer
});

// ==================== Homework Schemas ====================

export const submitHomeworkSchema = z.object({
    assignmentId: z.string().uuid('Invalid assignment ID'),
    content: z.string().min(1, 'Submission cannot be empty').max(5000, 'Submission is too long'),
});

// ==================== Pagination Schemas ====================

export const paginationSchema = z.object({
    page: z.number().int().min(1).default(1),
    pageSize: z.number().int().min(1).max(100).default(20),
});

// ==================== Common Validation Schemas ====================

export const idParamSchema = z.object({
    id: z.string().uuid('Invalid ID format'),
});

export const languageCodeParamSchema = z.object({
    languageCode: z.enum(LANGUAGE_CODES as unknown as [string, ...string[]]),
});

// ==================== Type Exports ====================

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateEnrollmentInput = z.infer<typeof createEnrollmentSchema>;
export type StartLessonInput = z.infer<typeof startLessonSchema>;
export type CompleteLessonInput = z.infer<typeof completeLessonSchema>;
export type SubmitExerciseInput = z.infer<typeof submitExerciseSchema>;
export type SubmitHomeworkInput = z.infer<typeof submitHomeworkSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
