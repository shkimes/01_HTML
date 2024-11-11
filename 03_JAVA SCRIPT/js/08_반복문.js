function check() {
  //onclick = function
  /*
    for([1]초기식; [2]조건식; [4]증감식;){
        [3]조건식이 true인 경우 반복 수행할 코드;
    }
    */
  //for ()안에서 공간을 구분짓는 기준은 ; 구분짓는다
  /*
    for(최초1회만 어떤 값인지 보여지는 공간);
                        {}안에 들어가서 작성되어있는 코드를 실행할 수 있는 권한의 조건;
                                                                            더하거나 뺄값
                                        조건이 true일 때 실행할 공간

                                                                    
*/
  // for문 안에는 const(상수) 대신 let(변수)를 사용함

  // 문자열 형식으로 모든 숫자 출력해서 숫자들이 모두 나왔는 지 확인해보기

  let 결과 = ""; //빈 문자 제공
  //숫자를 1부터5까지 출력
  /*
  ★숫자++ : 숫자 = 숫자+1;
  */
  for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
    //결과라는 변수명에 1부터5까지 누적해서 이어붙이기를 원함
    결과 += 숫자; // 결과=결과+숫자;
    console.log("결과 :" + 결과);
  }

  console.log("==========");
  console.log("최종으로 출력되는 결과 값은");
  console.log(결과 + "입니다.");
}

/*1부터 10까지 연속 출력하는 숫자들 표기 */
function check2() {
  for (let num = 1; num <= 10; num++) {
    // result += num;
    console.log("결과:" + num);
  }
}
function check3() {
  for (let num = 1; num <= 20; num++) {
    // result += num;
    console.log("결과:" + num);
  }
}
function check4() {
  for (let num = 5; num <= 15; num++) {
    // result += num;
    console.log("결과:" + num);
    alert("결과:" + num);
  }
}
let result2 = "";
function check5() {
  for (let num = 5; num <= 15; num++) {
    result2 += num;
    console.log("결과:" + result2);
  }
  //b는 for안에서 작성한 변수명이기 때문에 {}를 나오고 나서는 사용 x
  alert("결과:" + result2);
}

/*
while 문 기본 구조 
while (조건) {
//반복할 코드}
*/

function while1() {
  let num = 1; // let은 변할 수 있는 변수명 작성, const 변할 수 없는 상수명을 작성

  while (num <= 5) {
    //조건이 true일 때 실행할 구문 작성
    alert(num);
    //계속 num값이 1이기 때문에 무한 반복
    num++; //num = num +1;
    //num숫자를 1씩 증가시키기
  }
}

function while2() {
  let num = 0;
  while (num <= 10) {
    num++;
    console.log(num);
  }
}

function while3() {
  let num = 1;
  while (num <= 10) {
    console.log(num);
    num++;

    if (num == 5) {
      break;
    }
  }
}

//while4 라는 지역변수
//while4 라는 지역변수 안에서만 사용하는 변수명을 설정할 경우에는 {}안에 변수명을 작성

function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}

function while5() {
  let num = 5;
  while (num <= 20) {
    console.log(num);
    num++;
    if ((num = 15)) {
      break;
    }
  }
}
