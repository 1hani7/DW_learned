// 동적 서버
// 동적인 서버에선 파일을 일일이 하나씩 읽는 작업을 해줘야 함

const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('./lib/template.js');
const JStemp = require('./lib/JStemplate.js');
const dataParse = JSON.parse(fs.readFileSync('./lib/page.json', 'utf8')); // JSON을 JS객체로 변환
const member = JSON.parse(fs.readFileSync('./lib/member.json', 'utf8')); // JSON을 JS객체로 변환
let cookie_arr = [];


const app = http.createServer(function (request, response) {
    const pageURL = request.url;
    const query = url.parse(pageURL, true).query;
    const path = url.parse(pageURL, true).pathname; // 도메인 뒤의 주소

    if(path.indexOf(".")==-1){
        var html = ''
        if (path === "/") {
            if(query.sdmId==undefined)
                html = template.homeHTML(dataParse.main, dataParse.login_before);
            else{ // 파라미터에 id가 있다면
                for(var m of member){
                    if(m.sdmId==query.sdmId && m.sdmPw==query.sdmPw){
                        cookie_arr = ['isLogin=true','id='+query.sdmId];
                        dataParse.login_after.id=query.sdmId;
                        break;
                    }
                }
                html = template.homeHTML(dataParse.main, dataParse.login_after);
            }
        }
        if (path === "/sign") {
            html = template.sighUpHTML(dataParse.main, dataParse.sign);
        }
        if (path === "/login") {
            html = template.loginHTML(dataParse.main);
            html += JStemp.login();
        }
        if (path === "/qs") {
            var qdata = JSON.parse(fs.readFileSync('./lib/question.json', 'utf8'));
            html = template.questionHTML(dataParse.main, dataParse.login_before, qdata );
        }
        response.writeHead(200,
            {'Set-Cookie':cookie_arr});
        response.write(html);
        response.end();
    }

    

    if (path.indexOf('.css') > -1) {
        var css_name = path.slice('/lib'.length);
        fs.readFile('./lib/' + css_name, function (err, data) {
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
    if (path.indexOf('/image') > -1) {
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/' + img_name, function (err, data) {
            response.writeHead(200);
            response.write(data);
            response.end();
        })
    }
})
app.listen(3000);