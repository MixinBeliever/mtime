import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Buy from './views/Buy.vue'
import Shop from './views/Shop.vue'
import Discover from './views/Discover.vue'
import Charts from './views/Discover/Charts'
import Movie from './views/Discover/Movie'
import News from './views/Discover/News'
import Preview from './views/Discover/Preview'
import My from './views/My.vue'
import Search from './views/Shop/router/Search.vue'
import shopIndex from './views/Shop/router/Index.vue'

import Hit from "./views/Buy/Hit"
import Coming from "./views/Buy/Coming"
import Hotcontent from "./views/Index/hot/Hotcontent.vue"
import Searchs from "./views/Index/search/Search.vue"


Vue.use(Router)

export default new Router({
  //mode: 'history',
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
      component: Searchs,
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
      component: Discover,
      
      children:[

        {
          path:'charts',
          component: Charts
        },
        {
          path:'movie',
          component: Movie
        },
        {
          path:'news',
          component: News
        },
        {
          path:'preview',
          component: Preview
        },{
          path:'',
          redirect:'/discover/news'
        },
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }

  ]
})
