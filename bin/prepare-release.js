// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const { NPM_TOKEN } = process.env;

shell.exec(`echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > ~/.npmrc`, {
  silent: true,
});
