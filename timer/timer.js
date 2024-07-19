//getting the DOM elements
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")
const timer =document.getElementById("timer")



let interval;
//setting the timer initially to 25 minute which is equal to 1500 seconds
let timeLeft = 1500;

//function to update the timer
function updateTimer(){
    //getting the minutes and seconds of the timer based on the timeLeft
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}
//function to start the timer
function startTimer(){
interval = setInterval(()=>{
    timeLeft--
updateTimer();
if(timeLeft === 0){
    clearInterval(interval)
    alert("Time's up")
    timeLeft = 1500
    updateTimer()
}
}, 1000)
}
//function to stop the timer
function stopTimer(){
clearInterval(interval)

}
//function to reset the timer
function resetTimer(){
clearInterval(interval)
timeLeft = 1500
updateTimer()
}


//adding eventlisteners to the buttons to make them more dynamic
startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)