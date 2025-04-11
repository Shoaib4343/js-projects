
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let new_quote = document.querySelector("#new-quote");
let api =  [
    {
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "In the middle of every difficulty lies opportunity.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Life is really simple, but we insist on making it complicated.",
      "author": "Confucius"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "Change your thoughts and you change your world.",
      "author": "Norman Vincent Peale"
    },
    {
      "quote": "The best way to predict the future is to create it.",
      "author": "Peter Drucker"
    },
    {
      "quote": "Happiness depends upon ourselves.",
      "author": "Aristotle"
    },
    {
      "quote": "It always seems impossible until it's done.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "Dream big and dare to fail.",
      "author": "Norman Vaughan"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      "author": "Zig Ziglar"
    },
    {
      "quote": "Don’t wait. The time will never be just right.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Act as if what you do makes a difference. It does.",
      "author": "William James"
    },
    {
      "quote": "Quality is not an act, it is a habit.",
      "author": "Aristotle"
    },
    {
      "quote": "A person who never made a mistake never tried anything new.",
      "author": "Albert Einstein"
    },
    {
      "quote": "To handle yourself, use your head; to handle others, use your heart.",
      "author": "Eleanor Roosevelt"
    },
    {
      "quote": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama"
    },
    {
      "quote": "Stay hungry, stay foolish.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Success usually comes to those who are too busy to be looking for it.",
      "author": "Henry David Thoreau"
    }
  ]
  

new_quote.addEventListener("click",function(){
    let random = Math.floor(Math.random() * api.length);
    quote.innerHTML = api[random].quote;
    author.innerHTML = api[random].author;
    
})