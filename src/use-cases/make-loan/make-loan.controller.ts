import { Request, Response } from 'express'
import { FormattedInstallment } from '../../interfaces-enuns/interfaces-enuns'
import { IMakeLoanRequestDTO } from './make-loan.dto'
import { MakeLoanUseCase } from './make-loan.use-case'

export class MakeLoanController {
    constructor(
        private makeLoanUseCase: MakeLoanUseCase
    ) {}

    async handle (request: Request, response: Response): Promise<Response> {
        try {
            const requestData: IMakeLoanRequestDTO = request.body

            const result: FormattedInstallment[] = await this.makeLoanUseCase.execute(requestData)

            return response.status(200).json({ error: false, result: result })
        } catch (error) {
            return response.status(400).json({
                message: `Error - ${error.message}` || 'Unexpected Error in Make Loan Request UseCase'
            })
        }
    }
}