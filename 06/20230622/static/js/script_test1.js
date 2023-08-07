/*
베스킨라빈스31

숫자 1~3개를 입력
내가 입력한 숫자 다음부터 컴퓨터가 숫자를 불러와야 함
ex)= 내가 1,2,3을 입력하면 컴퓨터가 4,5,6 이런 식으로
숫자 사이에 ,를 넣어서 입력해야 하도록
split 함수를 사용하기 => 
*/

/*
input 안의 숫자를 숫자열로 가져와야 한다
그걸 배열 안에 넣는다
배열 안에 들어간 걸 .split(","); 로 글자 하나하나 나눠놓는다

컴퓨터가 내 다음 숫자부터 입력하도록 하려면?
=> 내가 던진 숫자의 lastChild를 인식해야 함
=> 그 값부터 랜덤으로 정해진 값만큼 +1을 반복하도록 해야 함
=== 내가 던진 마지막 숫자를 인식하는 인덱스
=== 그 숫자를 변수로 저장 ex)=a
=== 컴퓨터가 가진 반복문에 for(var i=a; i<=랜덤값 변수; i++)


배열 안의 길이를 인식해서 31에 맞춰 승패를 가르게 해야 함


1. 숫자를 입력하고 송신 버튼을 누른다
2. 컴퓨터가 일정 주기마다 숫자를 하나씩 보내준다
3. 이것이 반복되다가 31을 말한 쪽이 if문으로 alert를 띄운다
4. 


문제 : 내가 10 이상의 자리를 입력하면 컴퓨터가 받아서 계산하질 못한다.
*/


let ice_box =""; // 유저와 컴퓨터가 낸 숫자가 들어갈 곳

let out="";

let last_split = 0;

let com_last=0;


window.onload=function(){
    let active = document.getElementById("active");
    active.addEventListener("click", process)
    let input = document.getElementById("user");
    input.addEventListener("keypress", function(e){
        if(e.keyCode==13)process();
    })
}


function process(){
    let input = document.getElementById("user").value;
    ice_box=input;

    if(input===""){
        alert("뭐라도 입력해주세요.")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    if(input<com_last){
        alert("컴퓨터의 마지막 숫자보다 더 큰 숫자를 입력하세요!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    let split = new Array();
    split = ice_box.split(","); // 입력값에서 ,뺀 걸 split에 저장함

    if(split[0]!=(com_last+1)){
        alert("컴퓨터 바로 다음 숫자부터 입력하세요!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    if(split.length>=4){
        alert("최대 세 개까지만 입력 가능합니다!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    


    last_split = split[split.length-1]; // 숫자가 1의 자리일 때, 내가 낸 숫자의 마지막 숫자 자리가
                                            // last_split에 저장됨
    


    let fight = document.getElementById("fight_box");

    out+="내가 낸 숫자 = "+input+"<br>";


    if(last_split>=31){
        alert("당신의 패배입니다!");
        document.getElementById("user").value="";
        input.focus()
        last_split=0;
        return;
    }


    // 컴퓨터 차례
    var temp = Math.floor(Math.random()*2)+1; // 숫자를 몇 번 낼 것인지 랜덤
    for (var i=0; i<=temp; i++){
        last_split++;;
        out+="컴퓨터가 낸 숫자 : " + last_split + "<br>";
    }com_last=last_split;



    if(com_last>=31){
        alert("당신의 승리입니다!");
        document.getElementById("user").value="";
        input.focus()
        last_split=0;
        return;
    }

    fight.innerHTML=out;
    document.getElementById("user").value="";
}