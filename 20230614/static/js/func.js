// // 함수의 형태 4가지
// // 1. 입력과 출력이 없는 형태
// // 2. 입력은 있고 출력이 없는 형태
// // 3. 입력이 없고 출력만 있는 형태
// // 4. 입력과 출력이 있는 형태

// // 입력 : 함수를 실행시킬 때 필요한 값을 외부에서 받아오는 것
// //       (인수(입력값) / 인자(입력값 들어갈 자리) = 매개변수)
// // 출력 : 함수로 생성된 값을 다른 곳으로 보내는 것
// //        return을 사용해서 밖으로 내보냄
// //        지역변수의 경우 '값만' 내보낼 수 있음



// // 작은 괄호 안에 들어가는 게 매개변수(인자)
// function sum(a,b){
//     var show = document.getElementById("sum_result");
//     show.innerText=a+b;
//     //innerHTML하면 태그 적용이 되어서 나옴
// }

// function plus(){
//     var n1 = document.getElementById("num1");
//     var n2 = document.getElementById("num2");
//     var res = document.getElementById("result2");

//     //getElementById 는 어디까지나 태그만 가져오는 거고,
//     //그 태그 안의 값까지 사용하려면 value를 추가 사용해야 함

//     res.innerHTML= Number(n1.value) + Number(n2.value);
//                 // 문자값으로 들어오기 때문에 숫자로 속성을 바꿔줘야 함 
// }


// function myage(){
//     var birth_year = document.getElementById("birth_year").value; // 여기 value 주면 편함
//     var age = document.getElementById("age");

//     age.innerHTML= 2023 - Number(birth_year);
// }


// // return; : 함수의 값을 함수 밖으로 내보낼 때 사용
//           // 함수 안에서 실행되면 바로 함수를 종료하고 값을 내보냄

// function grade_calc(){
//     var kor = document.getElementById("kor");
//     var mat = document.getElementById("mat");
//     var mus = document.getElementById("mus");

//     var res = document.getElementById("result3");

//     // 변수의 내부값이 '비어'있거나 0~100이 아니라면
//     if((kor.value=='') || !(kor.value>=0 && kor.value<=100)){
//         alert("국어 점수가 제대로 입력되지 않았습니다.");
//         kor.focus(); // kor에 커서를 눌러라 (focus=커서 눌러서 깜빡이는 상태)
//         return;
//         alert("return으로 끝낸 다음 코드는 발동 안 해서 있으나마나 (흐려짐)")
//     }
//     else if((mat.value=='') || !(mat.value>=0 && mat.value<=100)){
//         alert("수학 점수가 제대로 입력되지 않았습니다.");
//         mat.focus();
//         return;
//     }
//     else if((mus.value=='') || !(mus.value>=0 && mus.value<=100)){
//         alert("음악 점수가 제대로 입력되지 않았습니다.");
//         mus.focus();
//         return;
//     }

//     var tot = total(Number(kor.value), (mat.value), (mus.value));
//     // 함수 내에서 다른 함수를 호출할 수 있음
//     var avg_val = avg(tot);

//     res.innerHTML="c총점 : " + tot + "평균 : " + avg_val;

// }

// function avg(tot){ // avg.tot=scroe_calc.tot
//     return tot/3;
// }


// function total(k, m, s){
//     return (k+m+s);
// }


// function my_minus_life(){
//     var soju = document.getElementById("soju").value;
//     var minuite = document.getElementById("minuite");
//     var hour = document.getElementById("hour");
//     var day = document.getElementById("day");

//     if(soju==''){
//         alert("몇 잔 마셨는지 입력하세요")
//         soju.focus();
//         return;
//     }

//     // 내가 짠 코드
//     // var m = minuite_life(soju);
//     // var h = hour_life(soju);
//     // var d = day_life(soju);


//     // 선생님 코드
//     var life = Number(soju)*2*365*20;

