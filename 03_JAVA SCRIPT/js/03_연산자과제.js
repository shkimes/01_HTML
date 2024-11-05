function calc() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const result = document.getElementById("res");

  const value1 = n1.value1;
  const value2 = n2.value2;
  result.innerText = Number(n1.value) + Number(n2.value);
  result.innerText = Number(n1.value) * Number(n2.value);
  result.innerText = Number(n1.value) - Number(n2.value);
  result.innerText =
    n1.value1 > n2.value2
      ? "오른쪽이 더 큽니다"
      : "왼쪽이 오른쪽보다 크거나 같습니다.";

  const add = n1 + n2;
  const mul = n1 * n2;
  const sub = n1 - n2;
  const comp =
    n1 > n2 ? "오른쪽이 더 큽니다" : "왼쪽이 오른쪽보다 크거나 같습니다.";

  result.innerText = add + "\n" + mul + "\n" + sub + "\n" + comp;
  ("\n");
}
//벨류값이 떨어지는이유
/*
연산했을때 
[object HTMLInputElement][object HTMLInputElement]
NaN
NaN 가 뜨는 이유
*/
