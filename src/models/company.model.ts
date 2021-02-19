import { Entity, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('company')

export class CompanyModel {
    @PrimaryGeneratedColumn('uuid')
    companyId?: string

    @Column('varchar', { length: 100 })
    companyName: string

    @Column('varchar', { length: 40 })
    cnpj: string

    @CreateDateColumn({
      type: 'timestamp'
    })
    created?: Date

    @UpdateDateColumn({
      type: 'timestamp'
    })
    updated?: Date

    @VersionColumn({ default: 0 })
    version?: number
}
