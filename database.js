const mongoose = require('mongoose')

const initDB = () => {
  console.log(process.env.MONGODB_URI)

  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )

  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })
}

module.exports = initDB