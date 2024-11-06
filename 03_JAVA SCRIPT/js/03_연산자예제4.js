//초기 값 설정하는 count 세팅
let count = 0; //const 값 변경이 안되기 때문에 사용x
const bd = document.getElementById("bd");

function 증가() {
  count += 1; //1씩 증가하게 만들기
  document.getElementById("count").innerText = count;
  bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}
function 감소() {
  count -= 1;
  const cnt = document.getElementById("count");
  cnt.innerText = count;
  cnt.style.backgroundColor = count % 2 == 0 ? "orange" : "black";
  //count % 2 == 0 이란?
  //소숫점이 안나오게 하는 수식
}
function 초기화() {
  document.getElementById("count").innerText = count = 0;
}

//bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";가 중복이 된다면 위에다가 올려놓고 싶은데
//우째서 {}에 들어가지 않으면 안먹히는 것인가
//cnt는 구역이 따로있는걸까
