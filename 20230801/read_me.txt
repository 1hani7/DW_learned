// 부모 찾기
.parent()  - 상위 태그 하나 선택
.parents() - 상위태그 전부 선택 (html 태그까지 포함)
=> .parents("태그 이름이나 아이디 이름 등으로 특정 가능")
.parentsUntil("") - 지정된 대상 사이의 부모들을 선택 (고모는 못찾음)


// 자식 찾기
.children() - 자식들 (손주들은 제외)
=> .children(":first") 첫번째 자식
 => .children(":last") 마지막 자식
  => .children(":eq(n)") n번째 자식
ㄴ 아래도 역시 같음
.children().first()
.children().last()
.children().eq(n)


// 하위태그 전체 중에 찾기
.find() - 자식의 자식의 자식 그 너머까지도 검색 가능
          => 누구를 찾을 것인지 반드시 정해줘야 함

.find(*) => 전체를 다 찾기 { *는 모든 언어에서 전체를 의미함 }


// 형제 찾기
.siblings()  - 형제들 전체 / 형제들 중 누군가
.next()      - 다음 형제
.prev()      - 이전 형제들
.nextAll()   - 다음 모든 형제들
.prevAll()   - 이전 모든 형제들
.nextUntil() - 지정된 사이까지의 모든 다음 형제들
.prevUntil() - 지정된 사이까지의 모든 이전 형제들


// ~ 중에 몇 번째
$("~").first() / .last() / .eq(n)
$("~").filter("아이디 / 클래스 / 태그 등") - 지정된 것만 찾음
$("~").not("아이디 / 클래스 / 태그 등") - 지정된 걸 제외하고 찾음




// 키보드 이벤트
예시 => on("keyup", function(){});




// 제이쿼리 메소드 안에 조건식 넣어서 true냐 false냐 
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



// css에서 퐁당퐁당으로 스타일을 주는 법
tr:nth-child(even){
    background:#ddd;
}