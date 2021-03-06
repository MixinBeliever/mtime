import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Buy from './views/Buy.vue'
import Shop from './views/Shop.vue'
import Commerce from './views/Commerce'
import Discover from './views/Discover.vue'
import Charts from './views/Discover/Charts'
import Chartsxq from './views/Discover/Chartsxq'
import Movie from './views/Discover/Movie'
import Noviexq from './views/Discover/details/Noviexq'
import News from './views/Discover/News'
import Preview from './views/Discover/Preview'
import Previewxq from './views/Discover/details/Previewxq'
import My from './views/My.vue'
import Search from './views/Shop/router/Search.vue'
import shopIndex from './views/Shop/router/Index.vue'

import Hit from "./views/Buy/Hit"
import Coming from "./views/Buy/Coming"
import Hotcontent from "./views/Index/hot/Hotcontent.vue"
import Searchs from "./views/Index/search/Search.vue"
import Details from "./views/Details/Details"
import myDetails from "./views/Buy/Mydateils"


Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/details/:detailsId',
      name: 'details',
      component: Details
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'home',
      component: Index,
      alias: '/home'
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
          path: '/buy/coming/:comingid',
          component :myDetails
        },
        {
          path :'*',
          redirect : '/buy/hit'
        }
      ]
    },

    {
      path: '/commerce',
      name: 'commerce',
      component: Commerce
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
      path:'/chartsxq/:myid',
      component: Chartsxq
    },
    {
      path:'/noviexq/:myid',
      component: Noviexq
    },
    {
      path:'/previewxq/:myid',
      component: Previewxq
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }

  ]
})
