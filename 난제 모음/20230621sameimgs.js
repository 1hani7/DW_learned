// 20230621 저녁 복습
// 코드를 읽고 이해한 내용을 주석으로 정리한 뒤, 옮겨 적어보자.
// 목표1. 주어진 요소와 관련된 사고방식을 하나라도 더 얻어가자
// 목표2. 배열[배열[i]]와 같은 이중배열 인덱스 구조에 익숙해지자



let path="./static/image/";
let image_name=["Chick.jpg","Crocodile.jpg","Dinosaur.jpg","Dolphin.jpg","Rabbit.jpg","Stingray.jpg"];
let image_position=new Array(); // 이미지 출력할 위치 배열
let isStart=false; // start 버튼 클릭 유무
let count=0;  // 클릭횟수
let end_count=0; // 이미지 맞춘 갯수
let isSame=[]; // 같은 이미지로 선택이 된것인가?
let selectImg=new Array(); // 현재 선택한 이미지


window.onload=function(){// html을 다 읽고서 실행될 함수들이다.
    
    var start_bt = document.getElementById('start');
    start_bt.addEventListener("click",game_start);
    var count = document.getElementById("count");
    count.innerText=0;
    /*
    1. 게임 스타트 버튼을 아이디로 가져온 다음 클릭 이벤트를 줬다.
    2. 마우스 클릭 마다 늘어나게 될 count를 표시해주었다.
    */
}

