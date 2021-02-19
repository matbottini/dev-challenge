import express from 'express'
import { router } from './routes'
import cors, { CorsOptions } from 'cors'
import { TypeORMDataBaseSQL } from './infra/database/implementation/typeorm-database-sql'

const corsOptions: CorsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PATCH'], // TODO: Testar remover o 'OPTIONS'
  origin: '*'
}

const app: express.Application = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(router)

app.listen(8082, () => { console.log('Listening on ' + 8082) })

async function initialize () {
  const database = new TypeORMDataBaseSQL()

  await database.connectDB()
}

initialize()

// TODO: Criar um teste de unidade para cada useCase ; Incluir error service ; Incluir Docker para o BD ; Criar documentação ; Criar env.example ; Utilizar os process.env no SQL implementation ; adicioanr logger service
