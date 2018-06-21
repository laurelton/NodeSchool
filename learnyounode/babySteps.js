'use strict';

// let numbers = process.argv.slice(2);

console.log(
  process.argv
    .slice(2)
    .map(num => Number(num))
    .reduce((total, num) => (total += num))
);
