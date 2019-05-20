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

const base64 = require('js-base64').Base64;
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const processDir = fs.realpathSync(process.cwd());

const GITHUB_ACCESS_TOKEN = process.env['GITHUB_ACCESS_TOKEN'];
const GITHUB_USER = process.env['GITHUB_USER'];

const owner = process.env['GITHUB_OWNER'];
const repo = process.env['GITHUB_REPO'];

if (!GITHUB_ACCESS_TOKEN || !GITHUB_ACCESS_TOKEN.length) {
  throw new Error('GITHUB_ACCESS_TOKEN is required but not set');
}

process.on('unhandledRejection', console.dir);

let GIT_BRANCH = process.env['GIT_BRANCH_PR'];
if (
  !GIT_BRANCH ||
  !GIT_BRANCH.length ||
  GIT_BRANCH === '$(System.PullRequest.SourceBranch)'
) {
  GIT_BRANCH = process.env['GIT_BRANCH'];
}

console.log('GIT_BRANCH', GIT_BRANCH);

if (!GIT_BRANCH || !GIT_BRANCH.length || GIT_BRANCH.charAt(0) === '$') {
  throw new Error('Could not get GIT_BRANCH_PR or GIT_BRANCH');
}

// Build the styleguide.
shell.exec('npm run build');

// Ignore differences in npm versions on Azure, etc.
shell.exec('git checkout package-lock.json');

shell.exec('git fetch origin');
shell.exec('git checkout gh-pages');
shell.exec('git pull origin gh-pages');

shell.rm('-rf', GIT_BRANCH);

shell.mkdir('-p', `./${GIT_BRANCH}`);
shell.mv('dist/styleguide/*', `./${GIT_BRANCH}`);

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

console.log('files to commit:\n', files.map((file) => file).join('\n'));

files.forEach((file) => {
  shell.exec(`git add ${file}`);
});

shell.exec('git config --global user.email "robots@octopusthink.com"');
shell.exec('git config --global user.name "Octopus Think Robot"');

shell.exec(`git commit -m 'chore: Deploy styleguide for: ${GIT_BRANCH}'`);

shell.exec(
  `git remote add authenticated https://${GITHUB_USER}:${GITHUB_ACCESS_TOKEN}@github.com/${owner}/${repo}.git`,
  { silent: true },
);
shell.exec('git push authenticated gh-pages');
