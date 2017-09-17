<template>
  <div class="side-nav">
    <ul class="margin-l">
      <li v-for="(item, index) in navList" key="index" >
        <router-link 
          :to="{ name: item.templateName, params: {parentId: item.parentId, id: item.id}}">
          {{item.chineseName}} <i :data-parent="item.parentId" class="el-icon-arrow-right"></i>
        </router-link>
        <!--<a @click="fetchArticle(item.templateName, item.id)">{{item.chineseName}}<i class="el-icon-arrow-right"></i></a>-->
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { fetchCatalog } from '../../api'
  export default {
    data () {
      return {
        navList: [],
        asyncTree: null
      }
    },
    created () {
    },
    computed: {
      ...mapState({
        catalogTree: state => state.catalogTree
      })
    },
    mounted () {
      this.getSubcatalog()
    },
    methods: {
      getSubcatalog () {
        var parentId = parseInt(this.$route.params.parentId)
        if (parentId && JSON.stringify(this.catalogTree) != '{}') {
          this.navList = this.catalogTree[parentId].children
        }
      }
    },
    watch: {
      catalogTree (nv) {
        this.getSubcatalog()
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
    & a {
      color: #666;
      display: block;
      padding: 0 10px;
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
    &:hover a, & .router-link-exact-active{
      color: color(var(--color-primary) shade(20%));
      & i{
        right: 0;
        opacity: 1;
      }
    }
    &:hover a:before, & .router-link-exact-active:before{
      left: 0;
    }
  }
</style>
