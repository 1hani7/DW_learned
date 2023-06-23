window.onresize=function(){ // 크기가 변경될 때마다 작동되는 함수
    const wd = window.innerWidth;
    if(wd > 786){ // 786px 이상으로 늘리면 리스트 닫힘
        const list = document.getElementsByClassName("menu_list")[0];
        list.style.display="none";
        list.dataset.show='1';
    }
    /*
    window.innerWidth; 브라우저 화면 너비
    window.innerHeight; 브라우저 화면 높이
    window.outerWidth; 브라우저 전체 너비 (창 경계선 포함)
    window.outerHeight; 브라우저 전체 높이 (상단바 포함)

    브라우저 크기변경에 작동하는 함수 - resize();
    */
}


window.onload=function(){// 화면 로딩이 끝나면 시작되는 함수
    const icon = document.getElementsByClassName("strapIcon");
    // 클래스는 배열로 가져오니까 하나밖에 없어도 배열취급 해야 함
    icon[0].addEventListener("click", open_close);

    content = document.querySelector('#content')
    // id가 content인 녀석을 가져오는 새로운 방법 (let content = null로)
}



function open_close(){
        // var list = document.getElementsByClassName("menu_list");
        // list[0].style.display="block"; <== 기존에 하던 방식

        var list = this.nextSibling.nextSibling; // html에서의 줄바꿈(엔터키)까지 고려
                        //다음 형제 (Sibling = 형제);


        //dataset을 이용하는 방법
        /*전역변수를 두고 0,1 바꾸며 쓰는 것보다 편하고 깔끔하게 쓸 수 있음
        (어떤 태그에 필요하느냐 깃발을 꽂아놓을 수 있어서 편리함)
        HTML5부터 사용 가능해진 편의기능*/
        var show = list.dataset.show; // html에서 data-show="1" 해두었던 1이 저장됨
        if(show==1){
            list.style.display="block";
            list.dataset.show='0'; // 여기선 show=0; 이라고 하면 못 알아먹음
        }else{
            list.style.display="none"
            list.dataset.show='1';
        }


        // class를 이용하는 방법                
        // var isActive = list.classList.contains("list_active");
        // if(isActive){
        //     list.classList.toggle("list_active");
        // }else{
        //     list.classList.add("list_active");
        //     // display=block을 가진 클래스를 추가해줘서 표시시키는 방식
        // }

        /*
        element.classList.add("클래스명") => 클래스 이름을 추가해줌
        element.classList.add("클래스명","클래스명") => 여러 개 줄 수 도 있음

        element.classList.replace("변경 전 이름", "변경 후 이름") => 클래스명 바꾸기

        element.classList.toggle("삭제할 클래스 이름") => 클래스명 삭제
        element.classList.toggle("삭제할 클래스 이름",조건식) => 조건부 클래스명 삭제

        태그 객체에 클래스가 있는지 확인방법
        element.classList.contains("클래스명");
        => 해당 클래스명이 있다면 true, 없다면 false를 반환
        */
}

let content = null;

function win_confirm(){
    alert("QYd");
}

function make_num(){
    let out ="<table class='makeTable'>";

    for(var n=1; n<=5; n++){

        let lucky_num = new Array();
        lucky_num.push(Math.floor(Math.random()*45)+1); // 첫 번째 랜덤 숫자

        for(i=1; i<6; i++){
            var num = Math.floor(Math.random()*45)+1;
            if(lucky_num.indexOf(num)==-1){ // indexOf 잊지 말자
                lucky_num.push(num);
            }else{
                i--;
            }
        }

        lucky_num.sort(function(a,b){return a-b;})
        // 배열 오름차순 정리 함수
        // 두 개의 값을 계산해서 양수(+)라면 자리를 바꿔주는 원리 / 버블정렬 알고리즘
        // b-a로 한다면 내림차순이 됨

        out += "<tr>";

        out += "<td class='numTd'>"+n+".</td>";
        for(var i=0; i<lucky_num.length; i++){
            out+="<td class='numTd'>"+lucky_num[i]+"</td>";
        }
        out += "</tr>"
        
        let even=0, odd=0; // even짝 odd 홀
        let total=0;

        for(var i=0; i<lucky_num.length; i++){
            total+=(lucky_num[i]);
            if(lucky_num[i]%2==0){
                even++;
            }else{
                odd++;
            }
        }

        var ac = new Array();
        // 산술적 복합성 값 구하기
        for(var i=lucky_num.length-1; i>=1; i--){
            for(var j=i-1; j=0; j--){
                ac.push(box=lucky_num[i]-lucky_num[j]);
            }
        }

        out+="<td colspan='7'>총합 : "+total+"&nbsp;&nbsp;|&nbsp;&nbsp;홀/짝 : "+odd+"/"+even+"</td>";
    }
    out += "</table>"

    content.innerHTML=out;
}

function num_count(){
    alert("QYd");
}

