var validCoins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
};

let coinsByAmount = []; 

module.exports = {
    getAmount: function (coinType) {
        
        if (!validCoins.hasOwnProperty(coinType)) {
            throw new Error('Unrecognized coin ' + coinType);
        }

        return validCoins[coinType];
    },

    convertToChange: function(amount) {
        if (Number.isNaN(amount)) return;

        coinsByAmount = [];
        
        // Quarters
        let count = Math.floor(amount / validCoins['q']);
        amount %= validCoins['q'];
        while (count > 0) {
            coinsByAmount.push('q');
            --count;
        }
        
        // Dimes
        count = Math.floor(amount / validCoins['d']);
        amount %= validCoins['d'];
        while (count > 0) {
            coinsByAmount.push('d');
            --count;
        }

        // Nickels
        count = Math.floor(amount / validCoins['n']);
        amount %= validCoins['n'];
        while (count > 0) {
            coinsByAmount.push('n');
            --count;
        }
        
        // Pennies
        count = amount;
        while (count > 0) {
            coinsByAmount.push('p');
            --count;
        }        
        
        return coinsByAmount;
    }
};