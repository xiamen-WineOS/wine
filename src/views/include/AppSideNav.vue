<template>
  <div class="side-nav">
    <ul class="margin-l">
      <router-link v-for="(item, index) in nav" tag="li" key="index" :to="{name: item.name, params: {caId: item.id}}">
        <a>{{item.title}}<i class="el-icon-arrow-right"></i></a>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      nav: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    watch: {
      nav (nv) {
        console.log(nv)
      }
    }
  }
</script>
<style scoped="scoped">
  @import 'css/variable.css';
  .side-nav li {
    list-style: none;
    height: 56px;
    line-height: 56px;
    position: relative;
    border-bottom:1px solid #f1f1f1;
    overflow: hidden;
    &:before{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background: var(--color-primary);
      position: absolute;
      left: -100%;
      bottom: 0;
      z-index: 1;
      transition: all .3s;
    }
    & a {
      color: #666;
      display: block;
      padding: 0 10px;
      & i {
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -6px;
        opacity: 0;
        transition: all .3s;
      }
      &:hover i{
        right: 0;
        opacity: 1;
      }
    }
    & span {
      position: absolute;
      right: 10px;
      top: 0;
      color: var(--color-warning);
      font-size: 12px;
    }
    &:hover a, &.router-link-exact-active a{
      color: color(var(--color-primary) shade(20%));
      & i{
        right: 0;
        opacity: 1;
      }
    }
    &:hover:before, &.router-link-exact-active:before{
      left: 0;
    }
  }
</style>
