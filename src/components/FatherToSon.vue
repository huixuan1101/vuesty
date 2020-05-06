<template>
  <div id="father">
    {{msg}}<br>
    title字段-------{{title}}<button @click="getData">改变</button>
    <first ref="first" :title="title"></first>
    <two ref="two" :title="title"></two>
  </div>
</template>

<script>
import first from './Son/first';
import two from './Son/two';

export default {
  name: 'App',
  data(){
    return {
      'msg':'父子之间的数据传值',
      'title':'父级title',
      'lists':[],
      'type':true,
    }
  },
  components: {
      'first':first,
      'two':two
  },
  methods:{
    getData(){
        if(this.type){
            this.title = this.$refs.first.msg;
        }else{
            this.title = this.$refs.two.msg;
        }
        this.type = !this.type;
    }
  }
}
</script>

<style>

</style>
