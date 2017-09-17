import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

import Ar from '@/views/Ar'
import Timeline from '@/views/TimelineList'
import HonorList from '@/views/HonorList'
import TeamList from '@/views/TeamList'
import NewsList from '@/views/NewsList'
import ProductList from '@/views/ProductList'
import FeedBook from '@/views/FeedBook'
import Recruitment from '@/views/Recruitment'

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
      name: 'index',
      component: Index
    }, {
      path: '/ar/:id',
      name: 'ar',
      component: Ar
    }, {
      path: '/about/timeline',
      name: 'timeline',
      component: Timeline
    }, {
      path: '/about/honor',
      name: 'honor',
      component: HonorList
    }, {
      path: '/about/team',
      name: 'team',
      component: TeamList
    }, {
      path: '/news/:id',
      name: 'news',
      component: NewsList
    }, {
      path: '/product/:id',
      name: 'product',
      component: ProductList
    }, {
      path: '/contact/feedbook/:id',
      name: 'feedbook',
      component: FeedBook
    }, {
      path: '/contact/Recruitment/:id',
      name: 'recruitment',
      component: Recruitment
    }]
})