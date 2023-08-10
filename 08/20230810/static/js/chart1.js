let ctx='';
let color = ["#D42013","#363D7A","#FFB240","#92DCE0","#2E7A5C",
             "#FFEC5C","#AF9CFF","#781200","#FFC7FA","#FF6D77"]

let data = new Array();
function physical(name, tall){
    this.name=name;
    this.tall=tall;
}
let cnt = 0;

$(function(){
    ctx = $("#Canvas")[0].getContext("2d");

    $("#reg").click(function(){
        var name = $("#name").val();
        var tall = $("#tall").val();

        draw(name, tall);

        name='';
        tall='';
        $("#name").focus();
    });
})

let oldx=oldy=0;

function draw(name, tall){
    // 세로 막대그래프
    // ctx.fillStyle="#000";
    // ctx.font="20px Arial";
    // ctx.fillText(name,50+100*cnt,680);
    
    // for(var i=0; i<tall/10; i++){
    //     ctx.fillStyle=color[cnt];
    //     ctx.fillRect(50+100*cnt,(640-(20*i)),50,20);
    // }
    // cnt++;

    // 가로 막대그래프
    // ctx.fillStyle="#000";
    // ctx.font="20px Arial";
    // ctx.fillText(name,20,57+50*cnt);
    
    // for(var i=0; i<tall/10; i++){
    //     ctx.fillStyle=color[cnt];
    //     ctx.fillRect(100+(20*i),40+50*cnt,50,20);
    // }
    // cnt++;

    // 꺾은선그래프
    ctx.fillStyle="#000";
    ctx.font="20px Arial";
    ctx.fillText(name,50+100*cnt,680);
    
    ctx.beginPath();
    ctx.arc(80+100*cnt,600-tall,3,0,2*Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
    
    if(oldx==0 && oldy == 0){
        oldx=80+100*cnt;
        oldy=600-tall;
    }else{
        ctx.moveTo(oldx, oldy);
        ctx.lineTo(80+100*cnt,600-tall);
        ctx.stroke();

        oldx=80+100*cnt;
        oldy=600-tall;
    }

    cnt++;
    // for(var i=0; i<tall/10; i++){
    //     ctx.fillStyle=color[cnt];
    //     ctx.fillRect(100+(20*i),40+50*cnt,50,20);
    // }
    // cnt++;
}