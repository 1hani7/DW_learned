
var path = "url(../homework/static/image/"

const image=["dalma.png","saint.png","chi.jpg","maltiz.jpg",
            "pome.jpg","pug.jpg","bulldog.jpg","samo.jpg",
            "shep.jpg","coli.jpg","huskey.jpg","corgi.jpg",
            "poodle.jpg","dain.jpg","mastif.jpg","york.jpg",
            "docs.jpg","siba.png","norg.jpg","scott.jpg",
            "russian.jpg","mein.jpg","sabana.jpg","siam.jpg",
            "persian.jpg","turkish.jpg","manul.jpg","munch.jpg",
            "bangal.jpg","kor.jpg","rag.jpg","sping.jpg"];


const kind = ["달마시안","세인트 버나드","치와와","말티즈",
              "포메라니안","퍼그","불독","사모예드",
              "저먼 셰퍼드","보더콜리","시베리안 허스키","웰시 코기",
              "푸들","그레이트 데인","마스티프","요크셔 테리어",
              "닥스훈트","시바견","노르웨이숲","스코티시 폴드",
              "러시안 블루","메인쿤","사바나캣","샴 고양이",
              "페르시안","터키쉬 앙고라","마눌 고양이","먼치킨",
              "뱅갈 고양이","코리안 숏헤어","랙돌","스핑크스"]


let 토너먼트1=new Array(); // 현재 토너먼트
let 토너먼트2=new Array(); // 다음 토너먼트 (현재 토너먼트에서 선택한 것)
let 순서=new Array();
let round=32; // 현재회차 (처음은 32강)
let count=1; // 현재 순서 (처음은 1번)


function 순서섞기(){
    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random()*round);
        if(순서.indexOf(tmp) == -1){
            순서.push(tmp);
        }else{
            --i;
        }
    }
}


function 태그선택(id){
    return document.getElementById(id);
}


window.onload=function(){
    var title = 태그선택("title"); // = document.getElementById("title");
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    // 토너먼트1 = image; 와는 다름 (참조복사 => 주소를 복사하는 거라 연동 되어버림)
    토너먼트1 = Array(round).fill().map((arr,i)=>i); // 배열 복사하기 (얕은복사 => 별개로 새롭게 복사 붙여넣기하는 것)
    // 이 Array에 | round만큼의 공간을 | .fill 채워라 | .map 얕은 복사로!

    순서섞기();
    show();
    // 이미지 클릭 이벤트 등록
    var left = 태그선택("left");
    var right = 태그선택("right");
    left.addEventListener("click", 선택);
    right.addEventListener("click", 선택)

    
}

function final(id, nid){
    var n = 태그선택(nid);
    n.style.display="none";
    var 최종 = 태그선택(id);
    최종.style.width="100%";
    최종.style.height="100vw";
}


function 선택(){

    if(this == 태그선택("left")){
        토너먼트2.push(토너먼트1[순서[count*2-2]]);
    }else{
        토너먼트2.push(토너먼트1[순서[count*2-1]]);
    }

    if(round==2){
        final("left", "right");
    }

    if(count==round/2){
        round = round/2;
        count=0;
        순서=new Array();
        순서섞기();
        토너먼트1 = 토너먼트2.map((i)=>i);
        토너먼트2 = new Array();

    }

    count++;

    var title = 태그선택("title");
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    show();

}

function show(){
    var left = 태그선택("leftimg");
    var right = 태그선택("rightimg");
    var leftText = 태그선택("leftText");
    var rightText = 태그선택("rightText")

    left.src="../homework/static/image/"+image[토너먼트1[순서[count*2-2]]];
    right.src="../homework/static/image/"+image[토너먼트1[순서[count*2-1]]];
    // 이미지 태그에 바로 이미지 소스를 걸어줄 수 있는 방법임
    leftText.innerHTML=kind[토너먼트1[순서[count*2-2]]];
    rightText.innerHTML=kind[토너먼트1[순서[count*2-1]]];
}