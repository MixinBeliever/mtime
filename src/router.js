import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Buy from './views/Buy.vue'
import Shop from './views/Shop.vue'
import Discover from './views/Discover.vue'
import My from './views/My.vue'
<<<<<<< HEAD
import Search from './views/Shop/router/Search.vue'
import shopIndex from './views/Shop/router/Index.vue'

=======
import Hit from "./views/Buy/Hit"
import Coming from "./views/Buy/Coming"
>>>>>>> 1fc7f361cc29eb7cfd371bd61fffcc6f4392c175


Vue.use(Router)

export default new Router({
  //mode: 'history',
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
      component: Buy,
      children:[
        {
          path: "hit",
          component : Hit
        },
        {
          path: "coming",
          component : Coming
        },
        {
          path :'/',
          redirect : '/buy/hit'
        },
        {
          path :'*',
          redirect : '/buy/hit'
        }
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: 'search',
          component: Search
        },
        // {
        //   path: '*',
        //   redirect: '/shop/index'
        // },
        {
          path: '/',
          redirect: '/shop/index'
        },
        {
          path: 'index',
          component: shopIndex
        }
      ]
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
