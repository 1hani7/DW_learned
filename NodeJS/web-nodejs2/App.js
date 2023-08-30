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

var http= require('http');
var fs = require('fs');
var tempUrl=require('url');
var cookie = require('cookie');
var fromQs = 'false';

const data = JSON.parse(fs.readFileSync('./data/member.json','utf8'));
                        // ㄴ 자동 비동기
console.log(data);

var app = http.createServer(function(request,response){
    var url = request.url;
    var query = tempUrl.parse(url,true).query;
    // console.log(query.part);
    if(query.part == undefined){
        if(request.url=='/')
            url='/src/index.html';
        if(request.url=='/sign')
            url='/src/signup.html';
        if(request.url=='/qs')
            url='/src/question.html';
        if(request.url=='/login')
            url='/src/login.html';

        response.writeHead(200);
    }else{
        var page = query.part;
        var isLogin='false';
        var id = '';
        if(page==='login_check'){
            for(var i in data){
                if( data[i].sdmId === query.sdmId &&
                    data[i].sdmPw === query.sdmPw){
                    // 아이디비번 일치하면 쿠키 생성
                    isLogin='true';
                    id=query.sdmId;
                    break;
                }
            }
            url='/src/'+page+'.html';
        }
        if(page==='qsLogin'){
            url='/src/login.html';
            fromQs = 'true';
        }

        if(page==='logout'){
            url='/src/index.html';
        }


        response.writeHead(200,{
            'Set-Cookie':['isLogin='+isLogin, 'id='+id, 'fromQs='+fromQs]
        });
    }
    if(request.url =='/favicon.ico'){
        return response.writeHead(404);
    }

    // console.log(request.headers.cookie);
    // var cookies = {};
    // cookies = cookie.parse(request.headers.cookie);
    // console.log(cookies.id);

    // response.writeHead(200,{
    //     'Set-Cookie':['id=sky','pw=1234']
    // });
    // response.end('aa');
    
    response.end(fs.readFileSync(__dirname+url));
});
app.listen(3000);

/*
    로그아웃하기 => 쿠키삭제
*/