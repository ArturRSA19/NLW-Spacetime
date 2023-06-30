import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // Todas URLS de front-end poderão acessar nosso back-end
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    // Assim que o server estiver no ar, execute:
    console.log(' 🚀 HTTP server running on http://localhost:3333')
  })
