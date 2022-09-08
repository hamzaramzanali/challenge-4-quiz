// Dom elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var counterDiv = document.getElementById("counter");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");

// start quiz and hide starter screen
startBtn.onclick = () => {
    showQuetions(0); 
    queCounter(1); 
    startTimer(15);
    startTimerLine(0);
}

startBtn.addEventListener("click", function() {

    var counter = 2;
    var timer = setInterval(function() {
        counter --;
        counterDiv.textContent = counter;
        if (counter === 0) {
            clearInterval(timer);
            alert("Better luck next time")
        }
    }, 1000);
})

startBtn.addEventListener("click", startGame)
