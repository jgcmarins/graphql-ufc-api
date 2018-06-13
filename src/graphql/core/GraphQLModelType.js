import { GraphQLObjectType } from 'graphql'
import { globalIdField } from 'graphql-relay'

import { normalize as normalizeFields } from './fields'

class GraphQLModelType extends GraphQLObjectType {
  constructor({ name, fields, ...props }) {
    super({
      name,
      fields: (...args) => ({
        id: globalIdField(name),
        ...normalizeFields(fields(...args)),
      }),
      ...props,
    })
  }
}

export default GraphQLModelType
