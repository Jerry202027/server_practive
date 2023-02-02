const axios = require('axios');

const binance = {
    async getPremiumList() {
        const response = await axios.get('https://fapi.binance.com/fapi/v1/premiumIndex');
        var binancePremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;

        for (i = 0; i < response.data.length; i++) {

            lastPrice = response.data[i]['markPrice'];
            indexPrice = response.data[i]['indexPrice'];
            name = response.data[i]['symbol'];
            premium = ((lastPrice - indexPrice) / lastPrice) * 100;

            if (Math.abs(premium) > 0.8) {
                binancePremiumList.push({ name: name, premium: premium, });
            }

        }
        return binancePremiumList;
    }
};

module.exports = binance;
