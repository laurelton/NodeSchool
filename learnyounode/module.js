'use strict';
let fs = require('fs');
module.exports = function(directory, extension, callback) {
  extension = '.' + extension;
  fs.readdir(directory, (err, list) => {
    if (err) {
      return callback(err);
    }

    callback(null, list.filter(file => file.endsWith(extension)));
  });
};
