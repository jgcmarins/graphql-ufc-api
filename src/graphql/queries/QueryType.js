import { GraphQLObjectType, GraphQLList } from 'graphql'

import fetch from 'node-fetch'

import { FighterType } from '../types'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    allFighters: {
      type: new GraphQLList(FighterType),
      resolve: async () => {
        const resp = await fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters/')
        const data = await resp.json()
        return data
      },
    },
  }),
})

export default QueryType
