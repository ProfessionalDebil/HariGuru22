// Get query string values
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

var type = params.fox; // kon kon
if (type == null || type > 18) {
    type = 0
}

var nameContainer = document.getElementById("nameContainer");
var letterContainer = document.getElementById("letterContainer");
var bgContainer = document.getElementById("bgImg");

nameContainer.textContent = nameList[type];

var letter = letterList[type]
var bg = bgList[type];

if (letter != null) {
    letterContainer.textContent = letterList[type]
}

if (bg != null) {
    bgContainer.src = bgList[type];
}

let quoteContainer = document.getElementById("quoteContainer")

function createQuote(content) {
    let quote = document.createElement("div");
    quote.classList.add("quote");
    let quoteObject = document.createElement("p");
    let nameObject = document.createElement("p");
    quoteObject.textContent = content;
    nameObject.textContent = content;
    quoteObject.classList.add("quoteObject");
    nameObject.classList.add("nameObject");

    quote.appendChild(quoteObject);
    quoteContainer.appendChild(quote);
}

var i = 0;
createQuote(quoteList[i]);
i = 1;

function quoteLoop() {
  setTimeout(function() {
    createQuote(quoteList[i]);
    i++;
    if (i < quoteList.length) {
      quoteLoop();
    }
  }, 1000)
}

quoteLoop();