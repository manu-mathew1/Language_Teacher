// ==================== Supported Languages ====================

export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'es', name: 'Spanish' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Mandarin Chinese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
] as const;

export const LANGUAGE_CODES = SUPPORTED_LANGUAGES.map((lang) => lang.code);

// ==================== CEFR Levels ====================

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export const CEFR_LEVEL_DESCRIPTIONS = {
    A1: 'Beginner — Can understand and use familiar everyday expressions',
    A2: 'Elementary — Can communicate in simple and routine tasks',
    B1: 'Intermediate — Can deal with most situations while traveling',
    B2: 'Upper Intermediate — Can interact with fluency and spontaneity',
    C1: 'Advanced — Can express ideas fluently and spontaneously',
    C2: 'Mastery — Can understand with ease virtually everything',
} as const;

// ==================== Skill Types ====================

export const SKILL_TYPES = [
    'speaking',
    'listening',
    'writing',
    'reading',
    'vocabulary',
    'grammar',
] as const;

// ==================== Scoring Constants ====================

export const SCORING = {
    MIN_SCORE: 0,
    MAX_SCORE: 100,
    PASSING_SCORE: 70,
    MASTERY_SCORE: 90,
    MIN_SECTION_SCORE: 50, // For level advancement tests
} as const;

// ==================== Time Constants ====================

export const DAILY_GOAL_OPTIONS = [5, 15, 30, 60] as const; // minutes

export const SPACED_REPETITION_INTERVALS = {
    AGAIN: 1, // 1 day
    HARD: 2, // 2 days
    GOOD: 4, // 4 days
    EASY: 7, // 7 days
} as const;

// ==================== AI Constants ====================

export const AI_MODELS = {
    CHAT: 'gpt-4o',
    CHAT_FAST: 'gpt-4o-mini',
    EMBEDDING: 'text-embedding-3-small',
    TTS: 'tts-1',
    TTS_HD: 'tts-1-hd',
    STT: 'whisper-1',
} as const;

export const AI_VOICE_OPTIONS = {
    alloy: 'Neutral, balanced',
    echo: 'Male, clear',
    fable: 'British accent',
    onyx: 'Deep, authoritative',
    nova: 'Female, warm',
    shimmer: 'Female, bright',
} as const;

// ==================== API Constants ====================

export const API_VERSION = 'v1';

export const RATE_LIMITS = {
    AUTHENTICATED: 100, // requests per minute
    UNAUTHENTICATED: 20,
} as const;

export const MAX_FILE_SIZES = {
    AUDIO: 10 * 1024 * 1024, // 10 MB
    IMAGE: 5 * 1024 * 1024, // 5 MB
    AVATAR: 2 * 1024 * 1024, // 2 MB
} as const;

export const MAX_AUDIO_DURATION_SECONDS = 300; // 5 minutes

// ==================== Token Constants ====================

export const JWT_EXPIRY = {
    ACCESS_TOKEN: 15 * 60, // 15 minutes
    REFRESH_TOKEN: 7 * 24 * 60 * 60, // 7 days
} as const;

export const BCRYPT_ROUNDS = 12;

// ==================== Error Codes ====================

export const ERROR_CODES = {
    // Auth
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',
    TOKEN_INVALID: 'TOKEN_INVALID',
    UNAUTHORIZED: 'UNAUTHORIZED',
    EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',

    // Validation
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    INVALID_INPUT: 'INVALID_INPUT',

    // Resources
    NOT_FOUND: 'NOT_FOUND',
    ALREADY_EXISTS: 'ALREADY_EXISTS',

    // Rate Limiting
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',

    // Server
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',

    // AI
    AI_SERVICE_ERROR: 'AI_SERVICE_ERROR',
    AI_TIMEOUT: 'AI_TIMEOUT',

    // File Upload
    FILE_TOO_LARGE: 'FILE_TOO_LARGE',
    INVALID_FILE_TYPE: 'INVALID_FILE_TYPE',
} as const;
