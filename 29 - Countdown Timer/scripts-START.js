
let countdown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(`[data-time]`);
const form = document.customForm;

function timer(seconds=0) {
    clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds *1000;
  console.log ({now,then});


  displayTimeLeft(seconds)
  displayEndTime(then)

   countdown = setInterval(() => {
    const secondsLeft= Math.round((then - Date.now()) /1000);

    if (secondsLeft<=0){
        clearInterval(countdown);
        console.log("Time's up!");

    }
   // console.log(secondsLeft);
   displayTimeLeft(secondsLeft);
  }, 1000);
  

}



function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds /60);
    const remainderSeconds = seconds %60;
    const display = `${minutes}:${remainderSeconds < 10? "0" : ""}${remainderSeconds}`;
    timerDisplay.textContent=display;
    console.log(seconds);
    document.title = display;
}

function displayEndTime(timestamp){
    const end= new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent= `Be Back At ${hour}:${minutes}`;
}

function startTimer(){
    
    timer(parseInt(this.dataset.time));
}


buttons.forEach(button => button.addEventListener("click",startTimer));

form.addEventListener("submit",function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    if (mins<=0) {
        alert("add a valid number");
    }
    else {
     timer(mins*60);
    }
    this.reset();
})

