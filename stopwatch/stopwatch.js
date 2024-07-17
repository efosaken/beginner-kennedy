 const timer = document.getElementById("timer")
 const startButton = document.getElementById("start")
 const stopButton = document.getElementById("stop")
 const resetButton = document.getElementById("reset")


 let startTime = 0;
 let elapseTime = 0;
 let timerInterval;


 function startTimer(){
    startTime = Date.now() - elapseTime;

    
    timerInterval = setInterval(()=>{
        elapseTime = Date.now() - startTime;
         timer.textContent = formatTime(elapseTime)
    }, 10)

    startButton.disabled = true;
    stopButton.disabled = false
 }

 function formatTime(elapseTime){
const milliseconds = Math.floor((elapseTime % 1000) /10)
const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000)
const minutes = Math.floor((elapseTime % (1000 * 60 * 60)) / (1000 * 60))
const hours = Math.floor(elapseTime / (1000 * 60 * 60)) 

return (
   (hours ? (hours > 9 ? hours : "0" + minutes) : "00") + ":" +
   (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
   (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + (milliseconds > 9 ? milliseconds : "0" + milliseconds))
   
 }

 function stopTimer(){
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true
 }

 function resetTimer(){
   clearInterval(timerInterval);
   elapseTime = 0;
   timer.textContent = "00:00:00"
   startButton.disabled = false;
   stopButton.disabled = false;
 }

 startButton.addEventListener("click", ()=>{
    startTimer()
 });

 stopButton.addEventListener("click", ()=>{
    stopTimer()
 })

 resetButton.addEventListener("click", ()=> {
    resetTimer()
 })
