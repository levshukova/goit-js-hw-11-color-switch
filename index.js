const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]')
}

refs.btnStart.addEventListener('click',onStartClick)
refs.btnStop.addEventListener('click', onStopClick)

let interval = null;
let intervalStatus = false;

function onStartClick() { 
  intervalStatus = true;
  interval = setInterval(setBgColor, 1000);
  setBgColor();
  btnStartStatus();
}

function onStopClick() {
  intervalStatus = false;
  clearInterval(interval);
  btnStartStatus();
}
function setBgColor (){
  document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function btnStartStatus() {
  refs.btnStart.disabled = intervalStatus ? true : false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};