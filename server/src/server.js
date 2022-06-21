const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { PORT } = require('./config')
const db = require('./db')

const app = express()

app.disable('x-powered-by') //para q no muestre que es el express
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const taskRouter = require('./resources/task/task.router.js')
app.use('/tasks', taskRouter)

const startServer = async () => {
  await db.connect()
  app.listen(PORT, () => {
    console.log(`Task API listenning on: ${PORT}`)
  })
}

startServer()
