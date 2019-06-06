// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const { NPM_TOKEN } = process.env;

const authInfoString = `//registry.npmjs.org/:_authToken=${NPM_TOKEN}`;

shell.exec(`${authInfoString} > .npmrc`, { silent: true });
