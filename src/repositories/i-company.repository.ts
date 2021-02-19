import { CompanyModel } from '../models/company.model'

export interface ICompanyRepository {
    save(company: CompanyModel): Promise<CompanyModel>
    findOne(companyId: string): Promise<CompanyModel>
    update(company: Partial<CompanyModel>): Promise<CompanyModel>
}
