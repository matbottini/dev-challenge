import { getRepository } from 'typeorm'
import { CompanyModel } from '../../models/company.model'
import { ICompanyRepository } from '../i-company.repository'

export class CompanyRepository implements ICompanyRepository {
  
  async save (company: CompanyModel, repository = getRepository(CompanyModel)): Promise<CompanyModel> {
    const savedCompany = await repository.save(company)
    return savedCompany
  }

  async findOne (companyId: string, repository = getRepository(CompanyModel)): Promise<CompanyModel> {
    const company = await repository.findOneOrFail({
      where: { companyId: companyId }
    })
    return company
  }

  async update (company: Partial<CompanyModel>, repository = getRepository(CompanyModel)): Promise<CompanyModel> {
    const updatedCompany = await repository.save(company)
    
    return updatedCompany
  }

}
