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
            "<a href='"+""+"'><div class='picks'>"+
            "<div class='picksImg_box'><img class='picksImg' alt='picksImg'></div>"+
            "<h4>"+val.제품명+"</h4>"+
            "<div>"+val.제품부제명+"</div>"+
            "<div>"+val.상품설명+"</div>"+
            "<div>"+val.상품평점+"</div>"+
            "</div></a>"
        )
    });
    console.log(picks);
}