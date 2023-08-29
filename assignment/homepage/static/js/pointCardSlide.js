function pointCardSlide(){
    var w = parseInt($("#carSlideBox").css("width"));

    // 슬라이드 이미지 너비 초기값
    $(".cards").each(function(){
        $(this).css("width", w+'px')
    })

    // 화면비 변경시 첫 좌표로 ( 배너 너비 맞춤 )
    $(window).resize(function(){
        $(".cards").each(function(){
            $(this).css("width", w+'px')
        })
        w = parseInt($(".slideImg").eq(0).css("width"));
        cardSlideLocation = 0;
        $("#cardSlide").css("left", cardSlideLocation+"px");
    });

    // 좌우 버튼 슬라이드
    $("#cardR").click(function(){
        slideRight(w);
    });
    $("#cardL").click(function(){
        console.log(cardSlideLocation);
        if( cardSlideLocation == 0 ){
            cardSlideLocation+=($(".cards").length-1)*(-(w));
            $("#cardSlide").css("left", cardSlideLocation+"px");
        }else
            $("#cardSlide").css("left", (cardSlideLocation+=w)+"px");
    });

    // 하단 버튼 슬라이드
    $(".cardIdx").click(function(){
        var tmp = $(this).data("idx");
        cardSlideLocation = tmp*w;
        $("#cardSlide").css("left", cardSlideLocation+"px");
    });

    // 현재 슬라이드 번호 강조
    setInterval(function(){
        cardIdxCheck(w);
    },100)

    // 자동 슬라이드
    setInterval(function(){
        slideRight(w);
    },6000);

    // 터치 드래그
    touchNDrag(w);
}

// 현재 슬라이드 번호 강조
function cardIdxCheck(w){
    $(".cardIdx").each(function(i){
        if( cardSlideLocation == -(w*i) ){
            $(".cardIdx").eq(i).css("font-size", "1.7rem")
        }else{
            $(".cardIdx").eq(i).css("font-size", "1rem")
        }
    });
}

// 슬라이드 오른쪽으로
function slideRight(w){
    if( cardSlideLocation == ($(".cards").length-1)*(-w) ){
        cardSlideLocation=0;
        $("#cardSlide").css("left", cardSlideLocation + "px");
    }else{
        $("#cardSlide").css("left", (cardSlideLocation-=w) + "px");
    }
}

// 터치 드래그 함수
function touchNDrag(w){
    let startX = 0;
    let endX = 0;
    var lastLocation = ($(".cards").length-1)*(-(w));
    $(".cards").on("touchstart", function(e){
        startX = e.originalEvent.changedTouches[0].clientX;
    });
    $(".cards").on("touchend", function(e){
        endX = e.originalEvent.changedTouches[0].clientX;
        if( endX > startX && cardSlideLocation != 0 ){
            $("#cardSlide").css("left", (cardSlideLocation+=w)+"px");
        }
        if( endX < startX && cardSlideLocation != lastLocation ){
            $("#cardSlide").css("left", (cardSlideLocation-=w)+"px");
        }
    });
};