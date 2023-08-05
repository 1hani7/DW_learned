const cate = ["all","novel","romance","poetry","proverb","diary"];
const cate_korea = ["전체","현대소설","연애소설","시","속담","일기"];

// 조건연산자를 사용하면 if문보다 위아래 길이를 압축할 수 있음
// 위아래 길이가 압축되면 코드들이 한 눈에 들어오기 때문에 좋음
// => 상황에 따라서 유동적으로

$(function(){
    $("#keyword").on("keyup",function(){
        var word = $(this).val(); // input 입력값
        var key = $("#key").val(); // select#key 선택값
        var target = key === "title" ? "h3" : key === "content" ? "p" : "";

        var type = cate_korea[cate.indexOf($("#category").val())]; // 분류 선택값

        $(".story "+target).filter(function(){
            var Child = target==="h3"?$(this):target==="p"?$(this).prev():target===""?$(this).find("h3"):"";
            var isCategory = type===""?true:Child.text().indexOf(type)>-1;
            var apply = target === "" ? $(this) : $(this).parent();
            apply.toggle( ($(this).text().indexOf(word)>-1) && isCategory );
                            // 두 개의 조건이 다 맞는 놈들만 표시할 수 있도록 &&를 사용
        });
    });

    $("#category").on("change",function(){
        var idx = cate.indexOf($(this).val());
        $(".story h3").filter(function(){
            if(idx==0) $(this).parent().show();
            else
            $(this).parent().toggle($(this).text().indexOf(cate_korea[idx]) > -1);
        });
    });
});


// $(function(){

//     $("#category").change(function(){
//         let choice = $(this).val();
//         if(choice == "all"){
//             category("");
//         }
//         else if(choice == "novel"){
//             category("현대소설");
//         }
//         else if(choice == "romance"){
//             category("연애소설");
//         }
//         else if(choice == "poetry"){
//             category("시");
//         }
//         else if(choice == "proverb"){
//             category("속담");
//         }
//         else if(choice == "diary"){
//             category("일기");
//         }
//     });

//     $("#keyword").on("keyup",function(){
//         let key = $("#key").val();
//         if(key=="title"){
//             search("h3");
//         }
//         else if(key=="content"){
//             search("p");
//         }
//         else if(key=="tc"){
//             search('h3, .story p');
//         }
//     });

// });


// function search(a){
//     let word = $("#keyword").val();
//     $(`.story ${a}`).filter(function(){
//         $(this).parent().toggle($(this).text().indexOf(word)>-1);
//     });
// }

// function category(genre){
//     $(`.story h3`).filter(function(){
//         $(this).parent().toggle($(this).text().split("-")[0].indexOf(genre)>-1);
//     });
// }