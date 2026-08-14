import { createRouter, createWebHistory } from 'vue-router'

const routes= [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/commission',
        name: 'commission',
        component: () => import('../views/WIPView.vue'), // TODO TEMP DEBUG
        // component: () => import('../views/CommissionView.vue'),
    },
    {
        path: '/links',
        name: 'links',
        component: () => import('../views/LinkView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes        
})

export default router