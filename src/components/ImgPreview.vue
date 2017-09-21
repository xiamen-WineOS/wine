<template>
  <el-dialog 
    :visible.sync="imgVisible" 
    size="large" 
    top="1rem"
    @close="close" 
    ref="imgPreviewDialog"
    custom-class="preview-wrapper"
    >
    <swiper :options="swiperOption" ref="mySwiper" class="banner-swiper">
      <swiper-slide v-for="(slide, index) in imgList" :key="index">
        <div class="swiper-zoom-container">
          <img title="双击放大" :src="slide.bigImageUrl" alt="slide.name" class="swiper-lazy">
        </div>
        <div class="img-relative-info">
          <a>12.jpg</a>
        </div>
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"><a></a></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"><a></a></div>
    </swiper>
  </el-dialog>
</template>
<script>
  export default {
    data () {
      return {
        imgVisible: false,
        imgLists: [],
        swiperOption: {
          onlyExternal: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          preloadImages: false,
          lazyLoading: true,
          loop: true,
          autoplay: 3000,
          zoom : true,
          zoomMax: 2,
          notNextTick: true,
          mousewheelControl: true,
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
    props: {
      datas: Object,
      imgList: {
        type: Array,
        default: function () {
          return []
        }
      },
      imgPreview: Boolean,
      index: null 
    },
    methods: {
      close () {
        this.$emit('close', false)
      }
    },
    created () {
    },
    watch: {
      imgPreview (nv) {
        this.imgVisible = nv
        this.imgLists = this.imgList
        if (this.$refs.mySwiper && this.$refs.mySwiper.swiper) {
          this.$nextTick(() => {
            this.swiper.slideTo(this.index, 0, false)
          })
        } else {
          this.swiperOption.initialSlide = this.index
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style>
  .preview-wrapper{
    max-width: 990px;
    margin: 0;
    background: none;
    box-shadow: none;
    & .el-dialog__header {
      padding: 0;
    & span{
        color: #fff;
      }
    }
    & .el-dialog__headerbtn{
      position: absolute;
      top: -16px;
      height: 2.25rem;
      width: 2.25rem;
      right: -1.125rem;
      border-radius: 50%;
      background: #000000;
      z-index: 1000;
      border: 2px solid #fff;
    }
    & .el-dialog__body{
      height: calc(100vh - 2rem);
      padding: 0;
      overflow: auto;
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    &:hover .swiper-button-fullscreen{
      opacity: 1;
    }
    &:hover .mark{
      opacity: 0.6;
    }
    &:hover .swiper-tool-bar{
      opacity: 1;
    }
  }
  .swiper-slide {
    overflow: hidden;
  }
  .swiper-pagination{
    font-size: 1rem;
  }
</style>
