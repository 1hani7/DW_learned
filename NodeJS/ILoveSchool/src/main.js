import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session/index' // 쿠키 대신 세션으로 로그인 처리 (연결유지)

var sessionOptions = {
    persist:true,
}

const firebaseConfig = {
    apiKey: "AIzaSyAKXykzqu9Mm9j3Ll_qR4pHZPJeXP-LtXc",
    authDomain: "iloveschool-45412.firebaseapp.com",
    projectId: "iloveschool-45412",
    storageBucket: "iloveschool-45412.appspot.com",
    messagingSenderId: "954249480820",
    appId: "1:954249480820:web:566af80f80d3096d149f21",
    measurementId: "G-TQTX2YZNQW"
};

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(VueSession, sessionOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
