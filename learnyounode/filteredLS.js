'use strict';

let fs = require('fs');
let directory = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(directory, (err, list) => {
  if (err) {
    throw new Error(err);
  }

  list
    .filter(file => file.endsWith(extension))
    .forEach(file => console.log(file));
});
