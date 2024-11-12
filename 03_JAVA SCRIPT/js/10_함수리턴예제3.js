function 주문(asd) {
  const res = document.getElementById("result");
  const price = 가격(asd);

  if (price > 0) {
    res.innerText = asd + "주문이 완료되었습니다. 가격은" + price + "원입니다";
  } else {
    res.innerText = "재료소진";
  }

  /*while(price !== null){
        switch(asd){
            case "비빔밥" :
            res.innerText = price + "주문 되었습니다"
            break;
        
        }
    }
    */
}
function 가격(asd) {
  if (asd == "비빔밥") {
    return 8000;
  } else if (asd == "김치찌개") {
    return 7000;
  } else if (asd == "된장찌개") {
    return 7000;
  } else {
    return 0;
  }
}
