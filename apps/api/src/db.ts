import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import config from './config';
import logger from './utils/logger';

// Prisma client
export const prisma = new PrismaClient({
    log: config.nodeEnv === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Redis client
export const redis = new Redis(config.redis.url, {
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
});

redis.on('connect', () => {
    logger.info('Redis connected');
});

redis.on('error', (err) => {
    logger.error({ err }, 'Redis connection error');
});

// Graceful shutdown
async function gracefulShutdown() {
    logger.info('Shutting down gracefully...');

    await Promise.all([
        prisma.$disconnect(),
        redis.quit(),
    ]);

    process.exit(0);
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

export default { prisma, redis };
