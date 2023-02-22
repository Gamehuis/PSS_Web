var links = [
    "adds/add1.html",
    "adds/add2.html"
    //"https://www.example2.com",
];

var randomIndex = Math.floor(Math.random() * links.length);
var randomLink = links[randomIndex];

window.open(randomLink, "_blank");
window.close()