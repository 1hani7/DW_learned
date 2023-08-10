let fire_stat = new Object();
let color = ["#D42013","#363D7A","#FFB240","#92DCE0","#2E7A5C",
             "#FFEC5C","#AF9CFF","#781200","#FFC7FA","#FF6D77","#D42013","#363D7A","#FFB240"]
let ctx='';

let keys = '';
let val = [];

let total = 0;
let bike = 0;

async function getData(){
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    return temp.body.items;
}

$(async function(){
    

    data = await getData();
    console.log(data)
    $.each(data, function(i, item){
        total+=Number(item.gutCo); // 전체 사고수
        bike+=item.rlifAcdAsmCdNm==="오토바이사고"?Number(item.gutCo):0;
        if(item.rsacGutFsttOgidNm in fire_stat){ // 배열 안에 객체 key가 들어있는가
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = {출동건수:Number(item.gutCo), 
                                                 환자수:Number(item.trnfPcnt)};
        }
    });

    keys = Object.keys(fire_stat).sort(); // key만 담음
    // val = Object.values(fire_stat);
    for(var i=0; i<keys.length; i++){
        val.push(fire_stat[keys[i]])
    }
    // console.log(fire_stat, keys, val)

    draw();
    draw2();
});

let cnt = 0;
let add = 0;

function draw(){

    let oldX = oldY = 0;

    ctx = $("#graph")[0].getContext("2d");

    ctx.strokeRect(1200,50,200,60);
    ctx.moveTo(1230,70);
    ctx.lineTo(1290,70);
    ctx.stroke();
    let grd = ctx.createLinearGradient(1230,85,1290,100);
    grd.addColorStop(0,"#D42013");
    grd.addColorStop(0.5,"#FFB240");
    grd.addColorStop(1,"#FF6D77");
    ctx.fillStyle=grd;
    ctx.fillRect(1230,85,60,15);
    ctx.fillStyle="#000";
    ctx.fillText("환자수",1300,73);
    ctx.fillText("출동건수",1300,95);

    ctx.fillStyle="#000";
    ctx.font="15px Arial";

    for(var i=0; i<keys.length; i++){
        ctx.fillStyle=color[i];
        for(var j=0; j<=val[i].출동건수; j++){
            ctx.fillRect(50+add, 700-1*j, 70, 1);
        }

        if(oldX==0 && oldY == 0){
            oldX=85+add;
            oldY=700-(val[i].환자수);
        }else{
            ctx.moveTo(oldX, oldY);
            ctx.lineTo(85+add,700-(val[i].환자수));
            ctx.stroke();
    
            oldX=85+add;
            oldY=700-(val[i].환자수);
        }

        ctx.beginPath();
        ctx.arc(85+add,700-(val[i].환자수),7,0,2*Math.PI);
        ctx.fillStyle="brown";
        ctx.fill();


        ctx.fillStyle="black";
        ctx.fillText(keys[i],50+110*i,750);

        add+=110.5;
    }
}

const draw2 = () =>{

    ctx2 = $("#pi")[0].getContext("2d");

    var pc = 1/(total/bike);
    var bike_deg = 270+360*pc;
    bike_deg = Math.round((bike_deg>360?bike_deg-360:bike_deg)*100)/100;

    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,270*Math.PI/180,bike_deg*Math.PI/180,false);
    ctx2.fillStyle="skyblue";
    ctx2.fill();

    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,bike_deg*Math.PI/180,270*Math.PI/180,false);
    ctx2.fillStyle="pink";
    ctx2.fill();

    ctx2.fillStyle="#000";
    ctx2.font="30px Arial";
    ctx2.fillText(Math.round(pc*1000)/10+"%",450,200);
}