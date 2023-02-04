const axios = require('axios');

const bybit = {
    async getPremium() {
        var bybitPremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;
        const response = await axios.get('https://api.bybit.com/v2/public/tickers');
        const data = response.data.result;
        for (i = 0; i < data.length; i++) {

            lastPrice = data[i]['last_price'];
            indexPrice = data[i]['index_price'];
            name = data[i]['symbol'];
            premium = ((lastPrice - indexPrice) / lastPrice) * 100;

            if (Math.abs(premium) > 0.8) {
                bybitPremiumList.push({ name: name, premium: premium, });
            }

        }
        return bybitPremiumList;
    }
};

module.exports = bybit;

