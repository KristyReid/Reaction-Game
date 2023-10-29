const divClass = document.getElementsByClassName("square");
// let divNo = 1;

//Random number generator - tested, generates a random number from 1 to 6 - not sure about how it's passing the number out?
function randomSix (divNo) {
 return Math.floor(Math.random() * 6) + 1;
//  console.log(DivNo)
}

//Activate one div - untested and needs the click functionality added
function activate () {
    randomSix
    const divActive = document.getElementById(divNo);
    divActive.style.backgroundColor = 'red';
    divActive.addEventListener('click', function(){
        
    });
}


//Timer

let countdown = 60

while (countdown > 0){
 console.log(countdown)
 countdown--
}

console.log("Game over")


// Trying to figure out how to change the color of the squares?

var colors =["blue", "purple", "green", "red", "rgb(250, 175, 72)"];

var square =document.querySelectorAll(".square");
 
Array.prototype.forEach.call(square, function(square) {
  square.addEventListener("click", function() {
    var colorNum = Math.floor(Math.random() * colors.length);
    square.style['background-color'] = colors[colorNum];
  });
});
   
