<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/list/axios">axios---列表</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/list/form">form---添加</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main><router-view ></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'App',
  data(){
    return {
      'msg':'List演示',
    }
  },
  components: {
  
  },
  methods:{
    
  },
  mounted(){
    
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
