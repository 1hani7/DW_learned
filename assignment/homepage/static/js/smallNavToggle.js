function smallNavToggle(){
    $('body').on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        if (wheel > 0) {
            //스크롤 올릴때
            $("#smallNav").fadeIn(500);
          } else {
            //스크롤 내릴때
            $("#smallNav").fadeOut(500);
          }
    })
}