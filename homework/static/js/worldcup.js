/*
    공정의 순서

    랜덤값 숫자들을 32개 생성해서 배열에 저장
    해당 배열을 이용, 동물 이름 중에서 i번 이름을 가져와라 요청
*/


var path = "url(./static/image/"
const name = ["dalma.png","saint.png","chi.jpg","maltiz.jpg",
            "pome.jpg","pug.jpg","bulldog.jpg","samo.jpg",
            "shep.jpg","coli.jpg","huskey.jpg","corgi.jpg",
            "poodle.jpg","dain.jpg","mastif.jpg","york.jpg",
            "docs.jpg","siba.png","norg.jpg","scott.jpg",
            "russian.jpg","mein.jpg","sabana.jpg","siam.jpg",
            "persian.jpg","turkish.jpg","manul.jpg","munch.jpg",
            "bangal.jpg","kor.jpg","rag.jpg","sping.jpg"]
            // "singa.jpg","bombei.jpg","birman.png","brit.jpg"

const name2 = new Array(); // 32 => 16강 용도
const name3 = new Array(); // 16 => 8강 용도
const name4 = new Array(); // 8강 => 4강 용도
const name5 = new Array(); // 4강 => 준결승 용도
const name6 = new Array(); // 준결승 => 결승 용도


var nums = new Array(); // 랜덤 순서 저장 배열

var comp = new Array(); // 중복 방지용 배열


var is32=true; // 32강 끝났는지 체크
var is16=false; // 16강 끝났는지 체크
var is8=false;
var is4=false;
var is2=false;
var final=false;

window.onload=function(){
    var left_screen = document.getElementById("left_screen");
    var right_screen = document.getElementById("right_screen");


    // 중복되지 않는 랜덤숫자 32개
    while(comp.length < 32){
        var temp = Math.floor(Math.random()*32);
        if(!comp.includes(temp)){
            comp.push(temp)
        }
    }
    
    // (랜덤숫자)번째의 이미지를 순서대로 다른 배열에 복사
    for(var i=0; i<32; i++){
        nums.push(name[comp[i]]);
    };


    // 좌측 스크린 세팅
    left_screen.style.background=path+nums[0];
    left_screen.style.backgroundSize="contain";
    left_screen.style.backgroundRepeat="no-repeat";
    left_screen.style.backgroundPosition="center";

    // 우측 스크린 세팅
    right_screen.style.background=path+nums[1];
    right_screen.style.backgroundSize="contain";
    right_screen.style.backgroundRepeat="no-repeat";
    right_screen.style.backgroundPosition="center";


    // 좌우 선택
    left_screen.addEventListener("click", choice);
    right_screen.addEventListener("click", choice);
    
    document.getElementById("head").innerHTML="멍냥이 월드컵 32강"
}




a=0; // 왼쪽 사진 출현순서
b=1; // 오른쪽 사진 출현순서

