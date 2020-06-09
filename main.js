// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
//remove error message//
window.addEventListener('DOMContentLoaded', (e)=>{
document.getElementById("modal").classList="hidden"
}
)
//server//
mimicServerCall()
.then(data =>
  {
  document.getElementById("modal").classList.remove("hidden")
  document.getElementById("modal").innerHTML=data
  setTimeout(function(){ message.classList="hidden" }, 5000);
})
.catch(err => {
  document.getElementById("modal").classList.remove("hidden")
  document.getElementById("modal").innerHTML=err
  setTimeout(function(){ message.classList="hidden" }, 5000);
})
let message = document.getElementById("modal")

//change heart color//
let heart = document.querySelectorAll(".like-glyph").forEach(item =>{
  console.group(item)
  item.addEventListener("click",function(e){
  if(e.target.innerHTML != FULL_HEART){
    e.target.innerHTML= FULL_HEART
    e.target.classList.add('activated-heart')
  }
  else{
    e.target.innerHTML= EMPTY_HEART
    e.target.classList.remove('activated-heart')
  }
  })
})
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
