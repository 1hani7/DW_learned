// import는 가져오기, export는 내보내기

// export function sum(a,b){ // 함수를 외부로 내보냄
//     return a+b;
// }
export default function sum(a,b){ // 하나의 함수만 내보낼 때는 export default
    return a+b;
}

export function makeTable(id, row, col){
    var tb = document.getElementById(id);
    var tag = '<table>';
    for(var i=1; i<=row; i++){
        tag + "<tr>"
        for(var k=1; k<=col; k++){
            tag += "<td></td>"
        }
        tag += "</tr>"
    }
    tag += "</table>"
    tb.innerHTML=tag;
}