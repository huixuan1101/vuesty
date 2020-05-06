<template>
  <div id="app">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="formData.username" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">立即创建</el-button>
      </el-form-item>
    </el-form>


   <!-- <form action="" id="form">
      <input type="text" name="username"  placeholder="请输入昵称" v-model="formData.username">
      <input type="password" name="password" placeholder="请输入密码" v-model="formData.password">
      <input type="text" name="mobile" placeholder="请输入手机号" v-model="formData.mobile">
    </form>
    <span class="but" @click="onSubmit()">提交</span> -->

  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'App',
  data(){
    return {
      'msg':'form表单',
      'formData':{
          'username':'',
          'password':'',
          'mobile':''
      }
      
    }
  },
  components: {
  
  },
  methods:{
    onSubmit(){
    //   let formData = new FormData();
    //   console.log(this.formData);
    //   for(var key in this.formData){
    //       console.log(this.formData[key]);
    //     formData.append(key,this.formData[key]);
    //   }
 //console.log(formData);
        axios({
	    method:"post",
	    url:"/api/test/add",
	    headers: {
          //"Content-Type": "multipart/form-data"
          'Content-Type':'application/x-www-form-urlencoded'
        },
         transformRequest: [ (data) => {
            data = qs.stringify(data);
            return data;
          }],
	    withCredentials:true,
	    data:this.formData
	}).then((res)=>{
            console.log(res);
            if(res.data.code == '0000'){
              this.$router.push({path:'list'});
            }
        });

    },
    
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
