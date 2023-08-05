// 배열을 응용해서 옵션 만들기
   for(var i=0; i<category.length; i++){
    var opt = document.createElement("option");
    opt.setAttribute("value", category[i]);
    opt.innerText=category[i];
    cate.appendChild(opt);
   }

* 포인트
   createElement("option")
   setAttribute("value", category[i])
   cate.appendChild(opt);


// input에서 가져온 숫자는 문자열임
   따라서 더하기 계산을 해주고 싶다면 parseInt나 Number로
   숫자임을 선언해줘야 함