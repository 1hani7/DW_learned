$(()=>{
    $.getJSON("https://jsonplaceholder.typicode.com/photos",data=>{
        $.each(data,function(i){
            var tem = Math.floor(Math.random()*5000);
            $(".thumbnail").eq(i).attr("src", data[tem].thumbnailUrl.split("via.").join(""));
            $(".thumbnail").eq(i).click(function(){
                $("#original").attr("src", data[tem].url.split("via.").join(""))
                $("#title").text(data[tem].title)
                $("#albId").text(data[tem].albumId)
                $("#modal").show();
            });
        });
    });

    $("#modal_bg").click(function(){
        $("#modal").hide();
    });
});