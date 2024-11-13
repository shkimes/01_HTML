function clsTest() {
  /*
    NodeList = 유사 배열 = 배열과 비슷하지만 배열은 아님
    배열처럼 index, length는 가지고 있으나 배열 전용 기능(메서드)를 제공하지 않음

    index = [] 0번째부터 length -1 번째까지 번호를 매기는 것
            자동으로 번호가 매겨짐
    
    length = [] 안에 값이 얼마나 들어있는지 1부터 갯수를 세는 것
    */

  const divs = document.getElementsByClassName("cls");
  // 유사배열 = HTML COllection
  alert(divs);
  //divs= cls 중에서 0번째로 작성된 div 요소와 배경색 변경
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "green";
}
function clsSpan() {
  const span = document.getElementsByClassName("spn");
  alert(span);
  span[0].style.backgroundColor = "red";
  span[1].style.backgroundColor = "orange";
  span[2].style.backgroundColor = "yellow";
  span[3].style.backgroundColor = "green";
  span[4].style.backgroundColor = "blue";
}
