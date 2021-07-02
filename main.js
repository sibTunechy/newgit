let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Be happy for this moment" - Unknown', '"Be happy for this moment" - Tunechy', '"There is only one happiness in life, to love and be loved" - Humans',
    '"There is only one happiness in life, to love and be loved" - Dayo'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})