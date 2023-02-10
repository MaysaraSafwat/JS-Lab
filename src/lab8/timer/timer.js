//selecting elemnts
let timerBtn = document.getElementById("timer");
let setTimerBtn = document.getElementById("setTimer");
let timer  = document.querySelector("form")

//For displaying digital clock
function displayTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(displayTime, 1000);
    
}

displayTime();

// For setting a timer

timerBtn.addEventListener("click", function(){
    timer.style.display = "block"
})

function handleSetTimer() {
     let hrs = document.querySelectorAll("input")[0].value 
     !hrs ? hrs = 0 : hrs

     let mins = document.querySelectorAll("input")[1].value 
     !mins ? mins = 0 : mins

    
    let t = ((hrs * 60) + mins) * 60000

    function timerAlert () {
      alert("Timer is over")
    }
     setTimeout(timerAlert , t)
    
    return false;
}