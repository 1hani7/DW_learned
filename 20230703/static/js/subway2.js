var a=0;

var b=0;

var c=0;

var d=0;

var locate=0;



window.onload=function train(){
    start();
}


function start(){
    var st = document.getElementsByClassName("station");
    a=0;
    b=0;
    c=0;
    d=0;
    
    

    // 1호차
    var first_t=setInterval(function(){
        if(a==39)clearInterval(first_t)
        st[a].style.background='yellow';
        st[a].style.borderRadius='0px';
        st[a].style.width='50px';
        ++a;
    },3000);
    
    setTimeout(function(){
        var first_e=setInterval(function(){
            if(a==40){
                clearInterval(first_e);
                st[a-2].style.background='white';
                st[a-2].style.borderRadius='100%';
                st[a-2].style.width='15px';
                setTimeout(function(){
                    st[a-1].style.background='white';
                    st[a-1].style.borderRadius='100%';
                    st[a-1].style.width='15px';
                },3000);
            }else{
                st[a-2].style.background='white';
                st[a-2].style.borderRadius='100%';
                st[a-2].style.width='15px';
            }
        },3000)
    },3000);
    
    

    // 2호차
    setTimeout(function(){
        var second_t=setInterval(function(){
            if(b==39)clearInterval(second_t)
            st[b].style.background='green';
            st[b].style.borderRadius='0px';
            st[b].style.width='50px';
            ++b;
        },3000);

        setTimeout(function(){
            var second_e=setInterval(function(){
                if(b==40){
                    clearInterval(second_e);
                    st[b-2].style.background='white';
                    st[b-2].style.borderRadius='100%';
                    st[b-2].style.width='15px'
                    setTimeout(function(){
                        st[b-1].style.background='white';
                        st[b-1].style.borderRadius='100%';
                        st[b-1].style.width='15px';
                    },3000);
                }else{
                    st[b-2].style.background='white';
                    st[b-2].style.borderRadius='100%';
                    st[b-2].style.width='15px';
                }
            },3000)
        },3000);
    },9000);


    // 3호차
    setTimeout(function(){
        var third_t=setInterval(function(){
            if(c==39)clearInterval(third_t)
            st[c].style.background='blue';
            st[c].style.borderRadius='0px';
            st[c].style.width='50px';
            ++c;
        },3000);

        setTimeout(function(){
            var third_e=setInterval(function(){
                if(c==40){
                    clearInterval(third_e);
                    st[c-2].style.background='white';
                    st[c-2].style.borderRadius='100%';
                    st[c-2].style.width='15px';
                    setTimeout(function(){
                        st[c-1].style.background='white';
                        st[c-1].style.borderRadius='100%';
                        st[c-1].style.width='15px';
                    },3000);
                }else{
                    st[c-2].style.background='white';
                    st[c-2].style.borderRadius='100%';
                    st[c-2].style.width='15px';
                }
            },3000)
        },3000);
    },18000);


    // 4호차
    setTimeout(function(){
        var fourth_t=setInterval(function(){
            if(d==39)clearInterval(fourth_t);
            st[d].style.background='pink';
            st[d].style.borderRadius='0px';
            st[d].style.width='50px';
            ++d;
        },3000);

        setTimeout(function(){
            var fourth_e=setInterval(function(){
                if(d==40){
                    clearInterval(fourth_e);
                    st[d-2].style.background='white';
                    st[d-2].style.borderRadius='100%';
                    st[d-2].style.width='15px';
                    setTimeout(function(){
                        st[d-1].style.background='white';
                        st[d-1].style.borderRadius='100%';
                        st[d-1].style.width='15px';
                        reverse();
                    },3000);
                }else{
                    st[d-2].style.background='white';
                    st[d-2].style.borderRadius='100%';
                    st[d-2].style.width='15px';
                }
            },3000)
        },3000);
    },27000);

    
    var cell = document.getElementsByClassName("cells");
    for(var i=0; i<cell.length; i++){
        cell[i].removeEventListener("click", popup_re);
    } 
    for(var i=0; i<cell.length; i++){
        cell[i].addEventListener("click", popup);
    } 
}




function popup(e){
    var pop = document.getElementById("pop");
    var cell = document.getElementsByClassName("cells");

    for(var i=0; i<cell.length; i++){
        if(cell[i]===this){
            locate=i;
        }
    } 

    var res1 = (locate-a+1) + "정거장 전";
    var res2 = (locate-b+1) + "정거장 전";
    var res3 = (locate-c+1) + "정거장 전";
    var res4 = (locate-d+1) + "정거장 전";

    if((locate-a)<-1){
        var res1='지나감';
    }else if((locate-a)==-1){
        var res1='도착함';
    }

    if((locate-b)<-1){
        var res2='지나감';
    }else if((locate-b)==-1){
        var res2='도착함';
    }

    if((locate-c)<-1){
        var res3='지나감';
    }
    else if((locate-c)==-1){
        var res3='도착함';
    }

    if((locate-d)<-1){
        var res4='지나감';
    }else if((locate-d)==-1){
        var res4='도착함';
    }

    pop.style.display="block";
    pop.style.left=(e.clientX-100)+"px";
    pop.style.top=(e.clientY-100)+"px";

    pop.innerHTML="<b>"+this.textContent+"</b><br>"+
                "<br><b>1호차</b> : "+ res1 +
                "<br><b>2호차</b> : "+ res2 +
                "<br><b>3호차</b> : "+ res3 +
                "<br><b>4호차</b> : "+ res4;


    pop.addEventListener("click", function(){
        pop.style.display="none";
    });
}


