

$(function(){
    var isLogin = getCookie("isLogin")=='true'?true:false;
    // =='true'?true:false;
    var id = getCookie("id");

    var login='';
    if( isLogin ){
        console.log('로그인됨')
        login=`<div class="user">
        <p>${id}</p> <a href="/?part=logout">로그아웃</a>
        </div>`
    }else{
        login="<div class='login_bt'><a href='/login'>로그인</a></div>"
    }
    $('#side').append(login);
});