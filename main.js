// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const liker = document.getElementsByClassName('like-glyph')
for (let i = 0; i< liker.length; i++){
  liker[i].addEventListener('click', function(){
    const e=event.target;
    console.log(mimicServerCall);
    mimicServerCall().then(res => {
      console.log(res)
      return res
  
    }).then (data => {
      console.log(data)
      if(e.innerHTML === EMPTY_HEART){
        liker[i].classList.add("activated-heart");
        liker[i].innerHTML = FULL_HEART;
      }else {
        liker[i].classList.remove("activated-heart");
        liker[i].innerHTML = EMPTY_HEART;
      }
    }).catch(heartError => {

     if (heartError === "Random server error. Try again."){
      const errorText = document.getElementById('modal')
      errorText.innerText = heartError;
      errorText.classList.remove('hidden')
      setTimeout(function(){
        errorText.classList.add('hidden');

      }, 5000)

     }
     
    })
    
  })
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
