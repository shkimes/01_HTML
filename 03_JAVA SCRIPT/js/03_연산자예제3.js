function 정보확인하기() {
  //const = new 새로운 이름 작성하기 = "이름이 들어갈 공간";
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const number = document.getElementById("user-number").value;

  //입력된 정보 밑에 작성한 글자 표기하기
  document.getElementById("info-name").innerText = name;
  document.getElementById("info-email").innerText = email;
  document.getElementById("info-number").innerText = number;
  /*=위와같다
document.getElementById("info-name").innerText=name;
document.getElementById("info-email").innerText=email;
document.getElementById("info-number").innerText=number;
*/

  alert("입력된 정보는" + name + "," + email + "," + number + "입니다");
  /*=위와 같다
    alert("입력된 정보는"+
      document.getElementById("user-name").value +
      document.getElementById("user-email").value +
      document.getElementById("user-number").value +
      "입니다"
    );*/
}
