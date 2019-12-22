import Logger, { LogType } from './index';

const aLogger = new Logger();
aLogger.log(LogType.Info, 'Test Log');
aLogger.error('On No!');
aLogger.debug('It\'s Debug!');
aLogger.info('Informational text only');
aLogger.debug('And then this happened.', { userId: 1234 });