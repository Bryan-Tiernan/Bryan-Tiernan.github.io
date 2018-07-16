// const sourceSelector = document.querySelector('#sourceSelector');
const main = document.querySelector('main');
// const defaultSource = 'BTC';
window.addEventListener('load', async e =>{
    updateCoins(); 
});

// setInterval(updateCoins(), 10000);

async function updateCoins() {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,EUR');
    const json = await res.json();
    main.innerHTML = putMain(json);
}

function putMain(coin){
    return `
        <div class ="coin">
            <h4>${coin.RAW.BTC.USD.FROMSYMBOL} ${coin.DISPLAY.BTC.USD.FROMSYMBOL} </h4>
            <p>Bitcoin Price = ${coin.DISPLAY.BTC.EUR.PRICE}  ---->  ${coin.DISPLAY.BTC.USD.PRICE}</p>
        </div>
        `;
}