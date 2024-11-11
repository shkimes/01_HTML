function selectMenu() {
  let choice;
  const res = document.getElementById("result");

  while (choice !== null) {
    choice = prompt("메뉴 번호를 입력해주세요. \n1, 2, 3, 종료만 입력 가능");
    /*
alert 은 다음행동을 하기전에 정지하는 특성이 있으나
innerText를 볼려면 시간을 늘려야되지만 의미없음
*/
    switch (choice) {
      case "1": //input은 기본적으로 숫자가 아니라 글자값으로 입력받기 때문에 숫자를 ""로 감싸줘야함
        res.innerText = "아메리카노를 선택하셨습니다";
        console.log("아메리카노");
        break;
      case "2":
        res.innerText = "카페라떼를 선택하셨습니다";
        console.log("카페라떼");
        break;
      case "3":
        res.innerText = "푸라푸치노를 선택하셨습니다";
        console.log("푸라푸치노");
        break;
      case "종료":
        res.innerText = "주문을 종료합니다";
        return;
      default:
        res.innerText = "잘못된 입력입니다. 다시 선택해주세요";
        console.log("잘못선택함");
        break;
    }
  }
}
