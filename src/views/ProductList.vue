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
        <app-side-nav></app-side-nav>
      </div>
      <div class="large-19 columns">
        <div class="article-content">
          <wine></wine>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSideNav from '@/views/include/AppSideNav'
  import Wine from '@/views/products/Wine'
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
    },
    watch: {
    },
    components: {
      AppSideNav,
      Wine
    }
  }
</script>
<style>
@import 'css/variable.css';
</style>
