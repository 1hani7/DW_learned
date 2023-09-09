import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const sessionStorage = window.sessionStorage // 세션 스토리지 가져오기

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      // path: '/logout',
      // name: 'home',
      // component: HomeView,
      // beforeEnter: (to, from, next) => {
      //   if( sessionStorage.getItem('user_id') !==null ){
      //     sessionStorage.removeItem('user_id')
      //   }
      //   return next();
      // }
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/CelebrationMsg.vue'),
      beforeEnter: (to, from, next) => { // 로그인 했는지 거르는 방법
        // from : 현재 라우터로 오기 이전 라우트
        // next : *필수) next에 전달되는 인자에 따라 다름 => next() : 현재, next('/') : 루트
        if( sessionStorage.getItem('user_id') !== null ) return next();

        alert('로그인이 필요합니다.')
        // sessionStorage.removeItem() 삭제하는거 - logout에 사용
      }
    }
  ]
})

export default router
