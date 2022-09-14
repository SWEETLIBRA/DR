<template>
  <div id="app">
    <!-- <Calc /> -->
    <header class=" header">
      <nav>
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view />
      <!-- <button @click="goToPage">Dashboard</button> -->
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  methods: {
    // goToPage () {
    //   this.$router.push({
    //     name: 'addNewPaymentFood',
    //     query: {
    //       category: 'Food',
    //       value: 200
    //     }
    //   })
    // }
  },
  mounted () {
    // console.log(this.$router)
    // console.log(this.$route)
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

.header {
  padding: 5px;
}

.router-link {
  margin: 0 5px;
}
</style>
