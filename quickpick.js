function quickPick() {
  var numbers = prompt("Enter winning numbers seperated by a space");
  var luckyBall = prompt("Enter lucky ball number");
  var numberArray = numbers.split(" ");
  var match = 0;
  document.getElementById("quickPick").innerHTML = numbers;
  document.getElementById("luckyBall").innerHTML = luckyBall;

  var winningPicks = [];

  var luckyBallwin = Math.floor(Math.random() * 18) + 1;
  for (i = 0; i < 5; i++) {
    winningPicks[i] = Math.floor(Math.random() * 48) + 1;
  }
  winningPicks.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("winningNumbers").innerHTML = winningPicks.join(" ");
  document.getElementById("luckyBallwin").innerHTML = luckyBallwin;

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (numberArray[i] == winningPicks[j]) {
        match++;
      }
    }
  }
  if (match == 5 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$7,000 a WEEK for life";
  }
  if (match == 4 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$5,000";
  }
  if (match == 3 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$150";
  }
  if (match == 2 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$25";
  }
  if (match == 1 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$6";
  }
  if (match == 0 && luckyBall == luckyBallwin) {
    document.getElementById("payout").innerHTML = "$4";
  }
  if (match == 5 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$25,000 a YEAR for life";
  }
  if (match == 4 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$200";
  }
  if (match == 3 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$20";
  }
  if (match == 2 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$3";
  }
  if (match == 1 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$0";
  }
  if (match == 0 && luckyBall != luckyBallwin) {
    document.getElementById("payout").innerHTML = "$0";
  }
}
