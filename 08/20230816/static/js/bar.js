const tall = [ 161,168,174,159 ];
const name = [ "송은선","임민지","이상준","김선향" ]
const weight = [ 43,59,72,46 ];
let avg = tall_avg();


$("#reg_bt").click(function(){
    if( $("#tall").val() == '' || $("#name").val() == '' ){
        alert("키를 입력하세요.");
        $("#tall").val()==''?$("#tall").focus():$("#name").focus();
        return;
    }
    if($("#weight").val()==''){
        alert("몸무게를 입력하세요.");
    }
    tall.push( Number($("#tall").val()) );
    name.push( $("#name").val() );
    weight.push(Number($("#weight").val()));

    chart.destroy();
    avg = tall_avg();
    draw();
});

let ctx = $("#bar_chart")[0].getContext('2d');
let chart = '';
avg_color();
draw();

function draw(){
    chart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:name,
            datasets:[{
                label:["201호 신장 조사"],
                data:tall,
                borderWidth:0,
                backgroundColor:avg_color(),
                indexAxis:"y"
            },
            {
                label:"201호 무게 조사",
                data:weight,
                borderWidth:0,
                backgroundColor:"skyblue",
                indexAxis:"y"
            }
        ]
        },
        // options:{
        //     scales:{
        //         y:{min:150, max:200, ticks:{stepSize:0.5}}
        //     }
        // }
    });
}

function tall_avg(){
    var sum = 0;
    $.each( tall, (i,t) => sum+=t );
    return sum/tall.length;
}

function avg_color(){
    let a = [];
    $.each(tall,(i, item)=> item >= avg?a.push("#4374D9"):a.push("#CC3D3D"));
    return a;
}

// barPercentage:0.5, // 막대 너비 (퍼센티지)
// barThickness:100, // 막대 너비 (고정px)
// borderColor:"skyblue",
// borderSkipped:"start", // start, end, middle, bottom, left, top, right
// borderRadius:100,
// categoryPercentage:0.1,
// indexAxis:"x",
// hoverBackgroundColor:"yellowgreen", // BorderColor, BorderWidth, BorderRadius 등등 가능
// base:avg