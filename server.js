const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Define a custom API key
const apiKey = 'secret-api-key';

// Define a route that returns the result of calling the external API
app.get('/premiumIndex', async (req, res) => {
    // Get the value of the X-API-KEY header from the request
    const clientApiKey = req.get('X-API-KEY');

    // Check if the API key is valid
    if (clientApiKey !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Make a GET request to the external API
    try {
        const response = await axios.get('https://fapi.binance.com/fapi/v1/premiumIndex');

        // Return the result of the external API to the client
        return res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch data from the external API' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
