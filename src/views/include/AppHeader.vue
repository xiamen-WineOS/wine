<template>
  <header class="header">
    <div class="row">
      <div class="large-10 medium-8 column">
        <div class="logo">
          <h1 style="display: none;">厦门八达</h1>
          <a title="logo"><span></span></a>
        </div>
      </div>
      <div class="large-14 medium-16 column small-no-padding">
        <div class="mobile-menu" @click="toggleMenu" :class="{'is-open':isOpen}">
            <span class="menu-patty"></span>
            <span class="menu-patty"></span>
            <span class="menu-patty"></span>
        </div>
        <div class="mobile-content" :class="{'is-open': isOpen}">
          <nav class="menu top-bar">
            <li><a href="/">首页</a></li>
            <li @click="toggleSubMenu(2)">
              <a href="/">关于和八达 </a>
              <i class="el-icon-arrow-down"></i>
              <ul class="vertical menu" :class="{active: index===2}">
                <li><a href="/">企业概况</a></li>
                <li><a href="/">企业历程</a></li>
                <li><a href="/">资质荣誉</a></li>
                <li><a href="/">团队管理</a></li>
              </ul>
            </li>
            <li @click="toggleSubMenu(3)">
              <a href="/">新闻资讯</a>
              <i class="el-icon-arrow-down"></i>
              <ul class="vertical menu" :class="{active: index===3}">
                <li><a href="/">行业新闻</a></li>
                <li><a href="/">最新公告</a></li>
                <li><a href="/">行业动态</a></li>
              </ul>
            </li>
            <li @click="toggleSubMenu(4)">
              <a href="/">产品展示 </a>
              <i class="el-icon-arrow-down" ></i>
              <ul class="vertical menu" :class="{active: index===4}">
                <li><a href="/">习酒</a></li>
                <li><a href="/">洋酒</a></li>
                <li><a href="/">红酒</a></li>
              </ul>
            </li>
            <li @click="toggleSubMenu(5)">
              <a href="/">企业文化</a>
              <i class="el-icon-arrow-down"></i>
              <ul class="vertical menu" :class="{active: index===5}">
                <li><a href="/">企业理念</a></li>
                <li><a href="/">习酒文化</a></li>
                <li><a href="/">红酒文化</a></li>
                <li><a href="/">洋酒文化</a></li>
              </ul>
            </li>
            <li @click="toggleSubMenu(6)">
              <a href="/">联系我们</a>
               <i class="el-icon-arrow-down"></i>
              <ul class="vertical menu" :class="{active: index===6}">
                <li><a href="/">联系我们</a></li>
                <li><a href="/">企业位置</a></li>
                <li><a href="/">留言中心</a></li>
                <li><a href="/">招聘信息</a></li>
              </ul>
            </li>
          </nav>
      
        </div>
      </div>
    </div>
    <div></div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        isOpen: false,
        index: 1
      }
    },
    methods: {
      toggleMenu () {
        this.isOpen = !this.isOpen
      },
      toggleSubMenu (index) {
        if (this.index === index) {
          this.index = 1
        } else {
          this.index = index
        }
      }
    },
    watch: {
      isOpen (nv) {
        if (nv) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }
    }
  }
