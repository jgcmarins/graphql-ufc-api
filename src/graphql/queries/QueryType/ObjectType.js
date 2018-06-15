import { GraphQLObjectType } from 'graphql'

import * as fields from './fields'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => fields,
})

export default QueryType
