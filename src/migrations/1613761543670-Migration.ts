import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1613761543670 implements MigrationInterface {
    name = 'Migration1613761543670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `company` DROP COLUMN `cnpj`");
        await queryRunner.query("ALTER TABLE `company` ADD `cnpj` varchar(18) NOT NULL");
        await queryRunner.query("ALTER TABLE `company` ADD UNIQUE INDEX `IDX_b55d9c6e6adfa3c6de735c5a2e` (`cnpj`)");
        await queryRunner.query("ALTER TABLE `company_address` CHANGE `number` `number` int(11) NOT NULL");
        await queryRunner.query("ALTER TABLE `loan` CHANGE `numberOfInstallments` `numberOfInstallments` int(3) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `UNIQUE` ON `company` (`cnpj`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UNIQUE` ON `company`");
        await queryRunner.query("ALTER TABLE `loan` CHANGE `numberOfInstallments` `numberOfInstallments` int NOT NULL");
        await queryRunner.query("ALTER TABLE `company_address` CHANGE `number` `number` int NOT NULL");
        await queryRunner.query("ALTER TABLE `company` DROP INDEX `IDX_b55d9c6e6adfa3c6de735c5a2e`");
        await queryRunner.query("ALTER TABLE `company` DROP COLUMN `cnpj`");
        await queryRunner.query("ALTER TABLE `company` ADD `cnpj` varchar(40) NOT NULL");
    }

}
