const buzzword = require('./buzzword')

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    buzzword: buzzword()
  }))
}
