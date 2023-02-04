const axios = require('axios');

const okx = {
    async getPremium() {
        var okxPremiumList = [];
        var lastPrice;
        var indexPrice;
        var name;
        var premium;

        const responseLastPrice = await axios.get('https://www.okx.com/api/v5/market/tickers?instType=SWAP');
        const responseIndexPrice = await axios.get('https://www.okx.com/api/v5/market/index-tickers?quoteCcy=USDT');

        const lastPriceData = responseLastPrice.data.data;
        const indexPriceData = responseIndexPrice.data.data;

        for (i = 0; i < lastPriceData.length; i++) {
            for (j = 0; j < indexPriceData.length; j++) {
                if (lastPriceData[i].instId.split('-')[0] === indexPriceData[j].instId.split('-')[0]) {
                    lastPrice = lastPriceData[i].last;
                    indexPrice = indexPriceData[j].idxPx;
                    name = lastPriceData[i].instId;
                    premium = ((lastPrice - indexPrice) / lastPrice) * 100;

                    if (Math.abs(premium) > 0.8) {
                        okxPremiumList.push({ name: name, premium: premium, });
                    }

                }
            }
        }

        return okxPremiumList;
    }
};

module.exports = okx;