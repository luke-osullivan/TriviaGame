
var timer;
var clockRunning;
var clockRunning = false;
var intervalId;
var count = 30;
var rightScore = 0;
var wrongScore = 0;
var rightAns = ["a", "b", "c", "d", "a"];


function startGame() {
  if (clockRunning === false) {
    timer();
  }
}

function timer() {
  clockRunning = true;
  clearInterval(intervalId);
  intervalId = setInterval(counter, 1000);
}

function counter() {
  count--;
  $("#timer").text(count);
  if (count === 0) {
    clearInterval(intervalId);
    $("#timer").text("Sorry, you are out of time.");
  }
}

$("#startBtn").on("click", function () {
  startGame();
})

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
    showResults();
    $("#submitBtn").hide();
})

function showResults() {
  clearInterval(intervalId);
  $("#timer").text("Your final score:");
  for (i = 0; i < rightAns.length; i++) {
    if ($(`input[name='ans${i+1}']:checked`).val() === rightAns[i]) {
      rightScore++;
    }
  }
  $("#rightScore").text(rightScore);
  $("#wrongScore").text(rightAns.length - rightScore);
}