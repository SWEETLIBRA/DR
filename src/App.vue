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
    <transition name="fade">
      <ModalWindowAddPayment
      v-if="showModal"
      :settings="modalSettings"
    />
    </transition>
  </div>
</template>

<script>
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment'

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */'@/components/ModalWindowAddPayment')
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
