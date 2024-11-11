/*
let 변화가 가능한 값이기 때문에 변수명에 변수값을 넣지 않아도 가능하지만
const의 경우 상수라 값이 변하면 안되기 때문에 초기에
초기에 상수명과 상수명에 들어갈 상수값을 항시 같이 작성

innerText와 마찬가지로 배경색상 또한 색상 지정이 되긴 하지만
switch문이 while문으로 이동하는 속도가 더 빠르게 진행되기 때문에
사람의 눈에 보이기 전에 색상 초기화
*/

function check() {
  let choice;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");
  while (choice !== null) {
    choice = prompt("숫자와 종료만 입력이 가능합니다");

    switch (choice) {
      case "3":
      case "4":
      case "5":
        bd.style.backgroundColor = "lightpink";
        alert("봄입니다");
        break;
      case "6":
      case "7":
      case "8":
        alert("여름입니다");
        bd.style.backgroundColor = "lightyellow";
        break;
      case "9":
      case "10":
      case "11":
        alert("가을입니다");
        bd.style.backgroundColor = "sandybrown";
        break;
      case "12":
      case "1":
      case "2":
        alert("겨울입니다");
        bd.style.backgroundColor = "lightblue";
        break;
      case "종료":
        alert("종료되었습니다");
        return;
      default:
        alert("잘못된 입력입니다. 다시 입력해주십시오");
        break;
    }
  }
}
