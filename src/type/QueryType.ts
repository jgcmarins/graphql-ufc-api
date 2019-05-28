import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
// import { connectionArgs, fromGlobalId } from 'graphql-relay';

// import { NodeField } from '../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    // node: NodeField,
    test: {
      type: GraphQLNonNull(GraphQLString),
      description: 'This is a test field',
      resolve: (root, args, context) => 'Test',
    },
  }),
});
