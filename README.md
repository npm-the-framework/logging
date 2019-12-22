# The-Framework/Logger

A package that primarily exposes the 'Logger' interface, and then a basic console logger.

## Interface
```typescript
export enum LogType {
    Error = 'ERROR',
    Warn = 'WARN',
    Info = 'INF',
    Debug = 'DEBUG',
}
export interface Logger {
    log(type: LogType, msg: string):void;
    error(msg: string): void;
    warn(msg: string): void;
    info(msg: string, context?: any): void;
    debug(msg: string, context?: any): void;
}
```

## Usage of this Package
```typescript
import Logger, { LogType } from './index';

const aLogger = new Logger();
aLogger.log(LogType.Info, 'Test Log');
aLogger.error('On No!');
aLogger.debug('It\'s Debug!');
aLogger.info('Informational text only');
aLogger.debug('And then this happened.', { userId: 1234 });
```