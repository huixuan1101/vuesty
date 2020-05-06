<template>
  <div id="app">
    <el-table :data="datas">
      <el-table-column prop="userId" label="用户id" width="140">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="mobile" label="手机号">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-view" size="medium"></el-button>
          <el-button @click="delData(scope.row.userId)" type="primary" icon="el-icon-delete" size="medium"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total" :page-size="pageSize" @current-change="listData($event)">
    </el-pagination>
    <!-- <ul>
      <li v-for="(item,key) in datas" :key="key">
        <router-link :to="'/content/'+item.userId">{{item.username}}</router-link>{{item.userId}}<el-button @click="delData(item.userId)">del</el-button>
      </li>
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'App',
  data(){
    return {
      'msg':'axios演示',
      'title':'',
      'lists':[],
      'datas':[],
      'mobile':'',
      'total':0,
      'pageSize':2
    }
  },
  components: {
    
  },
  methods:{
    handleClick(row) {
      this.$router.push({'path':'/content/'+row.userId});
      console.log(row);
    },
    getContent(id){
      //this.$router.push({path: 'content/'+id});
    },
    delData(id){
      axios({
          url: '/api/test/del',
          method: 'post',
          data: {
              id: id,
          },
          transformRequest: [ (data) => {
            data = qs.stringify(data);
            return data;
          }],
          transformResponse: [
            (response)=>{
              this.listData();
              response = JSON.parse(response);
              alert(response.msg);
            }
          ],
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
    },
    listData(page){
        axios.get('/api/test/setUserStatus?page='+page)
        .then((response)=> {
          //console.log(response);
          this.datas = response.data.data.list;
          this.total = response.data.data.totalRow;
        }).catch(function (error) {
      //console.log(error);
    });
    }
  },
  mounted(){
    this.listData(1);
  }
}
</script>

<style scoped>  
  .el-aside {
    color: #333;
  }

</style>
