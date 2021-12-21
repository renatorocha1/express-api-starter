"use strict"

const bcrypt = require("bcryptjs")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Rocha",
        username: "rocha",
        email: "test@test.com",
        password: await bcrypt.hash("12345678", 10),
        avatar: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {})
  },
}
