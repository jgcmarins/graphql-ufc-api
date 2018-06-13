import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql'

import {
  globalIdField,
} from 'graphql-relay'

const FighterType = new GraphQLObjectType({
  name: 'Fighter',
  fields: () => ({
    id: globalIdField('Fighter'),
    _id: {
      type: GraphQLInt,
      resolve: fighter => fighter.id,
    },
    profileImage: {
      type: GraphQLString,
      resolve: fighter => fighter.profile_image,
    },
    firstName: {
      type: GraphQLString,
      resolve: fighter => fighter.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: fighter => fighter.last_name,
    },
    nickname: { type: GraphQLString },
    weightClass: {
      type: GraphQLString,
      resolve: fighter => fighter.weight_class,
    },
    wins: { type: GraphQLInt },
    losses: { type: GraphQLInt },
    draws: { type: GraphQLInt },
    beltThumbnail: {
      type: GraphQLString,
      resolve: fighter => fighter.belt_thumbnail,
    },
    link: { type: GraphQLString },
  }),
})

export default FighterType
