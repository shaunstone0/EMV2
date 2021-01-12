import bodyParser from 'body-parser';
import express from 'express';
import Logger, { logCallDuration } from './utils/logger/logger';
import session from 'express-session';
import './utils/enviorment/enviorment';
import typeOrmConfig from './middleware/typeorm';
import errorHandler from './middleware/error-handler';
import routerHandler from './api/routes';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const port: number = Number.parseInt(process.env.EXPRESS_PORT as string, 10) || 5000;
const sessionMaxage: number = Number.parseInt(process.env.SESSION_MAXAGE as string, 10);
const sessionSecret: string = process.env.SESSION_SECRET as string;
const sessionName: string = process.env.SESSION_NAME as string;
const bodyparserLimit: string = process.env.BODYPARSER_LIMIT as string;
const mySqlHost: string = process.env.MYSQL_HOST as string;
const mySqlUsername: string = process.env.MYSQL_USERNAME as string;
const mySqlPassword: string = process.env.MYSQL_PASSWORD as string;
const mySqlPort: number = Number.parseInt(process.env.MYSQL_PORT as string, 10);
const mySqlDatabase: string = process.env.MYSQL_DATABASE as string;

logCallDuration(app);
app.use(bodyParser.json({ limit: bodyparserLimit }));
app.use(bodyParser.urlencoded({ extended: true }));

// Session Settings
const storeOptions = {
    name: sessionName,
    host: mySqlHost,
    port: mySqlPort,
    user: mySqlUsername,
    password: mySqlPassword,
    database: mySqlDatabase,
    expiration: sessionMaxage,
    clearExpired: true,
    checkExpirationInterval: 90000,
    createDatabaseTable: false,
    charset: 'utf8mb4_general_ci',
    schema: {
        tableName: 'session',
        columnNames: {
            session_id: 'id',
            expires: 'expires',
            data: 'session',
        },
    },
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const sessionStore = new MySQLStore(storeOptions);
app.use(
    session({
        secret: sessionSecret,
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            secure: false, // TODO: SET TO TRUE ON PRODUCTION ENVIRONMENT
            maxAge: sessionMaxage,
        },
    }),
);

typeOrmConfig();

app.use('/api/v1', routerHandler);

// app.use(errorHandler);

app.listen(port, () => {
    Logger.info(`application up and running on port ${port}`);
    console.log(`Application up and running on port ${port}`);
});
