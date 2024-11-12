//function 은 순서 상관이 없지만 const는 사용하기 전에 위에 적혀있어야 하고 이것을 "객체지향"이라고 한다
function 차가격(model) {
  if (model === "소나타") {
    return 1000;
  } else if (model === "아반떼") {
    return 1200;
  } else if (model === "제네시스") {
    return 1500;
  }
}
function 차구매(model) {
  const price = 차가격(model);
  const res = document.getElementById("result");
  res.innerText = model + " 구매가 완료되었습니다. 가격은 " + price + "입니다";
}
