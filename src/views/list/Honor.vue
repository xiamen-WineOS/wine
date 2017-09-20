<template>
  <section class="honor">
  	<header>
      <h2 class="margin-t">资质荣誉</h2>
    </header>
    <!--<picture>
      <source :srcset="item.smallImageUrl" media="(min-width: 600px)"> 
      <img :src="item.bigImageUrl" :alt="item.name"/>
    </picture>-->
    <div class="row inner small-up-1 medium-up-3 large-up-3">
      <div class="column" v-for="(item, index) in articleList">
        <div class="img">
          <a @click="slideTo(index)">
            <img :src="item.articlePageImageUrl ? item.articlePageImageUrl : 'http://39.108.233.181/hebada/images/1.jpg' " alt="item.title"/>
          </a>
        </div>
        <div class="desc"><a>{{item.title}}</a></div>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="data.total">
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
        data: Object,
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
      swiper () {
        debugger
        return this.$refs.HonorImg ? this.$refs.HonorImg.swiper : null
      }
    },
    methods: {
      getArticleList () {
        var params = parseInt(this.$route.params.id)
        fetchArticleList(params).then((res) => {
          this.data = res.data
          this.articleList = res.data.content
        })
      },
      slideTo (index) {
        debugger
        this.swiper.slideTo(index)
      }
    },
    mounted () {
    }
  }
</script>

