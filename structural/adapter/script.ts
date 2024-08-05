// Allows objects with incompatible interfaces work together.
// It acts as a bridge between two incompatible interfaces by wrapping an existing class with a new interface.

// Target interface
interface NewLogger {
    logInfo(message: string): void;
    logError(message: string): void;
}

// Adaptee
class LegacyLogger {
    log(message: string): void {
        console.log(`Legacy Logger: ${message}`);
    }
}

// Adapter
class LoggerAdapter implements NewLogger {
    private legacyLogger: LegacyLogger;

    constructor(legacyLogger: LegacyLogger) {
        this.legacyLogger = legacyLogger;
    }

    logInfo(message: string): void {
        this.legacyLogger.log(`INFO: ${message}`);
    }

    logError(message: string): void {
        this.legacyLogger.log(`ERROR: ${message}`);
    }
}

// Client code that works with the NewLogger interface
function clientCode(logger: NewLogger) {
    logger.logInfo('This is an info message');
    logger.logError('This is an error message');
}

// Using the adapter to make LegacyLogger compatible with NewLogger
const legacyLogger = new LegacyLogger();
const loggerAdapter = new LoggerAdapter(legacyLogger);

clientCode(loggerAdapter);
