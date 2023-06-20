function byId(name){
    return document.getElementById(name);
} // 함수 기능 이용해서 getElementById를 매크로 돌릴 수 있음

let out="";
// 전역 변수는 이 타입으로 만드는 게 보통
// let 타입은 var와는 다르게 재생성이 불가능
// (또 다시 let out="40"; 같은 걸 치면 오류)

function my_order(){
    // 주문 테이블 Id 소환
    var drinks = byId("drinks");
    var temp = byId("temp");
    var size = byId("size");

    // 출력 Id 소환
    var order_list = byId("order_result");


    // 출력용 모아넣기 변수
    // var out=""; 


    // switch 들을 거쳐서 나온 값들을 변수에 저장
    var men = menus(drinks.value); // 메뉴 가격 저장
    var tem = temper(temp.value); // 온도 가격 저장
    var siz = sizes(size.value); // 사이즈 가격 저장
    var price= Number(men+tem+siz); // 가격 합 저장
    

    if(men==0){
        alert("메뉴판에 없는 메뉴입니다.")
        drinks.value="";
        drinks.focus();
        return;
    }

    if(tem==0){
        alert("핫/아이스 중 하나를 택해주세요.")
        temp.value="";
        temp.focus();
        return;
    }

    // 사이즈 잘못 입력 방지 방법 중 1
    // 강제 소문자 - toLowerCase()
    // 강제 대문자 - toUpperCase()
    // ex): !(size.value.toUpperCase()===L)  => size의 입력값의 대문자가 L이 아닐 경우, 라는 뜻

    if(siz==9){
        alert("사이즈를 다시 입력해주세요. M/L");
        size.value="";
        size.focus();
        return;
    }
    // 
    // 이렇게도 사이즈별 가격 추가 가능
    // if문 사용해서 L을 골랐냐 아니냐 ? 참=추가금액 : 거짓=0;

    // out에 때려박기
    out += "<br>"+drinks.value + "/" + temp.value + "/" + size.value + " : " + price + "원 <br>";

    // += 주문내용이 계속 추가되도록
    order_list.innerHTML += out;

}



function menus(name){
    switch(name){ // money에 담지 않고 그냥 숫자를 return시켜버려도 됨
        case "아메리카노" : return 1000;
        case "헤이즐넛" : return 1500; 
        case "카푸치노" : return 1500; 
        case "카페모카" : return 1500; 
        case "프라푸치노" : return 3000; 
        default: return 0; // 0원을 올림
    }
}

function temper(name){
    switch(name){
        case "핫" : return 500; 
        case "아이스" : return 1000; 
        default: return 0;
    }
}


function sizes(name){
    switch(name){
        case "M" : return 0; 
        case "L" : return 1000;
        default: return 9;
    }
}

function reset(){
    var drinks = byId("drinks");
    var temp = byId("temp");
    var size = byId("size");

    drinks.value = "";
    temp.value = "";
    size.value = "";

    drinks.focus();
}