</script>
<style>
  @import 'css/variable.css';
  .header{
    height: 60px;
    line-height: 60px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.8);
  }
  .top-bar{
    & > li {
      position: relative;
      & > i.el-icon-arrow-down{
        font-size: 10px;
        color: var(--color-primary);
        position: absolute;
        top: 18px;
        right: 4px;
        height: 8px;
        transition: all .3s;
        z-index: 100;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    .top-bar{
      & > li {
        & a {
          color: var(--color-primary);
          &:hover {
            color: color(var(--color-primary) shade(20%))
          }
        }
        & > i.el-icon-arrow-down{
          top: 24px;
          right: 2px;
        }
        & > ul{
          position: absolute;
          width: 160px;
          background: #333;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all .3s;
          right: 0;
          z-index: 100;
          & > li > a{
            transition: all .3s;
            font-size: 13px;
          }
          & > li:hover {
            background: color(#333 shade(20%));
            & a{
              transform: translateX(10px);
            }
          }
        }
        &:hover > ul{
          opacity: 1;
          visibility: visible;
          transform: translateY(2px);
        }
        &:hover i.el-icon-arrow-down{
          transform: rotateZ(180deg);
        }
      }
    }
    .top-bar{
      & > li {
        & > a{
          padding: 23px 1rem;
        } 
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .header{
      height: 46px;
    }
  	.top-bar{
      & > li {
        & > a{
          font-size: 13px;
          padding: 1rem 10px;
        } 
      }
    }
    .mobile-menu {
      /*display: none;*/
      position: absolute;
      right: 0;
      top: 0;
      width: 46px;
      height: 46px;
      cursor: pointer;
      z-index: 1000;
    }
    .menu-patty {
      margin: -2px auto;
      width: 28px;
      height: 3px;
      border-radius: 2px;
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      background: #fff;
      -webkit-transition: -webkit-transform 0.2s ease;
      -o-transition: -o-transform 0.2s ease;
      transition: transform .2s ease;
    }
    .menu-patty:first-child {
      -webkit-transform: translateY(-9px);
      -ms-transform: translateY(-9px);
      -o-transform: translateY(-9px);
      transform: translateY(-9px);
    }
    .menu-patty:last-child {
      -webkit-transform: translateY(9px);
      -ms-transform: translateY(9px);
      -o-transform: translateY(9px);
      transform: translateY(9px);
    }
    .mobile-menu.is-open > .menu-patty {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
    .mobile-menu.is-open > .menu-patty:first-child {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .mobile-menu.is-open > .menu-patty:last-child {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    
    .mobile-content{
      visibility: hidden;
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
      & > .menu {
        display: block;
        & > li {
          &:first-child{
            margin-top: 80px;
          }
        }
      }
      & .menu.vertical{
        display: none;
        &.active{
          display: block;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
  	.mobile-content{
  	  background: rgba(0,0,0,.9);
  	  position: absolute;
      z-index: 2;
      top: 46px;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0 48px;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      overflow-y: auto;
      user-select: none;
      -webkit-overflow-scrolling: touch;
      visibility: hidden;
      transition: visibility 0s linear 1s;
      animation: ac-gn-list-searchshow 300ms both;
      & .top-bar > li {
        line-height: 42px;
        border-bottom: 1px solid #333;
        opacity: 0;
        pointer-events: none;
        transform: scale(1.1) translateY(-24px);
        transition: opacity 0.35s ease-out, -webkit-transform 0.35s ease-out;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
        & a{
          color: #fff;
          display: inline-block;
          padding: 0 1rem;
        }
        &:nth-child(2){
          transition-delay: 300ms,300ms;
        }
        &:nth-child(3){
          transition-delay: 350ms,350ms;
        }
        &:nth-child(4){
          transition-delay: 400ms,400ms;
        }
        &:nth-child(5){
          transition-delay: 450ms,450ms;
        }
        &:nth-child(6){
          transition-delay: 500ms,500ms;
        }
        &:nth-child(7){
          transition-delay: 550ms,550ms;
        }
      }
      & .menu.vertical li a{
        display: block;
        padding: 1rem 1rem 1rem 2rem;
        font-size: 13px;
      }
  	}
  	.mobile-content.is-open{
  	  visibility: visible;
      transition-delay: 0s;
      & .top-bar > li{
          opacity: 1;
          pointer-events: auto;
          transform: none;
      }
  	}
  }
@keyframes ac-gn-list-searchshow {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-timing-function: cubic-bezier(1, 0, 0, 1)
    }

    100% {
        transform: translateY(-100%) translateY(calc(100% - 46px))
    }
}
</style>
