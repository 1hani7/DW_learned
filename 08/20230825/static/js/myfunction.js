

function initBoard(){
    // 페이지 구성요소 초기화

    $(".pan").each(function(){
        var idx = Number($(this).data("idx"));
        $(this).css("background", "url(./static/image/"+board_img[idx]+")");
        $(this).css("background-size", "cover");
        $(this).append("<div class='location_name'>"+board_img[idx].split(".")[0]+"</div>");
    });


    var tmp = 1;

    $(".top").each(function(){
        $(this).css("grid-area","top"+(tmp++));
    });
    var tmp=1;
    $(".bottom").each(function(){
        $(this).css("grid-area","bottom"+(tmp++));
    });
    var tmp=1;
    $(".sideR").each(function(){
        $(this).css("grid-area","sideR"+(tmp++));
    });
    var tmp=1;
    $(".sideL").each(function(){
        $(this).css("grid-area","sideL"+(tmp++));
    });
    var tmp=1;

    var areas = "";
    for(var i=1; i<=7; i++){
        areas+="'";
        for(var k=1; k<=9; k++){
            if(i==1)areas+="top"+k+" ";
            if(i==7)areas+="bottom"+(10-k)+" ";
            if(i>1 && i<7) areas+= (k==1)?"sideL"+(7-i)+" " : (k==9)?"sideR"+(i-1)+" ":" center ";
        }
        areas+="'";
    }

    $("#board_container").css("grid-template-areas", areas);
};


const gcolor=["#DB372A","#FFAE00","#52AD98","#BE254F","#283964"];
function draw(){
    // 보드 그리기
    var gidx=Object.values(gamer); // 참가자 번호 가져오기
    $.each(gidx,function(i,p){
        $(".pan").eq(0).append(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">'+
            '<path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"'+
            'fill="'+gcolor[i]+'"style="position:absolute;"/>'+
            '</svg>'
            )
    });
};


function setOpen(){
    var child = window.open("set_gamer.html","참가자설정",
    "width=300,height=150,top=400,left=750");
};

function dice_turn(){
    $(".dice").css("animation","turn 20s linear infinite");
}