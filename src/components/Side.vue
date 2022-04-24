<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="button" @click="changePerform(item.symbol)">
      {{item.symbol + ' ' + item.title}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {
          symbol:'1',
          title:'简单例子'
        }
      ]
    }
  },
  methods: {
    changePerform (symbol) {
      this.$bus.$emit('changePerform',symbol)
    }
  }
}
</script>
<style scoped>
.button {
  cursor: pointer;
}
</style>
