require("dotenv").config()
require("./database")

const path = require("path")
const consign = require("consign")
const express = require("express")
const app = express()

const port = process.env.PORT || 3000

consign({
  cwd: path.join(__dirname),
  verbose: process.env.APP_DEBUG === "true" || false,
})
  .include("middlewares/common.js")
  .then("routes")
  .into(app)

app.listen(port, () => {
  console.log(`Server online on PORT: ${port}`)
})
