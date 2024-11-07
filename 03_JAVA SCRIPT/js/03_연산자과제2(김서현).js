const Id = document.getElementById("inputId");
const Pw = document.getElementById("inputPw");
const ID = document.getElementById("inputID");
const PW = document.getElementById("inputPW");
const Mp = document.getElementById("inputMp");
const Tp = document.getElementById("inputTp");
const Msg = document.getElementById("msg");

function check() {
  const qwe = 10;
  // const에서 새로 만들어준 이름을 아래에서 사용하지 않았기 때문에 글자가 흐리게 보이는 것
  // 글자를 선명하게 보기 위해서는 qwe라는 새로 만들어진 변수명을 아래에서 사용해야함

  const mp = Mp.value;
  const tp = Tp.value;

  mp || tp
    ? alert("번호를 입력하였습니다")((Msg.style.display = "none"))
    : (Msg.style.display = "block");
}

function login() {
  const 아이디 = ID.value;
  const 패스워드 = PW.value;
  const suc = "로그인 성공";
  const fail = "로그인 실패";
  1 == 아이디 && 2 == 패스워드 ? alert(suc) : alert(fail);
}
