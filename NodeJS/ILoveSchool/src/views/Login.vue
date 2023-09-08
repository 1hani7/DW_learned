<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" v-model="email" placeholder="email"> <br>
        <input type="password" v-model="password" placeholder="password"> <br>
        <button v-on:click="login">로그인</button>
        <p>또는 페이스북 로그인<br>
            <button v-on:click="facebookLogin">
                <img src="../assets/facebook.png">
            </button>
        </p>
        <p>만약 계정이 없다면, <RouterLink to="/signup">회원가입</RouterLink>을 먼저 진행해주세요.</p>
    </div>
</template>

<script>
import {RouterLink, useRouter} from 'vue-router'
import firebase from 'firebase'

const router = useRouter();

var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
    'display':'popup'
})

const sessionStorage = window.sessionStorage


export default{
    name:'login',
    data(){
        return { email:'', password:'' }
    },
    methods:{ // 다른 컴포넌트에 넘겨주기도 할 거면 setup()로 하기
        // 이 파일 내에서만 사용할 함수들은 methods 안에 작성함
        facebookLogin(){
            firebase.auth().signInWithPopup(provider).then(
                (result) => {
                    var token = result.credential.accessToken
                    var user = result.user
                    alert('로그인성공')
                }
            ).catch( (err) => alert('에러 : ' + err.message) )
        },
        login(){
            firebase.auth().signInWithEmailAndPassword(
                this.email, this.password
            ).then( (user) => {
                sessionStorage.setItem('user_id',  user.user.id)
                this.$router.replace('msg') // $router 주소를 /msg로 바꿔서 페이지 변경
            }).catch( (err) => {
                alert('에러 : ' + err.message)
            })
        }
    }
}
</script>

<style scoped>
    .login{
        margin:0 auto;
        display:flex;
        flex-direction:column;
    }
    .login input{
        height:30px;
        padding:5px 15px;
    }
    button:nth-child(2){
        width:130px; padding:0; border:none;
        background:none; outline: none;
    }
    button img{ width:inherit; cursor:pointer;}
</style>