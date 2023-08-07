let num = new Array(); // 표시되는 숫자의 배열
let ran = new Array(); // 표시되는 위치의 배열

let choice = new Array(); // 클릭한 두 개의 span태그 인덱스 저장 배열

let show = false; // start 버튼 클릭 여부

let cmp_num = new Array(); // 두 숫자를 비교하기 위한 배열

let end = 0;

let step = 0; // 클릭 횟수 제한


window.onload=function(){
    let pic = document.getElementsByClassName("picture");
    for(var i=0; i<pic.length; i++){
        pic[i].addEventListener("click", same_search);
    }
}

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
    var count = document.getElementById("count");
    count.innerText=0;
}


function start(){ // 버튼을 누르면 실행되는 함수
    
    if(ran.length>7 || num.length>7){
        // 배열에 8개 이상 쌓일 경우 아무것도 동작하지 않음
    }else{
        init();
        let pic = document.getElementsByClassName("back");

        for(var i=0; i<pic.length; i++){
            // pic[i].addEventListener("click", same_search); // pic[i] => pic의 i번 인덱스
            pic[ran[i]].innerHTML=num[i%4]; 
            // 8개의 칸에 4개의 숫자를 두 번 표현하기 위한 i%4 (계산식이 들어간 index 표현) *중요
            // pic[ran[i]] => 기존의 pic[i]는 i의 증가에 따라 칸 수에 순차적으로 값을 넣었음
                            //그걸 이번엔 중복되지않는 0~7 사이의 랜덤값으로 바꿔준 것
                            //0~7인 이유는, 칸(index)를 셀 때 0부터 세어줘야 하기 때문
                            //ran[i]는 i의 상승에 따라 본인이 가진 랜덤숫자 배열들을 순차적으로 표시해줌
            
        }
        setTimeout(function(){
            let pic = document.getElementsByClassName("back"); // 지역변수가 우선권, 앞서 선언한 pic은 상대적 전역변수
            for(var i=0; i<pic.length; i++){
                pic[i].style.display="none"; // 2초 뒤에 display none으로 사라지게
                // 스타일 바꿔주기 => =과 문자열로 표기
                
            }
            show = true; // start 버튼이 눌렸음
        } , 2000)
    }
}

function same_search(){
    if(!show){ // show 변수가 false라면
        alert("start 버튼을 누르세요");
        return; // 함수가 작동하기전으로 돌아감
    }

    if (step==20){
        alert("당신의 패배!")
        show=false; // 먼젓번 if문에 걸리게
        return; // 함수가 작동하기 전으로 돌아감
    }
    var count = document.getElementById("count");
    count.innerText= ++step;
    


    // "클릭한" td의 첫 번째 children을 child라고 저장해둔다
    var child = this.children[0]; // 배열이라[]로 인덱스 가능
    // this = 함수를 발생시킨 객체 본인
    // js에서 이벤트리스너를 먹혀준 경우에 사용 가능 (html에서 onclick하면 안 됨)
    // 자식태그 가져오는 법
    // children - 모든 자식을 htmlcollextion 배열로 가져옴
    // childNodes - 모든 자식을 nodeList 배열로 가져옴
    // firstChild - 첫번째 자식
    // lastChild - 마지막 자식
                         
    child.style.display="inline"; // span태그의 원래 display로 돌려준 것

    let span = document.getElementsByClassName("back");
    for(var i=0; i<span.length; i++){
        if(span[i] === child){ // 몇 번째 칸에 child(내가 클릭한 td의 첫 번째 자식)가 있나 검출
            choice.push(i); // 클릭한 td의 span태그가 몇 번째 상자(인덱스)에 들어갔는지 배열에 저장
        } // ex) : 7번 칸에서 검출되었다면 i는 7이 되어 choice 배열에 push됨
    }

    cmp_num.push(parseInt(child.innerText)); // innerText는 출력 외에 이런 용도로도 가능
    // 나온 숫자들을 배열 안에 넣고, 첫 번째와 두 번째 숫자를 비교함
    if(cmp_num.length==2){ 
        if(cmp_num[0] == cmp_num[1]){// 맞는 경우
            cmp_num=new Array(); // 숫자 비교 배열 초기화
            choice = new Array();
            end++;
            if(end==4){ // 2쌍이 맞는 순간이 네 번 있어야 하므로
                alert("게임 끝!");
                show=false; // 이제 더 이상 진행이 안 됨
            }
            
        }else{ // 다른 경우
            setTimeout(function(){ // 오답 숫자를 짧게 보여주고 다시 꺼짐
                cmp_num=new Array(); // 숫자 비교 배열 초기화
                let pic = document.getElementsByClassName("back");
                for(var i=0; i<choice.length; i++){
                    pic[choice[i]].style.display="none";
                }   // choice 안에는 몇 번째 칸이 눌렸는지가 저장되어있음
                choice = new Array();
            }, 100);
        }
    }
    
    


}

