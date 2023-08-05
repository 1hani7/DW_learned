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