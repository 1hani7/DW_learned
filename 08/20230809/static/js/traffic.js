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

    

    // ctx.moveTo(30,10);
    // ctx.lineTo(30,70);
    // ctx.lineTo(80,70);
    // ctx.lineTo(80,10);
    // ctx.lineTo(80,35);
    // ctx.lineTo(30,35);
    // ctx.stroke();

    // ctx.moveTo(110,5);
    // ctx.lineTo(110,75);
    // ctx.lineTo(110,45);
    // ctx.lineTo(135,45);
    // ctx.stroke();

    // ctx.fillStyle="#b281ff";
    // ctx.fillRect(10, 10, 50, 33.5);

    // ctx.strokeRect(50,85,60,33.5)

    // ctx.beginPath();
    // ctx.strokeStyle="red";
    // ctx.fillStyle="#b281ff";
    // ctx.arc(200,200,50,0,2.8*Math.PI,true);
    // ctx.stroke();
    // ctx.fill();


    // ctx.font="30px Arial";
    // ctx.fillStyle="pink";
    // ctx.strokeStyle="hotpink";
    // ctx.fillText("눈빛교환", 200,50);
    // ctx.strokeText("구교환", 215,90);


    // // Gradient
    // var grd=ctx.createLinearGradient(10,0,100,0);
    // // createConicGradient , createRadialGradient
    // grd.addColorStop(0,"blue");
    // grd.addColorStop(0.9,"brown");
    // grd.addColorStop(1,"white");
    // ctx.fillStyle=grd;
    // ctx.fillRect(0,300,200,100)

});