<template>
  <section class="team">
    <header>
      <h2 class="margin-t">习酒</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3 inner-list">
      <div class="column" v-for="(item, index) in articleList">
        <div class="img">
          <a>
            <picture>
              <source :srcset="item.smallImageUrl" media="(min-width: 600px)"> 
              <img :src="item.bigImageUrl" :alt="item.name"/>
            </picture>
            <p>{{item.description}}</p>
          </a>
        </div>
        <div class="name"><a>{{item.name}}</a></div>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </section>
</template>
<script>
  import { fetchArticleList } from '../../api'
  export default {
    data () {
      return {
        articleList: []
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
      }
    },
    watch: {
      $route (nv) {
        this.getArticleList()
      }
    }
  }
</script>
<style>
  @import 'css/variable.css';
  .inner-list {
    & .img{
      & a{
        position: relative;
        display: block;
        border-top: 1px solid #f3f3f3;
        box-shadow: 0 1px 1px #d7e4ed;
        &:before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background: rgba(0,0,0,.6);
          opacity: 0;
          transition: all .4s;
        }
        & p {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 12px;
          opacity: 0;
          transform: translateY(10px);
          transition: all .3s ease .1s;
          padding: 10px;
          color: #fff;
        }
      }
      &:hover a:before{
        opacity: 1;
      }
      &:hover p {
        opacity: 1;
        transform: translateY(0);
      }
    }
    & .name{
      text-align: center;
      padding: 10px;
    }
  }
</style>