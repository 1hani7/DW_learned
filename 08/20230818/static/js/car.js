// let data = [];
// let names = ["하이브리드","수소","경유","휘발유","전기"];
// let fuels = new Set();

// let res = new Object();

// async function getData(){
//     return await fetch("./연료별용도별자동차등록현황.json").then(r=>r.json());
// }

// $(async function(){
//     data = await getData();
//     console.log(data);

//     $.each(data,function(i,item){
//         fuels.add(item.DTCONT)
        
//         if(item.REG_YY in res && item.PURPOS_DIV == "비사업용" && item.REG_YY == res[item.REG_YY].연도){
//             if(item.DTCONT.indexOf(names[0])!=-1)  res[item.REG_YY].하이브리드 += Number(item.RIDNG_ODR);
//             if(item.DTCONT==names[1])  res[item.REG_YY].수소 += Number(item.RIDNG_ODR);
//             if(item.DTCONT==names[2])  res[item.REG_YY].경유 += Number(item.RIDNG_ODR);
//             if(item.DTCONT.indexOf(names[3])!=-1)  res[item.REG_YY].휘발유 += Number(item.RIDNG_ODR);
//             if(item.DTCONT==names[4])  res[item.REG_YY].전기 += Number(item.RIDNG_ODR);
//         }else if(!(item.REG_YY in res)){
//             res[item.REG_YY] = {연도:item.REG_YY,전기:Number(0),하이브리드:Number(0),휘발유:Number(0),경유:Number(0),수소:Number(0)};
//         }
//     });
    
//     console.log(res);
//     console.log(fuels);
// });


let data=new Object();

const types=["하이브리드","수소","경유","휘발유","전기"];

async function getData(){
    var temp = await fetch("./연료별용도별자동차등록현황.json").then((res)=>res.json());
    console.log(temp);
    refine(temp); // data 객체 내부를 필요한 값들로 채우는 함수
}


$( async function(){
    await getData();
    const ctx = $("#car")[0];

    // let keys = Object.keys(data);
    let years = Object.keys(data[types[0]]);
    var fuel = Object.keys(data);
    console.log(fuel);
    // const color = ["green","blue","orange","tomato","yellowgreen"]    
    // var dataset=[];
    // $.each(fuel,function(i,t){
    //     dataset.push({
    //         label:t,
    //         data:data[t],
    //         borderColor:color[i],
    //         backgroundColor:color[i],
    //     })
    // })

    new Chart(ctx,{
        type:"line",
        data:{
            labels:years,
            datasets:
            [
                {
                    label:fuel[0],
                    data:data[fuel[0]],
                    borderColor:"green",
                    backgroundColor:"green",
                    yAxisID:"수소",
                },
                {
                    label:fuel[1],
                    data:data[fuel[1]],
                    borderColor:"blue",
                    backgroundColor:"blue",
                    yAxisID:"전기",
                },
                {
                    label:fuel[2],
                    data:data[fuel[2]],
                    borderColor:"orange",
                    backgroundColor:"orange",
                    yAxisID:"하이브리드",
                },
                {
                    label:fuel[3],
                    data:data[fuel[3]],
                    borderColor:"tomato",
                    backgroundColor:"tomato",
                    yAxisID:"휘발유",
                },
                {
                    label:fuel[4],
                    data:data[fuel[4]],
                    borderColor:"yellowgreen",
                    backgroundColor:"yellowgreen",
                    yAxisID:"경유",
                },
            ],
        },
        options:{
            scales:{
                "수소":{
                    min:500,
                    max:7000,
                    ticks:{color:"green"},
                    position:"right",
                },
                "전기":{
                    min:11000,
                    max:52000,
                    ticks:{color:"blue"},
                    position:"right",
                },
                "하이브리드":{
                    min:14000,
                    max:31000,
                    ticks:{color:"orange"},
                    position:"right",
                },
                "휘발유":{
                    min:2700000,
                    max:3100000,
                    ticks:{color:"tomato"},
                    position:"right",
                },
                "경유":{
                    min:1400000,
                    max:1500000,
                    ticks:{color:"yellowgreen"},
                    position:"right",
                }
            }
        }
    });
});


function refine(temp){ // data 배열 안에 temp를 재구성해서 넣어주는 함수
    $.each(temp,function(i,c){
        var type='';

        // 작성 순서에 주의할 것*

        if( (type=include(c.DTCONT)) == '' || c.PURPOS_DIV==="사업용") return true;
        // 콜백함수의 if문의 return값이 true라면 이번 반복이 무시됨 * 중요
        // => 즉, json파일의 객체의  DTCONT의 값이 types 배열 안의 무엇과도 같지 않거나,
        // PURPOS_DIV가 사업용인, 즉 비사업용이 아닌 경우라면 이번 반복은 스킵됨
        // * false가 return되었다면 전체적인 반복 자체가 완전히 중단됨 * 중요
         
        if( !(type in data)) // type 의 값이 data 안에 key로 존재하지 않는지 확인하는 if문
            data[type]=new Object(); // 없다면, 없는 type 값으로 오브젝트를 새로 생성

        if( !( c.REG_YY in data[type]) ) // data[type] 안에 연도가 들어있지 않다면 승용차값이 들어간 객체 틀을 생성
            data[type][c.REG_YY]=Number(c.RIDNG_ODR);

        else // data[type] 안에 연도가 들어있다면 해당 연도의 value값에 승용차값 추가
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR);
        
        console.log(data[type]);
    });
    console.log(data);
}
function include(kind){
    // 이번 data 객체의 DTCONT의 값이 types 배열 안의 무언가와 같다면 해당 값을 리턴
    // 해당 값은 type이란 변수에 저장되어 조건문에 사용됨 => 이 조건문은 이번 반복을 건너뛸 것인가 결정하게 됨
    for(var i in types){
        if(kind.indexOf(types[i]) > -1)
            return types[i];
    }
    return '';
}