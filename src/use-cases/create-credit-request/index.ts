import { CreditRequestRepository } from '../../repositories/implementations/credit-request.repository'
import { CreateCreditRequestController } from './create-credit-request.controller'
import { CreateCreditRequestUseCase } from './create-credit-request.use-case'

const creditRequestRepository = new CreditRequestRepository()

const createCreditRequestUseCase = new CreateCreditRequestUseCase(
  creditRequestRepository
)

const createCreditRequestController = new CreateCreditRequestController(
  createCreditRequestUseCase
)

export { createCreditRequestController }
