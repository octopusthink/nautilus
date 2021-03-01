const fs = require('fs');

const problemFile = 'node_modules/react-dev-utils/formatWebpackMessages.js';

fs.readFile(problemFile, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(
    /let lines = message.split\('\\n'\);/g,
    `let lines = [];

  if (typeof message === 'string' || message instanceof String) {
    lines = message.split('\\n');
  } else if ('message' in Object.keys(message)) {
    lines = message['message'].split('\\n');
  }`,
  );

  fs.writeFile(problemFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
