import { Request, Response } from 'express'
import { CompanyWithAddressAndTelephone } from '../../interfaces-enuns/interface'
import { ICreateCompanyRequestDTO } from './create-company.dto'
import { CreateCompanyUseCase } from './create-company.use-case'

export class CreateCompanyController {
  constructor (
        private createCompanyUseCase: CreateCompanyUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const requestData: ICreateCompanyRequestDTO = request.body

      const result: CompanyWithAddressAndTelephone = await this.createCompanyUseCase.execute(requestData)

      return response.status(200).json({ error: false, result: result })
    } catch (error) {
      return response.status(400).json({
        message: `Error - ${error.message}` || 'Unexpected Error in Create Company UseCase'
      })
    }
  }
}
