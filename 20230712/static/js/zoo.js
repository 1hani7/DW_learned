// function bar_open(){
//     document.getElementsByClassName("search_bar")[0].style.display="block";
// }

// function bar_close(){
//     document.getElementsByClassName("search_bar")[0].style.display="none";
// }

window.onload=function(){
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