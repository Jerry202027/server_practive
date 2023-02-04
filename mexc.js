const axios = require('axios');

const mexc = {
    // var fundingRate,
    async getPremium() {
        var mexcPremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;
        const response = await axios.get('https://contract.mexc.com/api/v1/contract/ticker');
        const data = response.data.data;

        for (i = 0; i < data.length; i++) {
            lastPrice = data[i]['lastPrice'];
            indexPrice = data[i]['indexPrice'];
            name = data[i]['symbol'];
            premium = ((lastPrice - indexPrice) / lastPrice) * 100;
            if (Math.abs(premium) > 0.8) {
                mexcPremiumList.push({ name: name, premium: premium, });
            }
        }
        return mexcPremiumList;
    },
};

module.exports = mexc;
