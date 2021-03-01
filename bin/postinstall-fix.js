/* eslint-disable */
const fs = require('fs');

const problemFile = 'node_modules/react-dev-utils/formatWebpackMessages.js';

fs.readFile(problemFile, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(
    /let lines = message.split\('\\n'\);/g,
    `let lines = [];

  if (typeof message === 'string' || message instanceof String) {
    lines = message.split('\\n');
  } else if ('message' in Object.keys(message)) {
    lines = message['message'].split('\\n');
  }`,
  );

  fs.writeFile(problemFile, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
