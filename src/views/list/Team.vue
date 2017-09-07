<template>
  <section class="team">
    <header>
      <h2 class="margin-t">团队管理</h2>
    </header>
    <div class="row inner small-up-1 medium-up-3 large-up-3 teams">
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
      <div class="column">
        <div class="img">
          <a>
            <img src="../../assets/img/t1.jpg" alt=""/>
          </a>
        </div>
        <h3 class="name"><a>张德芹</a></h3>
        <p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
      </div>
    </div>
    <div class="row margin-t text-center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class="row">
      <div class="media-object teams">
        <div class="media-object-section shrink">
        	<div class="img">
        	  <img src="../../assets/img/t1.jpg" alt="李华"/>
        	</div>
        </div>
        <div class="media-object-section">
        	<h3><a>贵州茅台酒厂（集团）习酒有限责任公司董事长-张德芹</a></h3>
        	<p>张德芹，1973年出生，贵州仁怀市人，中国贵州茅台酒厂有限责任公司党委委员、副总经理，贵州茅台酒厂(集团)习酒有限责任公司党委书记、董事长(法定代表人)，全国青年委员，贵州省人大...</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
  @import 'css/variable.css';
  .teams{
    & .name{
      text-align: center;
      margin-top: 1rem;
      & + p{
        color: var(--color-secondary);
        font-size: 12px;
        letter-spacing: .125ex;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-align: center;
        padding: 0 10px;
        word-wrap: break-word;
        height: 68px;
      }
    }
  }
</style>