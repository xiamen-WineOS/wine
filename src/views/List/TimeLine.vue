<template>
  <section>
    <header>
    <h2 class="margin-t">企业历程</h2>
  </header>
  <div class="timeline">
    <ul>
      <li class="clearfix" v-for="(item, index) in articleList">
        <div class="timeline-img"></div>
        <div class="timeline-content">
          <h2>{{item.title}}</h2>
          <div v-html="item.content">
          	
          </div>
          <span class="date">{{item.publishTime}}</span>
        </div> 
      </li>
    </ul>
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
    mounted () {
    }
  }
</script>
<style>
@import 'css/variable.css';
  .timeline{
    width: 90%;
    position: relative;
    padding: 2em 0;
    margin: 2em auto;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      left: 50%;
      width: 2px;
      background: var(--color-info);
    }
    & ul li{
      position: relative;
      margin-bottom: 4em;
      list-style: none;
      & .timeline-img{
        position: absolute;
        top: 18px;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        margin-left: -12px;
        border-radius: 50%;
        box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
        background: var(--color-info);
      }
      & .timeline-content{
        position: relative;
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
        background: #ffffff;
        border-radius: 0.25em;
        border-top: 1px solid #f3f3f3;
        box-shadow: 0 2px 1px #d7e4ed;
        &:before {
          content: '';
          position: absolute;
          right: 100%;
          height: 0;
          width: 0;
          border: 7px solid transparent;
          border-right: 7px solid #ffffff;
          top: 24px;
          left: 100%;
          border-color: transparent;
          border-left-color: #f2f2f2;
        }
        & .date{
          position: absolute;
          width: 100%;
          left: 122%;
          top: 6px;
          font-size: 1rem;
          float: left;
          padding: .8em 0;
          opacity: .7;
          display: inline-block;
        }
      }
      &:nth-child(even) .timeline-content {
        float: right;
        &:before {
          top: 24px;
          left: auto;
          right: 100%;
          border-color: transparent;
          border-right-color: #f2f2f2;
        }
      }
      &:nth-child(even) .timeline-content .date {
        left: auto;
        right: 122%;
        text-align: right;
      }
    }
  }  
  @media only screen and (max-width: 640px) {
  	.timeline{
      width: 100%;
      &:before{
        left: 0;
      }
      & ul li{
        position: relative;
        margin-bottom: 4em;
        list-style: none;
        & .timeline-img{
          left: auto;
        }
        & .timeline-content{
          width: auto;
          margin-left: 1.6rem;
          &:before {
            left: -14px;
            border: 7px solid transparent;
            border-right: 7px solid #f1f1f1;
          }
          & .date{
            position: absolute;
            width: auto;
            top: auto;
            left: 1rem;
            bottom: 0;
          }
        }
        &:nth-child(even) .timeline-content {
          float: right;
          &:before {
            top: 24px;
            left: auto;
            right: 100%;
            border-color: transparent;
            border-right-color: #f2f2f2;
          }
        }
        &:nth-child(even) .timeline-content .date {
          left: auto;
          right: 122%;
          text-align: right;
        }
      }
    }
  }
</style>
