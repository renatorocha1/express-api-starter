module.exports = {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    dialectOptions: { collate: "utf8mb4_general_ci" },
    timestamp: true,
    paranoid: true,
    underscored: true,
  },
}
