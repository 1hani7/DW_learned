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
    // console.log("https://data.myhome.go.kr/rentalHouseList?ServiceKey="+sKey+"&brtcCode="+data.시도[s]+"&signguCode="+g);
    var t = await fetch("https://data.myhome.go.kr:443/rentalHouseList?ServiceKey="+sKey+"&brtcCode="+data.시도[s]+"&signguCode="+g).then(res=>res.json());
    return t;
}


$(async function(){
    data = await getRental();
    
    shi_keys = Object.keys(data.시도);


    makeOptions();

    $("#gu").change(async function(){
        s = $("#si").val();
        g = $("#gu").val();
        data2 = await getData();
    })
});



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

