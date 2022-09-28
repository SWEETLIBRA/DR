<template>
  <v-app>
    <v-app-bar
      app
      color="indigo lighten-3"
      dark
    >
    <v-btn to="/dashboard" plain>Dashboard</v-btn>
    <v-btn to="/about" plain>About</v-btn>
    </v-app-bar>

    <v-main>
    <router-view/>
    </v-main>
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: { ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */'@/components/ModalWindowAddPayment') },
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
