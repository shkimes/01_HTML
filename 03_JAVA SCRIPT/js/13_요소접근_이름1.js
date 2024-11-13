function btn동작멈춤() {
  // 보통 radio 나 checkbox는 두 가지 아싱의 input을 작성하고 취미나 마케팅 수신동의, 결혼여부 처럼 각 input을 묶어주는 역할을 하는 것이 name
  // name은 최소 2가지 이상을 가져와서 사용한다.

  // name의 속성값이 "취미"인 요소를 모두 얻어와 hobbys에 저장
  // name = 취미 라는 것을 전부 다 가지고 옴
  const hobbys = document.getElementsByName("취미");
  alert("1번 hobbys만 작성 : " + hobbys); // object nodeList = 유샤한 배열입니다
  alert("2번 hobbys[0]만 작성 : " + hobbys[0]); // object HTMLInputElement html input
  alert("3번 hobbys[0].value 작성 : " + hobbys[0].value); // 유사배열에 0번째에 있는

  for (let i = 0; i < hobbys.length; i++) {
    // hobbys 취미들은 현재 게임과 음악밖에 없으므로 index = 0, 1만 존재. length는 2.
    console.log(hobbys[i].value);
    /* == 
        console.log(hobbys[0].value);
        console.log(hobbys[1].value);  => 2번 적힐거임
       */

    /*
        checkbox, radio 전용 속성 (.checked)

        input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
        input요소.checked = true -> 해당 요소가 체크가 되어 있는 것
        input요소.checked = false -> 해당 요소가 체크가 안되어 있는 것

        */
  }
  console.log("=====================================");
  console.log("input 게임 요소 checked로 체크확인하기");
  console.log(hobbys[0].checked);
  console.log("input 음악 요소 checked로 체크확인하기");
  console.log(hobbys[1].checked);
}

function btn() {
  const hobby = document.getElementsByName("취미");

  let str = ""; // 체크된 값 누적
  let count = 0; // 체크된 수 총 계산 카운트

  for (let i = 0; i < hobby.length; i++) {
    //for문으로 i를 순회할 때 i값이 true인 경우만 count추가
    if (hobby[i].checked) {
      str += hobby[i].value + " "; //글자 이어붙이기
      count++; //true일 때 숫자가 더해짐
    }

    // #result 요소에 내용으로 결과 출력
    document.getElementById(
      "result"
    ).innerHTML = `${str} <br> 선택된 취미 개수 : ${count}`;
    //innerText = 태그나 html에서 작성하는 코딩이 작동을 하지 않음
    //innerHTML = 태그 및 html에서 작성하는 코딩이 작동됨

    console.log(hobby[i].checked);
    console.log(hobby[i].value);
  }
}
