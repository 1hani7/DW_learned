<template>
    <main id="main">
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
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>답변</th>
                            </tr>
                        </thead>
                        <tbody id="qs">
                            <tr v-for="q in qdata" :key="q.id" class='qsTr'> <!--vue에선 태그에 반복문을 줄 수 있음-->
                                <td class="qsId">{{ q.id }}</td>
                                <td class="qstitle">{{ q.title }}</td>
                                <td class="qsWriter">{{ q.writer }}</td>
                                <td class="qsDate">{{ q.date }}</td>
                                <td class="qsTo">{{ q.to }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section id="side">
            <a class="login_bt" href="/login">LOGIN</a>
        </section>
    </main>
</template>

<script>
import data from '@/assets/question.json'; // vue에서 비동기로 json 파일 가져오는 법
const qdata = data;
export default {
    data(){
        return { qdata,  };
    },
    name: 'QsBoard'
}
</script>

<style>
@import '@/assets/question.css';
/** css 파일을 연결해주는 방법 */
/** @는 자동으로 연결된 절대주소(root) src 폴더를 말함 */
</style>