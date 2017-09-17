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
          <feed-book></feed-book>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSideNav from '@/views/include/AppSideNav'
  import Breadcrumb from '@/views/include/Breadcrumb'
  import FeedBook from '@/views/contact/FeedBook'
  export default {
    data () {
      return {
      }
    },
    components: {
      AppSideNav,
      Breadcrumb,
      FeedBook
    }
  }
</script>
<style>
@import 'css/variable.css';
</style>
