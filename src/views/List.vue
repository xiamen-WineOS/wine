<template>
  <div class="main">
    <div class="list-title">
      <div class="row">
        <div class="large-24 columns">
          <h2 class="margin-t">关于和八达</h2>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于和八达</el-breadcrumb-item>
            <el-breadcrumb-item>企业概况</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="large-5 columns hide-for-large">
        <h3 class="sub-type">类型</h3>
        <app-side-nav></app-side-nav>
      </div>
      <div class="large-19 columns">
        <div class="article-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppSideNav from '@/views/include/AppSideNav'
  export default {
    data () {
      return {}
    },
    components: {
      AppSideNav
    }
  }
</script>
<style>
@import 'css/variable.css';
.list-title{
  height: 104px;
  background: color(var(--color-primary) tint(60%));
  background-size: cover;
}
.sub-type{
  padding-top: 46px;
  padding-bottom: 23px;
  color: var(--color-secondary);
  font-size: 18px;
  line-height: 1;
  text-indent: 18px;
}
figure.one-third{
  width: calc(100% / 3);
  margin: 0;
  float: right;
}
.article-content{
  padding-bottom: 100px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
  background: var(--panel-color);
  border-left: 1px solid #f1f1f1;
  & p {
    font-size: 14px;
    line-height: 2;
    text-indent: 2em;
    color: #494949;
  }
  & header{
    padding:2rem 2rem 1rem;
    & .bookmark{
      color: color(var(--color-warning) shade(40%));
    }
    & .source {
      float: right;
      font-size: 12px;
      color: var(--color-secondary);
    }
    & .h-bottom{
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
    padding: 1rem 2rem;
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
}
.header-bg {
  & img {
    width: 100%;
  }
}  
@media only screen and (max-width: 768px) {
  .article-content{
    border: none;
    padding-bottom: 0;
    & header{
      padding: 1rem 0;
    }
    & .article-section{
      padding: 1rem 0;
    }
  }
  .list-title{
    height: 78px;
  }
}
</style>
