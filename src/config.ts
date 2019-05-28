import path from 'path';
import dotenvSafe from 'dotenv-safe';

const root = path.join.bind(this, __dirname, '../');

if (process.env.NOW_REGION) {
  dotenvSafe.load({
    path: root('.env'),
    sample: root('.env.example'),
  });
}

const ENV = process.env;

// Export GraphQL Server settings
export const GRAPHQL_PORT = ENV.GRAPHQL_PORT || 5000;
