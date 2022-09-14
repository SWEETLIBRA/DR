<template>
  <div>
    <div class="header">My personal costs: {{ totalCost }}</div>
    <AddPaymentForm
      @add-payment="addPayment"
      :categoryList="categoryList"
    />
    <PaymentsDisplay
      :paymentsList="paymentsList"
      show
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import AddPaymentForm from '@/components/AddPaymentForm'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay, AddPaymentForm
  },
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
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
