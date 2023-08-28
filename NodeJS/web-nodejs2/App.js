// App.js

/*
    page 구성 - 메인, 회원가입, 문의
        메인 - index.html
        회원가입 - signup.html
        문의 - question.html
    각 페이지의 내용은 간단하게만 작성 ( 구별만 되면 됨 )

    url : 메인 - http://localhost:3000
          회원가입 - http://localhost:3000/sign
          문의 - http://localhost:3000/qs
*/

var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response){
    var url = request.url;
    
    if(url == '/') url = '/index.html';
    if(url == '/sign') url = '/signup.html';
    if(url == '/qs') url = '/question.html';
    if(url == '/favicon.ico') return response.writeHead(404);
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);