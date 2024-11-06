//document.get ~ 특정 아이디나 태그나 클래스명을 가져오는 설정은 맨 위 작성 시작
//value는 제외
//개발자들끼리의 약속!

const inputID = document.getElementById("inputId");
const inputPW = document.getElementById("inputPw");

function login() {
  //ID,PW input에 작성된 값 가져오기
  //가져오기 할 때 숫자로 합(+)을 작성하지 않는 한 Number 사용하지 않음

  const id = inputID.value; //소비자가 작성한 아이디 값 최종적으로 가져오기
  const pw = inputPW.value; //소비자가 작성한 비밀번호 값 최종적으로 가져오기

  // 아이디 mem1 비밀번호 pass1
  //&&예시
  //            A && B            ?   A와B 모두 일치할 때 :  A와B 중 하나라도 일치하지 않을때;
  const success = "로그인성공";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다";
  "mem1" == id && "pass1" == pw ? alert(success) : alert(fail);
}

function checkNumber() {
  /*  const pn = Pn.value;
  const tn = Tn.value;
  const msg = Msg.value; */
  const Pn = document.getElementById("phone").value;
  const Tn = document.getElementById("tel").value;
  const Msg = document.getElementById("msg");

  // 삼항 연산자로 입력 여부를 확인 한 후 메세지 표시 또는 메세지 숨기기
  Pn || Tn
    ? alert("번호를 입력하였습니다")((Msg.style.display = "none"))
    : (Msg.style.display = "block");
}