function choice(){
    var tb = this.style.background;

    if(name2.length<16 && is32){ // 선택한 사진이 16개가 되기 전까지
        for(var i=0; i<=32; i++){
            if(tb.includes(nums[i])){
                name2.push(nums[i]); // 선택된 사진의 파일명 name2에 저장
                a=a+2 // 왼쪽사진 출현 순서 + 1
                b=b+2 // 오른쪽사진 출현 순서 +1
            }
        }
    
        // 새로 바뀐 왼쪽 사진
        left_screen.style.background=path+nums[a];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 새로 바뀐 오른쪽 사진
        right_screen.style.background=path+nums[b];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center"; 
    }


    if(name2.length==16 && is32){ // 사진 16장을 선택했으니 16강으로 전환
        is32=false;
        document.getElementById("head").innerHTML="멍냥이 월드컵 16강"

        // 출현순서 초기화
        a=0;
        b=1;

        // 랜덤숫자 보관소 초기화
        comp=[];

        
        // 이미지 이름 보관소 초기화
        nums=[];


        // 16개의 랜덤숫자 넣기
        while(comp.length < 16){
            var temp = Math.floor(Math.random()*16);
            if(!comp.includes(temp)){
                comp.push(temp)
            }
        }

        // 뽑은 이미지들 랜덤 순서대로 다시 nums에 저장
        for(var i=0; i<16; i++){
            nums.push(name2[comp[i]]);
        };

        // 좌측 스크린 세팅
        left_screen.style.background=path+nums[0];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 우측 스크린 세팅
        right_screen.style.background=path+nums[1];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center";

        is16=true;
        return;
    }

    

    if(name3.length<8 && is16){ // 선택한 사진이 8개가 되기 전까지

        for(var i=0; i<nums.length; i++){
            if(tb.includes(nums[i])){
                name3.push(nums[i]); // 선택된 사진의 파일명 name2에 저장
                a=a+2 // 왼쪽사진 출현 순서 + 1
                b=b+2 // 오른쪽사진 출현 순서 +1
            }
        }
    
        // 새로 바뀐 왼쪽 사진
        left_screen.style.background=path+nums[a];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 새로 바뀐 오른쪽 사진
        right_screen.style.background=path+nums[b];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center"; 
    }


    if(name3.length==8 && is16){ // 사진 8장을 선택했으니 8강으로 전환
        is16=false;
        document.getElementById("head").innerHTML="멍냥이 월드컵 8강"

        // 출현순서 초기화
        a=0;
        b=1;

        // 랜덤숫자 보관소 초기화
        comp=[];

        
        // 이미지 이름 보관소 초기화
        nums=[];


        // 8개의 랜덤숫자 넣기
        while(comp.length < 8){
            var temp = Math.floor(Math.random()*8);
            if(!comp.includes(temp)){
                comp.push(temp)
            }
        }

        // 뽑은 이미지들 랜덤 순서대로 다시 nums에 저장
        for(var i=0; i<8; i++){
            nums.push(name3[comp[i]]);
        };

        // 좌측 스크린 세팅
        left_screen.style.background=path+nums[0];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 우측 스크린 세팅
        right_screen.style.background=path+nums[1];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center";

        is8=true;
        return;
    }

    if(name4.length<4 && is8){ // 선택한 사진이 4개가 되기 전까지

        for(var i=0; i<nums.length; i++){
            if(tb.includes(nums[i])){
                name4.push(nums[i]); // 선택된 사진의 파일명 name4에 저장
                a=a+2 // 왼쪽사진 출현 순서 + 1
                b=b+2 // 오른쪽사진 출현 순서 +1
            }
        }

        // 새로 바뀐 왼쪽 사진
        left_screen.style.background=path+nums[a];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 새로 바뀐 오른쪽 사진
        right_screen.style.background=path+nums[b];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center"; 
    }

    if(name4.length==4 && is8){ // 사진 4장을 선택했으니 4강으로 전환
        is8=false;
        document.getElementById("head").innerHTML="멍냥이 월드컵 4강"

        // 출현순서 초기화
        a=0;
        b=1;

        // 랜덤숫자 보관소 초기화
        comp=[];

        
        // 이미지 이름 보관소 초기화
        nums=[];


        // 4개의 랜덤숫자 넣기
        while(comp.length < 4){
            var temp = Math.floor(Math.random()*4);
            if(!comp.includes(temp)){
                comp.push(temp)
            }
        }

        // 뽑은 이미지들 랜덤 순서대로 다시 nums에 저장
        for(var i=0; i<4; i++){
            nums.push(name4[comp[i]]);
        };

        // 좌측 스크린 세팅
        left_screen.style.background=path+nums[0];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 우측 스크린 세팅
        right_screen.style.background=path+nums[1];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center";

        is4=true;
        return;
    }

    if(name5.length<2 && is4){ // 선택한 사진이 2개가 되기 전까지

        for(var i=0; i<nums.length; i++){
            if(tb.includes(nums[i])){
                name5.push(nums[i]); // 선택된 사진의 파일명 name2에 저장
                a=a+2 // 왼쪽사진 출현 순서 + 1
                b=b+2 // 오른쪽사진 출현 순서 +1
            }
        }

        // 새로 바뀐 왼쪽 사진
        left_screen.style.background=path+nums[a];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 새로 바뀐 오른쪽 사진
        right_screen.style.background=path+nums[b];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center"; 
    }

    if(name5.length==2 && is4){ // 사진 2장을 선택했으니 결승으로 전환
        is4=false;
        document.getElementById("head").innerHTML="멍냥이 월드컵 결승"

        // 좌측 스크린 세팅
        left_screen.style.background=path+name5[0];
        left_screen.style.backgroundSize="contain";
        left_screen.style.backgroundRepeat="no-repeat";
        left_screen.style.backgroundPosition="center";
    
        // 우측 스크린 세팅
        right_screen.style.background=path+name5[1];
        right_screen.style.backgroundSize="contain";
        right_screen.style.backgroundRepeat="no-repeat";
        right_screen.style.backgroundPosition="center";

        final=true;
        return;
    }

    if(final){
        for(var i=0; i<nums.length; i++){
            if(tb.includes(nums[i])){
                var res = nums[i]; // 선택된 사진의 파일명 name2에 저장
            }
        }
        left_screen.style.background='';
        right_screen.style.background='';

        var fin = document.getElementById("final")

        fin.style.background=path+res;
        fin.style.backgroundSize="contain";
        fin.style.backgroundRepeat="no-repeat";
        fin.style.backgroundPosition="center"; 
        fin.style.display="block";

        left_screen.removeEventListener("click", choice);
        right_screen.removeEventListener("click", choice);
    }

    
}