$(function(){

    $("#category").change(function(){
        let choice = $(this).val();
        if(choice == "all"){
            category("");
        }
        else if(choice == "novel"){
            category("현대소설");
        }
        else if(choice == "romance"){
            category("연애소설");
        }
        else if(choice == "poetry"){
            category("시");
        }
        else if(choice == "proverb"){
            category("속담");
        }
        else if(choice == "diary"){
            category("일기");
        }
    });

    $("#keyword").on("keyup",function(){
        let key = $("#key").val();
        if(key=="title"){
            search("h3");
        }
        else if(key=="content"){
            search("p");
        }
        else if(key=="tc"){
            search('h3, .story p');
        }
    });

});


function search(a){
    let word = $("#keyword").val();
    $(`.story ${a}`).filter(function(){
        $(this).parent().toggle($(this).text().indexOf(word)>-1);
    });
}

function category(genre){
    $(`.story h3`).filter(function(){
        $(this).parent().toggle($(this).text().split("-")[0].indexOf(genre)>-1);
    });
}