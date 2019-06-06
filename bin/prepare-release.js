// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

// eslint-disable-next-line no-template-curly-in-string
const authInfoString = '//registry.npmjs.org/:_authToken=${NPM_TOKEN}';

shell.exec(`${authInfoString} > ~/.npmrc`, { silent: true });
