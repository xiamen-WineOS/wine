<template>
  <article>
    <header>
      <h2 class="margin-t">{{article.title}}</h2>
      <div class="relative-info">
      	作者： <span class="color-secondary">{{article.author ? article.author : '作者名字'}}</span> 发布时间： <span class="color-secondary">{{article.publishTime}}</span>
      </div>
    </header>
    <div class="article-section" v-html="article.content">
    </div>
  </article>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        article: {
          title: '',
          content: '',
          publishTime: '',
          author: ''
        }
      }
    },
    mounted () {
      this.getArticle()
    },
    methods: {
      getArticle () {
        var params = parseInt(this.$route.params.id)
        this.$store.dispatch('FETCH_ARTICLE', params)
      }
    },
    computed: {
      ...mapState({
        articles: state => state.article
      })
    },
    watch: {
      $route (nv) {
        this.getArticle()
      },
      articles (nv) {
        if (nv) {
          this.article = nv
        }
      }
    }
  }
</script>
<style>
  .relative-info {
    font-size: 12px;
    & span {
      margin-left: 6px;
      margin-right: 1rem;
    }
  }
</style>
