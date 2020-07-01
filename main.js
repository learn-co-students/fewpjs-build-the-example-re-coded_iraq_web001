// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let love = {
  "♡": "♥",
  "♥": "♡"
};

let color = {
  "red" : "",
  "": "red"
};

let heart = document.querySelectorAll(".like");

function like(e) {
  let hearts = e.target;
  mimicServerCall("bogusUrl")

    .then(function(serverMessage){
       hearts.innerText = love[hearts.innerText];
       hearts.style.color = color[hearts.style.color];
    })
    .catch(function(error) {

      document.getElementById("modal").className = "";
    });
}
for (let i of heart) {
  i.addEventListener("click", like);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
