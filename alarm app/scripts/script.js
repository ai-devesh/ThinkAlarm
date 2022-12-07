let setAlarm = document.getElementById("setAlarm");
let stateOfAlarm = document.getElementById("stateOfAlarm");
let alarm = new Audio('alarm.wav');
let currentTime;
let hr;
let min;
let sec;
let timeS;
if (timeSelector.value == '') {
    setAlarm.disable = true;
    stateOfAlarm.innerHTML = 'Set alarm above';
}
const disableListener = () => {
    alarm.pause();
    stateOfAlarm.innerHTML = `Your alarm is disabled !` ;
}
function eventListener() {
    if(timeSelector.value!='') {
        loading.innerHTML = `<img src="/media/alarmWillRunSoon.gif" alt="" />
        `
        stateOfAlarm.innerHTML = `Your alarm will ring on ${timeSelector.value.slice(11, 19)}`;
    alarm = new Audio('alarm.wav');
    let disableBtn = `<input type="button" class="disperseAlarm" value="Disable Alarm" id="disableAlarm">`;
        setAlarm.disabled = false;
        const myInterval = setInterval(() => {
            currentTime = new Date();
            hr = currentTime.getHours();
            min = currentTime.getMinutes();
            sec = currentTime.getSeconds();
            if (timeSelector.value.replace(/\b0+/g, '').slice(10, 19) == `${hr}:${min}:${sec}`) {
                loading.innerHTML = "";
                alarm && alarm.play();
                stateOfAlarm.innerHTML = disableBtn;
                stateOfAlarm.addEventListener("click", disableListener)
                clearInterval(myInterval);
            } else {
                stateOfAlarm.innerHTML = `Your alarm will ring on ${timeSelector.value.slice(11, 19)}`;
            } 
        }, 1000)
    } else {}
}
setAlarm.addEventListener("click", eventListener);