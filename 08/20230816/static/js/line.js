const love = [100,95,89,96,75,64,93];
const day = [10,20,50,100,200,300,365];

const ctx = $("#line1")[0];

let 겸지={
    label:"사랑지수",
    data:love,
    borderColor:'pink',
    backgroundColor:'mistyrose',
    tension:0,
    // fill:true,
    borderCapStyle:"butt", // butt, square, round
    borderCapWidth:30,
    pointStyle:"round",
    pointBorderWidth:20,
    pointHoverBorderColor:"red",
    pointHoverBorderWidth:1,
    pointWidth:20,
    backgroundColor:'mistyrose',
    // showLine:false
}
let 수향 = {
    label:"사랑지수",
    data:[100,100,90,80,70,30,20],
    borderColor:"hotpink",
    backgroundColor:'mistyrose',
    pointStyle:"round",
    pointBorderWidth:20,
}


// 객체 형식으로 따로따로 분리해서 만들기
// 하나에 다 때려박는 형식은 관리가 불편할 수 있음

const loveData={
    labels:day,
    datasets:[ 겸지,수향 ]
}

const chartOption={
    plugins:{
        title:{display:true, text:"기념일에 따른 사랑지수"}
    },
    scales:{
        y:{
            // stacked:true
        }
    }
}

new Chart(ctx,{
    type:"line",
    data:loveData,
    options:chartOption
});