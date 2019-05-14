const mongoose = require('mongoose')

const initDB = () => {
  mongoose.connect(
    'mongodb://brhamill:password1@ds233452.mlab.com:33452/koa-graphql',
    { useNewUrlParser: true }
  )

  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })
}

module.exports = initDB