/* eslint-disable no-console */

import 'isomorphic-fetch';

import { koaPlayground } from 'graphql-playground-middleware';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import cors from 'koa-cors';
import graphqlHttp from 'koa-graphql';
import koaLogger from 'koa-logger';
import Router from 'koa-router';
// import { print } from 'graphql/language';

import { schema } from './schema';

const app = new Koa();

const router = new Router();

app.use(bodyParser());

// https://github.com/koajs/koa/wiki/Error-Handling
// When using `koa-graphql` this is not really called, but let's keep in in here
// for future reference
// see https://github.com/chentsulin/koa-graphql/issues/85
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', err => {
  console.error('Error while answering request', { error: err });
});

app.use(koaLogger());
app.use(convert(cors({ maxAge: 86400, origin: '*' })));

router.all(
  '/playground',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

router.all(
  '/graphql',
  convert(
    graphqlHttp(async (req, ctx) => {
      // const { authorization } = req.header;

      return {
        graphiql: process.env.NODE_ENV === 'development',
        schema,
        rootValue: {
          request: ctx.req,
        },
        context: {
          // dataloaders,
        },
        // tslint:disable-next-line
        extensions: ({ document, variables, result }) => {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log(print(document));
          //   console.log(variables);
          //   console.log(JSON.stringify(result, null, 2));
          // }
        },
        // https://gist.github.com/nodkz/d14b236d67251d2df5674cb446843732#file-server-js-L35
        formatError: error => {
          if (error.path || error.name !== 'GraphQLError') {
            console.error(error);
          } else {
            console.error(`GraphQLWrongQuery: ${error.message}`);
          }

          console.error('GraphQL Error', { error });

          return {
            message: error.message,
            locations: error.locations,
            stack: error.stack,
          };
        },
      };
    }),
  ),
);

app.use(router.routes()).use(router.allowedMethods());

export default app;
