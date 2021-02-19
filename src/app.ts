import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { router } from './routes'
import cors, { CorsOptions } from 'cors'
import { TypeORMDataBaseSQL } from './services/infra/database/implementation/typeorm-database-sql'
import { errors as celebrateErrors } from 'celebrate'

const corsOptions: CorsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH'],
  origin: '*'
}

const app: express.Application = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(router)
app.use(celebrateErrors())

app.listen(process.env.PORT, () => { console.log('Listening on ' + process.env.PORT) })

async function initialize () {
  const database = new TypeORMDataBaseSQL()

  await database.connectDB()
}

initialize()

// TODO: Adicionar status no creditRequest e criar msg do retorno avisand oque foi aprovado ; Criar um teste de unidade para cada useCase ; Incluir Docker para o BD ; Criar documentação ;
