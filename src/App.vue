<template>
  <div id="app">
    <!-- <Calc /> -->
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <AddPaymentForm
        @add-payment="addPayment"
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

export default {
  name: 'App',
  components: {
    // Calc
    PaymentsDisplay, AddPaymentForm
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    fetchPaymentsData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '28.03.2020',
          category: 'Transport',
          value: 160
        },
        {
          date: '28.03.2020',
          category: 'Food',
          value: 162
        }
      ]
    },
    addPayment (data) {
      this.paymentsList.push(data)
    }
  },
  created () {
    this.paymentsList = this.fetchPaymentsData()
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
