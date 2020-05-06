<template>
  <div id="app">
    {{msg}}-----{{username}}<br>
     <!-- <input type="text" v-model="mobile" @keydown="updateData($event)"> -->
    <el-input type="text" v-model="mobile" placeholder="请输入内容" @keyup.enter.native="updateData()">
      <!-- <el-button slot="append" icon="el-icon-search" @click="updateData($event)"></el-button> -->
    </el-input>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'App',
  data(){
    return {
      'msg':'详情页',
      'mobile':'',
      'username':'',
      'list':{},
      'id':''
    }
  },
  components: {
    
  },
  methods:{
    updateData(){
        axios({
          url: '/api/test/update',
          method: 'post',
          data: {
              id: this.id,
              mobile: this.mobile
          },
          transformRequest: [ (data) => {
            data = qs.stringify(data);
            return data;
          }],
          transformResponse: [
            (response)=>{
              console.log(response);
              response = JSON.parse(response);
              alert(response.msg);
            }
          ],
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
      
    },
    getInfo(){
      axios({
          url: '/api/test/getInfo',
          method: 'post',
          data: {
              id: this.id,
          },
          transformRequest: [ (data) => {
            data = qs.stringify(data);
            return data;
          }],
          transformResponse: [
            (response)=>{
              response = JSON.parse(response);
              this.list = response.data;
              console.log(this.list);
              this.mobile = this.list.mobile;
              this.username = this.list.username;
            }
          ],
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
    }
  },
  mounted(){
      console.log(this.$route);
      this.id = this.$route.params.id;
      this.getInfo();
      this.$store.commit("increment");
      console.log(this.$store.state.count);
  }

}
</script>

<style>

</style>
