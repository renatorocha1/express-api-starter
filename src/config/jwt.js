const jwt = require("jsonwebtoken")

module.exports = {
  generateToken(user) {
    return jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: 86400,
    })
  },
  verifyToken(token, callBack) {
    return jwt.verify(token, process.env.APP_SECRET, callBack)
  },
}
