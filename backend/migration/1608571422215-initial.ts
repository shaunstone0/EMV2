import { MigrationInterface, QueryRunner } from 'typeorm';
import fs from 'fs-extra';

const typeOrmMigrationDirectory = process.env.TYPEORM_MIGRATION_DIR as string;

export class initial1608571422215 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const initialScriptString = fs.readFileSync(typeOrmMigrationDirectory + '/initial.sql', 'utf8');
        await queryRunner.query(initialScriptString);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
