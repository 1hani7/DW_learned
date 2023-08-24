let house=new Object();

let 수입정리 = [];
let 지출정리 = [];

let chart1 = '';
let chart2 = '';


const incomeColor = ["#ADC8FF","#84A9FF","#6690FF","#3366FF","#254EDB"];
const expendColor = ["#FFCBA9","#FFA77E","#FF855D","#FF4C28","#DB2E1D","#B71614","#930C15"];


async function getData(){
    var temp = await fetch("./static/data/test6.json").then(res=>res.json()).then(r=>r);
    return temp;
}

// ============================================================//

$(async function(){
    
   
    $(".icon").click(function(){
        $("#outer_bt").toggle(500);
        $("#side").fadeToggle(500);
    });

    $("#darkBg").click(function(){
        $("#outer_bt").toggle(500);
        $("#side").fadeOut(500);
    });


    house = await getData();
    console.log(house);

    titleOn();

    // 수입 분류
    var temp = new Set();
    for(var i in house.수입){
        temp.add(house.수입[i].분류);
    }
    let 수입 = Array.from(temp);


    // 지출 분류
    var temp = new Set();
    for(var i in house.지출){
        temp.add(house.지출[i].분류);
    }
    let 지출 = Array.from(temp);

    makeCards();

    $("#word").on("keyup", search);
    $("input[name=category]").change(search);
    $("#money").on("keyup", search);

    $("#showList").click(function(){
        $("#resChart").hide();
        $("#expendList").fadeIn(500);
        $("#incomeList").fadeIn(500);
    });


    refine(house, 수입, 지출);

    $("#showChart").click(function(){
        $("#expendList").hide();
        $("#incomeList").hide();
        $("#resChart").fadeIn(500);
        if( chart1 != '' || chart2 !='' ){
            chart1.destroy(); chart2.destroy();
        }
        setChart(수입, 지출);
    });
});

// ============================================================//


function refine(data, 수입, 지출){
    수입정리 = new Array(수입.length);
    지출정리 = new Array(지출.length);

    수입정리.fill(0); 지출정리.fill(0);

    $.each(data.수입, function(i,item){
        for( var i in 수입 ){
            if( item.분류 === 수입[i] ) 수입정리[i]+=Number(item.금액);
        }
    });
    $.each(data.지출, function(i,item){
        for( var i in 지출 ){
            if( item.분류 === 지출[i] ) 지출정리[i]+=Number(item.금액);
        }
    });
    console.log(수입정리, 지출정리)
}


function setChart(수입, 지출){

    const ctx = $("#bar")[0];
    const ctx2 = $("#bar2")[0];

    chart1 = new Chart(ctx,{
        plugins:[ChartDataLabels],
        type:"doughnut",
        data:{
            labels:수입,
            datasets:[
                {
                    label:"수입",
                    backgroundColor:incomeColor,
                    data:수입정리,
                    borderWidth:0.5,
                    borderColor:"#0C3677",
                },
            ]
        },
        options:{
            plugins:{
                datalabels:{
                    formatter:function(v, c){
                        var t = c.chart.getDatasetMeta(0).total;
                        
                        return Math.round(v/t*100)+"%"
                    },
                    color:"white",
                    font:{
                        size:"17px",
                    }
                }
                ,
                title:{
                    display:true,
                    text:"수입"
                }
            }
        }
    })

    chart2 = new Chart(ctx2,{
        plugins:[ChartDataLabels],
        type:"doughnut",
        data:{
            labels:지출,
            datasets:[
                {
                    label:"지출",
                    backgroundColor:expendColor,
                    data:지출정리,
                    borderWidth:0.5,
                    borderColor:"#7A0717",
                },
            ]
        },
        options:{
            plugins:{
                datalabels:{
                    formatter:function(v, c){
                        var t = c.chart.getDatasetMeta(0).total;
                        
                        return Math.round(v/t*100)+"%"
                    },
                    color:"white",
                    font:{
                        size:"17px",
                    }
                    
                },
                title:{
                    display:true,
                    text:"지출"
                }
            }
        }
    })
}


function makeCards(){

    $.each(house.지출, function(i, val){
        $("#expendList").append(
            "<div class='box red'><ul>"+
            "<li class='c'><h4>"+val.분류+"</h4></li>"+
            "<li class='mo'><u>- "+Number(val.금액).toLocaleString()+"</u></li>"+
            "<li>"+val.내용+"</li>"+
            "<ul></div>"
        );
    });

    $.each(house.수입, function(i, val){
        $("#incomeList").append(
            "<div class='box blue'><ul>"+
            "<li class='c'><h4>"+val.분류+"</h4></li>"+
            "<li class='mo'><u>+ "+Number(val.금액).toLocaleString()+"</u></li>"+
            "<li>"+val.내용+"</li>"+
            "<ul></div>"
        );
    });

    $("#expendList").css("border-left","7px dotted #ddd");
}


function search(){
    let word = $("#word").val();
    let money = Number($("#money").val());
    let C_arr = new Array();

    
    $("input[name='category']:checked").each(function(){
        C_arr.push($(this).val())
    });

    $(".box").filter(function(){
        let isShow = true;
        
        if( word != '' ){
            if( $(this).text().indexOf(word) == -1 )
                isShow = false;
        }

        if( C_arr.length != 0 ){
            for(var i in C_arr){
                if( $(this).find(".c").text().indexOf(C_arr[i]) > -1 ){
                    isShow = true;
                    break;
                }
                else isShow = false;
            }
        }

        if( money != '' ){
            if( $(this).find(".mo").text().replace(/\D/g, '') > money )
                                                  // ㄴ 문자열 제거하는 정규표현식
                isShow = false;
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