function reverse(){
    var st = document.getElementsByClassName("station");
    a=39;
    b=39;
    c=39;
    d=39;
    
    

    // 1호차 역행
    var first_t=setInterval(function(){
        if(a==0)clearInterval(first_t)
        st[a].style.background='yellow';
        st[a].style.borderRadius='0px';
        st[a].style.width='50px';
        --a;
    },3000);
    
    setTimeout(function(){
        var first_e=setInterval(function(){
            if(a==-1){
                clearInterval(first_e);
                st[a+2].style.background='white';
                st[a+2].style.borderRadius='100%';
                st[a+2].style.width='15px';
                setTimeout(function(){
                    st[a+1].style.background='white';
                    st[a+1].style.borderRadius='100%';
                    st[a+1].style.width='15px';
                },3000);
            }else{
                st[a+2].style.background='white';
                st[a+2].style.borderRadius='100%';
                st[a+2].style.width='15px';
            }
        },3000)
    },3000);
    
    

    // 2호차 역행
    setTimeout(function(){
        var second_t=setInterval(function(){
            if(b==0)clearInterval(second_t)
            st[b].style.background='green';
            st[b].style.borderRadius='0px';
            st[b].style.width='50px';
            --b;
        },3000);

        setTimeout(function(){
            var second_e=setInterval(function(){
                if(b==-1){
                    clearInterval(second_e);
                    st[b+2].style.background='white';
                    st[b+2].style.borderRadius='100%';
                    st[b+2].style.width='15px'
                    setTimeout(function(){
                        st[b+1].style.background='white';
                        st[b+1].style.borderRadius='100%';
                        st[b+1].style.width='15px';
                    },3000);
                }else{
                    st[b+2].style.background='white';
                    st[b+2].style.borderRadius='100%';
                    st[b+2].style.width='15px';
                }
            },3000)
        },3000);
    },9000);


    // 3호차
    setTimeout(function(){
        var third_t=setInterval(function(){
            if(c==0)clearInterval(third_t)
            st[c].style.background='blue';
            st[c].style.borderRadius='0px';
            st[c].style.width='50px';
            --c;
        },3000);

        setTimeout(function(){
            var third_e=setInterval(function(){
                if(c==-1){
                    clearInterval(third_e);
                    st[c+2].style.background='white';
                    st[c+2].style.borderRadius='100%';
                    st[c+2].style.width='15px';
                    setTimeout(function(){
                        st[c+1].style.background='white';
                        st[c+1].style.borderRadius='100%';
                        st[c+1].style.width='15px';
                    },3000);
                }else{
                    st[c+2].style.background='white';
                    st[c+2].style.borderRadius='100%';
                    st[c+2].style.width='15px';
                }
            },3000)
        },3000);
    },18000);


    // 4호차
    setTimeout(function(){
        var fourth_t=setInterval(function(){
            if(d==0)clearInterval(fourth_t);
            st[d].style.background='pink';
            st[d].style.borderRadius='0px';
            st[d].style.width='50px';
            --d;
        },3000);

        setTimeout(function(){
            var fourth_e=setInterval(function(){
                if(d==-1){
                    clearInterval(fourth_e);
                    st[d+2].style.background='white';
                    st[d+2].style.borderRadius='100%';
                    st[d+2].style.width='15px';
                    setTimeout(function(){
                        st[d+1].style.background='white';
                        st[d+1].style.borderRadius='100%';
                        st[d+1].style.width='15px';
                        start();
                    },3000);
                }else{
                    st[d+2].style.background='white';
                    st[d+2].style.borderRadius='100%';
                    st[d+2].style.width='15px';
                }
            },3000)
        },3000);
    },27000);

    var cell = document.getElementsByClassName("cells");
    for(var i=0; i<cell.length; i++){
        cell[i].removeEventListener("click", popup);
    } 
    for(var i=0; i<cell.length; i++){
        cell[i].addEventListener("click", popup_re);
    } 
}


function popup_re(e){
    var pop = document.getElementById("pop");
    var cell = document.getElementsByClassName("cells");

    for(var i=0; i<cell.length; i++){
        if(cell[i]===this){
            locate=i;
        }
    } 

    var res1 = (a-locate+1) + "정거장 전";
    var res2 = (b-locate+1) + "정거장 전";
    var res3 = (c-locate+1) + "정거장 전";
    var res4 = (d-locate+1) + "정거장 전";

    if((a-locate)<-1){
        var res1='지나감';
    }else if((a-locate)==-1){
        var res1='도착함';
    }

    if((b-locate)<-1){
        var res2='지나감';
    }else if((b-locate)==-1){
        var res2='도착함';
    }

    if((c-locate)<-1){
        var res3='지나감';
    }
    else if((c-locate)==-1){
        var res3='도착함';
    }

    if((d-locate)<-1){
        var res4='지나감';
    }else if((d-locate)==-1){
        var res4='도착함';
    }

    pop.style.display="block";
    pop.style.left=(e.clientX-100)+"px";
    pop.style.top=(e.clientY-100)+"px";

    pop.innerHTML="<b>"+this.textContent+"</b><br>"+
                "<br><b>1호차</b> : "+ res1 +
                "<br><b>2호차</b> : "+ res2 +
                "<br><b>3호차</b> : "+ res3 +
                "<br><b>4호차</b> : "+ res4;


    pop.addEventListener("click", function(){
        pop.style.display="none";
    });
}