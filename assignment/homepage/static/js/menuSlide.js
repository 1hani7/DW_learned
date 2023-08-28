

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


// 배너 슬라이드 관련
function bannerSlide(){
    var w = parseInt($(".slideImg").eq(0).css("width"));
    $(window).resize(function(){
        w = parseInt($(".slideImg").eq(0).css("width"));
    });

    // 좌우 버튼 슬라이드
    $("#slideR").click(function(){
        console.log(slideLocation);
        slideRightSide(w);
    });
    $("#slideL").click(function(){
        if( slideLocation == 0 ){
            slideLocation+=($(".slideImg").length-1)*(-(w));
            $("#slideBox").css("left", slideLocation+"px");
        }else
            $("#slideBox").css("left", (slideLocation+=w)+"px");
    });

    // 하단 버튼 슬라이드
    $(".bannerNav").click(function(){
        var tmp = $(this).data("idx");
        slideLocation = tmp*w;
        $("#slideBox").css("left", slideLocation+"px");
    });

    //자동 슬라이드
    let BS = setInterval(function(){
        slideRightSide(w);
    },8000);

    // 슬라이드 드래그
    slideDrag(BS);
};

function slideRightSide(w){
    if( slideLocation == ($(".slideImg").length-1)*(-(w)) ){
        slideLocation = 0;
        $("#slideBox").css("left", slideLocation+"px");
    }else
        $("#slideBox").css("left", (slideLocation-=w)+"px");
};

function slideDrag(BS){
    let prevX = 0;
    var isDragging = false;
    var d = '';
    $(".slideImg").on("mousedown",function(e){
        prevX = e.clientX;
        isDragging = true;
    });
    $(".slideImg").on("mouseup",function(e){
        var w = parseInt($(".slideImg").css("width"));
        var x = e.clientX;

        isDragging = false;

        if( x > prevX && slideLocation != 0 ){
            $("#slideBox").css("left", (slideLocation+=w)+"px");
        }else if( x < prevX && slideLocation != ($(".slideImg").length-1)*(-(w)) ){
            $("#slideBox").css("left", (slideLocation-=w)+"px");
        }
    });
};