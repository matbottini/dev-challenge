import { LoanModel } from "../models/loan.model";

export interface ILoanRepository {
    save(loan: LoanModel): Promise<LoanModel>
    findOne(loanId: string): Promise<LoanModel>
    update(loan: Partial<LoanModel>): Promise<LoanModel>
}
