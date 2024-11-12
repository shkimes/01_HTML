//let 변수명; 작성하기에는 코드가 너무 복잡하기때문에 사용하고자 하는 변수명만 작성.
//어떤 값이 들어올 지 모르기 때문에 let 변수명만 작성
function 선택(asd) {
  //괄호안에 있는 값이 위아래로 똑같아야 한다
  let fruitPrice = 0;
  const price = document.getElementById("price");
  switch (
    asd //괄호안에 있는 값이 위아래로 똑같아야 한다
  ) {
    case "apple":
      fruitPrice = "사과 2,000원";
      console.log("됨");
      break;
    case "grape":
      fruitPrice = "포도 5,000원";
      break;
    case "kiwi":
      fruitPrice = "키위 3,000원";
      break;
    //버튼으로 클릭할 경우에는 잘못 클릭할 이유가 없기 때문에 default를 작성하지 않아도 된다
  }
  price.innerText = "금액 : " + fruitPrice;
}
