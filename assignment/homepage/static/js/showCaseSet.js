async function getData(){
    var tmp = await fetch("./static/data/products.json").then(r=>r.json()).then(r=>r);
    data = tmp;
}

function showCaseSet(id){
    var t = 0;
    $.each(data,function(i,val){
        if(t >= 6){return false;}
        t+=1;
        $(id).append(
            "<a href='"+""+"'"+
            "class='showCase inline-block box-shadow-out'>"+
            "<div class='showCaseImg_box'>"+
            "<img class='showCaseImg' alt='showCaseImg'"+
            "src='"+val.url+"'>"+
            "</div>"+
            "<h4 style='border-bottom:4px double gray'>"+val.제품명+"</h4>"+
            "<div>"+val.제품부제명+"</div>"+
            "<div>"+val.상품설명+"</div>"+
            "<h6>"+val.상품평점+"</h6>"+
            "</a>"
        )
    });
    // console.log(data);
}