//1.문서내에 input1 input2 input3 calcResult 요소를 가져오는 const 설정

const number1 = document.getElementById("input1"); //input1
const number2 = document.getElementById("input2"); //input2
const number3 = document.getElementById("input3"); //input3
const result = document.getElementById("calcResult"); //calcResult

//각 number1 = input1
//각 number2 = input2
//각 number3 = input3
//value(값)을 가지고 오기

/*
value1 과 value2, value3 을 기능 바깥에 작성을 하면 안되는 이유
-> plus()기능과 multi()기능이 시작되기 전에 작서되면 안에 있는 모든 값 현재0
*/

const value1 = number1.value; //무조건 0
const value2 = number2.value; //무조건 0
const value3 = number3.value; //무조건 0
//javascript로 설정한 값을 확인하는 방법
/*console.log(확인하고자 하는 변수명)

컴퓨터에서 콘솔에 괄호()내부의 값을 기록 (출력)

변수명이란?
const 변수명 = 들어온 값;
 
 */

console.log("개발자가 코드 확인하는 공간");
console.log("====plus 기능 들어오기 전====");
console.log("값1:" + value1);
console.log("값2:" + value2);
console.log("값3:" + value3);

function plus() {
  //plus()버튼을 누르면 input안에 있는 값을 새로 가져와서 수식을 실행
  const value1 = number1.value;
  const value2 = number2.value;
  const value3 = number3.value;
  console.log("====plus 기능 들어오고 난 후====");
  console.log("값1:" + value1);
  console.log("값2:" + value2);
  console.log("값3:" + value3);
  calcResult.innerText = Number(value1) + Number(value2) + Number(value3);
}

function multi() {
  const value1 = number1.value;
  const value2 = number2.value;
  const value3 = number3.value;
  console.log("====multi 기능 들어오고 난 후====");
  console.log("값1:" * value1);
  console.log("값2:" * value2);
  console.log("값3:" * value3);
  calcsResult.innerText = Number(value1) * Number(value2) * Number(value3);
}
