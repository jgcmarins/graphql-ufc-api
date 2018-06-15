import 'babel-polyfill'
import Koa from 'koa'
import graphqlHttp from 'koa-graphql'

import { schema } from './graphql'

require('dotenv').config()

const { PORT } = process.env

const app = new Koa()

app.use(graphqlHttp({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})
