import { FormattedLoan, StatusLoan } from "../../interfaces-enuns/interfaces-enuns"
import { LoanModel } from "../../models/loan.model"
import { CreditRequestRepository } from "../../repositories/implementations/credit-request.repository"
import { LoanRepository } from "../../repositories/implementations/loan.repository"
import { ILoanOfferRequestDTO } from "./loan-offer.dto"

export class LoanOfferUseCase {
    constructor(
        private loanRepository: LoanRepository,
        private creditRequestRepository: CreditRequestRepository
    ) {}

    async execute(data: ILoanOfferRequestDTO): Promise<FormattedLoan> {
        const creditRequest = await this.creditRequestRepository.findOne(data.creditRequestId)

        const numberOfInstallments = (creditRequest.value >= 15000 && creditRequest.value <= 250000) ? 12 : 24

        const interestRate = (creditRequest.value >= 15000 && creditRequest.value <= 500000) ? 0.02 : 0.015

        const installmentValue = creditRequest.value * ((((1 + interestRate) ** numberOfInstallments) * interestRate) / (((1 + interestRate) ** numberOfInstallments) - 1))

        const finalValue = installmentValue * numberOfInstallments

        const loan: LoanModel = {
            creditRequestId: creditRequest.creditRequestId as string,
            finalValue: finalValue,
            interestRate: interestRate,
            numberOfInstallments: numberOfInstallments,
            installmentValue: installmentValue,
            status: StatusLoan.PENDING
        }

        const savedLoan = await this.loanRepository.save(loan)

        const formattedLoan: FormattedLoan = {
            loadId: savedLoan.loanId as string,
            loanValue: new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(creditRequest.value),
            finalValue: new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(finalValue),
            interestRate: `${interestRate * 100}%`,
            numberOfInstallments: numberOfInstallments,
            installmentValue: new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(installmentValue)
        }
        
        return formattedLoan
    }
}