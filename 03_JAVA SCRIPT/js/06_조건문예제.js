const age = document.getElementById("age");
const msg = document.getElementById("ageMsg");
function checkAge() {
  const Age = age.value;
  /* = 아래와 같다. (위는 삼항연산자)
  18 <= Age
    ? (msg.innerText = "관람 가능합니다")
    : (msg.innerText = "18세 이상만 관람이 가능합니다");

  18 <= Age ? (msg.style.color = "green") : (msg.style.color = "red");
  

= 위와 같다
  if (18 <= Age) {
    msg.innerText = "관람이 가능합니다";
    msg.style.color = "green";
  } else {
    msg.innerText = "18세 이상만 관람이 가능합니다";
    msg.style.color = "red";
  }
    
  */
  if (18 <= Age) {
    msg.innerText = "관람이 가능합니다";
    msg.className = "success";
  } else {
    msg.innerText = "18세 이상만 관람이 가능합니다";
    msg.class = "fail";
  }
  // 만약 파일명.css 나 style태그 안에 <태그 ex.fail>로 작성된 스타일이 없다면 스타일은 적용 안됨
  /*
★ 변수명.className =스타일 4순위
                    css스타일 태그안에 작성된 css클래스 속성명 불러오기 실행
                    불러온 스타일을 추가

★  변수명.style.속성 = 스타일 2순위
                       변수명.className 보다 스타일 적용 우선순위가 높기 때문에 사용할 때
                       긴급한 상황이 아니면 사용 자제

조건문에서 변수명 className으로 시작했다면 다른 {}안에도 className으로 맞춰주는것이 중요하다


ex.
  msg.class = "fail"; 4순위

  msg.style.color = "red"; 2순위
  msg.style.backgroundColor = "orange"; 2순위

  */
}
