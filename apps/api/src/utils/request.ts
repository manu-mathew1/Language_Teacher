import type { Request, Response, NextFunction } from 'express';
import { createAPIResponse, generateRequestId } from '@linguamentor/shared';

/**
 * Extends Express Request to include requestId
 */
declare global {
    namespace Express {
        interface Request {
            requestId: string;
        }
    }
}

/**
 * Adds a unique request ID to each request
 */
export function requestIdMiddleware(req: Request, res: Response, next: NextFunction): void {
    req.requestId = generateRequestId();
    res.setHeader('X-Request-ID', req.requestId);
    next();
}

/**
 * Wraps async route handlers to catch errors
 */
export function asyncHandler(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
    return (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

/**
 * Sends a standardized success response
 */
export function sendSuccess<T>(res: Response, data: T, statusCode = 200): void {
    const requestId = res.req.requestId || 'unknown';
    res.status(statusCode).json(createAPIResponse(data, requestId));
}
