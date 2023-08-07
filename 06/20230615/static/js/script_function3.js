// 시간을 다루는 기능
// setTimeout()  => 지정한 시간 '이후'에 동작시킴
// setTimeout(실행할 함수, 시간(ms))

// setInterval() => 지정한 시간을 주기로 '계속' 동작
// setInterval(실행할 함수, 시간(ms))

// ms(밀리세컨드) = 1000이 1초


let game=0;

function start(){
    document.getElementById("출력").innerHTML="";
    game = setInterval(change_image, 100);
    // game 변수에 setInterval의 interval id가 저장됨
    // interval id는 setInterval 함수의 고유 이름인데,
    // 이건 setInterval을 관리하거나 중지시킬 때 쓸 거임
}

let 전환 = 1; 

function change_image(){
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    if(전환==1){ // 1일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
        전환=0;

    }else{ // 0일때는 앞면
        이미지태그.src="./static/image/"+앞면;
        전환=1;
    }
}

function 결과(선택){
    clearInterval( game ); // game이란 변수를 clearInterval로 멈춰라
    
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    // 클릭후 표시되는 이미지
    if(전환==1){ // 1일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
    }else{ // 0일때는 앞면
        이미지태그.src="./static/image/"+앞면;
    }

    if(선택 == 전환){
        document.getElementById("출력").innerHTML="정답!";
    }
    
}