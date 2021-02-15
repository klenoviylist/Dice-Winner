
document.querySelector("button").addEventListener("click", function () {
  location.reload();
});

// Roll the dice//

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random numbers 1-6

var randomImageSourse = "images/dice" + randomNumber1 + ".png"; // source of a random  dice image

document.querySelector(".image1").setAttribute("src", randomImageSourse); // change dice images


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random numbers 1-6

var randomImageSourse2 = "images/dice" + randomNumber2 + ".png"; // source of a random  dice image

document.querySelector(".image2").setAttribute("src", randomImageSourse2); // change dice images


// If player wins //

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩🚩🚩 Player 1 wins!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h2").innerHTML = "Draw! Try again.";
}
else {
  document.querySelector("h2").innerHTML = "Player 2 wins! 🚩🚩🚩";
}
