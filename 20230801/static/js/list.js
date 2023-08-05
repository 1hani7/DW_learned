$(function(){
    $("#keyword").on("keyup",function(){
        let word = $(this).val();
        $(".data img").filter(function(){
            let isSearch = $(this).attr("alt").indexOf(word) > -1;
            $(this).parent().toggle(isSearch);
        });
    });
});