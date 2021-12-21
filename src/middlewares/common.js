const express = require("express")
const rateLimit = require("express-rate-limit")
const cors = require("cors")
const compression = require("compression")
const helmet = require("helmet")

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
})

module.exports = (app) => {
  app.use(cors())
  app.use(compression())
  app.use(helmet())
  app.use(limiter)
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
