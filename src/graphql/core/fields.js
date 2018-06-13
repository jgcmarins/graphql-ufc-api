import _ from 'lodash/fp'

export const defaultResolve = (parent, args, context, { fieldName }) => {
  const propertyName = _.snakeCase(fieldName)
  return parent[propertyName]
}

export const withDefaultResolve = ({ resolve = defaultResolve, ...props }) => ({
  resolve,
  ...props,
})

export const normalize = _.mapValues(withDefaultResolve)
