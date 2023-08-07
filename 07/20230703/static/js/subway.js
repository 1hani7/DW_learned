a=0;
b=15;

var line1 = true;
var line2 = false;
var line3 = false;
var line4 = false;
var line5 = false;



window.onload=function(){
    var st = document.getElementsByClassName("station");
    var style = st.style;

    
    setInterval(function(){
        if(line1){
            st[a].style.background='yellow';
            st[a].style.borderRadius='0px';
            st[a].style.width='50px';
            a++;
            if(a==8){
                line1=false;
                line2=true;
                return;
            }
        }
        
        if(line2){

            if(st[7].style.background.includes('yellow')){
                st[7].style.borderRadius='100%';
                st[7].style.width='15px';
                st[7].style.background='white';
            }

            line1=false;
            
            st[b].style.background='yellow';
            st[b].style.borderRadius='0px';
            st[b].style.width='50px';
            b--;
            if(b==7){
                st[b+2].style.borderRadius='100%';
                st[b+2].style.background='white';
                st[b+2].style.width='15px';
                line2=false;
                line3=true;
                return;
            }
        }

        if(line3){
            if(a<16)a=16;
            
            
            if(st[8].style.background.includes('yellow')){
                st[b+1].style.borderRadius='100%';
                st[b+1].style.background='white';
                st[b+1].style.width='15px';
            }

            
            st[a].style.background='yellow';
            st[a].style.borderRadius='0px';
            st[a].style.width='50px';
            a++;
            if(a==24){
                line3=false;
                line4=true;
                return;
            }
        }

        if(line4){
            if(b==7)b=31;

            if(st[23].style.background.includes('yellow')){
                st[23].style.borderRadius='100%';
                st[23].style.width='15px';
                st[23].style.background='white';
            }

            st[b].style.background='yellow';
            st[b].style.borderRadius='0px';
            st[b].style.width='50px';
            b--;
            if(b==23){
                st[b+2].style.borderRadius='100%';
                st[b+2].style.background='white';
                st[b+2].style.width='15px';
                line4=false;
                line5=true;
                return;
            }
        }

        if(line5){
            if(a<32)a=32;
            
            
            if(st[24].style.background.includes('yellow')){
                st[b+1].style.borderRadius='100%';
                st[b+1].style.background='white';
                st[b+1].style.width='15px';
            }

            
            st[a].style.background='yellow';
            st[a].style.borderRadius='0px';
            st[a].style.width='50px';
            a++;
            if(a==41){
                line5=false;
                st[a].style.background='white';
                st[a].style.borderRadius='100%';
                st[a].style.width='15px';
                return;
            }
        }
        

    },100);

    setTimeout(function(){
        setInterval(function(){
            st[a-2].style.background='white';
            st[a-2].style.borderRadius='100%';
            st[a-2].style.width='15px';

            if(line2){
                st[b+2].style.borderRadius='100%';
                st[b+2].style.background='white';
                st[b+2].style.width='15px';
            }

            if(line4){
                st[b+2].style.borderRadius='100%';
                st[b+2].style.background='white';
                st[b+2].style.width='15px';
            }
        },100);
    },100)
}