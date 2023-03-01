import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views//home/HomeView.vue'
import userView from '../views/userView/userView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/userView/:name',
      name: 'userView',
      component: userView
    },
  ]
})

export default router
