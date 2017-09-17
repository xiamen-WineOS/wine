<template>
  <div class="main">
    <div class="list-title">
      <breadcrumb></breadcrumb>
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
  import Breadcrumb from '@/views/include/Breadcrumb'
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
      Breadcrumb,
      Wine
    }
  }
</script>
<style>
@import 'css/variable.css';
</style>
