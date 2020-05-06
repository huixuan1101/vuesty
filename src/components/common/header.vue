<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="1"><router-link to="/home">home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/list">list</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/son">son</router-link></el-menu-item>
    </el-menu>
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
  
    a{
      display: block;
    }  
  
</style>
