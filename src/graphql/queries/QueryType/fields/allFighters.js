import { GraphQLList } from 'graphql'
import fetch from 'node-fetch'

import { FighterType } from '../../../types'

const allFighters = {
  type: new GraphQLList(FighterType),
  resolve: async () => {
    const response = await fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters/')
    return response.json()
  },
}

export default allFighters
