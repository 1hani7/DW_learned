$(function(){
    $("#search_word").on("keyup", function(){
        var word = $(this).val();

        // true냐 false냐에 따라 작동 미작동이 결정되는데,
        // 조건식을 넣어서 이를 조절하는 짓거리도 가능하므로 활용도가 무궁무진함
        $("#mydata tr").filter(function(){
            $(this).toggle($(this).text().indexOf(word) > -1);
        });
    });
});