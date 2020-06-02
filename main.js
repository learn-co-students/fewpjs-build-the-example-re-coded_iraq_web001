// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded',likes)
function likes(){
  const Allheart=Array.from(document.getElementsByClassName('like-glyph'))
  Allheart.forEach(heart =>{
    heart.addEventListener('click',function(event){
      mimicServerCall()
      .then(function(response){
        if(heart.innerHTML===EMPTY_HEART){
          heart.classList.add('activated-heart')
          
          heart.innerHTML=FULL_HEART
          
        }
          else{
            heart.classList.add('like-glyph')
          heart.innerHTML=EMPTY_HEART
          }
        
      })
      
      
      
      .catch(function(error){
        let modals=document.getElementById('modal')
        modal.classList.remove('hidden')
        let modalMsg=document.getElementById('modal-message')
        modalMsg.innerHTML=error
        setTimeout(setTime,5000)
        function setTime(){
                  modal.classList.add('hidden')

        }
      })
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
