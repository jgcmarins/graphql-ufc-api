import { GraphQLSchema } from 'graphql'
import { QueryType } from './queries'

const schema = new GraphQLSchema({
  query: QueryType,
})

export default schema
