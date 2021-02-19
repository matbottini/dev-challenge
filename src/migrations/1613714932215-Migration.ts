import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1613714932215 implements MigrationInterface {
    name = 'Migration1613714932215'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `company` (`companyId` varchar(36) NOT NULL, `companyName` varchar(100) NOT NULL, `cnpj` varchar(40) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`companyId`)) ENGINE=InnoDB")
      await queryRunner.query("CREATE TABLE `company_address` (`companyAddressId` varchar(36) NOT NULL, `companyId` varchar(36) NOT NULL, `address` varchar(50) NOT NULL, `number` int(11) NOT NULL, `complement` varchar(60) NULL, `cep` varchar(9) NOT NULL, `neighborhood` varchar(50) NOT NULL, `city` varchar(100) NOT NULL, `state` varchar(2) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`companyAddressId`)) ENGINE=InnoDB")
      await queryRunner.query("CREATE TABLE `company_telephone` (`companyTelephoneId` varchar(36) NOT NULL, `companyId` varchar(36) NOT NULL, `telephone` varchar(14) NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`companyTelephoneId`)) ENGINE=InnoDB")
      await queryRunner.query("CREATE TABLE `credit_request` (`creditRequestId` varchar(36) NOT NULL, `companyId` varchar(36) NOT NULL, `value` float(8,2) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`creditRequestId`)) ENGINE=InnoDB")
      await queryRunner.query("CREATE TABLE `loan` (`loanId` varchar(36) NOT NULL, `creditRequestId` varchar(36) NOT NULL, `finalValue` float(8,2) NOT NULL, `interestRate` float(8,2) NOT NULL, `numberOfInstallments` int(3) NOT NULL, `installmentValue` float(8,2) NOT NULL, `status` varchar(30) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`loanId`)) ENGINE=InnoDB")
      await queryRunner.query("CREATE TABLE `installment` (`installmentId` varchar(36) NOT NULL, `loanId` varchar(36) NOT NULL, `dueDate` date NOT NULL, `payday` date NULL, `status` varchar(30) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `version` int NOT NULL DEFAULT '0', PRIMARY KEY (`installmentId`)) ENGINE=InnoDB")
      await queryRunner.query('ALTER TABLE `company_address` ADD CONSTRAINT `FK_2509f69fcfd83d6928072f8bac9` FOREIGN KEY (`companyId`) REFERENCES `company`(`companyId`) ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE `company_telephone` ADD CONSTRAINT `FK_d920756513b9ed4804b274d6189` FOREIGN KEY (`companyId`) REFERENCES `company`(`companyId`) ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE `credit_request` ADD CONSTRAINT `FK_048d0ebadfbdbfdb667175a4bbe` FOREIGN KEY (`companyId`) REFERENCES `company`(`companyId`) ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE `loan` ADD CONSTRAINT `FK_98e7adb49316ccebf6eef27f1a4` FOREIGN KEY (`creditRequestId`) REFERENCES `credit_request`(`creditRequestId`) ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE `installment` ADD CONSTRAINT `FK_ad3f1ce44562e50c0de7a6078f8` FOREIGN KEY (`loanId`) REFERENCES `loan`(`loanId`) ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `installment` DROP FOREIGN KEY `FK_ad3f1ce44562e50c0de7a6078f8`')
      await queryRunner.query('ALTER TABLE `loan` DROP FOREIGN KEY `FK_98e7adb49316ccebf6eef27f1a4`')
      await queryRunner.query('ALTER TABLE `credit_request` DROP FOREIGN KEY `FK_048d0ebadfbdbfdb667175a4bbe`')
      await queryRunner.query('ALTER TABLE `company_telephone` DROP FOREIGN KEY `FK_d920756513b9ed4804b274d6189`')
      await queryRunner.query('ALTER TABLE `company_address` DROP FOREIGN KEY `FK_2509f69fcfd83d6928072f8bac9`')
      await queryRunner.query('DROP TABLE `installment`')
      await queryRunner.query('DROP TABLE `loan`')
      await queryRunner.query('DROP TABLE `credit_request`')
      await queryRunner.query('DROP TABLE `company_telephone`')
      await queryRunner.query('DROP TABLE `company_address`')
      await queryRunner.query('DROP TABLE `company`')
    }
}
