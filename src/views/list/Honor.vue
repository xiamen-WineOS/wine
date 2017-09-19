<template>
  <section class="honor">
  	<header>
      <h2 class="margin-t">资质荣誉</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3">
      <div class="column" v-for="(item, index) in articleList">
        <div class="img">
          <a @click="slideTo(index)">
            <picture>
              <source :srcset="item.smallImageUrl" media="(min-width: 600px)"> 
              <img :src="item.bigImageUrl" :alt="item.name"/>
            </picture>
          </a>
        </div>
        <div class="desc"><a>{{item.name}}</a></div>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class="dialog">
      <el-dialog :visible.sync="imgPreview">
        <swiper :options="swiperOption" ref="HonorImg" class="banner-swiper">
          <swiper-slide v-for="(slide, index) in articleList" :key="index">
            <div class="swiper-zoom-container">
              <img :src="slide.bigImageUrl" alt="slide.name" class="swiper-lazy">
            </div>
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"><a></a></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"><a></a></div>
        </swiper>
      </el-dialog>
    </div>
  </section>
</template>
<script>
  import { fetchArticleList } from '../../api'
  export default {
    data () {
      return {
        articleList: [],
        imgPreview: false,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          preloadImages: false,
          lazyLoading: true,
          loop: true,
          autoplay: 3000,
          zoom : true,
          zoomMax: 2,
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
    created () {
      this.getArticleList()
    },
    computed: {
      swiper() {
        return this.$refs.HonorImg.swiper
      }
    },
    methods: {
      getArticleList () {
        var params = parseInt(this.$route.params.id)
        fetchArticleList(params).then((res) => {
          console.log(2222222222, res.data.content)
          this.articleList = res.data.content
        })
      },
      slideTo (index) {
        this.swiper.slideTo(index)
      }
    },
    mounted () {
    }
  }
</script>

