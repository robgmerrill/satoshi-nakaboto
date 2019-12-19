var nakabotoQuote = document.querySelector('h1');
console.log(nakabotoQuote);

var randomNakabotoQuotes = [
  "Satoshi Nakaboto: 'We are way down!",
  "Satoshi Nakaboto: 'We are way up!",
  "Satoshi Nakaboto: 'We are on the way to the moon!",
  "Satoshi Nakaboto: 'The bubble has burst!"
];

function randomNakabotoQuote() {
  var todaysQuote =
    randomNakabotoQuotes[
      Math.floor(Math.random() * randomNakabotoQuotes.length)
    ];
  nakabotoQuote.textContent = todaysQuote;
}

randomNakabotoQuote();
