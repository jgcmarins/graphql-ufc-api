import "babel-polyfill"
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql'

import fetch from 'node-fetch'

const BASE_URL = 'http://ufc-data-api.ufc.com/api/v3/iphone'

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json())
}

function fetchFighters() {
  return fetchResponseByURL('/fighters/').then(json => json)
}

const FighterType = new GraphQLObjectType({
  name: 'Fighter',
  fields: () => ({
    id: { type: GraphQLInt },
    profileImage: {
      type: GraphQLString,
      resolve: fighter => fighter.profile_image
    },
    firstName: {
      type: GraphQLString,
      resolve: fighter => fighter.first_name
    },
    lastName: {
      type: GraphQLString,
      resolve: fighter => fighter.last_name
    },
    nickname: { type: GraphQLString },
    weightClass: {
      type: GraphQLString,
      resolve: fighter => fighter.weight_class
    },
    wins: { type: GraphQLInt },
    losses: { type: GraphQLInt },
    draws: { type: GraphQLInt },
    beltThumbnail: {
      type: GraphQLString,
      resolve: fighter => fighter.belt_thumbnail
    },
    link: { type: GraphQLString }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    allFighters: {
      type: new GraphQLList(FighterType),
      resolve: async () => {
    		const resp = await fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters/');
    		const data = await resp.json();
    		return data;
  	  }
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
})
