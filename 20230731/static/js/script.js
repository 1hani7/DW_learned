var a = false;

$(function(){
    $("#menu_icon").click(()=>{
        let head = $("#header").width();

        $("#menu_list").animate({width:head+"px"},700);
        if(a){
            $("#menu_list").animate({width:"0px"},700);
            a=false;
            return;
        }
        a = true;
    });
});