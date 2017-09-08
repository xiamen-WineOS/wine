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
        index: {
          title: '首页',
          name: 'index',
          id: ''
        },
        about: {
          title: '关于和八达',
          name: 'intro',
//        指定默认子栏目ID
          id: 'name',
          children: [
            {
              title: '企业概括',
              name: 'intro',
//            当前栏目ID
              id: '1'
            },
            {
              title: '企业历程',
              name: 'timeline',
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
          id: '1',
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
        },
        product: {
          title: '产品展示',
          name: 'product',
          id: '1',
          children: [
            {
              title: '习酒',
              name: 'product',
              id: '1'
            },
            {
              title: '洋酒',
              name: 'product',
              id: '2'
            },
            {
              title: '红酒',
              name: 'product',
              id: '3'
            }
          ]
        },
        culture: {
          title: '企业文化',
          name: 'culture',
          id: '1',
          children: [
            {
              title: '企业理念',
              name: 'culture',
              id: '1'
            },
            {
              title: '习酒文化',
              name: 'culture',
              id: '2'
            },
            {
              title: '洋酒文化',
              name: 'culture',
              id: '3'
            },
            {
              title: '红酒文化',
              name: 'culture',
              id: '4'
            }
          ]
        },
        contact: {
          title: '联系我们',
          name: 'contact',
          id: '1',
          children: [
            {
              title: '联系我们',
              name: 'contact',
              id: '1'
            },
            {
              title: '企业位置',
              name: 'map',
              id: '2'
            },
            {
              title: '留言中心',
              name: 'recruitment',
              id: '3'
            },
            {
              title: '招聘信息',
              name: 'feedbook',
              id: '4'
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
