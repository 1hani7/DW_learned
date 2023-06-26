window.onload=function(){
    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch= document.querySelector("btnSearch");

    btnDefault.addEventListener("click", data_default);
    btnSearch.addEventListener("click", data_search);

    var file = document.querySelector("#lotto");
    file.addEventListener("input", function(e){
        let target = e.target; // 선택된 e 파일을 참조
        let files = target.files; // 선택된 파일은 배열로 저장됨
        // 첫째 파일을 참조해야 내가 선택한 파일을 읽을 수 있음
        let reader = new FileReader();
        reader.addEventListener("load", function(){
            var str = reader.result; // result => 전체
            var temp = str.split("\n"); // \n => 엔터키(new line)
            
            for(var i in temp){ // var i=0; i<temp.length; i++와 같음 / 배열에게만 사용하는 for문
                lotto.push(temp[i].split("\t")); // \t => 탭 (tab)(스페이스바 5번 효과, 변경가능)
            }
        });
        reader.readAsText(files[0]);
    });
}

function data_default(){

}

function data_search(){

}