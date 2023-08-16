const tall = [ 161,168,174,159,183 ];
const name = [ "송은선","임민지","이상준","김선향","신상수" ]
// const avg = (arr) => arr.reduce((a,b)=>a+b)/tall.length;
let avg = tall_avg();

let coloring = [];


$("#reg_bt").click(function(){
    if( $("#tall").val() == '' || $("#name").val() == '' ){
        alert("키를 입력하세요.");
        $("#tall").val()==''?$("#tall").focus():$("#name").focus();
        return;
    }
    tall.push( Number($("#tall").val()) );
    name.push( $("#name").val() );

    chart.destroy();
    coloring = [];
    avg = tall_avg();
    colorPicker()
    draw();
    console.log(coloring);
});

let ctx = $("#bar_chart")[0].getContext('2d');
let chart = '';
avg = tall_avg();
colorPicker();
draw();

function draw(){
    chart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:name,
            datasets:[{
                label:"201호 신장 조사",
                data:tall,
                // borderWidth:5,
                backgroundColor:coloring,
                barPercentage:0.7, // 막대 너비 (퍼센티지)
                // barThickness:100, // 막대 너비 (고정px)
                borderColor:"skyblue",
                borderSkipped:"start", // start, end, middle, bottom, left, top, right
                borderRadius:5,
                // categoryPercentage:0.1,
                indexAxis:"x",
                hoverBackgroundColor:"yellowgreen", // BorderColor, BorderWidth, BorderRadius 등등 가능
                base:avg
            }]
        },
        options:{
            scales:{
                y:{min:150, max:200, ticks:{stepSize:0.5}}
            }
        }
    });
}

function tall_avg(){
    var sum = 0;
    $.each( tall, (i,t) => sum+=t );
    return sum/tall.length;
}

function colorPicker(){
    for(var i=0; i<tall.length; i++){
        tall[i]>=avg?coloring.push("#4374D9"):coloring.push("#CC3D3D");
    }
}