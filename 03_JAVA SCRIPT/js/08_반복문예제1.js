function check1() {
  let val; // undefined =  값없음 상태
  //처음부터 변수명에 특정값을 담아두지 않고 나중에 값을 담기 위해 변수명만 선언

  while (val !== null) {
    //val이 빈 값이 아닐 때
    /* 
    동일 비교 연산자
    !== -> 값과 자료형이 모두 다른경우 true
    === -> 값과 자료형이 모두 같은경우 true
    */
    val = prompt("입력 후 확인하기"); // 변수에 prompt값 대입
    //prompt 버튼 확인 =  빈 값이 초기에 들어있음
    //            취소 =  null 값이 버튼안에 들어있음
    alert(val + "값을 확인했습니다");
  }
}
function check2() {
  let age; // 들어있는 값(나이)가 없다
  while (age !== null) {
    age = prompt("나이를 입력하세요");
    if (age >= 18) {
      alert("성인입니다");
    } else if (13 <= age && age <= 18) {
      alert("청소년입니다");
    } else {
      alert("어린아이입니다");
    }
  }
}
function check3() {
  let gender;
  gender = prompt("성별을 남자면 M 여자면F로 기입해주세요");
  while (gender !== null) {
    if (gender == "M") {
      alert("남자입니다");
    } else if (gender == "F") {
      alert("여자입니다");
    }
  }
}
