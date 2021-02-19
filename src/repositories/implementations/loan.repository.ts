import { getRepository } from 'typeorm'
import { LoanModel } from '../../models/loan.model'
import { ILoanRepository } from '../i-loan.repository'

export class LoanRepository implements ILoanRepository {
  async save (loan: LoanModel, repository = getRepository(LoanModel)): Promise<LoanModel> {
    const savedLoan = await repository.save(loan)
    return savedLoan
  }

  async findOne (loanId: string, repository = getRepository(LoanModel)): Promise<LoanModel> {
    const loan = await repository.findOneOrFail({
      where: { loanId: loanId }
    })
    return loan
  }

  async update (loan: Partial<LoanModel>, repository = getRepository(LoanModel)): Promise<LoanModel> {
    const updatedLoan = await repository.save(loan)

    return updatedLoan
  }
}
