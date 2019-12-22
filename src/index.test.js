"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
var aLogger = new index_1.default();
aLogger.log(index_1.LogType.Info, 'Test Log');
aLogger.error('On No!');
aLogger.debug('It\'s Debug!');
aLogger.info('Informational text only');
aLogger.debug('And then this happened.', { userId: 1234 });
