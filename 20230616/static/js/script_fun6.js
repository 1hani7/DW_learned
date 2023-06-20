let one = "dice_one.png";
let two = "dice_two.png";
let three = "dice_three.png";
let four = "dice_four.png";
let five = "dice_five.png";
let six = "dice_six.png";
// 글씨 짧게 쓰려고 1

let path = "./static/image/"
// 글씨 짧게 쓰려고 2

let turn=false // 조건문 + true/false 테크닉 기억해두기
// 누구의 차례인지 확인용

let com_score = 0, my_score = 0; // 스코어 비교용

let legacy_win = 0, legacy_lose = 0, legacy_draw = 0; // 전적 축적용

var out = ""; // 내용을 구겨넣어서 출력할 때 씀

function com(){ // 컴퓨터 - 랜덤값에 따라 이미지와 스코어가 정해지게
    if(turn){ // 컴퓨터가 두 번 연속 굴리지 못하게
        alert("유저가 주사위를 던질 차례입니다.");
        return;
    }
    var com_img = document.getElementById("cimg");
    var com_roll = Math.floor(Math.random()*6)+1;

    turn=true; // 스타트를 누르면 true로 바뀌어서 finction me 진행시 return을 만나지 않음

    // (png 파일에 숫자값을 주고 random과 연동시키면 좀 더 짧게 날먹 가능)
    if(com_roll==1){com_img.src=path+one; com_score=1;}
    if(com_roll==2){com_img.src=path+two; com_score=2;}
    if(com_roll==3){com_img.src=path+three; com_score=3;}
    if(com_roll==4){com_img.src=path+four; com_score=4;}
    if(com_roll==5){com_img.src=path+five; com_score=5;}
    if(com_roll==6){com_img.src=path+six; com_score=6;}
}

function me(){ // 컴퓨터 - 랜덤값에 따라 이미지와 스코어가 정해지게
    if(!turn){
        // 내 차례가 아니면 turn도 true도 참이 아니기에 return을 타고 튕겨나감
        alert("당신의 턴이 아닙니다. 컴퓨터 주사위를 굴려주세요.");
        return;
    }

    var me_img = document.getElementById("mimg");
    var me_roll = Math.floor(Math.random()*6)+1;

    if(me_roll==1){me_img.src=path+one; my_score=1;}
    if(me_roll==2){me_img.src=path+two; my_score=2;}
    if(me_roll==3){me_img.src=path+three; my_score=3;}
    if(me_roll==4){me_img.src=path+four; my_score=4;}
    if(me_roll==5){me_img.src=path+five; my_score=5;}
    if(me_roll==6){me_img.src=path+six; my_score=6;}

    out += compare(); // 승패 판독기 구겨넣어주기
    out = legacy_win + "승 " +  legacy_lose + " 패 " +  legacy_draw + "무";
    // 출력될 결과 내용 구겨넣어주기

    document.getElementById("legacy").innerHTML=out;
    // 구겨넣은 내용을 출력시키기

    turn=false; // 다시 false로 바꿔서 원점으로
}


function compare(){ // 승패 판독기
    if(my_score > com_score){legacy_win++;}
    if(my_score < com_score){legacy_lose++}
    if(my_score == com_score){legacy_draw++}
}