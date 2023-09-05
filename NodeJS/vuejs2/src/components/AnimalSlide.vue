<script setup>
// props 타입 종류 : String, Number, Array, Object, Boolean, date, Function
defineProps({
    msg: { type: String, required: true },
    // 넘겨받은 값의 타입이 무엇이냐(문자열) => 타입을 명확히 해야 오류 발생 최소화
    info: { type: Array, required: true }
    // required:true는 반드시 꼭 들어와야 하는 값이라는 뜻
})
</script>

<template>
    <div class="slide">
        <h2>{{ msg }}</h2>
        <div class="slide_box">
            <div class="card" v-for="a in info" :key="a"> <!-- 배열을 받아와서 반복하는 경우 -->
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99AA67405B213AAC30" />
                <p>{{ a }}</p>
                <p>수컷</p>
            </div>
        </div>
    </div>
</template>

<style></style>