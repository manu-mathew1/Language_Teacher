import type { APIResponse, PaginatedResponse } from './types';

/**
 * Creates a standardized API success response
 */
export function createAPIResponse<T>(
    data: T,
    requestId: string
): APIResponse<T> {
    return {
        success: true,
        data,
        error: null,
        meta: {
            timestamp: new Date().toISOString(),
            requestId,
        },
    };
}

/**
 * Creates a standardized API error response
 */
export function createAPIError(
    code: string,
    message: string,
    requestId: string
): APIResponse<never> {
    return {
        success: false,
        data: null,
        error: {
            code,
            message,
        },
        meta: {
            timestamp: new Date().toISOString(),
            requestId,
        },
    };
}

/**
 * Creates a paginated response
 */
export function createPaginatedResponse<T>(
    items: T[],
    total: number,
    page: number,
    pageSize: number
): PaginatedResponse<T> {
    return {
        items,
        total,
        page,
        pageSize,
        hasMore: page * pageSize < total,
    };
}

/**
 * Generates a unique request ID
 */
export function generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

/**
 * Sleep utility for async delays
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Calculates the percentage score between two numbers
 */
export function calculateScore(correct: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
}

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Safe JSON parse with fallback
 */
export function safeJSONParse<T>(json: string, fallback: T): T {
    try {
        return JSON.parse(json) as T;
    } catch {
        return fallback;
    }
}

/**
 * Truncates text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

/**
 * Formats duration in seconds to human-readable string
 */
export function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
}

/**
 * Calculates streak from dates
 */
export function calculateStreak(dates: Date[]): number {
    if (dates.length === 0) return 0;

    const sortedDates = dates
        .map((d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()))
        .sort((a, b) => b.getTime() - a.getTime());

    let streak = 1;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sortedDates.length - 1; i++) {
        const current = sortedDates[i];
        const next = sortedDates[i + 1];

        if (!current || !next) break;

        const diffDays = Math.floor(
            (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays === 1) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

/**
 * Simple hash function for strings
 */
export function hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
}
