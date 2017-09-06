import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

import List from '@/views/List'
import Intro from '@/views/List/Intro'
import TimeLine from '@/views/List/TimeLine'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_PATH,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: List,
      children: [{
        path: '',
        component: Intro
      }, {
        path: '/timeline',
        component: TimeLine
      }]
    }
  ]
})
