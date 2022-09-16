<template>
  <div>
    <div class="header">My personal costs: {{ totalCost }}</div>
    <PaymentsDisplay
      :paymentsList="paymentsList"
      show
    />
    <button @click="addPayment">Add Payment</button>
    <button @click="authModal">Auth</button>
    <!-- <button @click="addPaymentModal">Add Payment</button>
    <button @click="authModal">Auth</button> -->
    <!-- <ModalWindowAddPayment
      v-if="showModal"
      @closeModal="closeModal"
      :settings="modalsettings"
    /> -->
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data: () => ({
    showModal: false,
    modalsettings: {}
  }),
  components: {
    PaymentsDisplay
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
    },
    authModal () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
    // console.log(this.$route)
  },
  mounted () {
    if (this.$route.params.payment) this.addPayment()
  }
}
</script>

<style scoped>

</style>
