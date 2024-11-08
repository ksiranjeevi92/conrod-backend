import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrder1731085733563 implements MigrationInterface {
    name = 'CreateOrder1731085733563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "order"
            ADD "remarks" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "order" DROP COLUMN "remarks"
        `);
    }

}
