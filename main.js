// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMessage =document.getElementById('modal'); 
let likeheart =document.getElementsByClassName('like-glyph');

errorMessage.classList.add('hidden');
for(const likes of likeheart ){
  likes.addEventListener('click',(event) =>{
    mimicServerCall()
    .then(resp => {
   let e=event.target;
console.log(event.target.innerText);
if(e.innerText===EMPTY_HEART){
  likes.innerText =FULL_HEART;
  likes.classList.add('activated-heart');
  }
  else
  //the dislike heart 
   if(e.innerText===FULL_HEART){
    likes.innerText=EMPTY_HEART;
    like.classList.remove('activated-heart');
  }
//catch the error
  }).catch(error =>{
    console.log(error);
    errorMessage.classList.remove('hidden');
    setTimeout(errorMessage.classList.add('hidden'),5000);

})})
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
