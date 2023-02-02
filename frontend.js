async function fetchBybitData() {
    try {
        const response = await fetch('http://localhost:3000/bybit');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchBinanceData() {
    try {
        const response = await fetch('http://localhost:3000/binance');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


fetchBybitData();
fetchBinanceData();


