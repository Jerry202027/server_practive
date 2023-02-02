const express = require('express');
const app = express();
const cors = require('cors');
const bybit = require('./bybit');
const binance = require('./binance');

app.use(cors());
app.use(express.json());

app.get('/bybit', async (req, res) => {
    const data = await bybit.getPremiumList();
    res.send(data);
});

app.get('/binance', async (req, res) => {
    const data = await binance.getPremiumList();
    res.send(data);
});

// app.get("/orderBook/:symbol", async (req, res) => {
//     try {
//         const symbol = req.params.symbol;
//         const orderBook = await bybit.getOrderBook(symbol);
//         res.json(orderBook);
//     } catch (error) {
//         res.status(500).send(`Error getting order book for symbol ${symbol} from Bybit API`);
//     }
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
