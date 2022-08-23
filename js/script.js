//fullscreen
let myDocument = document.documentElement;
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    if(btn.textContent == "Go Fullscreen"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
        btn.textContent = "Exit Fullscreen";
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        btn.textContent = "Go Fullscreen";
    }
});

//cursor
const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })


// stopwatch
// global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0;
let interval = null;

// event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);
//updates timer, ticks up each second
function timer (){
    seconds++;

    //format our timer
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    //add 0 in front of the timer values IF they are less than 10
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}` ;

}

// if it is already running, we don't need to start again
function start(){
    if (interval){
        return
    }

    //when timer is running, the timer function will be called every 1 second (1000ms)
    interval = setInterval(timer, 1000);
}

function stop(){
    // stops the timer from actually counting
    clearInterval(interval);
    // sets the variable back to null
    interval = null;
}

function reset(){
    // stops the counting
    stop();
    seconds = 0;
    time_el.innerText= '00:00:00';

}

//switch
const audio = new Audio();
audio.src = "./wav/click.wav";
