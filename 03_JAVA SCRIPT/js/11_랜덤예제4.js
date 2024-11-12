function pick() {
  //pick 기능을 실행
  const res = document.getElementById("result"); // html에 있는 id = "result"를 res로 부르면 불러올꼐
  const fruit = [
    // fruit라는 이름(또는 묶음)으로 너희에게 배열을 부여할께
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "블루베리",
    "복숭아",
  ];
  const random = Math.floor(Math.random() * fruit.length);
  // 소숫점을 내림하여 정리하고(무작위로 난수생성)*fruit의 갯수  ==를 random으로 지정할께
  res.innerText = fruit[random];
  // div에 있는 id result 에 텍스트를 출력할께
  console.log("fruit[" + random + "]=" + fruit[random]);
  // f12로 볼수있는 개발자사이트(?)에 기록을 남길게

  //==============================================================
  console.log("총 과일의 갯수 : " + fruit.length);
  console.log("index 5 위치한 과일 : " + fruit[5]);

  const randomFruit = fruit[random];

  res.innerText = "랜덤 : " + randomFruit;

  // floor을 쓰는 이유는 내가 소수를 5까지만 지정했을 때 난수에서 5.5가 나오면 오류가 나서

  // **********TIP**********
  //큰 따옴표나 작은 따옴표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
  // 역따옴표는 문자열과 변수명을 모두 한 번에 작성하는 방법
  res.innerText = "랜덤 : ${randomFruit}";
}
