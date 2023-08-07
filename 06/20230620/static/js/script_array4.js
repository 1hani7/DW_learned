// 특정 문자열의 위치를 찾는 방법 - indexof() 함수
// 배열에서도 사용 가능 (문자열 = 배열이므로)
// 인덱스는 0부터 시작하고, 일치하는 데이터를 찾지 못하면 -1이 나옴


// 지금부터 input에 입력한 값으로 배열 속의 문자열을 출력해내자
// 한 글자만 입력해도 나오도록 (검색 기능 만들기)

const name=["이순신","최무선","강감찬","김유신","김춘추","이사부",
"을지문덕","정도전","정약용","한석봉","박팽년","안중근",
"김선향","김승겸","김철환","김태형","박수호","송은선","신상수",
"안지영","안태균","이상준","이영주","이우주","이충현","임민지",
"정길원","정예림","하지원"]


window.onload=function(){

    let srh_bt=document.getElementById("search_bt");
    srh_bt.addEventListener("click", search_name)
    // addEventListener("이벤트명", 동작할 함수) => 다양한 방식의 작동 트리거를 만들 수 있음
    // 이게 현재 표준

    let input = document.getElementById("search");
    input.addEventListener("keypress", function(e){ // keypress로 들어온 값이 매개변수로 들어감
        if(e.keyCode==13)search_name(); // 엔터(13번 키코드)를 눌렀다면 search_name함수를 실행하라
    });
    // 키보드에 대한 이벤트는 keydown, keyup, keypress가 있음
    // 특정 키에 동작할 수 있도록 이름없는(익명)함수를 때려박을 수 있음
    // alert(e.keyCode); => 고유 keyCode를 찾을 때 쓰기 좋음

}


function search_name(){

    // input 태그의 내용을 두 줄에 거쳐서 가져옴
    var input = document.getElementById("search");
    let word = input.value;
    

    let res = document.getElementById("search_result");
    var out = "";

    for(var i=0; i<name.length; i++){
        if(name[i].indexOf(word)!=-1){// 배열 내의 문자 하나하나를 따지려면 name[i]의 인덱스를 따져야 함
            out+="<p>"+name[i]+"</p>"
        }
   }
   res.innerHTML=out; // 출력
   input.value="";  // 출력 이후 input태그 내용 비우기
   input.focus(); // input태그에 커서 놓기
}