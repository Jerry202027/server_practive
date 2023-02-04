async function fetchPremium() {
    try {
        const response = await fetch('http://localhost:3000/premium');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchkucoin() {
    try {
        const response = await fetch('http://localhost:3000/okx');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}



fetchkucoin();
fetchPremium();



