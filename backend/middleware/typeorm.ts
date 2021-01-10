import Logger from '../utils/logger/logger';
import { createConnection as typeOrmCreateConnection } from 'typeorm';
import configAppUser = require('../config/typeorm-config-admin');

const typeOrmConfig = (): void => {
    void (async () => {
        const migrationDirectoryName = '../dist/migration';
        console.log(`Looking for db-entities in cwd: ${process.cwd()} __dirname: ${migrationDirectoryName}`);
        Logger.info(`looking for db migration`);
        const adminConnectionConfig = {
            ...configAppUser,
        };
        const adminConnection = await typeOrmCreateConnection(adminConnectionConfig);
        console.log(`Start db-migrations`);
        Logger.info(`starting db-migrations`);

        await adminConnection.runMigrations({ transaction: 'none' });
    })();
    return;
};

export default typeOrmConfig;
