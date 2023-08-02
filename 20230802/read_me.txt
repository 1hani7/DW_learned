// JSON
자바스크립트 객체(Object)를 JSON 방식으로 바꿔줌
stringify => JSON방식으로
parse()   => 자바스크립트 방식으로

JSON으로 넘어가면 속성값도 문자열로 저장됨
하지만 숫자는 숫자 그대로 저장됨
{age:26}
=>
{"age":26}

JSON 파일에는 주석을 못 닮

// JSON 데이터 가져오기
    $.getJSON("./test_jason.json",function(data){
        console.log(data);
    });




// 새로운 반복문 (배열 전용)
            $.each( data.person , function(i,item){ // i는 배열의 인덱스, item은 배열의 각 공간, p[n]==item
                $("#list").append("<tr><td>"+item.name+"</td><td>"+
                                    item.age+"</td><td>"+item.phone+"</td><td>"+
                                    item.coffee+"</td><td>"+item.hobby+"</td><td>")
            } );


// JSON 파일은 작성하기 빡셈
그래서 엑셀로 작업한 뒤 CSV 파일로 저장해서
이걸 JSON으로 변환하는 식으로 함



// textarea 태그
입력 가능하고 크기를 드래그로 조절할 수 있는 글자 박스 생성


// 서버와 주고받는 기능

$(function(){
    $("#content").on("keypress",function(e){
        if(e.keyCode==13) send();
    })

    $.getJSON("http://krdrive.ipdisk.co.kr:8000/test/data.php",function(data){
        chat_show(data)
    });
    
    re = setTimeout(function(){
        location.reload();
    },10000);
});

$(document).on("keyup",function(){
    if(re!=0)
        clearTimeout(re);
});


function send(){
    var send_data = { writer:$("#writer").val() , content:$("#content").val() };
    send_data = JSON.stringify(send_data);

    var xmlHttp = new XMLHttpRequest();
    // 서버와 주고받고 할 때 사용되는 객체, 새로고침 없이 데이터를 받아올 수 있음

    xmlHttp.open("POST", "http://krdrive.ipdisk.co.kr:8000/test/data.php");
    // .open("전송방식-GET/POST", "서버페이지주소");
    xmlHttp.onload=function(){ // 서버로부터 결과를 반환받는 곳
        var data = this.response;
        if(data==="fail")
            alert("다시 입력하시게");
        else chat_show(JSON.parse(data));
    };
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");// 서버 상태에 따라서 다르므로 유의
    xmlHttp.send("x="+send_data);
    // send(JSON 형식의 데이터) - 서버에 데이터 보내는 곳

    re = setTimeout(function(){
        location.reload();
    },10000);
};

    

function chat_show(data){
    var out='';
    $.each(data, function(i,item){
        out += "<li class='chat'><div class='white_info'><b class='name'>"+item.writer+
               "</b><span class='date'>"+item.date+"</span></div><div class='content'>"+item.content+
               "</div></li>"
    });

    $("#chat_list").html(out);
    $("#content").val('');
    $("#content").focus();
};