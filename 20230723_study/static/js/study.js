window.onload=function(){
    // 변수
    // 숫자가 들어가긴 할 건데
    // 그 숫자가 경우에 따라서 매번 다르게 들어가야 함

    var a = 0;
    // let a='';
    // const a='';

    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var add = document.getElementById("add")

    // left.addEventListener("click", love("사","랑"));

    right.addEventListener("click", love("선","물"))

    add.addEventListener("click", function(){
        a+=1
    })

    square(300, 200)
    square(150, 100)
    square(2000, 3300)
}

function love(a, b){
    document.getElementById("wrap").innerHTML=a+b;
}


// 문제!
// 버튼 두 개를 만들어 놓고
// 왼쪽 버튼을 누르면 wrap 안에 1이,
// 오른쪽 버튼을 누르면 wrap 안에 2가 나오게 해보자!


// 문제2
// window.onload 밖에 love라는 이름의 함수를 하나 만들어서
// window.onload 안에서 다시 불러보자(콜백)


document.getElementsByClassName("클래스7개들");

클래스7개들 = [ 1번, 2번, 3번, 4번, 5번, 6번, 7번 ];

for(var i=0; i<클래스7개들.length; i++){
    클래스7개들[i].addEventListener("click", 함수이름);
}

f[a[b[i]]];

const f = [1, 2, 3, 4, 5]

const a = [3, 4, 1, 2, 5]

const b = [1, 2, 3, 4, 5]


const map = [1, 0, 0, 0, 0]

