let data = []; // json데이터 저장할 변수
let fire_stat = new Object();


async function getData(){
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    // console.log(temp.body.items)
    return temp.body.items;
}

$(async function(){
    data = await getData();
    $.each(data,function(i, item){
        if(item.rsacGutFsttOgidNm in fire_stat){ // 배열 안에 객체 key가 들어있는가
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = {출동건수:Number(item.gutCo), 
                                                 환자수:Number(item.trnfPcnt)};
        }
    });
    console.log(fire_stat);
    var keys = Object.keys(fire_stat); // key만 담음

    $.each(keys,function(i,key){
        var td1 = "";
        var td2 = "<tr>";
        for(var i=1; i<fire_stat[key].출동건수; i+=5)
            td1+="<td class='red' width=5></td>";
        for(var i=1; i<fire_stat[key].환자수; i+=5)
            td2+="<td class='blue' width=5></td>";
        td2+="<td class='rate'>"+fire_stat[key].환자수+"명 </td>"+"</tr>";

        $("#gp").append("<tr><td class='name' rowspan='2'>"+key+"</td>"+td1+"<td class='rate'>"+fire_stat[key].출동건수+"명 </td>"+"</tr>");
        $("#gp").append(td2);

        // console.log(fire_stat[key].출동건수)
    });

    var cv = $("#Canvas")[0];
    var ctx = cv.getContext("2d");

    $("#rect").click(function(){
        ctx.fillStyle="pink";
        ctx.fillRect(10,10,100,150);
    });

    $("#circle").click(()=>{
        ctx.beginPath();
        ctx.fillStyle="orange";
        ctx.strokeStyle="black";
        ctx.arc(60,100,50,0,2*Math.PI);
        // ctx.stroke();
        ctx.fill();
    })

    // var step1 = 1;
    // var step2 = 1;
    // $("#move").click(()=>{
    //     var x = Math.floor(Math.random()*400+50);
    //     var y = Math.floor(Math.random()*400+50);
    //     setInterval(function(){
    //         x+=step1;
    //         y+=step2;
    //         ctx.clearRect(0,0,500,500);
    //         ctx.beginPath();
    //         ctx.arc(x,y,50,0,2*Math.PI);
    //         ctx.fillStyle="orange";
    //         ctx.fill();
    //         if(x>=450 || x<=50) {
    //             step1 *=  -1;
    //         }
    //         if(y>=450 || y<=50) {
    //             step2 *=  -1
    //         }
    //     },1)
    // });

    var step1 = 2;
    var step2 = 2;
    $("#move").click(()=>{
        var x = Math.floor(Math.random()*400+50);
        var y = Math.floor(Math.random()*400+50);
        setInterval(function(){
            var ran = Math.floor(Math.random()*2)+1;
            x+=step1;
            y+=step2;
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();
            ctx.arc(Math.abs(x),Math.abs(y),50,0,2*Math.PI);
            ctx.fillStyle="orange";
            ctx.fill();
            if(x>=450) {
                x=-450;
                step2 = ran;
            }
            if(Math.abs(x)<=50) {
                x=50;
                step2 = ran;
            }
            if(y>=450) {
                y=-450;
            }
            if(Math.abs(y)<=50) {
                y=50;
            }
        },1)
    });
});

function step_ch(name){
    name = Math.floor(Math.random()*2)+1;
}