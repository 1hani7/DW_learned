

// 배너 슬라이드 관련
function bannerSlide(){
    var w = parseInt($("#banner").css("width"));
    var nw = parseInt($("#banner").css("width"));

    // 슬라이드 이미지 너비 초기값
    $(".slideImg").each(function(){
        $(this).css("width", nw+'px')
    })

    // 배너 버튼 표시 시작값
    $(".bannerNav").eq(0).css("border-bottom", "3px solid white")
    $(".slideDot").eq(0).css("background", "white")

    // 화면비 변경시 첫 좌표로 ( 배너 너비 맞춤 )
    $(window).resize(function(){
        var nw = parseInt($("#banner").css("width"));
        $(".slideImg").each(function(){
            $(this).css("width", nw+'px')
        })
        slideLocation = 0;
        $("#slideBox").css("left", slideLocation+"px");
    });

    // 좌우 버튼 슬라이드
    $("#slideR").click(function(){
        // console.log(slideLocation);
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

    // 현재 슬라이드 표시 기능
    setInterval(function(){
        slideIdxCheck(w);
    },100)

    // 터치 드래그
    touchDrag(w);
};

function slideRightSide(w){
    if( slideLocation == ($(".slideImg").length-1)*(-(w)) ){
        slideLocation = 0;
        $("#slideBox").css("left", slideLocation+"px");
    }else
        $("#slideBox").css("left", (slideLocation-=w)+"px");
};

function touchDrag(w){
    let prevX = 0;
    $(".slideImg").on("touchstart",".slideImg", function(e){
        var touch = e.originalEvent.touches[0];
        prevX = touch.screenX;
        console.log(prevX);
    });
    $(".slideImg").on("touchend",function(e){
        var touch = e.originalEvent.touches[0];
        var x = touch.screenX;
        // console.log(prevX, x)
        if( x > prevX && slideLocation != 0 ){
            $("#slideBox").css("left", (slideLocation+=w)+"px");
        }
        if( x < prevX && slideLocation != ($(".slideImg").length-1)*(-(w)) ){
            $("#slideBox").css("left", (slideLocation-=w)+"px");
        }
    });
};


// 현재 슬라이드 표시 기능
function slideIdxCheck(w){
    // 배너 버튼 표시 (넓은화면)
    $(".bannerNav").each(function(i){
        if( slideLocation == -(w*i) ){
            $(".bannerNav").eq(i).css("border-bottom", "3px solid white")
        }else{
            $(".bannerNav").eq(i).css("border-bottom", "none")
        }
    });
    // 배너 번호 표시 (좁은화면)
    $(".idxDot").each(function(i){
        if( slideLocation == -(w*i) ){
            $(".idxDot").eq(i).css("background", "white")
        }else{
            $(".idxDot").eq(i).css("background", "rgba(0,0,0,0.3)")
        }
    });
}