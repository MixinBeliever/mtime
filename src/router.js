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
