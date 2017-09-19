<template>
  <section class="team">
    <header>
      <h2 class="margin-t">团队管理</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3 teams">
      <div class="column">
        <div class="img">
          <a @click="previewArticle">
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p  class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column" v-for="(item, index) in articleList">
        <div class="img">
          <a @click="previewArticle(item.id)">
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p  class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <article-preview :dialogVisible="preview" :arId="arId"></article-preview>
  </section>
</template>
<script>
import { fetchArticleList } from '../../api'
import ArticlePreview from '@/components/ArticlePreview'
export default {
  data () {
    return {
      articleList: [],
      preview: false,
      arId: null
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    getArticleList () {
      var params = parseInt(this.$route.params.id)
      fetchArticleList(params).then((res) => {
        console.log(2222222222, res.data.content)
        this.articleList = res.data.content
      })
    },
    previewArticle (id) {
      console.log('team', id)
      this.arId = id
      this.preview = true
    }
  },
  components: {
    ArticlePreview
  }
}
</script>
<style>
  @import 'css/variable.css';
  .img a{
    display: inline-block;
  }
  .teams{
    & .name{
      text-align: center;
      margin-top: 1rem;
    }
    & p{
        padding: 0 10px;
    }
  }
</style>