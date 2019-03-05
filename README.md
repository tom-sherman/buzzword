# Buzzword API

> globally reintermediate superior supply chains

A micro API based on [The Corporate B.S. Generator](https://www.atrixnet.com/bs-generator.html).

## Example response

```json
{
  "buzzwords": [
    "quickly foster resource-maximizing services"
  ]
}
```

You can supply the optional `amount` parameter to return multiple buzzword phrases. There is a max of 25 that can be returned.

`/?amount=4`

```json
{
  "buzzwords": [
    "conveniently innovate high standards in applications",
    "compellingly redefine future-proof infomediaries",
    "phosfluorescently facilitate synergistic clouds",
    "interactively customize real-time core competencies"
  ]
}
```

## Dictionary

You can customise the dictionary by amending the adverbs, verbs, adjectives, and nouns arrays in `data.json`.
