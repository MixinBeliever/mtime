import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Buy from './views/Buy.vue'
import Shop from './views/Shop.vue'
import Discover from './views/Discover.vue'
import My from './views/My.vue'
import Hit from "./views/Buy/Hit"
import Coming from "./views/Buy/Coming"
import Hotcontent from "./views/Index/hot/Hotcontent.vue"
import Search from "./views/Index/search/Search.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

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
      path: '/hotcontent/:hotcontentid',
      component: Hotcontent,
     },
     {
      path: '/search',
      component: Search,
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
