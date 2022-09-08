// Dom elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var counterDiv = document.getElementById("counter");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");


startBtn.addEventListener("click", function() {

    var counter = 100;
    var timer = setInterval(function() {
        counter --;
        counterDiv.textContent = counter;
        if (counter === 0) {
            clearInterval(timer);
        }
    }, 1000);
})

startBtn.addEventListener("click", startGame)
