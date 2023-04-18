let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

 async function randomQuote() {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
}

window.addEventListener("load", randomQuote);
btn.addEventListener("click", randomQuote);