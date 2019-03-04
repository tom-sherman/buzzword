const data = require('./data.json')

function shuffleArray(a) {
  var i;
  for (i = a.length; i--; ) {
    var j = Math.floor((i + 1) * Math.random());
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

module.exports = buzzword = () => {
  const adjectives = shuffleArray(data.adjectives);
  const nouns = shuffleArray(data.nouns);
  const adverbs = shuffleArray(data.adverbs);
  const verbs = shuffleArray(data.verbs);

  var statement = adverbs[adverbs.length - 1];
  statement = statement + ' ' + verbs[verbs.length - 1];
  statement = statement + ' ' + adjectives[adjectives.length - 1];
  statement = statement + ' ' + nouns[nouns.length - 1];

  return statement;
}
