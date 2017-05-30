import "babel-polyfill"
import express from 'express'
import graphQLHTTP from 'express-graphql'

import schema from './schema'

const PORT = process.env.PORT || 5000

var app = express()

app.use(graphQLHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log('Server listening at port ' + PORT)
})
