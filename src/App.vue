<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <v-menu></v-menu>
      </el-aside>


      <el-container>
        <el-header><v-header></v-header></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from  './components/common/header';
import Menu from  './components/common/left';
export default {
  name: 'App',
  data(){
    return {
      'msg':'主结构',
    }
  },
  components: {
    'v-header':Header,
    'v-menu':Menu
  }

}
</script>

<style scoped>
  body{
    margin: 0;
  }
 .el-header, .el-footer {
    background-color: #FFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .router-link-active {     
   text-decoration: none;
 }
 
 a {
   text-decoration: none; 
 }

</style>
