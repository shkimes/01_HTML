const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const rst = document.getElementById("result");

function sum() {
  const v1 = Number(n1.value);
  const v2 = Number(n2.value);

  const total = v1 + v2;
  rst.innerText = "합:" + total;
}

function mul() {
  const v1 = Number(n1.value);
  const v2 = Number(n2.value);

  const total = v1 * v2;
  rst.innerText = "곱:" + total;
}
function evenOdd() {
  const v1 = Number(n1.value);
  const v2 = Number(n2.value);

  const sumResult = v1 + v2;
  const isEven = sumResult % 2 == 0 ? "짝" : "홀";
  rst.innerText = "합:" + sumResult + "은" + isEven + "입니다";
}
