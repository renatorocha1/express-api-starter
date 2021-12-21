const Sequelize = require("sequelize")
const connection = new Sequelize(require("../config/database"))

const UserModel = require("../models/UserModel")

UserModel.init(connection)

module.exports = connection
