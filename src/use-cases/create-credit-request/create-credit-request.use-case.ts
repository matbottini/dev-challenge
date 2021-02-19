import { CreditRequestModel } from "../../models/credit-request.model"
import { CreditRequestRepository } from "../../repositories/implementations/credit-request.repository"
import { ICreateCreditRequestDTO } from "./create-credit-request.dto"

export class CreateCreditRequestUseCase {
    constructor(
        private creditRequestRepository: CreditRequestRepository
    ) {}

    async execute(data: ICreateCreditRequestDTO): Promise<CreditRequestModel> {
        if (data.value < 15000 || data.value > 1800000)
        throw new Error('The amount requested must be between R$ 15.000,00 and R$ 1.800.000,00')

        const creditRequest: CreditRequestModel = {
            companyId: data.companyId,
            value: data.value
        }

        const savedCreditRequest = await this.creditRequestRepository.save(creditRequest)
        
        return savedCreditRequest
    }
}