<template>
  <div class="row inner-content">
    <div class="large-11 column medium-12 small-24">
      <div class="news-card">
        <div class="img">
          <a><img src="../../../static/img/new3.jpg"/></a>
        </div>  
        <div class="news-relative margin-t">
          <h3><a>公司将在10月1号举行世界游</a></h3>
          <p class="color-secondary">介于大家这段时间的那啥啊，部门专门给各位一次世界游玩的机会，报名时间为描述省略</p>
        </div>
      </div>
    </div>
    <div class="large-13 column medium-12 small-24">
      <a href="" class="media-object news-list">
        <div class="media-object-section">
          <div class="img">
            <img src="../../../static/img/new4.jpg" alt=""/>
          </div>
        </div>
        <div class="media-object-section">
          <h3>部门将在10月1号举行世界游</h3>
          <p>介于大家这段时间的那啥啊，部门专门给各位一次世界游玩的机会，报名时间为描述省略</p>
        </div>
      </a>
      <a href="" class="media-object news-list">
        <!--<div class="media-object-section">
          <div class="img">
            <img src="../../../static/img/new3.jpg" alt=""/>
          </div>
        </div>-->
        <div class="media-object-section">
          <h3>部门将在10月1号举行世界游</h3>
          <p>介于大家这段时间的那啥啊，部门专门给各位一次世界游玩的机会，报名时间为描述省略</p>
        </div>
      </a>
      <a href="" class="media-object news-list">
        <div class="media-object-section">
          <div class="img">
            <img src="../../../static/img/new5.jpg" alt=""/>
          </div>
        </div>
        <div class="media-object-section">
          <h3>部门将在10月1号举行世界游</h3>
          <p>介于大家这段时间的那啥啊，部门专门给各位一次世界游玩的机会，报名时间为描述省略</p>
        </div>
      </a>
      
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style>
@import 'css/variable.css';
  .news-relative{
    & h3{
      margin-bottom: 10px;
    }
    & p{
      font-size: 13px;
      color: var(--color-secondary);
    }
  }  
  .news-list {
    border-bottom: 1px dashed #f3f3f3;
    & .img{
      max-width: 160px;
    }
    & h3{
      transition: all .3s;
      margin-bottom: 4px;
      & + p {
        color: var(--color-secondary);
        font-size: 13px;
      }
    }
    
    &:last-child{
      border: none;
    }
  }
  @media only screen and (max-width: 767px) {
  	.news-relative{
  	  margin-bottom: 1rem;
  	  border-bottom: 1px dashed #ddd;
  	  & p{
  	    font-size: 10px;
  	  }
  	}
  	.news-list h3 + p{
  	  font-size: 10px;
  	}
  }
</style>

