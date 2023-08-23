let house=new Object();

async function getData(){
    var temp = await fetch("./static/data/test6.json").then(res=>res.json()).then(r=>r);
    return temp;
}

$(async function(){
   
    $("#icon").click(function(){
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });


    house = await getData();
    console.log(house);

    var temp = new Set();
    for(var i in house.수입){
        temp.add(house.수입[i].분류);
    }
    let 수입 = Array.from(temp);
    console.log(수입)

    var temp = new Set();
    for(var i in house.지출){
        temp.add(house.지출[i].분류);
    }
    let 지출 = Array.from(temp);
    console.log(지출)

    titleOn();

    makeCards();

    $("#word").on("keyup", search);
    $("input[name=category]").change(search);
    $("#money").on("keyup", search);

});


function makeCards(){
    $.each(house.지출, function(i, val){
        $("#expendList").append(
            "<div class='box red'><ul>"+
            "<li class='c'><h4>"+val.분류+"</h4></li>"+
            "<li class='mo'><u>- "+Number(val.금액).toLocaleString()+"</u></li>"+
            "<li>"+val.내용+"</li>"+
            "<ul></div"
        );
    });

    $.each(house.수입, function(i, val){
        $("#incomeList").append(
            "<div class='box blue'><ul>"+
            "<li class='c'><h4>"+val.분류+"</h4></li>"+
            "<li class='mo'><u>+ "+Number(val.금액).toLocaleString()+"</u></li>"+
            "<li>"+val.내용+"</li>"+
            "<ul></div"
        );
    });
}

function search(){
    let word = $("#word").val();
    let money = Number($("#money").val());
    let C_arr = new Array();

    console.log($(this).find(".mo").text().replace(/\D/g, ''))
    
    $("input[name='category']:checked").each(function(){
        C_arr.push($(this).val())
    })

    $(".box").filter(function(){
        let isShow = false;
        console.log();
        
        if( word != '' ){
            if( $(this).text().indexOf(word) > -1 )
                isShow = true;
        }else if( word != '' )
                isShow = true;

        if( C_arr.length != 0 ){
            for(var i in C_arr){
                if( $(this).find(".c").text().indexOf(C_arr[i]) > -1 )
                    isShow = true;
            }
        }

        if( money != '' ){
            if( $(this).find(".mo").text().replace(/\D/g, '') <= money )
                                                  // ㄴ 문자열 제거하는 정규표현식
                isShow = true;
        }

        $(this).toggle(isShow);
    });
}

function titleOn(){
    $("#title").append(
        "<h1>"+house.작성자+"</h1>"+
        "<p>"+house.최근작성일+"</p>"
    )
}