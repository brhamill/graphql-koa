// server.js

require('dotenv').config()
const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const cors = require('@koa/cors')

const schema = require('./graphql/schema')
const initDB = require('./database')

initDB()

const app = new (Koa)

app.use(cors())

app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})))

app.listen(process.env.PORT || 9000)

app.on('error', err => {
  log.error('server error', err)
})