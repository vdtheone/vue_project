// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/home.vue'
import About from './components/about.vue'

const routes = [
    {
        path: '/',
        // name: 'Home',
        component: Home
    },
    {
        path: '/about',
        // name: 'about',
        component: About
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
