<template>
  <article>
    <header>
      <h2 class="margin-t">招聘信息</h2>
    </header>
    <div class="article-section">
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="您的称呼">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="留言内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="form.emil"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交留言</el-button>
          </el-form-item>
        </el-form>
      
      <div class="row margin-t text-center">
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>
  </article>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '贵州茅台酒厂（集团）习酒有限责任公司 招聘公告(已结束）',
          address: '上海市普陀区金沙江路 1518 弄',
          num: 1
        }, {
          date: '2016-05-04',
          name: '贵州茅台酒厂（集团）习酒有限责任公司 招聘公告(已结束）',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '贵州茅台酒厂（集团）习酒有限责任公司 招聘公告(已结束）',
          address: '上海市普陀区金沙江路 1519 弄',
          num: 3
        }, {
          date: '2016-05-03',
          name: '贵州茅台酒厂（集团）习酒有限责任公司 招聘公告(已结束）',
          address: '上海市普陀区金沙江路 1516 弄',
          num: 4
        }]
      }
    }
  }
</script>
<style>
.posi-name{
  font-size: 1rem;
}
.cell{
  padding: 4px 0;
}
</style>

