<template>
  <div class="main">
    <swiper :options="swiperOption" ref="mySwiper" class="banner-swiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a>
          <picture>
            <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source :srcset="slide.url" media="(min-width: 600px)">
            <!--[if IE 9]></video><![endif]-->
            <img :src="slide.smallUrl" alt="" class="swiper-lazy">
          </picture>
          
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"><a></a></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"><a></a></div>
    </swiper>
    <div class="row margin-t small-no-margin news-row">
      <div class="large-24 columns">
        <h2 class="des-title">
          <span>新闻资讯</span>
        </h2>
        <news></news>
      </div>
    </div>
    <div class="section-bg">
      <div class="row margin-t small-no-margin">
        <div class="large-24 columns">
          <h2 class="des-title">
              <span style="background: #f1f1f1;">产品文化</span>
          </h2>
          <div class="row inner-content margin-b">
            <div class="large-12 medium-12 columns  culture-l">
              <swiper :options="swiperOption" ref="cultureSwiper" class="product-swiper">
                <swiper-slide v-for="(slide, index) in cultureSlides" :key="index">
                  <a>
                    <img :src="slide.url" alt="" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </a>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"><a></a></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"><a></a></div>
              </swiper>
            </div>
            <div class="large-12 medium-12 columns">
              <div class="product-culture">
                <ul>
                  <li><a>酿酒人有君子之风： 勤劳、淳朴、仁义、包容。</a></li>
                  <li><a>产品是酒中君子： 表里金玉，惠而不费。</a></li>
                  <li><a>卖酒人有君子之德： 诚信、自律、服务。</a></li>
                  <li><a>饮酒人有君子之好：文明、尊贵、典雅、谦和。</a></li>
                  <li><a>君品习酒，极具君子品德之酒，内外兼修，和而不同。</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row margin-t small-no-margin">
        <div class="large-24 columns">
          <h2 class="des-title">
            <span>产品展示</span>
          </h2>
          <div class="row scroll-effect">
            <div class="column large-12 small-24">
              <div class="wine-desc pl">
                <div class="subsection-headline">贵州习酒简单的描述</div>
                <a href="">查看详情</a>
              </div>
            </div>
            <div class="column large-12 small-24">
              <figure class="pr">
                <div class="aspectRatioPlaceholder" >
                  <img class="img" data-width="475" data-height="360" src="../../static/img/jiu.jpg">
                </div>
              </figure>
            </div>
          </div>
          <div class="row scroll-effect">
            <div class="column large-12 large-push-12 small-24 small-push-0">
              <div class="wine-desc pr">
                <div class="subsection-headline">贵州习酒简单的描述</div>
                <a href="">查看详情</a>
              </div>
            </div>
            <div class="column large-12 large-pull-12 small-24 small-pull-0">
              <figure class="pl">
                <div class="aspectRatioPlaceholder" >
                  <img class="img" data-width="475" data-height="360" src="../../static/img/jiu2.jpg">
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  require('@/assets/css/swiper.min.css')
  import '@/utils/scrollreveal.js'
  import News from './index/News'
  import { screenwidth } from '@/utils/screenWidth.js'
  export default {
    data () {
      return {
        swiperSlides: [{
          url: 'http://localhost:8080/static/img/wine2.jpg',
          smallUrl: 'http://localhost:8080/static/img/new5.jpg'
        }, {
          url: 'http://localhost:8080/static/img/wine4.png',
          smallUrl: 'http://localhost:8080/static/img/new4.jpg'
        }],
        cultureSlides: [{
          url: 'http://localhost:8080/static/img/new5.jpg',
        }, {
          url: 'http://localhost:8080/static/img/new4.jpg'
        }],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          preloadImages: false,
          lazyLoading: true,
          loop: true,
          autoplay: 3000,
          effect : 'fade',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
//          console.log(swiper)
          },
          onSlideChangeEnd: swiper => {
//          console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created () {
      var config = {
        viewFactor: 0.15,
        duration: 800,
        distance: "0px",
        scale: 0.8,
      }
      window.sr = new ScrollReveal()
    },
    mounted () {
      var flag = screenwidth()
      if (!flag) {
        var title = {
          origin   : "top",
          distance : "32px",
          duration : 1500,
        }
        var news = {
          origin   : "top",
          distance : "32px",
          duration : 1500,
          scale    : 1.05,
        }
        var culture = {
          origin   : "left",
          distance : "24px",
          duration : 600,
          delay    : 300,
          scale    : 0,
        }
        var culturer = {
          origin   : "right",
          distance : "36px",
          duration : 600,
          delay    : 1000,
          scale    : 0,
        }
        var pl = {
          origin   : "left",
          distance : "100px",
          duration : 600,
          delay    : 1000,
        }
        var pr = {
          origin   : "right",
          distance : "100px",
          duration : 600,
          delay    : 1000,
        }
        sr.reveal('.des-title', title)
        sr.reveal(".news-row", news)
        sr.reveal(".culture-l", culture)
        sr.reveal(".product-culture", culturer)
        
        sr.reveal('.pl', pl)
        sr.reveal('.pr', pr)
        sr.reveal('.pl', pl)
        sr.reveal('.pr', pr)
      }
    },
    components: {
      News
    }
  }
</script>
<style>
  @import 'css/variable.css';
  .swiper-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        & .swiper-pagination-bullet {
            width: 36px;
            height: 2px;
            border-radius: 2px;
            transition: background .3s;
        }
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        & a, & img{
          display: blok;
          width: 100%;
        }
    }
    .banner-swiper {
      & .swiper-button-prev, & .swiper-button-next{
        background-color: rgba(0,0,0, .3);
        width:2.6rem;
        height:2.6rem;
        border-radius: 50%;
        background-size: 0.8rem;
      }
    }
    .product-culture{
      & ul li{
        list-style: none;
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .product-culture{
      height: 180px;
      padding-left: 4.8rem;
      & ul li{
        line-height: 36px;
      }
      position:relative; 
      &:before{
        content: '';
        width: 1px;
        height: 100px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        margin-top: -50px;
      }
    }
    .product-swiper{
      width: 90%;
      margin: 0;
    }
    .product-swiper{
      & .swiper-button-prev, & .swiper-button-next{
        width:2rem;
        height:2rem;
        background-size: 14px;
      }
    }
    .wine-desc{
      max-width: 320px;
      margin: 0 auto;
      margin-top: 200px;
    }
    .subsection-headline {
      font-size: 24px;
      line-height: 1.125;
      font-weight: 300;
      letter-spacing: 0em;
      & + a{
        margin-top: 10px;
        font-size: 12px;
        display: inline-block;
        color: var(--color-primary);
      }
    }
    @media only screen and (max-width: 768px) {
    	.product-culture{
    	  height: auto;
        padding-left: 2rem;
        & ul li{
          line-height: 26px;
        }
      }
      .product-swiper{
        width: 100%;
      }
      .wine-desc{
        text-align: center;
        max-width: 220px;
        margin-top: 1rem;
      }
      .subsection-headline {
        & + a{
          margin-top: 1rem;
          font-size: 12px;
          display: inline-block;
          color: var(--color-primary);
        }
      }
    }
    @media only screen and (max-width: 640px) {
      .wrapper{
        height: calc(100vh - 46px);
        overflow: auto;
      }
    	.banner-swiper {
        & .swiper-button-prev, & .swiper-button-next{
          opacity: 1;
          width:2.2rem;
          height:2.2rem;
        }
      }
      .product-culture {
        padding: 1rem 0 0 4px;
        & ul li{
          line-height: 24px;
          font-size: 12px;
        }
      }
    }
    /*scroll-effect*/
   /*.scroll-effect{
     visibility: hidden;
   }*/
</style>
