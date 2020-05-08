<template>
  <div id="app">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      'msg':'主结构',
    }
  },
  components: {
    
  }

}
</script>

<style scoped>
  
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-main {
    line-height: 60px;
  } 
  
</style>
