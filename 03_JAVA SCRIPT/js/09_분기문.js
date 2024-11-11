/* break확인 */
let result = 0;
function check1() {
  for (let a = 1; a <= 10; a++) {
    result += a;

    if (a == 5) {
      break; //a라는 숫자가 5가 되면 행동을 멈춤
      //break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가 특정숫자나  값이 보이면 for문을 모두 중단
      //for문에서 중단하기 전의 갑을 저장한 상태로 탈출
    }
  }
  alert(result);
}

function check2() {
  for (let a = 1; a <= 20; a++) {
    result += a;
    if (a == 15) {
      break;
    }
  }
  alert(result);
}
function check3() {
  for (let a = 1; a <= 20; a++) {
    result += a;
    console.log(result);
    if (a % 3 == 0)
      //3의 배수일 때{
      break;
  }
}
