import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views//home/HomeView.vue'
import usersView from '../views/usersView/usersView.vue';
import userProfile from '../views/userProfileView/userProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/usersView/:name',
      name: 'userView',
      component: usersView
    },
    {
      path: '/usersView/profile/:name',
      name: 'userProfile',
      component: userProfile
    }, 
  ]
})

export default router
