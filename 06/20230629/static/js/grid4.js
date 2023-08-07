
// padStart() - 문자열의 시작을 특정 문자로 강제할 수 있음
// ex): 신상수.padStart(4, "주번"); -> 네 글자, "표시할 문자"

window.onload=function(){

    setInterval(function(){
        var dt = document.querySelector("#date_time");
        const now = new Date(); // 날짜 생성자
        const year = now.getFullYear(); // 연도만 가져오기
        const month = String(now.getMonth()+1).padStart(2,"0"); // 월만 가져오기
        const date = String(now.getDate()).padStart(2,"0"); // 일만 가져오기
        const hour = String(now.getHours()).padStart(2,"0"); // 시간만 가져오기
        const minute = String(now.getMinutes()).padStart(2,"0"); // 분만 가져오기
        const sec = String(now.getSeconds()).padStart(2,"0"); // 초만 가져오기
        
        dt.innerHTML = `${year}.${month}.${date} ${hour}:${minute}:${sec}`;
        // 다른 언어들에서 사용하는 방식 => 이렇게 익혀두면 좋음

        // dt.innerHTML = year + "." + month + "." + date + " " +
        //                hour+":" + minute + ":" + sec;
    },1000);
}