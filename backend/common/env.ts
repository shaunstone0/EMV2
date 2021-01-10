import dotenv from 'dotenv';
import fs from 'fs-extra';
// import ApplicationError from './application-error';

dotenv.config();

try {
    const environment: string = process.env.NODE_ENV as string;
    const environmentConfig = dotenv.parse(fs.readFileSync('.env.'.concat(environment)));
    for (const configParameter in environmentConfig) {
        if (configParameter) {
            process.env[configParameter] = environmentConfig[configParameter];
        }
    }
} catch {
    console.log('nope');
    // throw new ApplicationError(500, 'Failed to load .env file');
}
