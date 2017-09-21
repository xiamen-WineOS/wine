<template>
  <section class="team">
    <sub-header></sub-header>
    <div class="row inner">
      <div class="large-24 columns">
        <div class="media-object newslist" v-for="(item, index) in articleList">
          <div class="media-object-section shrink" v-if="item.articlePageImageUrl">
            <div class="img">
              <a @click="previewArticle(item.id)">
                <img :src="item.articlePageImageUrl" :alt="item.title"/>
              </a>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a v-text="item.title" @click="previewArticle(item.id)">贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div v-text="item.publishTime">2017-06-24</div>
            <p class="white-space3" v-text="item.description">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="data.total">
      </el-pagination>
    </div>
    <article-preview :articleList="articleList" :dialogVisible="preview" :arId="arId" @close="preview = false"></article-preview>
  </section>
</template>
<script>
import { fetchArticleList } from '../../api'
import ArticlePreview from '@/components/ArticlePreview'
import SubHeader from '@/components/SubHeader'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      articleList: [],
      data: Object,
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
        this.data = res.data
        console.log('sss',res.data)
        this.articleList = res.data.content
      })
    },
    previewArticle (id) {
      this.arId = id
      this.preview = true
    }
  },
  watch: {
    $route () {
      this.getArticleList()
    }
  },
  components: {
    ArticlePreview,
    SubHeader
  }
}
</script>
<style>
  @import 'css/variable.css';
  .newslist {
    border-bottom: 1px dashed #ddd;
    &:last-child{
      border: none;
    }
    & .img{
      width: 140px;
    }
    & h3{
      margin-bottom: 6px;
      & + div{
        color: var(--color-secondary);
        font-size: 12px;
      }
    }
    & p{
      font-size: 12px;
      text-indent: 0;
    }
    & .white-space3{
      text-align: left;
    }
  }
  @media only screen and (max-width: 640px) {
  	.newslist .img{
  	  width: 100px;
  	}
  }
</style>