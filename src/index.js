"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var LogType;
(function (LogType) {
    LogType["Error"] = "ERROR";
    LogType["Warn"] = "WARN";
    LogType["Info"] = "INF";
    LogType["Debug"] = "DEBUG";
})(LogType = exports.LogType || (exports.LogType = {}));
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (type, msg) {
        console.log("[" + type + "]: " + msg);
    };
    ConsoleLogger.prototype.error = function (msg) {
        var label = chalk_1.default.red("[" + LogType.Error + "]:");
        console.error(label + " " + msg);
    };
    ConsoleLogger.prototype.warn = function (msg) {
        var label = chalk_1.default.bgRed.black("[" + LogType.Warn + "]:");
        console.error(label + " " + msg);
    };
    ConsoleLogger.prototype.info = function (msg, context) {
        var label = chalk_1.default.white.bold("[" + LogType.Info + "]:");
        console.error(label + " " + msg);
        if (context) {
            console.log(chalk_1.default.yellow("[CTX]: " + JSON.stringify(context, null, 2)));
        }
    };
    ConsoleLogger.prototype.debug = function (msg, context) {
        var label = chalk_1.default.white("[" + LogType.Debug + "]:");
        console.error(label + " " + msg);
        if (context) {
            console.log(chalk_1.default.yellow("[CTX]: " + JSON.stringify(context, null, 2)));
            console.error(label + " " + msg);
        }
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
var WinstonLogger = /** @class */ (function () {
    function WinstonLogger() {
    }
    // TODO: Back using Winston
    WinstonLogger.prototype.log = function (type, msg) {
        throw new Error("Method not implemented.");
    };
    WinstonLogger.prototype.error = function (msg) {
        throw new Error("Method not implemented.");
    };
    WinstonLogger.prototype.warn = function (msg) {
        throw new Error("Method not implemented.");
    };
    WinstonLogger.prototype.info = function (msg, context) {
        throw new Error("Method not implemented.");
    };
    WinstonLogger.prototype.debug = function (msg, context) {
        throw new Error("Method not implemented.");
    };
    return WinstonLogger;
}());
exports.WinstonLogger = WinstonLogger;
exports.default = ConsoleLogger;
