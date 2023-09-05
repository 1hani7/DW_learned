// router.js

import { createWebHistory, createRouter } from 'vue-router';
// npm install vue-router@4

const routes = [
    {
        path: "/",
        name: "MyHome",
        component: () => import('@/components/MyHome.vue')
    },
    {
        path: "/login",
        name: "SdmLogin",
        component: () => import('@/components/SdmLogin.vue')
    },
    {
        path: "/sign",
        name: "SignIn",
        component: () => import('@/components/SignIn.vue')
    },
    {
        path: "/qs",
        name: "QsBoard",
        component: () => import('@/components/QsBoard.vue')
    },
    {
        path:"/dress",
        name:"dress",
        component: () => import('@/components/DressPage.vue')
    },
    {
        path:"/makeup",
        name:"makeup",
        component: () => import('@/components/MakeUp.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;