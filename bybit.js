const axios = require('axios');

const bybit = {
    async getPremiumList() {
        var bybitPremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;
        const response = await axios.get('https://api.bybit.com/v2/public/tickers');
        for (i = 0; i < response.data.result.length; i++) {

            lastPrice = response.data.result[i]['last_price'];
            indexPrice = response.data.result[i]['index_price'];
            name = response.data.result[i]['symbol'];
            premium = ((lastPrice - indexPrice) / lastPrice) * 100;

            if (Math.abs(premium) > 0.8) {
                bybitPremiumList.push({ name: name, premium: premium, });
            }

        }
        return bybitPremiumList;
    }
};

module.exports = bybit;

