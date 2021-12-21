module.exports = (app) => {
  app.get("/", async (req, res) => {
    return res.send({
      text: "Hi there, welcome to Express API Starter!",
      query: req.query,
    })
  })
}
