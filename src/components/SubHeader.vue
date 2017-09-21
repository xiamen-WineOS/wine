<template>
  <header>
    <h2 class="margin-t">{{subName}}</h2>
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        subName: ''
      }
    },
    created () {
      this.getCatalogName()
    },
    computed: {
      ...mapState({
        catalogTree: state => state.catalogTree
      })
    },
    methods: {
      getCatalogName () {
        var id = parseInt(this.$route.params.id)
        var parentId = parseInt(this.$route.params.parentId)
        if (parentId && JSON.stringify(this.catalogTree) != '{}') {
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
      $route () {
        this.getCatalogName()
      }
    }
  }
</script>
