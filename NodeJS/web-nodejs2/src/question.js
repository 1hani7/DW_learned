let data = [];
let isLogin = false;

async function getQsData(){
    return await fetch("./data/question.json").then(r=>r.json()).then(r=>r);
}

$(async function(){
    isLogin = getCookie("isLogin")=='true'?true:false;
    // =='true'?true:false;
    var id = getCookie("id");

    var login='';
    if( isLogin ){
        login=`<div class="user">
        <p>${id}</p> <a href="/?part=logout">로그아웃</a>
        </div>`
    }else{
        login="<div class='login_bt'><a href='/login'>로그인</a></div>"
    }
    $('#side').append(login);

    data = await getQsData();
    
    // 게시판 리스트 만들어주기
    $.each(data,function(i,v){
        $("#qs").append(
            `<tr class='qsTr'>
                <td class="qsId">${v.id}</td>
                <td class="qstitle">${v.title}</td>
                <td class="qsWriter">${v.writer}</td>
                <td class="qsDate">${v.date}</td>
                <td class="qsTo">${v.to}</td>
            </tr>`
        )
    })

    // 검색
    $("#word").on("keyup",function(){
        var v = $("#word").val();
        $("#qs > tr").filter(function(){
            var isShow = true;
            if(!($(this).find(".qstitle").text().indexOf(v) > -1 ||
                 $(this).find(".qsWriter").text().indexOf(v) > -1))
                isShow = false;
            $(this).toggle(isShow);
        });
    });


    // 배경 클릭시 Modal창 닫힘
    $(".modalBackground").click(function(){
        $(this).parent().fadeOut(500);
    })

});

function questionWrite(){
    if(isLogin){ // 로그인 성공한 상태
        $("#qsModal").fadeIn(500);
    }else{ // 로그인 실패한 상태
        var isOk = confirm("로그인 후 문의하기 할 수 있습니다. \n로그인 하시겠습니까?");
                    // ㄴ alert()에 취소 버튼 추가된 것 (true/false로 환원)
        if(isOk){
            location.href = "/?sub=question";
        }
    }
}


function qsSave(){
    $("#qsModal").fadeOut(500);
    // json 형식으로 값 전달하기 만들기

}