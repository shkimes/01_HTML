const age = document.getElementById("inputAge");

function check3() {
  const Age = age.value;
  if (0 <= Age && Age < 14) {
    alert("어린이입니다.");
  } else if (120 >= Age && Age >= 19) {
    alert("성인입니다");
  } else if (14 <= Age && Age <= 18) {
    alert("청소년입니다");
  } else {
    alert("잘못 입력하셨습니다");
  }
}
