import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import config from './config';
import { requestIdMiddleware } from './utils/request';
import { errorHandler, notFoundHandler } from './middleware/error';
import logger from './utils/logger';

const app = express();

// ==================== Security Middleware ====================
app.use(helmet());
app.use(cors({
    origin: config.cors.origin,
    credentials: true,
}));

// ==================== Request Parsing ====================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ==================== Logging ====================
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message.trim()),
    },
}));

// ==================== Request ID ====================
app.use(requestIdMiddleware);

// ==================== Rate Limiting ====================
const limiter = rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.maxRequests,
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(`/api/${config.apiVersion}`, limiter);

// ==================== Health Check ====================
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: config.nodeEnv,
    });
});

// ==================== API Routes ====================
// TODO: Add route imports here as they are created
// import authRoutes from './routes/auth';
// import userRoutes from './routes/user';
// app.use(`/api/${config.apiVersion}/auth`, authRoutes);
// app.use(`/api/${config.apiVersion}/users`, userRoutes);

// ==================== Error Handling ====================
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
