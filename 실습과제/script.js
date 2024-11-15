const id = document.getElementById("user-id");
const pw = document.getElementById("user-pw");
const email = document.getElementById("user-email");

function btn() {
  const Id = id.value;
  const Pw = pw.value;
  const Email = email.value;
  const idRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const eRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!idRegExp.test(Id)) {
    alert("아이디는 5-12자의 영문자 및 숫자여야 합니다");
    return false;
  }
  if (!pwRegExp.test(Pw)) {
    alert("영문자 대/소문자, 특수문자, 숫자 포함 8-20자이어야 합니다");
    return false;
  }
  if (!eRegExp.test(Email)) {
    alert("이메일은 @를 사용하여 영문자와 숫자로 적어주세요");
    return false;
  }
  window.location.href = "성공.html";
  alert("회원가입이 완료되었습니다");
}
function btn() {
  const id1 = document.getElementsByTagName("id1").checked;
  const id2 = document.getElementsByTagName("id2").checked;
  const id3 = document.getElementsByTagName("id3").checked;
  if (id1 && id2 && id3) {
    window.location.href = "회원가입.html";
  } else {
    alert("모든 필수약관에 동의해야 합니다");
  }
}
