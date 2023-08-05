const keep = new Array();


window.onload=function(){
    window.addEventListener("keypress",function(e){
        if(e.keyCode==13){
            saving();
        }
    });
};

function saving(){
    var name = document.getElementById("name").value;
    var money = document.getElementById("money").value;
    var num1 = document.getElementById("account_num1").value;
    var num2 = document.getElementById("account_num2").value;
    var num3 = document.getElementById("account_num3").value;

    if(nums_check(num1, num2, num3)) return;

    keep.push(new list(name, money, num1+"-"+num2+"-"+num3));

    console.log(keep)
    showIt();
}

function showIt(){
    var res_list = document.getElementById("res_list");
    var out='';
    var idx = keep.length-1;
    out= "<div class=cell>"+keep[idx].name+"</div>"+
          "<div class=cell>"+keep[idx].won()+"</div>"+
          "<div class=cell>"+keep[idx].account_num+"</div>";

    res_list.innerHTML+=out;
}

function nums_check(one, two, three){
    if(one.length!=3){
        alert("계좌 첫 번째 자리는 3글자입니다.")
        document.getElementById("account_num1").focus();
        document.getElementById("account_num1").value='';
        return true;
    }else if(two.length!=2){
        alert("계좌 두 번째 자리 글자는 2글자입니다.")
        document.getElementById("account_num2").focus();
        document.getElementById("account_num2").value='';
        return true;
    }else if(three.length!=5){
        alert("계좌 세 번째 자리 글자는 5글자입니다.")
        document.getElementById("account_num3").focus();
        document.getElementById("account_num3").value='';
        return true;
    }
}


function list(name, money, num){
    this.name=name;
    this.money=Number(money);
    this.account_num=num;
}


list.prototype.won=function(){ // 콤마 찍기 + 원 표시
    return "₩ "+this.money.toLocaleString()+"원";
}