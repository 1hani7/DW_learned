// JSON
자바스크립트 객체(Object)를 JSON 방식으로 바꿔줌
stringify => JSON방식으로
parse()   => 자바스크립트 방식으로

JSON으로 넘어가면 속성값도 문자열로 저장됨
하지만 숫자는 숫자 그대로 저장됨
{age:26}
=>
{"age":26}

JSON 파일에는 주석을 못 닮

// JSON 데이터 가져오기
    $.getJSON("./test_jason.json",function(data){
        console.log(data);
    });




// 새로운 반복문 (배열 전용)
            $.each( data.person , function(i,item){ // i는 배열의 인덱스, item은 배열의 각 공간, p[n]==item
                $("#list").append("<tr><td>"+item.name+"</td><td>"+
                                    item.age+"</td><td>"+item.phone+"</td><td>"+
                                    item.coffee+"</td><td>"+item.hobby+"</td><td>")
            } );


// JSON 파일은 작성하기 빡셈
그래서 엑셀로 작업한 뒤 CSV 파일로 저장해서
이걸 JSON으로 변환하는 식으로 함



// textarea 태그
입력 가능하고 크기를 드래그로 조절할 수 있는 글자 박스 생성