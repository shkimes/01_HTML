function selectMenu() {
  const menuResult = document.getElementById("menuResult"); //결과출력 span
  // 돈까스 = 0, 깐풍기 = 1 , 햄버거 = 2 , 멸치국수 = 3 , 마파두부 = 4 , 샌드위치 = 5 , 볶음밥 = 6 , 순대국밥 = 7
  const menu = [
    "돈까스",
    "깐풍기",
    "햄버거",
    "멸치국수",
    "마파두부",
    "샌드위치",
    "볶음밥",
    "순대국밥",
  ]; //초기화된 배열 설정
  // 랜덤으로 점심메뉴를 뽑기 위해 메뉴들 배열 index 범위 내에서 랜덤의 수를 생성
  // 랜덤의 수 = 난수 = 수가 모호하다
  //亂(어지러울 난)數(셀 수) = 정의된 범위 내에서 무작위로 추출된 숫자값

  /*
  Math.ceil
  : 주어진 숫자의 소수점을 올림해서 가장 가까운 정수를 변환하는 함수
    ex. Math.ceil(3.2) -> 4이 반환
  Math.round
  : 주어진 숫자의 소수점 첫째 자리에서 가장 가까운 정수로 반올림해서 변환하는 함수
    ex. Math.round(6.5) -> 7이 반환, Math.round(6.4) -> 6이 반환,
  Math.floor
  : 주어진 숫자의 소수점을 내림해서 가장 가까운 정수를 반환하는 함수
    ex. Math.floor(3.7) -> 3이 반환
  Math.random()
  : 0이상 1미만의 랜덤한 소수(실수)반환 (= 0.0000000001  ~  0.99999999999 사이의 실수 반환 )

  menu.length
  : 메뉴가 5개면 5라는 숫자를 보여줌

  */
  //              소수모두버리기((랜덤소수*정수))
  //                        0.0001~0.9999사이의 실수 * menu갯수->정수.소수
  const 랜덤숫자 = Math.floor(Math.random() * menu.length);
  console.log("menu[" + 랜덤숫자 + "]=" + menu[랜덤숫자]);
  menuResult.innerText = menu[랜덤숫자];
  //                     menu[랜덤의index숫자가 들어옴];
}
