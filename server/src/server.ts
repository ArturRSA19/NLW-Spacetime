import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true, // Todas URLS de front-end poderão acessar nosso back-end
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Assim que o server estiver no ar, execute:
    console.log(' 🚀 HTTP server running on http://localhost:3333')
  })
