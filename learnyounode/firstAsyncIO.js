'use strict';

let fs = require('fs');
fs.readFile(process.argv[2], { encoding: 'utf8' }, function(err, data) {
  if (err) {
    throw new Error(err);
  }

  let newLines = data.toString().match(/\n/g);
  console.log(newLines.length);
});
