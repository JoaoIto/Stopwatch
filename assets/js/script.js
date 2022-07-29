window.onload = function () {
  let = seconds = 00;
  let appendSeconds = document.getElementById("seconds");
  let tens = 00;
  let appendTens = document.getElementById("tens");

  let btnStart = document.getElementById("start");
  let btnStop = document.getElementById("stop");
  let btnReset = document.getElementById("reset");

  let interval;

  btnStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  btnStop.onclick = () => {
    clearInterval(interval);
  };
  btnReset.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";

    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  };
  function startTimer(){
    tens++;
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    };
    if(tens > 9){
      appendTens.innerHTML = tens;
    };
    if(tens > 99){
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    };
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    };
  };
};
