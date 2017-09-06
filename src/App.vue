<template>
  <div id="app">
    <app-header></app-Header>
    <div class="wrapper">
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    <fixed-nav></fixed-nav>
  </div>
</template>

<script>
import AppHeader from '@/views/include/AppHeader'
import AppFooter from '@/views/include/AppFooter'
import FixedNav from '@/views/include/FixedNav'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    FixedNav
  }
}
</script>
<style src="./assets/css/foundation.css"></style>
<style src="./assets/css/master.css"></style>
