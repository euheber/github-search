import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views//home/HomeView.vue'
import usersView from '../views/usersView/usersView.vue';
import userProfile from '../views/userProfileView/userProfile.vue'
import favoritosView from '../views/favoritosView/favoritos.vue';
import repositoryView from '../views/repositoryView/repositoryView.vue';
import error404 from '../views/error/error404.vue';

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
    {
      path: '/favoritos',
      name: 'favoritos',
      component: favoritosView
    }, 
    {
      path: '/repository/:name',
      name: 'repository',
      component: repositoryView
    }, 
    { 
      path: '/:catchAll(.*)*',
      name: '404',
      component: error404
    }

  ]
})

export default router
