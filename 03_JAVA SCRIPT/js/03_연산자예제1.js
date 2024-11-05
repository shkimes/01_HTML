//1.문서내에 input1 input2 input3 calcResult 요소를 가져오는 const 설정

const number1 = document.getElementById("input1"); //input1
const number2 = document.getElementById("input2"); //input2
const number3 = document.getElementById("input3"); //input3
const result = document.getElementById("result"); //calcResult

//각 number1 = input1
//각 number2 = input2
//각 number3 = input3
//value(값)을 가지고 오기

const value1 = number1.value;
const value2 = number2.value;
const value3 = number3.value;

function 곱하기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  result.innerText = number(value1) * number(value2) * number(value3);
}
function 더하기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  result.innerText = number(value1) + number(value2) + number(value3);
}
