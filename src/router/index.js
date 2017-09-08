import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

import List from '@/views/list'
import Intro from '@/views/list/Intro'
import TimeLine from '@/views/list/TimeLine'
import Honor from '@/views/list/Honor'
import Team from '@/views/list/Team'

import News from '@/views/news/News'

import Wine from '@/views/products/Wine'

import Culture from '@/views/culture/Cphilosophy'

import Contact from '@/views/contact/Contact'
import FeedBook from '@/views/contact/FeedBook'
import Map from '@/views/contact/Map'
import Recruitment from '@/views/contact/Recruitment'

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
    },
    {
      path: '/about',
      component: List,
      children: [{
        path: '/about/',
        name: 'intro',
        component: Intro
      }, {
        path: '/about/timeline',
        name: 'timeline',
        component: TimeLine
      }, {
        path: '/about/honor',
        name: 'honor',
        component: Honor
      }, {
        path: '/about/team',
        name: 'team',
        component: Team
      }]
    }, {
      path: '/news',
      component: List,
      children: [{
        path: '/news/:caId',
        name: 'news',
        component: News
      }]
    },
    {
      path: '/product',
      component: List,
      children: [{
        path: '/product/:caId',
        name: 'product',
        component: Wine
      }]
    },
    {
      path: '/culture',
      component: List,
      children: [{
        path: '/culture/:caId',
        name: 'culture',
        component: Culture
      }]
    },
    {
      path: '/contact',
      component: List,
      children: [{
        path: '/',
        name: 'contact',
        component: Contact
      }, {
        path: '/contact/map',
        name: 'map',
        component: Map
      }, {
        path: '/contact/feedbook',
        name: 'feedbook',
        component: FeedBook
      }, {
        path: '/contact/Recruitment',
        name: 'recruitment',
        component: Recruitment
      }]
    }
  ]
})