import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import LiveShows from '../views/LiveShows.vue'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/liveshows',
    name: 'LiveShows',
    component: LiveShows
  },
  {
    path: '/404',
    alias: '*',
    name: 'ErrorPage',
    component: ErrorPage
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition;
    }else{
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes
})

export default router
