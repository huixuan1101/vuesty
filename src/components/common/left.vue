<template>
    <div id="app">
        <el-menu router :default-active="$route.path" :unique-opened="uniqueOpened">

            <el-submenu index="/home">
                <template slot="title"><i class="el-icon-message"></i>菜单</template>
                <el-menu-item-group>
                    <el-menu-item index="/home">home</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="/son">son</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="/list">
                    <template slot="title">list</template>
                    <el-menu-item index="/list">列表</el-menu-item>
                    <el-menu-item index="/todo">todolist</el-menu-item>
                </el-submenu>
            </el-submenu>

        </el-menu>
    </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return {
      'msg':'菜单',
      'lists':[],
      'uniqueOpened':true
    }
  },
  components: {
    
  },
  mounted(){
      this.lists = [
          {'title':'home','url':'/home','child':[{}]}
      ];
      console.log(this.$route);
  },

}
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
    .router-link-active {     
   text-decoration: none;
 }
 
 a {
   text-decoration: none; 
 }
</style>