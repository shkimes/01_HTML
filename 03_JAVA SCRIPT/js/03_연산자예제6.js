const Pw = document.getElementById("inputPw");
const PwCon = document.getElementById("inputPwConfirm");

function checkPw() {
  const pw = Pw.value;
  const pwc = PwCon.value;
  const suc = "일치합니다";
  const fail = "일치하지 않습니다";
  "pass1234!" == pw && "pass1234!" == pwc ? alert(suc) : alert(fail);
  //pw == pwc ? alert(suc) : alert(fail);
}
/*
모든 언어 통합 규칙

상수명, 변수명으로 true false은 사용할 수 없음
*/
