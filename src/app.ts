import express from 'express'
import { router } from './routes'
import cors, { CorsOptions } from 'cors'
import Helmet from 'helmet'
import { TypeORMDataBaseSQL } from './infra/database/implementation/typeorm-database-sql'

const corsOptions: CorsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
  origin: '*'
}

const app: express.Application = express() // Responsável por permitir que este back receba requisições

app.use(express.json()) // Responsável por permitir o acesso do req.body nas requests
app.use(cors(corsOptions)) // Responsável por configurar as autorizações para acessar as rotas
app.use(router)
app.use(Helmet()) // O que é isso exatamente??

app.listen(8082, () => { console.log('Listening on ' + 8082) })

async function initialize () {
  const database = new TypeORMDataBaseSQL()

  await database.connectDB()

}

initialize()

// TODO: Adicionar gitignore e lint e configs de TS

// TODO: Criar um teste de unidade para cada useCase ; Incluir error service ; Incluir Docker para o BD