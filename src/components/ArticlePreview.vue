<template>
  <el-dialog top="20px" :visible.sync="articleVisible" custom-class="article" @close="close">
    <article class="article-content no-border" v-if="article">
      <header>
        <div class="h-top">
          <span class="bookmark" v-text="subName"></span>
        </div>
        <h2 v-text="article.title">说好一起读书何不如期赴约</h2>
        <div class="h-bottom">
          <a v-if="article.author">{{article.author}}</a>
          <span>{{article.publishTime}}</span>
        </div>
      </header>
      <div class="article-section" v-html="article.content">
        <p>div在html早期版本就支持了，section和article是html5提出的两个语义化标签。如果只是针对一个块内容做样式化，三者并无区别。</p>
        <p>作为语义化标签，section 应用的典型场景有文章的章节、标签对话框中的标签页、或者论文中有编号的部分。一般来说，当元素内容明确地出现在文档大纲中时，section 就是适用的。</p>
        <p>对于article标签来说，无论从结构上还是内容上来说，article 本身就是独立的、完整的。有个最简单的判断方法是看这段内容脱离了所在的语境，是否还是完整的、独立的，如果是，则应该用article标签。</p>
        <p>div section article ，语义是从无到有，逐渐增强的。div 无任何语义，仅仅用作样式化或者脚本化，对于一段主题性的内容，则就适用 section，而假如这段内容可以脱离上下文，作为完整的独立存在的一段内容，则就适用 article。原则上来说，能使用 article 的时候，也是可以使用 section 的，但是实际上，假如使用 article 更合适，那么就不要使用 section 。</p>
      </div>
      <div v-if="article.keyWords && article.keyWords.length > 0" class="ar-tags">
        <div class="color-secondary font-s12 margin-b">相关标签</div>
        <el-tag v-for="tag in article.keyWords" :key="tag" type="gray">{{tag}}</el-tag>
      </div>
      <div class="article-pages font-s14 color-primary el-row">
        <div class="el-col el-col-20">
          <span @click="previewAr">上一篇</span>
        </div>
        <div class="el-col el-col-4 text-right">
          <span @click="nextAr">下一篇</span>
        </div>
      </div>
    </article>

  </el-dialog>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      subName: '',
      currArIndex: null,
      articleVisible: false
    }
  },
  props: {
    datas: Object,
    articleList: {
      type: Array,
      default: function () {
        return []
      }
    },
    dialogVisible: Boolean,
    arId: null
  },
  computed: {
    ...mapState({
      article: state => state.article,
      catalogTree: state => state.catalogTree
    })
  },
  watch: {
    dialogVisible (nv) {
      this.articleVisible = nv
      this.currArIndex = this.getIndex()
      console.log(this.currArIndex)
    },
    arId (nv) {
      this.$store.dispatch('FETCH_ARTICLE', nv)
      this.getCatalogName()
    }
  },
  created () {
    this.getCatalogName()
  },
  methods: {
    close () {
      this.$emit('close', false)
    },
    previewAr () {
      if (this.currArIndex > 0) {
        this.currArIndex--
        console.log(this.currArIndex)
        this.fetchArticle(this.currArIndex)
      }
    },
    nextAr () {
      if (this.currArIndex < this.articleList.length-1) {
        this.currArIndex++
        console.log(this.currArIndex)
        this.fetchArticle(this.currArIndex)
      }
    },
    getIndex () {
      for (let i = 0; i < this.articleList.length; i++) {
        if (parseInt(this.articleList[i].id) === this.arId) {
          return i
        } 
      }
    },
    fetchArticle (i) {
      var id = this.articleList[i].id
      this.$store.dispatch('FETCH_ARTICLE', id)
    },
    getCatalogName () {
      var id = parseInt(this.$route.params.id)
      var parentId = parseInt(this.$route.params.parentId)
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
  }
}
</script>
<style>
@import 'css/variable.css';
.article-content{
  padding-bottom: 100px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
  background: var(--panel-color);
  & header{
    padding: 1rem 2rem;
    & .bookmark{
      color: color(var(--color-warning) shade(40%));
    }
    & .source {
      float: right;
      font-size: 12px;
      color: var(--color-secondary);
    }
    & .h-top {padding: 1rem 0;}
    & h2{
      margin: 1rem 0 0 0;
    }
    & .h-bottom{
      padding: 1rem 0;
      & a{
        margin-right: 2rem;
      }
      & span{
        margin-right: 2rem;
        color: var(--color-secondary);
      }
    }
  }
  & .article-section{
    padding: 0rem 2rem 1rem;
  }
  & .article-footer {
    & > span{
      display: block;
      font-size: 12px;
      text-align: center;
      padding: 2rem;
    }
    & .user {
      width: 560px;
      margin: 0 auto;
      padding: 1rem;
      background: #f4f4f4;
      border-radius: 4px;
      position: relative;
      & .content{
        margin-bottom: 0;
        & .arInfo span{
          color: var(--color-secondary);
        }
      }
      & .follow{
        position: absolute;
        right: 1rem;
        top: 50%;
        margin-top: -14px;
      }
    }
  }
  & .ar-tags{
    padding: 3rem 2rem 0;
    & > span {
      margin-right: 10px;
    }
  }
  & .article-share{
    padding: 3rem 2rem 0;
    height: 16px;
    & .article-share-left{
      display: inline-block;
      & i{
        cursor: pointer;
        font-size: 16px;
        & span {
          font-size: 14px;
        }
      }
    }
    & .article-share-right{
      display: inline-block;
      float: right;
      & i{
        cursor: pointer;
        font-size: 16px;
        margin-left: 15px;
        & span {
          font-size: 14px;
        }
      }
    }
  }
  & .article-pages{
    padding: 3rem 2rem 0;
    & >div{
      & span{
        cursor: pointer;
      }
    }
  }
  & .article-related{
    padding: 2rem 2rem 0;
    & > div{
      height: 118px;
    }
    & a{
      display: inline-block;
      & strong{
        display: block;
        max-height: 42px;
        margin: 0 0 8px;
        overflow: hidden;
        font-size: 16px;
        padding: 10px 10px 0;
      }
      & span{
        display: block;
        padding: 0 10px;
        font-size: 12px;
        overflow: hidden;
        max-height: 50px;
      }
    }
  }
}
.header-bg {
  & img {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
	.article.el-dialog--small{
	  width: 100%;
	  height: 100%;
	  top: 0 !important;
	}
}
</style>
