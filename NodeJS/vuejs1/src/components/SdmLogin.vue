<template>
    <main id="main">
        <section id="content">
            <h3>스드메 with 로그인</h3>
            <div class="login_wrap">
                <form name="loginf" id="loginf" method="get" action="/">
                    <input type="hidden" name="part" value="login_check">
                    <div class="login_box">
                        <div class="login_input">
                            <label for="sdmId">ID</label>
                            <input type="text" name="sdmId" id="sdmId" placeholder="아이디">
                        </div>
                        <div class="login_input">
                            <label for="sdmId">PW</label>
                            <input type="password" name="sdmPw" id="sdmPw" placeholder="비밀번호">
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
    </main>
</template>

<script>
export default {
    name: 'SdmLogin'
}
</script>

<style>
a {
    text-decoration: none;
    color: inherit;
}

#main {
    display: block;
}

#content {
    width: 40%;
    padding: 40px;
    margin: 100px auto;
    border: 4px solid bisque;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login_wrap>* {
    margin: 20px 0;
}

.login_box input {
    height: 30px;
    padding-left: 10px;
    outline: none;
}

.login_box .login_input #sdmId {
    margin-bottom: 10px;
}

.login_box .login_bt {
    height: 40px;
    margin: 20px auto;
    background: rgb(235, 202, 162);
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
    border-radius: 15px;
    width: 100%;
    display: inline-block;
    text-decoration: none;
    color: white;
}

.login_box .login_bt:hover {
    border: 3px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    line-height: 35px;
}

.login_box .login_bt:active {
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
}

.login_input {
    display: flex;
    justify-content: space-between;
}

.joinAfind {
    display: flex;
    column-gap: 10px;
}
</style>