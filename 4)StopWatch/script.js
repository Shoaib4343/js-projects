const start_btn = document.querySelector("#start-btn");
const reset_btn = document.querySelector("#reset-btn");

let sec = 0;
let min = 0;
let hr = 0;

// variables
let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;


// variables for set interval and time status
let timerInterval = null;
let timerStatus = 'stopped';


const stopWatch = () => {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;

        if (min === 60) {
            min = 0;
            hr++;
        }
    }

    if (sec < 10) {
        leadingSec = '0' + sec.toString();
    } else {
        leadingSec = sec
    }
    if (min < 10) {
        leadingMin = '0' + min.toString();
    } else {
        leadingMin = min
    }
    if (hr < 10) {
        leadingHr = '0' + hr.toString();
    } else {
        leadingHr = hr
    }

    document.getElementById("timer").innerHTML = leadingHr + ':' + leadingMin + ':' + leadingSec;

}




start_btn.addEventListener('click', () => {

    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("start-btn").innerHTML = `<i class='fa-solid fa-pause' id='pause'></i>`
        timerStatus = 'started';
    }else{
        window.clearInterval(timerInterval)
        document.getElementById("start-btn").innerHTML = `<i class='fa-solid fa-play' id='play'></i>`
        timerStatus = 'stopped';
    }
})



reset_btn.addEventListener('click',()=>{
    window.clearInterval(timerInterval);

    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("timer").innerHTML = "00:00:00"

})