const startStopBtn = document.querySelector(".startStopBtn");
const resetBtn = document.querySelector(".resetBtn");

let sec = 0;
let min = 0;
let hour = 0;

let startSec = 0;
let startMin = 0;
let startHour = 0;

let timerInterval = null;
let timesStatus = "stopped";

function stopWatch() {
    sec++;
    if (sec / 60 === 1) {
        sec = 0;
        min++;

        if (min / 60 === 1) {
            min = 0;
            hour++;
        }
    }

    if (sec < 10) {
        startSec = "0" + sec.toString();
    }
    else {
        startSec = sec;
    }
    if (min < 10) {
        startMin = "0" + min.toString();
    }
    else {
        startMin = min;
    }
    if (hour < 10) {
        startHour = "0" + hour.toString();
    }
    else {
        startHour = hour;
    }

    let displayTimer = document.querySelector("#timer").innerText = startHour + ":" + startMin + ":" + startSec;
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
    if (timesStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector(".startStopBtn").innerHTML = `<span id="pause">Pause</span>`;
        timesStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.querySelector(".startStopBtn").innerHTML = `<span id="play">Play</span>`;
        timesStatus = "stopped";
    }
});

resetBtn.addEventListener("click", function () {
    window.clearInterval(timerInterval);
    sec = 0;
    min = 0;
    hour = 0;
    document.querySelector("#timer").innerText = "00:00:00";
    document.querySelector(".startStopBtn").innerHTML = `<span id="play">Play</span>`;
    timesStatus = "stopped";
});