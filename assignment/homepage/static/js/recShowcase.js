async function getData2(){
    var tmp = await fetch("./static/data/picks.json").then(r=>r.json()).then(r=>r);
    picks = tmp;
}

function recshowCaseSet(id){
    var t = 0;
    $.each(picks,function(i,val){
        if(t >= 9){return false;}
        t+=1;
        $(id).append(
            "<a href='"+""+"'><div class='picks box-shadow-out'>"+
            "<div class='picksImg_box'>"+
            "<img class='picksImg radius-2' alt='picksImg'"+
            "src='"+val.url+"'>"+
            "</div>"+
            "<h4 style='border-bottom:4px double gray'>"+val.제품명+"</h4>"+
            "<div class='font-gray font-bold-1'>"+val.제품부제명+"</div>"+
            "<div>"+val.상품설명+"</div>"+
            "<h6>"+val.상품평점+"</h6>"+
            "</div></a>"
        )
    });
    // console.log(picks);
}