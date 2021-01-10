// @desc: Create a Log File with: Log-middleware_yyyymmdd.log

import { Express, Request } from 'express';
import fs from 'fs-extra';
import moment from 'moment';
import pino, { DestinationStream } from 'pino';

const logPath = './logs';
const logFileSuffix = 'log-middleware';

/**
 * @param {number} number -  creates date type for use within the log creation element,
  used with dates for filename of log.
 * @returns {string} - the log steam, and creates the log file as Log-middleware_yyyymmdd.log.
 */
function pad(number: number): string {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return (number > 9 ? '' : '0') + number;
}

if (!fs.existsSync(logPath)) {
    fs.mkdirsSync(logPath);
}

const now = new Date();
const logFile = `${logFileSuffix}_${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}.log`;

const logStream: DestinationStream =
    process.env.DEBUG_OUTPUT === 'true' ? pino.destination(1) : pino.destination(`${logPath}/${logFile}`);

const Logger = pino(
    {
        prettyPrint: true,
        name: process.env.APP_ID,
        level: process.env.LOG_LEVEL || 'info',
    },
    logStream,
);

export default Logger;

/**
 * @param {void} app - uses the express app to create the log for the application
 */
export function logCallDuration(app: Express): void {
    app.use((request, response, next) => {
        const start = moment();
        const url = request.originalUrl.split('?')[0];

        response.on('finish', () => {
            Logger.debug(`${request.method.padEnd(10)}\t[FINISHED] in ${moment().diff(start, 'ms')}ms\t${url}`);
        });

        response.on('close', () => {
            Logger.debug(`${request.method.padEnd(10)}\t[CLOSED] in ${moment().diff(start, 'ms')}ms\t${url}`);
        });

        next();
    });
}

/**
 * @param {Date} start - used for the start time of the log
 * @param {string} label - the label of the log
 * @param {Request} request - the request that the log is used on.
 */
export function logPartialCallDuration(start: moment.Moment, label: string, request: Request): void {
    Logger.debug(`${request.originalUrl.split('?')[0]} - ${label} took ${moment().diff(start, 'ms')}ms `);
}
