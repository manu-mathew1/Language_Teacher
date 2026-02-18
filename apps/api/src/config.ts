import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

interface Config {
    nodeEnv: string;
    port: number;
    apiVersion: string;
    database: {
        url: string;
    };
    redis: {
        url: string;
    };
    jwt: {
        secret: string;
        refreshSecret: string;
        accessTokenExpiry: number;
        refreshTokenExpiry: number;
    };
    openai: {
        apiKey: string;
    };
    cors: {
        origin: string;
    };
    rateLimit: {
        windowMs: number;
        maxRequests: number;
    };
}

const config: Config = {
    nodeEnv: process.env['NODE_ENV'] || 'development',
    port: parseInt(process.env['PORT'] || '4000', 10),
    apiVersion: process.env['API_VERSION'] || 'v1',
    database: {
        url: process.env['DATABASE_URL'] || '',
    },
    redis: {
        url: process.env['REDIS_URL'] || 'redis://localhost:6379',
    },
    jwt: {
        secret: process.env['JWT_SECRET'] || 'development-secret',
        refreshSecret: process.env['JWT_REFRESH_SECRET'] || 'development-refresh-secret',
        accessTokenExpiry: 15 * 60, // 15 minutes
        refreshTokenExpiry: 7 * 24 * 60 * 60, // 7 days
    },
    openai: {
        apiKey: process.env['OPENAI_API_KEY'] || '',
    },
    cors: {
        origin: process.env['CORS_ORIGIN'] || 'http://localhost:3000',
    },
    rateLimit: {
        windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '60000', 10),
        maxRequests: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100', 10),
    },
};

// Validation
if (config.nodeEnv === 'production' && !process.env['DATABASE_URL']) {
    throw new Error('DATABASE_URL must be set in production');
}

if (config.nodeEnv === 'production' && !process.env['OPENAI_API_KEY']) {
    throw new Error('OPENAI_API_KEY must be set in production');
}

export default config;
