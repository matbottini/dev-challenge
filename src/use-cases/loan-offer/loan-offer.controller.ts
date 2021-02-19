import { Request, Response } from 'express'
import { FormattedLoan } from '../../interfaces-enuns/interfaces-enuns'
import { ILoanOfferRequestDTO } from './loan-offer.dto'
import { LoanOfferUseCase } from './loan-offer.use-case'

export class LoanOfferController {
    constructor(
        private loanOfferUseCase: LoanOfferUseCase
    ) {}

    async handle (request: Request, response: Response): Promise<Response> {
        try {
            const requestData: ILoanOfferRequestDTO = request.body

            const result: FormattedLoan = await this.loanOfferUseCase.execute(requestData)

            return response.status(200).json({ error: false, result: result })
        } catch (error) {
            return response.status(400).json({
                message: `Error - ${error.message}` || 'Unexpected Error in Loan Offer Request UseCase'
            })
        }
    }
}