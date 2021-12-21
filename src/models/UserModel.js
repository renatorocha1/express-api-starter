const bcrypt = require("bcryptjs")
const AppModel = require("./AppModel")
const { DataTypes } = require("sequelize")

class User extends AppModel {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
      },
      {
        sequelize: connection,
        hooks: {
          beforeCreate: async (user, options) => {
            const hash = await bcrypt.hash(user.password, 10)
            user.password = hash
          },
        },
      }
    )
  }
}

module.exports = User
