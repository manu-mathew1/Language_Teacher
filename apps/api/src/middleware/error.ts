import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { createAPIError } from '@linguamentor/shared';
import { ERROR_CODES } from '@linguamentor/shared';
import logger from '../utils/logger';

export class AppError extends Error {
    constructor(
        public statusCode: number,
        public code: string,
        message: string
    ) {
        super(message);
        this.name = 'AppError';
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Global error handler middleware
 */
export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
): void {
    const requestId = req.requestId || 'unknown';

    // Log error
    logger.error({
        err,
        requestId,
        url: req.url,
        method: req.method,
    }, 'Request error');

    // Zod validation error
    if (err instanceof ZodError) {
        const message = err.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
        res.status(400).json(
            createAPIError(ERROR_CODES.VALIDATION_ERROR, message, requestId)
        );
        return;
    }

    // Application error
    if (err instanceof AppError) {
        res.status(err.statusCode).json(
            createAPIError(err.code, err.message, requestId)
        );
        return;
    }

    // Default error
    res.status(500).json(
        createAPIError(
            ERROR_CODES.INTERNAL_ERROR,
            process.env['NODE_ENV'] === 'development' ? err.message : 'Internal server error',
            requestId
        )
    );
}

/**
 * 404 handler
 */
export function notFoundHandler(req: Request, res: Response): void {
    const requestId = req.requestId || 'unknown';
    res.status(404).json(
        createAPIError(ERROR_CODES.NOT_FOUND, `Route ${req.method} ${req.url} not found`, requestId)
    );
}
