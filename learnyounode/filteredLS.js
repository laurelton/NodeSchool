'use strict';

let dir = process.argv[2];
let extension = '.' + process.argv[3];

let fs = require('fs');
fs.readdir(dir, (err, list) => {
    if (err) {
        throw new Error(err);
    }
    // console.log('Before:', list);
    list = list.filter(file => file.endsWith(extension));
    // console.log('After:', list);
    list.forEach(file => console.log(file));
});