import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/home/home'
import City from './../pages/city/city'
Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ],
  mode: 'history'
})
