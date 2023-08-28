

// 메뉴 슬라이드 (작은 화면)
function slideToggles(){
    $("#slide_bt_outer").click(function(){
        $("#slide_menu").css("left","0");
        $("#darkBg").fadeToggle();
    });
    $("#slide_bt_inner").click(function(){
        $("#slide_menu").css("left","-300px");
        $("#darkBg").fadeToggle();
    })
    $("#darkBg").click(function(){
        $("#slide_menu").css("left","-300px");
        $("#darkBg").fadeToggle();
    });
}
