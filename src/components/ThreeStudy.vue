<template>
  <div class="container" ref="container">
  </div>
</template>
<script>
export default {
  date(){
    return {
      clearFun: null
    }
  },
  methods:{
  },
  mounted(){
    this.$bus.$on('changePerform', (symbol)=>{
      import(`../js/${symbol}.js`).then((module)=>{
        this.clearFun && this.clearFun(this.$refs.container)
        this.clearFun = module.clear
        module.default(this.$refs.container)
      })
    })
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>