const axios = require('axios');

const kucoin = {
    async getPremium() {
        var kucoinPremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;
        const response = await axios.get('https://api-futures.kucoin.com/api/v1/contracts/active');
        const data = response.data.data;
        for (i = 0; i < data.length; i++) {
            lastPrice = data[i]['lastTradePrice'];
            indexPrice = data[i]['indexPrice'];
            name = data[i]['symbol'];
            premium = ((lastPrice - indexPrice) / lastPrice) * 100;
            if (Math.abs(premium) > 0.8) {
                kucoinPremiumList.push({ name: name, premium: premium, });
            }

        }
        return kucoinPremiumList;
    }
};

module.exports = kucoin;
