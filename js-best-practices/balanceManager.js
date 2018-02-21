module.exports = {
    balance: 0,
    
    canAfford: function(amount){
        var errorMessage;
        if(!this.isValidAmount(amount)){
          errorMessage = 'Invalid Input';
        }
        if(errorMessage){
          throw new Error(errorMessage);
        }
        return amount <= this.balance;
      },

    decreaseBalance: function (amount) {
        var errorMessage;
        if (!this.canAfford(amount)) {
            errorMessage = 'Insufficient balance';
        }
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        this.balance -= amount;
    },

    increaseBalance: function (amount) {
        this.balance += amount;
    },

    getBalance: function () {
        return this.balance;
    },

    isValidAmount: function(amount){
      if(amount === null || amount === undefined){
        return false;
      } else {
        return true;
      }
    }
};