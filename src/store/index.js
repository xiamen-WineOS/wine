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
        1: {
          title: '首页',
          name: 'index',
          id: '1'
        },
        2: {
          title: '关于和八达',
          name: 'ar',
          id: '2',
          children: [
            {
              title: '企业概括',
              name: 'ar',
              id: '3'
            },
            {
              title: '企业历程',
              name: 'timeline',
              id: '4'
            },
            {
              title: '资质荣誉',
              name: 'honor',
              id: '5'
            },
            {
              title: '团队管理',
              name: 'team',
              id: '6'
            }
          ]
        },
        7: {
          title: '新闻资讯',
          name: 'news',
          id: '7',
          children: [
            {
              title: '行业新闻',
              name: 'news',
              id: '8'
            },
            {
              title: '最新公告',
              name: 'news',
              id: '9'
            },
            {
              title: '行业动态',
              name: 'news',
              id: '10'
            }
          ]
        },
        11: {
          title: '产品展示',
          name: 'product',
          id: '11',
          children: [
            {
              title: '习酒',
              name: 'product',
              id: '12'
            },
            {
              title: '洋酒',
              name: 'product',
              id: '13'
            },
            {
              title: '红酒',
              name: 'product',
              id: '14'
            }
          ]
        },
        15: {
          title: '企业文化',
          name: 'ar',
          id: '15',
          children: [
            {
              title: '企业理念',
              name: 'ar',
              id: '16'
            },
            {
              title: '习酒文化',
              name: 'ar',
              id: '17'
            },
            {
              title: '洋酒文化',
              name: 'ar',
              id: '18'
            },
            {
              title: '红酒文化',
              name: 'ar',
              id: '19'
            }
          ]
        },
        20: {
          title: '联系我们',
          name: 'ar',
          id: '20',
          children: [
            {
              title: '联系我们',
              name: 'ar',
              id: '21'
            },
            {
              title: '企业位置',
              name: 'ar',
              id: '22'
            },
            {
              title: '留言中心',
              name: 'recruitment',
              id: '23'
            },
            {
              title: '招聘信息',
              name: 'feedbook',
              id: '24'
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
