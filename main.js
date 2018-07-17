const main = document.querySelector('main');
window.addEventListener('load', async e =>{
    console.log('load event');
    updateCoins(); 
});


async function updateCoins() {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,EUR');
    const json = await res.json();
    main.innerHTML = putMain(json);
    console.log('Entered Update Coins');
}

function putMain(coin){
    return `
        <div class ="coin">
            <h4>${coin.RAW.BTC.USD.FROMSYMBOL} ${coin.DISPLAY.BTC.USD.FROMSYMBOL} </h4>
            <p>Bitcoin Price = ${coin.DISPLAY.BTC.EUR.PRICE}  ---->  ${coin.DISPLAY.BTC.USD.PRICE}</p>
        </div>
        `;
}

//To use setinterval Asynchronously
var promise = Promise.resolve(true); 

setInterval(function() {
    promise = promise.then(function () {
        return new Promise(function (resolve) {
            console.log('setinterval promise working');
            updateCoins();
        });
    }); 
}, 10000);