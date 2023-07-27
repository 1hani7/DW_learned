/*
    [ 객체 ]
    객체 : object
    속성 : attribute
    값   : value
*/

// 1번 방법
let 상수 = new Object(); // 객체생성
상수.age=26; // 상수라는 객체에 나이라는 속성과 값을 줌
상수.name="신상수";
상수.height=183;
상수.weight="unKnown";
상수.eye=2.0;
상수.footSize=300;


let pen = new Object();
pen.name="삼색볼펜";
pen.color="red,blue,black"
pen.made="korea";
pen.company="모나미";

// let wa = () => alert("와!")

// 2번 방법 (가장 일반적)
function person(name, age, addr){
    // 객체 생성자 함수 (객체 만드는 기계 틀)
    this.name=name;
    this.age=age;
    this.addr=addr;
    // this를 쓰지 않으면 속성이 아니라 변수로 저장됨

    // 이게 method
    // this.bornYear=function(){
    //     document.write(`출생연도 : ${2023-this.age} <br>`);
    // }
}

// 이게 prototype
// 객체에서 사용할 함수를 따로 만들어줘서
// 메모리 낭비를 막아줄 수 있음(최적화)
person.prototype.bornYear=function(){
    document.write(`출생연도 : ${2023-this.age} <br>`);
}
person.prototype.group="201호";

// 실제로 객체를 만드는 단계
const p = new Array();
p.push( new person( "신상수", 26, "대전 서구") );
p.push( new person( "신종수", 24, "대전 중구" ) );
p.push( new person( "김창식", 31, "경기도 화성" ) );

// method가 무엇이냐?
// 함수는 독립적으로 실행되는 코드의 집합체임
// method는 객체에 귀속되어서, 객체에 의해 실행되는 코드의 집합체임
//  근데 이걸 객체 안에 만들어 주면 안 됨
//  객체가 늘어날 때마다 method도 늘어나서 메모리 잡아먹음(느려짐)
//  => method를 하나만 되도록 만들어야 함
//      => prototype 기능을 사용하자 (*JS의 매우 중요한 특성)





// 3번 방법
const baby = {
    firstName:"신",
    lastName:"종플루",
    age : 2
}


window.onload=function(){
    p[0].bornYear();
    p[1].bornYear();
    p[2].bornYear();
    // document.write( pen.name );
    // document.write( pen.color.split(",")[0] );
    // document.write( pen.color.split(",")[1] );
    // document.write( pen.color.split(",")[2] );
    
    // document.write( p[0].name );
    // document.write( p[1].name );
    // document.write( p[2].name );
    // document.write( baby.lastName );
//     document.write(p1.name);
//     document.write(p2.name);
//     document.write(p3.name);
}