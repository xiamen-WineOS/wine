<template>
  <div class="row">
    <div class="large-24 columns">
      <h2 class="margin-t">关于和八达</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: $route.path}">{{parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{subName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        path: null,
        parentName: '',
        subName: ''
      }
    },
    computed: {
      ...mapState({
        catalogTree: state => state.catalogTree 
      })
    },
    mounted () {
      this.getBreadcrum()
    },
    methods: {
      getBreadcrum () {
        var parentId = parseInt(this.$route.params.parentId)
        var id = parseInt(this.$route.params.id)
        if (parentId && JSON.stringify(this.catalogTree) != '{}') {
          this.path = `/${this.catalogTree[parentId].templateName}/${parentId}/${parentId + 1}`
          this.parentName = this.catalogTree[parentId].chineseName
          var children = this.catalogTree[parentId].children
          for (let i of children) {
            if (i.id === id) {
              this.subName = i.chineseName
            }
          }
        }
      }
    },
    watch: {
      catalogTree (nv) {
        this.getBreadcrum()
      },
      $route () {
        this.getBreadcrum()
      }
    }
  }
</script>