window.onload=function(){
    var overlay_part = document.getElementsByClassName("overlay_part");
    var overlay_on = document.getElementsByClassName("overlay_on");

    
    // 띄우기
    overlay_on[0].addEventListener("click", function(){
        overlay_part[0].style.transform="translateX(0)";
        overlay_part[0].style.opacity="1";
        overlay_part[0].style.transition="1s";
    });

    overlay_on[1].addEventListener("click", function(){
        overlay_part[1].style.transform="translateX(0)";
        overlay_part[1].style.opacity="1";
        overlay_part[1].style.transition="1s";
    });

    overlay_on[2].addEventListener("click", function(){
        overlay_part[2].style.transform="translateX(0)";
        overlay_part[2].style.opacity="1";
        overlay_part[2].style.transition="1s";
    });

    overlay_on[3].addEventListener("click", function(){
        overlay_part[3].style.transform="translateX(0)";
        overlay_part[3].style.opacity="1";
        overlay_part[3].style.transition="1s";
    });

    overlay_on[4].addEventListener("click", function(){
        overlay_part[4].style.transform="translateX(0)";
        overlay_part[4].style.opacity="1";
        overlay_part[4].style.transition="1s";
    });



    // 끄기
    overlay_part[0].addEventListener("click", function(){
        overlay_part[0].style.transform="translateX(100%)";
        overlay_part[0].style.opacity="0";
        overlay_part[0].style.transition="1s";
    });

    overlay_part[1].addEventListener("click", function(){
        overlay_part[1].style.transform="translateX(100%)";
        overlay_part[1].style.opacity="0";
        overlay_part[1].style.transition="1s";
    });

    overlay_part[2].addEventListener("click", function(){
        overlay_part[2].style.transform="translateX(100%)";
        overlay_part[2].style.opacity="0";
        overlay_part[2].style.transition="1s";
    });

    overlay_part[3].addEventListener("click", function(){
        overlay_part[3].style.transform="translateX(100%)";
        overlay_part[3].style.opacity="0";
        overlay_part[3].style.transition="1s";
    });

    overlay_part[4].addEventListener("click", function(){
        overlay_part[4].style.transform="translateX(100%)";
        overlay_part[4].style.opacity="0";
        overlay_part[4].style.transition="1s";
    });
}