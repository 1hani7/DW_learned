let data_list = new Object; // json 데이터 저장할 전역변수

async function getData(){
    var data= await fetch("./전국건강증진센터표준데이터.json").then(function(res){ return res.json();}).then(function(r){return r;});
    console.log(data.records);
    return data.records;
}


$(async function(){

    $("#searchWord").focus();

    $(".filterMore").click(function(){
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
        $(".filterDetail").slideToggle();
    });
    
    data_list = await getData();
    view(data_list);
    
    $("#searchWord").on("keyup",function(){
        const word = $(this).val();
        $(".item_short").filter(function(){
            var addr = $(this).find(".item_detail").children("li:eq(1)");
            var task = $(this).find(".item_detail").children("li:eq(2)");
            var hasAddr = addr.text().indexOf(word) > -1;
            var hasTask = task.text().indexOf(word) > -1;

            $(this).toggle( hasAddr || hasTask );
            // $(this).toggle($(this).find('li:eq(1), li:eq(2)').text().indexOf(word) > -1);
        });
    });

    $(".sort_obj").click(function(){
        $(this).toggleClass("asc");
        $(this).toggleClass("desc");
        const name = $(this).data("name");
        const sort_type = {
            centerName : "건강증진센터명",
            addr : "소재지도로명주소",
            nurseCount : "간호사수",
            doctorCount : "의사수"
        }
        var has = -1;

        if($(this).hasClass("asc")) has=1;

        $.getJSON("./전국건강증진센터표준데이터.json",function(data){
            const data_list = data.records;
    
            data_list.sort(function(a,b){
                if( a[sort_type[name]] > b[sort_type[name]] ) return 1*has;
                if( a[sort_type[name]] < b[sort_type[name]] ) return -1*has;
                if( a[sort_type[name]] == b[sort_type[name]] ) return 0*has;
            });

            view(data_list);
        });
    });
});



function view(data_list){
    $("#section").empty();
    $.each(data_list, function(i, item){
        $("#section").append(
"<div class='item_short'><div class='item_image'>"+
"<img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
"<div class='item_detail_box'><ul class='item_detail'>"+
"<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
"<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
"<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>"
        )
    });
}