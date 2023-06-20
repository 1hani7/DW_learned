/*이번 예제에서 이곳에 변수를 생성해줘도 실행이 되지 않았음
그 이유는 html에서 읽는 순서때문
잘 모르겠다면 일단 "지역 변수로 만들고 필요하다면 전역 변수로 만들기"*/

// .value는 input태그의 경우에서만 사용하자

// functoin ById(id){
// parseInt(document.getElementById(id).value);
// }
// var kor = ById("kor");

// 코드의 양을 줄이는 실력을 끌어올릴 때

// 이 위는 그냥 메모입니다.



// 버튼을 누르면 onclick을 통해서 이 함수가 실행됩니다.
function calc(){

    // [2번 공정]
    // 몰아넣어줄때 사용할 변수입니다.
    var out="";


    // [1번 공정]
    // input 태그에 입력해줬던 값들을 불러와주는 곳입니다.
    // input 태그를 사용했기 때문에 .value를 잊지 말아야 합니다.
    var kor = parseInt(document.getElementById("kor").value);
    var mat = parseInt(document.getElementById("mat").value);
    var eng = parseInt(document.getElementById("eng").value);


    // [3번 공정]
    // 평균값을 구해서 ((국+수+영)/3) ev라는 변수에 저장해줬습니다.
    var ev = (kor+mat+eng)/3

    // [5번 공정]
    // out 변수에 몰아넣어서 출력에 사용해줄 겁니다.
    out= "국어 : " + kor + " " + calc_grade(kor) +
         "<br> 수학 : " + mat + " " + calc_grade(mat) + 
         "<br> 영어 : " + eng + " " + calc_grade(eng) +
         "<br> <b>평균</b> : " + parseInt(ev) + " " + calc_grade(ev);
    

    // [6번 공정]
    // result의 id를 불러와, 그 안에 출력해줍니다.
    document.getElementById("results").innerHTML=out;
}

// [4번 공정]
// 국어, 수학, 영어, 평균 모두 점수에 따른 등급을 매겨야 합니다.
// 모두 일일이 if문으로 해결하긴 귀찮습니다.
// 그래서 공통되는 과정을 function으로 따로 묶습니다.
function calc_grade(score){
    if( score >= 90){ // 90보다 크다면
         return "A";
    }else if((score<90) && (score>=80)){ // 80~89 라면
        return "B";
    }else if((score<80) && (score>=70)){ // 70~79 라면
        return "C";
    }else{ // 그 외의 경우라면
        return "F";
    }
}