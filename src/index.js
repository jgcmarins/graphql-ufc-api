import "babel-polyfill"
import Koa from 'koa'
import graphqlHttp from 'koa-graphql'

import { schema } from './schema'

const PORT = process.env.PORT || 5000

var app = new Koa()

app.use(graphqlHttp({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log('Server listening at port ' + PORT)
})
