// function bar_open(){
//     document.getElementsByClassName("search_bar")[0].style.display="block";
// }

// function bar_close(){
//     document.getElementsByClassName("search_bar")[0].style.display="none";
// }

window.onload=function(){

    var pre = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    pre.addEventListener("click", function(){
        var slideview = document.getElementsByClassName("eventslide")[0];
        slideview.style.transform="translate3d(0px, 0px, 0px)"


        // var now_left = slideview.style.left.split("px")[0];
        // if( now_left == 0 ) return;
        // var left = Number(now_left) + 312;
        // slideview.style.left=left+"px";
    });
    next.addEventListener("click", function(){
        var slideview = document.getElementsByClassName("eventslide")[0];
        slideview.style.transform="translate3d(-1248px, 0px, 0px)"


        // var now_left = slideview.style.left.split("px")[0];
        // if( now_left == -936 ) return;
        // var left = now_left - 312;
        // slideview.style.left=left+"px";
    });


    var search_bt = document.getElementsByClassName("search_button");
    search_bt[0].addEventListener("click", function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    });
    
    var search_close = document.getElementsByClassName("search_close");
    search_close[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    })
}