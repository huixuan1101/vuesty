<template>
  <div id="app">
    {{msg}}<br>
    <input type="text" v-model="title" @keydown="addData($event)">
    <br>
    true
    <ul>
      <li v-for="(item,key) in lists" :key="key" v-if="item.change">
        <input type="checkbox" v-model="item.change">{{item.title}}<button @click="delData(key)">del</button>
      </li>
    </ul>
    <br>
    false
    <ul>
      <li v-for="(item,key) in lists" :key="key" v-if="!item.change">
        <input type="checkbox" v-model="item.change">{{item.title}}<button @click="delData(key)">del</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      'msg':'todoList演示',
      'title':'',
      'lists':[],
      'datas':[],
    }
  },
  components: {
  
  },
  methods:{
    addData(e){
      if(e.keyCode == '13'){
        this.lists.push({'title':this.title,'change':true});
        this.title = '';
      }
    },
    delData(key){
      this.lists.splice(key,1);
    },
    getContent(id){
      //this.$router.push({path: 'content/'+id});
    }
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
