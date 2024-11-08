import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrder1731087624370 implements MigrationInterface {
    name = 'CreateOrder1731087624370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "remarks"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "remarks" character varying
        `);
    }

}
