jquery문법

// window.onload=function(){}
$(function(){})


// 이벤트리스너
.click(function(){});
.scroll(function(){});


.innerHTML => .html()
.innerText => .text()
.value => .val();


//display 건드림
.hide(시간)
.show(시간)
.toggle(시간)


// opacity 건드림
.fadeIn(시간)
.fadeOut(시간)
.fadeToggle(시간)


// 슬라이드 접고 펴기 (display를 건드림)
.slideDown(시간)
.slideUp(시간)
.slideToggle(시간)



// css값 조정
.css("속성","값")



// 애니메이션
.animate({속성:"값",속성:"값"}, 속도);
=> 여러 줄 작성시 순차적으로 실행

ex:
box.animate( {left:"100px",width:"150px",height:"200px"},2000 );
box.animate( {fontSize:"25px",color:"red"},1000 );

=> 이런 경우도 순차 실행 애니메이션 가능
ex: $("#box2").css("color","red").slideUp(1000).slideDown(2000);



// 추가 & 삭제
.prepend() - 맨 앞에 추가
.before() - 바로 앞에 추가
.append() - 맨 뒤에 추가
.after() - 바로 뒤에 추가

.remove() - 대상 삭제
.empty() - 내용(자식) 삭제


// 속성 변경
.attr("속성","값");
이미지 src와 href값을 줄 수도 있음
- 예시
$(".image").attr("src","https://loremflickr.com/200/200/car");
$("#naver").attr("href", "https://www.naver.com");