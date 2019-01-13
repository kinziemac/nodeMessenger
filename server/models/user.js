const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  username: {
    unique: true,
    type: String,
  },
  password: String
})

module.exports = mongoose.model('User', userSchema)