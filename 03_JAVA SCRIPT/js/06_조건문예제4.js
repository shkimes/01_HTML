const Score = document.getElementById("inputScore");
//input이 아닌 p나 span이나 h1같은 태그들은 value값이 없음!
//메세지가 출력되는 공간에는 value 가 없기 때문에 작성하지 않음
const msg = document.getElementById("msg");

function check() {
  const score = Score.value;
  msg.innerText = "성적 : ";
  if (score >= 90) {
    // =앞에 붙은 +는 if수식 바깥에 있는 msg.innerText = "성적 : "; 뒤에 붙는 "+" 인 것이다
    msg.innerText += "A"; //성적 : 이라는 글자에 A라는 글자를 이어붙여 출력ㄴ
    msg.className = "A";
  } else if (score >= 80) {
    msg.innerText += "B";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText += "C";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText += "D";
    msg.className = "D";
  } else if (score >= 0) {
    msg.innerText += "F";
    msg.className = "F";
  } else {
    msg.innerText = "잘못된 입력입니다";
  }
}
