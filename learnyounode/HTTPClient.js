'use strict';

let http = require('http');
let url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('error', (err) => {
    throw new Error(err);
  });
  response.on('data', (data) => {
    data.split('\n').forEach(line => console.log(line));
  });
}).on('error', console.error);
