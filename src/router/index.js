import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from './authGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: authGuard
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import('../views/SignupView.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
