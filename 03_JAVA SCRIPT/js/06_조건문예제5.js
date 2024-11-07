const Month = document.getElementById("month");
const msg = document.getElementById("seasonMsg");

function check() {
  const month = Month.value;

  if (month <= 5 && 3 <= month) {
    msg.innerText = "봄입니다.";
    msg.className = "spring";
  } else if (month <= 8 && 6 <= month) {
    msg.innerText = "여름입니다.";
    msg.className = "summer";
  } else if (month <= 11 && 9 <= month) {
    msg.innerText = "가을입니다.";
    msg.className = "autumn";
  } else if (month == 1 || month == 2 || month == 12) {
    msg.innerText = "겨울입니다.";
    msg.className = "winter";
  } else {
    msg.innerText = "1에서 12 사이의 숫자를 입력하세요";
    msg.className = ""; //빈칸을 작성해서 기존에 작성된 class를 밀어버림
  }
}
