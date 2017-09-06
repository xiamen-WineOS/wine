<template>
  <div class="timeline">
    <ul>
      <li class="clearfix">
        <div class="timeline-img"></div>
  
        <div class="timeline-content">
          <h2>html5时间表 1</h2>
          <p>jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。</p>
          <span class="date">Jan 14</span>
        </div> 
      </li>
      <li class="clearfix">
        <div class="timeline-img">
        </div>
  
        <div class="timeline-content">
          <h2>html5时间表 1</h2>
          <p>jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。</p>
          <span class="date">Jan 14</span>
        </div>
      </li>
    </ul>
  </div>
</template>
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