//     minuite.innerHTML="깎인 수명 : " + life + " 분";
//     hour.innerHTML="깎인 수명 약 : " + parseInt(life/60) + " 시간 (내림 계산)";
//     day.innerHTML="깎인 수명 약 : " + parseInt(life/60/24) + " 일 (내림 계산)";

    // 내가 짠 코드
    // minuite.innerHTML="깎인 수명 : " + m + " 분";
    // hour.innerHTML="깎인 수명 약 : " + parseInt(h) + " 시간 (내림 계산)";
    // day.innerHTML="깎인 수명 약 : " + parseInt(d) + " 일 (내림 계산)";
// }

// 내가 짠 코드
// function minuite_life(soju){ // 20년 동안 soju잔 마셔서 빠진 수명 (분)
//     return (soju*365*20*2);
// }

// function hour_life(soju){ // 20년 동안 soju잔 마셔서 빠진 수명 (시간)
//     return ((soju*365*20*2)/60);
// }

// function day_life(soju){ // 20년 동안 soju잔 마셔서 빠진 수명 (일)
//     return (((soju*365*20*2)/60)/24)
// }


// 정리 : 나는 각각 기계를 돌려서 따로 계산하도록 해서 직관적이지만 길어졌고,
//        선생님은 한 식을 결과 출력에 응용하는 식으로 더 짧게 만듬


function my_order(){
    var main_menu = document.getElementById("night_snack");
    var side_menu = document.getElementById("side_menu");
    var alc = document.getElementById("alc");

    //출력 엘리먼트
    var order_list = document.getElementById("order_result");

    var out="";
    var temp = menu(main_menu.value); // main_menu.value 값이 들어갔을 때의 menu 기계라는 의미
                                      // 함수가 시행된 위치
    out += main_menu.value + " 금액 : " + temp + "원<br>";

    var temp1 = menu(side_menu.value);
    out += side_menu.value + " 금액 : " + temp1 + "원<br>";

    var temp2 = menu(alc.value);
    out+= alc.value + " 금액 : " + temp2 + "원<br>";

    out+= "합계 : " + Number(temp + temp1 + temp2)

    // 판매하지 않는 메뉴를 기입할 경우 경고문이 문자열로 저장될 것이니
    // 문자열일 경우를 적발하는 if문을 작성
    if(typeof(temp) === 'string'
       || typeof(temp1) === 'string'
       || typeof(temp2) === 'string'){ 
        alert("판매하지 않는 메뉴입니다.");
        main_menu.value=''; // 입력한 내용 리셋 1
        side_menu.value=''; // 입력한 내용 리셋 2
        alc.value='';       // 입력한 내용 리셋 3
        main_menu.focus();  // 커서 위치 (배려)
        return;
    }
    order_list.innerHTML = out;
}


function menu(name){
    var money=0;
    switch(name){ // name 에 들어간 값과 일치하는 것을 선택
        case "족발" : money=28000; break; // break 안해주면 밑에 있는 case도 실행된다.
        case "반반치킨" : money=22000; break;
        case "무뼈닭발" : money=19000; break;
        case "페퍼로니피자" : money=18000; break;
        case "짬뽕탕" : money=18000; break;
        case "포케" : money=15000; break;
        case "감자튀김" : money=3000; break;
        case "염통꼬치" : money=4000; break;
        case "타코야키" : money=6000; break;
        case "치즈볼" : money=5000; break;
        case "테라" : money=4000; break;
        case "피치하이볼" : money=8000; break;
        case "진로" : money=5000; break;
        case "새로주" : money=4000; break;
        case "카스" : money=4000; break;
        case "발렌타인30년" : money=1100000; break;
        case "시바스 리갈" : money=59800; break;
        default: // case에 없는 값이 name에 들어올 시 default가 실행됨
            return "판매하지 않는 메뉴입니다."
    }
    return money; // money 변수의 '값만' 해당 함수가 시행된 위치로 되돌아간다는 것
}