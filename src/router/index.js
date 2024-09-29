import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard, noAuthGuard } from './authGuard'

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
      path: "/signup",
      name: "signup",
      component: () => import('../views/SignupView.vue'),
      beforeEnter: noAuthGuard
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/LoginView.vue'),
      beforeEnter: noAuthGuard
    }
  ]
})

export default router
