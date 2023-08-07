// let a = 10;

// function select(){ // 발동시마다 다시 시작함
//     let b = 10;
//     a++;
//     b++;
//     alert(a+"그리고"+b);
// }

// a는 전역변수, b는 지역변수 상태임
// b는 select가 일을 마칠 때마다 사라져서 처음으로 돌아오지만
// a는 select가 일을 마친 뒤에도 값이 누적됨
// (페이지가 바뀌거나 새로고침하기 전까진 유지)

// 즉, 전역변수인 a는 select 함수 내에서 얻은 결과를
// 다른 함수 내에서도 사용할 수 있는 것



// return에 대한 설명
// function select(){
//     var a=100; // 지역변수
//     a++;
//     return a; // a의 값만 내보낸다
// }

// function easy(){
//     alert("출력 : " + select());
                    // return으로 내보낸 a의 값을 사용하는 법
                    // 함수 기계가 작동한 다음, 그 값만을 표시하게 됨
                    // * a 안의 값만 넘어가는 거지, a 자체가 넘어가는 것이 아님


//} => 즉, 다른 함수의 지역변수가 가진 값을 가져오는 방법인 것




// 다른 함수의 변수를 전역변수를 거쳐서 사용하기
// var a=100; //전역변수

// function select(){
//     a++; // 이 값이 전역변수 a에게 준 영향이 계속 남는 것
// }

// function easy(){
//     select();
//     alert("출력 : " + a);

// }

// 양쪽 방법이 방법도 과정도 다르므로
// return과 전역변수 둘 다 시의적절하게 사용해주는 것이 좋음



let out = ""; // 숫자용
let op = ""; // 연산자용 - 함수 실행시마다 초기회되지 않도록 전역으로
let num1 = 0; // 연산자를 눌러서 함수가 다르게 다시 실행될 때마다 초기화되지 않도록
let num2 = 0; // 연산자 다음에 오는 숫자들

function select(val){
    // 계산 결과 만들어주기
    if(val==='='){ // =를 클릭했을때

        out=(calc()); // 계산해주는 함수, 결과를 return으로 가져옴
        num1=out;

    }else{ // 아직 =를 클릭하지 않은 상태

        // 숫자 누적 표시 기능
        // var out = 함수 실행시마다 재선언되어서 계속 초기화 되는 운명
        out = out + val; // 전역변수 out에 val값을 누적

        // 연산자 넣기 기능
        if(typeof(val)==='string'){// 연산자를 눌러서 val값의 타입이 문자열이 된 경우
            // alert("이거 연산자네요");
            // 문자열이 됐는지 확인작업
            op = val; // +=가 아니라서 쌓이지 않고, 누를 때마다 다시 쓰임
        }

        // 연산자 누르기 전 숫자와 누른 후의 숫자를 구분해주기
        if(op===""){ // op가 없는, 즉 연산자가 들어가지 않은 경우
            num1 = Number(out);
            // 숫자열로 입력할시 10자리숫자, 100자리숫자 등이 인식됨
        }else{ // op가 비어있지 않은, 즉 연산자가 들어가있는 경우
            var index = out.indexOf(op)+1; // out값의 op가 들어간 자리의 바로 뒷자리 순서값
            num2 = Number(out.slice(index));
        }

    }
    document.getElementById("result").value=out;
}

function calc(){ // 계산 결과 기계
    switch(op){
        case "+": return num1+num2 ;
        case "-": return num1-num2 ;
        case "*": return num1*num2 ;
        case "/": return parseInt(num1/num2) ; // 소수점 버려주기
    }
}


// input 태그에는 innerHTML이 안 먹혀서 value를 직접 조정해줘야 함


// 문자열을 가공하기 위한 함수
// a.length => 몇 글자인지 표시
// 글자 자르기
// a = 자를 대상.slice(s, e) => s번째 글자에서 e번째 글짜 전까지 (0부터 세어야 함)
// a = 자를 대상.substring(s, e) => s번째 글자에서 e번째 글짜 전까지
// a = 자를 대상.substr(s, L) => => s번째 글자에서 L개의 글짜까지