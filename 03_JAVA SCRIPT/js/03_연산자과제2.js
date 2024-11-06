const Id = document.getElementById("inputId");
const Pw = document.getElementById("inputPw");
const Mp = document.getElementById("inputMp");
const Tp = document.getElementById("inputTp");

function check() {
  const id = Id.value;
  const pw = Pw.value;
  const mp = Mp.value;
  const tp = Tp.value;
  const suc = "로그인 성공";
  const fail = "로그인 실패";
  const Msg = document.getElementById("msg");

  1 == id && 2 == pw ? alert(suc) : alert(fail);

  mp || tp
    ? alert("번호를 입력하였습니다")((Msg.style.display = "none"))
    : (Msg.style.display = "block");
}
