// whileSlide 에 들어가는 함수들

function drawerToggle(target) {
    $(target + " > div:first-child > div:first-child").click(function () {
        var w = (1000*-1) + 'px';

        $(target + " > div:first-child  > div:first-child").toggleClass('spin');

        if(  $(target + " > div:first-child ul li").css('right') == w ){
            $(target + " > div:first-child ul li").css({
                'right': '0px',
            })
        }else if($(target + " > div:first-child ul li").css('right') != w){
            $(target + " > div:first-child ul li").css({
                'right': w,
            }) 
        }
    })
}

function locationNum(target){
    $(target + " > div:nth-child(4)").text('01.');
}