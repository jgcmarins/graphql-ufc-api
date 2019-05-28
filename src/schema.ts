import { GraphQLSchema } from 'graphql';

import QueryType from './type/QueryType';

export const schema = new GraphQLSchema({
  query: QueryType,
});
