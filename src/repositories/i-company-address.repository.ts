import { CompanyAddressModel } from '../models/company-address.model'

export interface ICompanyAddressRepository {
    save(company: CompanyAddressModel): Promise<CompanyAddressModel>
    findOne(companyId: string): Promise<CompanyAddressModel>
    update(company: Partial<CompanyAddressModel>): Promise<CompanyAddressModel>
}
