
var quotes=[
    " \“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”\ " ,
    " \“First, solve the problem. Then, write the code.\ " ,
    " \“Experience is the name everyone gives to their mistakes.”\ " ,
    " \“Code is like humor. When you have to explain it, it’s bad.”\ " ,
    " \“Before software can be reusable it first has to be usable.”\ ",
    " \“The only way to learn a new programming language is by writing programs in it.”\ ",
    " \“Testing leads to failure, and failure leads to understanding.”\ ",
    " \“The best error message is the one that never shows up.”\ ",
    " \“Don't write better error messages, write code that doesn't need them.”\ ",
    " \“Writing in C or C++ is like running a chain saw with all the safety guards removed.”\ ",
    " \“Good code is its own best documentation.”\ ",
]
var author=[
    "--Martin Fowler",
    "--John Johnson",
    "--Oscar Wilde",
    "--Cory House",
    "--Ralph Johnson",
    "--Dennis Ritchie",
    "-- Burt Rutan",
    "--Thomas Fuchs",
    "--Jason C. McDonald",
    "--Bob Gray",
    "--Steve McConnell"
]
var imgs=[
    "img/mf-cologne.jpg",
    "img/john-johnson.jpg",
    "img/oscar-wilde-medium.webp",
    "img/cory-house.jpg",
    "img/ralph2.jpg",
    "img/dennis.webp",
    "img/220px-Burt_Rutan_-_Cropped.jpg",
    "img/thomas.jpg",
    "img/jason.png",
    "--",
    "img/steve.jpg",
]
var randomQnumber=Math.floor(Math.random()*(quotes.length));
function generateQuote(){
    var randomQnumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById("quote").innerHTML=quotes[randomQnumber];
    document.getElementById("author").innerHTML=author[randomQnumber];
    images.setAttribute("src",imgs[randomQnumber]);
    
}
var button=document.getElementById("quote-btn");

button.addEventListener("click",generateQuote);
var images=document.getElementById("author-img");
