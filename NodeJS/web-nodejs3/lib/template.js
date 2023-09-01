//template.js

module.exports = {
    homeHTML: function (main, login) {
        var mainHTML = `<section id="content">
                        <img src="./image/${main.main_img}" alt="">
                    </section>
                    <section id="side">
                        <div class="login_bt">
                            ${login.url=='logout'?`<p>${login.id}</p>`:''}
                            <a href="/${login.url}">${login.text}</a>
                        </div>
                    </section>`
        return (commonHTML(main, mainHTML, "index"));
    },
    loginHTML: function (main) {
        var loginHTML = `
        <section id="content">
                <h3>스드메 with 로그인</h3>
                <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                            <div class="login_input">
                                <label for="sdmId">ID</label>
                                <input type="text" name="sdmId" id="sdmId"
                                        placeholder="아이디">
                            </div>
                            <div class="login_input">
                                <label for="sdmId">PW</label>
                                <input type="password" name="sdmPw" id="sdmPw"
                                        placeholder="비밀번호">
                            </div>
                            <a class="login_bt" href="javascript:login();">LOGIN</a>
                        </div>
                    </form>
                    <div class="joinAfind">
                        <p class="find">아이디/비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
                </div>
            </section>
        `
        return (commonHTML(main, loginHTML, "login"));
    },
    sighUpHTML: function (main) {
        var signHTML =
            `
        <section id="content">
                <h3>스드메 회원가입</h3>
                <table id="signTable">
                    <tr>
                        <td><label for="id"><span class="dotC">●</span> 아이디</label></td>
                        <td><input type="email" name="id" id="id"/></td>
                    </tr>
                    <tr>
                        <td><label for="password"><span class="dotC">●</span> 비밀번호</label></td>
                        <td><input type="password" name="password" id="password"/></td>
                    </tr>
                    <tr>
                        <td><label for="phoneNumber"><span class="dotC">●</span> 연락처</label></td>
                        <td>
                            <!-- <input type="number" name="phoneNumber" class="phoneNumber"/>--->
                            <select name="number1" id="number1" name="sdmTel1" class="phoneNumber">
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                            </select> -
                            <input type="number" name="sdmTel2" class="phoneNumber"/> -
                            <input type="number" name="sdmTel3" class="phoneNumber"/>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="addr"><span class="dotC">●</span> 신혼집 주소</label></td>
                        <td>
                            <div>
                                <label for="addr">시&nbsp;&nbsp;&nbsp;</label>
                                <input type="text" name="addr1" class="addr"/>
                            </div>
                            <div>
                                <label for="addr">도&nbsp;&nbsp;&nbsp;</label> 
                                <input type="text" name="addr2" class="addr"/>
                            </div>
                            <div>
                                <label for="addr">군&nbsp;&nbsp;&nbsp;</label> 
                                <input type="text" name="addr3" class="addr"/>
                            </div>
                            <div>
                                <label for="addr">상세</label> 
                                <input type="text" name="addr4" class="addr"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="date"><span class="dotC">●</span> 결혼예정일</label></td>
                        <td><input type="date" name="date" id="date"/></td>
                    </tr>
                </table>
            </section>
        `
        return (commonHTML(main, signHTML, "sign"))
    },
    questionHTML: function (main, login, qsData) {
        var tag = '';
        for (var q of qsData) {
            tag +=
                `<tr class='qsTr'>
                    <td class="qsId">${q.id}</td>
                    <td class="qstitle">${q.title}</td>
                    <td class="qsWriter">${q.writer}</td>
                    <td class="qsDate">${q.date}</td>
                    <td class="qsTo">${q.to}</td>
                </tr>`;
        }

        var qsHTML = `
        <section id="content">
                <div id="qsList">
                    <div class="qsTitle" style="display:flex;justify-content: space-between; align-items: center;">
                        <h2>문의</h2>
                        <a class='qsBt' href="javascript:questionWrite();">문의하기</a>
                    </div>
                    <div class="search_wrap">
                        <label for="word">
                            검색
                        </label>
                        <input type="text" name="word" id="word">
                    </div>
                    <div class="qsList_box">
                        <table class="qsTable">
                            <thead>
                                <th>번호</th> <th>제목</th> <th>작성자</th>
                                <th>작성일</th> <th>답변</th>
                            </thead>
                            <tbody id="qs">
                                ${tag}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt">
                    <a href="/${login.url}">${login.text}</a>
                </div>
            </section>
        </main>
    </div>
        `
        var modal =
            `
    <div id="qsModal" style="display:none;">
        <div class="modalBackground"></div>
        <div class="qsInputBox">
            <h3>문의글 작성</h3>
            <div class="qsInput">
                <input type="text" name="title" id="title"/>
                <label for="title">제목</label>
            </div>
            <div class="qsInput">
                <textarea name="qsContent" id="qsContent"></textarea>
                <label for="qsContent">문의내용</label>
            </div>
            <div class="qsRegBt">
                <a href="javascript:qsSave();">완료</a>
            </div>
        </div>
    </div>
    `
        return (commonHTML(main, qsHTML, "question"))
    }
}


function commonHTML(main, html, css) {
    var menu = "";
    for (var key of Object.keys(main.menu)) {
        menu += `<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`
    }
    return (`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>스드메의 문단속</title>
        
            <!--jquery-->
            <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
            <!--bootstrap-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
            <link rel="stylesheet" href="./lib/main.css">
            <link rel="stylesheet" href="./lib/${css}.css">

        </head>
        <body>
            <div id="wrap">
                <header id="header">
                    <div class="logo"><a href="/"><img src="./image/${main.logo}"/></a></div>
                    <nav class="nav">
                        <ul class="menuList">
                            ${menu}
                        </ul>
                    </nav>
                </header>
                <main id="main">
                    ${html}
                </main>
            </div>
        </body>
        </html>
        `);
}