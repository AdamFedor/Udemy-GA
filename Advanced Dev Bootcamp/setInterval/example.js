function countDownTimer (num) {
  var countdownTimer = setInterval(function() {
    num --;
    console.log("Timer: ", num);
    if (num === 0) {
      clearInterval(countdownTimer);
      console.log("Ring Ring Ring!!!");
    }
  }, 1000);
};

countDownTimer(3);