<template>
  <section class="team">
    <header>
      <h2 class="margin-t">团队管理</h2>
    </header>
    <div class="row inner">
      <div class="large-24 columns">
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        <div class="media-object newslist">
          <div class="media-object-section shrink">
            <div class="img">
              <img src="../../assets/img/t1.jpg" alt="李华"/>
            </div>
          </div>
          <div class="media-object-section">
            <h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
            <div>2017-06-24</div>
            <p class="white-space3">张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
          </div>
        </div>
        
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
  .newslist {
    border-bottom: 1px dashed #ddd;
    &:last-child{
      border: none;
    }
    & .img{
      width: 140px;
    }
    & h3{
      margin-bottom: 6px;
      & + div{
        color: var(--color-secondary);
        font-size: 12px;
      }
    }
    & p{
      font-size: 12px;
      text-indent: 0;
    }
  }
  @media only screen and (max-width: 640px) {
  	.newslist .img{
  	  width: 100px;
  	}
  }
</style>