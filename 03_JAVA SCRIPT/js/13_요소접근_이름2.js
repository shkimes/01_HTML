function check(){
    const
    let count = 0; //체크된 수 카운트

    // for문을 이용해서 체크 여부 검사하고 체크된 경우
    // 누적된 체크값 확인 및 카운트 증가
    for (let i = 0; i < hobby.length; i++){
        //만약에 체크된 값이 존재한다면
        if(hobby[i].checked){
            str += hobby[i].value + " ";
            count++;
        }
    }
    //만약에 선택된 취미가 없다면 선택한 취미가 없습니다
    const inText = `${str}<br>선택된 취미 개수 : ${count}`;
    if(count > 0){
    }
}