function image_init(){
    image_position.push(Math.floor(Math.random()*12));
    for(var i=1; i<12; i++){
        var tmp=Math.floor(Math.random()*12);
        if( image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    /*
    이미지가 출력될 위치 12곳의 위치를 랜덤하게 뱉어서 image_position에 저장시킴
    */


    var img = document.getElementsByClassName("picture");
    for( var i=0; i<img.length; i++){
        img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";
                                                        /* 주의 포인트
                                                        이중으로 인덱스를 사용한 상황이다.

                                                        일단 image_position에 저장되었던 출력 장소를 뜻하는 숫자가
                                                        i를 타고 처음부터 끝까지 주루룩 나온다.
                                                        ex): 7, 4, 6, 3, 8...

                                                        그 숫자에 %6이 적용된다.
                                                        뱉을 수 있는 숫자가 6개로 줄어들어, 한 쌍의 중복이 나올 수밖에 없게 된다.

                                                        이렇게 나온 숫자들을 image_name이 받아, 해당하는 인덱스(순서)의 이미지 이름들을 내놓는다.
                                                        그것이 i의 증가에 따른 반복문을 타고 처음부터 끝까지 반복되는 것이다.
                                                        */
        img[i].style.backgroundSize="contain";
    }
    /*
    이미지가 들어갈 자리가 배열로 저장되어 있으니, 인덱스값에 i를 줘서 0부터 끝까지 훑게 하고,
    그 반복문으로 쭉쭉 돌리면서 전부 이미지를 박아주는 것.
    이번엔 init함수에 한 세트로 포함시켜주었다.
    
    대상 class에 스타일을 줘서 이런 식으로도 표현할 수 있으니 기억해두자.
    다른 스타일을 주고 싶다면, 위처럼 또 한 줄을 만들어서 추가해주자.
    */


}
function game_start(){ // 이미지를 랜덤 배치하고, 2초 후에 보이지 않게 만드는 역할을 한다.
    if(isStart){
        return;
        /*
        isStart는 true와 false를 오가며 문지기 역할을 한다.
        */
    }

    image_init(); // 앞서 만들어둔 함수를 적어준 것으로, 사실상 문단을 접어둔 것이나 다름없다.
                  // 이미지들을 랜덤하게 배치하는 역할을 수행한다.

    var td = document.getElementsByClassName("picture_box");
    for(var i=0; i<td.length; i++){
        td[i].addEventListener("click", compare_img);
        isSame.push(false);
        /*
        반복문을 사용하여 0번 td부터 마지막까지 전부에게 EventListener를 넣어주었다.
        이들은 클릭시 compare_img 함수를 실행할 것이다.

        여기서 isSame도 함께 넣어주는 이유는,
        각각의 td들이 true를 갖느냐 false를 갖느냐로 구분해줄 초석을 쌓기 위함이다.
        */
    }


    setTimeout(function(){
        var div = document.getElementsByClassName("picture");
        for(var i=0; i<div.length; i++){
            div[i].style.display="none";
            /*
            위와 마찬가지로 0부터 마지막 인덱스(순서)까지의 클래스들에게
            일괄적으로 스타일을 적용해주기 위한 장치다.

            여기서 display=none을 적용해준 건 td가 아니라,
            td 안에 들어있는 div들이다.
            앞서 이미지들을 랜덤하게 넣어준 곳이기도 하다.

            어디에 무엇을 넣었는지 제대로 기억해두는 것이 중요하다!
            */
        }
    },2000);
    isStart=true;
    // 2초 후에 display가 none이 되고,
    // isStart는 true가 되어서 compare_img를 실행할 수 있는 조건이 갖춰진다.

}



function compare_img(){ // 이미지를 클릭할 때마다 일어나는 일들에 대한 함수다.
    if(!isStart){ return;}// 문지기2

    if( count == 30){ // 클릭 리미트 걸어주기
        alert("다음기회에 도전하세요");
        isStart=false; // => 이걸 해주면 game_start 함수가 실행되기 전까진 compare_img를 실행하지 못하게 된다.
        return;
    }


    var cnt = document.getElementById("count");
    cnt.innerText = ++count; // 이미지를 눌러서 compare_img가 실행될 때마다 count가 하나씩 올라가도록 한다.


    var child_div = this.firstChild;
    child_div.style.display="block";
    /*
    this는 이 함수를 실행시킨 객체(EventListener기능을 넣어준 td들 각각)를 역추적하는 기능을 한다.
    앞선 setTimeout에서 우리는 td 안에 들어있는 div(이미지 넣어준 곳)들을 전부 display=none;해주었다.
    그것들을, 이미지를 누를 때마다 하나하나 개별적으로 역추적하고 display=block으로 해주기 위해서
    this.firstChild를 사용한 것이다.
    */




    let div = document.getElementsByClassName("picture");
    for(var i=0; i<div.length; i++){
        if( div[i] === child_div )
            selectImg.push(i);
    }/*
    child_div는, 지금 이 함수를 실행시킨 이미지를 뜻한다.
    즉, if문에 들어있는 조건문의 뜻은 "함수를 실행시킨 이미지와, 이미지가 들어간 div가 같을 경우"라는 뜻이다.
    여기에 i를 이용한다면, 이 함수를 실행시킨 이미지가 div 중에 몇 번째인지 알아낼 수 있다.
    0부터 주르륵 올라가다가 div의 순서와 발동시킨 이미지의 순서가 일치하는 순간이 오면,
    그 순서를 selectImg에 넣는다.

    결론적으로, selectImg에는 현재 선택한 이미지의 순서가 들어가는 것이다.
    */


    /*selectImg의 길이가 2가 되었다는 건, 곧 2개의 이미지가 선택되었다는 뜻이다.*/
    if( selectImg.length == 2){
        if( image_position[selectImg[0]]%6 == image_position[selectImg[1]]%6){ // 찐변태 모먼트
            /* 
            selectImg의 0번 배열은, 첫 번째로 선택한 이미지의 순번을 갖고 있다.
            selectImg의 1번 배열은, 두 번째로 선택한 이미지의 순번을 갖고 있다.
            이 둘의 숫자값에 나누기 6을 한 나머지값이 같다는 건,
            다시 말해 서로가 init 함수에서 같은 번호였고, 그로 인해 같은 이미지 이름을 받았다는 뜻이다.

            [init 함수에서의 해당 부분]
            img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";\
            0%6 = 0
            1%6 = 1
            2%6 = 2
            3%6 = 3
            4%6 = 4
            5%6 = 5
            6%6 = 0
            7%6 = 1
            8%6 = 2
            9%6 = 3
            10%6 = 4
            11%6 = 5
            여기서 우변의 숫자가 selectImg[?]%6과 같은 의미인 것.
            image_position[i]%6의 중복된 한 쌍은, image_name[image_position[i]%6]로 인해 둘이 같은 이미지를 부여 받았었음

            인간적으로 이건 너무 변태임
             */


            isSame[selectImg[0]] = true; // selectImg의 배열이 가진 i값은 곧 이미지의 위치를 나타낸다.
            isSame[selectImg[1]] = true; // 따라서 해당 이미지가 가진 값을 true로 바꿔주면 나머지 것들과 구분이 가능하다.
            selectImg=new Array(); // 두 개가 꽉 찬 selectImg는 다시 쓸 수 있게 리셋한다.
            end_count++; // 한 쌍이 완성되었으므로 1포인트 상승한다.


        }else{  // 같은 이미지 선택 아니면 
            setTimeout( function(){ // 보였다가 안 보이게 하기까지 딜레이를 주기 위한 setTimeout이다.

                selectImg = new Array(); // 두 개가 꽉 찬 selectImg를 다시 쓸 수 있게 리셋한다.

                let pic = document.getElementsByClassName("picture");
                for(var i=0; i<isSame.length; i++){
                    if(!isSame[i]){
                        pic[i].style.display="none";
                        /*
                        false값을 가진 div를 0번부터 주르륵 색출하다가,
                        isSame가 참이 아닌, false인 경우의 이미지들은
                        i의 상승을 타고 일괄적으로 display="none"이 되어 보이지 않게 된다.
                        */
                    }
                }
            }, 1000);
        }
    }
    if(end_count == 6){
        alert("게임 끝");
        isStart=false;
    }
    
    
}
function search_Element(obj){

}