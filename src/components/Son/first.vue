<template>
  <div id="son">
    {{msg}}<br>
    父级的title-----{{title}}
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      'msg':'第一个子组件',
    }
  },
  components: {
     
  },
  methods:{
    
  },
  props:['title']
}
</script>

<style>

</style>
