import chalk from 'chalk';

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

export class ConsoleLogger implements Logger {
    public log(type: LogType, msg: string): void {
        console.log(`[${type}]: ${msg}`);
    }

    public error(msg: string): void {
        const label = chalk.red(`[${LogType.Error}]:`);
        console.error(`${label} ${msg}`);
    }

    public warn(msg: string): void {
        const label = chalk.bgRed.black(`[${LogType.Warn}]:`);
        console.error(`${label} ${msg}`);
    }

    public info(msg: string, context?: any): void {
        const label = chalk.white.bold(`[${LogType.Info}]:`);
        console.error(`${label} ${msg}`);
        if (context) {
            console.log(chalk.yellow(`[CTX]: ${JSON.stringify(context, null, 2)}`));
        }
    }

    public debug(msg: string, context?: any): void {
        const label = chalk.white(`[${LogType.Debug}]:`);
        console.error(`${label} ${msg}`);
        if (context) {
            console.log(chalk.yellow(`[CTX]: ${JSON.stringify(context, null, 2)}`));
            console.error(`${label} ${msg}`);
        }
    }
}

export class WinstonLogger implements Logger {
    // TODO: Back using Winston
    log(type: LogType, msg: string): void {
        throw new Error("Method not implemented.");
    }    error(msg: string): void {
        throw new Error("Method not implemented.");
    }
    warn(msg: string): void {
        throw new Error("Method not implemented.");
    }
    info(msg: string, context?: any): void {
        throw new Error("Method not implemented.");
    }
    debug(msg: string, context?: any): void {
        throw new Error("Method not implemented.");
    }


}

export default ConsoleLogger;