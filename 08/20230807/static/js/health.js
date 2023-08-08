let data_list = new Object; // json 데이터 저장할 전역변수

async function getData(){
    var data = await fetch("./전국건강증진센터표준데이터.json").then(function(res){ return res.json();}).then(function(r){return r;});
    // console.log(data.records);
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
        search();
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

        data_list.sort(function(a,b){
            if( a[sort_type[name]] > b[sort_type[name]] ) return 1*has;
            if( a[sort_type[name]] < b[sort_type[name]] ) return -1*has;
            if( a[sort_type[name]] == b[sort_type[name]] ) return 0*has;
        });
        view(data_list);
        // $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        //     const data_list = data.records;
        // });
    });


    /* 상세검색 부분 */
    $("input[type=checkbox]").change(function(){
        search();
    });
    $("input[type=radio]").change(function(){
        search();
    });

});


function search(){
    const word = $("#searchWord").val();
    let classify = new Array();
    let location = new Array();
    let task = new Array();
    let nurse = new Array();
    let social = new Array();
    $("input[name=classify]:checked").each(function(){classify.push($(this).val());});
    $("input[name=location]:checked").each(function(){location.push($(this).val());});
    $("input[name=task]:checked").each(function(){task.push($(this).val());});
    $("input[name=nurse]:checked").each(function(){nurse.push($(this).val());});
    $("input[name=social]:checked").each(function(){social.push($(this).val());});


    $(".item_short").filter(function(){
        var isShow=true;
        var idx = $(this).index();

        if(word!=''){
            var addr = $(this).find(".item_detail").children("li:eq(1)");
            var task1 = $(this).find(".item_detail").children("li:eq(2)");
            var hasAddr = addr.text().indexOf(word) > -1;
            var hasTask = task1.text().indexOf(word) > -1;
            isShow = hasAddr || hasTask;
        }

        if(classify.length!=0 && isShow){ // 
            if(classify.indexOf(data_list[idx].건강증진센터구분)== -1) isShow = false;
        }

        if(location.length!=0 && isShow){ // 주소 내용
            isShow = false;
            for(var i=0; i<location.length; i++){
                if(data_list[idx].소재지도로명주소.indexOf(location[i]) > -1){
                    isShow=true; break;
                }
            }
        }

        if(task.length!=0 && isShow){ // 업무내용
            isShow = false;
            for(var i=0; i<task.length; i++){
                if(data_list[idx].건강증진업무내용.indexOf(task[i]) > -1){
                    isShow=true; break;
                }
            }
        }


        if(nurse.length!=0 && isShow){
            isShow = false;
            if(Number(data_list[idx].간호사수) >= Number(nurse[0])) isShow=true;
            else isShow = false;
        }

        if(social.length!=0 && isShow){
            isShow = false;
            if(Number(data_list[idx].사회복지사수) >= Number(social[0])) isShow=true;
            else isShow = false;
        }

        $(this).toggle( isShow );
    });
}


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
        );
    });
};