<template>
  <article>
    <header>
      <h2 class="margin-t">招聘信息</h2>
    </header>
    <div class="article-section">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="职位名称"
          width="280">
          <template scope="scope">
           <a href="">
             {{ scope.row.name }}
           </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地点">
        </el-table-column>
        <el-table-column
          prop="num"
          label="招聘人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
      </el-table>
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


