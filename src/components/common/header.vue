<template>
  <div id="app">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to="/list/axios">axios---列表</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/list/form">form---添加</router-link></el-dropdown-item>
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
