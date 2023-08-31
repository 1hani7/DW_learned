

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
        $(".pan").eq(0).append(makeMal(i))
    });
};


function setOpen(){
    var child = window.open("set_gamer.html","참가자설정",
    "width=300,height=150,top=400,left=750");
};

var playerTurn = 0;

function dice_turn(){
    console.log(gamer);
    // $(".dice").css("animation","turn 20s linear infinite");
    var roll = Math.floor(Math.random()*6)+1;
    if( roll == 1 ) $(".dice").css("transform","rotateY(0deg)");
    if( roll == 2 ) $(".dice").css("transform","rotateY(90deg)");
    if( roll == 3 ) $(".dice").css("transform","rotateX(-90deg)");
    if( roll == 4 ) $(".dice").css("transform","rotateX(90deg)");
    if( roll == 5 ) $(".dice").css("transform","rotateY(-90deg)");
    if( roll == 6 ) $(".dice").css("transform","rotateY(180deg)");

    $(".pan").each(function(i,v){
        $(this).find(".player"+playerTurn).remove();
    });
    
    pLocation[playerTurn]+=roll;

    if( pLocation[playerTurn] > $(".pan").length ){
        pLocation[playerTurn] -= $(".pan").length;
    }

    $(".pan").eq(pLocation[playerTurn]).append(
        makeMal(playerTurn)
    );

    if(playerTurn == pLocation.length-1){
        playerTurn=0;
    }else{
        playerTurn+=1;
    }

    // for(var val of pLocation){
    //     if( val >= $(".pan").length ){
    //         alert(gamer[playerTurn]+" WINS!")
    //         break;
    //     }
    // }
}

function makeMal(count){
    return '<svg class="mal player'+count+
    '"width="50" height="50" viewBox="0 0 50 50"'+
    'style="position:absolute; top:55px; left:'+0+(count*30)+'px;">'+
    '<circle cx="25" cy="24" r="15"'+
    'fill="'+gcolor[count]+'"/>'+
    "<polygon points='25,0 50,20 0,20'"+
    'fill="'+gcolor[count]+'"/>'+
    '</svg>'
}