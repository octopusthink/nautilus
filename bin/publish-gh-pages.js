#!/usr/bin/env node
/* eslint-disable */

/*
  Note:

  This is messy right now and will/should eventually be transformed into its
  own library. It'd be quite handy. For now this pushes to gh-pages via the
  GitHub API and an app.

  When extracted, remove the following libraries from package.json:

  @octokit/app
  @octokit/request
  shelljs
*/

const App = require('@octokit/app');
const { request } = require('@octokit/request');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const processDir = fs.realpathSync(process.cwd());

const APP_ID = process.env['GITHUB_APP_ID'];
const PRIVATE_KEY = process.env['GITHUB_APP_PRIVATE_KEY'];

const owner = 'octopusthink';
const repo = 'nautilus';

console.log('APP_ID', APP_ID);

if (!PRIVATE_KEY || !PRIVATE_KEY.length) {
  throw new Error('GITHUB_APP_PRIVATE_KEY is required but not set');
}

process.on('unhandledRejection', console.dir);

const azureBranchInfo = process.env['Build.SourceBranch'];

const currentBranch = azureBranchInfo
  ? azureBranchInfo.replace(/^refs\/heads\//g, '')
  : shell
      .exec(
        'git symbolic-ref -q --short HEAD || git describe --tags --exact-match',
        { silent: true },
      )
      .stdout.replace(/\n$/, '');

console.log('currentBranch name:', currentBranch);

if (!currentBranch || !currentBranch.length) {
  throw new Error('Could not get "currentBranch"');
}

// Build the styleguide.
shell.exec('npm run build');

// Ignore differences in npm versions on Azure, etc.
shell.exec('git checkout package-lock.json');

shell.exec('git fetch origin');
shell.exec('git checkout gh-pages');
shell.exec('git pull origin gh-pages');

shell.rm('-rf', currentBranch);

shell.mkdir('-p', `./${currentBranch}`);
shell.mv('dist/styleguide/*', `./${currentBranch}`);

const files = shell
  .exec('git ls-files --other --modified --exclude-standard', { silent: true })
  .stdout.split('\n')
  .filter((filename) => filename.length)
  .map((filename) => {
    const normalizedFilename = filename.replace(/\n$/, '');
    return normalizedFilename;
  });

if (!files || !files.length) {
  console.log('Nothing to commit.');
  process.exit(0);
}

const app = new App({ id: APP_ID, privateKey: PRIVATE_KEY });
const jwt = app.getSignedJsonWebToken();

// Example of using authenticated app to GET an individual installation
// https://developer.github.com/v3/apps/#find-repository-installation
let data;
request('GET /repos/:owner/:repo/installation', {
  owner,
  repo,
  headers: {
    authorization: `Bearer ${jwt}`,
    accept: 'application/vnd.github.machine-man-preview+json',
  },
})
  .then((response) => {
    data = response.data;

    const installationId = data.id;

    let installationAccessToken;
    app.getInstallationAccessToken({ installationId }).then((token) => {
      console.log('files to commit:\n', files.map((file) => file).join('\n'));

      files.forEach((file) => {
        shell.exec(`git add ${file}`);
      });

      shell.exec(
        `git commit -m 'chore: Deploy styleguide for: ${currentBranch}'`,
        { silent: true },
      );

      // shell.exec(
      //   `git remote add authenticated https://x-access-token:${token}@github.com/${owner}/${repo}.git`,
      // );
      // shell.exec('git push authenticated gh-pages');
    });
  })
  .catch((error) => {
    throw error;
  });
