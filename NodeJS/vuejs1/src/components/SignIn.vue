<template>
    <section id="main">
        <section id="content">
            <h3>스드메 회원가입</h3>
            <table id="signTable">
                <tr>
                    <td><label for="id"><span class="dotC">●</span> 아이디</label></td>
                    <td><input type="email" name="id" id="id" /></td>
                </tr>
                <tr>
                    <td><label for="password"><span class="dotC">●</span> 비밀번호</label></td>
                    <td><input type="password" name="password" id="password" /></td>
                </tr>
                <tr>
                    <td><label for="phoneNumber"><span class="dotC">●</span> 연락처</label></td>
                    <td>
                        <select name="number1" id="number1" class="phoneNumber">
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                        </select> -
                        <input type="number" name="sdmTel2" class="phoneNumber" /> -
                        <input type="number" name="sdmTel3" class="phoneNumber" />
                    </td>
                </tr>
                <tr>
                    <td><label for="addr"><span class="dotC">●</span> 신혼집 주소</label></td>
                    <td>
                        <div>
                            <label for="addr">시&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" name="addr1" class="addr" />
                        </div>
                        <div>
                            <label for="addr">도&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" name="addr2" class="addr" />
                        </div>
                        <div>
                            <label for="addr">군&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" name="addr3" class="addr" />
                        </div>
                        <div>
                            <label for="addr">상세</label>
                            <input type="text" name="addr4" class="addr" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label for="date"><span class="dotC">●</span> 결혼예정일</label></td>
                    <td><input type="date" name="date" id="date" /></td>
                </tr>
            </table>
        </section>
    </section>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style>
#main {
    display: block;
}

input {
    height: 35px;
    padding-left: 10px;
    width: 30%;
    outline: none;
}

.phoneNumber {
    height: 25px;
}

.dotC {
    color: #DBA42E;
}

#content {
    margin: 0 auto;
}

#signTable {
    border-top: 3px solid gray;
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
}

#signTable tr td {
    padding: 20px;
    border-bottom: 1px solid gray;
}

#signTable tr td:first-child {
    background: #FFEFB2;
    font-weight: 900;
}

.addr {
    margin: 10px 0;
}

.phoneNumber {
    width: 30%;
    height: 30px;
}</style>