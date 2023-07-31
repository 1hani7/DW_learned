
//  document.getElementById("imageName").value;

// append -  선택 한 태그의 마지막에 추가
// prepend - 선택한 태그의 처음에 추가
// before - 선택한 태그의 앞쪽에 추가
// after - 선택한 태그의 뒤쪽에 추가
let ri=1;

$(function(){
    $("#setImage").click(function(){
        var data = $("#imageName").val()+"?random="+(ri++);
        
        $("#gallery").append("<div class='img_box'><img src='https://loremflickr.com/1200/1200/"+data+"'></div>");
    });

    $("#3n").click(function(){
        $("#gallery").removeClass("grid-4n");
        $("#gallery").addClass("grid-3n");
        $("#gallery").removeClass("slide-active");
        $("#gallery").addClass("slide-off");
        $("#gallery").append($(".img_box"));
        //$("#gallery").css("grid-template-columns","repeat(3,1fr)");
    });
   
    $("#4n").click(function(){
        $("#gallery").removeClass("grid-3n");
        $("#gallery").addClass("grid-4n");
        $("#gallery").removeClass("slide-active");
        $("#gallery").addClass("slide-off");
        $("#gallery").append($(".img_box"));
    });

// 슬라이드
    $("#slide").click(function(){
        $("#gallery").removeClass("grid-4n");
        $("#gallery").removeClass("grid-3n");
        $("#gallery").removeClass("slide-off");
        $("#gallery").addClass("slide-active");
        $("#slide_box").append($(".img_box"));
        
        var len = $(".img_box").length;
        $("#slide_box").css("width",len*1200+"px");
        $("#slide_box").css("height","500px");
    });
});