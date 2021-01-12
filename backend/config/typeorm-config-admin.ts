import { ConnectionOptions } from 'typeorm';

const typeOrmName: string = process.env.TYPEORM_DEFAULT_CONNECTION_NAME as string;
const typeOrmHost: string = process.env.MYSQL_HOST as string;
const typeOrmUsername: string = process.env.MYSQL_USERNAME as string;
const typeOrmPassword: string = process.env.MYSQL_PASSWORD as string;
const typeOrmPort: number = Number.parseInt(process.env.MYSQL_PORT as string, 10);
const typeOrmDatabase: string = process.env.MYSQL_DATABASE as string;
const typeOrmSynchronize: string = process.env.TYPEORM_DEFAULT_SYNCHRONIZE as string;
const typeOrmLogging: string = process.env.TYPEORM_DEFAULT_LOGGING as string;
const typeOrmMigrationFiles: string = process.env.TYPEORM_MIGRATION_FILES as string;
const typeOrmMigrationDirectory: string = process.env.TYPEORM_MIGRATION_DIR as string;

const configAppUser: ConnectionOptions = {
    type: 'mysql',
    name: typeOrmName,
    host: typeOrmHost,
    port: typeOrmPort,
    username: typeOrmUsername,
    password: typeOrmPassword,
    database: typeOrmDatabase,
    entities: [`./dist/entities/**/*.js`],
    migrations: [typeOrmMigrationFiles],
    logging: typeOrmLogging === 'true',
    synchronize: typeOrmSynchronize === 'true',
    cli: {
        migrationsDir: typeOrmMigrationDirectory,
    },
    multipleStatements: true,
};

export = configAppUser;
