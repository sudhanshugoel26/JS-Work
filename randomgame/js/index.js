
var random = Math.round(10 * Math.random());


function guessNum() {
  var blank = document.getElementById("reply").innterHTML = "";
  var guess = document.getElementById("numGuess").value;
  
  if (guess < random) {
    document.getElementById("reply").innerHTML = "Sorry, your guess is too low. Try a higher number. Your horseshoe is broken."
  }else if (guess > random) {
    document.getElementById("reply").innerHTML = "Sorry, your guess is too high. Try a lower number... or a four leaf clover."
  }else{
    document.getElementById("reply").innerHTML = "Well done! You guessed it! The number is " + random + ". The luck of the Irish is with you!";
  }
}