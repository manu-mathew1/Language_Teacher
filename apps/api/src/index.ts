import app from './app';
import config from './config';
import { prisma } from './db';
import logger from './utils/logger';

async function startServer() {
    try {
        // Test database connection
        await prisma.$connect();
        logger.info('Database connected successfully');

        // Start server
        const server = app.listen(config.port, () => {
            logger.info({
                port: config.port,
                env: config.nodeEnv,
                apiVersion: config.apiVersion,
            }, `Server running on http://localhost:${config.port}`);
            logger.info(`API available at http://localhost:${config.port}/api/${config.apiVersion}`);
        });

        // Graceful shutdown
        process.on('SIGTERM', () => {
            logger.info('SIGTERM received, shutting down gracefully');
            server.close(() => {
                logger.info('Server closed');
                process.exit(0);
            });
        });
    } catch (error) {
        logger.error({ error }, 'Failed to start server');
        process.exit(1);
    }
}

startServer();
