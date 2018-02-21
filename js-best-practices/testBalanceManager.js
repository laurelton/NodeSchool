var balanceManager = require('./balanceManager');

var canAfford1 = balanceManager.canAfford(null);
var canAfford2 = balanceManager.canAfford(0.1);
var count = 1;

console.log("The value of canAfford" + count++ + " is: " + canAfford1);
console.log("The value of canAfford" + count++ + " is: " + canAfford2);