// server.js

const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const cors = require('@koa/cors')

const schema = require('./graphql/schema')
const initDB = require('./database')

app.use(cors)

initDB()

const app = new (Koa)

app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})))

app.listen(process.env.PORT || 9000)

app.on('error', err => {
  log.error('server error', err)
})