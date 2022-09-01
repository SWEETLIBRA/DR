<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Calc />
    <!-- <Calc v-if="!show" :key="2"/>
    <button @click="show = !show">click</button> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calc from '@/components/Calc'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    keyBoards: false
  }),
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
