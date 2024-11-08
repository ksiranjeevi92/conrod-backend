import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrder1731086714959 implements MigrationInterface {
    name = 'CreateOrder1731086714959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "order"
                RENAME COLUMN "remarks" TO "customerId"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "remarks" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "order" DROP COLUMN "customerId"
        `);
        await queryRunner.query(`
            ALTER TABLE "order"
            ADD "customerId" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "order"
            ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"
        `);
        await queryRunner.query(`
            ALTER TABLE "order" DROP COLUMN "customerId"
        `);
        await queryRunner.query(`
            ALTER TABLE "order"
            ADD "customerId" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "remarks"
        `);
        await queryRunner.query(`
            ALTER TABLE "order"
                RENAME COLUMN "customerId" TO "remarks"
        `);
    }

}
