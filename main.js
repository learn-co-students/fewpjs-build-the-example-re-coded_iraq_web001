// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const hearts = document.getElementsByClassName('like-glyph')
const likeBtns = document.getElementsByClassName('like')
const  modalMessage = document.querySelector('#modal-message');

hidesModalError();
for(const likeBtn of likeBtns){
  likeBtn.addEventListener('click',likebtnEvent)
}

function likebtnEvent(e){
  mimicServerCall()
  .then(() => {
    heartChange(e)
    })
  .catch((error) => {
   modal.classList.remove('hidden')
   modalMessage.innerText = "error hidden modal"
   setTimeout(hidesModalError, 5000);
  })
}

function heartChange(e){
  let heart=e.target;
  heart.innerText== EMPTY_HEART
  ?(heart.innerText= FULL_HEART, heart.classList.add('activated-heart'))
  :(heart.innerText= EMPTY_HEART, heart.classList.remove('activated-heart'))
}

function hidesModalError() {
  modal.classList.add("hidden")
}
function showModalError() {
  modal.classList.remove("hidden")
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
