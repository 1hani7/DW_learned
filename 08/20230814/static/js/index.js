// 체크박스와 인풋 태그에만 이벤트
// select에 들어갈 option은 js로
let data = [];
let data2 = [];
let shi_keys = {};
let sKey = "ymqZ2e7%2FnpnUWYCS9B9Zv65We7NUOtTOzGLwPyNlFnegW4cGrvvzxIOnHaleT%2F3JTcgci5x%2FcdQcpdCkBVBgwA%3D%3D"


async function getRental(){
    var temp = await fetch("./rental.json").then(res=>res.json());
    return temp;
}

async function getData(){
    var t = await fetch("http://krdrive.ipdisk.co.kr:8000/test/aaa.php?ServiceKey="+sKey+
                       "&brtcCode="+data.시도[s]+"&signguCode="+g+"&numOfRows=500").then(res=>res.json());
    return t;
}


$(async function(){
    data = await getRental();
    
    shi_keys = Object.keys(data.시도);


    makeOptions();

    s = $("#si").val();
    g = $("#gu").val();
    data2 = await getData();
    data2 = data2.hsmpList;
    
    $("#gu").change(async function(){
        s = $("#si").val();
        g = $("#gu").val();
        data2 = await getData();
        data2 = data2.hsmpList;
        printResult();
    })
    $("#si").change(async function(){
        s = $("#si").val();
        g = $("#gu").val();
        data2 = await getData();
        data2 = data2.hsmpList;
        printResult();
    })
    $("input[type=checkbox]").change(function(){printResult();});
    $("input[type=text]").on("keyup",function(){printResult();});
});

function printResult(){
    let rentgtn_val = $("#rentgtn").val();
    let rntchrg_val = $("#rntchrg").val();
    const prvusear = new Array();
    const housetynm = new Array();
    

    $("input[name=prvusear]:checked").each(function(){prvusear.push($(this).val())});
    $("input[name=housetynm]:checked").each(function(){housetynm.push($(this).val())});


    $("#result").empty();
    $.each(data2, function(i, item){
        $("#result").append(
    "<tr class='listLine'><td>"+item.rnAdres+"</td><td>"+item.competDe+"</td><td>"+item.suplyPrvuseAr+
    "</td><td>"+item.suplyCmnuseAr+"</td><td>"+item.houseTyNm+"</td><td>"+item.parkngCo+
    "</td><td>"+item.bassRentGtn+"</td><td>"+item.bassMtRntchrg+"</td><td>"+item.hshldCo+"</td></tr>"
        );
    })

    $(".listLine").filter(function(){
        let isShow = true;
        var idx = $(this).index();

        if(housetynm.length!=0 && isShow){
            if(housetynm.indexOf(data2[idx].houseTyNm)==-1) isShow=false;
        }

        if(rentgtn_val.length!=0 && isShow){
            if(Number(data2[idx].bassRentGtn) >= Number(rentgtn_val)) isShow=true;
            else isShow = false;
        }

        if(rntchrg_val.length!=0 && isShow){
            if(Number(data2[idx].bassMtRntchrg) >= Number(rntchrg_val)) isShow=true;
            else isShow = false;
        }

        if(prvusear.length!=0 && isShow){
            if(prvusear.indexOf('1')>-1 && data2[idx].suplyPrvuseAr <= 20) isShow=true;
            else if(prvusear.indexOf('2')>-1 && data2[idx].suplyPrvuseAr >= 20 && data2[idx].suplyPrvuseAr <= 40) isShow=true;
            else if(prvusear.indexOf('3')>-1 && data2[idx].suplyPrvuseAr >= 40 && data2[idx].suplyPrvuseAr <= 60) isShow=true;
            else if(prvusear.indexOf('4')>-1 && data2[idx].suplyPrvuseAr >= 60) isShow=true;
            else isShow=false;
        }

        $(this).toggle(isShow);
    })

};



function makeOptions(){
    $.each(shi_keys,function(i, item){
        $("#si").append(
            `<option value='${item}'>${item}</option>`
        )
        $.each(data["군구"]["서울특별시"],function(i, item){
            $("#gu").append(
                `<option value='${item}'>${i}</option>`
                )
        })
    });

    $("#si").change(async function(){
        s = $("#si").val();
        $("#gu").empty()
        $.each(data["군구"][s],function(i, item){
            $("#gu").append(
                `<option value='${item}'>${i}</option>`
                )
        })
    });
};

