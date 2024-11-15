function btn() {
  const id1 = document.getElementsByTagName("id1").checked;
  const id2 = document.getElementsByTagName("id2").checked;
  const id3 = document.getElementsByTagName("id3").checked;
  if (id1 && id2 && id3) {
    window.location.href = "회원가입.html";
  } else {
    alert("모든 필수약관에 동의해야 합니다");
  }
}
