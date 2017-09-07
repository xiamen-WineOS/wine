<template>
  <div class="fixed">
    <el-popover
      ref="weixin"
      placement="right"
      width="122"
      trigger="hover">
      <img  src="../../assets/img/erweima.png">
      <div class="margin-t4 text-center">扫一扫关注我们</div>
    </el-popover>

  <div>
    <a class="consult" title="业务咨询" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=756587947&amp;site=qq&amp;menu=yes"></a>
    <a title="关注公众号" href="javascript:;" class="code" v-popover:weixin>
      <span class="fa fa-weixin" aria-hidden="true"></span>
    </a>
    <BackTop>
      <a title="返回顶部" class="gotop"><i class="el-icon-arrow-up"></i></a>
    </BackTop>
    
  </div>
</div>
</template>
<script>
  import BackTop from '@/components/scrollTop'
  export default {
    data () {
      return {}
    },
    components: {
      BackTop
    }
  }
  
</script>
<style>
@import 'css/variable.css';
.fixed{
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1;
  & a{
    display: flex;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.8);
    margin-top: 4px;
    box-shadow: 0 0 1px rgba(0,0,0,.2);
  }
}
.consult{
  background: url('../../assets/img/fix-box.png') no-repeat;
  background-position: -14px 0;
  padding: 35px 0 0;
  &:hover{
    background-position:-95px 0px;
  }
}
.code{
  background-image: url('https://gold-cdn.xitu.io/v3/static/img/weixin.b50ea6d.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 30px;
  &:hover{
    background-image: url('https://gold-cdn.xitu.io/v3/static/img/weixin-active.63584da.svg');
  }
}
.ivu-back-top{
  height: 0;
  margin-top: 4px;
  overflow: hidden;
  transition: all .3s;
  box-shadow: 0 0 1px rgba(0,0,0,.2);
  & a{
    margin: 0;
  }
  &.ivu-back-top-show{
    height: 50px;
    & a:hover{
      color:#fff;
      background: var(--color-primary);
    }
  }
}
@media only screen and (max-width:768px ) {
  .fixed{
    right: 1rem;
    bottom: 1rem;
    & a{
      height: 36px;
      width: 36px;
    }
  }
  .consult{
    background-size: 183px;
    background-position: -12px 0;
    &:hover{
      background-position: -73px 0;
    }
  }
  .code{
    background-size: 24px;
  }
  .ivu-back-top{
    height: 36px !important;
  }
}
</style>
