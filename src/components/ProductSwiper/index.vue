<template>
  <div class="swiper-gallery">
    <swiper :options="swiperOption" ref="galleryTop" class="gallery-top">
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
    <swiper :options="swiperOption1" ref="galleryThumbs" class="gallery-thumbs">
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
  </div>
</template>
<script>
  require('@/assets/css/swiper.min.css')
  export default {
    data () {
      return {
        galleryTop: null,
        galleryThumbs: null,
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
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10
        },
        swiperOption1: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      },
      methods: {
      }
      mounted () {
        this.galleryTop = this.$refs.galleryTop
        this.galleryThumbs = this.$refs.galleryThumbs
        this.galleryTop.params.control = this.galleryThumbs
        this.galleryThumbs.params.control = this.galleryTop
      }
    }
  }
</script>
<style>
  .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
  }
  .swiper-slide {
      background-size: cover;
      background-position: center;
  }
  .gallery-top {
      height: 80%;
      width: 100%;
  }
  .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
      opacity: 1;
  }
</style>
