let num = new Array();
let ran = new Array(); // 중복없는 랜덤값을 담아줄 Array

function init(){
    // 중복없이 랜덤값 넣기
    num.push(Math.floor(Math.random()*10)+1);
    for (var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10+1);
        if(num.indexOf(temp) == -1){ // num 배열 안에 들어간 temp의 값이 없다 == 중복되지 않는다
                                     // indexOf 갖고 놀기
            num.push(temp);
        }else{ // 늘어났던 i 를 다시 줄이면 해당 기회에 머물게 됨
            i--;
        }
    }
    ran.push(Math.floor(Math.random()*8));
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if(ran.indexOf(temp) == -1){
            ran.push(temp);
        }else{
            i--;
        }
    }
}


function start(){ // 버튼을 누르면 실행되는 함수
    init();
    let pic = document.getElementsByClassName("picture");
    for(var i=0; i<pic.length; i++){
        // pic[i].addEventListener("click", same_search); // pic[i] => pic의 i번 인덱스
        pic[ran[i]].innerHTML=num[i%4]; 
        // 8개의 칸에 4개의 숫자를 두 번 표현하기 위한 i%4 (계산식이 들어간 index 표현) *중요
        // pic[ran[i]] => 기존의 pic[i]는 i의 증가에 따라 칸 수에 순차적으로 값을 넣었음
                        //그걸 이번엔 중복되지않는 0~7 사이의 랜덤값으로 바꿔준 것
                        //0~7인 이유는, 칸(index)를 셀 때 0부터 세어줘야 하기 때문
                        //ran[i]는 i의 상승에 따라 본인이 가진 랜덤숫자 배열들을 순차적으로 표시해줌
        
    }
    ran=[];
    num=[];
}

