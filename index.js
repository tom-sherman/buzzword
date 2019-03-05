const buzzword = require('./buzzword')
const { parse } = require('url')

module.exports = (req, res) => {
  const MAX_BUZZWORDS = 25
  const { query } = parse(req.url, true)
  const { amount = 1 } = query

  const numberOfBuzzwords = Math.min(amount, MAX_BUZZWORDS)

  const buzzwords = []

  for (let index = 0; index < numberOfBuzzwords; index++) {
    buzzwords.push(buzzword())
  }

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    buzzwords
  }))
}
