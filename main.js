// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likes = document.getElementsByClassName('like-glyph');
let modal = document.getElementById('modal');
for (const like of likes ){
  like.addEventListener('click',(event)=>{
    mimicServerCall()
    .then(resp => {

      console.log(event.target.innerText);
      if(event.target.innerText==='♡'){
      //  like();
        like.innerText = '♥';
        like.classList.add('activated-heart');
        console.log('empty');
      }else if (event.target.innerText==='♥'){
        //dislike();
        like.innerText = '♡';
        like.classList.remove('activated-heart')
      }
    }).catch(err=>{
      console.log('this is the error:' +err);
      error();
    })

  })
}
function hideError(){
modal.classList.add('hidden');

}

function error(){
modal.classList.remove('hidden');
setTimeout(hideError,5000);
}
// function like(){
//
//
// }


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
