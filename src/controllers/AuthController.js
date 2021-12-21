const UserModel = require("../models/UserModel")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../config/jwt")

module.exports = {
  async index(req, res) {
    try {
      const { password, username } = req.body
      const user = await UserModel.findOne({ where: { username } })
      if (!user) {
        return res.status(400).json({ error: "User not found" })
      }
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ error: "Incorrect username or password" })
      }

      const token = generateToken(user)

      user.password = undefined

      return res.json({ user, token })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
