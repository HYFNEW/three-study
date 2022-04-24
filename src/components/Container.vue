<template>
  <div class="container">
    <div class="side">
      <slot name="side"></slot>
    </div>
    <div class="main">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .container {
    display: flex;
  }
  .side {
    box-sizing: border-box;
    width: 20%;
    height: 100vh;
    border-right: 1px solid #fafafa;
    box-shadow: 0 0 3px 1px #eee;
  }
  .main {
    width: 80%;
    height: 100vh;
  }
</style>