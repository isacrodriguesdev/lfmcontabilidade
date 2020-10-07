const express = require('express')
const next = require('next')
const cors = require('cors')
const mailer = require('./server/services/mailer')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(cors({
      origin: "https://www.lfmcontabilidade.com.br",
      "methods": "GET,POST"
    }))
    server.use(express.json())
    server.use(express.urlencoded({extended: true}))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.post('/mailer', (req, res) => {

      console.log(req.body)

      mailer(req.body)
        .then(() => {
          res.status(200).end()
        })
        .catch(console.log)
    })

    server.listen(3333)
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })