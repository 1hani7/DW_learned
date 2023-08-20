const category=[
    ["급여","캐시백","복권","환급금","기타수익","이자"],
    ["교통","통신비","외식","주유","연애","문화생활","쇼핑"]
]

let ctx1 = "", ctx2 = "", pi1='', pi2='';
const income=[]; // 수입 money 저장 배열
const expen=[]; // 지출 money 저장 배열
const expen2=[(Math.floor(Math.random()*100))*1000,(Math.floor(Math.random()*100))*1000,(Math.floor(Math.random()*100))*1000];
console.log(expen2)

$(function(){
    ctx1 = $("#pi1")[0]; // 첫번째 캔버스
    ctx2 = $("#pi2")[0]; // 두번째 캔버스
// 머니 배열 초기화
for(var i=0; i<category[0].length; i++) income.push((10-i)*10000);
for(var i=0; i<category[1].length; i++) expen.push((Math.floor(Math.random()*100))*1000);
income_pi();
expen_pi();

    $(".labels").click(function(){
        if( $(this).hasClass("choice") ) return;
        $(".labels").toggleClass("choice");
        $(".input_wrap").toggle();
    });

    $.each(category, (i, c)=>{
        $.each(category[i], function(k,t){
            $(".category").eq(i).append("<option value='"+i+"-"+k+"'>"+t+"</option>")
        });
    });

   $("#income_bt").click(income_chart); // 수입 등록버튼 차트 그리기
   $("#expen_bt").click(expen_chart); // 지출 등록버튼 차트 그리기
});

function income_chart(){
    if($("#income_money").val()==''){
        alert("수입 금액을 입력해주세얌");
        $("#income_money").focus(); return;
    }
    var cidx = $("#income_category").val().split("-");
    income[cidx[1]] += parseInt($("#income_money").val());
    if(pi1 != '') pi1.destroy();
    income_pi();
}

function expen_chart(){
    if($("#expen_money").val()==''){
        alert("지출 금액을 입력해주세얌");
        $("#expen_money").focus(); return;
    }
}

const colors = ["#FF3B3B","#FF80BD","#FF006F","#FFBE30","#ffd782","#ff3f92"];

function income_pi(){
    pi1 = new Chart(ctx1,{
        plugins:[ChartDataLabels],
        type : "pie",
        data : {
            labels:category[0],
            datasets:[{
                label : "수입",
                data : income,
                backgroundColor:colors,
                borderAlign:"center", // center, inner
                borderWidth:2,
                borderColor:"firebrick",
                borderDash:[5,5], // [선의 길이 , 선의 간격]
                borderDashOffset:2, // 테두리 갯수를 지정
                rotation:0, // 기울기
            }],
        },
        options:{
            plugins:{
                datalabels:{
                    formatter:function(value,context){
                        var idx = context.dataIndex;
                        var lb = context.chart.data.labels[idx];
                        var total = context.chart.getDatasetMeta(0).total;
                        
                        return Math.round(value/total*100)+"% "+lb+" "+value.toLocaleString()+"원";
                    },
                    color:"black",
                    align:"center", // start, end, center, right, left, bottom, top
                    anchor:"center", // center, start, end
                    font:{
                        size:"13px",
                    },
                },
                labels:{
                    render:"label",
                    fontSize:11,
                    fontColor:"red",
                }
            }
        }
    });
}

const colors2 = ["#FF3B3B","#FF80BD","#FF006F","#FFBE30","#ffd782","#ff3f92","#c681ee"];

function expen_pi(){
    pi2 = new Chart(ctx2,{
        plugins:[ChartDataLabels],
        type:"doughnut",
        data:{
            labels:category[1],
            datasets:[{
                label:category[1].slice(0,4),
                data:expen.slice(0,4),
                backgroundColor:colors2,
                borderWidth:0,
                borderWidth:3,
                borderColor:"firebrick",
                ratation:0,
            },{
                data:expen2,
                label:category[1].slice(4,7),
                backgroundColor:colors,
                borderWidth:0,
                borderWidth:3,
                borderColor:"firebrick",
                rotation:0,
            }]
        },
        options:{
            plugins:{
                datalabels:{
                    formatter:function(value,context){
                        var idx = context.dataIndex;
                        var lb = context.chart.data.labels[idx];
                        var total = context.chart.getDatasetMeta(0).total;
                        
                        return Math.round(value/total*100)+"% "+lb+" "+value.toLocaleString()+"원";
                    },
                    color:"black",
                    align:"center", // start, end, center, right, left, bottom, top
                    anchor:"center", // center, start, end
                    font:{
                        size:"13px",
                    },
                },
            }
        }
    })
}