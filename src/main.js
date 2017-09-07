// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/element/theme/index.css'
import Element from 'element-ui'
import { Breadcrumb, BreadcrumbItem, Popover, Pagination, Table, TableColumn} from 'element-ui'

import Vue from 'vue'
import App from './App'
import router from './router'
import Components from './components'
import { createStore } from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

// 引入“饿了么”界面组件
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Popover)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)

// 引入swiper
Vue.use(VueAwesomeSwiper)

// 引入自定义组件
Vue.use(Components)

/* eslint-disable no-new */
const store = createStore()
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
