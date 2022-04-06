/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here

let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.getElementById("stopwatch");
let int = null;

// function start() {
document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});
// }

// function stop() {
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(int);
});
// }

// function reset() {
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [seconds, minutes, hours] = [0, 0, 0];
  timerRef.innerHTML = "00:00:00";
});
// }

function displayTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timerRef.innerHTML = `${h}:${m}:${s}`;
}
