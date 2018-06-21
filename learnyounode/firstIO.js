'use strict';

let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let contents = buffer.toString();
let newLines = contents.match(/\n/g);

console.log(newLines.length);
