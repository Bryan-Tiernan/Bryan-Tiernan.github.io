const main = document.querySelector('main');
window.addEventListener('load', async e =>{
    updateCoins(); 
});

async function updateCoins() {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR');
    const json = await res.json(); 
    var bitCoinUSD = new Object(); 
    bitCoinUSD = json.BTC;
    main.innerHTML = bitCoinUSD.map(putMain).join('\n');
}

function putMain(coin){
    return `
        <div class ="Bitcoin">
            <p>Price of Bitcoin = $${coin.USD}</p>
        </div>
        `;
}