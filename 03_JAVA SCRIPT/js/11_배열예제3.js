function randomCoffee() {
  const res = document.getElementById("result");

  const peo = ["철수", "영희", "지수", "민희", "미나", "진호", "수민", "화청"];

  const random = Math.floor(Math.random() * peo.length);
  res.innerText = peo[random];
}
