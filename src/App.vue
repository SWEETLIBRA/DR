<template>
  <div id="app">
    <!-- <Calc /> -->
    <header>
      <div class="header">My personal costs: {{ totalCost }}</div>
    </header>
    <main>
      <AddPaymentForm
        @add-payment="addPayment"
        :categoryList="categoryList"
      />
      <PaymentsDisplay
        :paymentsList="paymentsList"
        show
      />
    </main>
  </div>
</template>

<script>
// import Calc from '@/components/Calc'
import PaymentsDisplay from '@/components/PaymentsDisplay'
import AddPaymentForm from '@/components/AddPaymentForm'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    // Calc
    PaymentsDisplay, AddPaymentForm
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      this.$store.commit('ADD_PAYMENT_DATA', data)
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
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
