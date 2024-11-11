function gender() {
  let gd = prompt("성별을 입력해주세요");

  switch (
    gd //어떤조건이 도착했을 때
  ) {
    case "남자": //조건에 부합하는게 남성일 때
      alert("남자입니다");
      //break;작성할것. 작성하지 않으면 모든 케이스를 순차대로 알림이 옴
      //break 또는 return 을 case사이에 넣지 않으면 case들이 순차대로 다 나옴
      break;
    case "여자":
      alert("여자입니다");
      break;
    default:
      alert("올바른 성별을 입력해주세요. 남자/여자");
  }
}

/*
function gender(){
    let gd = prompt("성별을 입력하시오");
    while (gd !== null) {
  if (gd == "남자") {
    alert("남자입니다");
  } else if (gd == "여자") {
    alert("여자입니다");
  } else {
    alert("올바른 성별을 입력해주세요 남자/여자");
  }
}
}
*/
//
// \(역슬래시는 엔터역할이랑 똑같다.)
function order() {
  let menu;
  while (menu !== null) {
    menu = prompt(
      "메뉴를 선택해주세요. \n 삼겹살, 부대찌개, 김치찌개\n 종료 작성하면 메뉴선택창이 꺼집니다"
    );
    switch (menu) {
      case "삼겹살":
        alert("삼겹살\n12,000원");
        break; // 여기서 break는 switch 까지만 나감
      case "부대찌개":
        alert("부대찌개 \n 10,000원");
        break;
      case "김치찌개":
        alert("김치찌개 \n 9,000원");
        break;
      case "종료":
        alert("주문이 종료되었습니다");
        return; // 여기서 return while까지 돌려보냄
    }
  }
}
