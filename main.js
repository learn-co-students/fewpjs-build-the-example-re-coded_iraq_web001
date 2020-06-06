// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal  = document.getElementById('modal');
let hearts = document.querySelectorAll(".like-glyph");


function changeHeart(heart) {
  hearts.forEach(heart =>
  {
  if(heart.innerText ==EMPTY_HEART)
  {
    heart.innerText = FULL_HEART;
    heart.classList.add('activated-heart');
  }
    else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
}


hearts.forEach(el => {
el.addEventListener('click',()=>
{
console.log("hi");
mimicServerCall()
.then(() => {
  //start of then
changeHeart(el);
})
.catch(() => {
  modal.classList.remove('hidden');
  setTimeout(()=> {
    modal.classList.add('hidden'); },5000)
})
/*end of click function*/}

/* end of EventListener*/);



/* end of forEach */})

document.addEventListener('DOMContentLoaded',()=>
{
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
