'use strict';

let fs = require('fs');
let mod = require('./module.js');
let path = process.argv[2];
let ext = process.argv[3];

mod(path, ext, (err, list) => {
  if (err) {
    throw new Error(err);
  }

  list.forEach(file => console.log(file));
});
