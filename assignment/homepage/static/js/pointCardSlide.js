function pointCardSlide(){
    var w = parseInt($("#carSlideBox").css("width"));

    // 화면비 변경시 첫 좌표로 ( 배너 너비 맞춤 )
    $(window).resize(function(){
        var tWidth = parseInt($("#carSlideBox").css("width"));
        $(".cards").each(function(){
            $(this).css("width", tWidth+'px')
        })
        w = parseInt($(".slideImg").eq(0).css("width"));
        cardSlideLocation = 0;
        $("#cardSlide").css("left", cardSlideLocation+"px");
    });

    // 좌우 버튼 슬라이드
    $("#cardR").click(function(){
        if( cardSlideLocation == ($(".cards").length-1)*(-w) ){
            cardSlideLocation=0;
            $("#cardSlide").css("left", cardSlideLocation + "px");
        }else{
            $("#cardSlide").css("left", (cardSlideLocation-=w) + "px");
        }
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

    // 현재 슬라이드 번호 표시
    setInterval(function(){
        cardIdxCheck(w);
    },10)
}
function cardIdxCheck(w){
    $(".cardIdx").each(function(i){
        if( cardSlideLocation == -(w*i) ){
            $(".cardIdx").eq(i).css("font-size", "1.7rem")
        }else{
            $(".cardIdx").eq(i).css("font-size", "1rem")
        }
    });
}