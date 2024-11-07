const score = document.getElementById("score");
const msg = document.getElementById("scoreMsg");

function checkScore() {
  const Score = score.value;

  if (60 <= Score) {
    msg.innerText = "합격입니다";
    msg.className = "success";
  } else {
    msg.innerText = "불합격입니다";
    msg.className = "fail";
  }
}
