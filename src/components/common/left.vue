<template>
    <div id="app">
        <el-menu router :default-active="$route.path" :unique-opened="uniqueOpened">

            <el-submenu v-for="(list,key) in lists" :key="key" :index="list.url">
                <template slot="title"><i class="el-icon-message"></i>{{list.title}}</template>
                <el-menu-item-group v-for="(l,k) in list.children" :key="k" >
                    <el-menu-item v-if="l.children.length <= 0" :index="l.url">{{l.title}}</el-menu-item>
                
                    <el-submenu v-if="l.children.length > 0" :index="l.url">
                        <template slot="title">{{l.title}}</template>
                        <el-menu-item v-for="(ll,kk) in l.children" :key="kk" :index="ll.url">{{ll.title}}</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>


            <!-- <el-submenu index="/home">
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
            </el-submenu> -->

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
            {
                'title':'菜单',
                'url':'/home',
                'children':[
                    {
                        'title':'home',
                        'url':'/home',
                        'children':[]
                    },
                    {
                        'title':'son',
                        'url':'/son',
                        'children':[]
                    },
                    {
                        'title':'list',
                        'url':'/list',
                        'children':[
                            {
                                'title':'列表',
                                'url':'/list',
                            
                            },
                            {
                                'title':'todolist',
                                'url':'/todo',
                            
                            }
                        ]
                    }
                ]
            },
      ];
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