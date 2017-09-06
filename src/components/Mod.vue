<template>
  <section :class="[
      type ?  type : 'mod'
    ]"
    class="mod-border"
    >
    <template v-if="type === 'mod-side-s1'">
      <h3 class="modhead" :style="{fontSize: size + 'px'}">
        <slot name="icon"></slot>{{title}}
        <a :href="more" v-if="more">更多</a>
      </h3>
      <div class="modcon" v-loading="loading">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="type === 'mod-side-s2'">
      <h3 class="modhead" :style="{ fontSize: size + 'px' }">
        <slot name="icon"></slot>{{title}}
        <a :href="more" v-if="more">更多</a>
      </h3>
      <div class="modcon" v-loading="loading">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="type === 'mod-side-l1'">
      <h3 class="modhead" :style="{ fontSize: size + 'px' }">
        <slot name="icon"></slot>{{title}}
        <a :href="more" v-if="more">更多</a>
      </h3>
      <div class="modcon" v-loading="loading">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="type === 'mod-side-l2'">
      <h3 class="modhead" :style="{ fontSize: size + 'px' }">
        <slot name="icon"></slot>{{title}}
        <slot name="btn"></slot>
      </h3>
      <div v-scroll-over-lock class="modcon scrollCss" v-loading="loading">
        <slot></slot>
      </div>
      <div class="modfooter" v-if="more">
        <el-button type="text expanded" size="small" :href="more">更多</el-button>
      </div>
    </template>
    <template v-else>
      <h3 class="modhead" :style="{ fontSize: size + 'px' }">
        <slot name="icon"></slot>{{title}}
        <a :href="more" v-if="more">更多
          <slot name="cog"></slot>
        </a>
      </h3>
      <div class="modcon">
        <slot></slot>
      </div>
    </template>
  </section>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: '16'
      },
      more: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style>
  @import "css/variable.css";
  .mod {    
    background: #fff;
    & h3 {
      margin: 0 1rem;
      padding: 10px 0;
      font-size: 14px;
      font-weight:normal;
      border-bottom: 1px solid #ddd;
      & a{
        font-size: 12px;
        color: color(var(--color-secondary) tint(10%));
        float: right;
        &:hover{
          color: var(--color-primary);
        }
      }
    }
    & .modcon {
      padding:1rem;
    }
  }
  .modhead {
    & i.fa{
      margin-right: 4px;
    }
  }
  .mod-side-s1 {
    background: var(--panel-color);
    & .modhead {
      border-bottom: 1px solid #ddd;
      font-size: 0.875rem;
      font-weight:normal;
    }
    & .modcon {}
  }
  
  .mod-side-l1{
    background: var(--panel-color);
    & .modhead {
      margin: 0 1rem;
      padding: 10px 0;
      font-size: 14px;
      font-weight:normal;
      position:relative; 
      font-weight: 600;
      & a{
        font-weight: normal;
        float: right;
        font-size: 12px;
        color: var(--color-secondary);
        &:hover{
          color: var(--color-primary);
        }
      }
    }
    & .modcon {}
  }
  .mod-side-l2{
    background: var(--panel-color);
    border: none;
    & .modhead {
      font-size: 16px;
      font-weight:normal;
      padding: 10px 0;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
      margin: 0 1rem 0;
      & a{
        font-size: 12px;
        font-weight: normal;
        color: color(var(--color-secondary) tint(10%));
        float: right;
        &:hover{
          color: var(--color-primary);
        }
      }
      & span {
        cursor: pointer;
        padding: 2px 4px;
         font-size: 12px;
          font-weight: normal;
          color: var(--color-primary);
          &:hover{
            color: var(--color-primary);
          }
      }
    }
    & .modcon {
      padding: 0 10px 0;
      margin: 10px 0;
      min-height: 200px;
      max-height: 460px;
      overflow-y: hidden;
      transition: all 1s;
      &:hover{
        overflow-y: auto;
      }
    }
    & .modfooter{
      border-top: 1px solid #ddd;
      padding: 6px 10px 0;
    }
  }
</style>
