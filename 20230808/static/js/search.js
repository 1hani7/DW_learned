let data_list = new Object;

async function getData(){
    var data = await fetch("https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?page=1&perPage=500&serviceKey=ymqZ2e7%2FnpnUWYCS9B9Zv65We7NUOtTOzGLwPyNlFnegW4cGrvvzxIOnHaleT%2F3JTcgci5x%2FcdQcpdCkBVBgwA%3D%3D").then(function(res){ return res.json();}).then(function(r){return r;});
    // console.log(data.records);
    return data.data;
}


$(async function(){
    // console.log(getData())

    data_list = await getData();
    draw(data_list);


    $("input[type=checkbox]").change(function(){
        search();
    });
    $("input[type=radio]").change(function(){
        search();
    });

});


function search(){
    let sort=new Array();
    let amount=new Array();
    let year=new Array();
    $("input[name=sort]:checked").each(function(){sort.push($(this).val());});
    $("input[name=amount]:checked").each(function(){amount.push($(this).val());});
    $("input[name=year]:checked").each(function(){year.push($(this).val());});

    $(".item_short").filter(function(){
        var isShow=true;
        var idx = $(this).index();

        if(sort.length!=0 && isShow){ // 
            if(sort.indexOf(data_list[idx].어초종류)== -1) isShow = false;
        }

        if(amount.length!=0 && isShow){
            isShow = false;
            if(Number(data_list[idx].어초확인수량) >= Number(amount[0])) isShow=true;
            else isShow = false;
        }

        if(year.length!=0 && isShow){
            isShow = false;
            if(Number(data_list[idx].설치년도) >= Number(year[0]) && Number(data_list[idx].설치년도) < Number(year[0])+100) isShow=true;
            else isShow = false;
        }

        $(this).toggle( isShow );
    });
}


function draw(data_list){
    $("#list").empty();
    $.each(data_list, function(i, item){
        $("#list").append(
"<div class='item_short'>"+
"<div class='item_detail_box'><ul class='item_detail'>"+i+"번 자료"+
"<li> 어초 종류 - "+item.어초종류+"</li><li>어초확인수량 - "+item.어초확인수량+"</li>"+
"<li>설치년도 - "+item.설치년도+"</li></ul></div></div>"
        );
    });
}