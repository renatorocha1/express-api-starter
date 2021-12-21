const { body } = require("express-validator")

const onLogin = () => {
  return [
    body("username").exists().bail().isString().bail().isLength({ max: 255 }),
    body("password").exists().bail().isString().bail().isLength({ max: 255 }),
  ]
}

module.exports = { onLogin }
