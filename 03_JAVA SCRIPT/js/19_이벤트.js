const div = document.getElementById("divBtn");

//이벤트 모델 작성방법
//요소.addEventListener ("이벤트종류", 이벤트 핸들러(함수));
//                  클릭했을때,어떤기능()을 발휘할것이냐.
div.addEventListener("click", function () {
  alert("클릭되었습니다");
});
