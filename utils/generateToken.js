const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

module.exports = function generateToken (res) {
  return jwt.sign({
    id: res.id,
    email: res.email,
    username: res.username
  }, SECRET_KEY)
}
