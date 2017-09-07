import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      catalogTree: {
        about: {
          title: '关于和八达',
          id: '1',
          children: [
            {
              title: '企业概括',
              name: 'intro',
              id: '1'
            },
            {
              title: '企业历程',
              name: 'timeeline',
              id: '2'
            },
            {
              title: '资质荣誉',
              name: 'honor',
              id: '3'
            },
            {
              title: '团队管理',
              name: 'team',
              id: '4'
            }
          ]
        },
        news: {
          title: '新闻资讯',
          name: 'news',
          id: '2',
          children: [
            {
              title: '行业新闻',
              name: 'news',
              id: '1'
            },
            {
              title: '最新公告',
              name: 'news',
              id: '2'
            },
            {
              title: '行业动态',
              name: 'news',
              id: '3'
            }
          ]
        }
      }
    },
    actions,
    mutations,
    getters
  })
}
