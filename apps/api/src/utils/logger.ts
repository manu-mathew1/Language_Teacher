import pino from 'pino';
import config from '../config';

const logger = pino({
    level: config.nodeEnv === 'development' ? 'debug' : 'info',
    transport:
        config.nodeEnv === 'development'
            ? {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    ignore: 'pid,hostname',
                    translateTime: 'SYS:standard',
                },
            }
            : undefined,
});

export default logger;
