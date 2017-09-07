<template>
  <div class="main">
    <div class="list-title">
      <div class="row">
        <div class="large-24 columns">
          <h2 class="margin-t">关于和八达</h2>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于和八达</el-breadcrumb-item>
            <el-breadcrumb-item>企业概况</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="large-5 columns hide-for-large">
        <h3 class="sub-type">类型</h3>
        <app-side-nav :nav="navList"></app-side-nav>
      </div>
      <div class="large-19 columns">
        <div class="article-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSideNav from '@/views/include/AppSideNav'
  export default {
    data () {
      return {
        navList: [{
          'title': '企业概况',
          'name': 'intro'
        }, {
          'title': '企业历程',
          'name': 'timeline'
        }, {
          'title': '资质荣誉',
          'name': 'honor'
        }, {
          'title': '团队管理',
          'name': 'team'
        }]
      }
    },
    created () {
      this.getNav()
    },
    methods: {
      getNav () {
        this.navList = this.$store.state.catalogTree['about'].children
        console.log('router', this.navList)
      }
    },
    watch: {
      $route (nv) {
        console.log(nv)
        this.getNav()
      }
    },
    components: {
      AppSideNav
    }
  }
</script>
<style>
@import 'css/variable.css';
</style>
