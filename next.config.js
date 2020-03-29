// const dotenv = require('dotenv')

// const result = dotenv.config()

process.env.FAUNADB_SECRET_KEY = "fnADn_Db5fACAuIxN4ElHl_KcZfmVA6ayTIZrpc9"
process.env.FAUNADB_GRAPHQL_ENDPOINT = 'https://graphql.fauna.com/graphql'
// result.error
//   ? console.error(result.error)
//   : console.log('The parsed env vars:', result.parsed)

module.exports = {
  target: 'serverless',
  env: {
    FAUNADB_SECRET_KEY: process.env.FAUNADB_SECRET_KEY,
    FAUNADB_GRAPHQL_ENDPOINT: process.env.FAUNADB_GRAPHQL_ENDPOINT
  },
}
