var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// Retreives local stroage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
