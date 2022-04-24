<template>
  <div id="app">
    <container>
      <template v-slot:side>
        <side></side>
      </template>
      <template slot="content">
        <three-study></three-study>
      </template>
    </container>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import Side from './components/Side.vue'
import ThreeStudy from './components/ThreeStudy.vue'

export default {
  name: 'App',
  components: {
    Container,
    ThreeStudy,
    Side
  },
  data(){
    return {
    }
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
