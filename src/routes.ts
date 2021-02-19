import express from 'express'
import { createCompanyController } from './use-cases/create-company'
import { createCreditRequestController } from './use-cases/create-credit-request'
import { loanOfferController } from './use-cases/loan-offer'
import { makeLoanController } from './use-cases/make-loan'

const router = express.Router()

router.post('/v1/create-company', (request, response) => {
  return createCompanyController.handle(request, response)
})

router.post('/v1/create-credit-request', (request, response) => {
  return createCreditRequestController.handle(request, response)
})

router.post('/v1/loan-offer', (request, response) => {
  return loanOfferController.handle(request, response)
})

router.post('/v1/make-loan', (request, response) => {
  return makeLoanController.handle(request, response)
})

export { router }
