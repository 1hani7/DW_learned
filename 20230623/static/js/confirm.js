window.onload=function(){

    var input_tag = document.getElementsByClassName("num_645")

    for(var i=0; i<input_tag.length; i++){
        input_tag[i].addEventListener("keyup", function(e){
            var n = parseInt(this.value); // 현재 입력 중인 input의 value
            if(!(1<=n && n<=45)){ // 이러면 input value 자체를 범위 지정에 사용할 수 있음
                alert("로또는 1에서 45까지입니다.")
                this.value='';
                this.focus();
            }
            if(e.keyCode>=48 || e.keyCode>57 && e.keyCode<97 || e.keyCode>105){
                // keyCode도 비교연산자를 먹일 수 있음
                return;
            }
        })
    }

    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch= document.querySelector("#btnSearch");

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

    var opt="";
    for(var i=1073; i>=1; i--)
        opt+= "<option>"+i+"</option>";
    drwNo.innerHTML=opt;
    drwNo.addEventListener("change", select_count) // change => option태그는 여러 값 중 하나를 택하는 것이라 click이 아니라 change를 씀

}

let sel_count; // 발표 회차 선택
function select_count(){ // select 태그의 값을 변경하면 실행되는 함수
    sel_count = this.selectedIndex;
                    // selectedIndex 선택된 값의 인덱스
}

function data_default(){

}

function data_search(){
    if(lotto.length==0){
        alert("로또 파일을 먼저 열어주세양");
        return;
    }

    let win_num = new Array();
    for(var i=2; i<=7; i++){
        win_num.push(parseInt(lotto[sel_count][i]));
    }

    

    for(var line=1; line<=5; line++){
        var input = document.getElementsByClassName("input"+line);
                                                // 가져올 이름에 변수 붙이기 가능
        var num_arr = new Array();
        var bonus_str = "<span>"+lotto[sel_count][8]+"</span>"
        var isBonus = false; // 보너스 번호가 있나 없나
        let win_cnt=0; // 일치여부 갯수 저장 변수
        var rank=0; // 등수

        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val = input[i].value;
                if(win_num.indexOf(parseInt(val))==-1){ // 입력한 중에 당첨 번호가 없다.
                    num_arr.push( "<span>"+input[i].value+"</span>" );
                }else{ // 입력한 중에 당첨 번호가 있다.
                    num_arr.push( "<strong class='red'>"+val+"</strong>" );
                    win_cnt++;
                }
                if(val==lotto[sel_count][8]){
                    isBonus = true;
                }
            }
        }

        switch(win_cnt){
            case 6 : rank=1; break; // 당첨번호 일치가 6개
            case 5 : if(isBonus) rank=2; // 당첨번호 일치 5개 + 보너스
                     else rank=3; break; // 당첨번호 일치 5개
            case 4 : rank=4 ; break; // 당첨번호 일치 4개
            case 3 : rank=5; break; // 당첨번호 일치 3개
            default:
                rank="꽝!"; // 당첨번호 2개 이하면 X
        }

        if(isBonus){
            bonus_str=("<strong class='red'>"+lotto[sel_count][8]+"</strong>");
            win_cnt = win_cnt!=6 ? win_cnt+"+Bonus" : win_cnt;
        }

        if(num_arr.length==6){
            var resN = document.getElementsByClassName("resultNumber")
            resN[line-1].innerHTML=num_arr;
            var resB = document.getElementsByClassName("resultBonus")
        resB[line-1].innerHTML=bonus_str;
        
        var resNS = document.getElementsByClassName("resultNumberSu")
        resNS[line-1].innerText=win_cnt;

        var grade = document.getElementsByClassName("resultNumberGrade")
        grade[line-1].innerHTML=rank;
        }
    }
}