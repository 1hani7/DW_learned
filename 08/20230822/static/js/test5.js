let data = [];
let teacher = [];

async function getData(){
    var temp = await fetch("./static/data/test5.json").then(r=>r.json()).then(r=>r);
    return temp;
}

// ================================================== //

$(async function(){
    $("#search_bt").click(function(){
        $(".search_detail").slideToggle(100);
    });
    
    data = await getData();

    $("#main_title").text(data.학교명);

    teacher = data.담임;

    makeCard();

    $("#word").on("keyup", default_search);
    $("#word").next().click(default_search);

    $(".search_detail input").on("keyup", detail_search)
    $("#cls").change(detail_search)
});

// ================================================== //

function detail_search(){
    var minT=0, maxT=0, minW=0, maxW=0, classV=0;
    minT = parseInt($("#minTall").val()) == '' ? 0 : $("#minTall").val();
    maxT = parseInt($("#maxTall").val()) == '' ? 0 : $("#maxTall").val();
    minW = parseInt($("#minEyes").val()) == '' ? 0 : $("#minEyes").val()*10;
    maxW = parseInt($("#maxEyes").val()) == '' ? 0 : $("#maxEyes").val()*10;
    classV = Number($("#cls").val());

    $(".info").filter(function(){
        var isShow = false;
        if( minT != 0 || classV != 0 || minW != 0 ){
            var T = parseInt($(this).find(".t").text().slice(3));
            if( minT > T || maxT < T ) isShow = false;
            
            var W1 = $(this).find(".e").text().split(" ")[2].split("좌")[1]*10;
            var W2 = $(this).find(".e").text().split(" ")[3].split("우")[1]*10;
            if( minW < W1 || maxW < W1 ) isShow = false;
            else if( minW < W2 || maxW < W2 ) isShow = false;
            else isShow = true;

            var C  = $(this).find(".ban").text();
            if( parseInt(C) === classV ) isShow = true;
        };
        $(this).toggle(isShow);
    });
};


function default_search(){
    var word = $("#word").val();
    $(".info").filter(function(){
        var isIn = $(this).find(".name").text().indexOf(word) > -1;
        $(this).toggle(isIn);
    });
};


function makeCard(){

    $.each(data.학생, function(i, v){
        var s1 = v.시력.split(",")[0];
        var s2 = v.시력.split(",")[1];
        var tName = '';

        $.each(teacher, function(idx, value){
            if (v.반 == value.반) tName = value.이름;
        });

        $("#list_wrap").append(
            "<div class='info width-30 border-1px border-black border-solid radius-2 pad-1-all'>"+
                "<ul class='dt'>"+
                    "<li class='name font-bold-1 width-100 text-center' style='font-size:20px'>이름 : " + v.이름 + "</li>"+
                    "<li class='ban'>" + v.반 + "반</li>"+
                    "<li class='myteacher'>담임 : " + tName + "</li>"+
                    "<li class='t'>키 : " + v.키 + "cm</li>"+
                    "<li class='e'>시력 : 좌" + s1 + " 우" + s2 + "</li>"+
                    "<li class='w'>몸무게 : " + v.몸무게 + "kg</li>"+
                "</ul>"+
            "</div>"
        )
    });

};