import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/page/Home'),
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
