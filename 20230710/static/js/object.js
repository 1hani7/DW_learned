window.onload=function(){

    // 주요 메타 (꼼수)
    // var body = document.getElementsByTagName("body");
    // body[0].innerHTML=`<div>오늘 비와?</div>`;



    // 정석 메타 (귀찮음)
    // var node = document.createElement("div");
    // node.setAttribute("id","rain");
        // ㄴ 속성 부여 방법
    // node.addEventListener("click", function(){alert("힘을 원하는가")});
    // var text = document.createTextNode("오늘 비 많이 와?");
    // node.appendChild(text);
    // body[0].appendChild(node);

}


function exit(){
    window.close();
}

let child=""

function winopen(){
    child = window.open("./child.html","_blank","width=500, height=400, top=300, left=300");
    // 새 창 열기 (*팝업창 만들 때 사용함)

    // window.open 기능
    // ("주소","새 창의 이름이나 타겟","옵션");
    // 타겟 = _parent, _self, _blank(기본값)
    // 옵션 = 넓이, 높이, 좌표(top, right, left, bottom) 지정 가능
    //         ㄴ 지정하지 않을시 새 탭에서 오픈

    // 새롭게 만들어진 창은 [자식]으로 취급됨
    // 제어하려면 [자식]의


}

function child_close(){
    child.window.close();
    // 부모에 의해 열려진 창이므로 부모 측에서 제어 가능함
}

function child_write(){
    child.document.getElementById("message").innerHTML+="끄앙";
}

function child_getName(){
    // 자식 창의 id=name을 가진 input 태그의 value 가져오기
    var name = child.document.getElementById("name").value;
    // 부모 창의 div에 출력
    document.getElementById("name").innerHTML+=name;
}

