<template>
  <section class="honor">
  	<header>
      <h2 class="margin-t">资质荣誉</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3">
      <div class="column" v-for="(item, index) in photoList">
        <div class="img">
          <a @click="slideTo(index)">
            <picture>
              <source :srcset="item.smallImageUrl" media="(min-width: 600px)"> 
              <img :src="item.bigImageUrl" :alt="item.name"/>
            </picture>
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
    <img-preview @close="close" :index="currIndex" :imgPreview="imgPreview" :imgList="photoList"></img-preview>
  </section>
</template>
<script>
  import { fetchPhotoList } from '../../api'
  import ImgPreview from '@/components/ImgPreview'
  export default {
    data () {
      return {
        data: Object,
        currIndex: null,
        imgPreview: false,
        photoList: []
      }
    },
    created () {
      this.getArticleList()
    },
    methods: {
      getArticleList () {
        var params = parseInt(this.$route.params.id)
        fetchPhotoList(params).then((res) => {
          this.data = res.data
          this.photoList = res.data.content
        })
      },
      slideTo (index) {
        this.imgPreview = true
        this.currIndex = index
      },
      close () {
        this.imgPreview = false
      }
    },
    components: {
      ImgPreview
    }
  }
</script>

