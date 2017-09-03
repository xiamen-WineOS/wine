<template>
  <div class="main">
    <swiper :options="swiperOption" ref="mySwiper" class="banner-swiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a>
          <img :src="slide.url" alt="" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"><a></a></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"><a></a></div>
    </swiper>
    <div class="row margin-t small-no-margin">
      <div class="large-24 columns">
        <h2 class="des-title">
            <span>新闻资讯</span>
        </h2>
        <news></news>
      </div>
    </div>
    <div class="row margin-t small-no-margin">
      <div class="large-24 columns">
        <h2 class="des-title">
            <span>产品文化</span>
        </h2>
        <div class="row inner-content">
          <div class="large-12 medium-12 columns">
            <swiper :options="swiperOption" ref="mySwiper" class="product-swiper">
              <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
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
</template>
<script>
  require('@/assets/css/swiper.min.css')

  import News from './index/News'
  export default {
    data () {
      return {
        swiperSlides: [{
          url: 'http://localhost:8080/static/img/wine.jpg',
        }, {
          url: 'http://localhost:8080/static/img/wine1.png',
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
        width:4rem;
        height:4rem;
        border-radius: 50%;
        background-size: 1rem;
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
        width: .5px;
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
    }
    @media only screen and (max-width: 640px) {
      .wrapper{
        height: calc(100vh - 46px);
        overflow: auto;
      }
    	.banner-swiper {
        & .swiper-button-prev, & .swiper-button-next{
          opacity: 1;
          width:2.4rem;
          height:2.4rem;
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
</style>
