import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Buy from './views/Buy.vue'
import Shop from './views/Shop.vue'
import Discover from './views/Discover.vue'
import My from './views/My.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'home',
      component: Index
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }

  ]
})
