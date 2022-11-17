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