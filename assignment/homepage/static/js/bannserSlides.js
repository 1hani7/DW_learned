

// 배너 슬라이드 관련
function bannerSlide(){
    var w = parseInt($("#banner").css("width"));

    // 리사이징 이슈 해결
    $(window).resize(function(){
        if( window.innerWidth <= 768 ) $("#slideBox").css("left", "0px");
        if( window.innerWidth >= 768 ) $("#slideBox").css("left", "0px");
        var wholeSize = $(".slideImg").length;
        w = parseInt($("#banner").css("width"));
        $(".slideImg").each(function(i,v){
            $(this).css("width",w+"px")
        });
        $("#slideBox").css("width", w*wholeSize+"px");
        $("#slideBox").css("left", "0px");
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

    // 현재 슬라이드 위치 표시

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