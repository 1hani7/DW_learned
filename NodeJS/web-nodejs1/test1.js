//console.log(100);

// nodejs 실행방법
// 생성할 서버 내용을 담은 파일 만들기 (js파일)
// node 파일명.js
// localhost:포트번호
// 포트 번호는 파일에 app.listen(포트번호) 에 작성한 숫자를 사용
// ㄴ 아무거나 하면 안 되고, 포트번호를 조회한 다음 사용중이 아닌 걸로 해야 함
                                    //  ㄴ 방법은 인턴세 검색
// well-know port도 쓰면 안 됨
// () => 그냥 편하게 3000 쓰자


var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var _url=request.url;
    var query = url.parse(_url,true).query;
    // console.log(query.part);
    var title = query.part;
    // url에 따른 html파일을 직접 연결시켜주는 경우
    if(request.url=='/'){ // 상단에 뜨는 주소의 경우
        // _url='/index.html'; // 이 html을 보여주어라, 라는 뜻
        title = 'nodeJS 테스트';
    }
    if(request.url=='/login'){ // 상단에 뜨는 주소의 경우
        _url='/login.html'; // 이 html을 보여주어라, 라는 뜻
    }
    if(request.url=='/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);

    // 쿼리스트링을 이용해서 자동화
    // ex : http://localhost:3000/?part=freeBoard
    // if(query.part != undefined)
    //     response.end(fs.readFileSync(__dirname + "/" + query.part + ".html"));
    // else
    //     response.end(fs.readFileSync(__dirname + _url));
    
    fs.readFile(`./${query.part}`, 'utf8', function(err, desct){  
        if( desct == undefined ){
            desct = `<ol>
            <li>테스트1</li>
            <li>테스트2</li>
            <li>테스트3</li>
            </ol>
            `
        }
        var tmp = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <a href="/">HOME</a>
            <a href="/login">로그인</a>
            <a href="?part=notice">공지사항</a>
            <a href="?part=freeBoard">자유게시판</a>
            <h1>${title}</h1>
            <p>${desct}</p>
        </body>
        </html>`;
        
        response.end(tmp);
    });
});
app.listen(3000);
// http://localhost:3000/

// 터미널에서  ctrl + c => 서버 닫기
// 바뀐 내용을 적용시키려면 닫고 다시 열어야 함