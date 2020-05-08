<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <router-link to="/list/form"><i class="el-icon-plus" style="margin-right: 15px;font-size:20px"></i></router-link>
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
