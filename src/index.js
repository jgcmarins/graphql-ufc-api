import '@babel/polyfill';
import 'isomorphic-fetch';

import { GRAPHQL_PORT } from './config';

import app from './app';

const runServer = async () => {
  try {
    // ping API
  } catch (error) {
    console.error('Could not connect to the API', { error });
    throw error;
  }

  await app.listen(GRAPHQL_PORT);
  console.info(`Server started on port :${GRAPHQL_PORT}`);
  console.info(`GraphQL Playground available at /playground on port ${GRAPHQL_PORT}`);
};

(async () => {
  await runServer();
})();
