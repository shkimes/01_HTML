const Score = document.getElementById("inputScore");
const msg = document.getElementById("msg");

function check() {
  const score = Score.value;
  if (score >= 90) {
    msg.innerText = "A";
    msg.className = "A";
  } else if (score >= 80) {
    msg.innerText = "B";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText = "C";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText = "D";
    msg.className = "D";
  } else if (score >= 0) {
    msg.innerText = "F";
    msg.className = "F";
  } else {
    msg.innerText = "잘못된 입력입니다";
  }
}
