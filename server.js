const express = require('express');
const app = express();
const cors = require('cors');
const bybit = require('./bybit');
const binance = require('./binance');
const mexc = require('./mexc');
const kucoin = require('./kucoin');
const okx = require('./okx');

app.use(cors());
app.use(express.json());

app.get('/premium', async (req, res) => {

    const bybitPremium = await bybit.getPremium();
    const binancePremium = await binance.getPremium();
    const mexcPremium = await mexc.getPremium();
    const kucoinPremium = await kucoin.getPremium();
    const okxPremium = await okx.getPremium();
    var premium = {
        bybit: bybitPremium,
        binance: binancePremium,
        mexc: mexcPremium,
        kucoin: kucoinPremium,
        okx: okxPremium,
    };
    res.send(premium);
});

app.get('/okx', async (req, res) => {

    // const bybitPremium = await bybit.getPremium();
    // const binancePremium = await binance.getPremium();
    const okxPremium = await okx.getPremium();
    // var premium = { bybit: bybitPremium, binance: binancePremium, mexc: mexcPremium };
    res.send(okxPremium);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
