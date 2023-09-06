import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.js'

const app = createApp(App)

// 날짜
const offset = (new Date().getTimezoneOffset())
const today = new Date( (new Date() - (offset*60*1000)) ).toISOString().split('T')[0]
app.provide('today',today)
    // ㄴ main.js가 제일 먼저 실행되는 상위 파일인데,
    // ㄴ 여기서 provide를 해준 것들은 하위 파일에서 사용 가능해짐

app.use(createPinia())
app.use(router)

app.mount('#app')

