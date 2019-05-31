#!/usr/bin/env node
/* eslint-disable no-console */
/*
  Note:

  This is messy right now and will/should eventually be transformed into its
  own library. It'd be quite handy. For now this pushes to gh-pages via the
  GitHub API and an app.

  When extracted, remove the following libraries from package.json:
*/
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const { GITHUB_ACCESS_TOKEN, GITHUB_USER } = process.env;
const GIT_REF = process.env.GIT_REF || 'master';

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;

if (!GITHUB_ACCESS_TOKEN || !GITHUB_ACCESS_TOKEN.length) {
  throw new Error('GITHUB_ACCESS_TOKEN is required but not set');
}

process.on('unhandledRejection', console.dir);

// Ignore differences in npm versions on Azure, etc.
shell.exec('git checkout package-lock.json');

shell.exec('git fetch origin');
shell.exec('git checkout gh-pages');
shell.exec('git pull origin gh-pages');

shell.rm('-rf', GIT_REF);

shell.mkdir('-p', `./${GIT_REF}`);
shell.mv('dist/styleguide/*', `./${GIT_REF}`);

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

shell.exec(`git commit -m 'chore: Deploy styleguide for: ${GIT_REF}'`);

shell.exec(
  `git remote add authenticated https://${GITHUB_USER}:${GITHUB_ACCESS_TOKEN}@github.com/${owner}/${repo}.git`,
  { silent: true },
);
shell.exec('git push authenticated gh-pages');
