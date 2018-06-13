import { GraphQLString, GraphQLInt } from 'graphql'
import _ from 'lodash/fp'

import { GraphQLModelType } from '../core'

const FighterType = new GraphQLModelType({
  name: 'Fighter',
  fields: () => ({
    _id: { type: GraphQLInt, resolve: _.get('id') },
    profileImage: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    nickname: { type: GraphQLString },
    weightClass: { type: GraphQLString },
    wins: { type: GraphQLInt },
    losses: { type: GraphQLInt },
    draws: { type: GraphQLInt },
    beltThumbnail: { type: GraphQLString },
    link: { type: GraphQLString },
  }),
})

export default FighterType
