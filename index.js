const buzzword = require('./buzzword')

module.exports = (req, res) => {
  res.end(JSON.stringify({
    buzzword: buzzword()
  }))
}
