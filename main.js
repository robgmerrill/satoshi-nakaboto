var bitcoinPriceYesterday;
var priceChange;
var todaysQuote;

var nakabotoQuote = document.querySelector('h1');
console.log(nakabotoQuote);

var randomNakabotoQuotes = [
  "Satoshi Nakaboto: 'We are way down!",
  "Satoshi Nakaboto: 'We are way up!",
  "Satoshi Nakaboto: 'We are on the way to the moon!",
  "Satoshi Nakaboto: 'The bubble has burst!"
];

async function displayNakabotoBanner() {
  let fetchResult = fetch(
    'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
  );
  let response = await fetchResult;
  let data = await response.json();
  console.log('data');
  console.log(data.changes.price.day);
  priceChange = data.changes.price.day;
  if (priceChange > 2000) {
    todaysQuote =
      'Satoshi Nakaboto: We are heading to the moon! Bitcoin maximalism is real';
  } else if (priceChange > 1000) {
    todaysQuote = "Satoshi Nakaboto: It's great day to have some Bitcoin";
  } else if (priceChange > 0) {
    todaysQuote = "Satoshi Nakaboto: It's great day to have some Bitcoin";
  } else {
    todaysQuote = `Satoshi Nakaboto: Rough day to own some Bitcoin. The price is down ${priceChange} dollars!`;
  }
  nakabotoQuote.textContent = todaysQuote;
}

displayNakabotoBanner();
