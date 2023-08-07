let game=0;
let path="./static/image/"


function start(){ // start 기계가 setInterval을 실행하는 기능을 갖게 됨
    result.innerHTML="";
    game = setInterval(change_image, 50);
}

let trans=0;

// 이미지 자동전환
function change_image(){
    var scissor = "scissors.png";
    var rock = "rock.png";
    var paper = "paper.png";
    var screen = document.getElementById("screen");

    if(trans==0){ // 번호마다 이미지 대응, 번호가 바뀔때마다 
        screen.src=path+scissor;
        trans=1;
    }else if(trans==1) {
        screen.src=path+rock;
        trans=2;
    }else if(trans==2){
        screen.src=path+paper;
        trans=0;
    }
}



function use(choice){ // 유저의 선택
    clearInterval( game );
    var ctemp = Math.floor(Math.random()*3);
    // 이미지 돌리는 것과는 별개로 컴퓨터가 내는 건 예측이 불가능해야 하므로
    var r = document.getElementById("result")

    // 생략된 변수 생성 코드들, 주석 처리함
    // var scissor = "scissors.png"
    // var rock = "rock.png"
    // var paper = "paper.png"
    // var screen = document.getElementById("screen")

    // 생략된 코드들, 주석 처리함
    // if(ctemp==0){ // 컴퓨터가 낸 것에 맞춰서 이미지 보여주는
    //     screen.src=path+scissor;
    // }else if(ctemp==1){
    //     screen.src=path+rock;
    // }else if(ctemp==2){
    //     screen.src=path+paper;
    // }

    if(choice==ctemp){
        trans=ctemp; // trans 값을 ctemp에 저장한 다음
        change_image(); // change_image()를 돌리면 ctemp 값으로도 돌릴 수 있음
                        // 그러면 알맞은 이미지가 알아서 맞춰짐
        r.innerHTML="DRAW";
    }else if(((choice==0)&&(ctemp==2)) || ((choice==1)&&(ctemp==0)) || ((choice==2)&&(ctemp==1))){
             // 승리하는 경우의 수들
        trans=ctemp;
        change_image();
        r.innerHTML="WIN";
    }else{ // 그 나머지는 필연적으로 패배의 수들
        trans=ctemp;
        change_image();
        r.innerHTML="LOSE";
    }
        
}