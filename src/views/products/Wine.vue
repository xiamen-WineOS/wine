<template>
  <section class="team">
    <header>
      <h2 class="margin-t">习酒</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3 inner-list">
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/w1.jpg" alt=""/>
            <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </a>
        </div>
        <div class="name"><a>张德芹</a></div>
      </div>
    
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </section>
</template>
<style>
  @import 'css/variable.css';
  .inner-list {
    & .img{
      & a{
        position: relative;
        display: block;
        border-top: 1px solid #f3f3f3;
        box-shadow: 0 1px 1px #d7e4ed;
        &:before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background: rgba(0,0,0,.6);
          opacity: 0;
          transition: all .4s;
        }
        & p {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 12px;
          opacity: 0;
          transform: translateY(10px);
          transition: all .3s ease .1s;
          padding: 10px;
          color: #fff;
        }
      }
      &:hover a:before{
        opacity: 1;
      }
      &:hover p {
        opacity: 1;
        transform: translateY(0);
      }
    }
    & .name{
      text-align: center;
      padding: 10px;
    }
  }
</style>